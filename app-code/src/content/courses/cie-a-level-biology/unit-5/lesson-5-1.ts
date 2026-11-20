import type { Lesson } from "../../../types.ts";

export const lesson511: Lesson = {
  id: "cial-b-u5-lesson-5-1",
  code: "5-1",
  title: "Human nutrition and digestion",
  goal: "I CAN describe the digestive system, enzyme action and nutrient absorption.",
  standards: ["9700 Unit 13: nutrition"],
  vocabulary: [
    {
      term: "Digestion",
      definition: "Breakdown of food into absorbable molecules.",
    },
    {
      term: "Enzyme",
      definition: "Biological catalyst speeding digestive reactions.",
    },
    { term: "Amylase", definition: "Enzyme breaking starch into maltose." },
    {
      term: "Protease",
      definition: "Enzyme breaking proteins into amino acids.",
    },
    {
      term: "Lipase",
      definition: "Enzyme breaking lipids into fatty acids and glycerol.",
    },
    {
      term: "Villus",
      definition:
        "Finger-like projection in small intestine increasing absorption surface.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u5-digestion",
      title: "Digestive system and enzymes",
      skill: "Describe digestion from mouth to absorption.",
      lesson: {
        sections: [
          {
            heading: "Alimentary canal",
            body: "Mouth (amylase starts starch digestion) → oesophagus (peristalsis) → stomach (HCl + pepsin for protein) → small intestine (main digestion/absorption) → large intestine (water absorption) → rectum.",
          },
          {
            heading: "Enzyme action",
            body: "Amylase (mouth/small intestine): starch→maltose. Proteases (stomach/ileum): protein→amino acids. Lipases (small intestine): lipid→fatty acids+glycerol. Bile (liver→duodenum) emulsifies fats — not an enzyme.",
          },
          {
            heading: "Absorption",
            body: "Small intestine: villi and microvilli massively increase surface area. Amino acids and glucose absorbed into blood capillaries; fatty acids into lacteals (lymph). Water absorbed in large intestine.",
          },
        ],
        keyFormulas: [
          {
            name: "Digestion",
            statement:
              "Mouth→stomach→small intestine→large intestine; enzymes break food down.",
          },
        ],
        workedExample: {
          problem: "Why is bile not an enzyme?",
          solution:
            "Bile emulsifies fats (mechanical breakdown) but doesn't chemically digest them — no catalytic action.",
        },
      },
      questions: [
        {
          id: "cial-b-u5-dg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme breaks down starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amylase" },
              { id: "b", text: "Protease" },
              { id: "c", text: "Lipase" },
              { id: "d", text: "Bile" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amylase",
                statement: "Breaks starch into maltose.",
              },
            ],
            steps: [
              {
                reasoning: "Amylase = starch digestion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Amylase",
            commonErrors: ["Confusing with protease/lipase."],
          },
        },
        {
          id: "cial-b-u5-dg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of bile?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bile",
                statement:
                  "Emulsifies fats — increases surface area for lipase.",
              },
            ],
            steps: [
              {
                reasoning: "Emulsifies fats (mechanical).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Not an enzyme — no catalysis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Emulsifies fats; not an enzyme.",
            commonErrors: ["Calling it an enzyme."],
          },
        },
        {
          id: "cial-b-u5-dg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how villi maximise absorption in the small intestine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Villus",
                statement:
                  "Finger-like projections increasing surface area; thin walls; capillary network.",
              },
            ],
            steps: [
              {
                reasoning: "Villi increase surface area.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Microvilli further increase SA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thin walls → short diffusion distance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rich capillary network for transport.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Villi+microvilli increase SA; thin walls; capillaries transport.",
            commonErrors: ["Describing structure without function."],
          },
        },
        {
          id: "cial-b-u5-dg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Digestion.",
          parts: [
            { label: "a", prompt: "Starch enzyme?", marks: 1 },
            { label: "b", prompt: "Bile function?", marks: 2 },
            {
              label: "c",
              prompt: "How do villi maximise absorption?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Name the alimentary canal organs in order.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digestion",
                statement: "Enzymes+bile+villi+canal order.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Amylase.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Emulsifies fats.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Not an enzyme.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Villi/microvilli increase SA.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Thin walls.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Capillary network.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Mouth→oesophagus→stomach→small intestine→large intestine.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Order correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "All organs named.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) amylase (b) emulsifies (c) SA+thin+capillaries (d) mouth→…→rectum",
          },
        },
        {
          id: "cial-b-u5-dg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which part of the alimentary canal does most chemical digestion and absorption of nutrients occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small intestine" },
              { id: "b", text: "Stomach" },
              { id: "c", text: "Large intestine" },
              { id: "d", text: "Oesophagus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Small intestine", statement: "Main site of digestion and absorption." },
            ],
            steps: [
              { reasoning: "Small intestine is the main site of digestion and absorption.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Small intestine",
            commonErrors: ["Choosing the stomach, which mainly digests protein."],
          },
        },
        {
          id: "cial-b-u5-dg-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about bile is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is produced by the liver and stored in the gall bladder" },
              { id: "b", text: "It is an enzyme that digests starch" },
              { id: "c", text: "It is produced by the pancreas" },
              { id: "d", text: "It chemically breaks down proteins into amino acids" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bile", statement: "Made in liver, stored in gall bladder, emulsifies fats." },
            ],
            steps: [
              { reasoning: "Bile is produced by the liver and stored in the gall bladder.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Produced by the liver, stored in the gall bladder",
            commonErrors: ["Calling bile an enzyme or saying the pancreas makes it."],
          },
        },
        {
          id: "cial-b-u5-dg-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A snack contains 20 g of carbohydrate and 10 g of lipid. Using 4 kcal g$^{-1}$ for carbohydrate and 9 kcal g$^{-1}$ for lipid, calculate the energy it provides in kcal.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 170 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy values", statement: "Carbohydrate 4 kcal/g, lipid 9 kcal/g." },
            ],
            steps: [
              { reasoning: "$20 \\times 4 = 80$ kcal from carbohydrate; $10 \\times 9 = 90$ kcal from lipid.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 80 + 90 = 170$ kcal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "170 kcal",
            commonErrors: ["Adding masses before multiplying by energy values."],
          },
        },
        {
          id: "cial-b-u5-dg-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How much energy, in kcal, is provided by 15 g of protein? (Energy value of protein = 4 kcal g$^{-1}$.)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy values", statement: "Protein provides 4 kcal per gram." },
            ],
            steps: [
              { reasoning: "$15 \\times 4 = 60$ kcal.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "60 kcal",
            commonErrors: ["Using 9 kcal/g (the lipid value)."],
          },
        },
        {
          id: "cial-b-u5-dg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the role of peristalsis in the alimentary canal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peristalsis", statement: "Wave-like muscular contractions moving food along the canal." },
            ],
            steps: [
              { reasoning: "Wave-like contractions of circular and longitudinal muscles.", marks: 1, markCode: "M" },
              { reasoning: "Propels food/bolus along the canal in one direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Peristalsis is wave-like muscular contraction that propels food along the alimentary canal.",
            commonErrors: ["Describing chewing or swallowing instead of peristalsis."],
          },
        },
        {
          id: "cial-b-u5-dg-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how bile aids the digestion of lipids.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bile", statement: "Emulsifies fats to increase surface area for lipase." },
            ],
            steps: [
              { reasoning: "Bile emulsifies large fat droplets into smaller ones.", marks: 1, markCode: "M" },
              { reasoning: "This greatly increases the surface area for lipase action.", marks: 1, markCode: "M" },
              { reasoning: "Faster lipid digestion into fatty acids and glycerol results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile emulsifies fats → larger surface area → faster lipase digestion.",
            commonErrors: ["Saying bile digests fat chemically or is an enzyme."],
          },
        },
        {
          id: "cial-b-u5-dg-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which process occurs mainly in the large intestine rather than the small intestine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorption of most of the remaining water" },
              { id: "b", text: "Digestion of starch by amylase" },
              { id: "c", text: "Absorption of amino acids into blood capillaries" },
              { id: "d", text: "Emulsification of lipids by bile" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Large intestine", statement: "Mainly absorbs water; little digestion." },
            ],
            steps: [
              { reasoning: "Water absorption is the main role of the large intestine.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Absorption of most of the remaining water",
            commonErrors: ["Confusing water absorption with nutrient absorption in the small intestine."],
          },
        },
        {
          id: "cial-b-u5-dg-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Trace the digestion of starch from the mouth to its absorption into the blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Starch digestion", statement: "Amylase in mouth and small intestine; maltase completes breakdown." },
            ],
            steps: [
              { reasoning: "Salivary amylase in the mouth starts starch digestion to maltose.", marks: 1, markCode: "M" },
              { reasoning: "Food passes via peristalsis through the oesophagus and stomach.", marks: 1, markCode: "M" },
              { reasoning: "In the small intestine, amylase and maltase complete breakdown to glucose.", marks: 1, markCode: "M" },
              { reasoning: "Glucose is absorbed into blood capillaries of the villi.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amylase (mouth) → peristalsis → small intestine enzymes → glucose → blood capillaries.",
            commonErrors: ["Saying starch is digested in the stomach or absorbed as starch."],
          },
        },
        {
          id: "cial-b-u5-dg-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "100 g of carbohydrate provides the same energy as approximately how many grams of lipid? (Carbohydrate = 4 kcal g$^{-1}$; lipid = 9 kcal g$^{-1}$.)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 44.4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy values", statement: "Carbohydrate 4 kcal/g, lipid 9 kcal/g." },
            ],
            steps: [
              { reasoning: "$100 \\times 4 = 400$ kcal; $400 \\div 9 = 44.4$ g lipid.", marks: 1, markCode: "M" },
              { reasoning: "Correct mass calculated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "44.4 g",
            commonErrors: ["Multiplying by 9 instead of dividing."],
          },
        },
        {
          id: "cial-b-u5-dg-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fatty acids are absorbed into lacteals while amino acids enter blood capillaries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absorption", statement: "Amino acids/glucose → blood; lipids → lymph lacteals." },
            ],
            steps: [
              { reasoning: "Lipids are broken down to fatty acids and glycerol which are re-formed into lipids.", marks: 1, markCode: "M" },
              { reasoning: "These are insoluble in water and enter lacteals (lymph vessels).", marks: 1, markCode: "M" },
              { reasoning: "Amino acids are soluble and diffuse into blood capillaries.", marks: 1, markCode: "M" },
              { reasoning: "Route linked to solubility of the products.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fatty acids (insoluble) → lacteals/lymph; amino acids (soluble) → blood capillaries.",
            commonErrors: ["Saying all nutrients enter blood capillaries."],
          },
        },
        {
          id: "cial-b-u5-dg-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A patient has a blocked bile duct so bile cannot reach the small intestine. Explain the likely effects on lipid digestion and the symptoms that might result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bile", statement: "Emulsifies fats; without it lipid digestion is impaired." },
            ],
            steps: [
              { reasoning: "No bile → no emulsification of lipid droplets.", marks: 1, markCode: "M" },
              { reasoning: "Surface area for lipase action is greatly reduced.", marks: 1, markCode: "M" },
              { reasoning: "Lipid digestion is slow or incomplete.", marks: 1, markCode: "M" },
              { reasoning: "Undigested fat is not absorbed — steatorrhoea (fatty stools).", marks: 1, markCode: "M" },
              { reasoning: "Fat-soluble vitamins may also be malabsorbed.", marks: 1, markCode: "M" },
              { reasoning: "Overall nutritional deficiency / weight loss may occur.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No bile → poor emulsification → slow lipid digestion → fatty stools and malnutrition.",
            commonErrors: ["Saying digestion stops completely for all nutrients."],
          },
        },
        {
          id: "cial-b-u5-dg-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Digestion.",
          parts: [
            { label: "a", prompt: "Name the enzyme that digests protein in the stomach.", marks: 1 },
            { label: "b", prompt: "Where is this enzyme produced and where does it act?", marks: 2 },
            { label: "c", prompt: "What are the end products of protein digestion?", marks: 1 },
            { label: "d", prompt: "How are these products absorbed?", marks: 1 },
            { label: "e", prompt: "Explain how the structure of a villus is adapted for absorption.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Protein digestion", statement: "Pepsin + villus structure." },
            ],
            steps: [
              { part: "a", reasoning: "Pepsin (a protease).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Produced by gastric glands/stomach lining.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Acts in the stomach (acidic conditions).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Amino acids (via peptides).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Diffusion/active transport into blood capillaries of villi.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Large surface area (villi + microvilli).", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Thin wall → short diffusion distance.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Rich blood capillary network for transport.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Continuous renewal of epithelium / lacteal for lipids.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pepsin (b) stomach glands→stomach (c) amino acids (d) blood capillaries (e) SA+thin wall+capillaries",
          },
        },
      ],
    },
    {
      id: "cial-b-u5-nutrition-types",
      title: "Nutrients and balanced diet",
      skill: "Describe the major nutrient classes and their functions.",
      lesson: {
        sections: [
          {
            heading: "Macronutrients",
            body: "Carbohydrates: energy (4 kcal/g). Proteins: growth and repair (4 kcal/g). Lipids: energy store, insulation (9 kcal/g). Fibre: aids digestion (indigestible).",
          },
          {
            heading: "Micronutrients",
            body: "Vitamins: C (collagen/immune), D (calcium absorption), B12 (red blood cells). Minerals: iron (haemoglobin), calcium (bones), iodine (thyroid). Needed in small amounts but essential.",
          },
          {
            heading: "Balanced diet and deficiency",
            body: "Balanced diet provides all nutrients in correct proportions. Deficiency diseases: scurvy (vit C), rickets (vit D/calcium), anaemia (iron), goitre (iodine). Excess: obesity, cardiovascular disease.",
          },
        ],
        keyFormulas: [
          {
            name: "Nutrients",
            statement:
              "Carbs+protein+lipid=macros; vitamins+minerals=micros; deficiency=disease.",
          },
        ],
        workedExample: {
          problem: "Why does iron deficiency cause anaemia?",
          solution:
            "Iron needed for haemoglobin — without it, RBCs can't carry enough oxygen.",
        },
      },
      questions: [
        {
          id: "cial-b-u5-nt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient provides the most energy per gram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipid" },
              { id: "b", text: "Carbohydrate" },
              { id: "c", text: "Protein" },
              { id: "d", text: "Vitamin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy values",
                statement: "Lipid 9, carbs/protein 4 kcal/g.",
              },
            ],
            steps: [
              { reasoning: "Lipid = 9 kcal/g.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lipid",
            commonErrors: ["Thinking carbs provide most energy."],
          },
        },
        {
          id: "cial-b-u5-nt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of vitamin C?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vitamin C",
                statement: "Needed for collagen synthesis and immune function.",
              },
            ],
            steps: [
              { reasoning: "Collagen synthesis.", marks: 1, markCode: "M" },
              { reasoning: "Immune support.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Collagen synthesis and immune function.",
            commonErrors: ["Saying it's for energy."],
          },
        },
        {
          id: "cial-b-u5-nt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why iron deficiency causes anaemia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iron/haemoglobin",
                statement:
                  "Iron needed for haemoglobin; deficiency → less O₂ transport.",
              },
            ],
            steps: [
              {
                reasoning: "Iron component of haemoglobin.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Haemoglobin carries O₂.", marks: 1, markCode: "M" },
              {
                reasoning: "Deficiency → less haemoglobin → anaemia.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear chain.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Iron→haemoglobin→O₂ transport; deficiency reduces all.",
            commonErrors: ["Saying iron gives energy."],
          },
        },
        {
          id: "cial-b-u5-nt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nutrients.",
          parts: [
            { label: "a", prompt: "Most energy-dense nutrient?", marks: 1 },
            { label: "b", prompt: "Vitamin C function?", marks: 2 },
            { label: "c", prompt: "Why iron deficiency→anaemia?", marks: 3 },
            {
              label: "d",
              prompt: "Name two deficiency diseases and causes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nutrients",
                statement: "Energy+vitamins+deficiency+diseases.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Lipid.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Collagen synthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Immune function.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Iron in haemoglobin.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Less O₂ transport.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Anaemia results.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Any two of scurvy/rickets/anaemia/goitre.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Causes linked.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) lipid (b) collagen+immune (c) Fe→Hb→O₂ (d) scurvy/rickets etc.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u5-nutrition-notes",
      title: "Nutrition — revision notes",
      summary: "Digestion, enzymes, nutrients and deficiency diseases.",
      sections: [
        {
          heading: "Digestion",
          body: "Alimentary canal: mouth→stomach→small intestine→large intestine. Enzymes: amylase, protease, lipase. Bile emulsifies (not enzyme). Villi maximise absorption.",
        },
        {
          heading: "Nutrients",
          body: "Macros: carbs (4), protein (4), lipid (9 kcal/g). Micros: vit C, D, B12; minerals Fe, Ca, I. Deficiency: scurvy, rickets, anaemia, goitre.",
        },
        {
          heading: "Exam checklist",
          body: "Can you trace food through canal? Name enzymes and substrates? Explain villi? Link deficiency to disease?",
        },
      ],
    },
  ],
};
