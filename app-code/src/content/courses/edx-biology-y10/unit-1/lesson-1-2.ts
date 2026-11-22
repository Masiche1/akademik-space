import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ebi10-u1-lesson-1-2",
  code: "1-2",
  title: "Biological Molecules and Enzymes",
  goal: "I CAN describe the structure of carbohydrates, proteins and lipids, carry out food tests, and explain how temperature and pH affect enzymes.",
  standards: ["4BI1 2.7", "4BI1 2.8", "4BI1 2.9", "4BI1 2.10", "4BI1 2.11", "4BI1 2.12", "4BI1 2.13", "4BI1 2.14"],
  vocabulary: [
    { term: "Monomer", definition: "A small molecule that joins with many others to make a large molecule (polymer), for example glucose or an amino acid." },
    { term: "Reducing sugar", definition: "A sugar such as glucose that gives an orange-red precipitate when heated with Benedict's solution." },
    { term: "Enzyme", definition: "A biological catalyst: a protein that speeds up a metabolic reaction without being used up." },
    { term: "Active site", definition: "The part of an enzyme with a specific shape into which its substrate fits." },
    { term: "Substrate", definition: "The molecule that an enzyme acts on." },
    { term: "Denaturation", definition: "A permanent change in the shape of an enzyme's active site, caused by high temperature or extreme pH, so the substrate no longer fits." },
    { term: "Optimum", definition: "The temperature or pH at which an enzyme works fastest." },
  ],
  concepts: [
    {
      id: "ebi10-u1-biological-molecules-food-tests",
      title: "Biological molecules and food tests",
      skill: "State the elements and building blocks of carbohydrates, proteins and lipids and carry out and interpret food tests.",
      lesson: {
        sections: [
          {
            heading: "Elements and building blocks",
            body: "- **Carbohydrates** contain carbon, hydrogen and oxygen. **Starch** and **glycogen** are long chains of **glucose** (simple sugar) molecules.\n- **Proteins** contain carbon, hydrogen, oxygen and nitrogen (some also sulfur). They are long chains of **amino acids**.\n- **Lipids** (fats and oils) contain carbon, hydrogen and oxygen. One lipid molecule is made of **three fatty acids** joined to one **glycerol**.\n\nThe order of amino acids decides how a protein folds, which gives it its shape and function.",
          },
          {
            heading: "Food tests",
            body: "| Test | Reagent and method | Positive result |\n| --- | --- | --- |\n| Starch | Add iodine solution | Browny-orange to **blue-black** |\n| Reducing sugar | Add Benedict's solution and heat in a water bath at about $80^\\circ\\text{C}$ | Blue to green, yellow, orange or **brick-red** |\n| Protein | Add biuret solution (or sodium hydroxide then copper sulfate) | Blue to **purple (lilac)** |\n| Lipid | Shake sample with ethanol, then pour into water | **Cloudy white emulsion** |\n\nBenedict's test: the more reducing sugar, the further the colour moves towards brick-red. Safety: wear eye protection, and use a water bath rather than heating the tube directly.",
          },
          {
            heading: "Interpreting results",
            body: "A negative result is the colour of the reagent itself: iodine stays browny-orange, Benedict's stays blue, biuret stays blue and the ethanol test stays clear. A food may contain more than one nutrient, so test for all four. Sucrose is **not** a reducing sugar, so it gives no colour change with Benedict's unless first boiled with acid.\n\nPercentage composition: $\\text{percentage} = \\frac{\\text{mass of nutrient}}{\\text{total mass}} \\times 100\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Starch test", statement: "Iodine: browny-orange to blue-black" },
          { name: "Reducing sugar test", statement: "Benedict's, heat: blue to brick-red" },
          { name: "Protein and lipid tests", statement: "Biuret: blue to purple. Ethanol then water: cloudy white emulsion" },
          { name: "Building blocks", statement: "Starch: glucose. Protein: amino acids. Lipid: 3 fatty acids + 1 glycerol" },
        ],
        workedExample: {
          problem: "A food sample turns purple with biuret solution and gives a cloudy white emulsion in the ethanol test. It stays blue with Benedict's solution. State which nutrients it contains.",
          solution: "Purple with biuret shows **protein**. A cloudy emulsion shows **lipid**. Benedict's stays blue, so there is **no reducing sugar**. (Starch is not shown by these tests, so it needs the iodine test.)",
        },
      },
      questions: [
        {
          id: "ebi10-u1-biological-molecules-food-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What colour change shows that starch is present when iodine solution is added?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blue to purple" },
              { id: "b", text: "Browny-orange to blue-black" },
              { id: "c", text: "Blue to brick-red" },
              { id: "d", text: "Clear to cloudy white" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Iodine test", statement: "Iodine solution is browny-orange and turns blue-black in the presence of starch." },
            ],
            steps: [
              { reasoning: "Starch turns iodine from browny-orange to blue-black. Blue to brick-red is Benedict's, blue to purple is biuret and cloudy white is the lipid test.", working: "\\text{browny-orange} \\rightarrow \\text{blue-black}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (a), the Benedict's test for reducing sugar."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ebi10-u1-biological-molecules-food-tests-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would test a sample of food for reducing sugar. Include the positive result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Benedict's test", statement: "Benedict's solution is blue; when heated with a reducing sugar it forms a coloured precipitate, green to brick-red." },
            ],
            steps: [
              { reasoning: "Add Benedict's solution (blue) to a solution of the food.", marks: 1, markCode: "B" },
              { reasoning: "Heat in a water bath (at about $80^\\circ\\text{C}$ or boiling water) for a few minutes.", marks: 1, markCode: "B" },
              { reasoning: "A positive result is a colour change from blue to green, yellow, orange or brick-red.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Add Benedict's solution, heat in a water bath, blue changes to green/yellow/orange/brick-red.",
            commonErrors: ["Forgetting to heat the mixture.", "Giving blue-black as the result (iodine test)."],
            examinerNote: "Allow 'hot water bath' or 'warm'. Allow any one of green, yellow, orange, red or brick-red as the end colour. Reject 'blue-black'.",
          },
        },
        {
          id: "ebi10-u1-biological-molecules-food-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests a milk substitute. With iodine it stays browny-orange. With Benedict's solution (after heating) it turns orange. With biuret solution it turns purple. With the ethanol test it forms a cloudy white emulsion.\n\nState what the results show about the nutrients in the milk substitute.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpreting food tests", statement: "A positive result identifies a nutrient; the unchanged reagent colour means the nutrient is absent." },
            ],
            steps: [
              { reasoning: "Iodine stays browny-orange, so no starch is present.", marks: 1, markCode: "B" },
              { reasoning: "Benedict's turns orange, so a reducing sugar is present.", marks: 1, markCode: "B" },
              { reasoning: "Purple with biuret shows protein is present.", marks: 1, markCode: "B" },
              { reasoning: "A cloudy white emulsion shows lipid (fat) is present.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No starch; contains reducing sugar, protein and lipid.",
            commonErrors: ["Saying the orange colour shows starch.", "Confusing the biuret and Benedict's results."],
            examinerNote: "Each mark needs both the test result and the conclusion; allow 'glucose' for reducing sugar. Do not award 'no starch' for an unsupported statement.",
          },
        },
        {
          id: "ebi10-u1-biological-molecules-food-tests-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A food scientist analyses two samples, P and Q, and also finds the composition of a 250 g portion of a food. The results are shown.\n\n| Test | Sample P | Sample Q |\n| --- | --- | --- |\n| Iodine solution | browny-orange | blue-black |\n| Benedict's solution, heated | brick-red | blue |\n| Biuret solution | blue | purple |\n| Ethanol then water | clear | clear |\n\nA 250 g portion of food R contains 40 g of protein.",
          parts: [
            { label: "a", prompt: "State the chemical elements present in a protein.", marks: 1 },
            { label: "b", prompt: "Describe how the student should carry out the test for reducing sugars, including the colour change, and give one safety precaution.", marks: 3 },
            { label: "c", prompt: "Calculate the percentage of the mass of food R that is protein. Give your answer as a percentage.", marks: 2 },
            { label: "d", prompt: "Deduce which nutrients are present in sample P and in sample Q.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Food tests", statement: "Iodine detects starch, Benedict's detects reducing sugar, biuret detects protein and the ethanol emulsion test detects lipid." },
              { kind: "formula", name: "Percentage", statement: "$\\text{percentage} = \\frac{\\text{part}}{\\text{whole}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Proteins contain carbon, hydrogen, oxygen and nitrogen (sometimes sulfur).", working: "\\text{C, H, O, N}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add Benedict's solution and heat in a water bath.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Blue changes to green, yellow, orange or brick-red if a reducing sugar is present.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A safety precaution: wear eye protection, or use a water bath and tongs/holder for the hot tube.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the mass of protein by the total mass and multiply by 100.", working: "\\frac{40}{250} \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "16\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "P: brick-red with Benedict's shows reducing sugar; the other tests are negative, so reducing sugar only.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Q: blue-black with iodine shows starch.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Q: purple with biuret shows protein (and no reducing sugar or lipid).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) C, H, O, N (b) add Benedict's, heat in water bath, blue to brick-red; eye protection (c) $16\\%$ (d) P: reducing sugar only; Q: starch and protein",
            commonErrors: ["In (c) dividing 250 by 40 or giving 0.16 as a percentage.", "In (d) saying Q contains reducing sugar because it contains starch."],
            examinerNote: "In (a) all four elements needed; allow sulfur as an extra. In (b) allow 'goggles'. In (c) allow 16 with no % sign.",
          },
        },
      ],
    },
    {
      id: "ebi10-u1-enzymes-temperature-ph",
      title: "Enzymes: temperature and pH",
      skill: "Explain the lock-and-key model and how temperature and pH affect the rate of enzyme-catalysed reactions, including rate calculations.",
      lesson: {
        sections: [
          {
            heading: "How enzymes work",
            body: "**Enzymes** are biological catalysts made of protein. They speed up metabolic reactions without being used up. Each enzyme has an **active site** with a specific shape. Only the **substrate** whose shape is complementary fits into the active site, forming an enzyme-substrate complex, and the substrate is changed into products. This is the **lock-and-key model**. Enzymes are specific: amylase breaks down starch, protease breaks down protein and lipase breaks down lipids.",
          },
          {
            heading: "Effect of temperature and pH",
            body: "**Temperature**: as temperature rises, molecules have more kinetic energy, collide more often and with more energy, so the rate increases. At the **optimum** (about $37^\\circ\\text{C}$ for human enzymes) the rate is greatest. Above about $45^\\circ\\text{C}$, the enzyme's shape changes: the active site is altered and the substrate no longer fits. The enzyme is **denatured** and the rate falls quickly to zero.\n\n**pH**: each enzyme has an optimum pH. Pepsin in the stomach works best at about pH 2, but amylase in saliva works best near pH 7. A pH far from the optimum alters the bonds that hold the enzyme in shape, so it denatures. Denaturation is **permanent**; returning to the optimum does not restore activity. Cold only slows enzymes; it does not denature them.",
          },
          {
            heading: "Measuring rate in an investigation",
            body: "Rate can be found from the time taken: $\\text{rate} = \\frac{1}{\\text{time}}$, or as the change in amount per unit time, for example $\\frac{\\text{volume of product}}{\\text{time}}$. In the amylase-starch investigation, samples are taken at intervals and added to iodine; the **end point** is when the iodine stays browny-orange because the starch has gone.\n\nKey skills: the **independent variable** (the one you change, such as pH), the **dependent variable** (what you measure, such as time), and **control variables** (kept constant: temperature, volumes, concentrations). Repeat readings and calculate a mean, ignoring anomalous results. Use a buffer solution to control pH.",
          },
        ],
        keyFormulas: [
          { name: "Rate from time", statement: "$\\text{rate} = \\frac{1}{\\text{time}}$" },
          { name: "Rate from change", statement: "$\\text{rate} = \\frac{\\text{amount of product formed}}{\\text{time}}$" },
          { name: "Denaturation", statement: "High temperature or extreme pH changes the shape of the active site permanently" },
        ],
        workedExample: {
          problem: "In an investigation, 8.0 cm³ of oxygen was released by catalase in 20 seconds. Calculate the rate of reaction in cm³ per second.",
          solution: "Rate $= \\frac{8.0}{20} = 0.40\\text{ cm}^3/\\text{s}$.",
        },
      },
      questions: [
        {
          id: "ebi10-u1-enzymes-temperature-ph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to an enzyme when it is heated well above its optimum temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It works faster because its molecules move faster" },
              { id: "b", text: "It is denatured because its active site changes shape" },
              { id: "c", text: "It is used up in the reaction" },
              { id: "d", text: "It becomes inactive but returns to normal when cooled" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denaturation", statement: "Denaturation is a permanent change in the shape of an enzyme, including its active site, caused by high temperature or extreme pH." },
            ],
            steps: [
              { reasoning: "High temperature permanently changes the shape of the active site, so the substrate no longer fits. This is denaturation.", working: "\\text{denatured}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Choosing (b): denaturation is permanent, unlike the slowing caused by cold.", "Choosing (c): enzymes are not used up."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ebi10-u1-enzymes-temperature-ph-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In an investigation, the iodine test showed that all the starch in a mixture was broken down by amylase after 40 seconds. Calculate the rate of the reaction, using rate = 1 / time. Give your answer in $\\text{s}^{-1}$.",
          response: { type: "numeric", parts: [{ label: "Rate", answer: 0.025, tolerance: 0.0005, unit: "s⁻¹" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\frac{1}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Substitute the time taken into rate = 1 / time.", working: "\\text{rate} = \\frac{1}{40}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.025\\text{ s}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.025\\text{ s}^{-1}$",
            commonErrors: ["Giving 40 as the rate; a longer time means a slower rate."],
            examinerNote: "M1 for $1/40$. A1 for 0.025. Allow 'per second' for the unit.",
          },
        },
        {
          id: "ebi10-u1-enzymes-temperature-ph-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The rate of an enzyme-controlled reaction increases from $10^\\circ\\text{C}$ to $40^\\circ\\text{C}$ and then falls rapidly to zero by $60^\\circ\\text{C}$. Explain these results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collision theory for enzymes", statement: "Higher temperature increases the kinetic energy of molecules, so enzyme and substrate collide more often and more energetically." },
              { kind: "definition", name: "Denaturation", statement: "At high temperature the active site changes shape permanently and the substrate no longer fits." },
            ],
            steps: [
              { reasoning: "As temperature rises, molecules gain kinetic energy and move faster.", marks: 1, markCode: "B" },
              { reasoning: "There are more frequent (successful) collisions between enzyme and substrate, forming more enzyme-substrate complexes, so the rate rises.", marks: 1, markCode: "B" },
              { reasoning: "Above the optimum, the enzyme's shape (including the active site) changes.", marks: 1, markCode: "B" },
              { reasoning: "The substrate no longer fits the active site: the enzyme is denatured, so the rate falls to zero.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More kinetic energy gives more collisions and a faster rate up to the optimum; at high temperature the active site is denatured so the substrate cannot fit.",
            commonErrors: ["Saying the enzyme is 'killed'. Enzymes are not alive.", "Saying the substrate is denatured."],
            examinerNote: "Reject 'enzyme dies'. Allow 'bonds holding the enzyme in shape are broken'. The final mark needs reference to the substrate not fitting.",
          },
        },
        {
          id: "ebi10-u1-enzymes-temperature-ph-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of pH on the activity of amylase. At each pH she mixes amylase with starch solution in a buffer at $30^\\circ\\text{C}$ and tests samples with iodine every 20 seconds. She records the time taken for the starch to disappear (the iodine stays browny-orange).\n\n| pH | Time for starch to disappear (s) |\n| --- | --- |\n| 3 | no change after 600 |\n| 5 | 240 |\n| 7 | 60 |\n| 9 | 180 |",
          parts: [
            { label: "a", prompt: "State the independent variable in this investigation.", marks: 1 },
            { label: "b", prompt: "Calculate the rate of reaction at pH 7 using rate = 1 / time. Give your answer to 2 significant figures, in $\\text{s}^{-1}$.", marks: 2 },
            { label: "c", prompt: "Give two variables that the student must control.", marks: 2 },
            { label: "d", prompt: "Explain why there was no change at pH 3.", marks: 2 },
            { label: "e", prompt: "Suggest how the student could improve the investigation to find the optimum pH more precisely.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\frac{1}{\\text{time}}$" },
              { kind: "definition", name: "Denaturation", statement: "An extreme pH changes the shape of the active site, so the substrate no longer fits." },
            ],
            steps: [
              { part: "a", reasoning: "The independent variable is the one the student changes: the pH.", working: "\\text{pH}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Substitute the time at pH 7.", working: "\\frac{1}{60}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 2 significant figures.", working: "0.01666\\ldots \\approx 0.017\\text{ s}^{-1}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any valid control variable, for example temperature.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A second control variable, for example volume or concentration of amylase, or volume or concentration of starch.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "pH 3 is far from the optimum, so the enzyme's active site changed shape (it is denatured).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The starch substrate can no longer fit into the active site, so it is not broken down.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Test more pH values close to 7, for example 6, 6.5, 7.5 and 8.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Repeat each pH and calculate a mean (to improve reliability).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) pH (b) $0.017\\text{ s}^{-1}$ (c) e.g. temperature; volume/concentration of amylase or starch (d) enzyme denatured, substrate does not fit (e) test more pH values between 5 and 9; repeat and calculate means",
            commonErrors: ["In (b) giving 60 or 1.7 (confusing rate with time).", "In (c) listing time as a control variable. It is the dependent variable.", "In (d) saying the enzyme 'stops working because it is acidic' without mentioning shape."],
            examinerNote: "In (b) allow 0.017 or 1.7 × 10⁻². M1 for 1/60. In (c) any two different valid variables. In (e) allow 'smaller pH intervals around the best pH'.",
          },
        },
      ],
    },
  ],
};
