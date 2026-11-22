import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieb-u3-lesson-3-2",
  code: "3-2",
  title: "Human Nutrition and Digestion",
  goal: "I CAN describe a balanced diet, the digestive system, and the role of enzymes in digestion and absorption.",
  standards: ["0653 3.4", "0653 3.5"],
  vocabulary: [
    { term: "Balanced diet", definition: "Diet containing all nutrients in correct proportions: carbohydrates, proteins, lipids, vitamins, minerals, water, fibre." },
    { term: "Digestion", definition: "Breakdown of large food molecules into small soluble molecules by mechanical and chemical means." },
    { term: "Amylase", definition: "Enzyme digesting starch to maltose; in saliva and pancreas." },
    { term: "Protease", definition: "Enzyme digesting proteins to amino acids; e.g. pepsin, trypsin." },
    { term: "Lipase", definition: "Enzyme digesting lipids to fatty acids and glycerol." },
    { term: "Absorption", definition: "Movement of digested food molecules into the blood/lymph, mainly in the ileum." },
    { term: "Villus", definition: "Finger-like projection in ileum wall; huge surface area for absorption." },
  ],
  concepts: [
    {
      id: "cieb-u3-balanced-diet",
      title: "Balanced diet and nutrients",
      skill: "Describe the main nutrients, their functions, and deficiency diseases.",
      lesson: {
        sections: [
          {
            heading: "Nutrients and functions",
            body: "| Nutrient | Function | Source |\n|---|---|---|\n| Carbohydrates | energy | starch/sugars |\n| Proteins | growth/repair | meat/eggs/beans |\n| Lipids | energy store, insulation | oils/fats |\n| Vitamins | varied (C: immunity; D: bones) | fruit/veg |\n| Minerals | varied (Ca: bones; Fe: blood) | dairy/meat |\n| Water/fibre | solvent/transport; gut health | drinks; veg |",
          },
          {
            heading: "Deficiency diseases",
            body: "- **Scurvy**: vitamin C deficiency → bleeding gums, poor wound healing.\n- **Rickets**: vitamin D/Ca deficiency → soft, deformed bones.\n- **Anaemia**: iron deficiency → tiredness, low haemoglobin.",
          },
          {
            heading: "Obesity and malnutrition",
            body: "Excess energy intake → obesity (linked to diabetes, heart disease). Deficiency of any nutrient → malnutrition.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is a 'balanced' diet needed rather than just eating lots of food?",
          solution: "Each nutrient has a specific function; excess of one and deficiency of another causes disease — balance is about proportions, not quantity.",
        },
      },
      questions: [
        {
          id: "cieb-u3-balanced-diet-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is the main source of energy in the diet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbohydrates" },
              { id: "b", text: "Minerals" },
              { id: "c", text: "Water" },
              { id: "d", text: "Vitamins" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy nutrient", statement: "Carbohydrates are the primary energy source." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{carbohydrates = energy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carbohydrates",
            commonErrors: ["Choosing lipids — they store energy but carbs are the main fuel."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the disease caused by vitamin C deficiency and one symptom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Scurvy", statement: "Vitamin C deficiency → bleeding gums, poor healing." },
            ],
            steps: [
              { reasoning: "Name the disease.", working: "\\text{scurvy}", marks: 1, markCode: "M" },
              { reasoning: "Give a symptom.", working: "\\text{bleeding gums}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scurvy — bleeding gums and poor wound healing.",
            commonErrors: ["Saying 'rickets' — that's vitamin D/Ca."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by a 'balanced diet' and why proportions matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced diet", statement: "All nutrients in correct proportions for health." },
            ],
            steps: [
              { reasoning: "Define: all nutrients in correct amounts.", working: "\\text{all nutrients, correct proportions}", marks: 1, markCode: "M" },
              { reasoning: "Too little → deficiency disease.", working: "\\text{deficiency}", marks: 1, markCode: "M" },
              { reasoning: "Too much (energy) → obesity/disease.", working: "\\text{excess → obesity}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: balance is about proportions, not just quantity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A diet containing all nutrients in the right proportions; too little causes deficiency diseases, too much energy causes obesity.",
            commonErrors: ["Saying 'eat as much as possible'."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A person's diet is analysed and found to be very low in iron and vitamin C.",
          parts: [
            { label: "a", prompt: "Predict two health problems that could result.", marks: 2 },
            { label: "b", prompt: "Explain the physiological reason for each problem.", marks: 4 },
            { label: "c", prompt: "Suggest two foods that would correct the deficiencies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Iron/C deficiency", statement: "Fe → haemoglobin (anaemia); vit C → collagen/immunity (scurvy)." },
            ],
            steps: [
              { part: "a", reasoning: "Problem 1: anaemia (iron).", working: "\\text{anaemia}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Problem 2: scurvy (vitamin C).", working: "\\text{scurvy}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Iron needed for haemoglobin → less O₂ transport → tiredness.", working: "\\text{haemoglobin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete iron explanation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vit C needed for collagen → weak connective tissue.", working: "\\text{collagen}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete vitamin C explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Iron: red meat, liver, beans.", working: "\\text{meat/beans}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vit C: citrus fruits, peppers.", working: "\\text{citrus/veg}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State food sources clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) anaemia + scurvy (b) Fe→haemoglobin→O₂ transport; vitC→collagen (c) meat/beans; citrus/veg",
            commonErrors: ["In (b) not linking nutrient to its physiological role."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is needed for growth and repair of body tissues?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "Water" },
              { id: "c", text: "Fibre" },
              { id: "d", text: "Vitamin C" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein function", statement: "Growth and repair of tissues." },
            ],
            steps: [
              { reasoning: "Match nutrient to function.", working: "\\text{protein} \\to \\text{growth/repair}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Protein",
            commonErrors: ["Choosing carbohydrates — those are for energy."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rickets is caused by a deficiency of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vitamin C" },
              { id: "b", text: "Protein" },
              { id: "c", text: "Iron" },
              { id: "d", text: "Vitamin D and calcium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rickets", statement: "Vitamin D/Ca deficiency → soft, deformed bones." },
            ],
            steps: [
              { reasoning: "Recall the deficiency disease.", working: "\\text{vit D/Ca} \\to \\text{rickets}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vitamin D and calcium",
            commonErrors: ["Choosing vitamin C — that causes scurvy."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which nutrient helps keep the digestive system healthy and prevents constipation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sugar" },
              { id: "b", text: "Lipids" },
              { id: "c", text: "Fibre" },
              { id: "d", text: "Salt" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fibre", statement: "Aids gut health and prevents constipation." },
            ],
            steps: [
              { reasoning: "Match nutrient to gut function.", working: "\\text{fibre} \\to \\text{gut health}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Fibre",
            commonErrors: ["Choosing lipids — they are for energy storage/insulation."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person needs 2000 kcal of energy per day but consumes 2400 kcal. Calculate the excess energy intake.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "kcal" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy balance", statement: "$\\text{excess} = \\text{intake} - \\text{requirement}$" },
            ],
            steps: [
              { reasoning: "Subtract requirement from intake.", working: "2400 - 2000", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "400\\,\\text{kcal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "400 kcal",
            commonErrors: ["Subtracting in the wrong direction (giving -400)."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The recommended vitamin C intake is 40 mg per day. A person consumes 30 mg. Calculate this as a percentage of the recommendation.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of RDA", statement: "$\\% = \\dfrac{\\text{intake}}{\\text{recommended}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{30}{40} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Inverting the fraction (40/30)."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A food provides 12 g of protein per 100 g. How much protein is in a 250 g portion?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Proportional calculation", statement: "$12\\,\\text{g per }100\\,\\text{g} \\to \\text{scale by portion size}$" },
            ],
            steps: [
              { reasoning: "Scale up by 2.5.", working: "12 \\times \\frac{250}{100} = 30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "30 g",
            commonErrors: ["Multiplying 12 by 250 directly without scaling."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An athlete consumes 3200 kcal per day but expends only 2800 kcal. Calculate the energy surplus and state the likely long-term effect on body mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "kcal" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy balance", statement: "Positive balance (intake > expenditure) → weight gain." },
            ],
            steps: [
              { reasoning: "Calculate surplus.", working: "3200 - 2800 = 400\\,\\text{kcal}", marks: 1, markCode: "M" },
              { reasoning: "State surplus value.", working: "400\\,\\text{kcal}", marks: 1, markCode: "M" },
              { reasoning: "State effect: weight gain (positive balance).", working: "\\text{weight gain}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "400 kcal surplus — positive energy balance leads to weight gain.",
            commonErrors: ["Forgetting that a surplus means weight gain, not loss."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of lipids in the human diet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipid functions", statement: "Energy store, insulation, cell membrane structure." },
            ],
            steps: [
              { reasoning: "Give two functions.", working: "\\text{energy store; insulation}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lipids are stored as fat for energy reserves and provide insulation; they also help form cell membranes.",
            commonErrors: ["Saying lipids are 'for protein building' — that is proteins' role."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Obesity increases the risk of type 2 diabetes mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Obesity destroys the pancreas" },
              { id: "b", text: "It reduces the number of red blood cells" },
              { id: "c", text: "Excess body fat can cause insulin resistance, so blood glucose is poorly controlled" },
              { id: "d", text: "It prevents all digestion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Obesity and diabetes", statement: "Excess fat linked to insulin resistance / poor glucose control." },
            ],
            steps: [
              { reasoning: "Link obesity to diabetes mechanism.", working: "\\text{obesity} \\to \\text{insulin resistance}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Excess body fat can cause insulin resistance, so blood glucose is poorly controlled",
            commonErrors: ["Saying 'obesity causes diabetes directly' — it increases risk via insulin resistance."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which mineral is needed to make haemoglobin in red blood cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Iodine" },
              { id: "c", text: "Calcium" },
              { id: "d", text: "Zinc" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Iron function", statement: "Component of haemoglobin; deficiency → anaemia." },
            ],
            steps: [
              { reasoning: "Match mineral to blood function.", working: "\\text{Fe} \\to \\text{haemoglobin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Iron",
            commonErrors: ["Choosing calcium — that is for bones/teeth."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Scurvy is caused by a deficiency of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "Vitamin D" },
              { id: "c", text: "Iron" },
              { id: "d", text: "Vitamin C" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Scurvy", statement: "Vitamin C deficiency → bleeding gums, poor healing." },
            ],
            steps: [
              { reasoning: "Recall deficiency disease.", working: "\\text{vit C} \\to \\text{scurvy}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Vitamin C",
            commonErrors: ["Choosing vitamin D — that causes rickets."],
          },
        },
        {
          id: "cieb-u3-balanced-diet-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a diet deficient in calcium and vitamin D could lead to rickets in a child.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Rickets mechanism", statement: "Ca/vit D → bone mineralisation; deficiency → soft, deformed bones." },
            ],
            steps: [
              { reasoning: "Calcium and vitamin D are needed for bone development.", working: "\\text{Ca + vit D}", marks: 1, markCode: "M" },
              { reasoning: "Without them bones are not properly mineralised.", working: "\\text{soft bones}", marks: 1, markCode: "M" },
              { reasoning: "Bones become weak and deformed under weight.", working: "\\text{deformed}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: deficiency → rickets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Calcium and vitamin D are needed to mineralise and strengthen growing bones; without them the bones stay soft and bend under body weight, causing the deformities of rickets.",
            commonErrors: ["Confusing rickets with scurvy — rickets is Ca/vitamin D, scurvy is vitamin C."],
          },
        },
      ],
    },
    {
      id: "cieb-u3-digestion",
      title: "Digestion and absorption",
      skill: "Describe the digestive system, the role of enzymes, and absorption in the ileum.",
      lesson: {
        sections: [
          {
            heading: "Alimentary canal",
            body: "Mouth → oesophagus → stomach → small intestine (duodenum, ileum) → large intestine → rectum → anus.\n\nAccessory organs: salivary glands, liver (bile), pancreas (enzymes + NaHCO₃).",
          },
          {
            heading: "Enzymes along the tract",
            body: "- **Mouth**: amylase (saliva) → starch to maltose; mechanical chewing.\n- **Stomach**: pepsin (protease) + HCl → proteins to peptides; kills microbes.\n- **Small intestine**: trypsin/lipase from pancreas; bile emulsifies lipids; villi absorb products.\n- **Large intestine**: water absorption.",
          },
          {
            heading: "Absorption",
            body: "Villi in ileum have huge surface area, thin walls, and rich blood supply. Glucose/amino acids → blood; fatty acids/glycerol → lacteals (lymph).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does bile not contain enzymes yet is essential for lipid digestion?",
          solution: "Bile emulsifies large fat droplets into small droplets, increasing surface area for lipase action.",
        },
      },
      questions: [
        {
          id: "cieb-u3-digestion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme digests starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipase" },
              { id: "b", text: "Pepsin" },
              { id: "c", text: "Amylase" },
              { id: "d", text: "Trypsin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Amylase", statement: "Digests starch to maltose; in saliva/pancreas." },
            ],
            steps: [
              { reasoning: "Match enzyme to substrate.", working: "\\text{amylase} \\to \\text{starch}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Amylase",
            commonErrors: ["Choosing protease — that's for proteins."],
          },
        },
        {
          id: "cieb-u3-digestion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of bile in digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile", statement: "Emulsifies lipids; produced by liver, stored in gall bladder." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{emulsifies fats}", marks: 1, markCode: "M" },
              { reasoning: "Complete: increases surface area for lipase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile emulsifies lipids into small droplets, increasing surface area for lipase to digest them.",
            commonErrors: ["Saying bile contains lipase — it does not."],
          },
        },
        {
          id: "cieb-u3-digestion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how villi are adapted for absorption in the small intestine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Villus adaptations", statement: "Large surface area, thin wall, rich blood supply, lacteals." },
            ],
            steps: [
              { reasoning: "Surface area adaptation.", working: "\\text{finger-like/large area}", marks: 1, markCode: "M" },
              { reasoning: "Short diffusion distance.", working: "\\text{thin wall}", marks: 1, markCode: "M" },
              { reasoning: "Transport away: blood supply/lacteals.", working: "\\text{blood/lacteals}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Villi are finger-like projections giving huge surface area, have thin walls for short diffusion distance, and contain blood vessels/lacteals to carry absorbed molecules away.",
            commonErrors: ["Only listing 'large surface area' without the other adaptations."],
          },
        },
        {
          id: "cieb-u3-digestion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace the digestion of a starch molecule from mouth to absorption.",
          parts: [
            { label: "a", prompt: "Describe what happens in the mouth.", marks: 2 },
            { label: "b", prompt: "Describe what happens in the stomach.", marks: 2 },
            { label: "c", prompt: "Describe what happens in the small intestine.", marks: 3 },
            { label: "d", prompt: "Explain how glucose is absorbed into the blood.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Digestion pathway", statement: "Amylase (mouth) → HCl/pepsin (stomach) → pancreatic enzymes + bile (ileum) → villi absorption." },
            ],
            steps: [
              { part: "a", reasoning: "Chewing + salivary amylase → maltose.", working: "\\text{amylase}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HCl + pepsin digest protein; starch largely unaffected.", working: "\\text{pepsin/HCl}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State stomach role.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pancreatic amylase continues starch digestion.", working: "\\text{amylase}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bile emulsifies lipids for lipase.", working: "\\text{bile/lipase}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Products: glucose, amino acids, fatty acids/glycerol.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Diffusion/facilitated transport across villus epithelium.", working: "\\text{diffusion}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Into blood capillaries of villus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) amylase → maltose (b) HCl/pepsin for protein (c) pancreatic enzymes + bile → glucose/FA/AA (d) diffusion into villus blood supply",
            commonErrors: ["Saying starch digestion stops in the stomach — amylase works until acid denatures it."],
          },
        },
        {
          id: "cieb-u3-digestion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme is produced in the stomach to digest protein?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bile" },
              { id: "b", text: "Pepsin" },
              { id: "c", text: "Lipase" },
              { id: "d", text: "Amylase" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pepsin", statement: "Protease enzyme in stomach working in acidic conditions." },
            ],
            steps: [
              { reasoning: "Match enzyme to site and substrate.", working: "\\text{stomach} \\to \\text{pepsin} \\to \\text{protein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pepsin",
            commonErrors: ["Choosing amylase — that digests starch, not protein."],
          },
        },
        {
          id: "cieb-u3-digestion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bile is produced by which organ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Gall bladder" },
              { id: "d", text: "Pancreas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile production", statement: "Made in liver, stored in gall bladder." },
            ],
            steps: [
              { reasoning: "Recall the source organ.", working: "\\text{liver}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Liver",
            commonErrors: ["Choosing gall bladder — it stores bile but does not produce it."],
          },
        },
        {
          id: "cieb-u3-digestion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Villi in the ileum are mainly adapted for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producing digestive enzymes" },
              { id: "b", text: "Absorbing digested food molecules" },
              { id: "c", text: "Churning food" },
              { id: "d", text: "Storing bile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Villi function", statement: "Huge surface area for absorption of digested products." },
            ],
            steps: [
              { reasoning: "Match structure to function.", working: "\\text{villi} \\to \\text{absorption}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Absorbing digested food molecules",
            commonErrors: ["Choosing 'producing enzymes' — enzymes come from pancreas/salivary glands, not villi."],
          },
        },
        {
          id: "cieb-u3-digestion-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An enzyme digests 20 g of starch into maltose in 10 minutes. Calculate the rate of digestion in g per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "g/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{amount}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide amount by time.", working: "\\frac{20}{10}", marks: 1, markCode: "M" },
              { reasoning: "State answer with units.", working: "2\\,\\text{g/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 g/min",
            commonErrors: ["Multiplying instead of dividing, or omitting units."],
          },
        },
        {
          id: "cieb-u3-digestion-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A meal contains 60 g of carbohydrate. By the end of digestion 45 g has been absorbed. Calculate the percentage of carbohydrate absorbed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "$\\% = \\dfrac{\\text{absorbed}}{\\text{total}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{45}{60} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Using 15 g (the undigested amount) as the numerator."],
          },
        },
        {
          id: "cieb-u3-digestion-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An enzyme breaks down 8 g of protein into peptides in 4 minutes. Calculate the rate in g per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "g/min" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\dfrac{\\text{amount}}{\\text{time}}$" },
            ],
            steps: [
              { reasoning: "Divide amount by time.", working: "\\frac{8}{4} = 2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 g/min",
            commonErrors: ["Forgetting units or giving 0.5 (inverted)."],
          },
        },
        {
          id: "cieb-u3-digestion-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A starch suspension of 200 cm³ is digested by amylase. After 30 minutes its volume has fallen to 50 cm³. Calculate the percentage reduction in volume and state what this indicates about digestion.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\text{ reduction} = \\dfrac{\\text{initial} - \\text{final}}{\\text{initial}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Calculate the reduction.", working: "\\frac{200 - 50}{200} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the percentage.", working: "75\\%", marks: 1, markCode: "M" },
              { reasoning: "State indication: starch broken down by amylase.", working: "\\text{starch digested}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75% reduction — the amylase has digested the starch suspension.",
            commonErrors: ["Computing 50/200 = 25% (remaining) instead of the reduction."],
          },
        },
        {
          id: "cieb-u3-digestion-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two roles of the pancreas in digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pancreas", statement: "Produces digestive enzymes and sodium hydrogencarbonate." },
            ],
            steps: [
              { reasoning: "Give the roles.", working: "\\text{enzymes; NaHCO}_3", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The pancreas produces digestive enzymes (amylase, protease, lipase) and sodium hydrogencarbonate to neutralise stomach acid.",
            commonErrors: ["Saying the pancreas 'makes bile' — bile comes from the liver."],
          },
        },
        {
          id: "cieb-u3-digestion-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Food is churned in the stomach mainly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorb nutrients into the blood" },
              { id: "b", text: "Increase the surface area of food for enzyme action" },
              { id: "c", text: "Kill all bacteria in the food" },
              { id: "d", text: "Store food for later" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mechanical digestion", statement: "Churning mixes food with enzymes and increases surface area." },
            ],
            steps: [
              { reasoning: "Link churning to function.", working: "\\text{churning} \\to \\text{surface area}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increase the surface area of food for enzyme action",
            commonErrors: ["Saying 'to absorb nutrients' — absorption happens in the ileum."],
          },
        },
        {
          id: "cieb-u3-digestion-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Most digested food molecules are absorbed into the blood in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oesophagus" },
              { id: "b", text: "Stomach" },
              { id: "c", text: "Ileum (small intestine)" },
              { id: "d", text: "Large intestine" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Absorption site", statement: "Villi of the ileum absorb digested products." },
            ],
            steps: [
              { reasoning: "Recall the absorption site.", working: "\\text{ileum}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ileum (small intestine)",
            commonErrors: ["Choosing large intestine — that mainly absorbs water."],
          },
        },
        {
          id: "cieb-u3-digestion-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme digests lipids into fatty acids and glycerol?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amylase" },
              { id: "b", text: "Lipase" },
              { id: "c", text: "Trypsin" },
              { id: "d", text: "Pepsin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipase", statement: "Digests lipids → fatty acids + glycerol." },
            ],
            steps: [
              { reasoning: "Match enzyme to substrate.", working: "\\text{lipase} \\to \\text{lipid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lipase",
            commonErrors: ["Choosing amylase — that is for starch."],
          },
        },
        {
          id: "cieb-u3-digestion-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the small intestine is adapted for both digestion and absorption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Small intestine adaptations", statement: "Pancreatic enzymes + bile for digestion; villi for absorption." },
            ],
            steps: [
              { reasoning: "Pancreatic enzymes and bile arrive for digestion.", working: "\\text{enzymes + bile}", marks: 1, markCode: "M" },
              { reasoning: "Villi give huge surface area.", working: "\\text{villi}", marks: 1, markCode: "M" },
              { reasoning: "Thin walls and blood supply speed absorption.", working: "\\text{thin wall + blood}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: adapted for both processes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The pancreas delivers enzymes and the liver delivers bile to digest food, while villi provide a huge surface area with thin walls and blood supply to absorb the products quickly.",
            commonErrors: ["Describing only absorption — include the digestive secretions too."],
          },
        },
      ],
    },
    {
      id: "cieb-u3-bmi",
      title: "Energy balance and BMI",
      skill: "Calculate BMI, describe energy balance, and explain obesity and malnutrition.",
      lesson: {
        sections: [
          {
            heading: "Energy balance",
            body: "- **Positive balance**: energy intake > expenditure → weight gain.\n- **Negative balance**: intake < expenditure → weight loss.\n- **Balanced**: intake = expenditure → stable weight.",
          },
          {
            heading: "BMI",
            body: "**BMI = mass (kg) / height² (m²)**\n\n| BMI | Category |\n|---|---|\n| <18.5 | underweight |\n| 18.5–24.9 | healthy |\n| 25–29.9 | overweight |\n| ≥30 | obese |",
          },
          {
            heading: "Obesity and malnutrition",
            body: "- **Obesity**: excess fat storage → linked to type 2 diabetes, heart disease, hypertension.\n- **Malnutrition**: deficiency of energy/nutrients → starvation, stunted growth, deficiency diseases.",
          },
        ],
        keyFormulas: [
          { name: "BMI", statement: "$BMI = \\dfrac{\\text{mass (kg)}}{\\text{height}^2 \\text{(m}^2\\text{)}}$" },
        ],
        workedExample: {
          problem: "A person weighs 70 kg and is 1.75 m tall. Calculate their BMI.",
          solution: "BMI = 70 / (1.75)² = 70 / 3.0625 ≈ 22.9 — healthy range.",
        },
      },
      questions: [
        {
          id: "cieb-u3-bmi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for BMI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Height divided by mass" },
              { id: "b", text: "Mass times height" },
              { id: "c", text: "Weight divided by age" },
              { id: "d", text: "Mass divided by height squared" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI formula", statement: "BMI = mass(kg)/height²(m²)." },
            ],
            steps: [
              { reasoning: "Recall formula.", working: "BMI = \\text{kg}/\\text{m}^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mass divided by height squared",
            commonErrors: ["Using cm for height — must convert to metres."],
          },
        },
        {
          id: "cieb-u3-bmi-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the BMI of a person who weighs 60 kg and is 1.5 m tall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI calculation", statement: "BMI = 60 / 1.5² = 26.7." },
            ],
            steps: [
              { reasoning: "Apply formula.", working: "60 / (1.5)^2", marks: 1, markCode: "M" },
              { reasoning: "Compute and classify.", working: "26.7 = overweight", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BMI = 60/2.25 ≈ 26.7 — overweight.",
            commonErrors: ["Forgetting to square height."],
          },
        },
        {
          id: "cieb-u3-bmi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the relationship between energy balance and body weight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy balance", statement: "Intake vs expenditure determines weight change." },
            ],
            steps: [
              { reasoning: "Intake > expenditure → gain.", working: "\\text{positive balance}", marks: 1, markCode: "M" },
              { reasoning: "Expenditure > intake → loss.", working: "\\text{negative balance}", marks: 1, markCode: "M" },
              { reasoning: "Equal → stable weight.", working: "\\text{balanced}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When energy intake exceeds expenditure, excess is stored as fat (weight gain); when expenditure exceeds intake, stored energy is used (weight loss); balance maintains stable weight.",
            commonErrors: ["Saying 'eating more always means gaining muscle' — excess becomes fat."],
          },
        },
        {
          id: "cieb-u3-bmi-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate BMI as a measure of health.",
          parts: [
            { label: "a", prompt: "State the BMI formula and categories.", marks: 3 },
            { label: "b", prompt: "Give two advantages of using BMI.", marks: 2 },
            { label: "c", prompt: "Give two limitations of BMI.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI", statement: "mass/height²; quick screening tool but doesn't distinguish fat/muscle." },
            ],
            steps: [
              { part: "a", reasoning: "Formula.", working: "BMI = \\text{kg}/\\text{m}^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Categories: under/healthy/over/obese.", working: "\\text{categories}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Quick, easy, non-invasive.", working: "\\text{quick/easy}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Good population-level screening.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Doesn't distinguish muscle vs fat.", working: "\\text{muscle vs fat}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Athletes may be 'overweight' but healthy.", working: "\\text{athletes}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Doesn't account for age/sex/bone density.", working: "\\text{other factors}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mass/height², categories (b) quick/easy screening (c) doesn't distinguish fat/muscle, ignores other factors",
            commonErrors: ["In (c) saying 'BMI is useless' — it's a screening tool, not diagnostic."],
          },
        },
        {
          id: "cieb-u3-bmi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which BMI range is classed as 'healthy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30 and above" },
              { id: "b", text: "Below 18.5" },
              { id: "c", text: "25 to 29.9" },
              { id: "d", text: "18.5 to 24.9" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI categories", statement: "18.5–24.9 = healthy." },
            ],
            steps: [
              { reasoning: "Recall the category table.", working: "18.5 \\leq BMI \\leq 24.9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 18.5 to 24.9",
            commonErrors: ["Choosing 25–29.9 — that is overweight."],
          },
        },
        {
          id: "cieb-u3-bmi-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A positive energy balance (intake greater than expenditure) leads to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weight gain" },
              { id: "b", text: "Faster metabolism" },
              { id: "c", text: "Stable weight" },
              { id: "d", text: "Weight loss" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Positive balance", statement: "Excess energy stored as fat → weight gain." },
            ],
            steps: [
              { reasoning: "Link balance to weight change.", working: "\\text{intake} > \\text{expenditure} \\to \\text{gain}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Weight gain",
            commonErrors: ["Choosing weight loss — that is a negative balance."],
          },
        },
        {
          id: "cieb-u3-bmi-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person has a BMI of 27. They are classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Healthy" },
              { id: "b", text: "Underweight" },
              { id: "c", text: "Overweight" },
              { id: "d", text: "Obese" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI classification", statement: "25–29.9 = overweight." },
            ],
            steps: [
              { reasoning: "Match value to category.", working: "27 \\in [25, 29.9] \\to \\text{overweight}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Overweight",
            commonErrors: ["Choosing obese — obesity starts at BMI 30."],
          },
        },
        {
          id: "cieb-u3-bmi-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the BMI of a person who weighs 80 kg and is 2 m tall.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "kg/m²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI", statement: "$BMI = \\dfrac{\\text{mass (kg)}}{\\text{height}^2 \\text{(m}^2\\text{)}}$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{80}{2^2} = \\frac{80}{4}", marks: 1, markCode: "M" },
              { reasoning: "Compute and classify.", working: "BMI = 20 = \\text{healthy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BMI = 20 (healthy)",
            commonErrors: ["Forgetting to square the height (80/2 = 40)."],
          },
        },
        {
          id: "cieb-u3-bmi-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the BMI of a person who weighs 50 kg and is 1.6 m tall.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 19.5, unit: "kg/m²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI", statement: "$BMI = \\dfrac{\\text{mass}}{\\text{height}^2}$" },
            ],
            steps: [
              { reasoning: "Square the height and divide.", working: "\\frac{50}{1.6^2} = \\frac{50}{2.56}", marks: 1, markCode: "M" },
              { reasoning: "Compute and classify.", working: "BMI \\approx 19.5 = \\text{healthy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BMI ≈ 19.5 (healthy)",
            commonErrors: ["Rounding 1.6² to 2.5 instead of 2.56."],
          },
        },
        {
          id: "cieb-u3-bmi-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person is 1.8 m tall and has a BMI of 25. Calculate their body mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 81, unit: "kg" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI rearranged", statement: "$\\text{mass} = BMI \\times \\text{height}^2$" },
            ],
            steps: [
              { reasoning: "Rearrange and compute.", working: "25 \\times 1.8^2 = 25 \\times 3.24 = 81", marks: 1, markCode: "M" },
            ],
            finalAnswer: "81 kg",
            commonErrors: ["Dividing instead of multiplying, or forgetting to square height."],
          },
        },
        {
          id: "cieb-u3-bmi-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A person weighs 90 kg and is 1.5 m tall. Calculate their BMI and state their category.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40, unit: "kg/m²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI", statement: "$BMI = \\dfrac{\\text{mass}}{\\text{height}^2}$; $\\geq 30$ = obese." },
            ],
            steps: [
              { reasoning: "Square height and divide.", working: "\\frac{90}{1.5^2} = \\frac{90}{2.25}", marks: 1, markCode: "M" },
              { reasoning: "Compute the BMI.", working: "BMI = 40", marks: 1, markCode: "M" },
              { reasoning: "Classify as obese.", working: "40 \\geq 30 \\to \\text{obese}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BMI = 40 — obese",
            commonErrors: ["Computing 90/1.5 = 60 by forgetting to square the height."],
          },
        },
        {
          id: "cieb-u3-bmi-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two health problems linked to obesity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Obesity risks", statement: "Type 2 diabetes, heart disease, hypertension." },
            ],
            steps: [
              { reasoning: "Give two valid problems.", working: "\\text{diabetes; heart disease}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Type 2 diabetes and heart disease (also: hypertension, joint problems).",
            commonErrors: ["Listing deficiency diseases (scurvy/rickets) — those are undernutrition, not obesity."],
          },
        },
        {
          id: "cieb-u3-bmi-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "BMI may classify a muscular athlete as 'overweight' because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "BMI measures fitness, not body composition" },
              { id: "b", text: "Athletes eat too little protein" },
              { id: "c", text: "Athletes are always taller" },
              { id: "d", text: "Muscle has a higher density than fat, so BMI cannot distinguish muscle from fat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI limitation", statement: "Does not distinguish muscle mass from fat mass." },
            ],
            steps: [
              { reasoning: "Recall the limitation.", working: "\\text{muscle vs fat}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Muscle has a higher density than fat, so BMI cannot distinguish muscle from fat",
            commonErrors: ["Saying 'BMI is wrong' — it is a screening tool, not a body-composition measure."],
          },
        },
        {
          id: "cieb-u3-bmi-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A negative energy balance (expenditure greater than intake) causes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weight loss" },
              { id: "b", text: "Increased appetite only" },
              { id: "c", text: "No change in weight" },
              { id: "d", text: "Weight gain" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Negative balance", statement: "Stored energy used → weight loss." },
            ],
            steps: [
              { reasoning: "Link balance to weight change.", working: "\\text{expenditure} > \\text{intake} \\to \\text{loss}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Weight loss",
            commonErrors: ["Choosing weight gain — that is positive balance."],
          },
        },
        {
          id: "cieb-u3-bmi-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "BMI stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood mass index" },
              { id: "b", text: "Body mass index" },
              { id: "c", text: "Basal metabolic intake" },
              { id: "d", text: "Body muscle index" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "BMI", statement: "Body mass index = mass/height²." },
            ],
            steps: [
              { reasoning: "Recall the acronym.", working: "\\text{body mass index}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Body mass index",
            commonErrors: ["Guessing — BMI is always 'body mass index'."],
          },
        },
        {
          id: "cieb-u3-bmi-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a person with a BMI of 28 could move into the healthy range (18.5–24.9).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Weight management", statement: "Negative energy balance → fat loss → lower BMI." },
            ],
            steps: [
              { reasoning: "Reduce energy intake or increase expenditure.", working: "\\text{diet/exercise}", marks: 1, markCode: "M" },
              { reasoning: "Create a negative energy balance.", working: "\\text{negative balance}", marks: 1, markCode: "M" },
              { reasoning: "Stored fat is used → mass decreases.", working: "\\text{fat loss}", marks: 1, markCode: "M" },
              { reasoning: "Lower mass → lower BMI into healthy range.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "By reducing calorie intake and/or increasing exercise, the person creates a negative energy balance; stored fat is used and body mass falls, lowering BMI into the healthy range.",
            commonErrors: ["Saying 'eat less protein' — total energy balance matters, not one nutrient."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u3-human-nutrition-notes",
      title: "Human nutrition and digestion — revision notes",
      summary: "Balanced diet, nutrients, deficiency diseases, digestive enzymes and absorption.",
      sections: [
        {
          heading: "Nutrients",
          body: "Carbs (energy), proteins (growth/repair), lipids (store/insulation), vitamins/minerals (specific roles), water/fibre. Deficiencies: scurvy (vit C), rickets (vit D/Ca), anaemia (Fe).",
        },
        {
          heading: "Digestion",
          body: "Amylase → starch/maltose (mouth/pancreas); pepsin/trypsin → protein; lipase → lipids (needs bile emulsification). Absorption in ileum villi → blood (glucose/AA) or lacteals (lipids).",
        },
        {
          heading: "Exam technique",
          body: "- Always link structure to function: villi → surface area; bile → emulsification (no enzyme).\n- Match enzyme to substrate: amylase→starch, protease→protein, lipase→lipid.",
        },
      ],
    },
  ],
};
