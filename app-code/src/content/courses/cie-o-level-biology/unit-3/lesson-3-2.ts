import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olbio-u3-lesson-3-2",
  code: "3-2",
  title: "Human Nutrition and Digestion",
  goal: "I CAN describe a balanced diet, the digestive system, and the role of enzymes in digestion and absorption.",
  standards: ["5090 3.4", "5090 3.5"],
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
      id: "olbio-u3-balanced-diet",
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
          id: "olbio-u3-balanced-diet-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is the main source of energy in the diet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Minerals" },
              { id: "b", text: "Carbohydrates" },
              { id: "c", text: "Vitamins" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "b",
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
          id: "olbio-u3-balanced-diet-q2",
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
          id: "olbio-u3-balanced-diet-q3",
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
          id: "olbio-u3-balanced-diet-q4",
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
          id: "olbio-u3-balanced-diet-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main function of proteins in the diet is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulation only" },
              { id: "b", text: "Growth and repair of body tissues" },
              { id: "c", text: "Immediate energy release" },
              { id: "d", text: "Digestion of fibre" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Protein function", statement: "Growth and repair — provides amino acids." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{growth/repair}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Growth and repair of body tissues",
            commonErrors: ["Choosing energy — that is carbohydrates/lipids."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Scurvy is caused by a deficiency of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vitamin C" },
              { id: "b", text: "Iron" },
              { id: "c", text: "Vitamin D" },
              { id: "d", text: "Calcium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Scurvy", statement: "Vitamin C deficiency → bleeding gums, poor healing." },
            ],
            steps: [
              { reasoning: "Recall the deficiency.", working: "\\text{vitamin C}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Vitamin C",
            commonErrors: ["Choosing vitamin D — that causes rickets."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the main role of dietary fibre in the diet?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It builds muscle" },
              { id: "b", text: "It is digested to provide energy" },
              { id: "c", text: "It adds bulk and maintains healthy gut function" },
              { id: "d", text: "It dissolves in blood" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fibre", statement: "Not digested; adds bulk, aids gut movement and health." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{gut health}", marks: 1, markCode: "M" },
              { reasoning: "State it clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It adds bulk and maintains healthy gut function",
            commonErrors: ["Saying it provides energy — fibre is not digested for energy."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A meal provides 2000 kcal of energy. If 50% comes from carbohydrates, calculate the energy from carbohydrates in kcal.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "kcal" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x whole." },
            ],
            steps: [
              { reasoning: "Calculate 50% of 2000.", working: "0.50 \\times 2000 = 1000", marks: 1, markCode: "M" },
              { reasoning: "State the energy.", working: "1000 \\text{ kcal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 kcal",
            commonErrors: ["Giving 2000 — that's the total, not the carbohydrate portion."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A daily diet provides 2000 kcal. Carbohydrates supply 50%, protein 15% and lipids 30% of the energy. (a) Calculate the energy from protein. (b) Calculate the energy from lipids.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300, unit: "kcal" },
              { label: "b", answer: 600, unit: "kcal" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Part = percentage / 100 x total energy." },
            ],
            steps: [
              { reasoning: "Protein: 0.15 x 2000 = 300 kcal.", working: "0.15 \\times 2000 = 300", marks: 1, markCode: "M" },
              { reasoning: "Lipids: 0.30 x 2000 = 600 kcal.", working: "0.30 \\times 2000 = 600", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 300 kcal protein; (b) 600 kcal lipids",
            commonErrors: ["Swapping percentages — match each nutrient to its value."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The recommended daily intake of vitamin C is 40 mg. A person's diet provides 25 mg per day. Calculate the percentage of the recommended intake they receive.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 62.5, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = intake / recommended x 100." },
            ],
            steps: [
              { reasoning: "Divide and multiply by 100.", working: "\\frac{25}{40} \\times 100 = 62.5\\%", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "62.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62.5%",
            commonErrors: ["Dividing recommended by intake instead."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rickets is caused by a deficiency of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vitamin C" },
              { id: "b", text: "Iron" },
              { id: "c", text: "Vitamin A" },
              { id: "d", text: "Vitamin D and calcium" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Rickets", statement: "Vitamin D/calcium deficiency → soft, deformed bones." },
            ],
            steps: [
              { reasoning: "Recall the deficiency.", working: "\\text{vit D/Ca}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Vitamin D and calcium",
            commonErrors: ["Choosing vitamin C — that causes scurvy."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define a 'balanced diet'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balanced diet", statement: "Diet containing all nutrients in the correct proportions for health." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{all nutrients, correct proportions}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A diet that contains all the nutrients the body needs in the correct proportions for good health.",
            commonErrors: ["Saying 'lots of food' — it is about proportions, not quantity."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why proportions of nutrients matter in a balanced diet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Balanced diet", statement: "Each nutrient has a specific function; deficiency or excess causes disease." },
            ],
            steps: [
              { reasoning: "Too little of a nutrient → deficiency disease.", working: "\\text{deficiency}", marks: 1, markCode: "M" },
              { reasoning: "Too much energy → obesity and related diseases.", working: "\\text{excess}", marks: 1, markCode: "M" },
              { reasoning: "Each nutrient has a different role.", working: "\\text{different roles}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: proportions, not just total food, matter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each nutrient has a specific function; deficiency causes diseases like scurvy or rickets while excess energy causes obesity — so the correct proportions matter more than simply eating a lot.",
            commonErrors: ["Saying 'eat as much healthy food as possible' — even healthy nutrients can be excessive."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Obesity is linked to which health problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Type 2 diabetes" },
              { id: "b", text: "Rickets" },
              { id: "c", text: "Scurvy" },
              { id: "d", text: "Anaemia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Obesity", statement: "Linked to type 2 diabetes, heart disease, hypertension." },
            ],
            steps: [
              { reasoning: "Recall the link.", working: "\\text{type 2 diabetes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Type 2 diabetes",
            commonErrors: ["Choosing scurvy/rickets — those are deficiency diseases, not obesity-related."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Match nutrient deficiencies to their diseases and explain one in detail.",
          parts: [
            { label: "a", prompt: "Match: vitamin C, vitamin D/calcium, iron → their deficiency diseases.", marks: 3 },
            { label: "b", prompt: "Explain the physiological cause of one of these deficiency diseases.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Deficiency diseases", statement: "Vit C → scurvy; vit D/Ca → rickets; Fe → anaemia." },
            ],
            steps: [
              { part: "a", reasoning: "Vitamin C → scurvy.", working: "\\text{scurvy}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vitamin D/Ca → rickets.", working: "\\text{rickets}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Iron → anaemia.", working: "\\text{anaemia}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Choose one and give physiological reason.", working: "\\text{e.g. Fe→haemoglobin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) vit C→scurvy, vit D/Ca→rickets, Fe→anaemia (b) e.g. iron needed for haemoglobin → less O₂ transport → tiredness",
            commonErrors: ["In (b) naming a disease without explaining the physiological cause."],
          },
        },
        {
          id: "olbio-u3-balanced-diet-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A nutritionist analyses a teenager's diet and finds it is high in fatty foods and low in fruit and vegetables.",
          parts: [
            { label: "a", prompt: "Predict two health problems that could result from this diet.", marks: 2 },
            { label: "b", prompt: "Explain the physiological reason for each problem.", marks: 3 },
            { label: "c", prompt: "Suggest two dietary changes that would improve the diet.", marks: 2 },
            { label: "d", prompt: "Explain what is meant by a 'balanced' diet in this context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Diet imbalance", statement: "Excess fat → obesity/heart disease; low fruit/veg → vitamin/mineral deficiency." },
            ],
            steps: [
              { part: "a", reasoning: "Problem 1: obesity.", working: "\\text{obesity}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Problem 2: vitamin/mineral deficiency e.g. scurvy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Excess energy stored as fat → obesity risks.", working: "\\text{fat storage}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Low vit C → poor collagen/immunity → scurvy.", working: "\\text{vit C}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete both explanations.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Change 1: reduce fatty foods.", working: "\\text{less fat}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Change 2: eat more fruit/vegetables.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "All nutrients in correct proportions.", working: "\\text{proportions}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Not just quantity but balance of nutrients.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) obesity + vitamin deficiency (b) excess energy→fat; low vit C→scurvy (c) less fat, more fruit/veg (d) correct proportions of all nutrients",
            commonErrors: ["In (a) predicting identical problems — give two distinct ones."],
          },
        },
      ],
    },
    {
      id: "olbio-u3-digestion",
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
          id: "olbio-u3-digestion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme digests starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trypsin" },
              { id: "b", text: "Pepsin" },
              { id: "c", text: "Lipase" },
              { id: "d", text: "Amylase" },
            ],
            correctChoiceId: "d",
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
          id: "olbio-u3-digestion-q2",
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
          id: "olbio-u3-digestion-q3",
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
          id: "olbio-u3-digestion-q4",
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
          id: "olbio-u3-digestion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Amylase digests which nutrient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein" },
              { id: "b", text: "Lipid" },
              { id: "c", text: "Vitamins" },
              { id: "d", text: "Starch" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Amylase", statement: "Digests starch to maltose." },
            ],
            steps: [
              { reasoning: "Match enzyme to substrate.", working: "\\text{amylase} \\to \\text{starch}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Starch",
            commonErrors: ["Choosing protein — that is protease."],
          },
        },
        {
          id: "olbio-u3-digestion-q6",
          difficulty: "core",
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
              { kind: "property", name: "Bile", statement: "Produced by liver, stored in gall bladder." },
            ],
            steps: [
              { reasoning: "Recall the source.", working: "\\text{liver}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Liver",
            commonErrors: ["Choosing gall bladder — it stores bile but does not produce it."],
          },
        },
        {
          id: "olbio-u3-digestion-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Most absorption of digested food occurs in which part of the alimentary canal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rectum" },
              { id: "b", text: "Stomach" },
              { id: "c", text: "Mouth" },
              { id: "d", text: "Ileum (small intestine)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Absorption site", statement: "Villi in ileum give huge surface area for absorption." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{ileum}", marks: 1, markCode: "M" },
              { reasoning: "Link to villi.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Ileum (small intestine)",
            commonErrors: ["Choosing stomach — digestion occurs there but little absorption."],
          },
        },
        {
          id: "olbio-u3-digestion-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Three amylase enzyme molecules digest 30 starch molecules in one minute. Calculate how many starch molecules each enzyme digests per minute.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate per enzyme", statement: "Molecules per enzyme = total molecules / enzyme molecules." },
            ],
            steps: [
              { reasoning: "Divide substrate by enzyme count.", working: "\\frac{30}{3} = 10", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "10 \\text{ per enzyme}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 molecules per enzyme per minute",
            commonErrors: ["Dividing in the wrong direction."],
          },
        },
        {
          id: "olbio-u3-digestion-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A protease digests 120 protein molecules in 60 seconds. (a) Calculate the rate of digestion in molecules per second. (b) Calculate how many molecules would be digested in 30 seconds at the same rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "molecules s^{-1}" },
              { label: "b", answer: 60, unit: "molecules" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "Rate = molecules / time; total = rate x time." },
            ],
            steps: [
              { reasoning: "Rate = 120 / 60 = 2 per second.", working: "\\frac{120}{60} = 2", marks: 1, markCode: "M" },
              { reasoning: "In 30 s: 2 x 30 = 60 molecules.", working: "2 \\times 30 = 60", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 molecules s$^{-1}$; (b) 60 molecules",
            commonErrors: ["In (b) using the original 120 rather than scaling to 30 s."],
          },
        },
        {
          id: "olbio-u3-digestion-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Five trypsin enzyme molecules digest 50 protein molecules. Calculate how many protein molecules each enzyme digests.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate per enzyme", statement: "Molecules per enzyme = total / enzymes." },
            ],
            steps: [
              { reasoning: "Divide substrate by enzyme count.", working: "\\frac{50}{5} = 10", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "10 \\text{ molecules}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 molecules",
            commonErrors: ["Dividing in the wrong direction."],
          },
        },
        {
          id: "olbio-u3-digestion-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organ produces most digestive enzymes and sodium hydrogencarbonate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liver" },
              { id: "b", text: "Pancreas" },
              { id: "c", text: "Salivary glands" },
              { id: "d", text: "Stomach" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pancreas", statement: "Produces digestive enzymes and NaHCO₃." },
            ],
            steps: [
              { reasoning: "Recall the organ.", working: "\\text{pancreas}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Pancreas",
            commonErrors: ["Choosing liver — that produces bile."],
          },
        },
        {
          id: "olbio-u3-digestion-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define 'absorption' in digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absorption", statement: "Movement of digested food molecules into the blood/lymph, mainly in the ileum." },
            ],
            steps: [
              { reasoning: "Give the core idea.", working: "\\text{into blood/lymph}", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The movement of digested food molecules from the intestine into the blood or lymph, mainly across the villi of the ileum.",
            commonErrors: ["Confusing with digestion — absorption is uptake into the body."],
          },
        },
        {
          id: "olbio-u3-digestion-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how bile aids lipid digestion even though it contains no enzymes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bile", statement: "Emulsifies lipids → small droplets → more surface area for lipase." },
            ],
            steps: [
              { reasoning: "Bile breaks large fat droplets into small droplets.", working: "\\text{emulsify}", marks: 1, markCode: "M" },
              { reasoning: "This increases surface area.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "Lipase can then act faster on more droplets.", working: "\\text{lipase action}", marks: 1, markCode: "M" },
              { reasoning: "Bile is a mechanical aid, not a chemical enzyme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile emulsifies large lipid droplets into many small droplets, greatly increasing surface area so lipase can digest them faster — a mechanical aid to chemical digestion.",
            commonErrors: ["Saying bile 'digests' fat chemically — it only emulsifies."],
          },
        },
        {
          id: "olbio-u3-digestion-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which enzyme, produced by the pancreas, digests proteins in the small intestine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipase" },
              { id: "b", text: "Amylase" },
              { id: "c", text: "Trypsin" },
              { id: "d", text: "Pepsin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Trypsin", statement: "Pancreatic protease digesting protein in the small intestine." },
            ],
            steps: [
              { reasoning: "Match enzyme and source.", working: "\\text{trypsin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Trypsin",
            commonErrors: ["Choosing pepsin — that works in the stomach."],
          },
        },
        {
          id: "olbio-u3-digestion-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the sequence of organs food passes through during digestion.",
          parts: [
            { label: "a", prompt: "List the main regions of the alimentary canal in order.", marks: 2 },
            { label: "b", prompt: "Name one digestive enzyme or process associated with each of the first three regions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Alimentary canal", statement: "Mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus." },
            ],
            steps: [
              { part: "a", reasoning: "List regions in correct order.", working: "\\text{mouth...anus}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Order is correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mouth: salivary amylase/chewing.", working: "\\text{amylase}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stomach: HCl/pepsin.", working: "\\text{pepsin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Small intestine: pancreatic enzymes/bile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mouth → oesophagus → stomach → small intestine → large intestine → rectum → anus (b) amylase; HCl/pepsin; pancreatic enzymes + bile",
            commonErrors: ["Skipping oesophagus or reversing stomach/intestine order."],
          },
        },
        {
          id: "olbio-u3-digestion-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace the digestion and absorption of a lipid molecule from the mouth to the blood.",
          parts: [
            { label: "a", prompt: "Describe what happens to the lipid in the mouth and stomach.", marks: 2 },
            { label: "b", prompt: "Describe the role of bile and lipase in the small intestine.", marks: 3 },
            { label: "c", prompt: "Explain how the products of lipid digestion are absorbed.", marks: 2 },
            { label: "d", prompt: "Compare this with how glucose is absorbed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Lipid digestion", statement: "Emulsified by bile → lipase → fatty acids/glycerol → lacteals → lymph → blood." },
            ],
            steps: [
              { part: "a", reasoning: "Minimal chemical digestion; mechanical breakdown only.", working: "\\text{mechanical}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State no lipid enzyme in mouth/stomach.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bile emulsifies lipid droplets.", working: "\\text{bile}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lipase digests lipids to fatty acids + glycerol.", working: "\\text{lipase}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fatty acids/glycerol enter lacteals (lymph).", working: "\\text{lacteals}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lymph eventually drains into blood.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Glucose diffuses directly into blood capillaries.", working: "\\text{glucose→blood}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Lipids go via lymph — different route.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mechanical breakdown only (b) bile emulsifies, lipase → FA+glycerol (c) absorbed into lacteals → lymph → blood (d) glucose goes straight to blood",
            commonErrors: ["In (c) saying fatty acids enter blood directly — they enter lacteals first."],
          },
        },
      ],
    },
    {
      id: "olbio-u3-bmi",
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
          id: "olbio-u3-bmi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for BMI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass times height" },
              { id: "b", text: "Weight divided by age" },
              { id: "c", text: "Height divided by mass" },
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
          id: "olbio-u3-bmi-q2",
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
          id: "olbio-u3-bmi-q3",
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
          id: "olbio-u3-bmi-q4",
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
          id: "olbio-u3-bmi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "BMI is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Height divided by mass" },
              { id: "b", text: "Mass times height" },
              { id: "c", text: "Weight plus height" },
              { id: "d", text: "Mass divided by height squared" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI formula", statement: "BMI = mass (kg) / height² (m²)." },
            ],
            steps: [
              { reasoning: "Recall the formula.", working: "\\text{kg}/\\text{m}^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mass divided by height squared",
            commonErrors: ["Using height not squared — units must be kg and m²."],
          },
        },
        {
          id: "olbio-u3-bmi-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person with a BMI of 22 is classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overweight" },
              { id: "b", text: "Obese" },
              { id: "c", text: "Healthy" },
              { id: "d", text: "Underweight" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI categories", statement: "18.5–24.9 = healthy." },
            ],
            steps: [
              { reasoning: "Check the category.", working: "22 \\in [18.5, 24.9]", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Healthy",
            commonErrors: ["Choosing overweight — that's 25–29.9."],
          },
        },
        {
          id: "olbio-u3-bmi-q7",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A person with a BMI of 31 falls into which category?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Healthy" },
              { id: "b", text: "Underweight" },
              { id: "c", text: "Overweight" },
              { id: "d", text: "Obese" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI categories", statement: "≥30 = obese." },
            ],
            steps: [
              { reasoning: "Check the category boundary.", working: "31 \\geq 30", marks: 1, markCode: "M" },
              { reasoning: "Select obese.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Obese",
            commonErrors: ["Choosing overweight — that is 25–29.9, just below obese."],
          },
        },
        {
          id: "olbio-u3-bmi-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate the BMI of a person who weighs 50 kg and is 1.6 m tall.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 19.5, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI", statement: "BMI = mass / height²." },
            ],
            steps: [
              { reasoning: "Square the height then divide.", working: "\\frac{50}{1.6^2} = \\frac{50}{2.56}", marks: 1, markCode: "M" },
              { reasoning: "Compute: ≈ 19.5.", working: "\\approx 19.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BMI ≈ 19.5 (underweight)",
            commonErrors: ["Forgetting to square height — 50/1.6 = 31.25 is wrong."],
          },
        },
        {
          id: "olbio-u3-bmi-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the BMI for each person: (a) mass 80 kg, height 1.6 m. (b) mass 60 kg, height 1.5 m.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 31.3, tolerance: 0.1 },
              { label: "b", answer: 26.7, tolerance: 0.1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI", statement: "BMI = mass (kg) / height² (m²)." },
            ],
            steps: [
              { reasoning: "(a) 80 / 1.6² = 80 / 2.56 ≈ 31.3.", working: "\\frac{80}{2.56} \\approx 31.3", marks: 1, markCode: "M" },
              { reasoning: "(b) 60 / 1.5² = 60 / 2.25 ≈ 26.7.", working: "\\frac{60}{2.25} \\approx 26.7", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ≈ 31.3 (obese); (b) ≈ 26.7 (overweight)",
            commonErrors: ["Using cm for height — must convert to metres first."],
          },
        },
        {
          id: "olbio-u3-bmi-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the BMI of a person who weighs 70 kg and is 1.75 m tall.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 22.9, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "BMI", statement: "BMI = mass / height²." },
            ],
            steps: [
              { reasoning: "70 / 1.75² = 70 / 3.0625.", working: "\\frac{70}{3.0625}", marks: 1, markCode: "M" },
              { reasoning: "Compute ≈ 22.9.", working: "\\approx 22.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "BMI ≈ 22.9 (healthy)",
            commonErrors: ["Rounding height before squaring — square the full value."],
          },
        },
        {
          id: "olbio-u3-bmi-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a major limitation of BMI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It does not distinguish muscle mass from fat mass" },
              { id: "b", text: "It measures blood pressure" },
              { id: "c", text: "It is difficult to calculate" },
              { id: "d", text: "It only works for children" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI limitation", statement: "Does not distinguish fat vs muscle; athletes may be 'overweight' but healthy." },
            ],
            steps: [
              { reasoning: "Recall the limitation.", working: "\\text{fat vs muscle}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It does not distinguish muscle mass from fat mass",
            commonErrors: ["Saying BMI is useless — it is a screening tool, not diagnostic."],
          },
        },
        {
          id: "olbio-u3-bmi-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define BMI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "BMI", statement: "Body mass index = mass (kg) / height² (m²); a measure of body fatness." },
            ],
            steps: [
              { reasoning: "Give the formula.", working: "\\text{kg}/\\text{m}^2", marks: 1, markCode: "M" },
              { reasoning: "Complete definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Body mass index — a value calculated as mass in kilograms divided by height in metres squared, used to estimate whether body weight is healthy.",
            commonErrors: ["Forgetting units — kg and m² are required."],
          },
        },
        {
          id: "olbio-u3-bmi-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the relationship between energy balance and body weight.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy balance", statement: "Intake vs expenditure determines weight change." },
            ],
            steps: [
              { reasoning: "Intake > expenditure → excess stored as fat → gain.", working: "\\text{positive balance}", marks: 1, markCode: "M" },
              { reasoning: "Expenditure > intake → stored energy used → loss.", working: "\\text{negative balance}", marks: 1, markCode: "M" },
              { reasoning: "Equal → stable weight.", working: "\\text{balanced}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When energy intake exceeds expenditure the surplus is stored as fat (weight gain); when expenditure exceeds intake stored energy is used (weight loss); balance maintains stable weight.",
            commonErrors: ["Saying 'eating more = more muscle' — excess becomes fat."],
          },
        },
        {
          id: "olbio-u3-bmi-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person who consistently expends more energy than they consume will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Become obese" },
              { id: "b", text: "Stay the same weight" },
              { id: "c", text: "Gain weight" },
              { id: "d", text: "Lose weight" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Energy balance", statement: "Negative balance → weight loss." },
            ],
            steps: [
              { reasoning: "Identify the balance type.", working: "\\text{negative}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Lose weight",
            commonErrors: ["Choosing gain — that's positive balance."],
          },
        },
        {
          id: "olbio-u3-bmi-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student calculates BMIs for four people: 17.2, 21.5, 27.8 and 33.0.",
          parts: [
            { label: "a", prompt: "Classify each BMI into its category.", marks: 3 },
            { label: "b", prompt: "State which person is at the greatest health risk from their BMI alone.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "BMI categories", statement: "<18.5 underweight, 18.5–24.9 healthy, 25–29.9 overweight, ≥30 obese." },
            ],
            steps: [
              { part: "a", reasoning: "17.2 → underweight.", working: "\\text{underweight}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "21.5 → healthy; 27.8 → overweight.", working: "\\text{healthy/overweight}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "33.0 → obese.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Obese BMI (33.0) carries greatest risk.", working: "\\text{obese}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Obesity linked to diabetes/heart disease.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) underweight, healthy, overweight, obese (b) BMI 33.0 (obese) — greatest risk",
            commonErrors: ["Classifying 27.8 as obese — it's overweight (25–29.9)."],
          },
        },
        {
          id: "olbio-u3-bmi-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A patient has a BMI of 32. Evaluate this result as a measure of their health.",
          parts: [
            { label: "a", prompt: "Classify the BMI and state the formula used.", marks: 2 },
            { label: "b", prompt: "Describe two health risks associated with this BMI category.", marks: 2 },
            { label: "c", prompt: "Suggest two lifestyle changes that could reduce the BMI.", marks: 3 },
            { label: "d", prompt: "State two limitations of using BMI to assess this individual's health.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Obesity", statement: "BMI ≥30 = obese → diabetes, heart disease; BMI doesn't measure fat distribution." },
            ],
            steps: [
              { part: "a", reasoning: "BMI = mass/height².", working: "\\text{formula}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "32 ≥ 30 → obese.", working: "\\text{obese}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Risk 1: type 2 diabetes.", working: "\\text{diabetes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk 2: heart disease/hypertension.", working: "\\text{heart disease}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Change 1: reduce energy intake/reduce fat.", working: "\\text{less intake}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Change 2: increase exercise.", working: "\\text{exercise}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State two changes.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Doesn't distinguish muscle vs fat.", working: "\\text{fat vs muscle}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Ignores fat distribution/age/sex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mass/height²; obese (b) diabetes, heart disease (c) less intake, more exercise (d) doesn't distinguish fat/muscle, ignores other factors",
            commonErrors: ["In (d) saying 'BMI is wrong' — it is a screening tool with limitations."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u3-human-nutrition-notes",
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
