import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "myps1-u1-lesson-1-3",
  code: "1-3",
  title: "Mixtures and Separation",
  goal: "I CAN distinguish elements, compounds and mixtures, describe solutions and solubility, and choose and explain a method to separate a mixture, including calculating $R_f$ values.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Criterion C: Processing and evaluating",
    "Key concept: Change",
    "Related concept: Interaction",
  ],
  vocabulary: [
    { term: "Element", definition: "A pure substance made of only one type of atom." },
    { term: "Compound", definition: "A pure substance made of two or more elements chemically joined together." },
    { term: "Mixture", definition: "Two or more substances that are not chemically joined and can be separated by physical methods." },
    { term: "Solute", definition: "A substance that dissolves in a solvent to form a solution." },
    { term: "Solvent", definition: "The liquid in which a solute dissolves." },
    { term: "Saturated solution", definition: "A solution in which no more solute can dissolve at that temperature." },
    { term: "Residue", definition: "The solid left on the filter paper after filtration." },
    { term: "Filtrate", definition: "The liquid that passes through the filter paper." },
  ],
  concepts: [
    {
      id: "myps1-u1-elements-mixtures-solutions",
      title: "Elements, compounds, mixtures and solutions",
      skill: "Classify substances as elements, compounds or mixtures, and describe solutions, solubility and saturated solutions.",
      lesson: {
        sections: [
          {
            heading: "Elements, compounds and mixtures",
            body: "An **element** contains only one type of atom, for example oxygen or iron. A **compound** is two or more elements chemically joined, for example water, $\\text{H}_2\\text{O}$, or carbon dioxide, $\\text{CO}_2$. Compounds have different properties from the elements in them.\n\nA **mixture** is made of substances that are not chemically joined, such as air or sea water. The substances keep their own properties and can be separated by physical methods. A **pure substance** is a single element or compound. Food labelled 'pure' orange juice is not scientifically pure, because it is a mixture.",
          },
          {
            heading: "Solutions and solubility",
            body: "When a **solute** dissolves in a **solvent**, the result is a **solution**. The solute seems to disappear because its particles spread out between the solvent particles. A substance that dissolves is **soluble**; one that does not is **insoluble**.\n\nA **saturated solution** cannot dissolve any more solute at that temperature. **Solubility** is the maximum mass of a solute that dissolves in 100 g of solvent at a given temperature. For most solids, solubility increases as the temperature rises.",
          },
        ],
        keyFormulas: [
          { name: "Element", statement: "One type of atom only" },
          { name: "Compound", statement: "Two or more elements chemically joined" },
          { name: "Solution", statement: "solute + solvent" },
        ],
        workedExample: {
          problem: "Sea water contains water, sodium chloride and other salts. Is sea water an element, a compound or a mixture? Name the solvent and one solute.",
          solution: "Sea water is a mixture, because the water and salts are not chemically joined and can be separated. The solvent is water. A solute is sodium chloride (common salt).",
        },
      },
      questions: [
        {
          id: "myps1-u1-elements-mixtures-solutions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Air" },
              { id: "c", text: "Carbon dioxide" },
              { id: "d", text: "Sea water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "A compound is a pure substance made of two or more elements chemically joined." },
            ],
            steps: [
              { reasoning: "Carbon dioxide, $\\text{CO}_2$, contains carbon and oxygen chemically joined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon dioxide",
            commonErrors: ["Choosing air, which is a mixture of gases.", "Choosing oxygen, which is an element."],
            examinerNote: "B1 for carbon dioxide.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student stirs 30 g of salt into 100 g of water at $20\\ ^\\circ\\text{C}$. Only 36 g of salt can dissolve in 100 g of water at this temperature. She then adds a further 10 g of salt.\n\nCalculate the mass of salt that stays undissolved.",
          response: { type: "numeric", parts: [{ label: "Mass undissolved", answer: 4, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility", statement: "Solubility is the maximum mass of solute that dissolves in 100 g of solvent at a given temperature." },
            ],
            steps: [
              { reasoning: "Find the total mass of salt added.", working: "30+10=40\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the mass that can dissolve (36 g).", working: "40-36=4\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\text{ g}$",
            commonErrors: ["Subtracting 36 from only the first 30 g.", "Forgetting the unit."],
            examinerNote: "M1 for 40 - 36 (oe). A1 for 4 g.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says: 'Salt water is a compound because the salt and water are mixed together.'\n\nExplain why the student is wrong and describe how salt water behaves differently from a compound.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixture", statement: "A mixture contains substances that are not chemically joined and can be separated by physical methods." },
              { kind: "definition", name: "Compound", statement: "A compound has its elements chemically joined and cannot be separated by physical methods." },
            ],
            steps: [
              { reasoning: "Salt water is a mixture because the salt and water are not chemically joined.", marks: 1, markCode: "B" },
              { reasoning: "They keep their own properties: the salt can be recovered by evaporating the water.", marks: 1, markCode: "B" },
              { reasoning: "A compound's elements are chemically joined, so they cannot be separated by physical methods such as evaporation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Salt water is a mixture; the salt and water are not chemically joined and can be separated by evaporation, whereas the elements in a compound can only be separated by chemical reactions.",
            commonErrors: ["Thinking that mixing two substances always forms a compound."],
            examinerNote: "B1 mixture / not chemically joined. B1 can be separated by a physical method (evaporation) oe. R1 elements in a compound cannot be separated by physical methods oe.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates the solubility of a salt called potassium nitrate. The table shows the maximum mass that dissolves in 100 g of water.\n\n| Temperature ($^\\circ\\text{C}$) | 20 | 40 | 60 | 80 |\n| --- | --- | --- | --- | --- |\n| Mass dissolved (g) | 32 | 64 | 110 | 169 |",
          parts: [
            { label: "a", prompt: "Name the solute and the solvent in this investigation.", marks: 2 },
            { label: "b", prompt: "Describe the effect of temperature on the solubility of potassium nitrate.", marks: 1 },
            { label: "c", prompt: "A saturated solution made with 100 g of water at $60\\ ^\\circ\\text{C}$ is cooled to $20\\ ^\\circ\\text{C}$. Calculate the mass of crystals that form.", marks: 2 },
            { label: "d", prompt: "Suggest how the student could investigate whether the same trend applies to a different salt, and name **two** variables to control.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solute and solvent", statement: "The solute dissolves in the solvent to form a solution." },
              { kind: "definition", name: "Saturated solution", statement: "A saturated solution holds the maximum solute at that temperature; cooling reduces the solubility so excess solute forms crystals." },
              { kind: "principle", name: "Fair test", statement: "Change one variable, measure another and control the rest." },
            ],
            steps: [
              { part: "a", reasoning: "The solute is potassium nitrate.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The solvent is water.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "As the temperature increases, the solubility increases (more potassium nitrate dissolves).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract the solubility at $20\\ ^\\circ\\text{C}$ from that at $60\\ ^\\circ\\text{C}$.", working: "110-32", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate with the unit.", working: "78\\text{ g}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Repeat the method with the other salt, finding the mass that dissolves in 100 g of water at each temperature.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A control variable: the volume (or mass) of water.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A second control variable, for example the amount of stirring or the way the temperature is measured.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Solute: potassium nitrate; solvent: water (b) Solubility increases as temperature increases (c) 78 g (d) Repeat with the other salt at the same temperatures, keeping the volume of water and the stirring the same.",
            commonErrors: ["In (c) giving 110 g or 32 g instead of the difference.", "In (d) controlling temperature, which is the independent variable."],
            examinerNote: "(c) M1 for 110 - 32 oe; A1 for 78. (d) Accept mass of water, volume of water, stirring, particle size of salt. Reject temperature.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these substances is an **element**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Salt" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element", statement: "An element contains only one type of atom." },
            ],
            steps: [
              { reasoning: "Oxygen is made of only oxygen atoms; water, salt and carbon dioxide are compounds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oxygen",
            commonErrors: ["Choosing water, which is a compound of hydrogen and oxygen.", "Choosing salt, which is a compound."],
            examinerNote: "B1 for oxygen.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student stirs salt into water to make salt water. In this solution, which substance is the **solute**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Salt" },
              { id: "c", text: "The beaker" },
              { id: "d", text: "The solution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solute and solvent", statement: "The solute is the substance that dissolves; the solvent is the substance it dissolves in." },
            ],
            steps: [
              { reasoning: "The salt dissolves in the water, so the salt is the solute and the water is the solvent.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Salt",
            commonErrors: ["Choosing water, which is the solvent."],
            examinerNote: "B1 for salt.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a **mixture**?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distilled water" },
              { id: "b", text: "Pure oxygen gas" },
              { id: "c", text: "Air" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixture", statement: "A mixture contains two or more substances that are not chemically joined and can be separated by physical methods." },
            ],
            steps: [
              { reasoning: "Air contains nitrogen, oxygen and other gases that are not chemically joined, so it is a mixture.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Air",
            commonErrors: ["Choosing carbon dioxide, which is a compound.", "Choosing distilled water, which is a pure substance."],
            examinerNote: "B1 for air.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solution is saturated at $20\\ ^\\circ\\text{C}$. The student adds more of the dissolved solid and stirs.\n\nDescribe what happens and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Saturated solution", statement: "A saturated solution holds the maximum amount of solute at that temperature; extra solute cannot dissolve." },
            ],
            steps: [
              { reasoning: "The extra solid does not dissolve; it settles at the bottom (or remains visible).", marks: 1, markCode: "B" },
              { reasoning: "The solution is already saturated, so it holds the maximum amount of solute at that temperature.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The extra solid does not dissolve and stays at the bottom, because the solution is already saturated at that temperature.",
            commonErrors: ["Saying the solid 'disappears' or the solution becomes 'over-saturated'.", "Saying the temperature is too low without mentioning saturation."],
            examinerNote: "B1 for solid remains / does not dissolve. R1 for saturated / maximum solute oe.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these changes is a **physical** change rather than a chemical change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burning paper" },
              { id: "b", text: "Rusting iron" },
              { id: "c", text: "Dissolving salt in water" },
              { id: "d", text: "Cooking an egg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Physical change", statement: "A physical change does not form a new substance; the original substances can be recovered." },
            ],
            steps: [
              { reasoning: "Dissolving salt is physical: the salt can be recovered by evaporating the water, and no new substance forms.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Dissolving salt in water",
            commonErrors: ["Choosing melting or boiling-type changes incorrectly; burning, rusting and cooking form new substances."],
            examinerNote: "B1 for dissolving. Accept 'melting ice' if offered.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student claims: 'The solubility of every solid increases as temperature increases.'\n\nIs this claim correct? Explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solubility and temperature", statement: "For most solids, solubility increases as temperature increases, but this is not true for every solid." },
            ],
            steps: [
              { reasoning: "The claim is not correct for every solid.", marks: 1, markCode: "B" },
              { reasoning: "Although solubility usually increases with temperature for most solids (for example potassium nitrate), some substances have solubility that changes very little or even decreases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Not correct for every solid: solubility usually increases with temperature for most solids, but there are exceptions.",
            commonErrors: ["Answering 'yes' because most solids behave this way.", "Saying solubility always decreases."],
            examinerNote: "B1 for 'not every solid' / 'there are exceptions'. R1 for solubility usually increasing with temperature for most solids oe.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "At $25\\ ^\\circ\\text{C}$, the solubility of a salt is 45 g per 100 g of water. A student adds 60 g of the salt to 100 g of water at this temperature and stirs until no more dissolves.\n\nCalculate the mass of salt that stays undissolved.",
          response: { type: "numeric", parts: [{ label: "Mass undissolved", answer: 15, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility", statement: "Solubility is the maximum mass of solute that dissolves in 100 g of solvent at a given temperature." },
            ],
            steps: [
              { reasoning: "Subtract the solubility from the mass added.", working: "60-45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "15\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\text{ g}$",
            commonErrors: ["Answering 45 g or 60 g instead of the difference.", "Forgetting the unit."],
            examinerNote: "M1 for 60 - 45. A1 for 15 g.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The solubility of sugar at $20\\ ^\\circ\\text{C}$ is 200 g per 100 g of water.\n\nCalculate the maximum mass of sugar that can dissolve in 250 g of water at this temperature.",
          response: { type: "numeric", parts: [{ label: "Maximum mass dissolved", answer: 500, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility", statement: "Solubility scales with the mass of solvent: double the water dissolves double the solute." },
            ],
            steps: [
              { reasoning: "250 g is 2.5 times 100 g, so the mass dissolved is 2.5 times 200 g.", working: "200\\times2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "500\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500\\text{ g}$",
            commonErrors: ["Answering 200 g without scaling for the larger volume of water.", "Multiplying 200 by 250 instead of by 2.5."],
            examinerNote: "M1 for 200 x 2.5 or 200/100 x 250. A1 for 500 g.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "The solubility of a salt is 40 g per 100 g of water at $30\\ ^\\circ\\text{C}$.\n\nCalculate (i) the mass that dissolves in 150 g of water, (ii) the mass that dissolves in 50 g of water, and (iii) the total mass that dissolves if both solutions are mixed together.",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass dissolved in 150 g of water", answer: 60, unit: "g" },
              { label: "Mass dissolved in 50 g of water", answer: 20, unit: "g" },
              { label: "Total mass dissolved in the mixed solution", answer: 80, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility", statement: "Solubility scales with the mass of solvent." },
            ],
            steps: [
              { reasoning: "150 g is 1.5 times 100 g, so 1.5 x 40 g dissolves.", working: "40\\times1.5=60\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "50 g is 0.5 times 100 g, so 0.5 x 40 g dissolves.", working: "40\\times0.5=20\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "Add the two masses.", working: "60+20=80\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\text{ g}$, $20\\text{ g}$, $80\\text{ g}$",
            commonErrors: ["Using 40 g for every amount of water.", "Multiplying 40 by 150 directly."],
            examinerNote: "M1 for each correct scaling. A1 for 80 g. Allow ecf for part (iii).",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The solubility of potassium nitrate is 32 g per 100 g of water at $20\\ ^\\circ\\text{C}$ and 64 g per 100 g of water at $40\\ ^\\circ\\text{C}$.\n\nCalculate (i) the increase in solubility between these temperatures, (ii) the percentage increase in solubility, (iii) the mass that dissolves in 250 g of water at $40\\ ^\\circ\\text{C}$, and (iv) the mass that stays undissolved if 200 g of potassium nitrate is added to 250 g of water at $40\\ ^\\circ\\text{C}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Increase in solubility", answer: 32, unit: "g" },
              { label: "Percentage increase in solubility", answer: 100, unit: "%" },
              { label: "Mass dissolved in 250 g of water at 40 °C", answer: 160, unit: "g" },
              { label: "Mass undissolved", answer: 40, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage increase}=\\dfrac{\\text{increase}}{\\text{original}}\\times100$" },
              { kind: "definition", name: "Solubility", statement: "Solubility scales with the mass of solvent." },
            ],
            steps: [
              { reasoning: "Subtract the solubility at $20\\ ^\\circ\\text{C}$ from that at $40\\ ^\\circ\\text{C}$.", working: "64-32=32\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "Divide the increase by the original solubility and multiply by 100.", working: "\\frac{32}{32}\\times100=100\\%", marks: 1, markCode: "M" },
              { reasoning: "250 g is 2.5 times 100 g, so 2.5 x 64 g dissolves.", working: "64\\times2.5=160\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the mass that dissolves from the mass added.", working: "200-160=40\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32\\text{ g}$, $100\\%$, $160\\text{ g}$, $40\\text{ g}$",
            commonErrors: ["Dividing the increase by the new solubility for part (ii).", "Answering 64 g or 200 g instead of the difference for part (iv)."],
            examinerNote: "M1 for each correct method. A1 for 40 g. Allow ecf on part (iv) if part (iii) is consistent.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student mixes iron filings with yellow sulfur powder. The result is a grey powder that looks the same throughout.",
          parts: [
            { label: "a", prompt: "State whether this grey powder is an element, a compound or a mixture, and give a reason.", marks: 2 },
            { label: "b", prompt: "Describe how the student could separate the iron filings from the mixture.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixture", statement: "A mixture contains substances that are not chemically joined and can be separated by physical methods." },
              { kind: "property", name: "Magnetic separation", statement: "Iron is magnetic, so a magnet can attract and remove iron filings from a mixture." },
            ],
            steps: [
              { part: "a", reasoning: "It is a mixture.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The iron and sulfur are not chemically joined; they can be separated by physical methods such as a magnet.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Use a magnet to attract the iron filings out of the mixture.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The sulfur is left behind because it is not magnetic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) A mixture: iron and sulfur are not chemically joined and can be separated physically (b) Use a magnet to attract out the iron filings; the sulfur remains.",
            commonErrors: ["Calling it a compound because it looks uniform.", "Suggesting filtration or evaporation, which do not work on dry powders."],
            examinerNote: "(a) Allow 'mixture' with reason 'not chemically joined' oe. (b) Accept 'magnetic separation' oe.",
          },
        },
        {
          id: "myps1-u1-elements-mixtures-solutions-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student has a mixture of iron filings, sand and salt. She wants to obtain the dry iron filings, dry sand and dry salt separately.",
          parts: [
            { label: "a", prompt: "Describe the first step to remove the iron filings.", marks: 2 },
            { label: "b", prompt: "The remaining mixture of sand and salt is added to water and stirred. Describe how to separate the sand from the salt solution.", marks: 2 },
            { label: "c", prompt: "Describe how to obtain dry salt from the salt solution.", marks: 2 },
            { label: "d", prompt: "Explain why all the separations used are physical changes, not chemical changes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing separation methods", statement: "Use magnetic separation for iron, filtration for an insoluble solid, and evaporation or crystallisation for a dissolved solid." },
              { kind: "definition", name: "Physical change", statement: "A physical change does not form a new substance; each component keeps its own properties." },
            ],
            steps: [
              { part: "a", reasoning: "Pass a magnet through the mixture to attract the iron filings.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The iron sticks to the magnet and is lifted out, leaving sand and salt.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Filter the mixture: the sand is insoluble and is trapped on the filter paper as the residue.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The salt solution passes through as the filtrate.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Heat the filtrate to evaporate the water, leaving the salt behind.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Alternatively, evaporate some water and leave the saturated solution to crystallise, or heat until dry.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "No new substances are formed; each component keeps its own properties and can be recovered.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The iron, sand and salt are simply separated, not chemically joined or changed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Use a magnet to remove the iron filings (b) Filter: sand is the residue, salt solution is the filtrate (c) Evaporate the water (or crystallise) to get dry salt (d) Physical changes: no new substances form and each component can be recovered unchanged.",
            commonErrors: ["In (a) using filtration first, which cannot separate iron from sand.", "In (b) evaporating before filtering, which leaves sand mixed with salt.", "In (d) saying the salt 'disappears' when dissolved."],
            examinerNote: "(a) B1 magnet, B1 iron removed. (c) Accept evaporation to dryness or crystallisation. (d) Allow 'the substances can be recovered' oe.",
          },
        },
      ],
    },
    {
      id: "myps1-u1-separation-methods",
      title: "Separating mixtures and chromatography",
      skill: "Choose and describe filtration, evaporation, crystallisation, simple distillation and paper chromatography, and calculate $R_f$ values.",
      lesson: {
        sections: [
          {
            heading: "Choosing a method",
            body: "The method depends on the properties of the substances.\n\n- **Filtration** separates an insoluble solid from a liquid. The solid is the residue; the liquid is the filtrate.\n- **Evaporation** removes the solvent to leave the dissolved solid.\n- **Crystallisation** forms larger crystals: evaporate some of the solvent, then leave the saturated solution to cool.\n- **Simple distillation** separates a solvent from a solution. The solution is boiled, the vapour is cooled in a condenser, and the pure liquid is collected.",
          },
          {
            heading: "Paper chromatography",
            body: "Chromatography separates dissolved substances, such as the dyes in an ink. A pencil line (not ink) is drawn near the bottom of the paper and a spot of the mixture is placed on it. The paper stands in a solvent which must be **below** the line. The solvent soaks up the paper and carries the substances at different speeds.\n\nThe $R_f$ value compares how far a substance travels with how far the solvent travels:\n\n$$R_f=\\frac{\\text{distance moved by the substance}}{\\text{distance moved by the solvent}}$$\n\n$R_f$ has no unit and is always less than 1. The same substance always has the same $R_f$ in the same solvent, so it can be identified.",
          },
        ],
        keyFormulas: [
          { name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
          { name: "Insoluble solid from liquid", statement: "Filtration" },
          { name: "Solvent from a solution", statement: "Simple distillation" },
        ],
        workedExample: {
          problem: "In a chromatogram, the solvent front moved 8.0 cm and a dye spot moved 5.2 cm. Calculate the $R_f$ value of the dye.",
          solution: "$R_f=\\dfrac{5.2}{8.0}=0.65$. There is no unit.",
        },
      },
      questions: [
        {
          id: "myps1-u1-separation-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method separates sand from a mixture of sand and water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filtration" },
              { id: "b", text: "Simple distillation" },
              { id: "c", text: "Chromatography" },
              { id: "d", text: "Crystallisation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filtration", statement: "Filtration separates an insoluble solid from a liquid because the solid particles are too large to pass through the filter paper." },
            ],
            steps: [
              { reasoning: "Sand is insoluble, so it is trapped by the filter paper while the water passes through.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Filtration",
            commonErrors: ["Choosing distillation, which is used to separate a liquid from a solution."],
            examinerNote: "B1 for filtration.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a paper chromatography experiment, the solvent moved 12.0 cm up the paper. A yellow dye in the ink moved 9.0 cm.\n\nCalculate the $R_f$ value of the yellow dye.",
          response: { type: "numeric", parts: [{ label: "$R_f$ value", answer: 0.75, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance moved by the dye by the distance moved by the solvent.", working: "R_f=\\frac{9.0}{12.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. There is no unit.", working: "R_f=0.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.75$",
            commonErrors: ["Inverting the fraction, giving 1.33.", "Adding a unit such as cm."],
            examinerNote: "M1 for 9.0 / 12.0. A1 for 0.75. Reject an answer greater than 1.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student has a mixture of sand, salt and water. She wants to obtain dry sand and dry salt from it.\n\nDescribe how she can separate the mixture, naming the method for each step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Choosing methods", statement: "Use filtration for an insoluble solid and evaporation (or crystallisation) to recover a dissolved solid." },
            ],
            steps: [
              { reasoning: "Filter the mixture: the sand is the residue and is trapped on the filter paper.", marks: 1, markCode: "B" },
              { reasoning: "Wash and dry the residue (for example in a warm oven) to get dry sand.", marks: 1, markCode: "B" },
              { reasoning: "The filtrate is salt solution. Heat it to evaporate most of the water.", marks: 1, markCode: "B" },
              { reasoning: "Leave the saturated solution to crystallise, or heat until dry, to obtain the salt.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Filter to remove the sand and dry it; evaporate water from the filtrate to leave salt crystals.",
            commonErrors: ["Using distillation to get the sand.", "Doing evaporation before filtration, which leaves a mixture of sand and salt."],
            examinerNote: "B1 filtration. B1 dry the residue. B1 evaporate the filtrate. B1 leave to crystallise / heat to dryness. Allow distillation if the purpose is also to collect pure water, but only for evaporation.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A forensic scientist uses paper chromatography to find which of three pens (X, Y and Z) was used to write a note. She places a spot of ink from the note and a spot of ink from each pen on a pencil line, and places the paper in water. The solvent front moves 10.0 cm. The distances moved by the spots are:\n\n| Spot | Distance moved (cm) |\n| --- | --- |\n| Ink from note | 4.0 |\n| Pen X | 6.5 |\n| Pen Y | 4.0 |\n| Pen Z | 4.0 and 7.5 |",
          parts: [
            { label: "a", prompt: "Explain why the start line is drawn in pencil and not in ink.", marks: 2 },
            { label: "b", prompt: "Calculate the $R_f$ value of the ink from the note.", marks: 2 },
            { label: "c", prompt: "State which pen was most likely used to write the note, and give a reason. Explain why pen Z is unlikely to be the pen.", marks: 3 },
            { label: "d", prompt: "Evaluate whether this experiment proves which pen wrote the note.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
              { kind: "principle", name: "Chromatography", statement: "Different substances travel different distances; the same substance gives the same $R_f$ in the same solvent." },
              { kind: "skill", name: "Evaluating evidence", statement: "A conclusion should match the evidence, and similar results do not always prove identity." },
            ],
            steps: [
              { part: "a", reasoning: "Pencil is insoluble in the solvent, so it does not move up the paper.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Ink is soluble and would dissolve and run with the sample, confusing the results.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Divide the distance moved by the ink by the distance moved by the solvent.", working: "R_f=\\frac{4.0}{10.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. There is no unit.", working: "R_f=0.40", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pen Y is the most likely pen.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Its single spot travelled 4.0 cm, the same distance as the ink from the note (same $R_f$).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Pen Z has a second spot (7.5 cm) that is not in the note, so its ink contains a dye the note does not have.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The experiment does not prove it because different inks can contain a dye with the same $R_f$ in this solvent.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Improve it by repeating with a different solvent, or by using other evidence such as handwriting.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Pencil is insoluble and does not run; ink would dissolve (b) 0.40 (c) Pen Y: single spot at 4.0 cm matches the note; pen Z has an extra spot at 7.5 cm (d) Not proof: different inks may share a dye; repeat with another solvent.",
            commonErrors: ["In (a) saying pencil is easier to see.", "In (b) using the distance moved by pen X.", "In (c) choosing pen X because it moved the furthest."],
            examinerNote: "(b) Allow 0.4. (c) B1 pen Y, B1 same distance / same Rf as the note, R1 pen Z has an extra spot / extra dye. (d) Allow any valid evaluation point.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method separates a dissolved solid from a solution, leaving the solid behind?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filtration" },
              { id: "b", text: "Evaporation" },
              { id: "c", text: "Paper chromatography" },
              { id: "d", text: "Magnetic separation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaporation", statement: "Evaporation removes the solvent so that the dissolved solid is left behind." },
            ],
            steps: [
              { reasoning: "Heating the solution evaporates the water, leaving the dissolved solid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Evaporation",
            commonErrors: ["Choosing filtration, which only works for an insoluble solid."],
            examinerNote: "B1 for evaporation (accept crystallisation).",
          },
        },
        {
          id: "myps1-u1-separation-methods-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a filtration experiment, what is the name given to the solid that is left on the filter paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filtrate" },
              { id: "b", text: "Distillate" },
              { id: "c", text: "Residue" },
              { id: "d", text: "Precipitate only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residue and filtrate", statement: "In filtration, the insoluble solid left on the filter paper is the residue; the liquid that passes through is the filtrate." },
            ],
            steps: [
              { reasoning: "The solid trapped on the filter paper is called the residue.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Residue",
            commonErrors: ["Choosing filtrate, which is the liquid that passes through."],
            examinerNote: "B1 for residue.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the $R_f$ value in paper chromatography measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mass of the substance separated" },
              { id: "b", text: "The ratio of the distance moved by the substance to the distance moved by the solvent" },
              { id: "c", text: "The colour of the substance" },
              { id: "d", text: "The time taken for the solvent to move" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "The $R_f$ value compares how far the substance travelled with how far the solvent travelled.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The ratio of the distance moved by the substance to the distance moved by the solvent",
            commonErrors: ["Choosing the mass or colour of the substance."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps1-u1-separation-methods-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a paper chromatography experiment, the pencil start line is drawn near the bottom of the paper and the solvent level must be kept **below** the line. Explain why the solvent must not touch the pencil line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chromatography setup", statement: "The solvent must stay below the start line so the substances begin moving only when the solvent reaches them." },
            ],
            steps: [
              { reasoning: "If the solvent touches the pencil line directly, the sample spots would be washed into the solvent reservoir or start moving before the solvent reaches them.", marks: 1, markCode: "B" },
              { reasoning: "Keeping the solvent below the line ensures all substances start moving at the same time from the same point, so the $R_f$ values are comparable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "If the solvent touches the line, the sample could be washed away or start moving too early; keeping it below ensures a fair, comparable start.",
            commonErrors: ["Saying the paper would 'dissolve'.", "Saying it is only to stop the paper falling over."],
            examinerNote: "B1 for sample washed away / spots disturbed. R1 for fair start / same conditions oe.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student wants to obtain large, pure crystals of copper sulfate from a copper sulfate solution. Which method should she use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boil the solution until completely dry" },
              { id: "b", text: "Crystallisation: evaporate some water, then cool the saturated solution" },
              { id: "c", text: "Filter the solution" },
              { id: "d", text: "Add more water and stir" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crystallisation", statement: "Crystallisation forms larger, purer crystals: evaporate some solvent, then let the saturated solution cool." },
            ],
            steps: [
              { reasoning: "Crystallisation gives larger crystals than heating to complete dryness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Crystallisation: evaporate some water, then cool the saturated solution",
            commonErrors: ["Choosing boiling to dryness, which gives a powder or crust, not crystals."],
            examinerNote: "B1 for crystallisation.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a chromatography experiment, the solvent front moved 10.0 cm up the paper and a dye spot moved 4.0 cm.\n\nA student says the $R_f$ value of the dye is 2.5. Explain why the student is wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "The $R_f$ value is the substance distance divided by the solvent distance: $4.0/10.0=0.40$.", marks: 1, markCode: "M" },
              { reasoning: "The student inverted the fraction; an $R_f$ value is always less than 1 because a substance cannot travel further than the solvent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The $R_f$ value is $0.40$, not 2.5; the student divided the wrong way round, and $R_f$ is always less than 1.",
            commonErrors: ["Recalculating as $10.0/4.0$ and getting 2.5 again.", "Not realising $R_f$ must be less than 1."],
            examinerNote: "M1 for 4.0/10.0. R1 for $R_f<1$ / inverted fraction oe.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a chromatography experiment, the solvent front moved 12.0 cm and a blue dye moved 6.0 cm.\n\nCalculate the $R_f$ value of the blue dye.",
          response: { type: "numeric", parts: [{ label: "$R_f$ value", answer: 0.5, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance moved by the dye by the distance moved by the solvent.", working: "R_f=\\frac{6.0}{12.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. There is no unit.", working: "R_f=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Inverting the fraction to give 2.", "Adding a unit."],
            examinerNote: "M1 for 6.0/12.0. A1 for 0.5.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a chromatography experiment, the solvent front moved 8.0 cm and a red dye moved 2.0 cm.\n\nCalculate the $R_f$ value of the red dye.",
          response: { type: "numeric", parts: [{ label: "$R_f$ value", answer: 0.25, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "Divide the distance moved by the dye by the distance moved by the solvent.", working: "R_f=\\frac{2.0}{8.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. There is no unit.", working: "R_f=0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$",
            commonErrors: ["Inverting the fraction to give 4.", "Forgetting that $R_f$ has no unit."],
            examinerNote: "M1 for 2.0/8.0. A1 for 0.25.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a chromatography experiment, the solvent front moved 9.0 cm. Dye A moved 3.6 cm and dye B moved 6.3 cm.\n\nCalculate the $R_f$ value of each dye and the difference between them.",
          response: {
            type: "numeric",
            parts: [
              { label: "$R_f$ value of dye A", answer: 0.4, tolerance: 0.01 },
              { label: "$R_f$ value of dye B", answer: 0.7, tolerance: 0.01 },
              { label: "Difference between the $R_f$ values", answer: 0.3, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "For dye A: $3.6/9.0$.", working: "R_f=0.4", marks: 1, markCode: "M" },
              { reasoning: "For dye B: $6.3/9.0$.", working: "R_f=0.7", marks: 1, markCode: "M" },
              { reasoning: "Subtract the smaller $R_f$ from the larger.", working: "0.7-0.4=0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dye A: $0.4$; dye B: $0.7$; difference $0.3$",
            commonErrors: ["Inverting the fractions.", "Subtracting the distances instead of the $R_f$ values."],
            examinerNote: "M1 for each $R_f$. A1 for 0.3. Allow 0.30 or 0.3.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A forensic scientist uses chromatography to test ink. The solvent front moves 12.0 cm. Three spots are tested:\n\n| Spot | Distance moved (cm) |\n| --- | --- |\n| Ink from note | 9.0 |\n| Pen P | 6.0 |\n| Pen Q | 3.0 |",
          response: {
            type: "numeric",
            parts: [
              { label: "$R_f$ value of the ink from the note", answer: 0.75, tolerance: 0.01 },
              { label: "$R_f$ value of pen P", answer: 0.5, tolerance: 0.01 },
              { label: "$R_f$ value of pen Q", answer: 0.25, tolerance: 0.01 },
              { label: "Difference between the largest and smallest $R_f$ values", answer: 0.5, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { reasoning: "Ink from note: $9.0/12.0$.", working: "R_f=0.75", marks: 1, markCode: "M" },
              { reasoning: "Pen P: $6.0/12.0$.", working: "R_f=0.5", marks: 1, markCode: "M" },
              { reasoning: "Pen Q: $3.0/12.0$.", working: "R_f=0.25", marks: 1, markCode: "M" },
              { reasoning: "Subtract the smallest $R_f$ from the largest.", working: "0.75-0.25=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.75$, $0.5$, $0.25$, difference $0.5$",
            commonErrors: ["Using the spot distances instead of dividing by the solvent distance.", "Subtracting distances instead of $R_f$ values."],
            examinerNote: "M1 for each correct $R_f$. A1 for 0.5. Allow ecf for part (iv).",
          },
        },
        {
          id: "myps1-u1-separation-methods-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student wants to use paper chromatography to check whether two inks contain the same dyes.",
          parts: [
            { label: "a", prompt: "Describe how to set up the chromatography experiment.", marks: 2 },
            { label: "b", prompt: "Describe how to calculate the $R_f$ value of a dye spot.", marks: 1 },
            { label: "c", prompt: "Explain how the student can use the $R_f$ values to compare the two inks.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chromatography setup", statement: "Draw a pencil line near the bottom, place spots of each ink on it, and stand the paper in a solvent kept below the line." },
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Draw a pencil line near the bottom of the paper and place a spot of each ink on the line.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Stand the paper in a suitable solvent with the solvent level below the pencil line, and leave it until the solvent front is near the top.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Measure the distance moved by the dye spot and the distance moved by the solvent front, then divide the first by the second.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "If the two inks produce spots at the same heights (same $R_f$ values), they contain the same dyes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Pencil line near bottom, spots of each ink on it, paper in solvent below the line (b) $R_f$ = distance moved by dye / distance moved by solvent (c) Matching $R_f$ values / spot positions suggest the inks contain the same dyes.",
            commonErrors: ["In (a) using ink for the start line or letting the solvent touch the line.", "In (b) dividing the solvent distance by the dye distance."],
            examinerNote: "(a) Accept 'leave until solvent front near top' oe. (c) Allow 'same number of spots at same heights' oe.",
          },
        },
        {
          id: "myps1-u1-separation-methods-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student tests whether two markers, P and Q, contain the same dye. She spots both inks on a pencil line and places the paper in ethanol. The solvent front moves 10.0 cm. The distances moved by the spots are:\n\n| Spot | Distance moved (cm) |\n| --- | --- |\n| Ink P | 6.0 |\n| Ink Q | 6.0 and 3.0 |\n| Ink R (known dye) | 3.0 |",
          parts: [
            { label: "a", prompt: "Explain why the start line must be drawn in pencil, not ink.", marks: 2 },
            { label: "b", prompt: "Calculate the $R_f$ value of the dye in ink P.", marks: 2 },
            { label: "c", prompt: "Calculate the $R_f$ values of the two dyes in ink Q.", marks: 2 },
            { label: "d", prompt: "State whether inks P and Q contain the same dye, and give a reason.", marks: 2 },
            { label: "e", prompt: "Explain the role of ink R in this experiment.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "$R_f$ value", statement: "$R_f=\\dfrac{\\text{distance moved by substance}}{\\text{distance moved by solvent}}$" },
              { kind: "principle", name: "Chromatography", statement: "The same substance gives the same $R_f$ in the same solvent; different substances give different $R_f$ values." },
              { kind: "skill", name: "Evaluating evidence", statement: "A conclusion should match the evidence; a reference sample helps identify substances." },
            ],
            steps: [
              { part: "a", reasoning: "Pencil is insoluble in the solvent, so the line does not move or dissolve.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Ink is soluble and would dissolve and run with the sample, confusing the results.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Divide the distance moved by ink P by the solvent distance.", working: "R_f=\\frac{6.0}{10.0}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. There is no unit.", working: "R_f=0.60", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First dye: $6.0/10.0=0.60$; second dye: $3.0/10.0=0.30$.", working: "R_f=0.60\\text{ and }0.30", marks: 2, markCode: "M" },
              { part: "d", reasoning: "No: ink P has one dye ($R_f=0.60$) while ink Q has two dyes ($R_f=0.60$ and $0.30$).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "They share one dye but ink Q contains an extra dye, so they are not identical.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Ink R is a known reference: its $R_f$ value ($0.30$) identifies the dye in ink Q as the same dye.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Pencil is insoluble; ink would dissolve and run (b) 0.60 (c) 0.60 and 0.30 (d) No: ink Q has an extra dye (e) Ink R is a reference sample whose $R_f$ identifies the dye.",
            commonErrors: ["In (c) giving only one $R_f$ for ink Q.", "In (d) saying yes because both inks have a spot at 6.0 cm.", "In (e) saying ink R is the sample being tested."],
            examinerNote: "(c) Award 1 mark for each correct $R_f$. (d) B1 for 'no/different', R1 for extra dye. (e) Accept 'to compare / identify the dye' oe.",
          },
        },
      ],
    },
  ],
};
