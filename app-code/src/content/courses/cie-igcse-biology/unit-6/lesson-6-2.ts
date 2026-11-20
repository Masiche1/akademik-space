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
              { id: "a", text: "Insulin" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "ADH" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin", statement: "Lowers blood glucose by promoting glycogen storage." },
            ],
            steps: [
              { reasoning: "Recall the hormone.", working: "\\text{insulin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Insulin",
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
              { id: "a", text: "Increases water reabsorption" },
              { id: "b", text: "Decreases water reabsorption" },
              { id: "c", text: "Filters blood" },
              { id: "d", text: "Produces insulin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH", statement: "Increases water reabsorption in collecting ducts." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{more water reabsorption}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Increases water reabsorption",
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
