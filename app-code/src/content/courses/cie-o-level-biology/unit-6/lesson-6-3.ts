import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olbio-u6-lesson-6-3",
  code: "6-3",
  title: "Excretion and the Liver",
  goal: "I CAN describe excretion, urea formation in the liver, and the roles of different organs in removing waste.",
  standards: ["5090 6.4"],
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
      id: "olbio-u6-excretion",
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
          id: "olbio-u6-excretion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is excretion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removal of CO₂ by lungs" },
              { id: "b", text: "Removal of undigested food" },
              { id: "c", text: "Removal of faeces" },
              { id: "d", text: "Removal of saliva" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excretion", statement: "Removal of metabolic waste (CO₂, urea)." },
            ],
            steps: [
              { reasoning: "Identify metabolic waste.", working: "\\text{CO}_2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Removal of CO₂ by lungs",
            commonErrors: ["Choosing faeces — that's egestion."],
          },
        },
        {
          id: "olbio-u6-excretion-q2",
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
          id: "olbio-u6-excretion-q3",
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
          id: "olbio-u6-excretion-q4",
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
      ],
    },
    {
      id: "olbio-u6-kidney-failure",
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
          id: "olbio-u6-kidney-failure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is dialysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artificial filtering of blood when kidneys fail" },
              { id: "b", text: "A type of kidney stone" },
              { id: "c", text: "Surgery to remove kidneys" },
              { id: "d", text: "A blood transfusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dialysis", statement: "Artificial blood filtration for kidney failure." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{artificial filtration}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Artificial filtering of blood when kidneys fail",
            commonErrors: ["Choosing 'surgery' — dialysis is a machine process."],
          },
        },
        {
          id: "olbio-u6-kidney-failure-q2",
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
          id: "olbio-u6-kidney-failure-q3",
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
          id: "olbio-u6-kidney-failure-q4",
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
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u6-excretion-notes",
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
