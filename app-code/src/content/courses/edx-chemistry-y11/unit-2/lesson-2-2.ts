import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ech11-u2-lesson-2-2",
  code: "2-2",
  title: "Industrial Processes",
  goal: "I CAN describe how aluminium and iron are extracted, and how fertilisers and sulfuric acid are made, including the key calculations.",
  standards: ["4CH1 1.56", "4CH1 2.9", "4CH1 2.10", "4CH1 3.4", "4CH1 3.5"],
  vocabulary: [
    { term: "Ore", definition: "A rock containing enough of a metal compound for the metal to be extracted economically." },
    { term: "Cryolite", definition: "A compound of aluminium, sodium and fluorine in which aluminium oxide is dissolved to lower the temperature needed for electrolysis." },
    { term: "Blast furnace", definition: "A tall furnace in which iron ore is reduced to iron by carbon monoxide, using coke, limestone and hot air." },
    { term: "Slag", definition: "Calcium silicate, formed from limestone and silicon dioxide impurities in the blast furnace, which floats on the molten iron." },
    { term: "Fertiliser", definition: "A substance added to soil to supply the elements, mainly nitrogen, phosphorus and potassium, that plants need to grow." },
    { term: "Contact process", definition: "The industrial manufacture of sulfuric acid, using a vanadium(V) oxide catalyst to convert sulfur dioxide into sulfur trioxide." },
    { term: "Percentage yield", definition: "The actual mass of product divided by the theoretical mass, multiplied by 100." },
  ],
  concepts: [
    {
      id: "ech11-u2-extraction-aluminium-iron",
      title: "Extraction of aluminium and iron",
      skill: "Describe the extraction of aluminium by electrolysis and iron in the blast furnace, and calculate masses of metal produced.",
      lesson: {
        sections: [
          {
            heading: "Extracting aluminium by electrolysis",
            body: "Aluminium is more reactive than carbon, so it cannot be extracted from its ore by heating with carbon. It is extracted by **electrolysis** of molten **aluminium oxide**, $\\text{Al}_2\\text{O}_3$, purified from the ore bauxite.\n\nAluminium oxide melts at about $2070^\\circ\\text{C}$, which would be very expensive to reach. It is dissolved in molten **cryolite**, which lowers the operating temperature to about $950^\\circ\\text{C}$ and saves energy.\n\n- cathode (graphite lining of the cell): $\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}$ (molten aluminium sinks and is tapped off)\n- anode (graphite blocks): $2\\text{O}^{2-} \\rightarrow \\text{O}_2 + 4\\text{e}^-$\n\nThe oxygen reacts with the hot graphite anodes, $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$, so the anodes burn away and must be replaced regularly. The overall reaction is $2\\text{Al}_2\\text{O}_3 \\rightarrow 4\\text{Al} + 3\\text{O}_2$.",
          },
          {
            heading: "Extracting iron in the blast furnace",
            body: "Iron is less reactive than carbon, so it is extracted by **reduction** with carbon. The raw materials are **haematite** (iron(III) oxide, $\\text{Fe}_2\\text{O}_3$), **coke** (carbon), **limestone** ($\\text{CaCO}_3$) and hot air.\n\n- coke burns: $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$\n- carbon dioxide is reduced: $\\text{CO}_2 + \\text{C} \\rightarrow 2\\text{CO}$\n- iron(III) oxide is reduced: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$\n\nLimestone removes acidic impurities: $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$, then $\\text{CaO} + \\text{SiO}_2 \\rightarrow \\text{CaSiO}_3$ (slag). Molten iron and slag collect at the bottom, and the less dense slag floats on top.",
          },
          {
            heading: "Calculating the mass of metal",
            body: "Use the balanced equation to find the mole ratio, then scale.\n\n1. Calculate $M_r$ of the compound.\n2. Convert the mass to moles: $\\text{moles} = \\frac{\\text{mass}}{M_r}$.\n3. Use the ratio from the equation.\n4. Convert back to mass: $\\text{mass} = \\text{moles} \\times A_r$.\n\nA quick shortcut is to compare reacting masses directly, for example $160\\text{ g}$ of $\\text{Fe}_2\\text{O}_3$ contains $2 \\times 56 = 112\\text{ g}$ of iron.",
          },
        ],
        keyFormulas: [
          { name: "Aluminium cathode", statement: "$\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}$" },
          { name: "Aluminium anode", statement: "$2\\text{O}^{2-} \\rightarrow \\text{O}_2 + 4\\text{e}^-$" },
          { name: "Blast furnace reduction", statement: "$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$" },
          { name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass (g)}}{M_r}$" },
        ],
        workedExample: {
          problem: "Calculate the mass of iron produced from $320\\text{ kg}$ of iron(III) oxide. ($A_r$: Fe = 56, O = 16.)",
          solution: "$M_r(\\text{Fe}_2\\text{O}_3) = 2\\times56 + 3\\times16 = 160$. The equation gives $1$ mol $\\text{Fe}_2\\text{O}_3 \\rightarrow 2$ mol Fe, so $160\\text{ kg} \\rightarrow 112\\text{ kg}$ Fe. For $320\\text{ kg}$: $320 \\div 160 = 2$, so mass of iron $= 2 \\times 112 = 224\\text{ kg}$.",
        },
      },
      questions: [
        {
          id: "ech11-u2-extraction-aluminium-iron-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is aluminium oxide dissolved in molten cryolite before it is electrolysed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To lower the temperature needed to melt the electrolyte" },
              { id: "b", text: "To react with the oxygen produced at the anode" },
              { id: "c", text: "To make the aluminium purer by removing impurities" },
              { id: "d", text: "To increase the melting point of the electrolyte" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Role of cryolite", statement: "Dissolving aluminium oxide in molten cryolite lowers the temperature of the electrolyte, which saves energy and cost." },
            ],
            steps: [
              { reasoning: "Aluminium oxide has a very high melting point. Cryolite allows the electrolyte to be molten at about $950^\\circ\\text{C}$.", working: "\\text{lower melting temperature}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (b): it is the graphite anode, not cryolite, that reacts with oxygen.", "Choosing (d): the mixture melts at a lower temperature, not a higher one."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ech11-u2-extraction-aluminium-iron-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Aluminium is extracted by electrolysis of molten aluminium oxide: $2\\text{Al}_2\\text{O}_3 \\rightarrow 4\\text{Al} + 3\\text{O}_2$. Calculate the mass of aluminium produced from $51\\text{ g}$ of aluminium oxide. ($A_r$: Al = 27, O = 16.) Give your answer in grams.",
          response: { type: "numeric", parts: [{ label: "Mass of aluminium", answer: 27, unit: "g", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
              { kind: "law", name: "Conservation of mass", statement: "The balanced equation gives the ratio of moles of reactant to product." },
            ],
            steps: [
              { reasoning: "Find $M_r$ of $\\text{Al}_2\\text{O}_3$ and the moles of oxide.", working: "M_r = 2\\times27 + 3\\times16 = 102,\\quad n = \\frac{51}{102} = 0.5\\text{ mol}", marks: 1, markCode: "M" },
              { reasoning: "The equation shows 2 mol $\\text{Al}_2\\text{O}_3$ gives 4 mol Al, so moles of Al is double the moles of oxide.", working: "0.5 \\times 2 = 1.0\\text{ mol Al}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by $A_r$ of aluminium.", working: "1.0 \\times 27 = 27\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27\\text{ g}$",
            commonErrors: ["Using the ratio 2:4 the wrong way round and getting 0.25 mol, which gives 6.75 g.", "Using $M_r$ = 43 (adding Al + O) for aluminium oxide."],
            examinerNote: "M1 for $M_r = 102$ and moles. M1 for ratio. A1 cao with unit. Allow ecf from wrong $M_r$.",
          },
        },
        {
          id: "ech11-u2-extraction-aluminium-iron-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In the blast furnace, iron(III) oxide is reduced by carbon monoxide: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. Calculate the mass of carbon monoxide needed to reduce $800\\text{ kg}$ of iron(III) oxide completely. ($A_r$: Fe = 56, O = 16, C = 12.) Give your answer in kilograms.",
          response: { type: "numeric", parts: [{ label: "Mass of carbon monoxide", answer: 420, unit: "kg", tolerance: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$" },
            ],
            steps: [
              { reasoning: "$M_r$ of $\\text{Fe}_2\\text{O}_3 = 160$ and $M_r$ of $\\text{CO} = 28$.", working: "M_r(\\text{Fe}_2\\text{O}_3) = 2\\times56+3\\times16 = 160,\\quad M_r(\\text{CO}) = 28", marks: 1, markCode: "M" },
              { reasoning: "Moles of oxide in units of kmol (mass in kg divided by $M_r$).", working: "\\frac{800}{160} = 5\\text{ kmol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio $\\text{Fe}_2\\text{O}_3 : \\text{CO}$ is 1 : 3.", working: "5 \\times 3 = 15\\text{ kmol CO}", marks: 1, markCode: "M" },
              { reasoning: "Convert to mass.", working: "15 \\times 28 = 420\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$420\\text{ kg}$",
            commonErrors: ["Forgetting the 1 : 3 ratio and giving 140 kg.", "Using $M_r$ of CO as 44."],
            examinerNote: "M1 both $M_r$ values. M1 moles of oxide. M1 ratio $\\times3$. A1 cao. Allow ecf.",
          },
        },
        {
          id: "ech11-u2-extraction-aluminium-iron-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An aluminium smelter electrolyses molten aluminium oxide dissolved in cryolite, using graphite anodes. The overall equation is $2\\text{Al}_2\\text{O}_3 \\rightarrow 4\\text{Al} + 3\\text{O}_2$. ($A_r$: Al = 27, O = 16. Molar volume of a gas at room temperature and pressure = $24\\text{ dm}^3$.)",
          parts: [
            { label: "a", prompt: "Explain why aluminium cannot be extracted by heating its oxide with carbon.", marks: 1 },
            { label: "b", prompt: "Write the half equation for the reaction at the cathode.", marks: 1 },
            { label: "c", prompt: "Explain why the graphite anodes have to be replaced regularly.", marks: 2 },
            { label: "d", prompt: "Calculate the mass of aluminium formed from $510\\text{ g}$ of aluminium oxide. Give your answer in grams.", marks: 3 },
            { label: "e", prompt: "Calculate the volume of oxygen formed, at room temperature and pressure, from the same $510\\text{ g}$ of aluminium oxide. Give your answer in $\\text{dm}^3$.", marks: 3 },
          ],
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity series", statement: "A metal can be extracted by carbon only if it is less reactive than carbon. Aluminium is more reactive than carbon." },
              { kind: "formula", name: "Moles and gas volume", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$ and $\\text{volume} = \\text{moles} \\times 24\\text{ dm}^3$" },
            ],
            steps: [
              { part: "a", reasoning: "Aluminium is more reactive than carbon, so carbon cannot displace it from its oxide.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Aluminium ions gain three electrons at the cathode.", working: "\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Oxygen forms at the anodes and reacts with the hot graphite (carbon), producing carbon dioxide.", working: "\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So the anodes are gradually burned away (they get smaller).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Moles of oxide: $M_r = 102$.", working: "\\frac{510}{102} = 5\\text{ mol}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "2 mol $\\text{Al}_2\\text{O}_3$ gives 4 mol Al, so double.", working: "5 \\times 2 = 10\\text{ mol Al}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to mass.", working: "10 \\times 27 = 270\\text{ g}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "2 mol $\\text{Al}_2\\text{O}_3$ gives 3 mol $\\text{O}_2$.", working: "5 \\times \\frac{3}{2} = 7.5\\text{ mol}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Multiply by the molar volume.", working: "7.5 \\times 24", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "180\\text{ dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Aluminium is more reactive than carbon (b) $\\text{Al}^{3+} + 3\\text{e}^- \\rightarrow \\text{Al}$ (c) oxygen reacts with hot carbon forming CO$_2$ so the anodes burn away (d) $270\\text{ g}$ (e) $180\\text{ dm}^3$",
            commonErrors: ["Using the ratio 2 : 2 instead of 2 : 3 for oxygen, giving 5 mol and $120\\text{ dm}^3$.", "Using the 4 mol ratio for aluminium rather than the 3 mol for oxygen, giving 10 mol and $240\\text{ dm}^3$.", "Writing the cathode equation without electrons."],
            examinerNote: "In (a) allow 'carbon is less reactive than aluminium'. In (b) allow multiples. Allow ecf in (e) from the moles of oxide in (d).",
          },
        },
      ],
    },
    {
      id: "ech11-u2-fertilisers-contact-process",
      title: "Fertilisers and the Contact process",
      skill: "Explain how nitrogen fertilisers are made, calculate percentage nitrogen and yield, and describe the Contact process and its conditions.",
      lesson: {
        sections: [
          {
            heading: "Fertilisers",
            body: "Plants need nitrogen (N), phosphorus (P) and potassium (K). **NPK fertilisers** contain compounds of all three. Nitrogen compounds are made from ammonia, which is neutralised by an acid:\n\n$$\\text{NH}_3 + \\text{HNO}_3 \\rightarrow \\text{NH}_4\\text{NO}_3$$\n\n$$2\\text{NH}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow (\\text{NH}_4)_2\\text{SO}_4$$\n\nThe **percentage of nitrogen** in a fertiliser is $\\frac{\\text{mass of nitrogen in one formula unit}}{M_r} \\times 100\\%$. A higher percentage means more nitrogen per kilogram of fertiliser. Excess fertiliser washed into rivers causes eutrophication.",
          },
          {
            heading: "The Contact process",
            body: "Sulfuric acid is made in three main stages:\n\n1. Burn sulfur in air: $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$\n2. Convert sulfur dioxide to sulfur trioxide in a reversible reaction: $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$ (the forward reaction is exothermic)\n3. Absorb $\\text{SO}_3$ in concentrated sulfuric acid to make oleum, $\\text{SO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{H}_2\\text{S}_2\\text{O}_7$, then add water: $\\text{H}_2\\text{S}_2\\text{O}_7 + \\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4$\n\n$\\text{SO}_3$ is not added directly to water because the reaction is violent and produces a fog of acid.",
          },
          {
            heading: "Conditions: a compromise",
            body: "Conditions for stage 2 are a temperature of about $450^\\circ\\text{C}$, a pressure of 1 to 2 atmospheres and a **vanadium(V) oxide**, $\\text{V}_2\\text{O}_5$, catalyst.\n\n- The reaction is exothermic, so a **lower** temperature gives a higher yield, but the rate would be too slow. $450^\\circ\\text{C}$ is a compromise between yield and rate.\n- There are fewer gas molecules on the right (2 compared with 3), so high pressure would increase the yield, but the yield is already about $99\\%$ at low pressure, and high pressure is expensive and dangerous.\n- The catalyst speeds up the reaction but does not change the yield.\n\n$$\\text{percentage yield} = \\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$$",
          },
        ],
        keyFormulas: [
          { name: "Ammonium nitrate", statement: "$\\text{NH}_3 + \\text{HNO}_3 \\rightarrow \\text{NH}_4\\text{NO}_3$" },
          { name: "Contact process equilibrium", statement: "$2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$" },
          { name: "Percentage of an element", statement: "$\\frac{\\text{number of atoms} \\times A_r}{M_r} \\times 100\\%$" },
          { name: "Percentage yield", statement: "$\\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "Calculate the percentage of nitrogen in ammonium sulfate, $(\\text{NH}_4)_2\\text{SO}_4$, to 3 significant figures. ($A_r$: H = 1, N = 14, O = 16, S = 32.)",
          solution: "$M_r = 2\\times(14 + 4\\times1) + 32 + 4\\times16 = 36 + 32 + 64 = 132$. Nitrogen: $2\\times14 = 28$. Percentage $= \\frac{28}{132}\\times100 = 21.2\\%$.",
        },
      },
      questions: [
        {
          id: "ech11-u2-fertilisers-contact-process-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which catalyst is used in the Contact process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Vanadium(V) oxide" },
              { id: "c", text: "Platinum" },
              { id: "d", text: "Manganese(IV) oxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contact process catalyst", statement: "The Contact process uses vanadium(V) oxide, $\\text{V}_2\\text{O}_5$, as the catalyst for converting $\\text{SO}_2$ to $\\text{SO}_3$." },
            ],
            steps: [
              { reasoning: "Iron is the catalyst in the Haber process; vanadium(V) oxide is used in the Contact process.", working: "\\text{V}_2\\text{O}_5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Vanadium(V) oxide",
            commonErrors: ["Choosing iron, the Haber process catalyst."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech11-u2-fertilisers-contact-process-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the percentage by mass of nitrogen in ammonium nitrate, $\\text{NH}_4\\text{NO}_3$. ($A_r$: H = 1, N = 14, O = 16.) Give your answer in $\\%$.",
          response: { type: "numeric", parts: [{ label: "Percentage of nitrogen", answer: 35, unit: "%", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of an element", statement: "$\\frac{\\text{total } A_r \\text{ of the element}}{M_r} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Calculate $M_r$ of ammonium nitrate (2 nitrogen atoms, 4 hydrogen, 3 oxygen).", working: "M_r = 2\\times14 + 4\\times1 + 3\\times16 = 80", marks: 1, markCode: "M" },
              { reasoning: "Divide the mass of nitrogen by the $M_r$.", working: "\\frac{28}{80}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "35\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35\\%$",
            commonErrors: ["Counting only one nitrogen atom, giving $\\frac{14}{80} = 17.5\\%$.", "Using $M_r = 63$ (nitric acid) or forgetting the hydrogen atoms."],
            examinerNote: "M1 for $M_r = 80$. M1 for $28/80$. A1 for 35. Allow ecf from a wrong $M_r$.",
          },
        },
        {
          id: "ech11-u2-fertilisers-contact-process-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Ammonia reacts with nitric acid to make ammonium nitrate: $\\text{NH}_3 + \\text{HNO}_3 \\rightarrow \\text{NH}_4\\text{NO}_3$. A farmer's supplier reacts $8.5\\text{ kg}$ of ammonia with excess nitric acid. Calculate the mass of ammonium nitrate that can be made. ($A_r$: H = 1, N = 14, O = 16.) Give your answer in kilograms.",
          response: { type: "numeric", parts: [{ label: "Mass of ammonium nitrate", answer: 40, unit: "kg", tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Moles", statement: "$\\text{moles} = \\frac{\\text{mass}}{M_r}$ (in kmol if the mass is in kg)" },
            ],
            steps: [
              { reasoning: "$M_r(\\text{NH}_3) = 17$ and $M_r(\\text{NH}_4\\text{NO}_3) = 80$.", working: "14 + 3 = 17,\\quad 28 + 4 + 48 = 80", marks: 1, markCode: "M" },
              { reasoning: "Moles of ammonia.", working: "\\frac{8.5}{17} = 0.5\\text{ kmol}", marks: 1, markCode: "M" },
              { reasoning: "The ratio $\\text{NH}_3 : \\text{NH}_4\\text{NO}_3$ is 1 : 1, so the moles of product are the same.", working: "0.5\\text{ kmol}", marks: 1, markCode: "M" },
              { reasoning: "Convert to mass.", working: "0.5 \\times 80 = 40\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\text{ kg}$",
            commonErrors: ["Giving 8.5 kg, assuming mass is conserved for ammonia alone.", "Using the wrong $M_r$ for ammonia (14 instead of 17)."],
            examinerNote: "M1 both $M_r$ values. M1 moles of NH$_3$. M1 for 1:1 ratio. A1 cao. Allow ecf.",
          },
        },
        {
          id: "ech11-u2-fertilisers-contact-process-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "In the Contact process, sulfur dioxide reacts with oxygen to form sulfur trioxide: $2\\text{SO}_2 + \\text{O}_2 \\rightleftharpoons 2\\text{SO}_3$. The forward reaction is exothermic. The process uses a temperature of $450^\\circ\\text{C}$, a pressure of 2 atmospheres and a vanadium(V) oxide catalyst. ($A_r$: S = 32, O = 16.)",
          parts: [
            { label: "a", prompt: "Write the equation for the formation of sulfur dioxide from sulfur.", marks: 1 },
            { label: "b", prompt: "State the effect of the catalyst on the rate of reaction and on the yield of sulfur trioxide.", marks: 2 },
            { label: "c", prompt: "Explain why a temperature of $450^\\circ\\text{C}$ is used, rather than a much lower or much higher temperature.", marks: 3 },
            { label: "d", prompt: "Calculate the maximum mass of sulfur trioxide that can be made from $6.4\\text{ g}$ of sulfur dioxide. Give your answer in grams.", marks: 2 },
            { label: "e", prompt: "In one run, only $7.6\\text{ g}$ of sulfur trioxide is obtained from $6.4\\text{ g}$ of sulfur dioxide. Calculate the percentage yield.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equilibrium and rate", statement: "For an exothermic reversible reaction, a lower temperature gives a higher yield but a lower rate; industry uses a compromise." },
              { kind: "formula", name: "Percentage yield", statement: "$\\frac{\\text{actual mass}}{\\text{theoretical mass}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Sulfur burns in oxygen.", working: "\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The catalyst increases the rate of reaction.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The catalyst has no effect on the yield (equilibrium position) because it speeds up forward and reverse reactions equally.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The forward reaction is exothermic, so a lower temperature would give a higher yield.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "But at a low temperature the rate would be too slow to be economic.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A higher temperature would reduce the yield, so $450^\\circ\\text{C}$ is a compromise giving an acceptable rate and yield.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "$M_r(\\text{SO}_2) = 64$ and $M_r(\\text{SO}_3) = 80$. The ratio is 1 : 1, so $6.4\\text{ g}$ is $0.1$ mol.", working: "\\frac{6.4}{64} = 0.1\\text{ mol}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "0.1 mol of $\\text{SO}_3$ has mass:", working: "0.1 \\times 80 = 8.0\\text{ g}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Divide actual by theoretical mass and multiply by 100.", working: "\\frac{7.6}{8.0}\\times100", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "95\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$ (b) faster rate, no effect on yield (c) compromise between yield and rate (d) $8.0\\text{ g}$ (e) $95\\%$",
            commonErrors: ["Saying the catalyst increases the yield.", "Saying a high temperature increases the yield for an exothermic reaction.", "Using 7.6 divided by 6.4 for percentage yield."],
            examinerNote: "In (d) allow ecf for 1:1 ratio. In (e) allow ecf from (d). Reject 'catalyst lowers the temperature needed' alone as the effect on rate.",
          },
        },
      ],
    },
  ],
};
