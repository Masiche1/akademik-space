import type { Difficulty, Lesson, MarkPrinciple, MarkStep, Markscheme, Question, QuestionPart, QuestionResponse } from "../../../types.ts";

type StepTuple = [string, number, MarkStep["markCode"], string?];
type StructStepTuple = [string, string, number, MarkStep["markCode"], string?];
type PartTuple = [string, string, number];

function prin(kind: MarkPrinciple["kind"], name: string, statement: string): MarkPrinciple { return { kind, name, statement }; }
function step(reasoning: string, marks: number, markCode: MarkStep["markCode"], working?: string, part?: string): MarkStep {
  const s: MarkStep = { reasoning, marks, markCode };
  if (working !== undefined) s.working = working;
  if (part !== undefined) s.part = part;
  return s;
}
function scheme(principles: MarkPrinciple[], steps: MarkStep[], finalAnswer: string, commonErrors?: string[]): Markscheme {
  const m: Markscheme = { principles, steps, finalAnswer };
  if (commonErrors && commonErrors.length) m.commonErrors = commonErrors;
  return m;
}
function makeQ(id: string, difficulty: Difficulty, totalMarks: number, stem: string, response: QuestionResponse, markscheme: Markscheme, parts?: QuestionPart[]): Question {
  const q: Question = { id, difficulty, totalMarks, stem, response, markscheme };
  if (parts) q.parts = parts;
  return q;
}
function mcq(id: string, difficulty: Difficulty, stem: string, choices: [string, string, string, string], correct: "a" | "b" | "c" | "d", principle: MarkPrinciple, reasoning: string, commonError?: string): Question {
  const textById = { a: choices[0], b: choices[1], c: choices[2], d: choices[3] };
  return makeQ(id, difficulty, 1, stem, { type: "mcq", choices: [{ id: "a", text: choices[0] }, { id: "b", text: choices[1] }, { id: "c", text: choices[2] }, { id: "d", text: choices[3] }], correctChoiceId: correct }, scheme([principle], [step(reasoning, 1, "B")], `**(${correct})** ${textById[correct]}`, commonError ? [commonError] : undefined));
}
function num(id: string, difficulty: Difficulty, stem: string, answer: number, unit: string | undefined, principle: MarkPrinciple, reasoning: string, working: string, finalAnswer: string, markCode: MarkStep["markCode"] = "M", commonError?: string): Question {
  const part: { label: string; answer: number; unit?: string } = { label: "a", answer, ...(unit !== undefined ? { unit } : {}) };
  return makeQ(id, difficulty, 1, stem, { type: "numeric", parts: [part] }, scheme([principle], [step(reasoning, 1, markCode, working)], finalAnswer, commonError ? [commonError] : undefined));
}
function open(id: string, difficulty: Difficulty, totalMarks: number, stem: string, principle: MarkPrinciple, steps: StepTuple[], finalAnswer: string, commonError?: string): Question {
  return makeQ(id, difficulty, totalMarks, stem, { type: "open" }, scheme([principle], steps.map((s) => step(s[0], s[1], s[2], s[3])), finalAnswer, commonError ? [commonError] : undefined));
}
function struct(id: string, difficulty: Difficulty, stem: string, parts: PartTuple[], principle: MarkPrinciple, steps: StructStepTuple[], finalAnswer: string, commonError?: string): Question {
  const total = parts.reduce((sum, p) => sum + p[2], 0);
  return makeQ(id, difficulty, total, stem, { type: "open" }, scheme([principle], steps.map((s) => step(s[1], s[2], s[3], s[4], s[0])), finalAnswer, commonError ? [commonError] : undefined), parts.map((p) => ({ label: p[0], prompt: p[1], marks: p[2] })));
}

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
              { id: "a", text: "Removal of faeces" },
              { id: "b", text: "Removal of CO₂ by lungs" },
              { id: "c", text: "Removal of saliva" },
              { id: "d", text: "Removal of undigested food" },
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
        mcq("olbio-u6-excretion-q5", "foundation", "Excretion is the removal of:", ["Metabolic waste products", "Undigested food", "Saliva", "Ingested water"], "a", prin("definition", "Excretion", "Excretion removes metabolic wastes produced by cells."), "Recall the definition.", "Undigested food is removed by egestion."),
        mcq("olbio-u6-excretion-q6", "foundation", "Egestion is the removal of:", ["Undigested food as faeces", "Carbon dioxide", "Urea", "Sweat"], "a", prin("definition", "Egestion", "Egestion removes undigested food material that was never absorbed."), "Distinguish egestion from excretion.", "CO2 and urea are excreted, not egested."),
        mcq("olbio-u6-excretion-q7", "core", "Urea is produced in the:", ["Liver", "Kidney", "Lung", "Heart"], "a", prin("property", "Urea formation", "The liver deaminates amino acids and converts ammonia to urea."), "Recall the organ.", "The kidney excretes urea but does not produce it."),
        mcq("olbio-u6-excretion-q8", "core", "Carbon dioxide produced in respiration is excreted by the:", ["Lungs", "Kidneys", "Skin", "Liver"], "a", prin("property", "CO2 excretion", "CO2 diffuses into alveoli and is removed in expired air."), "Recall the organ.", "The kidneys excrete urea, not CO2."),
        mcq("olbio-u6-excretion-q9", "challenge", "Bile pigments in faeces are an example of:", ["Excretion", "Egestion", "Digestion", "Absorption"], "a", prin("property", "Bile pigments", "Bile pigments are metabolic waste from haemoglobin breakdown, so their removal is excretion."), "Recognise metabolic origin.", "Faeces overall is egestion, but bile pigments are excreted."),
        num("olbio-u6-excretion-q10", "foundation", "The main organs of excretion are the lungs, kidneys, skin and liver. How many are there?", 4, "organs", prin("property", "Excretion organs", "Lungs, kidneys, skin and liver all remove metabolic wastes."), "Count the organs.", "4", "**4 organs**"),
        num("olbio-u6-excretion-q11", "core", "Blood urea concentration is 5 mmol/L and urine urea concentration is 50 mmol/L. How many times more concentrated is the urine?", 10, "times", prin("property", "Concentration ratio", "Ratio = urine concentration / blood concentration."), "Divide urine by blood concentration.", "50 / 5 = 10", "**10 times more concentrated**"),
        num("olbio-u6-excretion-q12", "core", "Sweat contains water, salts and a small amount of urea. How many named components does sweat contain?", 3, "components", prin("property", "Sweat composition", "Sweat contains water, salts and urea."), "Count the components.", "3", "**3 components**"),
        num("olbio-u6-excretion-q13", "challenge", "If the kidneys filter 200 L per day and produce 1.5 L of urine, what percentage of the filtered fluid becomes urine?", 0.75, "%", prin("property", "Urine percentage", "Percentage = urine / filtrate x 100."), "Divide urine by filtrate and multiply by 100.", "1.5 / 200 x 100 = 0.75", "**0.75%**"),
        open("olbio-u6-excretion-q14", "core", 3, "Distinguish excretion from egestion, giving an example of each.", prin("definition", "Excretion vs egestion", "Excretion removes metabolic waste; egestion removes undigested food."), [["Excretion removes metabolic wastes such as CO2 or urea.", 1, "M"], ["Egestion removes undigested food as faeces.", 1, "M"], ["Give a correct example for each.", 1, "A"]], "Excretion removes metabolic waste (e.g. urea); egestion removes undigested food (faeces).", "Calling faeces excretion."),
        open("olbio-u6-excretion-q15", "challenge", 4, "Explain how the liver produces urea from amino acids.", prin("property", "Urea formation", "Deamination of amino acids yields ammonia, converted to urea in the liver."), [["Amino acids are deaminated in the liver.", 1, "M"], ["The amino group is removed, forming ammonia.", 1, "M"], ["Toxic ammonia is converted into urea.", 1, "M"], ["Urea is transported to the kidney for excretion.", 1, "A"]], "Amino acids are deaminated in the liver; ammonia formed is converted to urea, which is excreted by the kidney.", "Saying ammonia itself is excreted."),
        struct("olbio-u6-excretion-q16", "challenge", "A student is asked about excretion and the organs involved.", [["a", "Define excretion.", 2], ["b", "Name three metabolic wastes and the organ that removes each.", 3], ["c", "Explain what deamination is.", 2], ["d", "State why faeces are not excretion.", 2]], prin("property", "Excretion", "Excretion removes metabolic wastes via lungs, kidney, skin and liver."), [["a", "Excretion is removal of metabolic waste products.", 1, "M"], ["a", "It is produced by cells, unlike undigested food.", 1, "A"], ["b", "CO2 is removed by the lungs.", 1, "M"], ["b", "Urea is removed by the kidneys.", 1, "M"], ["b", "Excess water/salts are removed by kidney and skin.", 1, "A"], ["c", "Deamination removes the amino group from amino acids.", 1, "M"], ["c", "It occurs in the liver to form urea.", 1, "A"], ["d", "Faeces are undigested food, not metabolic waste.", 1, "M"], ["d", "Their removal is egestion.", 1, "A"]], "(a) metabolic waste removal (b) CO2-lungs, urea-kidney, water-skin (c) amino group removal in liver (d) faeces = egestion", "Including faeces as excretion."),
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
              { id: "a", text: "A blood transfusion" },
              { id: "b", text: "Surgery to remove kidneys" },
              { id: "c", text: "A type of kidney stone" },
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
        mcq("olbio-u6-kidney-failure-q5", "foundation", "Dialysis filters blood using a:", ["Partially permeable membrane", "Fully permeable membrane", "Solid metal filter", "Sponge"], "a", prin("property", "Dialysis membrane", "A partially permeable membrane lets wastes pass but retains useful substances."), "Recall the membrane type.", "A fully permeable membrane would lose everything."),
        mcq("olbio-u6-kidney-failure-q6", "foundation", "In kidney failure, waste products in the blood:", ["Accumulate to toxic levels", "Decrease to zero", "Are converted to glucose", "Are stored safely"], "a", prin("property", "Kidney failure", "Failed kidneys cannot remove urea and excess substances, so they accumulate."), "Recall the consequence.", "Wastes build up rather than fall."),
        mcq("olbio-u6-kidney-failure-q7", "core", "During dialysis, urea moves:", ["Out of the blood into the dialysis fluid", "Into the blood from the fluid", "Into the bladder", "Into the lungs"], "a", prin("property", "Dialysis direction", "Urea diffuses down its concentration gradient out of blood into dialysis fluid."), "Recall the direction of movement.", "Useful substances like glucose stay in the blood."),
        mcq("olbio-u6-kidney-failure-q8", "core", "A kidney transplant patient usually needs:", ["Immunosuppressants to prevent rejection", "Insulin injections", "Dialysis forever", "Antibiotics only"], "a", prin("property", "Transplant", "Immunosuppressants stop the immune system rejecting the new kidney."), "Recall transplant requirement.", "Dialysis is the alternative, not a transplant need."),
        mcq("olbio-u6-kidney-failure-q9", "challenge", "Dialysis fluid contains no urea. Urea leaves the blood because:", ["It diffuses down its concentration gradient", "It is actively pumped out", "It evaporates", "It is filtered by the liver"], "a", prin("property", "Dialysis principle", "Wastes diffuse from high concentration in blood to low concentration in dialysis fluid."), "Recall diffusion down the gradient.", "Movement is by diffusion, not active transport."),
        num("olbio-u6-kidney-failure-q10", "foundation", "A dialysis patient has sessions 3 times per week. How many sessions occur in 2 weeks?", 6, "sessions", prin("property", "Dialysis frequency", "Sessions = per week x number of weeks."), "Multiply sessions per week by weeks.", "3 x 2 = 6", "**6 sessions**"),
        num("olbio-u6-kidney-failure-q11", "core", "Dialysis reduces a patient's blood urea from 20 mmol/L to 5 mmol/L. Calculate the percentage reduction.", 75, "%", prin("property", "Percentage reduction", "Percentage = decrease / original x 100."), "Compute decrease then percentage.", "(20 - 5) / 20 x 100 = 75", "**75% reduction**"),
        num("olbio-u6-kidney-failure-q12", "core", "A person normally has 2 kidneys. If one kidney fails completely, how many functioning kidneys remain?", 1, "kidney", prin("property", "Kidney number", "One functioning kidney can maintain health."), "Subtract failed from total.", "2 - 1 = 1", "**1 kidney**"),
        num("olbio-u6-kidney-failure-q13", "challenge", "Dialysis removes 90% of urea from the blood. If blood urea is 10 units before dialysis, how many units remain?", 1, "units", prin("property", "Residual urea", "Remaining = initial x (1 - removal fraction)."), "Keep 10% of the original.", "10 x 0.10 = 1", "**1 unit remains**"),
        open("olbio-u6-kidney-failure-q14", "core", 3, "Explain why kidney failure is dangerous if untreated.", prin("property", "Kidney failure danger", "Wastes accumulate to toxic levels without filtration."), [["Failed kidneys cannot filter urea and excess substances from blood.", 1, "M"], ["These wastes accumulate in the body.", 1, "M"], ["Toxic levels cause illness and can be fatal without treatment.", 1, "A"]], "Without working kidneys, urea and wastes build up to toxic concentrations, poisoning the body.", "Saying only urine production stops without mentioning toxicity."),
        open("olbio-u6-kidney-failure-q15", "challenge", 4, "Compare dialysis and kidney transplant as treatments for kidney failure.", prin("property", "Dialysis vs transplant", "Dialysis is ongoing machine filtration; transplant replaces the kidney but risks rejection."), [["Dialysis filters blood through a machine with a partially permeable membrane.", 1, "M"], ["It must be repeated regularly for life.", 1, "M"], ["A transplant replaces the kidney with a healthy one.", 1, "M"], ["Transplant needs immunosuppressants and can be rejected.", 1, "A"]], "Dialysis is repeated artificial filtration; transplant is a permanent new kidney but carries rejection risk.", "Claiming transplant always succeeds."),
        struct("olbio-u6-kidney-failure-q16", "challenge", "A student compares treatments for kidney failure.", [["a", "Describe how dialysis removes waste from blood.", 3], ["b", "State what the dialysis membrane allows to pass and what it retains.", 2], ["c", "Describe how a kidney transplant works.", 2], ["d", "Give one advantage and one disadvantage of dialysis.", 2]], prin("property", "Kidney failure treatment", "Dialysis uses a membrane; transplant replaces the kidney."), [["a", "Blood is passed through a dialysis machine.", 1, "M"], ["a", "A partially permeable membrane separates blood from dialysis fluid.", 1, "M"], ["a", "Wastes diffuse out while cleaned blood returns.", 1, "A"], ["b", "Urea and excess salts pass out.", 1, "M"], ["b", "Glucose, proteins and cells are retained.", 1, "A"], ["c", "A healthy kidney is transplanted into the patient.", 1, "M"], ["c", "Immunosuppressants prevent rejection.", 1, "A"], ["d", "Advantage: no surgery/organ needed; disadvantage: lifelong sessions.", 1, "M"], ["d", "State one of each clearly.", 1, "A"]], "(a) machine filtration via membrane (b) wastes out, useful retained (c) new kidney + immunosuppressants (d) dialysis ongoing but avoids surgery", "Saying dialysis cures kidney failure permanently."),
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
