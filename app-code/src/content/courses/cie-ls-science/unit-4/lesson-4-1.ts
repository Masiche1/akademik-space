import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cils-u4-lesson-4-1",
  code: "4-1",
  title: "The digestive system",
  goal: "I CAN describe the digestive system and explain how food is digested and absorbed.",
  standards: ["0893 Biology: human body systems"],
  vocabulary: [
    { term: "Digestion", definition: "Breaking down food into small absorbable molecules." },
    { term: "Enzyme", definition: "Protein that speeds up chemical reactions — e.g. amylase." },
    { term: "Oesophagus", definition: "Tube carrying food from mouth to stomach." },
    { term: "Stomach", definition: "Muscular organ mixing food with acid and enzymes." },
    { term: "Small intestine", definition: "Main site of digestion and absorption." },
    { term: "Villi", definition: "Finger-like projections in small intestine — increase absorption." },
  ],
  concepts: [
    {
      id: "cils-u4-digestive",
      title: "Digestive system",
      skill: "Trace food through the digestive system and explain digestion and absorption.",
      lesson: {
        sections: [
          {
            heading: "The journey",
            body: "Mouth → oesophagus → stomach → small intestine → large intestine → rectum.\n\n- **Mouth**: mechanical + amylase starts starch digestion\n- **Stomach**: acid + pepsin digest proteins\n- **Small intestine**: bile + pancreatic enzymes complete digestion; villi absorb\n- **Large intestine**: water absorbed; faeces formed",
          },
          {
            heading: "Enzymes",
            body: "- **Amylase**: starch → maltose\n- **Protease**: protein → amino acids\n- **Lipase**: fat → fatty acids + glycerol",
          },
          {
            heading: "Absorption",
            body: "Villi in small intestine have huge surface area — absorb digested food into blood. Water absorbed in large intestine.",
          },
        ],
        keyFormulas: [
          { name: "Digestion", statement: "Mouth→stomach→small intestine; enzymes break food; villi absorb." },
        ],
        workedExample: {
          problem: "Why does the small intestine have villi?",
          solution: "Villi massively increase surface area for absorbing digested nutrients into blood.",
        },
      },
      questions: [
        {
          id: "cils-u4-dig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is most food digested and absorbed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large intestine" },
              { id: "b", text: "Small intestine" },
              { id: "c", text: "Mouth" },
              { id: "d", text: "Stomach" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Small intestine", statement: "Main digestion + absorption site." },
            ],
            steps: [
              { reasoning: "Small intestine has enzymes, bile, and villi for absorption.", working: "small intestine", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Small intestine",
            commonErrors: ["Choosing (b) — stomach digests but doesn't absorb much."],
          },
        },
        {
          id: "cils-u4-dig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of bile in digestion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bile", statement: "Emulsifies fats — breaks large droplets into small for lipase." },
            ],
            steps: [
              { reasoning: "Bile emulsifies fat — increases surface area for lipase.", working: "emulsifies", marks: 1, markCode: "M" },
              { reasoning: "Not an enzyme — mechanical action on fats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile emulsifies fats into small droplets for efficient lipase digestion.",
            commonErrors: ["Saying bile 'digests' fat — it emulsifies, lipase digests."],
          },
        },
        {
          id: "cils-u4-dig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how food moves from mouth to stomach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Peristalsis", statement: "Wave-like muscle contractions push food along oesophagus." },
            ],
            steps: [
              { reasoning: "Swallowing moves food to oesophagus.", working: "swallow", marks: 1, markCode: "M" },
              { reasoning: "Peristalsis — rhythmic muscle contractions push bolus down.", working: "peristalsis", marks: 1, markCode: "M" },
              { reasoning: "Works against gravity — can eat upside down.", working: "gravity", marks: 1, markCode: "M" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Peristalsis — wave-like muscle contractions push food down oesophagus.",
            commonErrors: ["Saying 'gravity pulls it' — peristalsis is active muscle action."],
          },
        },
        {
          id: "cils-u4-dig-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace a piece of bread through digestion.",
          parts: [
            { label: "a", prompt: "What happens in the mouth?", marks: 2 },
            { label: "b", prompt: "What happens in the stomach?", marks: 3 },
            { label: "c", prompt: "What happens in the small intestine?", marks: 2 },
            { label: "d", prompt: "What happens to undigested material?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Digestion trace", statement: "Starch→maltose→glucose; protein→amino acids; absorbed at villi." },
            ],
            steps: [
              { part: "a", reasoning: "Chewing (mechanical); salivary amylase starts starch→maltose.", working: "amylase", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HCl kills bacteria; pepsin digests protein; churning mixes.", working: "acid+pepsin", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Functions correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bile emulsifies; pancreatic amylase completes starch→glucose; villi absorb.", working: "complete digestion", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Water absorbed in large intestine; waste → faeces → rectum.", working: "water+faeces", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chew + amylase (b) acid + pepsin (c) bile + enzymes + villi absorb (d) water absorbed, faeces formed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["Forgetting bile in small intestine — needed for fats."],
          },
        },
        {
          id: "cils-u4-dig-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme in saliva starts the digestion of starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pepsin" },
              { id: "b", text: "Amylase" },
              { id: "c", text: "Lipase" },
              { id: "d", text: "Bile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salivary amylase", statement: "Enzyme in saliva that starts starch digestion." },
            ],
            steps: [
              { reasoning: "Amylase digests starch → maltose, starting in the mouth.", working: "amylase", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Amylase",
            commonErrors: ["Choosing (b) — pepsin digests protein in the stomach, not starch."],
          },
        },
        {
          id: "cils-u4-dig-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is most water absorbed from digested food?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Large intestine" },
              { id: "c", text: "Mouth" },
              { id: "d", text: "Oesophagus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Large intestine", statement: "Absorbs water; forms faeces." },
            ],
            steps: [
              { reasoning: "Water absorption happens mainly in the large intestine.", working: "large intestine", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Large intestine",
            commonErrors: ["Choosing (b) — the stomach digests but absorbs little."],
          },
        },
        {
          id: "cils-u4-dig-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is peristalsis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wave-like muscle contractions that push food along" },
              { id: "b", text: "The churning of food in the stomach" },
              { id: "c", text: "The release of digestive enzymes" },
              { id: "d", text: "The mixing action of bile in the small intestine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Peristalsis", statement: "Rhythmic muscle contractions moving food through the gut." },
            ],
            steps: [
              { reasoning: "Peristalsis = wave-like contractions moving food along the alimentary canal.", working: "peristalsis", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Wave-like muscle contractions that push food along",
            commonErrors: ["Choosing (c) — stomach churning is mechanical digestion, not peristalsis."],
          },
        },
        {
          id: "cils-u4-dig-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two functions of the stomach during digestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stomach", statement: "Churns food, kills bacteria with acid, digests protein with pepsin." },
            ],
            steps: [
              { reasoning: "Stomach churns food and mixes it with acid and enzymes.", working: "churning+acid", marks: 1, markCode: "M" },
              { reasoning: "Pepsin (protease) digests protein; acid kills microbes.", working: "pepsin", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Churns/mixes food; acid kills bacteria; pepsin starts protein digestion.",
            commonErrors: ["Saying the stomach absorbs nutrients — absorption is mainly in the small intestine."],
          },
        },
        {
          id: "cils-u4-dig-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how starch is digested as food passes through the digestive system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Starch digestion", statement: "Amylase breaks starch → maltose → glucose." },
            ],
            steps: [
              { reasoning: "Salivary amylase in the mouth starts starch → maltose.", working: "amylase", marks: 1, markCode: "M" },
              { reasoning: "Pancreatic amylase in the small intestine continues the breakdown.", working: "pancreatic amylase", marks: 1, markCode: "M" },
              { reasoning: "Final products are simple sugars (glucose) absorbed by villi.", working: "glucose", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amylase in saliva and small intestine breaks starch into maltose then glucose, which is absorbed.",
            commonErrors: ["Saying starch is digested only in the stomach — amylase acts in mouth and small intestine."],
          },
        },
        {
          id: "cils-u4-dig-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the small intestine is so long and has many folds and villi.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Large surface area speeds up absorption of digested food." },
            ],
            steps: [
              { reasoning: "Folds and villi massively increase surface area.", working: "surface area", marks: 1, markCode: "M" },
              { reasoning: "Length gives more time/area for digestion and absorption.", working: "length", marks: 1, markCode: "M" },
              { reasoning: "Villi have thin walls and blood capillaries — short diffusion path into blood.", working: "thin+capillaries", marks: 1, markCode: "M" },
              { reasoning: "Overall: maximises rate of absorption into blood.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Length, folds and villi give huge surface area so digested food is absorbed quickly into the blood.",
            commonErrors: ["Saying villi produce enzymes — they absorb; enzymes are secreted elsewhere."],
          },
        },
        {
          id: "cils-u4-dig-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does protease enzyme digest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water into minerals" },
              { id: "b", text: "Protein into amino acids" },
              { id: "c", text: "Starch into glucose" },
              { id: "d", text: "Fat into glycerol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Protease", statement: "Enzyme digesting protein → amino acids." },
            ],
            steps: [
              { reasoning: "Protease acts on protein; products are amino acids.", working: "protein→amino acids", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Protein into amino acids",
            commonErrors: ["Choosing (c) — lipase digests fat."],
          },
        },
        {
          id: "cils-u4-dig-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two things that happen to food in the mouth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mechanical + chemical digestion", statement: "Chewing breaks food; amylase starts starch digestion." },
            ],
            steps: [
              { reasoning: "Teeth chew food — mechanical digestion into smaller pieces.", working: "chewing", marks: 1, markCode: "M" },
              { reasoning: "Salivary amylase begins chemical digestion of starch.", working: "amylase", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Food is chewed (mechanical digestion) and amylase starts starch digestion.",
            commonErrors: ["Saying digestion is finished in the mouth — it only starts there."],
          },
        },
        {
          id: "cils-u4-dig-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how digested food is absorbed into the blood in the small intestine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Absorption", statement: "Villi absorb digested food into capillaries by diffusion." },
            ],
            steps: [
              { reasoning: "Digested food (sugars, amino acids, fatty acids) passes through villus epithelium.", working: "through wall", marks: 1, markCode: "M" },
              { reasoning: "Villus walls are one cell thick — short distance for diffusion.", working: "thin wall", marks: 1, markCode: "M" },
              { reasoning: "Each villus has blood capillaries — nutrients diffuse into blood.", working: "capillaries", marks: 1, markCode: "M" },
              { reasoning: "Large surface area + rich blood supply = rapid absorption.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Digested food diffuses through thin villus walls into surrounding blood capillaries.",
            commonErrors: ["Saying food is 'drunk up' — it is absorbed by diffusion into blood."],
          },
        },
        {
          id: "cils-u4-dig-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the roles of stomach acid, bile and enzymes in digestion.",
          parts: [
            { label: "a", prompt: "What does stomach acid do?", marks: 2 },
            { label: "b", prompt: "What does bile do, and where is it made?", marks: 2 },
            { label: "c", prompt: "What do digestive enzymes do?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Digestion chemicals", statement: "Acid kills microbes; bile emulsifies fat; enzymes break food chemically." },
            ],
            steps: [
              { part: "a", reasoning: "Hydrochloric acid kills bacteria and provides acidic conditions for pepsin.", working: "HCl", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct role stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bile emulsifies fats into small droplets; made in the liver, stored in gall bladder.", working: "emulsify", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Source/role correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Enzymes chemically break food: amylase→starch, protease→protein, lipase→fat.", working: "enzymes", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) acid kills bacteria, activates pepsin (b) bile emulsifies fat, made in liver (c) enzymes break down food chemically",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Role correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Role + source correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Saying bile digests fat — it emulsifies; lipase digests."],
          },
        },
        {
          id: "cils-u4-dig-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace a fatty meal through the digestive system.",
          parts: [
            { label: "a", prompt: "What happens to the fat in the stomach?", marks: 3 },
            { label: "b", prompt: "How is fat digested in the small intestine?", marks: 3 },
            { label: "c", prompt: "How are the products of fat digestion absorbed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fat digestion", statement: "Bile emulsifies fat; lipase → fatty acids + glycerol; absorbed at villi." },
            ],
            steps: [
              { part: "a", reasoning: "Stomach churns food; little fat digestion — mainly mixing and acid action.", working: "churning", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fat not chemically digested here (no lipase).", working: "no lipase", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bile emulsifies large fat droplets into small ones.", working: "bile", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lipase digests fat → fatty acids + glycerol.", working: "lipase", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fatty acids and glycerol diffuse through villus walls into blood/lymph.", working: "absorb", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) churned, little digestion (b) bile emulsifies + lipase → fatty acids + glycerol (c) absorbed through villi into blood",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Saying bile digests fat — emulsification only; lipase does the chemical digestion."],
          },
        },
        {
          id: "cils-u4-dig-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can a person swallow food while standing upside down?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bile pushes food through the intestines" },
              { id: "b", text: "Peristalsis pushes food along regardless of gravity" },
              { id: "c", text: "Gravity pulls food upwards in the gut" },
              { id: "d", text: "The stomach squeezes food downwards" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Peristalsis", statement: "Active muscle contractions move food independently of gravity." },
            ],
            steps: [
              { reasoning: "Peristalsis is active muscle action — food moves even against gravity.", working: "peristalsis", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Peristalsis pushes food along regardless of gravity",
            commonErrors: ["Choosing (b) — gravity does not help move food down the gut."],
          },
        },
      ],
    },
    {
      id: "cils-u4-circulatory",
      title: "The circulatory system",
      skill: "Describe the heart, blood vessels and how blood circulates.",
      lesson: {
        sections: [
          {
            heading: "Heart structure",
            body: "Four chambers: right atrium, right ventricle, left atrium, left ventricle. Left ventricle wall thicker — pumps to whole body.",
          },
          {
            heading: "Double circulation",
            body: "Pulmonary circuit: heart→lungs→heart (oxygenation). Systemic circuit: heart→body→heart (deliver O₂).",
          },
          {
            heading: "Blood vessels",
            body: "- **Arteries**: away from heart, thick walls, high pressure\n- **Veins**: to heart, valves prevent backflow\n- **Capillaries**: tiny, exchange nutrients/waste",
          },
        ],
        keyFormulas: [
          { name: "Circulation", statement: "Heart pumps blood: pulmonary (lungs) + systemic (body) circuits." },
        ],
        workedExample: {
          problem: "Why is the left ventricle wall thicker?",
          solution: "It pumps blood to the entire body — needs more force than right ventricle (lungs only).",
        },
      },
      questions: [
        {
          id: "cils-u4-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which vessel carries blood AWAY from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artery" },
              { id: "b", text: "Ventricle" },
              { id: "c", text: "Vein" },
              { id: "d", text: "Capillary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Artery", statement: "Carries blood away from heart." },
            ],
            steps: [
              { reasoning: "Arteries = away; veins = towards.", working: "artery", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Artery",
            commonErrors: ["Choosing (b) — veins return blood TO heart."],
          },
        },
        {
          id: "cils-u4-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do veins have valves?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vein valves", statement: "Prevent backflow — blood flows one direction to heart." },
            ],
            steps: [
              { reasoning: "Low pressure in veins — valves stop backward flow.", working: "backflow", marks: 1, markCode: "M" },
              { reasoning: "Ensures blood returns to heart efficiently.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Valves prevent backflow — ensure one-way flow back to heart.",
            commonErrors: ["Saying 'for pressure' — veins are low pressure; valves help gravity."],
          },
        },
        {
          id: "cils-u4-circ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain double circulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Double circulation", statement: "Pulmonary (heart-lungs-heart) + systemic (heart-body-heart)." },
            ],
            steps: [
              { reasoning: "Pulmonary: right side pumps deoxygenated blood to lungs for oxygenation.", working: "pulmonary", marks: 1, markCode: "M" },
              { reasoning: "Systemic: left side pumps oxygenated blood to body tissues.", working: "systemic", marks: 1, markCode: "M" },
              { reasoning: "Two separate circuits = efficient oxygen delivery.", working: "efficient", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two circuits: pulmonary (to lungs for O₂) and systemic (to body) — separate oxygenation and delivery.",
            commonErrors: ["One circuit — heart has two sides for two purposes."],
          },
        },
        {
          id: "cils-u4-circ-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace blood through the heart and body.",
          parts: [
            { label: "a", prompt: "Describe the pulmonary circuit.", marks: 3 },
            { label: "b", prompt: "Describe the systemic circuit.", marks: 3 },
            { label: "c", prompt: "Why is oxygenated blood kept separate?", marks: 2 },
            { label: "d", prompt: "What happens if valves fail?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circulation", statement: "Pulmonary oxygenates; systemic delivers; separation maintains efficiency." },
            ],
            steps: [
              { part: "a", reasoning: "Right atrium→right ventricle→pulmonary artery→lungs→pulmonary vein→left atrium.", working: "pulmonary path", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Path correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Left atrium→left ventricle→aorta→body→vena cava→right atrium.", working: "systemic path", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Path correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Separation prevents mixing — maintains oxygen gradient for efficient delivery.", working: "separation", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Backflow — inefficient circulation, heart murmur.", working: "backflow", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) right→lungs→left (b) left→body→right (c) prevents mixing (d) backflow/murmur",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Path correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Path correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (a) using artery for return — pulmonary VEIN returns to heart."],
          },
        },
        {
          id: "cils-u4-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chamber of the heart pumps blood to the whole body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right ventricle" },
              { id: "b", text: "Right atrium" },
              { id: "c", text: "Left ventricle" },
              { id: "d", text: "Left atrium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Left ventricle", statement: "Pumps oxygenated blood to the whole body via the aorta." },
            ],
            steps: [
              { reasoning: "Left ventricle → aorta → body; needs thick wall for high pressure.", working: "left ventricle", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Left ventricle",
            commonErrors: ["Choosing (b) — right ventricle pumps only to the lungs."],
          },
        },
        {
          id: "cils-u4-circ-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood vessels contain valves to prevent backflow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arteries" },
              { id: "b", text: "Aorta" },
              { id: "c", text: "Capillaries" },
              { id: "d", text: "Veins" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vein valves", statement: "Veins have valves ensuring one-way flow to the heart." },
            ],
            steps: [
              { reasoning: "Low pressure in veins means valves are needed to stop backflow.", working: "veins", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Veins",
            commonErrors: ["Choosing (b) — arteries have high pressure and no valves."],
          },
        },
        {
          id: "cils-u4-circ-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the pulmonary circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lungs → heart → body" },
              { id: "b", text: "Heart → body → heart" },
              { id: "c", text: "Heart → lungs → heart" },
              { id: "d", text: "Body → lungs → heart" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pulmonary circuit", statement: "Blood pumped from heart to lungs and back for oxygenation." },
            ],
            steps: [
              { reasoning: "Pulmonary = lungs; blood goes heart→lungs→heart.", working: "pulmonary", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Heart → lungs → heart",
            commonErrors: ["Choosing (b) — that is the systemic circuit."],
          },
        },
        {
          id: "cils-u4-circ-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the wall of the left ventricle is thicker than the right.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cardiac muscle", statement: "Thicker wall = stronger contraction = higher pressure." },
            ],
            steps: [
              { reasoning: "Left ventricle pumps blood to the whole body — much greater distance/volume than lungs.", working: "whole body", marks: 1, markCode: "M" },
              { reasoning: "Thicker muscle wall generates the higher pressure needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It must pump blood to the entire body, so it needs a thicker, stronger wall to generate higher pressure.",
            commonErrors: ["Saying 'to hold more blood' — thickness is for force of contraction, not capacity."],
          },
        },
        {
          id: "cils-u4-circ-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the structures blood passes through, in order, during one complete circulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circulation path", statement: "Vena cava → RA → RV → lungs → LA → LV → aorta → body." },
            ],
            steps: [
              { reasoning: "Deoxygenated blood returns via vena cava to right atrium then right ventricle.", working: "vena cava→RV", marks: 1, markCode: "M" },
              { reasoning: "Pulmonary artery → lungs → pulmonary vein → left atrium.", working: "lungs→LA", marks: 1, markCode: "M" },
              { reasoning: "Left ventricle → aorta → body tissues → back to vena cava.", working: "aorta→body", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body.",
            commonErrors: ["Putting the aorta before the lungs — oxygenation happens first."],
          },
        },
        {
          id: "cils-u4-circ-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how capillaries are adapted for exchanging materials with body cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Capillary adaptation", statement: "Thin walls, huge total surface area and slow blood flow maximise exchange." },
            ],
            steps: [
              { reasoning: "Capillary walls are one cell thick — very short diffusion distance.", working: "thin wall", marks: 1, markCode: "M" },
              { reasoning: "Enormous number of capillaries = huge surface area for exchange.", working: "surface area", marks: 1, markCode: "M" },
              { reasoning: "Blood flows slowly so there is time for diffusion.", working: "slow flow", marks: 1, markCode: "M" },
              { reasoning: "O₂/nutrients diffuse out, CO₂/waste diffuses in.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thin walls, huge surface area and slow flow let oxygen and nutrients diffuse to cells and waste diffuse back.",
            commonErrors: ["Saying capillaries 'pump' blood — they are sites of exchange only."],
          },
        },
        {
          id: "cils-u4-circ-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which blood vessel carries oxygenated blood away from the heart to the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pulmonary artery" },
              { id: "b", text: "Pulmonary vein" },
              { id: "c", text: "Vena cava" },
              { id: "d", text: "Aorta" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aorta", statement: "Main artery carrying oxygenated blood from left ventricle to the body." },
            ],
            steps: [
              { reasoning: "Aorta = systemic delivery; pulmonary artery carries deoxygenated blood to lungs.", working: "aorta", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Aorta",
            commonErrors: ["Choosing (b) — pulmonary artery carries deoxygenated blood to the lungs."],
          },
        },
        {
          id: "cils-u4-circ-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four chambers of the heart.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heart chambers", statement: "Right atrium, right ventricle, left atrium, left ventricle." },
            ],
            steps: [
              { reasoning: "Two atria receive blood; two ventricles pump it out.", working: "atria+ventricles", marks: 1, markCode: "M" },
              { reasoning: "Correct names: RA, RV, LA, LV.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right atrium, right ventricle, left atrium, left ventricle.",
            commonErrors: ["Saying 'upper/lower chambers' only — name atria and ventricles."],
          },
        },
        {
          id: "cils-u4-circ-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare arteries and veins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Arteries vs veins", statement: "Arteries: away from heart, thick walls, high pressure. Veins: to heart, valves, low pressure." },
            ],
            steps: [
              { reasoning: "Direction: arteries carry blood away from heart; veins return it.", working: "direction", marks: 1, markCode: "M" },
              { reasoning: "Wall thickness: arteries thick and muscular; veins thin-walled.", working: "walls", marks: 1, markCode: "M" },
              { reasoning: "Pressure/valves: arteries high pressure no valves; veins low pressure with valves.", working: "pressure+valves", marks: 1, markCode: "M" },
              { reasoning: "All three comparisons made clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arteries carry blood away from the heart with thick walls and high pressure; veins return blood with thin walls, valves and low pressure.",
            commonErrors: ["Saying arteries have valves — only veins do."],
          },
        },
        {
          id: "cils-u4-circ-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Describe what happens to blood in the pulmonary and systemic circuits.",
          parts: [
            { label: "a", prompt: "What happens to blood in the lungs?", marks: 2 },
            { label: "b", prompt: "What happens to blood in the body tissues?", marks: 2 },
            { label: "c", prompt: "Why is it important that the two sides of the heart are separated?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Double circulation", statement: "Lungs oxygenate blood; tissues deoxygenate it; separation prevents mixing." },
            ],
            steps: [
              { part: "a", reasoning: "O₂ diffuses into blood, CO₂ diffuses out in alveoli.", working: "gas exchange", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Blood returns oxygenated to left atrium.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "O₂ diffuses to cells for respiration; CO₂ and waste diffuse into blood.", working: "tissues", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Blood returns deoxygenated to right atrium.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Separation keeps oxygenated and deoxygenated blood apart.", working: "no mixing", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Maintains oxygen gradient — efficient delivery to body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) O₂ in, CO₂ out — blood oxygenated (b) O₂ delivered, CO₂/waste collected (c) prevents mixing, keeps oxygen supply efficient",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
            ],
            commonErrors: ["Saying both sides do the same job — pulmonary oxygenates, systemic delivers."],
          },
        },
        {
          id: "cils-u4-circ-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace blood through the heart and body in one complete circuit.",
          parts: [
            { label: "a", prompt: "Describe the journey to the lungs and back (pulmonary circuit).", marks: 3 },
            { label: "b", prompt: "Describe the journey to the body and back (systemic circuit).", marks: 3 },
            { label: "c", prompt: "State two adaptations of blood vessels for their jobs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circulation", statement: "Pulmonary: heart→lungs→heart. Systemic: heart→body→heart." },
            ],
            steps: [
              { part: "a", reasoning: "Right atrium → right ventricle → pulmonary artery → lungs.", working: "to lungs", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gas exchange in alveoli.", working: "exchange", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Pulmonary vein → left atrium; path accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Left atrium → left ventricle → aorta → body tissues.", working: "to body", marks: 1, markCode: "M" },
              { part: "b", reasoning: "O₂ delivered, CO₂ collected at capillaries.", working: "exchange", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vena cava → right atrium; path accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any two: thick artery walls for pressure; vein valves; thin capillary walls.", working: "adaptations", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid adaptations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) RA→RV→pulmonary artery→lungs→pulmonary vein→LA (b) LA→LV→aorta→body→vena cava→RA (c) any two vessel adaptations",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Path correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Path correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Confusing pulmonary artery (to lungs) with aorta (to body)."],
          },
        },
        {
          id: "cils-u4-circ-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A person's heart valve is damaged so it does not close properly. What is the most likely effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blood flows backwards — inefficient circulation and a murmur" },
              { id: "b", text: "The heart stops beating" },
              { id: "c", text: "Blood pressure increases in all vessels" },
              { id: "d", text: "More oxygen is produced in the lungs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heart valves", statement: "Valves ensure one-way flow; damage causes backflow." },
            ],
            steps: [
              { reasoning: "A leaking valve lets blood flow back — murmur and reduced efficiency.", working: "backflow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Blood flows backwards — inefficient circulation and a murmur",
            commonErrors: ["Choosing (c) — the heart still beats; the valve just leaks."],
          },
        },
      ],
    },
    {
      id: "cils-u4-respiratory",
      title: "The respiratory system",
      skill: "Describe gas exchange in lungs and the role of alveoli.",
      lesson: {
        sections: [
          {
            heading: "Breathing mechanism",
            body: "Inhale: diaphragm contracts + ribcage expands → air in. Exhale: diaphragm relaxes → air out. Passive/active process.",
          },
          {
            heading: "Gas exchange",
            body: "Alveoli = tiny air sacs with thin walls + capillaries. O₂ diffuses into blood; CO₂ diffuses out — down concentration gradients.",
          },
          {
            heading: "Adaptations",
            body: "Alveoli: huge surface area, thin walls (1 cell), moist lining, rich blood supply — maximise diffusion rate.",
          },
        ],
        keyFormulas: [
          { name: "Gas exchange", statement: "Diffusion across alveoli — O₂ in, CO₂ out down gradients." },
        ],
        workedExample: {
          problem: "Why are alveoli so small and numerous?",
          solution: "Maximises surface area for gas exchange — thin walls + blood supply enable rapid diffusion.",
        },
      },
      questions: [
        {
          id: "cils-u4-resp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where does gas exchange occur in the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alveoli" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Trachea" },
              { id: "d", text: "Larynx" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alveoli", statement: "Air sacs where gas exchange happens." },
            ],
            steps: [
              { reasoning: "Alveoli are the site of O₂/CO₂ exchange.", working: "alveoli", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Alveoli",
            commonErrors: ["Choosing (c) — bronchi just conduct air."],
          },
        },
        {
          id: "cils-u4-resp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to the diaphragm during inhalation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inhalation", statement: "Diaphragm contracts and flattens → chest volume increases." },
            ],
            steps: [
              { reasoning: "Diaphragm contracts/flattens — increases thoracic volume.", working: "contracts", marks: 1, markCode: "M" },
              { reasoning: "Lower pressure → air rushes in.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diaphragm contracts and flattens, increasing chest volume so air enters.",
            commonErrors: ["Saying 'diaphragm relaxes' — that's exhalation."],
          },
        },
        {
          id: "cils-u4-resp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how oxygen moves from air to blood in the lungs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diffusion", statement: "O₂ diffuses down concentration gradient across thin alveolar wall." },
            ],
            steps: [
              { reasoning: "O₂ concentration higher in alveoli than blood — gradient exists.", working: "gradient", marks: 1, markCode: "M" },
              { reasoning: "Thin alveolar wall (1 cell) = short diffusion distance.", working: "thin wall", marks: 1, markCode: "M" },
              { reasoning: "O₂ dissolves in moist lining, diffuses into capillary blood.", working: "into blood", marks: 1, markCode: "M" },
              { reasoning: "Mechanism clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O₂ diffuses down gradient through thin alveolar wall into capillary blood.",
            commonErrors: ["Saying 'pumped' — it's passive diffusion."],
          },
        },
        {
          id: "cils-u4-resp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare inspired and expired air.",
          parts: [
            { label: "a", prompt: "State two differences in composition.", marks: 2 },
            { label: "b", prompt: "Explain why expired air has these differences.", marks: 3 },
            { label: "c", prompt: "Describe how breathing rate changes during exercise.", marks: 2 },
            { label: "d", prompt: "Why does exercise increase breathing rate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gas exchange", statement: "Expired air: less O₂, more CO₂, more water vapour — from cellular respiration." },
            ],
            steps: [
              { part: "a", reasoning: "Less O₂, more CO₂ (and more water vapour).", working: "differences", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cells respire: use O₂, produce CO₂; gas exchange replaces it.", working: "respiration", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rate and depth increase — faster, deeper breaths.", working: "faster", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Muscles need more O₂ for respiration to release energy; more CO₂ must be removed.", working: "O₂ demand", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) less O₂, more CO₂ (b) cellular respiration (c) faster/deeper (d) more O₂ needed, CO₂ removed",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Differences correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Saying expired air has no oxygen — just less than inspired."],
          },
        },
        {
          id: "cils-u4-resp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is present in greater amount in expired air than in inspired air?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Carbon dioxide" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Expired air", statement: "Less O₂, more CO₂ and more water vapour than inspired air." },
            ],
            steps: [
              { reasoning: "Cellular respiration produces CO₂, which is breathed out.", working: "CO₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide",
            commonErrors: ["Choosing (b) — oxygen is LOWER in expired air."],
          },
        },
        {
          id: "cils-u4-resp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to the ribcage during inhalation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It expands, increasing chest volume" },
              { id: "b", text: "It moves upwards only" },
              { id: "c", text: "It contracts, decreasing chest volume" },
              { id: "d", text: "It stays still" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Inhalation", statement: "Ribcage expands and diaphragm contracts → air enters." },
            ],
            steps: [
              { reasoning: "Chest volume increases → pressure drops → air rushes in.", working: "expand", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** It expands, increasing chest volume",
            commonErrors: ["Choosing (b) — contraction happens during exhalation."],
          },
        },
        {
          id: "cils-u4-resp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are the walls of alveoli only one cell thick?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To produce oxygen" },
              { id: "b", text: "To give a short diffusion distance for gases" },
              { id: "c", text: "To make the lungs heavier" },
              { id: "d", text: "To trap dust particles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion distance", statement: "Thin walls = short distance = faster diffusion of gases." },
            ],
            steps: [
              { reasoning: "One-cell-thick wall minimises distance gases must diffuse.", working: "thin wall", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To give a short diffusion distance for gases",
            commonErrors: ["Choosing (c) — thin walls aid exchange, not trapping."],
          },
        },
        {
          id: "cils-u4-resp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what happens to the diaphragm and ribcage during exhalation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exhalation", statement: "Diaphragm relaxes/domescends; ribcage relaxes → air pushed out." },
            ],
            steps: [
              { reasoning: "Diaphragm relaxes and curves upwards, decreasing chest volume.", working: "relax", marks: 1, markCode: "M" },
              { reasoning: "Ribcage relaxes; higher pressure forces air out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The diaphragm relaxes and rises while the ribcage relaxes, so air is pushed out.",
            commonErrors: ["Saying diaphragm contracts — that is inhalation."],
          },
        },
        {
          id: "cils-u4-resp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how carbon dioxide moves from the blood into the alveoli.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diffusion", statement: "CO₂ diffuses down its concentration gradient across the thin alveolar wall." },
            ],
            steps: [
              { reasoning: "CO₂ concentration is higher in blood than in alveoli — gradient exists.", working: "gradient", marks: 1, markCode: "M" },
              { reasoning: "CO₂ dissolves in the moist alveolar lining and diffuses out.", working: "diffuse out", marks: 1, markCode: "M" },
              { reasoning: "Thin wall + rich blood supply make exchange rapid and passive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO₂ diffuses down its concentration gradient through the thin alveolar wall into the air spaces.",
            commonErrors: ["Saying CO₂ is 'pumped' out — it moves by passive diffusion."],
          },
        },
        {
          id: "cils-u4-resp-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why breathing rate increases during vigorous exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Respiration demand", statement: "Exercise needs more O₂ for respiration and produces more CO₂ to remove." },
            ],
            steps: [
              { reasoning: "Muscles respire faster during exercise — more O₂ needed to release energy.", working: "O₂ demand", marks: 1, markCode: "M" },
              { reasoning: "More CO₂ is produced and must be removed quickly.", working: "CO₂", marks: 1, markCode: "M" },
              { reasoning: "Rate and depth of breathing increase to meet this demand.", working: "faster+deeper", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete and linked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exercise increases respiration, needing more O₂ and producing more CO₂, so breathing becomes faster and deeper.",
            commonErrors: ["Saying breathing slows — it speeds up to supply oxygen."],
          },
        },
        {
          id: "cils-u4-resp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structures branch from the trachea and carry air into the lungs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Villi" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Alveoli" },
              { id: "d", text: "Capillaries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bronchi", statement: "Two tubes branching from trachea into each lung." },
            ],
            steps: [
              { reasoning: "Trachea splits into two bronchi entering the lungs.", working: "bronchi", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bronchi",
            commonErrors: ["Choosing (b) — alveoli are air sacs at the end of bronchioles."],
          },
        },
        {
          id: "cils-u4-resp-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two features of alveoli that increase the rate of gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alveolar adaptations", statement: "Thin walls, large surface area, moist lining, rich blood supply." },
            ],
            steps: [
              { reasoning: "Any two: thin one-cell walls; huge surface area; moist lining; surrounded by capillaries.", working: "adaptations", marks: 1, markCode: "M" },
              { reasoning: "Two valid features stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thin walls, large surface area, moist lining or rich blood supply (any two).",
            commonErrors: ["Saying 'large size' — alveoli are tiny; it is their number that gives surface area."],
          },
        },
        {
          id: "cils-u4-resp-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the path taken by air from the nose to the alveoli.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Airway", statement: "Nose → trachea → bronchi → bronchioles → alveoli." },
            ],
            steps: [
              { reasoning: "Air enters via nose/nostrils, passes through trachea.", working: "trachea", marks: 1, markCode: "M" },
              { reasoning: "Trachea splits into two bronchi, one to each lung.", working: "bronchi", marks: 1, markCode: "M" },
              { reasoning: "Bronchi branch into smaller bronchioles ending in alveoli.", working: "bronchioles", marks: 1, markCode: "M" },
              { reasoning: "Full correct sequence given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nose → trachea → bronchi → bronchioles → alveoli.",
            commonErrors: ["Skipping bronchioles or reversing the order."],
          },
        },
        {
          id: "cils-u4-resp-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare inhalation and exhalation.",
          parts: [
            { label: "a", prompt: "What happens to the diaphragm in each?", marks: 2 },
            { label: "b", prompt: "What happens to the chest volume and pressure in each?", marks: 2 },
            { label: "c", prompt: "Which process is active and which is passive?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Breathing mechanism", statement: "Inhale: diaphragm contracts, volume up, pressure down. Exhale: relaxes, volume down, pressure up." },
            ],
            steps: [
              { part: "a", reasoning: "Contracts/flattens on inhale; relaxes/domescends on exhale.", working: "diaphragm", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both described correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Inhale: volume increases, pressure decreases → air in. Exhale: reverse.", working: "volume/pressure", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct for both.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inhalation is active (muscle contraction); exhalation is passive.", working: "active/passive", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) contracts on inhale, relaxes on exhale (b) volume/pressure opposite in each (c) inhale active, exhale passive",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Saying exhalation is active — at rest it is passive recoil."],
          },
        },
        {
          id: "cils-u4-resp-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how the structure of the lungs is adapted for efficient gas exchange.",
          parts: [
            { label: "a", prompt: "State two structural features of alveoli.", marks: 2 },
            { label: "b", prompt: "Explain how each feature speeds up gas exchange.", marks: 4 },
            { label: "c", prompt: "State one other adaptation of the lungs for breathing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gas exchange adaptations", statement: "Thin walls, large surface area, moist lining, rich blood supply maximise diffusion." },
            ],
            steps: [
              { part: "a", reasoning: "Any two: thin walls, huge surface area, moist lining, capillary network.", working: "features", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Thin walls → short diffusion distance.", working: "thin", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Large surface area → more gas exchanged per breath.", working: "area", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Moist lining → gases dissolve; capillaries → gradient maintained.", working: "moist+blood", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explanations accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any one: branching airways, diaphragm/ribcage movement, cilia/mucus.", working: "other", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid adaptation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) thin walls + large surface area (b) short diffusion distance + more exchange area + moist lining + blood supply (c) e.g. branching bronchi/diaphragm",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 4", marks: "3-4", descriptor: "Both explained.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
            ],
            commonErrors: ["Listing features without explaining how they help diffusion."],
          },
        },
        {
          id: "cils-u4-resp-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "During inhalation, what happens to the air pressure inside the chest compared with outside?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It becomes higher, pushing air out" },
              { id: "b", text: "It becomes lower, so air flows in" },
              { id: "c", text: "It drops to zero" },
              { id: "d", text: "It stays exactly the same" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pressure and breathing", statement: "Chest volume increases → pressure decreases → air flows in." },
            ],
            steps: [
              { reasoning: "Volume up = pressure down = air rushes in down the gradient.", working: "pressure drops", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It becomes lower, so air flows in",
            commonErrors: ["Choosing (b) — higher pressure pushes air OUT (exhalation)."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u4-digestive-notes",
      title: "Digestive and circulatory systems — revision notes",
      summary: "Digestion journey, enzymes, bile, heart, circulation, breathing.",
      sections: [
        {
          heading: "Digestion",
          body: "Mouth→stomach→small intestine→large intestine. Amylase/protease/lipase; bile emulsifies fat; villi absorb. Peristalsis moves food.",
        },
        {
          heading: "Circulation & breathing",
          body: "Heart: 4 chambers, double circulation (pulmonary+systemic). Arteries out, veins in, capillaries exchange. Alveoli: gas exchange by diffusion; diaphragm contracts to inhale.",
        },
      ],
    },
  ],
};
