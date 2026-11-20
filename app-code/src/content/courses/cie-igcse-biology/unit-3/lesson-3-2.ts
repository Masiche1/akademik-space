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
              { id: "b", text: "Vitamins" },
              { id: "c", text: "Minerals" },
              { id: "d", text: "Water" },
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
              { id: "a", text: "Amylase" },
              { id: "b", text: "Pepsin" },
              { id: "c", text: "Lipase" },
              { id: "d", text: "Trypsin" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Mass divided by height squared" },
              { id: "b", text: "Height divided by mass" },
              { id: "c", text: "Mass times height" },
              { id: "d", text: "Weight divided by age" },
            ],
            correctChoiceId: "a",
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
