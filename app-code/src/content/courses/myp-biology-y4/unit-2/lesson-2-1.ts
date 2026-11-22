import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mypb4-u2-lesson-2-1",
  code: "2-1",
  title: "Digestive and Circulatory Systems",
  goal: "I CAN describe how the digestive system breaks down food and absorbs nutrients, and how the circulatory system transports substances around the body.",
  standards: [
    "MYP Sciences: Living things",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Alimentary canal", definition: "The continuous tube from mouth to anus through which food passes." },
    { term: "Villi", definition: "Finger-like projections in the small intestine wall that increase surface area for absorption." },
    { term: "Artery", definition: "Blood vessel carrying blood away from the heart; thick muscular walls." },
    { term: "Vein", definition: "Blood vessel carrying blood towards the heart; thin walls with valves." },
    { term: "Capillary", definition: "Tiny vessel where exchange of gases, nutrients and wastes occurs with cells." },
    { term: "Double circulation", definition: "Pulmonary circuit (heart-lungs-heart) and systemic circuit (heart-body-heart)." },
  ],
  concepts: [
    {
      id: "mypb4-u2-digestion",
      title: "Digestion and absorption",
      skill: "Trace food through the alimentary canal and explain mechanical and chemical digestion.",
      lesson: {
        sections: [
          {
            heading: "The alimentary canal",
            body: "**Mouth**: chewing (mechanical) + salivary amylase (chemical). **Oesophagus**: peristalsis moves food to stomach. **Stomach**: HCl kills bacteria, pepsin digests protein, churning mixes. **Small intestine**: bile emulsifies fats, pancreatic enzymes + intestinal enzymes complete digestion → absorption via villi. **Large intestine**: absorbs water, forms faeces → anus.",
          },
          {
            heading: "Enzymes in digestion",
            body: "Amylase (saliva/pancreas): starch → maltose. Protease (pepsin/trypsin): protein → amino acids. Lipase: fats → fatty acids + glycerol. Bile (liver) emulsifies fats — not an enzyme but increases surface area for lipase.",
          },
          {
            heading: "Absorption",
            body: "Villi in small intestine have huge surface area with blood capillaries and lacteals. Glucose/amino acids → blood; fatty acids/glycerol → lacteals (lymph). Villi move to increase contact.",
          },
        ],
        keyFormulas: [
          { name: "Amylase", statement: "Starch → maltose (saliva/pancreas)" },
          { name: "Protease", statement: "Protein → amino acids" },
          { name: "Lipase", statement: "Fat → fatty acids + glycerol" },
        ],
        workedExample: {
          problem: "Why does the small intestine have villi?",
          solution: "Villi massively increase surface area for absorbing digested food into blood/lymph.",
        },
      },
      questions: [
        {
          id: "mypb4-u2-dig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does most absorption of digested food occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Large intestine" },
              { id: "c", text: "Small intestine" },
              { id: "d", text: "Mouth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absorption", statement: "Small intestine villi absorb most nutrients." },
            ],
            steps: [
              { reasoning: "Small intestine is the main site of absorption via villi.", working: "\\text{small intestine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Small intestine",
            commonErrors: ["Thinking stomach absorbs nutrients."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-dig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of bile in digestion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutralises all stomach acid" },
              { id: "b", text: "Kills bacteria in mouth" },
              { id: "c", text: "Digests protein" },
              { id: "d", text: "Emulsifies fats, increasing surface area for lipase" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bile", statement: "Not an enzyme — emulsifies fats for efficient lipase action." },
            ],
            steps: [
              { reasoning: "Bile breaks large fat droplets into small droplets.", working: "\\text{emulsification}", marks: 1, markCode: "M" },
              { reasoning: "Increases surface area → faster lipase action.", working: "\\text{surface area}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Emulsifies fats",
            commonErrors: ["Calling bile an enzyme."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the journey of a starch molecule from mouth to absorption.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absorbed in stomach" },
              { id: "b", text: "Digested entirely in mouth" },
              { id: "c", text: "Converted to protein in intestine" },
              { id: "d", text: "Mouth: amylase → maltose; stomach: no starch digestion; small intestine: maltase → glucose → absorbed by villi" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Digestion pathway", statement: "Amylase in mouth, maltase in intestine, absorption via villi." },
            ],
            steps: [
              { reasoning: "Salivary amylase starts starch → maltose in mouth.", working: "\\text{amylase}", marks: 1, markCode: "M" },
              { reasoning: "Pancreatic amylase continues in small intestine; maltase → glucose.", working: "\\text{maltase}", marks: 1, markCode: "M" },
              { reasoning: "Glucose absorbed through villi into blood.", working: "\\text{villi}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mouth → small intestine → villi absorption",
            commonErrors: ["Saying digestion stops in stomach — starch digestion resumes in intestine."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the structure and function of the small intestine.",
          parts: [
            { label: "a", prompt: "Name the three regions of the small intestine.", marks: 1 },
            { label: "b", prompt: "Explain how villi increase absorption.", marks: 3 },
            { label: "c", prompt: "Describe the movement of food through the small intestine.", marks: 2 },
            { label: "d", prompt: "Explain what happens to undigested material after the small intestine.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Small intestine", statement: "Adapted for digestion completion and maximum absorption." },
            ],
            steps: [
              { part: "a", reasoning: "Duodenum, jejunum, ileum.", working: "\\text{duodenum,jejunum,ileum}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Villi massively increase surface area.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each villus has capillaries and lacteal close to surface → short diffusion distance.", working: "\\text{capillaries}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Villi move to maintain contact with food.", working: "\\text{movement}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Peristalsis and segmentation mix and propel contents.", working: "\\text{peristalsis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Digestion completes here.", working: "\\text{digestion}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Passes to large intestine → water absorbed → faeces formed → rectum → anus.", working: "\\text{large intestine}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Describe process.", working: "\\text{faeces}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) duodenum, jejunum, ileum (b) villi increase surface area (c) peristalsis (d) large intestine absorbs water → faeces",
            commonErrors: ["In (b), forgetting lacteals absorb fats."],
            examinerNote: "A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-dig-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme digests protein in the stomach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maltase" },
              { id: "b", text: "Amylase" },
              { id: "c", text: "Pepsin" },
              { id: "d", text: "Lipase" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Digestive enzymes", statement: "Pepsin (stomach) digests protein; amylase starch; lipase fats; maltase maltose." },
            ],
            steps: [
              { reasoning: "Pepsin is the gastric protease.", working: "\\text{pepsin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Pepsin",
            commonErrors: ["Confusing amylase (starch) with protease."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypb4-u2-dig-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main structural advantage of villi in the small intestine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They kill bacteria" },
              { id: "b", text: "They massively increase surface area for absorption" },
              { id: "c", text: "They store digestive enzymes" },
              { id: "d", text: "They produce bile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Villi", statement: "Finger-like projections with capillaries/lacteals — huge surface area + short diffusion distance." },
            ],
            steps: [
              { reasoning: "Villi fold the wall into projections → surface area multiplied.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "State the advantage.", working: "\\text{absorption}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Increase surface area for absorption",
            commonErrors: ["Saying villi digest food — they absorb it."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Trace a protein meal from stomach to absorption into the blood.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protein becomes glucose in the intestine" },
              { id: "b", text: "Stomach: pepsin → polypeptides; small intestine: proteases → amino acids; villi absorb amino acids into blood capillaries" },
              { id: "c", text: "Protein passes undigested to the large intestine" },
              { id: "d", text: "Protein is absorbed whole in the stomach" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Protein digestion", statement: "Pepsin + proteases break protein → amino acids → absorbed via villi into blood." },
            ],
            steps: [
              { reasoning: "Pepsin in stomach begins protein breakdown.", working: "\\text{pepsin}", marks: 1, markCode: "M" },
              { reasoning: "Pancreatic/intestinal proteases complete digestion → amino acids.", working: "\\text{amino acids}", marks: 1, markCode: "M" },
              { reasoning: "Amino acids absorbed through villi into capillaries.", working: "\\text{villi}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pepsin → proteases → amino acids → villi → blood",
            commonErrors: ["Saying proteins absorb in the stomach."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many regions does the small intestine have? (b) How many main digestive enzyme types are named in the alimentary canal (amylase, protease, lipase)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Small intestine", statement: "Duodenum, jejunum, ileum = 3 regions; amylase, protease, lipase = 3 enzyme types." },
            ],
            steps: [
              { reasoning: "Duodenum, jejunum, ileum = 3.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Amylase, protease, lipase = 3.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 3, b) 3",
            commonErrors: ["Counting bile as an enzyme."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 100 g food sample contains 40% starch, 30% protein and 30% fat by mass. (a) How many grams of starch does it contain? (b) How many grams of protein? (c) How many grams of fat?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 30 },
              { label: "c", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage composition", statement: "Mass of component = percentage / 100 x total mass." },
            ],
            steps: [
              { reasoning: "Starch $= 0.40 \\times 100 = 40$ g.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "Protein $= 0.30 \\times 100 = 30$ g.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "Fat $= 0.30 \\times 100 = 30$ g.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 40 g, b) 30 g, c) 30 g",
            commonErrors: ["Forgetting to divide percentage by 100."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Villi increase the absorptive surface area of the small intestine by a factor of about 10 compared with a smooth tube of the same length. The smooth surface area would be $0.05\\ \\text{m}^2$. (a) What is the villi surface area? (b) If each square metre absorbs nutrients at 2 mg per minute, how much is absorbed per minute? (c) How much per hour? (d) What is the absorptive rate per square metre per hour?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.5 },
              { label: "b", answer: 1 },
              { label: "c", answer: 60 },
              { label: "d", answer: 120 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surface area scaling", statement: "Villi area = smooth area x 10; rate = area x rate per area." },
            ],
            steps: [
              { reasoning: "Area $= 0.05 \\times 10 = 0.5\\ \\text{m}^2$.", working: "0.5", marks: 1, markCode: "M" },
              { reasoning: "Per minute $= 0.5 \\times 2 = 1$ mg.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Per hour $= 1 \\times 60 = 60$ mg.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Rate per m² per hour $= 2 \\times 60 = 120$ mg.", working: "120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 0.5 m², b) 1 mg/min, c) 60 mg/h, d) 120 mg/m²/h",
            commonErrors: ["In (d), multiplying by total area again."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Amylase breaks down starch into maltose. How many product molecules are named in this reaction?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amylase action", statement: "Starch → maltose (one named product)." },
            ],
            steps: [
              { reasoning: "Maltose is the single product named.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1 (maltose)",
            commonErrors: ["Counting water or energy as products."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u2-dig-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The small intestine is about 6 m long and the large intestine about 1.5 m long. (a) What is the ratio of small to large intestine length? (b) What is the difference in length?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ratio and difference", statement: "Ratio = larger/smaller; difference = larger - smaller." },
            ],
            steps: [
              { reasoning: "Ratio $= 6 / 1.5 = 4$.", working: "6/1.5=4", marks: 1, markCode: "M" },
              { reasoning: "Difference $= 6 - 1.5 = 4.5$ m.", working: "4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 4, b) 4.5 m",
            commonErrors: ["Giving 2.5 for the ratio (subtracting instead)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A meal contains 50 g of glucose. 90% of it is absorbed in the small intestine. (a) How many grams are absorbed? (b) How many grams pass to the large intestine? (c) What percentage of the glucose is NOT absorbed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 45 },
              { label: "b", answer: 5 },
              { label: "c", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absorption percentage", statement: "Absorbed = %/100 x total; remainder = total - absorbed." },
            ],
            steps: [
              { reasoning: "Absorbed $= 0.90 \\times 50 = 45$ g.", working: "45", marks: 1, markCode: "M" },
              { reasoning: "Unabsorbed $= 50 - 45 = 5$ g.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Not absorbed $= 100 - 90 = 10\\%$.", working: "10\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 45 g, b) 5 g, c) 10%",
            commonErrors: ["In (c), answering 90% — that is absorbed, not unabsorbed."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-dig-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Define the following digestive terms.",
          parts: [
            { label: "a", prompt: "Villi", marks: 1 },
            { label: "b", prompt: "Peristalsis", marks: 1 },
            { label: "c", prompt: "Bile", marks: 1 },
            { label: "d", prompt: "Mechanical digestion", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Digestion terms", statement: "Villi=absorption projections; peristalsis=muscle propulsion; bile=emulsifier; mechanical=physical breakdown." },
            ],
            steps: [
              { part: "a", reasoning: "Finger-like projections in small intestine increasing surface area.", working: "\\text{villi}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rhythmic muscle contractions moving food along canal.", working: "\\text{contractions}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Liver secretion emulsifying fats (not an enzyme).", working: "\\text{emulsify}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Physical breakdown of food — chewing and churning.", working: "\\text{physical}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Villi=absorption folds; peristalsis=muscle waves; bile=fat emulsifier; mechanical=physical breakdown",
            commonErrors: ["Calling bile an enzyme."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-dig-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Explain the digestion and absorption of a fatty meal.",
          parts: [
            { label: "a", prompt: "What happens to fats in the small intestine?", marks: 2 },
            { label: "b", prompt: "What does lipase produce?", marks: 2 },
            { label: "c", prompt: "Where are the products absorbed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fat digestion", statement: "Bile emulsifies → lipase → fatty acids + glycerol → absorbed into lacteals." },
            ],
            steps: [
              { part: "a", reasoning: "Bile emulsifies large fat droplets into small droplets.", working: "\\text{emulsify}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Increases surface area for lipase action.", working: "\\text{surface area}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lipase breaks fats into fatty acids and glycerol.", working: "\\text{FA+glycerol}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the products.", working: "\\text{products}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fatty acids/glycerol absorbed into lacteals (lymph), not blood capillaries.", working: "\\text{lacteals}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Contrast with glucose/amino acids → blood.", working: "\\text{lymph}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) bile emulsifies (b) fatty acids+glycerol (c) lacteals/lymph",
            commonErrors: ["Saying fats enter blood capillaries directly."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-dig-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is bile described as important for fat digestion even though it is not an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It digests fats directly into glycerol" },
              { id: "b", text: "It emulsifies fats into small droplets, greatly increasing surface area for lipase to act on" },
              { id: "c", text: "It neutralises all stomach acid permanently" },
              { id: "d", text: "It absorbs fatty acids into blood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bile function", statement: "Emulsification — physical breakdown increasing surface area for enzymatic digestion." },
            ],
            steps: [
              { reasoning: "Bile breaks large fat droplets into small droplets.", working: "\\text{emulsify}", marks: 1, markCode: "M" },
              { reasoning: "Larger surface area → lipase works faster.", working: "\\text{surface area}", marks: 1, markCode: "M" },
              { reasoning: "State the role.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Emulsifies fats for lipase",
            commonErrors: ["Calling bile an enzyme or saying it digests fat chemically."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypb4-u2-circulation",
      title: "The Circulatory System",
      skill: "Describe the structure of the heart and blood vessels, and explain double circulation.",
      lesson: {
        sections: [
          {
            heading: "The heart",
            body: "Four chambers: right atrium, right ventricle, left atrium, left ventricle. Valves prevent backflow. **Cardiac muscle** contracts rhythmically without fatigue. Left ventricle wall thicker — pumps blood to whole body. **Coronary arteries** supply heart muscle with oxygenated blood.",
          },
          {
            heading: "Blood vessels",
            body: "**Arteries**: thick muscular walls, carry blood away from heart (high pressure); pulmonary artery carries deoxygenated blood (exception). **Veins**: thin walls, valves prevent backflow, carry blood to heart. **Capillaries**: one-cell-thick walls for exchange — gases, nutrients, wastes diffuse between blood and cells.",
          },
          {
            heading: "Double circulation",
            body: "**Pulmonary circuit**: right ventricle → pulmonary artery → lungs (gas exchange) → pulmonary vein → left atrium. **Systemic circuit**: left ventricle → aorta → body tissues → vena cava → right atrium. Separation prevents mixing of oxygenated/deoxygenated blood.",
          },
        ],
        keyFormulas: [
          { name: "Heart", statement: "4 chambers; left ventricle thickest" },
          { name: "Vessels", statement: "Artery away, vein to heart, capillary exchange" },
          { name: "Double circulation", statement: "Pulmonary + systemic circuits" },
        ],
        workedExample: {
          problem: "Why is the left ventricle wall thicker than the right?",
          solution: "Left ventricle pumps blood to entire body (systemic) needing higher pressure than right ventricle pumping only to lungs.",
        },
      },
      questions: [
        {
          id: "mypb4-u2-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber has the thickest wall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Left atrium" },
              { id: "b", text: "Left ventricle" },
              { id: "c", text: "Right ventricle" },
              { id: "d", text: "Right atrium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heart structure", statement: "Left ventricle thickest — pumps blood to whole body." },
            ],
            steps: [
              { reasoning: "Left ventricle must generate high pressure for systemic circulation.", working: "\\text{left ventricle}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Left ventricle",
            commonErrors: ["Choosing right ventricle."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypb4-u2-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does exchange of gases and nutrients between blood and body cells occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Veins" },
              { id: "b", text: "Capillaries" },
              { id: "c", text: "Heart chambers" },
              { id: "d", text: "Arteries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capillaries", statement: "One-cell walls allow diffusion of substances to/from cells." },
            ],
            steps: [
              { reasoning: "Capillary walls are one cell thick → efficient exchange.", working: "\\text{capillaries}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{exchange}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capillaries",
            commonErrors: ["Choosing arteries — too thick-walled for exchange."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Trace the path of blood from the right ventricle to the left atrium.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vena cava → right atrium → right ventricle" },
              { id: "b", text: "Aorta → body → vena cava → left atrium" },
              { id: "c", text: "Pulmonary vein → lungs → pulmonary artery" },
              { id: "d", text: "Pulmonary artery → lungs → pulmonary vein → left atrium" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pulmonary circuit", statement: "Right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium." },
            ],
            steps: [
              { reasoning: "Right ventricle pumps to lungs via pulmonary artery.", working: "\\text{pulmonary artery}", marks: 1, markCode: "M" },
              { reasoning: "Gas exchange in lungs; oxygenated blood returns via pulmonary vein.", working: "\\text{pulmonary vein}", marks: 1, markCode: "M" },
              { reasoning: "Enters left atrium.", working: "\\text{left atrium}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pulmonary artery → lungs → pulmonary vein → left atrium",
            commonErrors: ["Forgetting pulmonary vein carries oxygenated blood TO heart."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain the structure and function of blood vessels.",
          parts: [
            { label: "a", prompt: "Compare artery and vein wall structure.", marks: 2 },
            { label: "b", prompt: "Explain why capillaries are adapted for exchange.", marks: 2 },
            { label: "c", prompt: "Describe double circulation.", marks: 2 },
            { label: "d", prompt: "Explain why veins need valves but arteries don't.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Circulation", statement: "Vessel structure matches pressure and function." },
            ],
            steps: [
              { part: "a", reasoning: "Arteries: thick muscular/elastic walls for high pressure; veins: thin walls, larger lumen.", working: "\\text{wall thickness}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Explain difference.", working: "\\text{pressure}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Capillary walls one cell thick → short diffusion distance.", working: "\\text{thin walls}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Huge total surface area → efficient exchange.", working: "\\text{surface area}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pulmonary circuit (heart-lungs) + systemic circuit (heart-body).", working: "\\text{two circuits}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain separation of oxygenated/deoxygenated blood.", working: "\\text{no mixing}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Veins carry blood against gravity at low pressure → valves prevent backflow.", working: "\\text{valves}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Arteries have high pressure → blood flows forward without valves.", working: "\\text{high pressure}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) arteries thick, veins thin (b) thin walls + large area (c) pulmonary + systemic (d) veins low pressure need valves",
            commonErrors: ["In (d), saying arteries have valves too."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypb4-u2-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood vessel carries blood AWAY from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capillary" },
              { id: "b", text: "Artery" },
              { id: "c", text: "Lacteal" },
              { id: "d", text: "Vein" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blood vessels", statement: "Arteries carry blood away from heart; veins toward heart; capillaries exchange." },
            ],
            steps: [
              { reasoning: "Arteries = away from heart.", working: "\\text{artery}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Artery",
            commonErrors: ["Confusing with veins."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypb4-u2-circ-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the wall of the left ventricle thicker than the right ventricle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is larger to store blood" },
              { id: "b", text: "It must generate higher pressure to pump blood to the whole body" },
              { id: "c", text: "It contains more valves" },
              { id: "d", text: "It pumps more blood volume" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ventricle wall thickness", statement: "Left pumps to entire body (systemic) needing high pressure; right pumps only to lungs." },
            ],
            steps: [
              { reasoning: "Systemic circuit needs higher pressure than pulmonary.", working: "\\text{pressure}", marks: 1, markCode: "M" },
              { reasoning: "Thicker muscle wall generates that pressure.", working: "\\text{thick wall}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher pressure needed for systemic circulation",
            commonErrors: ["Saying right ventricle pumps more blood."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q7",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Trace the path of blood from the vena cava to the aorta.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vena cava → left atrium → left ventricle → aorta" },
              { id: "b", text: "Aorta → lungs → pulmonary vein → heart" },
              { id: "c", text: "Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta" },
              { id: "d", text: "Vena cava → right atrium → aorta" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Double circulation", statement: "Systemic return → right heart → pulmonary circuit → left heart → systemic outflow." },
            ],
            steps: [
              { reasoning: "Vena cava → right atrium → right ventricle.", working: "\\text{right side}", marks: 1, markCode: "M" },
              { reasoning: "Pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle.", working: "\\text{pulmonary}", marks: 1, markCode: "M" },
              { reasoning: "Left ventricle → aorta.", working: "\\text{aorta}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vena cava → RA → RV → pulmonary artery → lungs → pulmonary vein → LA → LV → aorta",
            commonErrors: ["Skipping the pulmonary circuit."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "(a) How many chambers does the human heart have? (b) How many separate circuits make up double circulation?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart structure", statement: "4 chambers (2 atria, 2 ventricles); pulmonary + systemic circuits." },
            ],
            steps: [
              { reasoning: "Right/left atrium + right/left ventricle = 4.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Pulmonary + systemic = 2 circuits.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 4, b) 2",
            commonErrors: ["Counting 2 chambers by forgetting atria."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A heart beats at 70 beats per minute. (a) How many beats per hour? (b) How many beats per day (24 h)? (c) How many beats per year (365 days)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4200 },
              { label: "b", answer: 100800 },
              { label: "c", answer: 36792000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate calculations", statement: "Per hour = rate x 60; per day = per hour x 24; per year = per day x 365." },
            ],
            steps: [
              { reasoning: "Per hour $= 70 \\times 60 = 4200$.", working: "4200", marks: 1, markCode: "M" },
              { reasoning: "Per day $= 4200 \\times 24 = 100800$.", working: "100800", marks: 1, markCode: "M" },
              { reasoning: "Per year $= 100800 \\times 365 = 36792000$.", working: "36792000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 4200, b) 100800, c) 36792000",
            commonErrors: ["Forgetting to multiply by 60 for hourly rate."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The heart pumps 5 litres of blood per minute at 70 beats per minute. (a) What is the stroke volume in mL? (b) How much blood is pumped per hour? (c) How much per day? (d) How many beats occur per hour?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 71.4286 },
              { label: "b", answer: 300 },
              { label: "c", answer: 7200 },
              { label: "d", answer: 4200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cardiac output", statement: "Cardiac output = stroke volume x heart rate; per hour = output x 60." },
            ],
            steps: [
              { reasoning: "Stroke volume $= 5000 / 70 \\approx 71.4$ mL.", working: "71.4", marks: 1, markCode: "M" },
              { reasoning: "Per hour $= 5 \\times 60 = 300$ L.", working: "300", marks: 1, markCode: "M" },
              { reasoning: "Per day $= 300 \\times 24 = 7200$ L.", working: "7200", marks: 1, markCode: "M" },
              { reasoning: "Beats per hour $= 70 \\times 60 = 4200$.", working: "4200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) ~71.4 mL, b) 300 L, c) 7200 L, d) 4200",
            commonErrors: ["Forgetting 5 L = 5000 mL conversion in (a)."],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many valves does the human heart have?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart valves", statement: "Tricuspid, mitral (bicuspid), aortic and pulmonary valves = 4." },
            ],
            steps: [
              { reasoning: "Two atrioventricular + two semilunar valves.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only the semilunar valves."],
            examinerNote: "B1.",
          },
        },
        {
          id: "mypb4-u2-circ-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A red blood cell completes one full circuit of the body in about 60 seconds. (a) How many circuits does it complete in one hour? (b) In 24 hours?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60 },
              { label: "b", answer: 1440 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circuit frequency", statement: "Circuits per time = time / 60 s." },
            ],
            steps: [
              { reasoning: "Per hour: $3600 / 60 = 60$ circuits.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Per day: $60 \\times 24 = 1440$.", working: "1440", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 60, b) 1440",
            commonErrors: ["Multiplying by 60 instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A blood sample of 5 litres contains 2 litres of red blood cells. (a) What is the hematocrit (percentage of blood that is RBCs)? (b) If RBCs live about 120 days, what percentage of the RBC population is replaced each day? (c) How many litres of new RBCs are produced per day (assuming constant volume)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 0.83 },
              { label: "c", answer: 0.0167 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hematocrit and turnover", statement: "Hematocrit = RBC volume / total x 100; daily replacement = 100/lifespan %." },
            ],
            steps: [
              { reasoning: "Hematocrit $= \\frac{2}{5} \\times 100 = 40\\%$.", working: "40\\%", marks: 1, markCode: "M" },
              { reasoning: "Daily replacement $= 100/120 \\approx 0.83\\%$.", working: "0.83\\%", marks: 1, markCode: "M" },
              { reasoning: "New RBC volume $= 0.0083 \\times 2 \\approx 0.0167$ L/day.", working: "0.0167", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) 40%, b) ~0.83%, c) ~0.017 L/day",
            commonErrors: ["Using 5 L instead of 2 L for RBC volume in (c)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypb4-u2-circ-q14",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Name the three types of blood vessel and state the function of each.",
          parts: [
            { label: "a", prompt: "Artery", marks: 1 },
            { label: "b", prompt: "Vein", marks: 1 },
            { label: "c", prompt: "Capillary", marks: 1 },
            { label: "d", prompt: "State which vessel has valves.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blood vessels", statement: "Arteries away, veins to heart (valves), capillaries exchange." },
            ],
            steps: [
              { part: "a", reasoning: "Carries blood away from heart; thick muscular walls.", working: "\\text{away}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Carries blood to heart; thin walls.", working: "\\text{to heart}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One-cell walls for exchange of gases/nutrients.", working: "\\text{exchange}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Veins have valves.", working: "\\text{veins}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Artery=away, vein=to heart+valves, capillary=exchange",
            commonErrors: ["Saying arteries have valves."],
            examinerNote: "A1 for each part.",
          },
        },
        {
          id: "mypb4-u2-circ-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Describe double circulation.",
          parts: [
            { label: "a", prompt: "Name the two circuits.", marks: 1 },
            { label: "b", prompt: "Describe the pulmonary circuit.", marks: 2 },
            { label: "c", prompt: "Describe the systemic circuit.", marks: 2 },
            { label: "d", prompt: "Explain why separation of circuits is advantageous.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double circulation", statement: "Pulmonary (heart-lungs) + systemic (heart-body); prevents mixing of oxygenated/deoxygenated blood." },
            ],
            steps: [
              { part: "a", reasoning: "Pulmonary and systemic.", working: "\\text{2 circuits}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium.", working: "\\text{pulmonary}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gas exchange occurs in lungs.", working: "\\text{gas exchange}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Left ventricle → aorta → body → vena cava → right atrium.", working: "\\text{systemic}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Delivers O₂/nutrients to tissues, removes CO₂.", working: "\\text{tissues}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Keeps oxygenated and deoxygenated blood separate → efficient oxygen delivery.", working: "\\text{separation}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) pulmonary+systemic (b) RV→lungs→LA (c) LV→body→RA (d) no mixing",
            commonErrors: ["Reversing pulmonary and systemic circuits."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 for (d).",
          },
        },
        {
          id: "mypb4-u2-circ-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The pulmonary artery is often called an 'exception' among blood vessels. Why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It carries deoxygenated blood away from the heart — most arteries carry oxygenated blood" },
              { id: "b", text: "It carries blood towards the heart" },
              { id: "c", text: "It connects directly to veins" },
              { id: "d", text: "It has no muscle wall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pulmonary artery exception", statement: "Arteries normally carry oxygenated blood away; pulmonary artery carries deoxygenated blood to lungs." },
            ],
            steps: [
              { reasoning: "Arteries = away from heart, but pulmonary artery blood is deoxygenated.", working: "\\text{deoxygenated}", marks: 1, markCode: "M" },
              { reasoning: "Exception because 'artery' is defined by direction not oxygen content.", working: "\\text{direction}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Carries deoxygenated blood away from heart",
            commonErrors: ["Saying pulmonary artery carries oxygenated blood."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
