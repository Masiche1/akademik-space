import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "myps2-u1-lesson-1-2",
  code: "1-2",
  title: "Chemical Reactions",
  goal: "I CAN tell physical and chemical changes apart, use conservation of mass in calculations, and describe combustion, oxidation, thermal decomposition and energy changes using temperature data.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Key concept: Change",
    "Related concept: Transformation",
  ],
  vocabulary: [
    { term: "Chemical change", definition: "A change in which one or more new substances are formed. It is usually difficult to reverse." },
    { term: "Reactant", definition: "A substance that is used up in a chemical reaction." },
    { term: "Product", definition: "A new substance formed in a chemical reaction." },
    { term: "Combustion", definition: "Burning: a reaction of a substance with oxygen that transfers energy to the surroundings as heat and light." },
    { term: "Thermal decomposition", definition: "A reaction in which heat breaks one substance down into two or more simpler substances." },
    { term: "Exothermic", definition: "A reaction that transfers energy to the surroundings, so the temperature of the surroundings rises." },
    { term: "Endothermic", definition: "A reaction that takes in energy from the surroundings, so the temperature of the surroundings falls." },
  ],
  concepts: [
    {
      id: "myps2-u1-chemical-change",
      title: "Chemical change and conservation of mass",
      skill: "Distinguish physical from chemical changes, recognise the signs of a reaction and use conservation of mass to find an unknown mass.",
      lesson: {
        sections: [
          {
            heading: "Physical or chemical?",
            body: "In a **physical change**, such as melting, dissolving or boiling, no new substance forms and the change can usually be reversed. In a **chemical change** (a chemical reaction) new substances with different properties are made, and the change is usually hard to reverse.\n\nSigns that a chemical reaction has happened:\n- a gas is given off (bubbles or fizzing)\n- a colour change\n- a solid (precipitate) forms in a solution\n- a temperature change, light or a flame\n\nA temperature change or bubbles alone are not proof: boiling water also makes bubbles. Look for a new substance.",
          },
          {
            heading: "Conservation of mass",
            body: "Atoms are not created or destroyed in a chemical reaction; they are rearranged. So the total mass of the reactants equals the total mass of the products.\n\n$$\\text{mass of reactants} = \\text{mass of products}$$\n\nIf a reaction seems to lose mass, a gas has escaped from an open container. If it seems to gain mass, a gas from the air (such as oxygen) has joined the solid. In a closed container the mass stays the same.",
          },
        ],
        keyFormulas: [
          { name: "Conservation of mass", statement: "$\\text{total mass of reactants} = \\text{total mass of products}$" },
          { name: "Signs of reaction", statement: "Gas, colour change, precipitate, temperature change, light" },
        ],
        workedExample: {
          problem: "6.0 g of carbon reacts completely with oxygen to make 22.0 g of carbon dioxide. Calculate the mass of oxygen that reacted.",
          solution: "Mass of reactants = mass of products, so $6.0 + m_{\\text{oxygen}} = 22.0$. Mass of oxygen = $22.0 - 6.0 = 16.0\\text{ g}$.",
        },
      },
      questions: [
        {
          id: "myps2-u1-chemical-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a chemical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice melting" },
              { id: "b", text: "Water boiling in a kettle" },
              { id: "c", text: "An egg cooking when heated" },
              { id: "d", text: "Sugar dissolving in tea" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chemical change", statement: "A chemical change forms new substances that are difficult to reverse." },
            ],
            steps: [
              { reasoning: "Cooking changes the egg proteins into new substances; the egg cannot be turned back into a raw egg.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** An egg cooking when heated",
            commonErrors: ["Choosing boiling because bubbles form; boiling water is still water.", "Choosing dissolving because the sugar seems to disappear; it can be recovered by evaporation."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-chemical-change-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "4.8 g of magnesium burns completely in oxygen from the air to form 8.0 g of magnesium oxide.\n\nCalculate the mass of oxygen that reacted with the magnesium.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of oxygen", answer: 3.2, tolerance: 0.01, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "The total mass of the reactants equals the total mass of the products." },
            ],
            steps: [
              { reasoning: "Mass of oxygen = mass of product - mass of magnesium.", working: "8.0 - 4.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 3.2\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.2 g",
            commonErrors: ["Adding 4.8 and 8.0 to give 12.8 g.", "Thinking the product is lighter than the magnesium."],
            examinerNote: "M1 for 8.0 - 4.8 oe. A1 for 3.2 with unit g.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student places an open beaker containing 50.0 g of vinegar and some sodium hydrogencarbonate on a balance. Fizzing occurs and the balance reading drops to 48.9 g.\n\nState the mass lost, explain why the mass decreases although mass is conserved, and suggest how the student could show that no mass is really lost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are rearranged, not destroyed, so the total mass of reactants equals the total mass of products." },
            ],
            steps: [
              { reasoning: "Mass lost is the starting reading minus the final reading.", working: "50.0 - 48.9 = 1.1\\text{ g}", marks: 1, markCode: "A" },
              { reasoning: "A gas (carbon dioxide) is produced in the reaction.", marks: 1, markCode: "B" },
              { reasoning: "The gas escapes into the air from the open beaker, so its mass is no longer on the balance. The mass of the products is still equal to the mass of the reactants.", marks: 1, markCode: "R" },
              { reasoning: "Repeat the reaction in a sealed container (for example a flask with a stopper or a balloon over the neck) so no gas can escape; the reading stays the same.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1.1 g lost. Carbon dioxide gas escaped from the open beaker. In a sealed container the mass would not change.",
            commonErrors: ["Saying that the mass was destroyed or 'used up'.", "Saying the gas has no mass."],
            examinerNote: "A1 for 1.1 g. B1 gas produced / carbon dioxide. R1 gas escapes (so the mass is not measured). B1 closed / sealed container oe. Allow a balloon fitted if it is clear the gas is trapped.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student heats 10.0 g of calcium carbonate (the main substance in limestone) strongly in an open crucible. It gives off carbon dioxide gas and leaves a white solid, calcium oxide, with a mass of 5.6 g.",
          parts: [
            { label: "a", prompt: "Give **two** pieces of evidence that could show a chemical change has taken place.", marks: 2 },
            { label: "b", prompt: "Calculate the mass of carbon dioxide produced.", marks: 2 },
            { label: "c", prompt: "Explain why the mass in the crucible decreases.", marks: 2 },
            { label: "d", prompt: "Calcium carbonate is used to make cement, which is needed for buildings. Evaluate one environmental impact of producing calcium oxide from limestone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants = total mass of products." },
              { kind: "definition", name: "Chemical change", statement: "A new substance is formed." },
            ],
            steps: [
              { part: "a", reasoning: "A gas is given off (carbon dioxide).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A new substance forms: the solid left is calcium oxide, different from calcium carbonate (a change of properties).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mass of gas = reactant mass - mass of solid left.", working: "10.0 - 5.6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "= 4.4\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The carbon dioxide gas escapes into the air because the crucible is open.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The gas carries its mass away, so the solid left is lighter. The total mass of the products is still 10.0 g.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Identify an impact: heating limestone releases carbon dioxide, a greenhouse gas, and needs a lot of fuel; quarrying damages habitats.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Evaluate it: the impact is large because cement is produced in huge amounts worldwide, but it provides homes and infrastructure, so alternatives and lower-emission methods are needed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Gas given off; a new solid with different properties (b) 4.4 g (c) The carbon dioxide escaped from the open crucible (d) CO2 emissions and quarrying are harmful, balanced against the need for cement.",
            commonErrors: ["In (b) adding 10.0 and 5.6 to get 15.6 g.", "In (c) saying that mass is not conserved."],
            examinerNote: "(a) Allow any two from: gas, colour change, new substance, energy change. (d) Allow any valid environmental impact with a judgement; reject 'it is bad' alone.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a **physical** change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Milk souring" },
              { id: "b", text: "An apple going brown after cutting" },
              { id: "c", text: "Water evaporating from a puddle" },
              { id: "d", text: "Wood burning in a fire" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical change", statement: "A physical change does not form a new substance and can usually be reversed." },
            ],
            steps: [
              { reasoning: "Evaporation only changes water from liquid to gas; no new substance forms. The others form new substances.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Water evaporating from a puddle",
            commonErrors: ["Choosing souring or browning because they 'change'; they are chemical changes."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-chemical-change-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bubbles appear when water boils in a kettle. Does this show a chemical change has taken place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, because boiling changes water into a new substance" },
              { id: "b", text: "No, because boiling only happens in open containers" },
              { id: "c", text: "Yes, because bubbles always mean a gas is produced by a reaction" },
              { id: "d", text: "No, because boiling water is still water, just in gas form" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Signs of reaction", statement: "Bubbles, temperature change and light alone are not proof of a chemical change; look for a new substance." },
            ],
            steps: [
              { reasoning: "Boiling is a physical change: the bubbles are water vapour, still water, and the change can be reversed by cooling.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** No, because boiling water is still water, just in gas form",
            commonErrors: ["Assuming bubbles always mean a chemical reaction."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-chemical-change-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to the law of conservation of mass, the total mass of the products of a reaction equals what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mass of the smallest reactant" },
              { id: "b", text: "The mass of the largest reactant" },
              { id: "c", text: "The total mass of the reactants" },
              { id: "d", text: "The mass lost to the surroundings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Atoms are rearranged, not created or destroyed, so total mass of reactants = total mass of products." },
            ],
            steps: [
              { reasoning: "Conservation of mass means the total mass is the same on both sides of the equation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The total mass of the reactants",
            commonErrors: ["Comparing with only one reactant instead of the total."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-chemical-change-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "3.5 g of zinc reacts completely with acid to form 6.5 g of zinc chloride and hydrogen gas.\n\nCalculate the mass of hydrogen gas produced.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of hydrogen", answer: 3.0, tolerance: 0.01, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants = total mass of products." },
            ],
            steps: [
              { reasoning: "Mass of hydrogen = mass of products - mass of zinc.", working: "6.5 - 3.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 3.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3.0 g",
            commonErrors: ["Adding 3.5 and 6.5 to give 10.0 g."],
            examinerNote: "M1 for 6.5 - 3.5 oe. A1 for 3.0 g.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a closed container, 12.0 g of reactants completely react to form 8.0 g of a solid and a gas.\n\nCalculate the mass of the gas produced.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of gas", answer: 4.0, tolerance: 0.01, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "In a closed container the total mass stays the same: mass of reactants = mass of products." },
            ],
            steps: [
              { reasoning: "Mass of gas = mass of reactants - mass of solid.", working: "12.0 - 8.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 4.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.0 g",
            commonErrors: ["Subtracting the wrong way round to give -4.0 g.", "Thinking the container loses mass."],
            examinerNote: "M1 for 12.0 - 8.0 oe. A1 for 4.0 g.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a sealed flask, 20.0 g of substance A reacts with 10.0 g of substance B to form substance C.\n\nCalculate the total mass of substance C formed.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of product C", answer: 30.0, tolerance: 0.01, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Mass of reactants = mass of products; in a sealed flask no gas escapes." },
            ],
            steps: [
              { reasoning: "Add the masses of the reactants.", working: "20.0 + 10.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 30.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30.0 g",
            commonErrors: ["Subtracting the masses instead of adding them."],
            examinerNote: "M1 for 20.0 + 10.0 oe. A1 for 30.0 g.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "2.4 g of magnesium burns completely in oxygen to form 4.0 g of magnesium oxide.\n\nCalculate the mass of oxygen that reacted.",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of oxygen", answer: 1.6, tolerance: 0.01, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants = total mass of products." },
            ],
            steps: [
              { reasoning: "Mass of oxygen = mass of magnesium oxide - mass of magnesium.", working: "4.0 - 2.4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "= 1.6\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.6 g",
            commonErrors: ["Adding 2.4 and 4.0 to give 6.4 g."],
            examinerNote: "M1 for 4.0 - 2.4 oe. A1 for 1.6 g.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student weighs an open container of baking powder (sodium hydrogencarbonate) on a balance. When vinegar is poured in, the balance reading decreases even though mass is conserved.\n\nExplain why the reading decreases, name the gas produced, and describe how the experiment could be modified so that the balance reading does not change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Mass is conserved, but gases can escape from open containers." },
            ],
            steps: [
              { reasoning: "The reaction between an acid and a carbonate produces carbon dioxide gas.", marks: 1, markCode: "B" },
              { reasoning: "The carbon dioxide escapes into the air because the container is open, so it is no longer on the balance.", marks: 1, markCode: "R" },
              { reasoning: "The mass is not destroyed: reactant mass = product mass, but part of the product mass has left the container.", marks: 1, markCode: "R" },
              { reasoning: "Seal the container, for example with a bung, a stopper or a balloon over the mouth, so the gas is trapped and the reading stays the same.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Carbon dioxide gas escapes from the open container, carrying its mass away. Sealing the container traps the gas so the balance reading stays constant.",
            commonErrors: ["Saying the mass was destroyed.", "Saying the gas has no mass."],
            examinerNote: "B1 carbon dioxide. R1 gas escapes / not measured. R1 mass still conserved. B1 sealed container oe.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A steel paperclip is weighed before and after being left in damp air for two weeks. Its mass increases by 0.3 g.\n\nExplain the increase in mass using conservation of mass, and describe one way the experiment could be improved so that the effect is bigger and easier to measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Oxidation adds the mass of oxygen to the metal; the product is heavier because it contains the joined oxygen." },
            ],
            steps: [
              { reasoning: "The steel contains iron, which reacts with oxygen and water in damp air to form iron oxide (rust).", marks: 1, markCode: "B" },
              { reasoning: "The iron oxide has the mass of the iron plus the oxygen that joined it, so the object is heavier.", marks: 1, markCode: "R" },
              { reasoning: "No mass was created: the extra 0.3 g came from oxygen in the air.", marks: 1, markCode: "R" },
              { reasoning: "A valid improvement: use steel wool instead of a paperclip (larger surface area), keep it in a sealed container with damp air to control conditions, or weigh more precisely / repeat trials.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The iron in the steel was oxidised: oxygen from the air joined it to form rust, so the extra mass is the added oxygen. Use a larger surface area (steel wool) or more sensitive weighing to improve the experiment.",
            commonErrors: ["Saying the paperclip absorbed water (that would be physical, not oxidation).", "Ignoring the conservation of mass."],
            examinerNote: "B1 oxidation / rust. R1 mass of oxygen added. R1 mass from air / conserved. B1 any valid improvement.",
          },
        },
        {
          id: "myps2-u1-chemical-change-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which observation is the **strongest** evidence that a chemical change has taken place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new substance with different properties is formed" },
              { id: "b", text: "The mixture changes colour slightly" },
              { id: "c", text: "Bubbles are seen rising" },
              { id: "d", text: "The mixture gets warmer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Signs of reaction", statement: "Temperature change, bubbles and colour change can also occur in physical changes; a new substance is the decisive evidence." },
            ],
            steps: [
              { reasoning: "Only the formation of a new substance proves a chemical change; the others can have physical explanations (boiling, dissolving).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A new substance with different properties is formed",
            commonErrors: ["Choosing temperature change, which boiling water also shows."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-chemical-change-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student dissolves salt in water, then boils the water away and recovers the salt. A classmate says a chemical change happened. Who is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The student: no new substance formed and the salt can be recovered unchanged" },
              { id: "b", text: "Neither: dissolving is a chemical change but evaporation is not" },
              { id: "c", text: "Both: boiling always causes a chemical change" },
              { id: "d", text: "The classmate: dissolving always makes a new substance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical change", statement: "Dissolving and evaporating do not form new substances; the original substance can be recovered." },
            ],
            steps: [
              { reasoning: "Dissolving and evaporation are physical changes: the salt is unchanged and can be recovered by evaporation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The student: no new substance formed and the salt can be recovered unchanged",
            commonErrors: ["Thinking dissolving is chemical because the salt 'disappears'."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-chemical-change-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student heats 20.0 g of copper carbonate (a green solid) strongly in an open crucible. It decomposes into black copper oxide and carbon dioxide gas. The copper oxide left has a mass of 12.7 g.",
          parts: [
            { label: "a", prompt: "State **two** observations that show a chemical change has occurred.", marks: 2 },
            { label: "b", prompt: "Calculate the mass of carbon dioxide released.", marks: 2 },
            { label: "c", prompt: "Explain why the mass of solid in the crucible decreases even though mass is conserved.", marks: 2 },
            { label: "d", prompt: "Copper is a valuable metal used in electrical wiring. Evaluate one benefit and one drawback of recycling copper instead of mining new ore.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants = total mass of products." },
              { kind: "definition", name: "Thermal decomposition", statement: "Heat breaks one compound into two or more simpler substances." },
            ],
            steps: [
              { part: "a", reasoning: "The green solid turned black: a colour change.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A gas was given off (the carbon dioxide that turns limewater cloudy).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mass of gas = reactant mass - solid left.", working: "20.0 - 12.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate with the unit.", working: "= 7.3\\text{ g}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The carbon dioxide gas escapes from the open crucible into the air.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The gas carries its mass away, so the solid left is lighter; the total mass of products is still 20.0 g.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Benefit: recycling saves energy and raw materials and reduces mining damage; drawback: collection and sorting cost money and need public participation.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Judgement: recycling is worthwhile because copper is valuable and mining is damaging, though the system needs investment.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Colour change to black; gas given off (b) 7.3 g (c) CO2 escaped from the open crucible (d) Recycling saves resources and reduces mining impact but costs money and effort.",
            commonErrors: ["In (b) adding 20.0 and 12.7.", "In (c) saying mass was destroyed.", "In (d) giving only one side of the evaluation."],
            examinerNote: "(a) Allow any two valid signs. (d) Allow any balanced evaluation; ecf not needed.",
          },
        },
      ],
    },
    {
      id: "myps2-u1-types-of-reaction",
      title: "Combustion, oxidation, decomposition and energy changes",
      skill: "Describe combustion, oxidation and thermal decomposition, and classify reactions as exothermic or endothermic using temperature-change data.",
      lesson: {
        sections: [
          {
            heading: "Three types of reaction",
            body: "- **Combustion** is burning: a fuel reacts with oxygen and gives out heat and light. When a hydrocarbon burns completely, the products are carbon dioxide and water.\n- **Oxidation** is a reaction in which a substance gains oxygen. Burning is fast oxidation; rusting of iron is slow oxidation. Iron + oxygen + water makes iron oxide (rust). Oxidised metals gain mass because oxygen joins them.\n- **Thermal decomposition** is when heat breaks down one compound into simpler substances, for example $\\text{copper carbonate} \\rightarrow \\text{copper oxide} + \\text{carbon dioxide}$. The green powder turns black, and the gas turns limewater cloudy.",
          },
          {
            heading: "Exothermic and endothermic reactions",
            body: "In an **exothermic** reaction energy is transferred to the surroundings, so the temperature **rises**. Combustion, many oxidation reactions and neutralisation are exothermic. They are used in hand warmers.\n\nIn an **endothermic** reaction energy is taken in from the surroundings, so the temperature **falls**. Thermal decomposition and some dissolving reactions, such as those in instant cold packs, are endothermic.\n\nThe temperature change is found by:\n\n$$\\text{temperature change} = \\text{final temperature} - \\text{initial temperature}$$\n\nA positive change means exothermic; a negative change means endothermic.",
          },
        ],
        keyFormulas: [
          { name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
          { name: "Exothermic", statement: "Temperature rises; energy given out to surroundings" },
          { name: "Endothermic", statement: "Temperature falls; energy taken in from surroundings" },
        ],
        workedExample: {
          problem: "Citric acid is mixed with sodium hydrogencarbonate in water. The temperature falls from $21.0\\ ^\\circ\\text{C}$ to $16.5\\ ^\\circ\\text{C}$. Is the reaction exothermic or endothermic?",
          solution: "$\\Delta T = 16.5 - 21.0 = -4.5\\ ^\\circ\\text{C}$. The temperature fell, so the reaction took in energy from the surroundings: it is endothermic.",
        },
      },
      questions: [
        {
          id: "myps2-u1-types-of-reaction-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reaction mixture gets hotter as the reaction happens. What type of reaction is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exothermic, because energy is given out to the surroundings" },
              { id: "b", text: "Endothermic, because energy is taken in from the surroundings" },
              { id: "c", text: "Endothermic, because the temperature of the surroundings falls" },
              { id: "d", text: "Exothermic, because energy is taken in from the surroundings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic", statement: "An exothermic reaction transfers energy to the surroundings, so the temperature rises." },
            ],
            steps: [
              { reasoning: "A temperature rise shows energy has been given out, so the reaction is exothermic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Exothermic, because energy is given out to the surroundings",
            commonErrors: ["Thinking that 'hot' means energy is taken in, which is endothermic."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student heats green copper carbonate in a test tube. The powder turns black and a gas is released that turns limewater cloudy.\n\nName the type of reaction and name the gas that is released.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thermal decomposition", statement: "Heat breaks one compound down into simpler substances." },
              { kind: "property", name: "Carbon dioxide test", statement: "Carbon dioxide turns limewater cloudy (milky)." },
            ],
            steps: [
              { reasoning: "Heating one compound to give two simpler substances (copper oxide and a gas) is thermal decomposition.", marks: 1, markCode: "B" },
              { reasoning: "The gas turns limewater cloudy, so it is carbon dioxide.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Thermal decomposition; the gas is carbon dioxide.",
            commonErrors: ["Calling the reaction combustion; no oxygen reacts.", "Naming the gas as oxygen or hydrogen."],
            examinerNote: "B1 thermal decomposition (allow decomposition). B1 carbon dioxide / CO2.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A steel nail rusts slowly in damp air, while a piece of steel wool burns quickly when heated in a flame. Both reactions are oxidation.\n\nExplain why the steel wool in the flame gets heavier, and explain why the rusting nail does not feel warm even though rusting is also exothermic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation", statement: "Oxidation is a reaction in which a substance gains oxygen." },
              { kind: "law", name: "Conservation of mass", statement: "Total mass of reactants equals total mass of products." },
            ],
            steps: [
              { reasoning: "Iron reacts with (joins) oxygen from the air.", marks: 1, markCode: "B" },
              { reasoning: "The product, iron oxide, has the mass of the iron plus the oxygen that has joined it, so the solid is heavier.", marks: 1, markCode: "R" },
              { reasoning: "Rusting is much slower, so the energy is released very gradually.", marks: 1, markCode: "B" },
              { reasoning: "The energy is spread out and lost to the surroundings as it is released, so no noticeable temperature rise.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The steel wool gains mass because oxygen from the air joins the iron to form iron oxide. Rusting releases energy so slowly that it is lost to the surroundings and the nail does not feel warm.",
            commonErrors: ["Saying mass is created.", "Saying that rusting is endothermic."],
            examinerNote: "B1 reacts with oxygen. R1 oxygen mass added to the iron / iron oxide is heavier. B1 rusting is slow. R1 energy released slowly / lost to surroundings, so no noticeable temperature rise oe.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates two reactions in a polystyrene cup. Reaction X is magnesium ribbon with dilute hydrochloric acid. Reaction Y is sodium hydrogencarbonate with citric acid solution. Each used 25 cm$^3$ of liquid and the student recorded the temperature before and after.\n\n| Reaction | Initial temperature ($^\\circ\\text{C}$) | Final temperature ($^\\circ\\text{C}$) |\n| --- | --- | --- |\n| X | 21.0 | 35.5 |\n| Y | 22.0 | 15.5 |",
          parts: [
            { label: "a", prompt: "Calculate the temperature change for reaction X and for reaction Y.", marks: 2 },
            { label: "b", prompt: "State which reaction is endothermic and give a reason.", marks: 2 },
            { label: "c", prompt: "Suggest two ways to make the results more reliable.", marks: 2 },
            { label: "d", prompt: "Explain how the data shows that energy is transferred in reaction X, in terms of the surroundings.", marks: 1 },
            { label: "e", prompt: "A company wants to make a reusable hand warmer and an instant cold pack for sports injuries. State which reaction (X or Y) suits each product and justify your choice.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
              { kind: "definition", name: "Exothermic and endothermic", statement: "Exothermic reactions raise the temperature of the surroundings; endothermic reactions lower it." },
            ],
            steps: [
              { part: "a", reasoning: "Final minus initial for X.", working: "35.5 - 21.0 = +14.5\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Final minus initial for Y (negative as it falls).", working: "15.5 - 22.0 = -6.5\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reaction Y is endothermic.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Its temperature fell, so it took in energy from the surroundings.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Repeat each reaction several times and calculate a mean.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Use a lid or insulation to reduce heat loss, or control variables such as the same volumes and masses and the same starting temperature.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The temperature of the surroundings (the liquid) rose by 14.5 degrees, so energy was transferred from the reaction to the surroundings.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "X for the hand warmer because it gives out energy (exothermic) so it feels warm; Y for the cold pack because it takes in energy so it cools the skin.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Justify with the data or safety: Y cools by 6.5 degrees, enough to reduce swelling and it uses safe substances; X uses an acid and a metal that is consumed and cannot easily be reused, so it is less suitable for a consumer product.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) X: +14.5 degrees Celsius, Y: -6.5 degrees Celsius (b) Y, temperature falls (c) Repeat and take a mean; insulate and control variables (d) The surroundings gained thermal energy (e) X to warm, Y to cool, with justification.",
            commonErrors: ["In (a) forgetting the minus sign for reaction Y.", "In (b) saying Y is endothermic because it gets cold, without reference to energy being taken in."],
            examinerNote: "(a) Allow 6.5 fall for Y if the direction is stated. (c) Allow any two valid improvements; ignore 'be more careful'. (e) Allow reasonable alternative reasoning that links the choice to the data or to safety; ecf from (b).",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a hydrocarbon such as methane burns **completely** in oxygen, what are the products?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon monoxide and water" },
              { id: "b", text: "Carbon and hydrogen" },
              { id: "c", text: "Carbon dioxide and hydrogen" },
              { id: "d", text: "Carbon dioxide and water" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Combustion", statement: "Complete combustion of a hydrocarbon in oxygen produces carbon dioxide and water." },
            ],
            steps: [
              { reasoning: "Complete combustion gives carbon dioxide and water; carbon monoxide forms only in incomplete combustion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Carbon dioxide and water",
            commonErrors: ["Choosing carbon monoxide, the product of incomplete combustion."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rusting of iron in damp air is an example of which type of reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fast oxidation" },
              { id: "b", text: "Neutralisation" },
              { id: "c", text: "Slow oxidation" },
              { id: "d", text: "Thermal decomposition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation", statement: "Oxidation is a reaction in which a substance gains oxygen; rusting is slow oxidation." },
            ],
            steps: [
              { reasoning: "Iron gains oxygen to form iron oxide (rust) slowly over time, so it is slow oxidation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Slow oxidation",
            commonErrors: ["Calling it combustion; rusting is slow, not burning."],
            examinerNote: "B1 for choice (b). Allow 'oxidation' alone.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The temperature of a reaction mixture falls from $30.0\\ ^\\circ\\text{C}$ to $24.5\\ ^\\circ\\text{C}$. What is the temperature change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5.5\\ ^\\circ\\text{C}$" },
              { id: "b", text: "$+54.5\\ ^\\circ\\text{C}$" },
              { id: "c", text: "$+5.5\\ ^\\circ\\text{C}$" },
              { id: "d", text: "$-54.5\\ ^\\circ\\text{C}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
            ],
            steps: [
              { reasoning: "$\\Delta T = 24.5 - 30.0 = -5.5\\ ^\\circ\\text{C}$; a fall gives a negative change.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-5.5\\ ^\\circ\\text{C}$",
            commonErrors: ["Giving +5.5 by ignoring the direction of the change."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an experiment the temperature of a reaction mixture rises from $20.0\\ ^\\circ\\text{C}$ to $26.5\\ ^\\circ\\text{C}$.\n\nCalculate the temperature change.",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature change", answer: 6.5, tolerance: 0.01, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
            ],
            steps: [
              { reasoning: "Subtract the initial temperature from the final temperature.", working: "26.5 - 20.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 6.5\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+6.5\\ ^\\circ\\text{C}$",
            commonErrors: ["Subtracting the wrong way round to give -6.5."],
            examinerNote: "M1 for 26.5 - 20.0 oe. A1 for 6.5 °C.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "An instant cold pack is activated and the temperature of its contents falls from $25.0\\ ^\\circ\\text{C}$ to $17.5\\ ^\\circ\\text{C}$.\n\nCalculate the temperature change.",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature change", answer: -7.5, tolerance: 0.01, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
            ],
            steps: [
              { reasoning: "Subtract the initial temperature from the final temperature.", working: "17.5 - 25.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate; the negative sign shows the temperature fell.", working: "= -7.5\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-7.5\\ ^\\circ\\text{C}$",
            commonErrors: ["Giving +7.5 without the minus sign."],
            examinerNote: "M1 for 17.5 - 25.0 oe. A1 for -7.5 °C.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reaction mixture warms up from $18.0\\ ^\\circ\\text{C}$ to $31.0\\ ^\\circ\\text{C}$ during a reaction.\n\nCalculate the temperature change.",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature change", answer: 13.0, tolerance: 0.01, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
            ],
            steps: [
              { reasoning: "Subtract the initial temperature from the final temperature.", working: "31.0 - 18.0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 13.0\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+13.0\\ ^\\circ\\text{C}$",
            commonErrors: ["Subtracting 31.0 - 18.0 incorrectly as 12.0."],
            examinerNote: "M1 for 31.0 - 18.0 oe. A1 for 13.0 °C.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two reactions are tested in identical cups.\n\n- Reaction P: temperature rises from $15.0\\ ^\\circ\\text{C}$ to $25.0\\ ^\\circ\\text{C}$\n- Reaction Q: temperature falls from $20.0\\ ^\\circ\\text{C}$ to $14.0\\ ^\\circ\\text{C}$\n\nCalculate the temperature change for each reaction.",
          response: {
            type: "numeric",
            parts: [
              { label: "Change for P", answer: 10.0, tolerance: 0.01, unit: "°C" },
              { label: "Change for Q", answer: -6.0, tolerance: 0.01, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
            ],
            steps: [
              { reasoning: "P: final minus initial.", working: "25.0 - 15.0 = 10.0\\ ^\\circ\\text{C}", marks: 1, markCode: "B" },
              { reasoning: "Q: final minus initial; the negative sign shows a fall.", working: "14.0 - 20.0 = -6.0\\ ^\\circ\\text{C}", marks: 1, markCode: "B" },
              { reasoning: "Both calculations use the same formula $T_{\\text{final}} - T_{\\text{initial}}$.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "P: $+10.0\\ ^\\circ\\text{C}$; Q: $-6.0\\ ^\\circ\\text{C}$",
            commonErrors: ["Forgetting the minus sign for Q.", "Adding the temperatures instead of subtracting."],
            examinerNote: "B1 for each correct value with sign. M1 if the method is shown once for both.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between exothermic and endothermic reactions, giving one example of each and describing what happens to the temperature of the surroundings in each case.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic and endothermic", statement: "Exothermic reactions transfer energy to the surroundings (temperature rises); endothermic reactions take in energy (temperature falls)." },
            ],
            steps: [
              { reasoning: "Exothermic: energy is given out to the surroundings, so the temperature of the surroundings rises.", marks: 1, markCode: "B" },
              { reasoning: "Example of exothermic: combustion, rusting or neutralisation.", marks: 1, markCode: "B" },
              { reasoning: "Endothermic: energy is taken in from the surroundings, so the temperature of the surroundings falls.", marks: 1, markCode: "B" },
              { reasoning: "Example of endothermic: thermal decomposition or dissolving in an instant cold pack.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Exothermic gives out energy and warms the surroundings (e.g. combustion); endothermic takes in energy and cools the surroundings (e.g. thermal decomposition).",
            commonErrors: ["Reversing the definitions.", "Giving an example that does not match the type."],
            examinerNote: "B1 for each definition and B1 for each valid example.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A reusable hand warmer contains iron filings that rust slowly when exposed to air. An instant cold pack contains two chemicals that react when mixed.\n\nExplain why the hand warmer feels warm and the cold pack feels cold, using the terms exothermic and endothermic and the direction of energy transfer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exothermic and endothermic", statement: "Exothermic transfers energy to the surroundings; endothermic takes energy in from them." },
            ],
            steps: [
              { reasoning: "Rusting is a slow oxidation reaction that releases energy, so it is exothermic.", marks: 1, markCode: "B" },
              { reasoning: "The energy released warms the hand, even though it is released slowly.", marks: 1, markCode: "R" },
              { reasoning: "The cold pack reaction takes in energy from the surroundings, so it is endothermic.", marks: 1, markCode: "B" },
              { reasoning: "It removes thermal energy from the skin, so the skin feels cold.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The hand warmer's rusting reaction is exothermic and releases energy to the hand. The cold pack reaction is endothermic and takes energy from the skin.",
            commonErrors: ["Saying the cold pack 'makes cold'; it absorbs heat.", "Saying rusting cannot be exothermic because it is slow."],
            examinerNote: "B1 exothermic / rusting. R1 energy to surroundings / warms hand. B1 endothermic. R1 energy taken in / cools skin.",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which description best matches thermal decomposition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two substances join together to make a new compound" },
              { id: "b", text: "Heat breaks one compound down into two or more simpler substances" },
              { id: "c", text: "One substance reacts with oxygen and burns" },
              { id: "d", text: "An acid and an alkali react to form a salt and water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thermal decomposition", statement: "Heat breaks down one compound into two or more simpler substances." },
            ],
            steps: [
              { reasoning: "Thermal decomposition is the reverse of a joining reaction: one compound splits into simpler substances when heated.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heat breaks one compound down into two or more simpler substances",
            commonErrors: ["Confusing decomposition with combustion."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these reactions is **endothermic**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutralising stomach acid with an antacid tablet" },
              { id: "b", text: "Rusting of an iron gate over several months" },
              { id: "c", text: "Burning methane in a gas stove" },
              { id: "d", text: "Heating copper carbonate so it decomposes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Endothermic reactions", statement: "Thermal decomposition and cold-pack dissolving are endothermic; combustion, neutralisation and oxidation are usually exothermic." },
            ],
            steps: [
              { reasoning: "Heating copper carbonate is thermal decomposition, which takes in energy from the surroundings, so it is endothermic. The others release energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Heating copper carbonate so it decomposes",
            commonErrors: ["Choosing rusting because it is slow; it still releases energy (exothermic)."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-types-of-reaction-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student compares two reactions using identical polystyrene cups and a thermometer.\n\n| Reaction | Initial temperature ($^\\circ\\text{C}$) | Final temperature ($^\\circ\\text{C}$) |\n| --- | --- | --- |\n| R: calcium oxide + water | 20.0 | 35.0 |\n| S: ammonium nitrate + water | 21.0 | 13.0 |\n\nReaction R is used in self-heating food packs and reaction S in instant cold packs.",
          parts: [
            { label: "a", prompt: "Calculate the temperature change for reaction R and for reaction S.", marks: 2 },
            { label: "b", prompt: "Classify each reaction as exothermic or endothermic and give a reason.", marks: 2 },
            { label: "c", prompt: "Suggest two ways the student could make the temperature measurements more reliable.", marks: 2 },
            { label: "d", prompt: "Explain how the energy transfers in each reaction affect the person holding the pack.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "$\\Delta T = T_{\\text{final}} - T_{\\text{initial}}$" },
              { kind: "definition", name: "Exothermic and endothermic", statement: "Exothermic transfers energy to the surroundings; endothermic takes it in." },
            ],
            steps: [
              { part: "a", reasoning: "R: final minus initial.", working: "35.0 - 20.0 = 15.0\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "S: final minus initial.", working: "13.0 - 21.0 = -8.0\\ ^\\circ\\text{C}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "R is exothermic: the temperature rose, so energy was transferred to the surroundings.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "S is endothermic: the temperature fell, so energy was taken in from the surroundings.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Repeat each reaction several times and calculate a mean.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Control variables: same masses and volumes of reactants, same starting temperature, same cup and thermometer; insulate the cup.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "R releases energy to the pack and the hand, so the food warms up.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "S takes in energy from the hand, so the skin feels cold; useful for reducing swelling.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) R: +15.0 °C; S: -8.0 °C (b) R exothermic, S endothermic (c) Repeat and take a mean; control variables / insulate (d) R warms the hand, S cools it.",
            commonErrors: ["In (a) losing the minus sign for S.", "In (b) classifying by the sign of the product temperature only without reference to energy transfer."],
            examinerNote: "(a) Allow -8 °C or '8 °C fall' for S. (c) Allow any two valid improvements. (d) ecf from (b).",
          },
        },
      ],
    },
  ],
};
