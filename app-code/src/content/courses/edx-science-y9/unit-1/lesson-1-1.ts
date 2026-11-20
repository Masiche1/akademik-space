import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "esc9-u1-lesson-1-1",
  code: "1-1",
  title: "Nutrition and Digestion",
  goal: "I CAN describe a balanced diet, carry out food tests, and explain how the digestive system and enzymes break down food.",
  standards: ["KS3 Biology", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Nutrient", definition: "A substance in food that the body needs, for example carbohydrate, protein, lipid (fat), vitamins, minerals, fibre and water." },
    { term: "Balanced diet", definition: "A diet that contains all the nutrients the body needs, in the correct amounts." },
    { term: "Digestion", definition: "The breakdown of large, insoluble food molecules into small, soluble molecules that can be absorbed." },
    { term: "Enzyme", definition: "A biological catalyst, made of protein, that speeds up a chemical reaction without being used up." },
    { term: "Denaturation", definition: "A permanent change in the shape of an enzyme, for example at high temperature, so that it can no longer work." },
    { term: "Bile", definition: "A green-yellow alkaline liquid made in the liver and stored in the gall bladder. It neutralises stomach acid and emulsifies fats." },
    { term: "Absorption", definition: "The movement of digested food molecules from the small intestine into the blood." },
  ],
  concepts: [
    {
      id: "esc9-u1-diet-food-tests",
      title: "A balanced diet and food tests",
      skill: "Name the nutrients in a balanced diet, calculate energy from food and carry out chemical tests for starch, reducing sugars and protein.",
      lesson: {
        sections: [
          {
            heading: "Nutrients and a balanced diet",
            body: "A balanced diet contains the right amounts of seven types of nutrient.\n\n- **Carbohydrates** supply energy.\n- **Proteins** are used for growth and repair.\n- **Lipids (fats and oils)** are an energy store and provide insulation.\n- **Vitamins and minerals** are needed in small amounts, for example vitamin C for healthy skin and iron to make haemoglobin.\n- **Fibre** keeps food moving through the gut.\n- **Water** is needed for chemical reactions and for transport.\n\nThe amount of energy a person needs depends on their age, activity and size. Eating more energy than you use can lead to weight gain.",
          },
          {
            heading: "Energy in food",
            body: "Energy is measured in kilojoules ($\\text{kJ}$). Different nutrients release different amounts of energy per gram. The energy from a nutrient in a food is found by multiplying the mass of that nutrient by the energy released per gram.",
          },
          {
            heading: "Food tests",
            body: "- **Starch:** add a few drops of iodine solution. A positive result is a colour change from orange-brown to **blue-black**.\n- **Reducing sugars (such as glucose):** add Benedict's solution and heat in a hot water bath for a few minutes. A positive result is a change from blue to green, yellow, orange or **brick-red**, depending on the amount of sugar.\n- **Protein:** add Biuret solution. A positive result is a change from blue to **purple (lilac)**.\n\nWear eye protection, because the solutions can irritate the eyes, and use a water bath rather than heating the tube directly.",
          },
        ],
        keyFormulas: [
          { name: "Energy from a nutrient", statement: "$\\text{energy (kJ)} = \\text{mass of nutrient (g)} \\times \\text{energy per gram (kJ/g)}$" },
          { name: "Starch test", statement: "Iodine solution: orange-brown to blue-black" },
          { name: "Reducing sugar test", statement: "Benedict's solution, heated: blue to brick-red" },
          { name: "Protein test", statement: "Biuret solution: blue to purple" },
        ],
        workedExample: {
          problem: "A portion of food contains 12 g of protein. Protein releases 17 kJ per gram. Calculate the energy released from the protein in the portion.",
          solution: "Energy = mass $\\times$ energy per gram $= 12 \\times 17 = 204\\text{ kJ}$.",
        },
      },
      questions: [
        {
          id: "esc9-u1-diet-food-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is needed mainly for growth and repair of body tissues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbohydrate" },
              { id: "b", text: "Protein" },
              { id: "c", text: "Fibre" },
              { id: "d", text: "Lipid (fat)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function of protein", statement: "Proteins are the nutrient used to build new cells and repair damaged tissue." },
            ],
            steps: [
              { reasoning: "Amino acids from protein are used to make new cells and tissues.", working: "\\text{protein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Protein",
            commonErrors: ["Choosing carbohydrate because it is the main energy source and confusing energy with growth.", "Choosing fibre, which keeps food moving through the gut."],
            examinerNote: "B1 for protein.",
          },
        },
        {
          id: "esc9-u1-diet-food-tests-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A snack bar contains 8 g of fat. Fat releases 37 kJ of energy per gram. Calculate the energy released from the fat in the snack bar.",
          response: { type: "numeric", parts: [{ label: "Energy from fat", answer: 296, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy from a nutrient", statement: "$\\text{energy} = \\text{mass} \\times \\text{energy per gram}$" },
            ],
            steps: [
              { reasoning: "Multiply the mass of fat by the energy released per gram.", working: "E = 8 \\times 37", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and give the unit.", working: "E = 296\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$296\\text{ kJ}$",
            commonErrors: ["Dividing 37 by 8 instead of multiplying.", "Adding the two numbers to get 45."],
            examinerNote: "M1 for $8 \\times 37$. A1 for 296 with the correct unit; allow 296 without a unit for M1 A0 only if no unit is given anywhere.",
          },
        },
        {
          id: "esc9-u1-diet-food-tests-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Describe how you would test a sample of food for reducing sugars. Include the positive result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Benedict's test", statement: "Benedict's solution is blue. When heated with a reducing sugar it forms a coloured precipitate, from green through to brick-red." },
            ],
            steps: [
              { reasoning: "Add Benedict's solution to a sample of the food (dissolved in water if it is a solid).", marks: 1, markCode: "B" },
              { reasoning: "Heat the mixture in a hot water bath (about $80^\\circ\\text{C}$) for a few minutes; the solution must be heated.", marks: 1, markCode: "B" },
              { reasoning: "A positive result is a colour change from blue to green, yellow, orange or brick-red.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Add Benedict's solution, heat in a hot water bath, positive result is blue to green/yellow/orange/brick-red.",
            commonErrors: ["Using iodine solution, which tests for starch.", "Forgetting to heat the mixture.", "Stating the positive result as blue-black or purple."],
            examinerNote: "Allow 'hot water' for hot water bath. Ignore the precise temperature if it is stated sensibly. Reject 'boil over a Bunsen burner' without a water bath for the second mark only if there is no mention of heating.",
          },
        },
        {
          id: "esc9-u1-diet-food-tests-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student tests three food samples, W, X and Y. Sample W turns blue-black when iodine solution is added. Sample X turns purple when Biuret solution is added. Sample Y stays blue when Benedict's solution is added and the tube is warmed for only 20 seconds in a beaker of warm water.\n\nSample Y contains 25 g of carbohydrate in every 100 g of the food. Carbohydrate releases 17 kJ of energy per gram.",
          parts: [
            { label: "a", prompt: "Name the nutrient present in sample W.", marks: 1 },
            { label: "b", prompt: "Name the nutrient present in sample X and give one use of this nutrient in the body.", marks: 2 },
            { label: "c", prompt: "The student concludes that sample Y contains no sugar. Suggest two reasons why this conclusion may not be valid.", marks: 2 },
            { label: "d", prompt: "Calculate the energy released from the carbohydrate in a 40 g portion of sample Y.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food tests", statement: "Iodine detects starch (blue-black). Biuret detects protein (purple). Benedict's solution, heated, detects reducing sugars (brick-red)." },
              { kind: "formula", name: "Energy from a nutrient", statement: "$\\text{energy} = \\text{mass} \\times \\text{energy per gram}$" },
            ],
            steps: [
              { part: "a", reasoning: "Blue-black with iodine is the positive test for starch.", working: "\\text{starch}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Purple with Biuret solution is the positive test for protein.", working: "\\text{protein}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Protein is used for growth and repair (allow making enzymes or hormones).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The mixture was not heated for long enough or hot enough, so a positive result may not have appeared.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Benedict's solution only detects reducing sugars, so Y may contain a different sugar (or the sugar may be present in too small an amount to detect).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Find the mass of carbohydrate in 40 g of the food.", working: "\\frac{40}{100} \\times 25 = 10\\text{ g}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply by the energy released per gram.", working: "10 \\times 17", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and give the unit.", working: "170\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Starch (b) Protein; growth and repair (c) Not heated enough / Benedict's detects only reducing sugars (d) $170\\text{ kJ}$",
            commonErrors: ["Naming the nutrient in W as sugar, because the test colour is confused with Benedict's.", "In (d) multiplying 40 by 17 and ignoring that only 25% of the food is carbohydrate."],
            examinerNote: "In (c) allow 'not enough sugar present' (oe). In (d) allow ecf from an incorrect mass in the first step for the second M1 and A1.",
          },
        },
      ],
    },
    {
      id: "esc9-u1-digestion-enzymes",
      title: "The digestive system and enzymes",
      skill: "Describe the parts of the digestive system, the role of digestive enzymes and bile, and how temperature affects enzyme activity.",
      lesson: {
        sections: [
          {
            heading: "The digestive system",
            body: "Food passes along the gut: **mouth**, **oesophagus**, **stomach**, **small intestine**, **large intestine** and out through the anus. Large food molecules are insoluble and must be broken down into small soluble molecules.\n\n- The **stomach** churns food and adds acid and protease.\n- The **liver** makes bile, which is stored in the **gall bladder** and released into the small intestine.\n- The **pancreas** makes digestive enzymes.\n- Digested food is **absorbed** into the blood through the walls of the **small intestine**, which are folded into tiny villi to give a large surface area.\n- The **large intestine** absorbs water.",
          },
          {
            heading: "Digestive enzymes",
            body: "Enzymes are biological catalysts. Each enzyme is **specific**: its active site only fits one type of substrate, like a key in a lock.\n\n- **Amylase** breaks down starch into sugars.\n- **Protease** breaks down proteins into amino acids.\n- **Lipase** breaks down lipids (fats) into fatty acids and glycerol.\n\n**Bile** is not an enzyme. It neutralises stomach acid, making the small intestine alkaline, and emulsifies fat into small droplets, which gives a larger surface area for lipase to work on.",
          },
          {
            heading: "Temperature and enzymes",
            body: "As temperature rises, particles move faster and collide more often, so the rate of reaction increases up to the **optimum temperature**. For human enzymes this is about $37^\\circ\\text{C}$. Above about $40$ to $45^\\circ\\text{C}$ the shape of the active site changes. The enzyme is **denatured** and the substrate no longer fits, so the reaction stops. Denaturation is permanent.\n\nThe rate of a reaction can be compared using $\\text{rate} \\propto \\frac{1}{\\text{time taken}}$: a shorter time means a faster rate.",
          },
        ],
        keyFormulas: [
          { name: "Amylase", statement: "starch $\\rightarrow$ sugars" },
          { name: "Protease", statement: "protein $\\rightarrow$ amino acids" },
          { name: "Lipase", statement: "lipid $\\rightarrow$ fatty acids + glycerol" },
          { name: "Rate and time", statement: "$\\text{rate} = \\frac{1}{\\text{time taken}}$" },
        ],
        workedExample: {
          problem: "Starch is digested by amylase in 90 s at $30^\\circ\\text{C}$ and in 45 s at $37^\\circ\\text{C}$. How many times faster is the reaction at $37^\\circ\\text{C}$?",
          solution: "Rate at $30^\\circ\\text{C}$ is $\\frac{1}{90}$ and rate at $37^\\circ\\text{C}$ is $\\frac{1}{45}$. The ratio is $\\frac{1/45}{1/90} = \\frac{90}{45} = 2$. The reaction is 2 times faster.",
        },
      },
      questions: [
        {
          id: "esc9-u1-digestion-enzymes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which part of the digestive system is most digested food absorbed into the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Oesophagus" },
              { id: "c", text: "Small intestine" },
              { id: "d", text: "Large intestine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absorption", statement: "Digested food molecules are absorbed through the villi of the small intestine, which have a large surface area and a good blood supply." },
            ],
            steps: [
              { reasoning: "The small intestine is where digestion is completed and the products are absorbed.", working: "\\text{small intestine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Small intestine",
            commonErrors: ["Choosing the large intestine, which mainly absorbs water.", "Choosing the stomach, where digestion starts but little is absorbed."],
            examinerNote: "B1 for small intestine.",
          },
        },
        {
          id: "esc9-u1-digestion-enzymes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the role of bile in digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bile", statement: "Bile is made in the liver and stored in the gall bladder. It is alkaline and it emulsifies fats." },
            ],
            steps: [
              { reasoning: "Bile is alkaline, so it neutralises the acid that arrives from the stomach and provides the right pH for enzymes in the small intestine.", marks: 1, markCode: "B" },
              { reasoning: "Bile emulsifies fat, breaking large fat globules into small droplets. This increases the surface area for lipase to digest the fat.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Neutralises stomach acid; emulsifies fat to give a larger surface area for lipase.",
            commonErrors: ["Stating that bile is an enzyme that digests fat chemically.", "Saying bile is made in the gall bladder (it is made in the liver and only stored there)."],
            examinerNote: "Allow 'makes the contents of the small intestine alkaline'. Reject 'bile breaks down fat into fatty acids and glycerol'.",
          },
        },
        {
          id: "esc9-u1-digestion-enzymes-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student measures the time taken for amylase to digest all of the starch in a mixture. At $20^\\circ\\text{C}$ it takes 240 s. At $37^\\circ\\text{C}$ it takes 60 s. The rate of reaction is proportional to $\\frac{1}{\\text{time}}$. Calculate how many times faster the reaction is at $37^\\circ\\text{C}$ than at $20^\\circ\\text{C}$.",
          response: { type: "numeric", parts: [{ label: "Number of times faster", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate and time", statement: "$\\text{rate} \\propto \\frac{1}{\\text{time taken}}$" },
            ],
            steps: [
              { reasoning: "Find the rate at each temperature as the reciprocal of the time.", working: "\\text{rate at } 20^\\circ\\text{C} = \\frac{1}{240},\\quad \\text{rate at } 37^\\circ\\text{C} = \\frac{1}{60}", marks: 1, markCode: "M" },
              { reasoning: "Divide the faster rate by the slower rate.", working: "\\frac{1/60}{1/240} = \\frac{240}{60}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ times faster",
            commonErrors: ["Subtracting the times (240 - 60 = 180).", "Dividing 60 by 240 to get 0.25, the ratio the wrong way round."],
            examinerNote: "Award full marks for $\\frac{240}{60} = 4$ (oe). Accept 'four times' without a unit.",
          },
        },
        {
          id: "esc9-u1-digestion-enzymes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of temperature on the digestion of starch by amylase. She mixes starch solution and amylase in a water bath. Every 30 seconds she removes a drop of the mixture and adds it to iodine solution on a spotting tile. She records the time at which the iodine solution no longer turns blue-black.\n\n| Temperature ($^\\circ\\text{C}$) | Time for starch to disappear |\n| --- | --- |\n| 20 | 240 s |\n| 30 | 120 s |\n| 37 | 60 s |\n| 60 | starch still present after 600 s |",
          parts: [
            { label: "a", prompt: "State the independent variable and the dependent variable in this investigation.", marks: 2 },
            { label: "b", prompt: "Give one control variable and explain why it must be kept the same.", marks: 2 },
            { label: "c", prompt: "Calculate the rate of reaction at $30^\\circ\\text{C}$ using $\\text{rate} = \\frac{1}{\\text{time}}$. Give your answer to 2 significant figures, in $\\text{s}^{-1}$ (per second).", marks: 2 },
            { label: "d", prompt: "Explain the result at $60^\\circ\\text{C}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Variables", statement: "The independent variable is changed by the investigator, the dependent variable is measured, and control variables are kept constant to give a fair test." },
              { kind: "principle", name: "Enzyme denaturation", statement: "Above the optimum temperature an enzyme's active site changes shape. The substrate no longer fits and the enzyme cannot work." },
              { kind: "formula", name: "Rate and time", statement: "$\\text{rate} = \\frac{1}{\\text{time taken}}$" },
            ],
            steps: [
              { part: "a", reasoning: "The investigator changes the temperature.", working: "\\text{independent variable: temperature}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The measured quantity is the time taken for the starch to be digested (so that iodine stays orange-brown).", working: "\\text{dependent variable: time for starch to disappear}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any sensible control variable, for example volume or concentration of amylase, volume or concentration of starch, or pH.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Keeping it the same means only temperature affects the result, so the test is fair.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Take the reciprocal of the time at $30^\\circ\\text{C}$.", working: "\\text{rate} = \\frac{1}{120}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round to 2 significant figures.", working: "0.0083\\text{ s}^{-1}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "At $60^\\circ\\text{C}$ the temperature is above the optimum, so the enzyme is denatured.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The shape of the active site changes.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The starch (substrate) can no longer fit the active site, so no starch is digested.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Independent: temperature; dependent: time for starch to disappear (b) e.g. volume of amylase, so that only temperature changes (c) $0.0083\\text{ s}^{-1}$ (d) Amylase is denatured: active site changes shape, starch no longer fits.",
            commonErrors: ["Giving the rate as 120 or $\\frac{1}{120}$ unrounded as 0.00833.", "Saying the enzyme is 'killed' at $60^\\circ\\text{C}$. Enzymes are not alive, they are denatured."],
            examinerNote: "In (c) allow 0.0083 or 8.3 $\\times 10^{-3}$. Reject 'temperature' as a control variable. In (d) reject 'enzyme is killed' for the first mark unless denatured is also stated.",
          },
        },
      ],
    },
  ],
};
