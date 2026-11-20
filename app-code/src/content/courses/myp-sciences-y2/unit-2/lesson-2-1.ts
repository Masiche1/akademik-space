import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "myps2-u2-lesson-2-1",
  code: "2-1",
  title: "Nutrition and Digestion",
  goal: "I CAN describe a balanced diet, calculate the energy in food, carry out food tests, explain how the digestive system and enzymes break down food, and design an investigation into enzyme activity.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion B: Inquiring and designing",
    "Criterion C: Processing and evaluating",
    "Key concept: Systems",
    "Related concept: Function",
  ],
  vocabulary: [
    { term: "Balanced diet", definition: "A diet that contains the right amounts of carbohydrates, proteins, fats, vitamins, minerals, fibre and water for good health." },
    { term: "Deficiency disease", definition: "An illness caused by a lack of a nutrient in the diet, such as scurvy (vitamin C) or rickets (vitamin D)." },
    { term: "Digestion", definition: "The breakdown of large, insoluble food molecules into small, soluble molecules that can be absorbed." },
    { term: "Enzyme", definition: "A biological catalyst, a protein that speeds up a reaction without being used up." },
    { term: "Denatured", definition: "Describes an enzyme whose shape has been permanently changed, for example by high temperature, so it can no longer work." },
    { term: "Absorption", definition: "The movement of digested food molecules from the gut into the blood." },
  ],
  concepts: [
    {
      id: "myps2-u2-nutrition-food-tests",
      title: "Diet, energy and food tests",
      skill: "Describe the food groups and a balanced diet, calculate energy in food, name deficiency diseases and carry out and interpret food tests.",
      lesson: {
        sections: [
          {
            heading: "Food groups and a balanced diet",
            body: "The body needs seven types of nutrient.\n\n- **Carbohydrates** (starch and sugars): the main source of energy.\n- **Proteins**: growth and repair of tissues.\n- **Fats (lipids)**: energy store, insulation and protection.\n- **Vitamins and minerals**: small amounts for healthy body functions, for example vitamin C for healthy skin and gums, vitamin D and calcium for strong bones, iron for red blood cells.\n- **Fibre**: keeps food moving through the gut.\n- **Water**: needed for all the reactions in cells and for transport in the blood.\n\nA **balanced diet** has all of these in the right amounts. How much energy a person needs depends on age, size and how active they are. A **deficiency disease** such as scurvy (lack of vitamin C) or rickets (lack of vitamin D) happens when a nutrient is missing for a long time.",
          },
          {
            heading: "Energy in food",
            body: "Energy is measured in kilojoules (kJ). Per gram, fat releases about 37 kJ, while carbohydrate and protein each release about 17 kJ. To find the energy in a food, multiply the mass of each nutrient by its energy value and add the results.",
          },
          {
            heading: "Food tests",
            body: "- **Starch**: add iodine solution. Orange-brown turns **blue-black**.\n- **Reducing sugar (such as glucose)**: add Benedict's solution and heat in a hot water bath. Blue turns green, yellow, orange or **brick-red**, depending on the amount of sugar.\n- **Protein**: add biuret solution. Blue turns **purple (lilac)**.\n- **Fat (lipid)**: mix with ethanol, then pour into water. A **cloudy white emulsion** forms.\n\nWear safety glasses, and use a water bath rather than heating the tube directly in a flame.",
          },
        ],
        keyFormulas: [
          { name: "Energy in food", statement: "energy = (mass of carbohydrate $\\times$ 17) + (mass of protein $\\times$ 17) + (mass of fat $\\times$ 37), in kJ" },
          { name: "Iodine test", statement: "Starch: orange-brown to blue-black" },
          { name: "Benedict's, biuret, ethanol tests", statement: "Reducing sugar: blue to brick-red (heated). Protein: blue to purple. Fat: cloudy white emulsion" },
        ],
        workedExample: {
          problem: "A 50 g portion of a snack contains 10 g of carbohydrate, 5 g of protein and 20 g of fat. Use 17 kJ/g for carbohydrate and protein and 37 kJ/g for fat to calculate the energy in the portion.",
          solution: "Carbohydrate: $10\\times17=170\\text{ kJ}$. Protein: $5\\times17=85\\text{ kJ}$. Fat: $20\\times37=740\\text{ kJ}$. Total $=170+85+740=995\\text{ kJ}$.",
        },
      },
      questions: [
        {
          id: "myps2-u2-nutrition-food-tests-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is needed mainly for growth and repair of body tissues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbohydrate" },
              { id: "b", text: "Fat" },
              { id: "c", text: "Protein" },
              { id: "d", text: "Fibre" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Role of protein", statement: "Proteins are used to build new cells and repair damaged tissue, so they are needed for growth and repair." },
            ],
            steps: [
              { reasoning: "Protein is the nutrient used for growth and repair, for example of muscle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Protein",
            commonErrors: ["Choosing carbohydrate because it is the main energy source.", "Choosing fat because it is thought of as a 'building' material; fat is mainly an energy store and insulation."],
            examinerNote: "B1 for protein.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 100 g serving of a cereal bar contains 50 g of carbohydrate, 15 g of protein and 10 g of fat.\n\nUse 17 kJ per gram for carbohydrate and protein and 37 kJ per gram for fat. Calculate the energy in the serving, in kJ.",
          response: { type: "numeric", parts: [{ label: "Energy", answer: 1475, unit: "kJ" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in food", statement: "energy = sum of (mass of each nutrient $\\times$ its energy value per gram)" },
            ],
            steps: [
              { reasoning: "Multiply the mass of each nutrient by its energy value.", working: "50\\times17=850,\\quad 15\\times17=255,\\quad 10\\times37=370", marks: 2, markCode: "M" },
              { reasoning: "Add the three amounts and include the unit.", working: "850+255+370=1475\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1475\\text{ kJ}$",
            commonErrors: ["Using 17 kJ/g for fat instead of 37 kJ/g.", "Adding the masses (75 g) and multiplying by one energy value."],
            examinerNote: "M1 for any two correct products, M1 for all three correct products, A1 for 1475 kJ. Allow 1.475 MJ. Allow ecf for one slipped product.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student tests a sample of food. The results are shown below.\n\n- Iodine solution: stays orange-brown.\n- Benedict's solution (heated in a water bath): turns brick-red.\n- Biuret solution: stays blue.\n- Ethanol, then water: a cloudy white emulsion forms.\n\nState which nutrients the food **contains** and which it does **not** contain. Give a reason for each conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food test results", statement: "Iodine: starch gives blue-black. Benedict's: reducing sugar gives brick-red. Biuret: protein gives purple. Ethanol emulsion: fat gives cloudy white." },
            ],
            steps: [
              { reasoning: "Reducing sugar is present because Benedict's solution turned brick-red.", marks: 1, markCode: "B" },
              { reasoning: "Fat (lipid) is present because a cloudy white emulsion formed.", marks: 1, markCode: "B" },
              { reasoning: "Starch is absent because iodine stayed orange-brown instead of turning blue-black.", marks: 1, markCode: "B" },
              { reasoning: "Protein is absent because biuret stayed blue instead of turning purple.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Contains reducing sugar (brick-red) and fat (cloudy emulsion). No starch (iodine stayed orange-brown) and no protein (biuret stayed blue).",
            commonErrors: ["Saying the food contains starch because iodine was used.", "Stating a nutrient without linking it to the colour change."],
            examinerNote: "Each point needs the nutrient and the matching result for the mark. Allow 'glucose' or 'sugar' for reducing sugar, 'lipid' or 'oil' for fat.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In the past, sailors on long sea voyages had no fresh fruit or vegetables for months. Many developed bleeding gums and slow healing of wounds. Doctors later found that eating citrus fruit cured the problem.",
          parts: [
            { label: "a", prompt: "Name the deficiency disease the sailors had and the vitamin that was missing from their diet.", marks: 2 },
            { label: "b", prompt: "Describe how to test a food sample for protein. State the result for a positive test.", marks: 2 },
            { label: "c", prompt: "Explain why a marathon runner needs a diet with more energy than a person who sits at a desk all day.", marks: 2 },
            { label: "d", prompt: "Suggest why fibre is an important part of a balanced diet even though the body cannot digest it.", marks: 1 },
            { label: "e", prompt: "Explain why the ethanol emulsion test for fat must be done with clean, dry glassware and ethanol kept away from flames.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deficiency disease", statement: "A deficiency disease is caused by a lack of a nutrient, for example scurvy from a lack of vitamin C." },
              { kind: "property", name: "Biuret test", statement: "Biuret solution turns from blue to purple (lilac) when protein is present." },
              { kind: "principle", name: "Energy and activity", statement: "More active people need more energy, released from food by respiration." },
            ],
            steps: [
              { part: "a", reasoning: "The disease is scurvy.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The missing vitamin is vitamin C.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add biuret solution to the food sample (a liquid or dissolved food) in a test tube.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A positive result is a colour change from blue to purple or lilac.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The runner's muscles contract much more, so they use more energy.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "More food must be respired to release this energy, so more energy has to be taken in with the diet.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Fibre adds bulk and helps food move through the gut, which prevents constipation.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Ethanol is flammable (hazard of fire), and water in the glassware would make the ethanol turn cloudy and give a false positive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Scurvy; vitamin C (b) Add biuret solution; blue to purple/lilac (c) More muscle contraction needs more energy, released by respiring more food (d) Adds bulk, keeps food moving, prevents constipation (e) Ethanol is flammable; water would give a false positive",
            commonErrors: ["Naming rickets or anaemia in (a).", "Heating the mixture in the biuret test, which is only needed for Benedict's test.", "Saying fibre 'gives energy' in (d)."],
            examinerNote: "(a) Allow 'ascorbic acid'. (b) Reject iodine or Benedict's. (c) Allow 'uses more energy in respiration' for the first mark. (e) Accept either the fire hazard or the false positive.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is the MAIN source of energy for the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "Fat" },
              { id: "c", text: "Carbohydrate" },
              { id: "d", text: "Vitamin C" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Role of carbohydrate", statement: "Carbohydrates (starch and sugars) are the main source of energy for the body." },
            ],
            steps: [
              { reasoning: "Carbohydrates are the main energy source; fat also gives energy but is mainly an energy store and insulation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbohydrate",
            commonErrors: ["Choosing fat because it releases more energy per gram; it is not the main energy source."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Scurvy is caused by a long-term lack of which nutrient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vitamin C" },
              { id: "b", text: "Vitamin D" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Iron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scurvy", statement: "Scurvy is a deficiency disease caused by a lack of vitamin C." },
            ],
            steps: [
              { reasoning: "Scurvy results from too little vitamin C in the diet; vitamin D/calcium relate to rickets and iron to anaemia.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vitamin C",
            commonErrors: ["Choosing vitamin D, which causes rickets when lacking."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A food sample is tested with iodine solution. The colour changes from orange-brown to blue-black. What does this show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The food contains reducing sugar" },
              { id: "b", text: "The food contains starch" },
              { id: "c", text: "The food contains protein" },
              { id: "d", text: "The food contains fat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Iodine test", statement: "Iodine solution turns blue-black in the presence of starch." },
            ],
            steps: [
              { reasoning: "Blue-black with iodine is the positive test for starch; other tests use Benedict's, biuret or ethanol.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The food contains starch",
            commonErrors: ["Confusing the iodine test with Benedict's test for sugar."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q8",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A 100 g portion of cereal contains 60 g of carbohydrate, 10 g of protein and 5 g of fat.\n\nUse 17 kJ/g for carbohydrate and protein and 37 kJ/g for fat to calculate the energy in the portion.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 1350, tolerance: 0, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in food", statement: "energy = (carbohydrate x 17) + (protein x 17) + (fat x 37) kJ" },
            ],
            steps: [
              { reasoning: "Carbohydrate energy.", working: "60 \\times 17 = 1020\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Protein and fat energy.", working: "10 \\times 17 + 5 \\times 37 = 170 + 185 = 355\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Add all three energy values.", working: "1020 + 170 + 185 = 1375\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1375 kJ",
            commonErrors: ["Using 17 kJ/g for fat instead of 37.", "Forgetting to multiply by the mass of each nutrient."],
            examinerNote: "M1 for correct method. A1 for 1375 kJ.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A snack contains 5 g of fat and 30 g of carbohydrate (and negligible protein).\n\nCalculate the energy released by the fat and by the carbohydrate, using 17 kJ/g for carbohydrate and 37 kJ/g for fat.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy from fat", answer: 185, tolerance: 0, unit: "kJ" },
              { label: "Energy from carbohydrate", answer: 510, tolerance: 0, unit: "kJ" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in food", statement: "energy = mass x energy value; fat 37 kJ/g, carbohydrate 17 kJ/g" },
            ],
            steps: [
              { reasoning: "Fat energy = mass x 37.", working: "5 \\times 37 = 185\\text{ kJ}", marks: 1, markCode: "B" },
              { reasoning: "Carbohydrate energy = mass x 17.", working: "30 \\times 17 = 510\\text{ kJ}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fat: 185 kJ; carbohydrate: 510 kJ",
            commonErrors: ["Swapping the energy values (37 for carbohydrate).", "Forgetting to multiply by the mass."],
            examinerNote: "B1 for each correct value with method.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student claims: \"10 g of fat gives more energy than 20 g of carbohydrate.\" Use 17 kJ/g for carbohydrate and 37 kJ/g for fat.\n\nCalculate the energy in each amount and state whether the claim is correct.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy in 10 g fat", answer: 370, tolerance: 0, unit: "kJ" },
              { label: "Energy in 20 g carbohydrate", answer: 340, tolerance: 0, unit: "kJ" },
              { label: "Difference", answer: 30, tolerance: 0, unit: "kJ" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in food", statement: "energy = mass x energy value; compare per gram values times masses" },
            ],
            steps: [
              { reasoning: "Fat energy.", working: "10 \\times 37 = 370\\text{ kJ}", marks: 1, markCode: "B" },
              { reasoning: "Carbohydrate energy.", working: "20 \\times 17 = 340\\text{ kJ}", marks: 1, markCode: "B" },
              { reasoning: "Compare: 370 > 340, so the claim is correct; difference.", working: "370 - 340 = 30\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fat: 370 kJ; carbohydrate: 340 kJ; claim correct, fat gives 30 kJ more",
            commonErrors: ["Comparing 37 and 17 per gram only, ignoring the masses."],
            examinerNote: "B1 for each calculation. A1 for difference 30 kJ (or correct comparison).",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 40 g cereal bar contains 15 g of carbohydrate, 8 g of protein and 5 g of fat (the rest is fibre and water).\n\nCalculate the energy released by the edible nutrients, using 17 kJ/g for carbohydrate and protein and 37 kJ/g for fat.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 576, tolerance: 0, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy in food", statement: "energy = (carb x 17) + (protein x 17) + (fat x 37) kJ" },
            ],
            steps: [
              { reasoning: "Carbohydrate and protein energy.", working: "(15 + 8) \\times 17 = 23 \\times 17 = 391\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Fat energy.", working: "5 \\times 37 = 185\\text{ kJ}", marks: 1, markCode: "M" },
              { reasoning: "Add for the total.", working: "391 + 185 = 576\\text{ kJ}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "576 kJ",
            commonErrors: ["Including the fibre/water mass in the calculation.", "Using 37 for all nutrients."],
            examinerNote: "M1 for correct method. A1 for 576 kJ.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what a balanced diet is, name **two** food groups and their main nutrients, and give two examples of deficiency diseases and the nutrient missing in each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced diet", statement: "A balanced diet contains all the nutrient types in the right amounts for the person's age, size and activity." },
            ],
            steps: [
              { reasoning: "A balanced diet has all nutrient types (carbohydrate, protein, fat, vitamins, minerals, fibre, water) in the right amounts.", marks: 1, markCode: "B" },
              { reasoning: "Two food groups/nutrients with roles: e.g. carbohydrates for energy, proteins for growth and repair, fats for energy store/insulation.", marks: 1, markCode: "B" },
              { reasoning: "Two deficiency diseases with missing nutrients: scurvy (vitamin C) and rickets (vitamin D/calcium).", marks: 1, markCode: "B" },
              { reasoning: "Each disease is linked to the correct missing nutrient.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A balanced diet has all nutrients in the right amounts. Carbohydrates give energy; protein repairs tissue. Scurvy = lack of vitamin C; rickets = lack of vitamin D/calcium.",
            commonErrors: ["Listing foods without linking to nutrients or roles.", "Mismatching disease and nutrient."],
            examinerNote: "B1 for balanced diet definition. B1 for two correct food group/nutrient pairs. B1 for two diseases. B1 for correct nutrient links.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A professional athlete and an office worker eat the same daily diet of 9000 kJ.\n\nExplain why this diet may be suitable for one person but not the other, referring to how energy needs depend on activity, and suggest one change for the person whose needs are not met.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy and activity", statement: "Energy needs depend on age, size and activity; more active people need more energy released by respiration." },
            ],
            steps: [
              { reasoning: "The athlete's muscles work much harder, so they respire more glucose to release energy.", marks: 1, markCode: "B" },
              { reasoning: "The athlete therefore needs more than 9000 kJ per day; the office worker, being less active, may need less or about the same.", marks: 1, markCode: "R" },
              { reasoning: "The same diet cannot be 'balanced' for both because their energy requirements differ.", marks: 1, markCode: "R" },
              { reasoning: "A valid change: the athlete should eat more energy-dense food (more carbohydrate/fat) or eat more often; the worker may need less.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The athlete needs more energy because of greater activity, so 9000 kJ may be too little for them but fine for the less active worker. The athlete should increase energy intake.",
            commonErrors: ["Saying both need the same because they are similar age/size.", "Ignoring the role of activity."],
            examinerNote: "B1 athlete uses more energy. R1 same diet different needs. R1 link to respiration. B1 valid dietary change.",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the Benedict's test for reducing sugar, what two things are needed for a positive result?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No heating; the colour changes at room temperature" },
              { id: "b", text: "Heating in a water bath; blue changes to green/yellow/orange/brick-red" },
              { id: "c", text: "Adding iodine; the colour turns blue-black" },
              { id: "d", text: "Adding biuret; the colour turns purple" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Benedict's test", statement: "Benedict's solution is heated in a water bath; blue turns green, yellow, orange or brick-red with reducing sugar." },
            ],
            steps: [
              { reasoning: "Benedict's test requires heating and gives a brick-red (or intermediate) colour; the other tests are iodine and biuret.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Heating in a water bath; blue changes to green/yellow/orange/brick-red",
            commonErrors: ["Forgetting that Benedict's must be heated."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the positive result for the ethanol test for fat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A blue-black colour" },
              { id: "b", text: "A purple colour" },
              { id: "c", text: "A cloudy white emulsion" },
              { id: "d", text: "A brick-red precipitate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fat test", statement: "Fat mixed with ethanol and poured into water gives a cloudy white emulsion." },
            ],
            steps: [
              { reasoning: "The ethanol test for lipid gives a cloudy white (milky) emulsion; the others are tests for starch, protein and sugar.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A cloudy white emulsion",
            commonErrors: ["Confusing the fat test with the protein or starch tests."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-nutrition-food-tests-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student tests four unknown foods, P, Q, R and S, with iodine, Benedict's (heated), biuret and the ethanol test.\n\n| Food | Iodine | Benedict's | Biuret | Ethanol test |\n| --- | --- | --- | --- | --- |\n| P | blue-black | brick-red | purple | cloudy white |\n| Q | orange-brown | blue | blue | cloudy white |\n| R | blue-black | blue | blue | no emulsion |\n| S | orange-brown | green | purple | no emulsion |",
          parts: [
            { label: "a", prompt: "Identify which nutrients are present in food P and in food R.", marks: 2 },
            { label: "b", prompt: "Identify which food contains protein but no starch and no fat.", marks: 2 },
            { label: "c", prompt: "State two safety precautions the student should take when carrying out these tests.", marks: 2 },
            { label: "d", prompt: "Explain why food P gives positive results for all four tests.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Food tests", statement: "Iodine: starch blue-black. Benedict's (heated): reducing sugar brick-red. Biuret: protein purple. Ethanol: fat cloudy white emulsion." },
            ],
            steps: [
              { part: "a", reasoning: "P: starch (blue-black), reducing sugar (brick-red), protein (purple) and fat (cloudy white) are all present.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "R: starch only (blue-black); Benedict's, biuret and ethanol all negative.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Food S shows purple with biuret (protein) and no starch (iodine stays orange-brown) and no fat (no emulsion).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Food S is the only one matching all three conditions.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Any one safety measure: wear safety glasses / use a water bath not a flame for Benedict's / keep ethanol away from flames / wash hands.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A second different safety measure.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "P contains all four nutrient types: starch, reducing sugar, protein and fat, so every test is positive.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The tests detect different molecules, so a mixed food gives several positive results.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) P: all four nutrients; R: starch only (b) Food S (c) Safety glasses and water bath / no flames near ethanol (d) P contains starch, sugar, protein and fat, so all tests are positive.",
            commonErrors: ["In (a) missing a nutrient for P.", "In (b) choosing Q, which has fat.", "In (d) saying the tests 'cancel out'."],
            examinerNote: "(b) Accept 'S'. (c) Any two valid safety measures. (d) ecf from (a) allowed.",
          },
        },
      ],
    },
    {
      id: "myps2-u2-digestion-enzymes",
      title: "Digestion and enzymes",
      skill: "Describe the digestive system and absorption, explain how enzymes work and how temperature affects them, and design and evaluate an enzyme investigation.",
      lesson: {
        sections: [
          {
            heading: "The digestive system",
            body: "Food is broken down as it travels along the gut.\n\n- **Mouth**: teeth break food into smaller pieces (physical digestion) and saliva contains amylase.\n- **Oesophagus**: muscles push food down to the stomach.\n- **Stomach**: churns food and adds acid and protease enzymes.\n- **Small intestine**: the final digestion of food happens here, and digested food is **absorbed** into the blood through the thin wall, which is folded into villi to give a large surface area.\n- **Large intestine**: absorbs water.\n- **Anus**: undigested waste leaves the body.\n\nThe liver makes bile, which helps to digest fat. The pancreas makes digestive enzymes.",
          },
          {
            heading: "Enzymes",
            body: "Large food molecules cannot pass through the gut wall, so digestion breaks them into small soluble molecules. **Enzymes** are biological catalysts that speed up this breakdown.\n\n- **Amylase** breaks down starch into sugars.\n- **Protease** breaks down proteins into amino acids.\n- **Lipase** breaks down fats into fatty acids and glycerol.\n\nEach enzyme has an **active site** with a shape that fits only its own substrate, like a key in a lock.",
          },
          {
            heading: "Temperature and enzyme activity",
            body: "As temperature rises, particles move faster and collide more often, so the rate of reaction increases. Human enzymes work best at an **optimum** temperature of about 37 degrees Celsius. At much higher temperatures the enzyme's shape changes, the active site no longer fits the substrate and the enzyme is **denatured**. This change is permanent.\n\nIn an investigation, the **independent variable** is the temperature you change, the **dependent variable** is the time taken for the starch to disappear (tested with iodine), and **control variables** such as volumes, concentrations and pH are kept the same.",
          },
        ],
        keyFormulas: [
          { name: "Amylase", statement: "starch $\\rightarrow$ sugars" },
          { name: "Protease", statement: "protein $\\rightarrow$ amino acids" },
          { name: "Lipase", statement: "fat $\\rightarrow$ fatty acids + glycerol" },
          { name: "Rate and time", statement: "A shorter time for a reaction means a faster rate" },
        ],
        workedExample: {
          problem: "Amylase digests all the starch in a mixture in 200 s at 20 degrees Celsius and in 50 s at 37 degrees Celsius. How many times faster is the reaction at 37 degrees Celsius?",
          solution: "Rate is proportional to $\\dfrac{1}{\\text{time}}$, so the reaction takes 4 times less time, which means it is faster by $\\dfrac{200}{50}=4$ times.",
        },
      },
      questions: [
        {
          id: "myps2-u2-digestion-enzymes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where in the digestive system is most digested food absorbed into the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Small intestine" },
              { id: "c", text: "Large intestine" },
              { id: "d", text: "Oesophagus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Small intestine", statement: "The small intestine has a thin, folded wall with villi, giving a large surface area for absorbing digested food." },
            ],
            steps: [
              { reasoning: "Most absorption of digested food molecules takes place in the small intestine.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Small intestine",
            commonErrors: ["Choosing the large intestine; it mainly absorbs water.", "Choosing the stomach because food is churned there."],
            examinerNote: "B1 for small intestine.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Amylase digests all the starch in a mixture in 240 s at 20 degrees Celsius. At 40 degrees Celsius it takes 80 s.\n\nCalculate how many times faster the reaction is at 40 degrees Celsius than at 20 degrees Celsius.",
          response: { type: "numeric", parts: [{ label: "Number of times faster", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and time", statement: "The rate of a reaction is proportional to 1 divided by the time taken, so a shorter time means a faster reaction." },
            ],
            steps: [
              { reasoning: "Divide the longer time by the shorter time to compare the rates.", working: "\\frac{240}{80}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 times faster",
            commonErrors: ["Dividing 80 by 240 to get 0.33.", "Subtracting the times (160 s)."],
            examinerNote: "M1 for 240 / 80 (oe). A1 for 3. Reject 160.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The activity of a human enzyme increases as the temperature rises from 10 degrees Celsius to 37 degrees Celsius, but at 70 degrees Celsius the enzyme no longer works.\n\nExplain these results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Effect of temperature", statement: "Higher temperature increases particle movement and collisions up to the optimum; above it the enzyme is denatured." },
              { kind: "definition", name: "Active site", statement: "The active site is the part of an enzyme whose shape fits the substrate." },
            ],
            steps: [
              { reasoning: "As temperature rises, enzyme and substrate particles move faster, so they collide more often.", marks: 1, markCode: "B" },
              { reasoning: "More collisions mean more successful reactions, so the rate increases up to the optimum at about 37 degrees Celsius.", marks: 1, markCode: "B" },
              { reasoning: "At 70 degrees Celsius the enzyme's shape changes; it is denatured.", marks: 1, markCode: "B" },
              { reasoning: "The active site no longer fits the substrate, so the substrate cannot bind and the reaction stops. The change is permanent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Higher temperature gives more collisions so a faster rate up to about 37 degrees Celsius. At 70 degrees Celsius the enzyme is denatured, the active site changes shape and the substrate no longer fits.",
            commonErrors: ["Saying the enzyme is 'killed'; enzymes are not alive, they are denatured.", "Saying the enzyme 'melts' at high temperature.", "Not linking the loss of activity to the shape of the active site."],
            examinerNote: "Reject 'killed'. Allow 'more kinetic energy' for faster movement. Allow 'lock and key no longer fits' for the active site mark.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates the effect of temperature on the enzyme amylase. In each trial, $5\\text{ cm}^3$ of starch solution and $1\\text{ cm}^3$ of amylase solution are mixed in a water bath. Every 30 s a drop of the mixture is added to iodine solution on a spotting tile. The time at which the iodine stops turning blue-black is recorded.\n\nResults:\n\n- 10 degrees Celsius: 300 s\n- 20 degrees Celsius: 150 s\n- 30 degrees Celsius: 75 s\n- 40 degrees Celsius: 50 s\n- 60 degrees Celsius: still blue-black after 600 s",
          parts: [
            { label: "a", prompt: "Identify the independent variable and the dependent variable in this investigation.", marks: 2 },
            { label: "b", prompt: "State **two** control variables the student should keep the same.", marks: 2 },
            { label: "c", prompt: "Calculate how many times faster the reaction is at 30 degrees Celsius than at 10 degrees Celsius.", marks: 2 },
            { label: "d", prompt: "Explain the result at 60 degrees Celsius.", marks: 2 },
            { label: "e", prompt: "Suggest one way to make the results more reliable.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Variables", statement: "The independent variable is changed, the dependent variable is measured and control variables are kept constant for a fair test." },
              { kind: "principle", name: "Rate and time", statement: "A shorter time for the starch to disappear means a faster reaction." },
              { kind: "principle", name: "Denaturing", statement: "High temperature changes the shape of the enzyme's active site, so the enzyme stops working." },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: the temperature of the mixture.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Dependent variable: the time taken for the starch to be digested (iodine no longer turns blue-black).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Any one control: volume of starch, volume or concentration of amylase, concentration of starch, pH, same type of enzyme.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "A second different control variable from the list above.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the time at 10 degrees Celsius by the time at 30 degrees Celsius.", working: "\\frac{300}{75}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "At 60 degrees Celsius the amylase has been denatured; its shape has changed.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The active site no longer fits the starch, so no digestion happens and the iodine stays blue-black.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Repeat each temperature at least three times and calculate a mean, so that random errors have less effect.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Independent: temperature; dependent: time for starch to disappear (b) Any two of: volume of starch, volume/concentration of amylase, pH, same enzyme (c) 4 times faster (d) Amylase denatured, active site no longer fits, no digestion (e) Repeat each temperature and calculate a mean",
            commonErrors: ["Giving 'the iodine' or 'the temperature of the room' as a control.", "In (c) subtracting the times (225 s).", "In (d) saying the enzyme was 'killed'."],
            examinerNote: "(b) Do not accept two answers that mean the same thing, for example 'amount of starch' and 'volume of starch'. (e) Allow 'repeat the investigation and calculate the mean', 'use a thermometer in the water bath to keep the temperature steady' or 'use smaller time intervals between testing drops'. Reject 'do it again' without a mean.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme breaks down proteins in the digestive system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amylase" },
              { id: "b", text: "Lipase" },
              { id: "c", text: "Protease" },
              { id: "d", text: "Bile" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Protease", statement: "Protease enzymes break down proteins into amino acids." },
            ],
            steps: [
              { reasoning: "Protease digests protein; amylase digests starch and lipase digests fat. Bile is not an enzyme.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Protease",
            commonErrors: ["Choosing amylase, which digests starch."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Human digestive enzymes work best at approximately which temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20\\ ^\\circ\\text{C}$" },
              { id: "b", text: "$37\\ ^\\circ\\text{C}$" },
              { id: "c", text: "$60\\ ^\\circ\\text{C}$" },
              { id: "d", text: "$100\\ ^\\circ\\text{C}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Optimum temperature", statement: "Human enzymes have an optimum temperature of about $37\\ ^\\circ\\text{C}$, body temperature." },
            ],
            steps: [
              { reasoning: "Enzymes work fastest at body temperature, about 37 degrees Celsius; much higher temperatures denature them.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $37\\ ^\\circ\\text{C}$",
            commonErrors: ["Choosing 100 °C because that is where reactions seem fastest; enzymes are destroyed."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens to an enzyme when it is heated to a very high temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It works faster because particles move quicker" },
              { id: "b", text: "It is denatured: its shape changes permanently and it stops working" },
              { id: "c", text: "It changes into a different enzyme" },
              { id: "d", text: "Nothing changes; enzymes are unaffected by temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denatured", statement: "At high temperature the enzyme's shape changes so its active site no longer fits the substrate; this is permanent." },
            ],
            steps: [
              { reasoning: "High temperature denatures the enzyme permanently; the active site no longer matches the substrate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It is denatured: its shape changes permanently and it stops working",
            commonErrors: ["Thinking the enzyme works faster at any higher temperature."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Amylase digests all the starch in a mixture in 160 s at $20\\ ^\\circ\\text{C}$ and in 40 s at $37\\ ^\\circ\\text{C}$.\n\nCalculate how many times faster the reaction is at $37\\ ^\\circ\\text{C}$. (A shorter time means a faster rate.)",
          response: {
            type: "numeric",
            parts: [{ label: "Times faster", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and time", statement: "Rate is inversely proportional to time; divide the slower time by the faster time." },
            ],
            steps: [
              { reasoning: "Divide the time at the lower temperature by the time at 37 °C.", working: "160 \\div 40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 4\\text{ times faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 times faster",
            commonErrors: ["Subtracting the times (120 s).", "Dividing 40 by 160 to give 0.25."],
            examinerNote: "M1 for 160/40 oe. A1 for 4.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An enzyme reaction takes 60 s to finish at $37\\ ^\\circ\\text{C}$ and 240 s at $10\\ ^\\circ\\text{C}$.\n\nCalculate how many times slower the reaction is at $10\\ ^\\circ\\text{C}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Times slower", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and time", statement: "A longer time means a slower rate; divide the longer time by the shorter time." },
            ],
            steps: [
              { reasoning: "Divide the time at 10 °C by the time at 37 °C.", working: "240 \\div 60", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 4\\text{ times slower}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 times slower",
            commonErrors: ["Subtracting the times (180 s).", "Dividing in the wrong order."],
            examinerNote: "M1 for 240/60 oe. A1 for 4.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The same enzyme reaction takes 90 s at $30\\ ^\\circ\\text{C}$ and 45 s at $37\\ ^\\circ\\text{C}$.\n\nCalculate how many times faster the reaction is at $37\\ ^\\circ\\text{C}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Times faster", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and time", statement: "Rate is inversely proportional to time." },
            ],
            steps: [
              { reasoning: "Divide the slower time by the faster time.", working: "90 \\div 45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 2\\text{ times faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 times faster",
            commonErrors: ["Giving 45 s as the answer (the difference is 45, not the ratio)."],
            examinerNote: "M1 for 90/45 oe. A1 for 2.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student measures the time for amylase to digest starch at three temperatures: 120 s at $25\\ ^\\circ\\text{C}$, 60 s at $37\\ ^\\circ\\text{C}$ and 240 s at $55\\ ^\\circ\\text{C}$.\n\nCalculate how many times faster the reaction is at $37\\ ^\\circ\\text{C}$ than at $25\\ ^\\circ\\text{C}$, and how many times faster it is at $37\\ ^\\circ\\text{C}$ than at $55\\ ^\\circ\\text{C}$.",
          response: {
            type: "numeric",
            parts: [
              { label: "37 °C vs 25 °C", answer: 2, tolerance: 0 },
              { label: "37 °C vs 55 °C", answer: 4, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and time", statement: "Divide the longer time by the shorter time to find how many times faster the shorter-time reaction is." },
            ],
            steps: [
              { reasoning: "37 vs 25: divide the 25 °C time by the 37 °C time.", working: "120 \\div 60 = 2", marks: 1, markCode: "B" },
              { reasoning: "37 vs 55: divide the 55 °C time by the 37 °C time.", working: "240 \\div 60 = 4", marks: 1, markCode: "B" },
              { reasoning: "Both comparisons use the same method: longer time / shorter time.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "2 times faster than at 25 °C; 4 times faster than at 55 °C",
            commonErrors: ["Subtracting times instead of dividing.", "Comparing 55 °C with 25 °C instead of 37 °C."],
            examinerNote: "B1 for each correct ratio. M1 if method shown. Note the enzyme is slower at 55 °C because it begins to denature.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how an enzyme's active site allows it to digest food, using the idea of a 'lock and key'. Include the terms substrate and product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active site", statement: "Each enzyme has an active site shaped to fit only its own substrate, like a key in a lock." },
            ],
            steps: [
              { reasoning: "Large food molecules (substrates) must be broken into small soluble molecules for absorption.", marks: 1, markCode: "B" },
              { reasoning: "The substrate fits into the enzyme's active site because their shapes match.", marks: 1, markCode: "B" },
              { reasoning: "The enzyme speeds up the reaction that breaks the substrate into smaller product molecules.", marks: 1, markCode: "B" },
              { reasoning: "The enzyme is unchanged and can be reused; the active site remains available for another substrate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The substrate fits the enzyme's active site like a key in a lock; the enzyme speeds up the breakdown into products and is unchanged afterwards.",
            commonErrors: ["Saying the enzyme is used up in the reaction."],
            examinerNote: "B1 substrate definition/context. B1 active site fit. B1 products formed faster. R1 enzyme unchanged/reusable.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student says: \"If I heat an enzyme to 60 °C and then cool it back to 37 °C, it will work just as well as before.\"\n\nExplain why the student is wrong, and explain why enzyme activity first increases and then decreases as temperature rises.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Denatured", statement: "High temperature permanently changes the enzyme's shape; the active site no longer fits the substrate." },
            ],
            steps: [
              { reasoning: "At 60 °C the enzyme is denatured: its shape, including the active site, changes permanently.", marks: 1, markCode: "B" },
              { reasoning: "Cooling it back does not restore the original shape, so the enzyme still does not work.", marks: 1, markCode: "R" },
              { reasoning: "As temperature rises toward the optimum, particles move faster and collide more often, so the rate increases.", marks: 1, markCode: "B" },
              { reasoning: "Above the optimum, denaturation reduces the number of working enzymes, so the rate falls.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Heating denatures the enzyme permanently, so cooling does not restore it. Activity rises with temperature up to the optimum because collisions increase, then falls as enzymes denature.",
            commonErrors: ["Saying the enzyme 'recovers' when cooled.", "Saying activity always increases with temperature."],
            examinerNote: "B1 denatured. R1 permanent / no recovery. B1 faster collisions up to optimum. R1 falls due to denaturation.",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ produces bile, which helps to digest fats?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Pancreas" },
              { id: "c", text: "Liver" },
              { id: "d", text: "Small intestine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile", statement: "The liver makes bile, which helps digest fat; the pancreas makes digestive enzymes." },
            ],
            steps: [
              { reasoning: "Bile is produced by the liver; the pancreas produces enzymes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Liver",
            commonErrors: ["Choosing pancreas, which makes enzymes not bile."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is the wall of the small intestine folded into villi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the intestine stronger" },
              { id: "b", text: "To give a large surface area for absorbing digested food" },
              { id: "c", text: "To store bile" },
              { id: "d", text: "To mix food with acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Villi", statement: "The small intestine wall is folded into villi, giving a large thin surface area for absorption into the blood." },
            ],
            steps: [
              { reasoning: "Villi increase the surface area so digested food molecules can be absorbed quickly into the blood.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To give a large surface area for absorbing digested food",
            commonErrors: ["Thinking villi store food or enzymes."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-digestion-enzymes-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student investigates how temperature affects amylase. She adds the same volume of starch and amylase solution at different temperatures and records the time for the starch to disappear (tested with iodine).\n\n| Temperature ($^\\circ\\text{C}$) | Time for starch to disappear (s) |\n| --- | --- |\n| 10 | 200 |\n| 25 | 100 |\n| 37 | 50 |\n| 50 | 80 |\n| 70 | no change after 600 s |",
          parts: [
            { label: "a", prompt: "Identify the optimum temperature for this amylase and explain how you know.", marks: 2 },
            { label: "b", prompt: "Calculate how many times faster the reaction is at $37\\ ^\\circ\\text{C}$ than at $10\\ ^\\circ\\text{C}$.", marks: 2 },
            { label: "c", prompt: "Explain why there is no change at $70\\ ^\\circ\\text{C}$.", marks: 2 },
            { label: "d", prompt: "Suggest two ways to make this investigation more reliable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rate and time", statement: "Shorter time = faster rate; the optimum temperature gives the shortest time." },
              { kind: "definition", name: "Denatured", statement: "High temperature permanently changes the enzyme's active site." },
            ],
            steps: [
              { part: "a", reasoning: "The optimum is $37\\ ^\\circ\\text{C}$.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The time is shortest (50 s) at 37 °C, so the rate is fastest there.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Divide the 10 °C time by the 37 °C time.", working: "200 \\div 50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "= 4\\text{ times faster}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "At 70 °C the amylase is denatured.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Its active site has permanently changed shape, so it cannot fit starch and no digestion occurs (iodine stays blue-black).", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Repeat each temperature at least three times and calculate a mean.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Control variables: same volumes and concentrations of starch and amylase, same pH, same type of amylase; use a water bath to hold temperature steady.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 37 °C, shortest time (b) 4 times faster (c) Amylase denatured at 70 °C, active site no longer fits (d) Repeat and mean; control variables / water bath.",
            commonErrors: ["In (a) choosing 50 °C because the time is still short.", "In (c) saying the enzyme was 'killed'."],
            examinerNote: "(b) M1 for 200/50. A1 for 4. (d) Any two valid reliability improvements.",
          },
        },
      ],
    },
  ],
};
