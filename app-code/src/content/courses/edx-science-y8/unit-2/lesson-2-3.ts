import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "esc8-u2-lesson-2-3",
  code: "2-3",
  title: "Chemical Reactions",
  goal: "I CAN write word and symbol equations, use conservation of mass, and describe acids, alkalis, pH and neutralisation.",
  standards: ["KS3 Chemistry", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Reactant", definition: "A substance that is used up in a chemical reaction." },
    { term: "Product", definition: "A new substance that is made in a chemical reaction." },
    { term: "Conservation of mass", definition: "In a chemical reaction no atoms are created or destroyed, so the total mass of the reactants equals the total mass of the products." },
    { term: "pH scale", definition: "A scale from 0 to 14 that shows how acidic or alkaline a solution is. Below 7 is acidic, 7 is neutral and above 7 is alkaline." },
    { term: "Indicator", definition: "A substance that changes colour depending on whether it is in an acid or an alkali, for example universal indicator." },
    { term: "Alkali", definition: "A soluble base. Its solution has a pH above 7." },
    { term: "Neutralisation", definition: "The reaction of an acid with an alkali (or base) to form a salt and water." },
  ],
  concepts: [
    {
      id: "esc8-u2-equations-conservation-mass",
      title: "Word equations and conservation of mass",
      skill: "Write word and balanced symbol equations and use conservation of mass to explain and calculate masses in reactions.",
      lesson: {
        sections: [
          {
            heading: "Word equations",
            body: "In a chemical reaction the **reactants** change into new substances called **products**. A word equation shows this with an arrow: reactants $\\rightarrow$ products. For example, magnesium burning in oxygen is written: magnesium + oxygen $\\rightarrow$ magnesium oxide. Metals reacting with oxygen form metal oxides. Metal carbonates break down on heating to form a metal oxide and carbon dioxide.",
          },
          {
            heading: "Conservation of mass",
            body: "Atoms are rearranged in a reaction but never created or destroyed. So the total mass of the products equals the total mass of the reactants. If 12 g of magnesium reacts with 8 g of oxygen, then 20 g of magnesium oxide forms. Mass appears to change only when a gas enters or leaves an open container. Burning magnesium in an open crucible seems to gain mass because oxygen from the air joins the metal. Heating a carbonate in an open tube seems to lose mass because carbon dioxide escapes.",
          },
          {
            heading: "Balanced symbol equations",
            body: "A symbol equation uses formulae and must have the same number of each type of atom on both sides. For magnesium: $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$. Count atoms: left has 2 Mg and 2 O, right has 2 Mg and 2 O. Balance by changing the large numbers in front of formulae, never the small numbers in the formulae.",
          },
        ],
        keyFormulas: [
          { name: "Word equation", statement: "reactants $\\rightarrow$ products" },
          { name: "Conservation of mass", statement: "$\\text{total mass of reactants} = \\text{total mass of products}$" },
          { name: "Magnesium burning", statement: "$2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$" },
        ],
        workedExample: {
          problem: "6.0 g of magnesium burns completely in oxygen to make 10.0 g of magnesium oxide. Calculate the mass of oxygen that reacted.",
          solution: "By conservation of mass, mass of oxygen = mass of product - mass of magnesium = $10.0 - 6.0 = 4.0$ g.",
        },
      },
      questions: [
        {
          id: "esc8-u2-equations-conservation-mass-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Magnesium burns in oxygen. Which word equation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "magnesium + oxygen $\\rightarrow$ magnesium carbonate" },
              { id: "b", text: "magnesium + oxygen $\\rightarrow$ magnesium + oxygen" },
              { id: "c", text: "magnesium + oxygen $\\rightarrow$ magnesium oxide" },
              { id: "d", text: "magnesium oxide $\\rightarrow$ magnesium + oxygen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Word equations", statement: "Reactants are on the left of the arrow and products on the right. A metal burning in oxygen forms a metal oxide." },
            ],
            steps: [
              { reasoning: "Magnesium and oxygen are the reactants and magnesium oxide is the only product.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** magnesium + oxygen $\\rightarrow$ magnesium oxide",
            commonErrors: ["Choosing (b); there is no carbon so a carbonate cannot form.", "Choosing (c), which swaps reactants and products."],
            examinerNote: "B1 for (a) only.",
          },
        },
        {
          id: "esc8-u2-equations-conservation-mass-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "12.0 g of magnesium reacts completely with oxygen to form 20.0 g of magnesium oxide in a closed container. Calculate the mass of oxygen that reacted.",
          response: { type: "numeric", parts: [{ label: "Mass of oxygen", answer: 8, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "The total mass of reactants equals the total mass of products." },
            ],
            steps: [
              { reasoning: "Mass of oxygen = mass of product minus mass of magnesium.", working: "20.0 - 12.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.0\\text{ g}$",
            commonErrors: ["Adding the masses to get 32 g.", "Giving 12 g or 20 g without subtracting."],
            examinerNote: "M1 for 20.0 - 12.0. A1 cao with unit.",
          },
        },
        {
          id: "esc8-u2-equations-conservation-mass-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "5.0 g of copper carbonate is heated in an open test tube. It forms 3.2 g of copper oxide and carbon dioxide gas. The reaction is: copper carbonate $\\rightarrow$ copper oxide + carbon dioxide. Calculate the mass of carbon dioxide produced and explain why the mass of solid in the tube decreases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "No atoms are lost in a reaction, so the total mass of products equals the total mass of reactants." },
            ],
            steps: [
              { reasoning: "The mass of carbon dioxide equals the mass of reactant minus the mass of the solid product.", working: "5.0 - 3.2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1.8\\text{ g}", marks: 1, markCode: "A" },
              { reasoning: "Carbon dioxide is a gas and it escapes from the open tube into the air.", marks: 1, markCode: "B" },
              { reasoning: "The mass of the solid left is less, but total mass is conserved: the missing mass is in the gas that escaped.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$1.8\\text{ g}$ of carbon dioxide. The solid loses mass because the gas escapes from the open tube.",
            commonErrors: ["Saying mass is destroyed in the reaction.", "Adding 5.0 and 3.2 to get 8.2 g.", "Not mentioning that the gas escapes."],
            examinerNote: "Allow 'the gas is not weighed' for escape (oe). Reject 'the carbonate disappears'.",
          },
        },
        {
          id: "esc8-u2-equations-conservation-mass-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student heats magnesium ribbon in a crucible with a lid and weighs it before and after. Mass of crucible and lid: 25.40 g. Mass of crucible, lid and magnesium before heating: 25.64 g. Mass of crucible, lid and contents after heating: 25.80 g. The student lifts the lid slightly now and then during heating.",
          parts: [
            { label: "a", prompt: "Write a word equation for the reaction.", marks: 1 },
            { label: "b", prompt: "Calculate the mass of magnesium used.", marks: 1 },
            { label: "c", prompt: "Calculate the mass of oxygen that reacted with the magnesium.", marks: 2 },
            { label: "d", prompt: "Explain why the mass of the contents of the crucible increases.", marks: 2 },
            { label: "e", prompt: "Explain why the student lifts the lid slightly now and then, but does not remove it.", marks: 2 },
            { label: "f", prompt: "Write a balanced symbol equation for the reaction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants equals total mass of products." },
              { kind: "principle", name: "Balancing equations", statement: "The same number of each type of atom must be on both sides of a symbol equation." },
            ],
            steps: [
              { part: "a", reasoning: "Magnesium and oxygen are reactants; magnesium oxide is the product.", working: "\\text{magnesium} + \\text{oxygen} \\rightarrow \\text{magnesium oxide}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the mass of crucible and lid from the mass with magnesium.", working: "25.64 - 25.40 = 0.24\\text{ g}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Mass gained is the mass of oxygen, found from the final and initial masses.", working: "25.80 - 25.64", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.16\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Magnesium reacts with oxygen from the air, and the oxygen joins the magnesium to form magnesium oxide.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The magnesium oxide has a greater mass than the magnesium because it includes the mass of oxygen; no mass is created.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Lifting the lid lets in air (oxygen) so the magnesium can burn completely.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Removing the lid would let magnesium oxide smoke escape, which would reduce the measured mass.", marks: 1, markCode: "B" },
              { part: "f", reasoning: "Write the correct formulae: Mg, O$_2$ and MgO.", working: "\\text{Mg} + \\text{O}_2 \\rightarrow \\text{MgO}", marks: 1, markCode: "M" },
              { part: "f", reasoning: "Balance: 2 O atoms on the left need 2 MgO, then 2 Mg.", working: "2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) magnesium + oxygen $\\rightarrow$ magnesium oxide (b) $0.24\\text{ g}$ (c) $0.16\\text{ g}$ (d) oxygen from the air joins the magnesium (e) lid lifted to let oxygen in; not removed to prevent loss of smoke (f) $2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$",
            commonErrors: ["Using 25.80 - 25.40 = 0.40 g as the oxygen mass; this is the mass of magnesium oxide.", "Saying the mass increases because the magnesium gets hotter.", "Changing a subscript, writing MgO$_2$, to balance."],
            examinerNote: "(a) allow 'burns in oxygen'. (c) allow ecf from (b). (f) formulae correct for M1; do not accept non-integer coefficients. Allow multiples (oe).",
          },
        },
      ],
    },
    {
      id: "esc8-u2-acids-alkalis-neutralisation",
      title: "Acids, alkalis, pH and neutralisation",
      skill: "Use the pH scale and indicators and describe neutralisation, including its word equation.",
      lesson: {
        sections: [
          {
            heading: "Acids, alkalis and the pH scale",
            body: "Acids such as hydrochloric acid have a pH below 7 and alkalis such as sodium hydroxide have a pH above 7. A neutral substance such as pure water has a pH of exactly 7. The lower the pH below 7, the stronger the acid; the higher the pH above 7, the stronger the alkali. Never taste unknown chemicals. Concentrated acids and alkalis are corrosive, so wear eye protection.",
          },
          {
            heading: "Indicators",
            body: "An **indicator** changes colour in acids and alkalis. Litmus is red in acids and blue in alkalis. **Universal indicator** shows a range of colours that match the pH: red (pH 1 to 2), orange or yellow (pH 3 to 6), green (pH 7), blue (pH 8 to 11) and purple (pH 12 to 14). A pH meter gives a more precise reading.",
          },
          {
            heading: "Neutralisation",
            body: "When an acid reacts with an alkali, a **neutralisation** reaction takes place and the pH moves towards 7. The products are a salt and water: acid + alkali $\\rightarrow$ salt + water. Hydrochloric acid forms chlorides, sulfuric acid forms sulfates and nitric acid forms nitrates. For example: hydrochloric acid + sodium hydroxide $\\rightarrow$ sodium chloride + water. Neutralisation is used in indigestion tablets and to treat acidic soil with lime.",
          },
        ],
        keyFormulas: [
          { name: "pH scale", statement: "Acid: pH below 7. Neutral: pH 7. Alkali: pH above 7" },
          { name: "Neutralisation", statement: "acid + alkali $\\rightarrow$ salt + water" },
          { name: "Naming salts", statement: "hydrochloric acid gives chlorides; sulfuric acid gives sulfates; nitric acid gives nitrates" },
        ],
        workedExample: {
          problem: "Write the word equation for the reaction of sulfuric acid with potassium hydroxide.",
          solution: "This is neutralisation, so the products are a salt and water. Sulfuric acid forms a sulfate, and the metal comes from the alkali: sulfuric acid + potassium hydroxide $\\rightarrow$ potassium sulfate + water.",
        },
      },
      questions: [
        {
          id: "esc8-u2-acids-alkalis-neutralisation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution has a pH of 12. What type of solution is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A neutral solution" },
              { id: "b", text: "A weak acid" },
              { id: "c", text: "A strong acid" },
              { id: "d", text: "A strong alkali" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "pH below 7 is acidic, pH 7 is neutral, pH above 7 is alkaline. Values far from 7 are strong." },
            ],
            steps: [
              { reasoning: "A pH of 12 is far above 7, so the solution is a strong alkali.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A strong alkali",
            commonErrors: ["Thinking that a high number means an acid.", "Choosing neutral because only pH 7 is neutral; 12 is much higher."],
            examinerNote: "B1 for (d) only.",
          },
        },
        {
          id: "esc8-u2-acids-alkalis-neutralisation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Complete the word equation for the reaction between sulfuric acid and sodium hydroxide: sulfuric acid + sodium hydroxide $\\rightarrow$ ......................... + .........................",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation", statement: "acid + alkali gives a salt + water. Sulfuric acid forms sulfates." },
            ],
            steps: [
              { reasoning: "The salt is a sulfate and contains the metal from the alkali (sodium).", working: "\\text{sodium sulfate}", marks: 1, markCode: "B" },
              { reasoning: "The other product of neutralisation is water.", working: "\\text{water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "sodium sulfate + water",
            commonErrors: ["Writing sodium chloride, which comes from hydrochloric acid.", "Writing hydrogen instead of water, which is the product with metals but not with alkalis."],
            examinerNote: "Products may be given in either order. Reject 'sodium sulfide'.",
          },
        },
        {
          id: "esc8-u2-acids-alkalis-neutralisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Indigestion is caused by too much hydrochloric acid in the stomach. An indigestion tablet contains magnesium hydroxide, which is a base. Explain how the tablet relieves the symptoms and write the word equation for the reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation", statement: "A base reacts with an acid to form a salt and water, raising the pH towards 7." },
            ],
            steps: [
              { reasoning: "Magnesium hydroxide is a base (alkaline), so it reacts with the excess acid in the stomach.", marks: 1, markCode: "B" },
              { reasoning: "This is a neutralisation reaction, so the acidity falls and the pH rises towards 7.", marks: 1, markCode: "B" },
              { reasoning: "Reactants: hydrochloric acid + magnesium hydroxide.", working: "\\text{hydrochloric acid} + \\text{magnesium hydroxide}", marks: 1, markCode: "B" },
              { reasoning: "Products: a salt and water.", working: "\\rightarrow \\text{magnesium chloride} + \\text{water}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The base neutralises the excess acid, raising the pH. hydrochloric acid + magnesium hydroxide $\\rightarrow$ magnesium chloride + water",
            commonErrors: ["Saying the tablet 'removes' the acid without a reaction.", "Writing magnesium sulfate as the salt.", "Saying the tablet makes the stomach alkaline."],
            examinerNote: "Allow 'antacid' or 'alkali' for base (oe). The tablet must be described as reacting with the acid.",
          },
        },
        {
          id: "esc8-u2-acids-alkalis-neutralisation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student tests three colourless solutions with universal indicator. Solution A has pH 1, solution B has pH 7 and solution C has pH 13. The student then adds sodium hydroxide solution slowly to 25 cm$^3$ of hydrochloric acid, with indicator, until the indicator turns green. The volumes of sodium hydroxide solution needed in four trials were 18.2 cm$^3$, 18.4 cm$^3$, 19.6 cm$^3$ and 18.3 cm$^3$.",
          parts: [
            { label: "a", prompt: "State which solution is a strong alkali.", marks: 1 },
            { label: "b", prompt: "State the colour of universal indicator in solution B.", marks: 1 },
            { label: "c", prompt: "Write a word equation for the reaction of hydrochloric acid with sodium hydroxide.", marks: 2 },
            { label: "d", prompt: "Identify the anomalous result and calculate the mean volume of sodium hydroxide solution, ignoring the anomalous result. Give your answer to 1 decimal place.", marks: 3 },
            { label: "e", prompt: "Explain why the student repeats the titration several times.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "pH below 7 is acidic, 7 is neutral, above 7 alkaline; universal indicator is green at pH 7." },
              { kind: "principle", name: "Neutralisation", statement: "acid + alkali gives a salt + water." },
              { kind: "formula", name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
            ],
            steps: [
              { part: "a", reasoning: "pH 13 is far above 7.", working: "\\text{C}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Universal indicator is green at pH 7 (neutral).", working: "\\text{green}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Reactants are hydrochloric acid and sodium hydroxide.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Products are sodium chloride and water.", working: "\\text{hydrochloric acid} + \\text{sodium hydroxide} \\rightarrow \\text{sodium chloride} + \\text{water}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "19.6 cm$^3$ is not close to the other three results.", working: "19.6\\text{ cm}^3", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Find the mean of the three concordant results.", working: "\\frac{18.2 + 18.4 + 18.3}{3} = \\frac{54.9}{3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "18.3\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Repeating allows anomalous results to be spotted and ignored.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A mean of repeated close results is more reliable, as it reduces the effect of random error.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) C (b) green (c) hydrochloric acid + sodium hydroxide $\\rightarrow$ sodium chloride + water (d) anomaly $19.6\\text{ cm}^3$; mean $18.3\\text{ cm}^3$ (e) to identify anomalies and make the mean more reliable",
            commonErrors: ["Including 19.6 in the mean to get 18.6.", "Choosing A as the strong alkali because it is first or the pH is lowest.", "Writing hydrogen as a product."],
            examinerNote: "(d) allow ecf for the mean if anomaly is wrongly identified. Allow 18.3 only. (e) allow 'to improve reliability' (oe).",
          },
        },
      ],
    },
  ],
};
