import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cieb-u6-lesson-6-3",
  code: "6-3",
  title: "Excretion and the Liver",
  goal: "I CAN describe excretion, urea formation in the liver, and the roles of different organs in removing waste.",
  standards: ["0653 6.4"],
  vocabulary: [
    { term: "Excretion", definition: "Removal of metabolic waste products from the body." },
    { term: "Egestion", definition: "Removal of undigested food material (faeces) — not excretion." },
    { term: "Deamination", definition: "Removal of amino group from amino acids in the liver." },
    { term: "Urea", definition: "Nitrogenous waste produced from deamination; excreted in urine." },
    { term: "Liver", definition: "Organ that deaminates amino acids and produces urea." },
    { term: "Kidney", definition: "Organ filtering blood to form urine (urea, excess water/salts)." },
    { term: "Dialysis", definition: "Artificial blood filtration for kidney failure patients." },
  ],
  concepts: [
    {
      id: "cieb-u6-excretion",
      title: "Excretion and metabolic waste",
      skill: "Distinguish excretion from egestion and describe how waste products are formed and removed.",
      lesson: {
        sections: [
          {
            heading: "Excretion vs egestion",
            body: "- **Excretion**: removal of metabolic wastes — CO₂ (lungs), urea (kidney), water/salts (kidney/skin), bile pigments (faeces via liver→intestine).\n- **Egestion**: removal of undigested food (faeces) — NOT a metabolic waste, so not excretion.",
          },
          {
            heading: "Metabolic wastes",
            body: "- **CO₂**: from respiration → lungs.\n- **Urea**: from deamination of amino acids → kidney/urine.\n- **Excess water/salts**: kidney + sweat.\n- **Bile pigments**: breakdown of haemoglobin → faeces (still excretion — metabolic origin).",
          },
          {
            heading: "Organs of excretion",
            body: "- **Lungs**: CO₂ + water vapour.\n- **Kidneys**: urea, excess water/salts.\n- **Skin**: sweat (water, salts, small urea).\n- **Liver**: produces urea; bile pigments excreted via faeces.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is faeces excretion or egestion?",
          solution: "Faeces = egestion (undigested food). But bile pigments in faeces ARE excretion (metabolic waste from haemoglobin breakdown).",
        },
      },
      questions: [
        {
          id: "cieb-u6-excretion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is excretion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removal of saliva" },
              { id: "b", text: "Removal of CO₂ by lungs" },
              { id: "c", text: "Removal of undigested food" },
              { id: "d", text: "Removal of faeces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excretion", statement: "Removal of metabolic waste (CO₂, urea)." },
            ],
            steps: [
              { reasoning: "Identify metabolic waste.", working: "\\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Removal of CO₂ by lungs",
            commonErrors: ["Choosing faeces — that's egestion."],
          },
        },
        {
          id: "cieb-u6-excretion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish excretion from egestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excretion vs egestion", statement: "Excretion = metabolic waste; egestion = undigested food." },
            ],
            steps: [
              { reasoning: "Define excretion.", working: "\\text{metabolic waste}", marks: 1, markCode: "M" },
              { reasoning: "Define egestion.", working: "\\text{undigested food}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Excretion removes metabolic wastes produced by cells (CO₂, urea); egestion removes undigested food material (faeces) which was never part of the body.",
            commonErrors: ["Saying faeces is excretion — it's egestion."],
          },
        },
        {
          id: "cieb-u6-excretion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the liver produces urea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Urea formation", statement: "Deamination of amino acids → ammonia → urea." },
            ],
            steps: [
              { reasoning: "Amino acids deaminated in liver.", working: "\\text{deamination}", marks: 1, markCode: "M" },
              { reasoning: "Ammonia (toxic) formed → converted to urea.", working: "\\text{ammonia} \\to \\text{urea}", marks: 1, markCode: "M" },
              { reasoning: "Urea transported to kidney for excretion.", working: "\\text{kidney}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In the liver, amino acids are deaminated — the amino group is removed forming toxic ammonia, which is immediately converted to urea; urea is then transported in blood to the kidneys for excretion in urine.",
            commonErrors: ["Saying 'ammonia is excreted' — it's converted to less toxic urea first."],
          },
        },
        {
          id: "cieb-u6-excretion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the organs involved in excretion and their roles.",
          parts: [
            { label: "a", prompt: "State which organ excretes CO₂.", marks: 1 },
            { label: "b", prompt: "Describe the role of the kidney in excretion.", marks: 3 },
            { label: "c", prompt: "Describe the role of the liver in excretion.", marks: 2 },
            { label: "d", prompt: "State the role of skin in excretion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Excretion organs", statement: "Lungs: CO₂. Kidney: urea/water/salts. Liver: urea production/bile. Skin: sweat." },
            ],
            steps: [
              { part: "a", reasoning: "Lungs.", working: "\\text{lungs}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Filters blood → urine.", working: "\\text{urine}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Removes urea + excess water/salts.", working: "\\text{urea/water/salts}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete role.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Produces urea from deamination.", working: "\\text{urea}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Also bile pigments → faeces.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sweat contains water + salts.", working: "\\text{sweat}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Small amount of urea.", working: "\\text{urea}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Also cools body.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lungs (b) urine with urea/water/salts (c) urea production/bile (d) sweat",
            commonErrors: ["In (d) forgetting skin also regulates temperature."],
          },
        },
        {
          id: "cieb-u6-excretion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a metabolic waste product?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Urea" },
              { id: "b", text: "Undigested food fibre" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Saliva" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Metabolic waste", statement: "Urea is produced by metabolism (deamination) and excreted." },
            ],
            steps: [
              { reasoning: "Identify the metabolic waste.", working: "\\text{urea}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Urea",
            commonErrors: ["Choosing undigested fibre — that's egested, not excreted."],
          },
        },
        {
          id: "cieb-u6-excretion-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person loses 2 dm³ of water daily: 1.5 dm³ as urine and 0.5 dm³ through sweat and other routes. What percentage of the water is lost as urine?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Water loss", statement: "Percentage = part / whole × 100." },
            ],
            steps: [
              { reasoning: "Apply the percentage formula.", working: "\\frac{1.5}{2} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 75\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: ["Dividing 0.5 by 2 instead of 1.5 by 2."],
          },
        },
        {
          id: "cieb-u6-excretion-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how the skin contributes to excretion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Skin excretion", statement: "Sweat contains water, salts and a small amount of urea." },
            ],
            steps: [
              { reasoning: "Sweat contains water and salts.", working: "\\text{sweat: water + salts}", marks: 1, markCode: "M" },
              { reasoning: "Also small amount of urea.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The skin excretes sweat containing water, salts and a small amount of urea; sweating also helps regulate body temperature.",
            commonErrors: ["Saying skin only cools — it also excretes metabolic wastes."],
          },
        },
        {
          id: "cieb-u6-excretion-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Carbon dioxide, a metabolic waste, is excreted by the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liver only" },
              { id: "b", text: "Skin only" },
              { id: "c", text: "Lungs" },
              { id: "d", text: "Kidneys" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "CO₂ excretion", statement: "CO₂ from respiration is excreted by the lungs during breathing." },
            ],
            steps: [
              { reasoning: "Recall the organ.", working: "\\text{lungs}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Lungs",
            commonErrors: ["Choosing kidneys — they excrete urea, not CO₂."],
          },
        },
        {
          id: "cieb-u6-excretion-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Urea is produced in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liver" },
              { id: "b", text: "Pancreas" },
              { id: "c", text: "Lung" },
              { id: "d", text: "Kidney" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Urea production", statement: "Urea is produced in the liver from deamination of amino acids." },
            ],
            steps: [
              { reasoning: "Recall the site.", working: "\\text{liver}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Liver",
            commonErrors: ["Choosing kidney — the kidney excretes urea but doesn't produce it."],
          },
        },
        {
          id: "cieb-u6-excretion-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deamination in the liver leads to the formation of urea.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Urea formation", statement: "Amino acids deaminated → toxic ammonia → converted to urea → excreted by kidney." },
            ],
            steps: [
              { reasoning: "Amino acids are deaminated in the liver.", working: "\\text{deamination}", marks: 1, markCode: "M" },
              { reasoning: "The amino group forms toxic ammonia.", working: "\\text{ammonia}", marks: 1, markCode: "M" },
              { reasoning: "Ammonia is immediately converted to less toxic urea.", working: "\\text{ammonia} \\to \\text{urea}", marks: 1, markCode: "M" },
              { reasoning: "Urea transported in blood to kidneys for excretion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In the liver, amino acids are deaminated; the removed amino group forms toxic ammonia which is immediately converted into urea; urea is then carried in the blood to the kidneys and excreted in urine.",
            commonErrors: ["Saying ammonia is excreted directly — it's converted to urea first."],
          },
        },
        {
          id: "cieb-u6-excretion-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is NOT an organ of excretion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Lung" },
              { id: "c", text: "Skin" },
              { id: "d", text: "Kidney" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Organs of excretion", statement: "Lungs (CO₂), kidneys (urea/water/salts), skin (sweat), liver (urea production)." },
            ],
            steps: [
              { reasoning: "Identify the non-excretory organ.", working: "\\text{stomach: digestion}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stomach",
            commonErrors: ["Choosing skin — sweat is excreted through skin."],
          },
        },
        {
          id: "cieb-u6-excretion-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why bile pigments in faeces are considered excretion, while undigested food in faeces is egestion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Excretion vs egestion", statement: "Excretion removes metabolic wastes; egestion removes material that was never part of the body." },
            ],
            steps: [
              { reasoning: "Bile pigments come from haemoglobin breakdown — metabolic origin.", working: "\\text{metabolic origin}", marks: 1, markCode: "M" },
              { reasoning: "Therefore bile pigments in faeces = excretion.", marks: 1, markCode: "M" },
              { reasoning: "Undigested food was never part of the body.", working: "\\text{never absorbed}", marks: 1, markCode: "M" },
              { reasoning: "Therefore faeces bulk = egestion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bile pigments are produced by the breakdown of haemoglobin — a metabolic waste — so their removal in faeces is excretion; undigested food was never part of the body, so its removal is egestion.",
            commonErrors: ["Treating all faeces as one category — it contains both excretion and egestion."],
          },
        },
        {
          id: "cieb-u6-excretion-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process is egestion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removal of CO₂ by the lungs" },
              { id: "b", text: "Removal of faeces" },
              { id: "c", text: "Removal of urea in urine" },
              { id: "d", text: "Removal of sweat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Egestion", statement: "Egestion is removal of undigested food material (faeces)." },
            ],
            steps: [
              { reasoning: "Identify egestion.", working: "\\text{faeces}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Removal of faeces",
            commonErrors: ["Choosing CO₂ — that's excretion."],
          },
        },
        {
          id: "cieb-u6-excretion-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Faeces contain 100 g of material: 90 g is undigested food and 10 g is bile pigments. What percentage of the faeces is metabolic waste (excretion)?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Excretion in faeces", statement: "Only the bile pigments (metabolic origin) count as excretion." },
            ],
            steps: [
              { reasoning: "Apply percentage formula to bile pigments.", working: "\\frac{10}{100} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 10\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10%",
            commonErrors: ["Counting all faeces as excretion — only bile pigments are metabolic waste."],
          },
        },
        {
          id: "cieb-u6-excretion-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the formation of urea and its excretion from the body.",
          parts: [
            { label: "a", prompt: "State what deamination is.", marks: 2 },
            { label: "b", prompt: "Describe what happens to the amino group removed during deamination.", marks: 3 },
            { label: "c", prompt: "State where urea is transported and how it is removed.", marks: 2 },
            { label: "d", prompt: "Name one other metabolic waste and the organ that removes it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Urea pathway", statement: "Deamination → ammonia → urea → blood → kidney → urine." },
            ],
            steps: [
              { part: "a", reasoning: "Deamination = removal of amino group from amino acid.", working: "\\text{remove NH}_2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Occurs in the liver.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Amino group forms toxic ammonia.", working: "\\text{ammonia}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ammonia converted to urea (less toxic).", working: "\\text{urea}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete explanation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Urea transported in blood to kidneys.", working: "\\text{blood} \\to \\text{kidney}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Excreted in urine.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "CO₂ → lungs, or sweat → skin.", working: "\\text{CO}_2/\\text{sweat}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Name waste + organ.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) removal of amino group in liver (b) ammonia → converted to urea (c) blood → kidney → urine (d) e.g. CO₂ via lungs",
            commonErrors: ["In (b) saying ammonia is excreted — it's converted to urea."],
          },
        },
        {
          id: "cieb-u6-excretion-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expired air contains about 4% CO₂. A person exhales 500 cm³ of air per breath. Calculate the volume of carbon dioxide in one expired breath.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage composition", statement: "Volume of gas = percentage × total volume." },
            ],
            steps: [
              { reasoning: "Apply the percentage.", working: "0.04 \\times 500", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 20 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 cm³",
            commonErrors: ["Using 16% (O₂) instead of 4% (CO₂)."],
          },
        },
      ],
    },
    {
      id: "cieb-u6-kidney-failure",
      title: "Kidney failure and dialysis",
      skill: "Describe kidney failure and how dialysis replaces kidney function.",
      lesson: {
        sections: [
          {
            heading: "Kidney failure",
            body: "When kidneys can't filter blood effectively → urea/waste accumulate → toxic. Causes: infection, high blood pressure, diabetes, genetic conditions.",
          },
          {
            heading: "Dialysis",
            body: "Blood passed through a machine with a **partially permeable membrane** (dialysis membrane):\n- Waste products (urea, excess salts) diffuse out into dialysis fluid.\n- Useful substances (glucose, some salts) stay in blood.\n- Cleaned blood returned to body.",
          },
          {
            heading: "Kidney transplant",
            body: "Alternative to dialysis — healthy kidney transplanted. Requires immunosuppressants to prevent rejection.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does dialysis mimic the kidney?",
          solution: "It filters blood through a partially permeable membrane, removing urea and excess substances while retaining useful ones — same principle as the nephron.",
        },
      },
      questions: [
        {
          id: "cieb-u6-kidney-failure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is dialysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surgery to remove kidneys" },
              { id: "b", text: "A type of kidney stone" },
              { id: "c", text: "A blood transfusion" },
              { id: "d", text: "Artificial filtering of blood when kidneys fail" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dialysis", statement: "Artificial blood filtration for kidney failure." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{artificial filtration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Artificial filtering of blood when kidneys fail",
            commonErrors: ["Choosing 'surgery' — dialysis is a machine process."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what passes through the dialysis membrane.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis membrane", statement: "Urea/wastes pass out; glucose/large molecules stay." },
            ],
            steps: [
              { reasoning: "Give what passes.", working: "\\text{urea/wastes}", marks: 1, markCode: "M" },
              { reasoning: "Complete: what stays.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Urea and excess salts/wastes pass out; glucose, proteins and blood cells remain in the blood.",
            commonErrors: ["Saying everything passes — only wastes/small molecules do."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why dialysis is needed in kidney failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Kidney failure", statement: "Wastes accumulate → toxicity → dialysis needed." },
            ],
            steps: [
              { reasoning: "Kidneys can't filter blood.", working: "\\text{no filtration}", marks: 1, markCode: "M" },
              { reasoning: "Urea/wastes accumulate.", working: "\\text{waste build-up}", marks: 1, markCode: "M" },
              { reasoning: "Toxic → illness/death without treatment.", working: "\\text{toxicity}", marks: 1, markCode: "M" },
              { reasoning: "Dialysis removes wastes artificially.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Failed kidneys can't remove urea and excess substances; they accumulate to toxic levels, so dialysis artificially filters the blood to prevent poisoning.",
            commonErrors: ["Saying 'kidneys stop making urine only' — the danger is waste accumulation."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare dialysis and kidney transplant as treatments for kidney failure.",
          parts: [
            { label: "a", prompt: "Describe how dialysis works.", marks: 3 },
            { label: "b", prompt: "Describe how kidney transplant works.", marks: 3 },
            { label: "c", prompt: "State one advantage and one disadvantage of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis vs transplant", statement: "Dialysis: machine filtering. Transplant: new kidney. Dialysis ongoing; transplant may be rejected." },
            ],
            steps: [
              { part: "a", reasoning: "Blood through dialysis machine.", working: "\\text{machine}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Membrane removes wastes.", working: "\\text{wastes removed}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Regular sessions needed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Healthy kidney transplanted.", working: "\\text{new kidney}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Requires immunosuppressants.", working: "\\text{immunosuppressants}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk of rejection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dialysis: no surgery but ongoing.", working: "\\text{ongoing}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Transplant: permanent but rejection risk.", working: "\\text{rejection}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State pros/cons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) machine filtration (b) new kidney+immunosuppressants (c) dialysis ongoing/no surgery, transplant permanent/rejection",
            commonErrors: ["In (c) saying transplant always works — rejection is a real risk."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The dialysis membrane is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fully permeable to everything" },
              { id: "b", text: "A living cell" },
              { id: "c", text: "Completely impermeable" },
              { id: "d", text: "Partially permeable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis membrane", statement: "Partially permeable — small waste molecules pass, useful molecules stay." },
            ],
            steps: [
              { reasoning: "Recall the membrane type.", working: "\\text{partially permeable}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Partially permeable",
            commonErrors: ["Choosing fully permeable — then useful substances would be lost too."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A patient has dialysis 3 times per week for 4 hours each session. Calculate the total dialysis time per week.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "hours" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis schedule", statement: "Total time = sessions per week × hours per session." },
            ],
            steps: [
              { reasoning: "Multiply sessions by duration.", working: "3 \\times 4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 12 \\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 hours per week",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two possible causes of kidney failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Kidney failure causes", statement: "Infection, high blood pressure, diabetes, genetic conditions." },
            ],
            steps: [
              { reasoning: "Give two causes.", working: "\\text{infection, BP, diabetes}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Infection, high blood pressure, diabetes or genetic conditions (any two).",
            commonErrors: ["Saying 'old age' alone — give specific causes."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In kidney failure, which substance accumulates in the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Urea" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Kidney failure", statement: "Failed kidneys can't excrete urea → it accumulates to toxic levels." },
            ],
            steps: [
              { reasoning: "Recall the waste product.", working: "\\text{urea}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Urea",
            commonErrors: ["Choosing glucose — that's controlled by insulin, not kidney failure."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A dialysis patient's blood urea is 20 mmol/L before treatment and 8 mmol/L after. Calculate the reduction in blood urea.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12, unit: "mmol/L" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Urea reduction", statement: "Reduction = before − after dialysis." },
            ],
            steps: [
              { reasoning: "Subtract after from before.", working: "20 - 8", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 12 \\text{ mmol/L}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 mmol/L reduction",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how dialysis removes waste products from the blood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis mechanism", statement: "Partially permeable membrane; wastes diffuse out down concentration gradient into dialysis fluid." },
            ],
            steps: [
              { reasoning: "Blood passed through dialysis machine across membrane.", working: "\\text{membrane}", marks: 1, markCode: "M" },
              { reasoning: "Urea/small waste molecules diffuse out.", working: "\\text{wastes diffuse out}", marks: 1, markCode: "M" },
              { reasoning: "Useful substances (glucose, proteins, cells) stay in blood.", working: "\\text{useful stay}", marks: 1, markCode: "M" },
              { reasoning: "Cleaned blood returned to patient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blood flows through a dialysis machine past a partially permeable membrane; waste products like urea diffuse out into the dialysis fluid down their concentration gradient while useful substances remain in the blood, which is then returned to the body.",
            commonErrors: ["Saying everything passes through — the membrane is selective."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compared with dialysis, a kidney transplant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always succeeds" },
              { id: "b", text: "Is temporary and needs repeating" },
              { id: "c", text: "Requires no medication" },
              { id: "d", text: "Is permanent but carries a risk of rejection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Transplant", statement: "Transplant is permanent but requires immunosuppressants due to rejection risk." },
            ],
            steps: [
              { reasoning: "Recall the key comparison.", working: "\\text{permanent + rejection risk}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Is permanent but carries a risk of rejection",
            commonErrors: ["Saying transplant needs no medication — immunosuppressants are required."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why immunosuppressant drugs are needed after a kidney transplant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Transplant rejection", statement: "Donor kidney is foreign tissue; immune system attacks it unless suppressed." },
            ],
            steps: [
              { reasoning: "Donor kidney is recognised as foreign.", working: "\\text{foreign tissue}", marks: 1, markCode: "M" },
              { reasoning: "Immune system attacks it (rejection).", working: "\\text{rejection}", marks: 1, markCode: "M" },
              { reasoning: "Immunosuppressants prevent the immune attack.", working: "\\text{immunosuppressants}", marks: 1, markCode: "M" },
              { reasoning: "Allows the transplant to function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The transplanted kidney is foreign tissue, so the patient's immune system would attack and reject it; immunosuppressant drugs suppress this immune response so the kidney can function.",
            commonErrors: ["Saying the drugs 'help the kidney work' — they prevent immune rejection."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance is retained in the blood during dialysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dialysis fluid" },
              { id: "b", text: "Excess salts only" },
              { id: "c", text: "Urea" },
              { id: "d", text: "Glucose and blood cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis selectivity", statement: "Useful substances like glucose and blood cells stay; wastes pass out." },
            ],
            steps: [
              { reasoning: "Recall what stays.", working: "\\text{glucose, cells stay}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Glucose and blood cells",
            commonErrors: ["Choosing urea — that's removed, not retained."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Blood flows through a dialysis machine at 250 cm³/min for a 4-hour (240 min) session. Calculate the total volume of blood treated.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "dm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis blood flow", statement: "Total volume = flow rate × time; convert cm³ to dm³." },
            ],
            steps: [
              { reasoning: "Multiply flow rate by time.", working: "250 \\times 240 = 60000 \\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Convert to dm³.", working: "= 60 \\text{ dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 dm³",
            commonErrors: ["Forgetting to convert cm³ to dm³ or using wrong time units."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe dialysis as a treatment for kidney failure and compare it with kidney transplant.",
          parts: [
            { label: "a", prompt: "Describe how dialysis works.", marks: 3 },
            { label: "b", prompt: "Describe how a kidney transplant works.", marks: 3 },
            { label: "c", prompt: "State one advantage and one disadvantage of each treatment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis vs transplant", statement: "Dialysis: repeated machine filtration. Transplant: new kidney + immunosuppressants." },
            ],
            steps: [
              { part: "a", reasoning: "Blood passed through dialysis machine.", working: "\\text{machine}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Membrane removes wastes by diffusion.", working: "\\text{wastes out}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Must be repeated regularly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Healthy kidney transplanted into patient.", working: "\\text{new kidney}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Immunosuppressants prevent rejection.", working: "\\text{immunosuppressants}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk of rejection/infection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dialysis advantage: no surgery/rejection.", working: "\\text{no surgery}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dialysis disadvantage: ongoing sessions; transplant risk of rejection.", working: "\\text{ongoing/rejection}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State pros and cons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) machine filtration removing wastes (b) transplanted kidney + immunosuppressants (c) dialysis ongoing/no rejection risk; transplant permanent but rejection risk",
            commonErrors: ["In (c) not giving both an advantage AND a disadvantage for each."],
          },
        },
        {
          id: "cieb-u6-kidney-failure-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A disadvantage of dialysis compared with kidney transplant is that dialysis:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removes all wastes perfectly" },
              { id: "b", text: "Never fails" },
              { id: "c", text: "Must be repeated regularly for the rest of the patient's life" },
              { id: "d", text: "Is a one-off operation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dialysis disadvantage", statement: "Dialysis is ongoing and time-consuming; transplant can be permanent." },
            ],
            steps: [
              { reasoning: "Recall the drawback.", working: "\\text{ongoing sessions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Must be repeated regularly for the rest of the patient's life",
            commonErrors: ["Choosing 'one-off operation' — that's more like a transplant."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u6-excretion-notes",
      title: "Excretion and kidney failure — revision notes",
      summary: "Excretion vs egestion, urea formation, organs of excretion, dialysis.",
      sections: [
        {
          heading: "Excretion",
          body: "Metabolic wastes: CO₂ (lungs), urea (kidney — from liver deamination), water/salts (kidney/skin). Egestion ≠ excretion (faeces = undigested food).",
        },
        {
          heading: "Kidney failure",
          body: "Wastes accumulate → dialysis (artificial filtration via membrane) or transplant (needs immunosuppressants).",
        },
        {
          heading: "Exam technique",
          body: "- Excretion = metabolic waste only; egestion = undigested food.\n- Deamination: amino acids → ammonia → urea (in liver).",
        },
      ],
    },
  ],
};
