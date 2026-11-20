import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ech11-u2-lesson-2-3",
  code: "2-3",
  title: "Metals and Industrial Evaluation",
  goal: "I CAN link the properties of metals and alloys to their structure and uses, and evaluate industrial processes using yield, cost and environmental impact.",
  standards: ["4CH1 1.40", "4CH1 1.41", "4CH1 1.42", "4CH1 2.6", "4CH1 3.6"],
  vocabulary: [
    { term: "Metallic bonding", definition: "The electrostatic attraction between positive metal ions and a sea of delocalised electrons." },
    { term: "Alloy", definition: "A mixture of a metal with one or more other elements, usually other metals, which is harder than the pure metal." },
    { term: "Malleable", definition: "Able to be hammered or bent into shape without breaking." },
    { term: "Ductile", definition: "Able to be drawn out into a wire." },
    { term: "Recycling", definition: "Collecting used materials and processing them to make new products, which saves raw materials and energy." },
    { term: "Atom economy", definition: "The mass of the desired product as a percentage of the total mass of all products." },
    { term: "Sustainable", definition: "Meeting present needs without using up resources or damaging the environment for future generations." },
  ],
  concepts: [
    {
      id: "ech11-u2-metals-alloys",
      title: "Metals, alloys and their properties",
      skill: "Explain the properties of metals and alloys in terms of structure and match properties to uses.",
      lesson: {
        sections: [
          {
            heading: "Structure and properties of metals",
            body: "A metal is a giant lattice of positive ions in a **sea of delocalised electrons**. The strong electrostatic attraction between the ions and electrons is **metallic bonding**.\n\n- **High melting and boiling points:** a lot of energy is needed to overcome the strong attraction\n- **Good electrical conductivity:** delocalised electrons are free to move and carry charge\n- **Good thermal conductivity:** the electrons and vibrating ions pass on energy\n- **Malleable and ductile:** layers of ions slide over one another while the electrons keep the structure bonded",
          },
          {
            heading: "Alloys",
            body: "In a pure metal the layers of identical ions slide easily, so pure metals are soft. An **alloy** contains atoms of different sizes, which **distort the regular layers** and make it harder for them to slide. Alloys are therefore **harder and stronger** than the pure metals.\n\n- **Steel:** iron with a small amount of carbon. Low-carbon (mild) steel is easily shaped and used for car bodies. High-carbon steel is hard and used for tools. Stainless steel (iron with chromium and nickel) resists rusting and is used for cutlery.\n- **Brass:** copper and zinc, used for taps and musical instruments.\n- **Aluminium alloys:** strong with low density, used for aircraft.",
          },
          {
            heading: "Choosing a metal for a use",
            body: "Uses depend on properties.\n\n- **Aluminium:** low density and resists corrosion (a thin oxide layer), used for aircraft and overhead cables\n- **Copper:** excellent electrical conductor and ductile, used for electrical wiring; unreactive, so used for water pipes\n- **Iron (as steel):** strong and cheap, used for construction\n\nWhen choosing, compare properties with cost and the effects on the environment. Recycling metals saves ore and energy and reduces landfill, but collection and sorting cost money.",
          },
        ],
        keyFormulas: [
          { name: "Metallic bonding", statement: "Positive ions in a sea of delocalised electrons" },
          { name: "Why alloys are harder", statement: "Different-sized atoms disrupt the layers so they cannot slide" },
          { name: "Steel", statement: "Iron + carbon (and sometimes other metals)" },
          { name: "Brass", statement: "Copper + zinc" },
        ],
        workedExample: {
          problem: "Explain why copper is used for electrical wires.",
          solution: "Copper has delocalised electrons that are free to move through the lattice, so it is a good electrical conductor. It is also ductile, so it can be drawn into wires, and it does not corrode easily.",
        },
      },
      questions: [
        {
          id: "ech11-u2-metals-alloys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an alloy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A compound formed when a metal reacts with oxygen" },
              { id: "b", text: "A mixture of a metal with one or more other elements" },
              { id: "c", text: "A pure metal that has been heated and cooled quickly" },
              { id: "d", text: "A metal that has been coated with a layer of zinc" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alloy", statement: "An alloy is a mixture of a metal with one or more other elements, usually other metals." },
            ],
            steps: [
              { reasoning: "An alloy is a mixture, not a compound. It is made by mixing the molten metals or elements together.", working: "\\text{metal} + \\text{other elements}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a), which describes a metal oxide.", "Choosing (d), which describes galvanising."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u2-metals-alloys-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why pure iron is soft but steel, an alloy of iron and carbon, is hard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Structure of alloys", statement: "Atoms of a different size in an alloy distort the regular layers, so the layers cannot slide over each other easily." },
            ],
            steps: [
              { reasoning: "In pure iron all the atoms are the same size and arranged in regular layers.", marks: 1, markCode: "B" },
              { reasoning: "The layers can slide over each other easily, so pure iron is soft.", marks: 1, markCode: "B" },
              { reasoning: "In steel the carbon atoms are a different size and distort the layers, so the layers cannot slide, making steel harder.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Pure iron: regular layers slide easily. Steel: carbon atoms of a different size disrupt the layers so they cannot slide.",
            commonErrors: ["Saying carbon forms a covalent bond with iron.", "Saying there are no delocalised electrons in an alloy."],
            examinerNote: "Allow 'ions' for 'atoms' (oe). Reject 'the carbon atoms are bigger' as a complete answer without reference to layers not sliding.",
          },
        },
        {
          id: "ech11-u2-metals-alloys-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Brass is an alloy of copper and zinc containing $70\\%$ copper by mass. A brass tap has a mass of $600\\text{ g}$. Calculate the mass of zinc in the tap, and explain why brass is used for taps instead of pure zinc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage composition", statement: "$\\text{mass of component} = \\text{percentage} \\times \\text{total mass}$" },
              { kind: "property", name: "Alloys", statement: "Alloys are harder and stronger than pure metals and can resist corrosion." },
            ],
            steps: [
              { reasoning: "Zinc is the remaining percentage ($100\\% - 70\\%$).", working: "100 - 70 = 30\\%", marks: 1, markCode: "M" },
              { reasoning: "Find $30\\%$ of the total mass.", working: "0.30 \\times 600 = 180\\text{ g}", marks: 1, markCode: "A" },
              { reasoning: "Brass is harder and stronger than pure zinc, so it keeps its shape when used.", marks: 1, markCode: "B" },
              { reasoning: "Brass resists corrosion by water and can be cast into shape easily (oe).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$180\\text{ g}$ of zinc; brass is harder and more resistant to corrosion than zinc.",
            commonErrors: ["Calculating $70\\%$ of 600 g, giving 420 g, which is the mass of copper.", "Saying brass is used because it is a pure metal."],
            examinerNote: "M1 for $100 - 70$ or $0.7\\times600$. A1 cao. Allow any two sensible properties for the last two marks, for example harder, stronger, resists corrosion, easily shaped.",
          },
        },
        {
          id: "ech11-u2-metals-alloys-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company chooses a metal for an overhead power cable. The table shows data for three metals.\n\n| Metal | Density ($\\text{g/cm}^3$) | Electrical conductivity (relative) | Cost per tonne (£) |\n| --- | --- | --- | --- |\n| Copper | 8.9 | 100 | 6000 |\n| Aluminium | 2.7 | 61 | 1800 |\n| Iron | 7.9 | 17 | 300 |",
          parts: [
            { label: "a", prompt: "Explain, in terms of structure, why metals conduct electricity.", marks: 2 },
            { label: "b", prompt: "Calculate how many times more dense copper is than aluminium. Give your answer to 2 significant figures.", marks: 2 },
            { label: "c", prompt: "Calculate the mass, in grams, of a block of aluminium of volume $50\\text{ cm}^3$.", marks: 1 },
            { label: "d", prompt: "Evaluate the use of aluminium rather than copper for overhead cables. Use the data in your answer.", marks: 3 },
            { label: "e", prompt: "Suggest why iron is not used for the cables, even though it is the cheapest.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Metallic conduction", statement: "Delocalised electrons move through the lattice and carry charge." },
              { kind: "formula", name: "Density", statement: "$\\text{mass} = \\text{density} \\times \\text{volume}$" },
            ],
            steps: [
              { part: "a", reasoning: "Metals contain delocalised electrons that are free to move.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "When a voltage is applied the electrons flow through the metal and carry the electric charge.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the density of copper by the density of aluminium.", working: "\\frac{8.9}{2.7}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round to 2 significant figures.", working: "3.296\\ldots \\approx 3.3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mass is density multiplied by volume.", working: "2.7 \\times 50 = 135\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Aluminium is much less dense, so the cables are lighter and need less support.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Aluminium is cheaper per tonne (£1800 compared with £6000).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "But its conductivity is lower (61 compared with 100), so a thicker cable is needed to carry the same current; overall aluminium is a good choice.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Iron has a much lower electrical conductivity (17) and is dense and rusts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) delocalised electrons carry charge (b) $3.3$ (c) $135\\text{ g}$ (d) aluminium lighter and cheaper, lower conductivity so thicker cable (e) iron is a poor conductor",
            commonErrors: ["Dividing the other way round, giving 0.30.", "Saying the ions carry the current in a metal.", "Giving the density in the wrong units for part (c)."],
            examinerNote: "In (b) allow 3.296 or 3.3. In (d) a judgement supported by two pieces of data is needed for full marks. Allow ecf in (c) only if the density is read correctly.",
          },
        },
      ],
    },
    {
      id: "ech11-u2-evaluating-industrial-processes",
      title: "Evaluating industrial processes",
      skill: "Evaluate industrial processes using yield, rate, atom economy, energy use, cost and environmental impact.",
      lesson: {
        sections: [
          {
            heading: "Factors in choosing a process",
            body: "Industrial chemists choose a process by comparing:\n\n- **Yield and rate:** a high yield at a fast rate gives more product per hour\n- **Raw materials and cost:** availability and price of reactants, plus energy, labour and equipment\n- **Energy use:** high temperatures and pressures are expensive; electrolysis uses a lot of electricity\n- **Waste and pollution:** by-products, greenhouse gases, toxic gases and how waste is disposed of\n- **Recycling and sustainability:** whether raw materials are finite and whether the product can be recycled",
          },
          {
            heading: "Atom economy and percentage yield",
            body: "**Atom economy** measures how much of the mass of the reactants ends up in the desired product:\n\n$$\\text{atom economy} = \\frac{M_r \\text{ of desired product}}{\\text{sum of } M_r \\text{ of all products}} \\times 100\\%$$\n\nA high atom economy means little waste. **Percentage yield** compares the mass actually obtained with the maximum possible, so it measures how efficient the reaction was in practice. A reaction can have a high atom economy but a low percentage yield, and the other way round.",
          },
          {
            heading: "Recycling and extraction",
            body: "Recycling aluminium needs only about $5\\%$ of the energy used to extract it from bauxite by electrolysis, because the oxide does not have to be electrolysed again. Recycling iron and steel reduces the need for ore, coke and limestone and reduces the quarrying and the carbon dioxide produced.\n\nTo evaluate, give advantages **and** disadvantages and then reach a **judgement** supported by evidence from the data.",
          },
        ],
        keyFormulas: [
          { name: "Atom economy", statement: "$\\frac{M_r \\text{ of desired product}}{\\text{sum of } M_r \\text{ of all products}} \\times 100\\%$" },
          { name: "Percentage yield", statement: "$\\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$" },
          { name: "Evaluation", statement: "Advantage, disadvantage, then a justified conclusion" },
        ],
        workedExample: {
          problem: "Calculate the atom economy for making iron: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. ($A_r$: Fe = 56, C = 12, O = 16.) Give your answer to 3 significant figures.",
          solution: "Desired product: $2\\text{Fe} = 112$. Total products: $112 + 3\\times44 = 112 + 132 = 244$. Atom economy $= \\frac{112}{244}\\times100 = 45.9\\%$.",
        },
      },
      questions: [
        {
          id: "ech11-u2-evaluating-industrial-processes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an advantage of recycling aluminium cans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses much less energy than extracting aluminium from bauxite" },
              { id: "b", text: "It produces more carbon dioxide than extraction" },
              { id: "c", text: "It increases the amount of ore that must be mined" },
              { id: "d", text: "It makes the aluminium more reactive" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Recycling", statement: "Recycling metals saves energy and ore, and reduces waste and pollution." },
            ],
            steps: [
              { reasoning: "Recycling avoids the electrolysis of aluminium oxide, which uses a large amount of electricity.", working: "\\text{less energy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (b) or (c), which are the opposite of the real effect."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ech11-u2-evaluating-industrial-processes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the atom economy for the production of aluminium in the reaction $2\\text{Al}_2\\text{O}_3 \\rightarrow 4\\text{Al} + 3\\text{O}_2$. ($A_r$: Al = 27, O = 16.) Give your answer to the nearest whole number, in $\\%$.",
          response: { type: "numeric", parts: [{ label: "Atom economy", answer: 53, unit: "%", tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "$\\frac{M_r \\text{ of desired product}}{\\text{sum of } M_r \\text{ of all products}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Mass of desired product: 4 aluminium. Mass of all products: 4 Al and 3 $\\text{O}_2$.", working: "4\\times27 = 108,\\quad 3\\times32 = 96,\\quad 108 + 96 = 204", marks: 1, markCode: "M" },
              { reasoning: "Divide the desired product by the total.", working: "\\frac{108}{204}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round.", working: "52.9\\ldots \\approx 53\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$53\\%$",
            commonErrors: ["Using the mass of only one oxygen atom for $\\text{O}_2$ (16 instead of 32), which gives the wrong total.", "Using 27 for aluminium instead of $4\\times27$, ignoring the equation coefficients."],
            examinerNote: "M1 for 108 and 204. M1 for $108/204$. A1 for 53 (allow 52.9).",
          },
        },
        {
          id: "ech11-u2-evaluating-industrial-processes-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A factory extracts $1.0\\text{ tonne}$ of aluminium from bauxite using electrolysis, which needs $15\\,000\\text{ kWh}$ of electricity. Recycling $1.0\\text{ tonne}$ of aluminium needs $750\\text{ kWh}$. Calculate the percentage of the energy saved by recycling, and evaluate recycling as a way of producing aluminium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage saving", statement: "$\\frac{\\text{energy saved}}{\\text{original energy}} \\times 100\\%$" },
              { kind: "principle", name: "Evaluation", statement: "A valid evaluation gives advantages and disadvantages and a supported judgement." },
            ],
            steps: [
              { reasoning: "Energy saved is the difference between extraction and recycling.", working: "15000 - 750 = 14250\\text{ kWh}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the original energy and multiply by 100.", working: "\\frac{14250}{15000}\\times100 = 95\\%", marks: 1, markCode: "A" },
              { reasoning: "Advantage: a large energy saving (95%), so lower cost and fewer carbon dioxide emissions from power stations.", marks: 1, markCode: "B" },
              { reasoning: "Also saves bauxite and avoids mining and waste, and reduces landfill.", marks: 1, markCode: "B" },
              { reasoning: "Disadvantage: collecting and sorting scrap costs money and not all aluminium is recycled; judgement: recycling is clearly better where scrap is available.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$95\\%$ energy saved. Recycling saves energy, ore and reduces pollution, although collection and sorting cost money.",
            commonErrors: ["Dividing by 750, giving 1900%.", "Calculating the percentage of energy used for recycling (5%) instead of the saving."],
            examinerNote: "M1 for 14250 or $750/15000$. A1 for 95. Allow ecf. For the last three marks allow any sensible advantage, advantage or disadvantage plus a reasoned judgement.",
          },
        },
        {
          id: "ech11-u2-evaluating-industrial-processes-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company compares two ways of obtaining copper.\n\n- **Process A:** heating copper(II) oxide with carbon, $2\\text{CuO} + \\text{C} \\rightarrow 2\\text{Cu} + \\text{CO}_2$.\n- **Process B:** electrolysis of copper(II) sulfate solution, with copper deposited at the cathode.\n\n($A_r$: Cu = 63.5, C = 12, O = 16.)",
          parts: [
            { label: "a", prompt: "Calculate the atom economy of Process A for copper. Give your answer to 3 significant figures, in $\\%$.", marks: 3 },
            { label: "b", prompt: "In an experiment, $39.75\\text{ g}$ of copper(II) oxide ($M_r = 79.5$) forms $27.9\\text{ g}$ of copper. Calculate the percentage yield. Give your answer to the nearest whole number, in $\\%$.", marks: 3 },
            { label: "c", prompt: "Write the half equation for the formation of copper at the cathode in Process B.", marks: 1 },
            { label: "d", prompt: "Evaluate Process A and Process B for producing copper in industry.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Atom economy", statement: "$\\frac{M_r \\text{ of desired product}}{\\text{sum of } M_r \\text{ of all products}} \\times 100\\%$" },
              { kind: "formula", name: "Percentage yield", statement: "$\\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Desired product: $2\\text{Cu} = 127$. All products: $127 + \\text{CO}_2 (44) = 171$.", working: "2\\times63.5 = 127,\\quad 127 + 44 = 171", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide desired product by total products.", working: "\\frac{127}{171}\\times100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 significant figures.", working: "74.27\\ldots \\approx 74.3\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Moles of CuO, which equal the moles of Cu (ratio 1 : 1).", working: "\\frac{39.75}{79.5} = 0.5\\text{ mol}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Theoretical mass of copper.", working: "0.5 \\times 63.5 = 31.75\\text{ g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Percentage yield.", working: "\\frac{27.9}{31.75}\\times100 = 87.9\\ldots \\approx 88\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Copper ions gain two electrons.", working: "\\text{Cu}^{2+} + 2\\text{e}^- \\rightarrow \\text{Cu}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Process A: simpler and cheaper equipment and a high temperature but it releases carbon dioxide, a greenhouse gas, and the copper is not very pure.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Process B: gives very pure copper and no carbon dioxide at the site, but uses a lot of electricity, which is costly.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A supported judgement, for example B is better where high purity is needed, such as for electrical wiring, if the electricity comes from a renewable source.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $74.3\\%$ (b) $88\\%$ (c) $\\text{Cu}^{2+} + 2\\text{e}^- \\rightarrow \\text{Cu}$ (d) A cheaper but releases CO$_2$; B pure but needs much electricity; justified judgement.",
            commonErrors: ["Using one copper atom in part (a), giving 63.5/107.5.", "Dividing the theoretical mass by the actual mass in part (b).", "Writing the half equation with electrons on the right-hand side."],
            examinerNote: "In (a) allow 74.3 or 74.27. In (b) allow 87 to 88, ecf. In (d) the judgement must be supported by a reason.",
          },
        },
      ],
    },
  ],
};
