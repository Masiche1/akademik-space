import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cieb-u6-lesson-6-2",
  code: "6-2",
  title: "Blood Glucose and Osmoregulation",
  goal: "I CAN explain how the body controls blood glucose and water balance using hormones and the kidney.",
  standards: ["0653 6.3", "0653 6.4"],
  vocabulary: [
    { term: "Insulin", definition: "Hormone from pancreas that lowers blood glucose by converting it to glycogen." },
    { term: "Glucagon", definition: "Hormone from pancreas that raises blood glucose by converting glycogen to glucose." },
    { term: "Glycogen", definition: "Storage carbohydrate in liver/muscles; converted to/from glucose." },
    { term: "ADH", definition: "Antidiuretic hormone from pituitary; increases water reabsorption in kidney." },
    { term: "Osmoregulation", definition: "Control of water and salt balance in the body." },
    { term: "Nephron", definition: "Functional unit of the kidney that filters blood and forms urine." },
    { term: "Selective reabsorption", definition: "Reabsorption of useful substances (glucose, water, salts) back into blood in the nephron." },
  ],
  concepts: [
    {
      id: "cieb-u6-blood-glucose",
      title: "Blood glucose control",
      skill: "Explain how insulin and glucagon maintain blood glucose within normal limits.",
      lesson: {
        sections: [
          {
            heading: "High blood glucose",
            body: "After eating, glucose absorbed → blood glucose rises.\n- **Pancreas releases insulin**.\n- Insulin causes cells to take up glucose and liver/muscles to convert glucose → **glycogen** (glycogenesis).\n- Blood glucose falls back to normal.",
          },
          {
            heading: "Low blood glucose",
            body: "Between meals or during exercise, glucose falls.\n- **Pancreas releases glucagon**.\n- Glucagon causes liver to convert **glycogen → glucose** (glycogenolysis).\n- Blood glucose rises back to normal.",
          },
          {
            heading: "Diabetes",
            body: "- **Type 1**: pancreas doesn't make insulin → high blood glucose; treated with insulin injections.\n- **Type 2**: cells become resistant to insulin; linked to obesity; managed by diet/exercise.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What happens to blood glucose and insulin after a meal?",
          solution: "Glucose rises → pancreas releases insulin → cells absorb glucose and store as glycogen → glucose returns to normal.",
        },
      },
      questions: [
        {
          id: "cieb-u6-blood-glucose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adrenaline" },
              { id: "b", text: "ADH" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Glucagon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin", statement: "Lowers blood glucose by promoting glycogen storage." },
            ],
            steps: [
              { reasoning: "Recall the hormone.", working: "\\text{insulin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Insulin",
            commonErrors: ["Choosing glucagon — that RAISES glucose."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of glucagon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucagon", statement: "Raises blood glucose by converting glycogen to glucose." },
            ],
            steps: [
              { reasoning: "State the function.", working: "\\text{raises glucose}", marks: 1, markCode: "M" },
              { reasoning: "Complete: glycogen → glucose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucagon raises blood glucose by stimulating the liver to convert glycogen into glucose.",
            commonErrors: ["Saying it lowers glucose — that's insulin."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the negative feedback control of blood glucose after a meal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucose feedback", statement: "High glucose → insulin → glycogen storage → glucose falls." },
            ],
            steps: [
              { reasoning: "Glucose rises after meal.", working: "\\text{glucose} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Pancreas detects and releases insulin.", working: "\\text{insulin released}", marks: 1, markCode: "M" },
              { reasoning: "Insulin → cells absorb glucose, liver stores as glycogen.", working: "\\text{glycogen storage}", marks: 1, markCode: "M" },
              { reasoning: "Glucose returns to normal (feedback reversed).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "After a meal glucose rises; pancreas releases insulin; cells take up glucose and liver converts it to glycogen; blood glucose falls back to normal.",
            commonErrors: ["Not mentioning glycogen storage as the mechanism."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the roles of insulin and glucagon in blood glucose control.",
          parts: [
            { label: "a", prompt: "State when each hormone is released.", marks: 2 },
            { label: "b", prompt: "State the effect of each on blood glucose.", marks: 2 },
            { label: "c", prompt: "Describe the mechanism by which each works.", marks: 3 },
            { label: "d", prompt: "Explain why both are needed for homeostasis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin vs glucagon", statement: "Insulin: high glucose → lower it (glycogen). Glucagon: low glucose → raise it (glycogen→glucose)." },
            ],
            steps: [
              { part: "a", reasoning: "Insulin: when glucose high.", working: "\\text{high glucose}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Glucagon: when glucose low.", working: "\\text{low glucose}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Insulin lowers.", working: "\\text{lowers}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Glucagon raises.", working: "\\text{raises}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Insulin: glucose → glycogen in liver/muscles.", working: "\\text{glycogenesis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Glucagon: glycogen → glucose in liver.", working: "\\text{glycogenolysis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete mechanisms.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Together they keep glucose within narrow range.", working: "\\text{set point}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "One alone can't handle both directions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) insulin when high, glucagon when low (b) insulin lowers, glucagon raises (c) glycogenesis vs glycogenolysis (d) together maintain set point",
            commonErrors: ["In (c) saying insulin converts glycogen to glucose — it does the opposite."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone raises blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucagon" },
              { id: "b", text: "Adrenaline" },
              { id: "c", text: "ADH" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucagon", statement: "Glucagon raises blood glucose by converting glycogen to glucose." },
            ],
            steps: [
              { reasoning: "Recall the hormone.", working: "\\text{glucagon} \\to \\text{glucose} \\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glucagon",
            commonErrors: ["Choosing insulin — that lowers glucose."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Normal blood glucose is about 90 mg/dL. After a meal it rises to 135 mg/dL. Calculate the increase in blood glucose.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 45, unit: "mg/dL" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood glucose change", statement: "Increase = post-meal value − fasting value." },
            ],
            steps: [
              { reasoning: "Subtract fasting from post-meal.", working: "135 - 90", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 45 \\text{ mg/dL}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45 mg/dL increase",
            commonErrors: ["Subtracting in the wrong order and reporting a negative value."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of insulin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin", statement: "Insulin lowers blood glucose by promoting glucose uptake and glycogen storage." },
            ],
            steps: [
              { reasoning: "State the function.", working: "\\text{lowers glucose}", marks: 1, markCode: "M" },
              { reasoning: "Complete: glycogen storage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insulin lowers blood glucose by causing cells to take up glucose and the liver/muscles to convert glucose into glycogen.",
            commonErrors: ["Saying it raises glucose — that's glucagon."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Insulin and glucagon are produced by the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kidney" },
              { id: "b", text: "Liver" },
              { id: "c", text: "Heart" },
              { id: "d", text: "Pancreas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Pancreas", statement: "The pancreas releases insulin and glucagon." },
            ],
            steps: [
              { reasoning: "Recall the source.", working: "\\text{pancreas}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Pancreas",
            commonErrors: ["Choosing liver — the liver stores glycogen but doesn't release these hormones."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A diabetic patient's blood glucose is 11 mmol/L while the normal level is about 5 mmol/L. Calculate the difference.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6, unit: "mmol/L" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Blood glucose units", statement: "Glucose can be measured in mmol/L; difference = patient value − normal." },
            ],
            steps: [
              { reasoning: "Subtract normal from patient value.", working: "11 - 5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 6 \\text{ mmol/L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 mmol/L above normal",
            commonErrors: ["Forgetting the units or dividing instead of subtracting."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between type 1 and type 2 diabetes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Diabetes types", statement: "Type 1: no insulin produced. Type 2: cells resistant to insulin; linked to obesity." },
            ],
            steps: [
              { reasoning: "Type 1: pancreas doesn't produce insulin.", working: "\\text{type 1: no insulin}", marks: 1, markCode: "M" },
              { reasoning: "Type 1 treated with insulin injections.", marks: 1, markCode: "M" },
              { reasoning: "Type 2: insulin produced but cells don't respond (resistance).", working: "\\text{type 2: resistance}", marks: 1, markCode: "M" },
              { reasoning: "Type 2 managed by diet/exercise; linked to obesity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In type 1 diabetes the pancreas fails to produce insulin, so blood glucose stays high and insulin injections are needed; in type 2 diabetes insulin is produced but body cells become resistant to it, and it is managed with diet and exercise.",
            commonErrors: ["Saying type 2 needs insulin injections — it's managed by diet/lifestyle initially."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Insulin causes the liver and muscles to convert glucose into:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycogen" },
              { id: "b", text: "Bile" },
              { id: "c", text: "Lactic acid" },
              { id: "d", text: "Urea" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Glycogenesis", statement: "Insulin promotes conversion of glucose to glycogen in liver and muscles." },
            ],
            steps: [
              { reasoning: "Recall the product.", working: "\\text{glucose} \\to \\text{glycogen}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Glycogen",
            commonErrors: ["Choosing lactic acid — that's anaerobic respiration."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the negative feedback loop that restores blood glucose when it falls too low.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucose feedback (low)", statement: "Low glucose → glucagon → glycogen → glucose → glucose rises to set point." },
            ],
            steps: [
              { reasoning: "Blood glucose falls below set point.", working: "\\text{glucose} \\downarrow", marks: 1, markCode: "M" },
              { reasoning: "Pancreas releases glucagon.", working: "\\text{glucagon released}", marks: 1, markCode: "M" },
              { reasoning: "Liver converts glycogen to glucose (glycogenolysis).", working: "\\text{glycogen} \\to \\text{glucose}", marks: 1, markCode: "M" },
              { reasoning: "Glucose returns to normal — feedback complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When blood glucose falls, the pancreas releases glucagon; the liver converts glycogen into glucose, raising blood glucose back to its set point — a negative feedback loop.",
            commonErrors: ["Saying insulin is released — low glucose triggers glucagon, not insulin."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After insulin is released, blood glucose is lowered because glucose is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Destroyed completely" },
              { id: "b", text: "Taken up by cells and stored as glycogen" },
              { id: "c", text: "Excreted immediately in urine" },
              { id: "d", text: "Converted into oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin mechanism", statement: "Insulin → cells absorb glucose → stored as glycogen → blood glucose falls." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{uptake + glycogen}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Taken up by cells and stored as glycogen",
            commonErrors: ["Choosing 'excreted in urine' — glucose only appears in urine in uncontrolled diabetes."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Blood glucose rises from 90 mg/dL to 180 mg/dL after a meal. Express 180 mg/dL as a percentage of 90 mg/dL.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage calculation", statement: "Percentage = new value / original value × 100." },
            ],
            steps: [
              { reasoning: "Apply the percentage formula.", working: "\\frac{180}{90} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 200\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200%",
            commonErrors: ["Reporting the increase (100%) instead of the new value as a percentage (200%)."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how the body controls blood glucose after a meal and during exercise.",
          parts: [
            { label: "a", prompt: "Describe what happens to blood glucose after a meal.", marks: 3 },
            { label: "b", prompt: "Describe the hormonal response that restores glucose to normal.", marks: 3 },
            { label: "c", prompt: "Explain what happens to blood glucose during exercise.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Glucose homeostasis", statement: "High glucose → insulin → glycogen storage; low/exercise → glucagon/adrenaline → glucose released." },
            ],
            steps: [
              { part: "a", reasoning: "Glucose absorbed from gut → blood glucose rises.", working: "\\text{glucose} \\uparrow", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Pancreas detects the rise.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the change.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pancreas releases insulin.", working: "\\text{insulin}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cells take up glucose; liver/muscles store glycogen.", working: "\\text{glycogen storage}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Glucose falls back to set point.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Muscles use glucose faster than it is supplied.", working: "\\text{glucose demand} \\uparrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Glucagon (and adrenaline) released → glycogen → glucose.", working: "\\text{glycogenolysis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Blood glucose maintained for respiration.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) glucose rises after absorption (b) insulin → uptake + glycogen → falls (c) demand rises → glucagon releases stored glucose",
            commonErrors: ["In (c) saying glucose always falls during exercise — demand may exceed supply and hormones respond."],
          },
        },
        {
          id: "cieb-u6-blood-glucose-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Type 1 diabetes is treated with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucagon injections" },
              { id: "b", text: "No treatment is needed" },
              { id: "c", text: "Insulin injections" },
              { id: "d", text: "A high-sugar diet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Type 1 diabetes treatment", statement: "Type 1 patients cannot produce insulin → insulin injections required." },
            ],
            steps: [
              { reasoning: "Recall the treatment.", working: "\\text{insulin injections}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Insulin injections",
            commonErrors: ["Choosing glucagon — it would raise glucose further."],
          },
        },
      ],
    },
    {
      id: "cieb-u6-osmoregulation",
      title: "Kidney and osmoregulation",
      skill: "Describe the nephron, urine formation, and ADH control of water balance.",
      lesson: {
        sections: [
          {
            heading: "Nephron function",
            body: "1. **Ultrafiltration**: blood filtered at glomerulus → filtrate enters Bowman's capsule (small molecules pass, cells/proteins stay).\n2. **Selective reabsorption**: useful substances (all glucose, some water/salts) reabsorbed back into blood in tubule.\n3. **Urine formation**: remaining waste (urea, excess water/salts) → collecting duct → ureter → bladder.",
          },
          {
            heading: "ADH and water balance",
            body: "- **Dehydrated** (blood water low): pituitary releases **ADH** → kidney reabsorbs MORE water → less urine, more concentrated.\n- **Overhydrated**: less ADH → less water reabsorption → more dilute urine.",
          },
          {
            heading: "Kidney structure",
            body: "Cortex (glomeruli + tubules), medulla (loops of Henle + collecting ducts), pelvis → ureter → bladder → urethra.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is urine more concentrated on a hot day?",
          solution: "Less water available → ADH released → kidney reabsorbs more water → smaller volume of concentrated urine.",
        },
      },
      questions: [
        {
          id: "cieb-u6-osmoregulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ADH do in the kidney?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filters blood" },
              { id: "b", text: "Increases water reabsorption" },
              { id: "c", text: "Decreases water reabsorption" },
              { id: "d", text: "Produces insulin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH", statement: "Increases water reabsorption in collecting ducts." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{more water reabsorption}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Increases water reabsorption",
            commonErrors: ["Choosing 'filters blood' — that's the glomerulus, not ADH."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the three stages of urine formation in the nephron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Urine formation", statement: "Ultrafiltration → selective reabsorption → urine formation." },
            ],
            steps: [
              { reasoning: "Give the stages.", working: "\\text{ultrafiltration, reabsorption, urine}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ultrafiltration at glomerulus, selective reabsorption in tubule, and formation of urine in collecting duct.",
            commonErrors: ["Omitting selective reabsorption."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the kidney responds when the body is dehydrated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dehydration response", statement: "ADH released → more water reabsorption → less, more concentrated urine." },
            ],
            steps: [
              { reasoning: "Blood water concentration rises (dehydration).", working: "\\text{water} \\downarrow", marks: 1, markCode: "M" },
              { reasoning: "Pituitary releases ADH.", working: "\\text{ADH released}", marks: 1, markCode: "M" },
              { reasoning: "Kidney reabsorbs more water in collecting duct.", working: "\\text{more reabsorption}", marks: 1, markCode: "M" },
              { reasoning: "Less urine produced, more concentrated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dehydration → pituitary releases ADH → kidney reabsorbs more water → produces less, more concentrated urine, conserving body water.",
            commonErrors: ["Saying 'kidney produces more urine' — it produces less when dehydrated."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the structure and function of the nephron.",
          parts: [
            { label: "a", prompt: "Name the two main parts of the nephron.", marks: 2 },
            { label: "b", prompt: "Describe ultrafiltration.", marks: 3 },
            { label: "c", prompt: "Describe selective reabsorption.", marks: 2 },
            { label: "d", prompt: "State what happens to the remaining fluid.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nephron", statement: "Glomerulus + Bowman's capsule filter; tubule reabsorbs; collecting duct forms urine." },
            ],
            steps: [
              { part: "a", reasoning: "Glomerulus and Bowman's capsule.", working: "\\text{glomerulus + capsule}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also tubule/loop of Henle.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "High pressure forces small molecules out of blood.", working: "\\text{high pressure}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Small molecules (water, glucose, urea, salts) pass into capsule.", working: "\\text{small molecules pass}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cells/proteins too large to pass.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Useful substances reabsorbed back into blood.", working: "\\text{glucose, water, salts}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "By active transport/diffusion in tubule.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Remaining waste → urine → ureter → bladder.", working: "\\text{urine}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Contains urea, excess water/salts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) glomerulus + Bowman's capsule, tubule (b) high-pressure filtration of small molecules (c) reabsorption of useful substances (d) urine formed",
            commonErrors: ["In (b) saying proteins pass through — they're too large."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "ADH is released by the pituitary when the body is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overhydrated" },
              { id: "b", text: "Exercising only" },
              { id: "c", text: "Overheated only" },
              { id: "d", text: "Dehydrated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH trigger", statement: "Dehydration → pituitary releases ADH → more water reabsorption." },
            ],
            steps: [
              { reasoning: "Recall the trigger.", working: "\\text{dehydrated} \\to \\text{ADH}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Dehydrated",
            commonErrors: ["Choosing overhydrated — that triggers LESS ADH."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person produces 1500 cm³ of urine normally but only 500 cm³ when dehydrated. Calculate the decrease in urine volume.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH and urine volume", statement: "Dehydration → less urine produced (more concentrated)." },
            ],
            steps: [
              { reasoning: "Subtract dehydrated from normal.", working: "1500 - 500", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 1000 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 cm³ decrease",
            commonErrors: ["Dividing instead of subtracting for a decrease."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define osmoregulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Osmoregulation", statement: "Control of water and salt balance in the body." },
            ],
            steps: [
              { reasoning: "Give the definition.", working: "\\text{water + salt balance}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Osmoregulation is the control of water and salt balance in the body, mainly by the kidney using ADH.",
            commonErrors: ["Defining only water balance — salts are included."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ultrafiltration in the nephron occurs at the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bladder" },
              { id: "b", text: "Glomerulus" },
              { id: "c", text: "Urethra" },
              { id: "d", text: "Ureter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ultrafiltration site", statement: "Filtration occurs at the glomerulus into Bowman's capsule." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{glomerulus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Glomerulus",
            commonErrors: ["Choosing collecting duct — reabsorption happens there, not filtration."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The kidneys filter about 180 dm³ of fluid per day but produce only about 1.8 dm³ of urine. Approximately what percentage of filtered water is reabsorbed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 99, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water reabsorption", statement: "Almost all filtered water (~99%) is reabsorbed; only ~1% becomes urine." },
            ],
            steps: [
              { reasoning: "Calculate reabsorbed fraction.", working: "\\frac{180 - 1.8}{180} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\approx 99\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About 99%",
            commonErrors: ["Calculating the urine percentage (~1%) instead of the reabsorbed percentage."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how ultrafiltration occurs in the glomerulus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Ultrafiltration", statement: "High pressure forces small molecules out of blood into Bowman's capsule; large molecules/cells stay." },
            ],
            steps: [
              { reasoning: "Blood pressure in glomerulus is high.", working: "\\text{high pressure}", marks: 1, markCode: "M" },
              { reasoning: "Small molecules (water, glucose, urea, salts) are forced into Bowman's capsule.", working: "\\text{small molecules pass}", marks: 1, markCode: "M" },
              { reasoning: "Cells and proteins are too large to pass.", working: "\\text{large molecules stay}", marks: 1, markCode: "M" },
              { reasoning: "Filtrate enters the nephron tubule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "High blood pressure in the glomerulus forces small molecules (water, glucose, urea, salts) out of the blood and into Bowman's capsule; cells and proteins are too large to pass and remain in the blood.",
            commonErrors: ["Saying proteins pass through — they are retained in the blood."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which substance is mostly NOT reabsorbed in the nephron and is excreted in urine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Urea" },
              { id: "b", text: "Glucose" },
              { id: "c", text: "Amino acids" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Selective reabsorption", statement: "Useful substances (glucose, most water/salts) are reabsorbed; urea is excreted." },
            ],
            steps: [
              { reasoning: "Identify the waste product.", working: "\\text{urea excreted}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Urea",
            commonErrors: ["Choosing glucose — all glucose is normally reabsorbed."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the kidney responds when the body has too much water (overhydration).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Overhydration response", statement: "Less ADH → less water reabsorption → more dilute urine produced." },
            ],
            steps: [
              { reasoning: "Blood water concentration falls (overhydration).", working: "\\text{water} \\uparrow", marks: 1, markCode: "M" },
              { reasoning: "Pituitary reduces ADH release.", working: "\\text{ADH} \\downarrow", marks: 1, markCode: "M" },
              { reasoning: "Kidney reabsorbs less water in collecting duct.", working: "\\text{less reabsorption}", marks: 1, markCode: "M" },
              { reasoning: "More dilute urine produced to remove excess water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "When overhydrated, the pituitary releases less ADH; the kidney then reabsorbs less water, producing a larger volume of more dilute urine to remove the excess water.",
            commonErrors: ["Saying MORE ADH is released — that's the dehydration response."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After the collecting duct, urine passes to the bladder via the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aorta" },
              { id: "b", text: "Vena cava" },
              { id: "c", text: "Ureter" },
              { id: "d", text: "Urethra" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Urine pathway", statement: "Collecting duct → pelvis → ureter → bladder → urethra." },
            ],
            steps: [
              { reasoning: "Recall the pathway.", working: "\\text{ureter}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ureter",
            commonErrors: ["Choosing urethra — that carries urine from bladder to outside."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Normal daily urine output is about 1.5 dm³. A dehydrated person produces 0.5 dm³. Calculate the reduction in urine output.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.0, unit: "dm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Urine volume and ADH", statement: "Dehydration reduces urine volume via increased water reabsorption." },
            ],
            steps: [
              { reasoning: "Subtract dehydrated from normal.", working: "1.5 - 0.5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 1.0 \\text{ dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.0 dm³ reduction",
            commonErrors: ["Dividing instead of subtracting."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how the nephron produces urine and how ADH controls water balance.",
          parts: [
            { label: "a", prompt: "Describe ultrafiltration.", marks: 2 },
            { label: "b", prompt: "Describe selective reabsorption.", marks: 2 },
            { label: "c", prompt: "State what urine contains.", marks: 2 },
            { label: "d", prompt: "Explain the role of ADH in water balance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Nephron + ADH", statement: "Ultrafiltration → reabsorption → urine; ADH controls water reabsorption." },
            ],
            steps: [
              { part: "a", reasoning: "High pressure filters small molecules into Bowman's capsule.", working: "\\text{high pressure filtration}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Small molecules pass; cells/proteins stay.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Useful substances (glucose, water, salts) reabsorbed into blood.", working: "\\text{glucose, water, salts}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Occurs in the tubule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Urine contains urea, excess water and salts.", working: "\\text{urea + water + salts}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Formed in collecting duct → ureter → bladder.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Dehydrated → ADH released.", working: "\\text{ADH} \\uparrow", marks: 1, markCode: "M" },
              { part: "d", reasoning: "More water reabsorbed → smaller volume of more concentrated urine.", working: "\\text{more reabsorption}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conserves body water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) high-pressure filtration of small molecules (b) useful substances reabsorbed (c) urea, excess water/salts (d) ADH → more water reabsorption → concentrated urine",
            commonErrors: ["In (d) saying ADH produces MORE urine — it produces less, more concentrated urine."],
          },
        },
        {
          id: "cieb-u6-osmoregulation-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which hormone controls water reabsorption in the kidney?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ADH" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH", statement: "ADH from the pituitary increases water reabsorption in the collecting ducts." },
            ],
            steps: [
              { reasoning: "Recall the hormone.", working: "\\text{ADH}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** ADH",
            commonErrors: ["Choosing insulin — that controls blood glucose, not water."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u6-homeostasis-2-notes",
      title: "Blood glucose and kidney — revision notes",
      summary: "Insulin/glucagon control and kidney osmoregulation via ADH.",
      sections: [
        {
          heading: "Blood glucose",
          body: "High glucose → insulin → glycogen storage (glycogenesis) → glucose falls. Low glucose → glucagon → glycogen → glucose (glycogenolysis) → glucose rises.",
        },
        {
          heading: "Kidney",
          body: "Ultrafiltration (glomerulus) → selective reabsorption (tubule) → urine (collecting duct). ADH: dehydrated → more water reabsorption → concentrated urine.",
        },
        {
          heading: "Exam technique",
          body: "- Insulin LOWERS, glucagon RAISES — don't confuse.\n- ADH: 'anti-diuretic' = less urine when dehydrated.\n- Nephron: ultrafiltration → reabsorption → urine; always name all three stages.",
        },
      ],
    },
  ],
};
