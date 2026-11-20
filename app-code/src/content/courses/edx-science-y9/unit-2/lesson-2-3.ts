import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "esc9-u2-lesson-2-3",
  code: "2-3",
  title: "Reactions of Metals",
  goal: "I CAN use the reactivity series to predict displacement reactions, and describe and write equations for the reactions of metals with acids and oxygen, including the test for hydrogen.",
  standards: ["KS3 Chemistry", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Reactivity series", definition: "A list of metals in order of how vigorously they react, from the most reactive to the least reactive." },
    { term: "Displacement reaction", definition: "A reaction in which a more reactive metal takes the place of a less reactive metal in a compound." },
    { term: "Oxidation", definition: "A reaction in which a substance gains oxygen. Metals are oxidised when they react with oxygen to form metal oxides." },
    { term: "Metal oxide", definition: "A compound of a metal and oxygen, for example magnesium oxide, $\\text{MgO}$." },
    { term: "Salt", definition: "A compound formed when the hydrogen of an acid is replaced by a metal, for example zinc chloride, $\\text{ZnCl}_2$." },
    { term: "Squeaky pop test", definition: "The test for hydrogen: a lit splint held at the mouth of a test tube of the gas makes a squeaky pop." },
  ],
  concepts: [
    {
      id: "esc9-u2-reactivity-displacement",
      title: "The reactivity series and displacement",
      skill: "Use the reactivity series to predict and explain displacement reactions and to place metals in order of reactivity from experimental results.",
      lesson: {
        sections: [
          {
            heading: "The reactivity series",
            body: "Metals can be put in order of reactivity. From most to least reactive, a common order is:\n\n- potassium, sodium, lithium, calcium, magnesium, aluminium, zinc, iron, copper, silver, gold\n\nThe more reactive a metal, the more vigorously it reacts with water, acids and oxygen. Hydrogen and carbon are sometimes included in the series for comparison. Gold is so unreactive that it is found as the metal itself in the ground.",
          },
          {
            heading: "Displacement reactions",
            body: "A more reactive metal will **displace** a less reactive metal from a solution of its compound. For example, magnesium is more reactive than copper:\n\n$\\text{magnesium} + \\text{copper sulfate} \\rightarrow \\text{magnesium sulfate} + \\text{copper}$\n\n$\\text{Mg} + \\text{CuSO}_4 \\rightarrow \\text{MgSO}_4 + \\text{Cu}$\n\nThe blue copper sulfate solution fades to colourless and brown-pink copper metal is deposited. The reaction is exothermic, so the temperature rises. If the metal added is **less** reactive than the metal in the compound, there is no reaction.",
          },
          {
            heading: "Using displacement results",
            body: "Displacement results can be used to place metals in order. A metal that displaces many others is high in the series. A metal that displaces none is low in the series. To make the test fair, keep the volume and concentration of the solution, the mass and surface area of the metal, and the starting temperature the same.",
          },
        ],
        keyFormulas: [
          { name: "Displacement rule", statement: "A more reactive metal displaces a less reactive metal from its compound" },
          { name: "Example equation", statement: "$\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}$" },
        ],
        workedExample: {
          problem: "Will zinc react with copper sulfate solution? Will copper react with zinc sulfate solution? Explain.",
          solution: "Zinc is more reactive than copper, so zinc displaces copper from copper sulfate: $\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$. Copper is less reactive than zinc, so it cannot displace zinc from zinc sulfate and there is no reaction.",
        },
      },
      questions: [
        {
          id: "esc9-u2-reactivity-displacement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which metal would displace copper from copper sulfate solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Silver" },
              { id: "b", text: "Gold" },
              { id: "c", text: "Zinc" },
              { id: "d", text: "Copper" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "A more reactive metal displaces a less reactive metal from its compound." },
            ],
            steps: [
              { reasoning: "Only zinc is more reactive than copper. Silver and gold are less reactive than copper, and copper cannot displace itself.", working: "\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Zinc",
            commonErrors: ["Choosing silver or gold because they are 'valuable' metals.", "Thinking that copper would displace copper."],
            examinerNote: "B1 for zinc.",
          },
        },
        {
          id: "esc9-u2-reactivity-displacement-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Magnesium ribbon is added to copper sulfate solution. The temperature of the solution rises from $19.5\\,^\\circ\\text{C}$ to $36.0\\,^\\circ\\text{C}$. Calculate the temperature rise.",
          response: { type: "numeric", parts: [{ label: "Temperature rise", answer: 16.5, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exothermic reaction", statement: "Displacement reactions transfer energy to the surroundings, so the temperature rises." },
            ],
            steps: [
              { reasoning: "Temperature rise = final temperature minus initial temperature.", working: "36.0 - 19.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, with the unit.", working: "= 16.5\\,^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16.5\\,^\\circ\\text{C}$",
            commonErrors: ["Adding the temperatures to give 55.5.", "Subtracting in the wrong order and giving a negative value."],
            examinerNote: "M1 for 36.0 $-$ 19.5. A1 for 16.5 with unit.",
          },
        },
        {
          id: "esc9-u2-reactivity-displacement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three metals, A, B and C, are each added to solutions of the sulfates of the other two metals. Metal A displaces both B and C from their sulfate solutions. Metal B displaces C from its sulfate solution but does not displace A. Metal C displaces neither A nor B. Deduce the order of reactivity of the three metals and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "A more reactive metal displaces a less reactive metal from a solution of its compound." },
            ],
            steps: [
              { reasoning: "A displaces both of the other metals, so A is the most reactive.", marks: 1, markCode: "B" },
              { reasoning: "C displaces neither metal, so C is the least reactive.", marks: 1, markCode: "B" },
              { reasoning: "B displaces C but not A, so B is in the middle.", marks: 1, markCode: "B" },
              { reasoning: "State the order, linked to the rule that a more reactive metal displaces a less reactive one: A > B > C.", working: "\\text{A} > \\text{B} > \\text{C}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Most reactive A, then B, least reactive C.",
            commonErrors: ["Reversing the order because the metal that is displaced is thought of as 'stronger'.", "Placing B above A because B 'reacted'."],
            examinerNote: "Allow ecf for the final mark if a consistent order is given using the rule. Accept the order written in either direction if labelled clearly.",
          },
        },
        {
          id: "esc9-u2-reactivity-displacement-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student places a clean iron nail in a beaker of blue copper sulfate solution. After 20 minutes the nail is coated with a brown solid. The student then does the same experiment with magnesium ribbon in the same volume of copper sulfate solution. The initial temperature was $21.0\\,^\\circ\\text{C}$ and the final temperature was $34.5\\,^\\circ\\text{C}$ for the magnesium experiment.",
          parts: [
            { label: "a", prompt: "Describe two observations, other than the coating of the nail, that show a reaction has taken place when iron is placed in copper sulfate.", marks: 2 },
            { label: "b", prompt: "Write a word equation for the reaction between iron and copper sulfate.", marks: 1 },
            { label: "c", prompt: "Explain why iron displaces copper from copper sulfate.", marks: 2 },
            { label: "d", prompt: "Calculate the temperature rise in the magnesium experiment.", marks: 2 },
            { label: "e", prompt: "Predict what will happen if a piece of silver is placed in copper sulfate solution. Give a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Displacement", statement: "A more reactive metal displaces a less reactive metal from its compound." },
              { kind: "principle", name: "Evidence of reaction", statement: "Colour change, new solid formed and temperature change are evidence of a chemical reaction." },
            ],
            steps: [
              { part: "a", reasoning: "The blue colour of the solution fades (becomes pale green).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A temperature rise, or the solution becomes warm.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Iron is the reactant metal; it forms iron sulfate and copper.", working: "\\text{iron} + \\text{copper sulfate} \\rightarrow \\text{iron sulfate} + \\text{copper}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Iron is more reactive than copper.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So iron takes the place of copper in the compound, and copper is released as a solid.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Temperature rise = final minus initial.", working: "34.5 - 21.0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate, with the unit.", working: "= 13.5\\,^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "There will be no reaction (no visible change).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Silver is less reactive than copper, so it cannot displace copper from its compound.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) blue colour fades; temperature rises (b) iron + copper sulfate $\\rightarrow$ iron sulfate + copper (c) iron is more reactive than copper, so it displaces it (d) $13.5\\,^\\circ\\text{C}$ (e) no reaction, as silver is less reactive than copper.",
            commonErrors: ["Giving 'a brown coating' again in (a), which the question excludes.", "Writing the product as copper iron or giving the wrong sulfate in (b).", "Saying silver reacts slowly because it is a metal."],
            examinerNote: "(a) Allow 'solution turns green' for the first mark. (b) Allow the symbol equation $\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}$. (d) A1 for 13.5 with unit; allow ecf for M1 only if the subtraction is attempted.",
          },
        },
      ],
    },
    {
      id: "esc9-u2-metals-acids-oxygen",
      title: "Metals with acids and oxygen",
      skill: "Describe and write equations for the reactions of metals with dilute acids and with oxygen, and describe the test for hydrogen.",
      lesson: {
        sections: [
          {
            heading: "Metals and dilute acids",
            body: "Metals above hydrogen in the reactivity series react with dilute acids to form a **salt** and **hydrogen** gas:\n\n$\\text{metal} + \\text{acid} \\rightarrow \\text{salt} + \\text{hydrogen}$\n\n$\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$\n\n$\\text{Zn} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{H}_2$\n\nHydrochloric acid makes chlorides and sulfuric acid makes sulfates. The more reactive the metal, the faster the bubbles of hydrogen are produced. Copper, silver and gold do not react with dilute acids.",
          },
          {
            heading: "The test for hydrogen",
            body: "Hold a lit splint at the mouth of a test tube of the gas. Hydrogen burns rapidly with a **squeaky pop**. The pop is the sound of hydrogen reacting with oxygen in the air to form water:\n\n$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$\n\nHydrogen is flammable, so keep the amount small and wear eye protection.",
          },
          {
            heading: "Metals and oxygen",
            body: "When a metal is heated in air or oxygen, it is **oxidised** to form a metal oxide. Magnesium burns with a bright white flame:\n\n$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$\n\nThe metal oxide has a greater mass than the original metal, because the oxygen from the air has joined to it (the total mass is conserved). Copper turns black when heated: $2\\text{Cu} + \\text{O}_2 \\rightarrow 2\\text{CuO}$. Very unreactive metals such as gold do not react with oxygen.",
          },
        ],
        keyFormulas: [
          { name: "Metal + acid", statement: "metal + acid $\\rightarrow$ salt + hydrogen" },
          { name: "Metal + oxygen", statement: "metal + oxygen $\\rightarrow$ metal oxide" },
          { name: "Test for hydrogen", statement: "Lit splint gives a squeaky pop" },
          { name: "Rate of reaction", statement: "rate = volume of gas produced $\\div$ time taken" },
        ],
        workedExample: {
          problem: "Write a balanced equation for aluminium burning in oxygen to form aluminium oxide, $\\text{Al}_2\\text{O}_3$.",
          solution: "Start with $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$. Oxygen is the problem: the left has 2 atoms in each $\\text{O}_2$ and the right has 3 in each $\\text{Al}_2\\text{O}_3$. The lowest common multiple of 2 and 3 is 6, so use $3\\text{O}_2$ and $2\\text{Al}_2\\text{O}_3$, which gives 6 oxygen atoms on each side. The right now has 4 aluminium atoms, so use 4 Al: $4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$. Check: left 4 Al and 6 O; right 4 Al and 6 O.",
        },
      },
      questions: [
        {
          id: "esc9-u2-metals-acids-oxygen-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is observed when a lit splint is placed at the mouth of a test tube of hydrogen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The splint goes out." },
              { id: "b", text: "The splint relights." },
              { id: "c", text: "A squeaky pop is heard." },
              { id: "d", text: "The gas turns limewater cloudy." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Test for hydrogen", statement: "Hydrogen gives a squeaky pop with a lit splint." },
            ],
            steps: [
              { reasoning: "Hydrogen burns rapidly with oxygen in the air, giving a squeaky pop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A squeaky pop is heard.",
            commonErrors: ["Confusing the test with carbon dioxide, which puts out a splint and turns limewater cloudy.", "Confusing the test with oxygen, which relights a glowing splint."],
            examinerNote: "B1 for squeaky pop.",
          },
        },
        {
          id: "esc9-u2-metals-acids-oxygen-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student heats 0.24 g of magnesium ribbon in air until it has completely turned into magnesium oxide. The magnesium oxide has a mass of 0.40 g. Calculate the mass of oxygen that combined with the magnesium.",
          response: { type: "numeric", parts: [{ label: "Mass of oxygen", answer: 0.16, tolerance: 0.001, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "The total mass of the reactants equals the total mass of the products." },
            ],
            steps: [
              { reasoning: "The mass of oxygen is the mass of the product minus the mass of the magnesium.", working: "0.40 - 0.24", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, with the unit.", working: "= 0.16\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.16\\text{ g}$",
            commonErrors: ["Adding the two masses to give 0.64 g.", "Saying the mass of oxygen is 0.40 g, the mass of the oxide."],
            examinerNote: "M1 for 0.40 $-$ 0.24. A1 for 0.16 with unit g.",
          },
        },
        {
          id: "esc9-u2-metals-acids-oxygen-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student heats magnesium ribbon in an open crucible and finds that the mass of the solid increases. Explain why the mass increases, and why this does not break the law of conservation of mass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "In a chemical reaction no atoms are lost or made, so the total mass of the reactants equals the total mass of the products." },
            ],
            steps: [
              { reasoning: "Magnesium reacts with oxygen from the air to form magnesium oxide.", working: "2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}", marks: 1, markCode: "B" },
              { reasoning: "The solid product contains the oxygen that has joined to the magnesium, so it has a larger mass than the magnesium alone.", marks: 1, markCode: "B" },
              { reasoning: "Mass is conserved overall: the mass of magnesium plus the mass of oxygen that reacted equals the mass of magnesium oxide, because the oxygen was a reactant that came from the air.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Oxygen from the air combines with the magnesium, so the oxide is heavier; mass is conserved because the oxygen is a reactant.",
            commonErrors: ["Saying that magnesium gets 'heavier when it is hot'.", "Saying mass is created in the reaction."],
            examinerNote: "Allow a word equation. Reject 'the magnesium absorbs the flame'.",
          },
        },
        {
          id: "esc9-u2-metals-acids-oxygen-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student adds equal masses of four metals to separate tubes of dilute hydrochloric acid and observes the bubbles of gas produced.\n\n- Magnesium: very rapid bubbling\n- Zinc: steady bubbling\n- Iron: slow bubbling\n- Copper: no bubbles\n\nIn a second experiment, 60 cm$^3$ of hydrogen are collected from the zinc reaction in 150 seconds.",
          parts: [
            { label: "a", prompt: "Put the four metals in order of reactivity, most reactive first.", marks: 2 },
            { label: "b", prompt: "Describe how to test that the gas produced is hydrogen, and give the result.", marks: 2 },
            { label: "c", prompt: "Write a balanced symbol equation for the reaction between zinc and hydrochloric acid, $\\text{HCl}$, to form zinc chloride, $\\text{ZnCl}_2$, and hydrogen.", marks: 2 },
            { label: "d", prompt: "Calculate the mean rate of production of hydrogen in the second experiment, in $\\text{cm}^3\\text{/s}$.", marks: 2 },
            { label: "e", prompt: "Name two variables the student should control to make the comparison between the metals fair.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reactivity and acids", statement: "The more reactive a metal, the faster it reacts with dilute acid." },
              { kind: "formula", name: "Rate of reaction", statement: "rate = volume of gas $\\div$ time" },
              { kind: "principle", name: "Fair test", statement: "Change only the independent variable and control all other variables." },
            ],
            steps: [
              { part: "a", reasoning: "The faster the bubbling, the more reactive the metal. Copper does not react, so it is the least reactive.", working: "\\text{Mg} > \\text{Zn} > \\text{Fe} > \\text{Cu}", marks: 2, markCode: "B" },
              { part: "b", reasoning: "Hold a lit splint at the mouth of the tube containing the gas.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A squeaky pop shows the gas is hydrogen.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Write the formulae and balance the chlorine: 2 HCl on the left.", working: "\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2", marks: 2, markCode: "B" },
              { part: "d", reasoning: "Rate = volume divided by time.", working: "\\frac{60}{150}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate, with the unit.", working: "= 0.4\\text{ cm}^3\\text{/s}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Any one control variable, such as the same mass (or surface area) of metal.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A second control variable, such as the same volume and concentration of acid, or the same starting temperature.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Mg, Zn, Fe, Cu (b) lit splint; squeaky pop (c) $\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$ (d) $0.4\\text{ cm}^3\\text{/s}$ (e) any two of: mass or surface area of metal, volume and concentration of acid, temperature.",
            commonErrors: ["Giving the order from slowest to fastest.", "Writing $\\text{H}$ rather than $\\text{H}_2$ as the product.", "Dividing time by volume to give 2.5."],
            examinerNote: "(a) 1 mark if only one adjacent pair is reversed. (c) 1 mark for correct formulae, 1 for balancing. (d) Allow ecf for M1 only.",
          },
        },
      ],
    },
  ],
};
