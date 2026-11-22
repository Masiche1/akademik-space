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
const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\b[abcd]\s+and\s+[abcd]\b/i;
const mcqSeed = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;
  let a = mcqSeed(seed);
  const rnd = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = texts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;
};
const letterOf = (i: number): string => String.fromCharCode(97 + i);
const letterMapOf = (order: number[]): Record<string, string> =>
  Object.fromEntries(order.map((oldI, pos) => [letterOf(oldI), letterOf(pos)]));
const remapLetters = (s: string, map: Record<string, string> | null): string =>
  map ? s.replace(/\(([abcd])\)/g, (m, L) => (map[L] ? "(" + map[L] + ")" : m)) : s;

function mcq(id: string, difficulty: Difficulty, stem: string, choices: [string, string, string, string], correct: "a" | "b" | "c" | "d", principle: MarkPrinciple, reasoning: string, commonError?: string): Question {
  const __o = mcqOrder(choices, id);
  const __choices = (__o ? __o.map((i) => choices[i]) : choices) as [string, string, string, string];
  const __correct = (__o ? letterOf(__o.indexOf(correct.charCodeAt(0) - 97)) : correct) as "a" | "b" | "c" | "d";
  const __lmap = __o ? letterMapOf(__o) : null;
  const textById = { a: __choices[0], b: __choices[1], c: __choices[2], d: __choices[3] };
  return makeQ(id, difficulty, 1, stem, { type: "mcq", choices: [{ id: "a", text: __choices[0] }, { id: "b", text: __choices[1] }, { id: "c", text: __choices[2] }, { id: "d", text: __choices[3] }], correctChoiceId: __correct }, scheme([principle], [step(remapLetters(reasoning, __lmap), 1, "B")], `**(${__correct})** ${textById[__correct]}`, commonError ? [commonError] : undefined));
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

export const lesson62: Lesson = {
  id: "olbio-u6-lesson-6-2",
  code: "6-2",
  title: "Blood Glucose and Osmoregulation",
  goal: "I CAN explain how the body controls blood glucose and water balance using hormones and the kidney.",
  standards: ["5090 6.3", "5090 6.4"],
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
      id: "olbio-u6-blood-glucose",
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
          id: "olbio-u6-blood-glucose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucagon" },
              { id: "b", text: "Adrenaline" },
              { id: "c", text: "ADH" },
              { id: "d", text: "Insulin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulin", statement: "Lowers blood glucose by promoting glycogen storage." },
            ],
            steps: [
              { reasoning: "Recall the hormone.", working: "\\text{insulin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Insulin",
            commonErrors: ["Choosing glucagon — that RAISES glucose."],
          },
        },
        {
          id: "olbio-u6-blood-glucose-q2",
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
          id: "olbio-u6-blood-glucose-q3",
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
          id: "olbio-u6-blood-glucose-q4",
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
        mcq("olbio-u6-blood-glucose-q5", "foundation", "Which hormone is released when blood glucose is high?", ["Insulin", "Glucagon", "Adrenaline", "ADH"], "a", prin("property", "Insulin", "Insulin is released when blood glucose rises and lowers it."), "Match hormone to condition.", "Glucagon is released when glucose is low."),
        mcq("olbio-u6-blood-glucose-q6", "foundation", "Glycogen is mainly stored in the:", ["Liver and muscles", "Lungs and heart", "Kidneys and skin", "Stomach and intestines"], "a", prin("property", "Glycogen storage", "Glycogen is stored in the liver and muscle cells."), "Recall storage sites.", "Glycogen is a carbohydrate store, not a waste."),
        mcq("olbio-u6-blood-glucose-q7", "core", "Insulin causes glucose to be converted into:", ["Glycogen", "Glycolipids", "Amino acids", "Urea"], "a", prin("property", "Glycogenesis", "Insulin promotes conversion of glucose to glycogen for storage."), "Recall the storage product.", "Glycolipids and amino acids are unrelated to glucose storage."),
        mcq("olbio-u6-blood-glucose-q8", "core", "Glucagon mainly acts on the:", ["Liver", "Kidney", "Lung", "Skin"], "a", prin("property", "Glucagon target", "Glucagon stimulates the liver to release glucose from glycogen."), "Recall the target organ.", "The pancreas releases glucagon; the liver responds."),
        mcq("olbio-u6-blood-glucose-q9", "challenge", "Type 1 diabetes is caused by:", ["The pancreas failing to produce insulin", "Cells becoming resistant to insulin", "Too much glucagon only", "Kidney failure"], "a", prin("property", "Type 1 diabetes", "Type 1 diabetes results from loss of insulin production."), "Distinguish type 1 from type 2.", "Insulin resistance describes type 2 diabetes."),
        num("olbio-u6-blood-glucose-q10", "foundation", "Blood glucose is normally about 90 mg/dL. If it falls to 80 mg/dL, calculate the decrease.", 10, "mg/dL", prin("property", "Glucose change", "Decrease = initial - final."), "Subtract final from initial.", "90 - 80 = 10", "**10 mg/dL decrease**"),
        num("olbio-u6-blood-glucose-q11", "core", "Blood glucose rises from 80 mg/dL to 100 mg/dL. Calculate the percentage increase.", 25, "%", prin("property", "Percentage change", "Percentage increase = change / original x 100."), "Compute change then percentage.", "(100 - 80) / 80 x 100 = 25", "**25% increase**"),
        num("olbio-u6-blood-glucose-q12", "core", "A diabetic patient needs 8 units of insulin but injects 10 units. How many extra units were injected?", 2, "units", prin("property", "Dose difference", "Extra = amount given - amount needed."), "Subtract needed from given.", "10 - 8 = 2", "**2 units extra**"),
        num("olbio-u6-blood-glucose-q13", "challenge", "Blood glucose is 180 mg/dL against a target of 90 mg/dL. Calculate the percentage above target.", 100, "%", prin("property", "Percentage above target", "Percentage = (value - target) / target x 100."), "Compute excess then percentage.", "(180 - 90) / 90 x 100 = 100", "**100% above target**"),
        open("olbio-u6-blood-glucose-q14", "core", 3, "Explain how insulin lowers blood glucose after a meal.", prin("property", "Insulin action", "Insulin promotes glucose uptake and glycogen storage, lowering blood glucose."), [["High glucose triggers insulin release from the pancreas.", 1, "M"], ["Insulin causes cells to take up glucose.", 1, "M"], ["The liver converts glucose to glycogen, lowering blood glucose.", 1, "A"]], "Insulin makes cells absorb glucose and the liver store it as glycogen, returning blood glucose to normal.", "Saying insulin creates glucose rather than storing it."),
        open("olbio-u6-blood-glucose-q15", "challenge", 4, "Describe the negative feedback that raises blood glucose when it falls too low.", prin("property", "Glucose homeostasis", "Low glucose triggers glucagon, glycogen breakdown and a rise back to the set point."), [["Blood glucose falls below the set point.", 1, "M"], ["The pancreas releases glucagon.", 1, "M"], ["The liver converts glycogen back into glucose.", 1, "M"], ["Blood glucose rises back towards normal.", 1, "A"]], "Low glucose triggers glucagon, the liver releases glucose from glycogen, and blood glucose rises back to normal.", "Confusing glucagon with insulin."),
        struct("olbio-u6-blood-glucose-q16", "challenge", "A student compares insulin and glucagon in blood glucose control.", [["a", "State when insulin and glucagon are released.", 2], ["b", "State the effect of each hormone on blood glucose.", 2], ["c", "Describe the mechanism of each hormone.", 3], ["d", "State one feature of type 1 and type 2 diabetes.", 2]], prin("property", "Insulin vs glucagon", "Insulin lowers glucose via glycogenesis; glucagon raises it via glycogenolysis."), [["a", "Insulin is released when glucose is high.", 1, "M"], ["a", "Glucagon is released when glucose is low.", 1, "A"], ["b", "Insulin lowers blood glucose.", 1, "M"], ["b", "Glucagon raises blood glucose.", 1, "A"], ["c", "Insulin promotes glucose to glycogen storage.", 1, "M"], ["c", "Glucagon promotes glycogen to glucose breakdown.", 1, "M"], ["c", "Complete the mechanism contrast.", 1, "A"], ["d", "Type 1: no insulin produced.", 1, "M"], ["d", "Type 2: insulin resistance.", 1, "A"]], "(a) insulin high/glucagon low (b) insulin lowers, glucagon raises (c) glycogenesis vs glycogenolysis (d) type1 no insulin, type2 resistance", "Reversing the actions of insulin and glucagon."),
      ],
    },
    {
      id: "olbio-u6-osmoregulation",
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
          id: "olbio-u6-osmoregulation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ADH do in the kidney?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produces insulin" },
              { id: "b", text: "Decreases water reabsorption" },
              { id: "c", text: "Filters blood" },
              { id: "d", text: "Increases water reabsorption" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ADH", statement: "Increases water reabsorption in collecting ducts." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{more water reabsorption}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Increases water reabsorption",
            commonErrors: ["Choosing 'filters blood' — that's the glomerulus, not ADH."],
          },
        },
        {
          id: "olbio-u6-osmoregulation-q2",
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
          id: "olbio-u6-osmoregulation-q3",
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
          id: "olbio-u6-osmoregulation-q4",
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
        mcq("olbio-u6-osmoregulation-q5", "foundation", "ADH (antidiuretic hormone) is released by the:", ["Pituitary gland", "Pancreas", "Liver", "Thyroid gland"], "a", prin("property", "ADH source", "ADH is released by the pituitary gland."), "Recall the source gland.", "The pancreas releases insulin and glucagon, not ADH."),
        mcq("olbio-u6-osmoregulation-q6", "foundation", "Ultrafiltration in the nephron occurs at the:", ["Glomerulus", "Collecting duct", "Ureter", "Bladder"], "a", prin("property", "Ultrafiltration site", "Blood is filtered at the glomerulus into Bowman's capsule."), "Recall the filtration site.", "The collecting duct forms urine but does not filter blood."),
        mcq("olbio-u6-osmoregulation-q7", "core", "Selective reabsorption of useful substances occurs mainly in the:", ["Tubule", "Glomerulus", "Ureter", "Bladder"], "a", prin("property", "Selective reabsorption", "Useful substances are reabsorbed back into blood along the tubule."), "Recall the reabsorption site.", "The glomerulus filters; the tubule reabsorbs."),
        mcq("olbio-u6-osmoregulation-q8", "core", "When the body is dehydrated, the urine produced is:", ["Less in volume and more concentrated", "More in volume and more dilute", "Unchanged", "Absent"], "a", prin("property", "Dehydrated urine", "ADH increases water reabsorption, so less, more concentrated urine is formed."), "Recall the ADH effect.", "More dilute urine occurs when overhydrated."),
        mcq("olbio-u6-osmoregulation-q9", "challenge", "ADH increases the reabsorption of:", ["Water", "Glucose", "Urea", "Protein"], "a", prin("property", "ADH action", "ADH makes the collecting duct reabsorb more water."), "Recall the target substance.", "Glucose is normally fully reabsorbed regardless of ADH."),
        num("olbio-u6-osmoregulation-q10", "foundation", "Normal urine output is about 1.5 L per day. If it falls to 0.5 L per day, calculate the decrease.", 1, "L/day", prin("property", "Urine volume change", "Decrease = initial - final."), "Subtract final from initial.", "1.5 - 0.5 = 1.0", "**1.0 L/day decrease**"),
        num("olbio-u6-osmoregulation-q11", "core", "A person drinks 2 L of water and the kidneys excrete 1.5 L as urine. How much water is retained by the body?", 0.5, "L", prin("property", "Water balance", "Retained = intake - excreted."), "Subtract excreted from intake.", "2 - 1.5 = 0.5", "**0.5 L retained**"),
        num("olbio-u6-osmoregulation-q12", "core", "Of 1000 cm3 of filtrate formed, 800 cm3 is reabsorbed. Calculate the volume of urine produced.", 200, "cm^3", prin("property", "Urine volume", "Urine = filtrate - reabsorbed."), "Subtract reabsorbed from filtrate.", "1000 - 800 = 200", "**200 cm3 urine**"),
        num("olbio-u6-osmoregulation-q13", "challenge", "Blood water concentration rises from 50 to 55 units. Calculate the percentage increase.", 10, "%", prin("property", "Percentage change", "Percentage increase = change / original x 100."), "Compute change then percentage.", "(55 - 50) / 50 x 100 = 10", "**10% increase**"),
        open("olbio-u6-osmoregulation-q14", "core", 3, "Explain how ADH controls water balance in the body.", prin("property", "ADH control", "ADH adjusts water reabsorption in the kidney to match hydration."), [["When dehydrated, the pituitary releases ADH.", 1, "M"], ["ADH makes the kidney reabsorb more water.", 1, "M"], ["Less, more concentrated urine is produced, conserving water.", 1, "A"]], "ADH increases water reabsorption when the body is short of water, producing less concentrated-saving urine.", "Saying ADH produces more urine."),
        open("olbio-u6-osmoregulation-q15", "challenge", 4, "Describe the three stages of urine formation in the nephron.", prin("property", "Urine formation", "Ultrafiltration, selective reabsorption, then urine formation."), [["Ultrafiltration filters small molecules out of blood at the glomerulus.", 1, "M"], ["Selective reabsorption returns useful substances to the blood in the tubule.", 1, "M"], ["The remaining fluid contains urea and excess substances.", 1, "M"], ["This fluid becomes urine in the collecting duct.", 1, "A"]], "Blood is filtered, useful substances reabsorbed, and the remaining waste becomes urine.", "Omitting selective reabsorption."),
        struct("olbio-u6-osmoregulation-q16", "challenge", "A student investigates kidney function and water balance.", [["a", "Name the two main parts of the nephron involved in filtration and reabsorption.", 2], ["b", "Describe ultrafiltration.", 3], ["c", "Describe selective reabsorption.", 2], ["d", "State the effect of ADH on urine.", 2]], prin("property", "Nephron function", "Glomerulus filters; tubule reabsorbs; ADH adjusts water reabsorption."), [["a", "Glomerulus filters the blood.", 1, "M"], ["a", "Tubule (and collecting duct) reabsorbs and forms urine.", 1, "A"], ["b", "High pressure forces small molecules out of blood.", 1, "M"], ["b", "Small molecules enter Bowman's capsule as filtrate.", 1, "M"], ["b", "Cells and proteins remain in the blood.", 1, "A"], ["c", "Useful substances like glucose and water are reabsorbed.", 1, "M"], ["c", "This happens along the tubule back into blood.", 1, "A"], ["d", "ADH increases water reabsorption.", 1, "M"], ["d", "Result: less, more concentrated urine.", 1, "A"]], "(a) glomerulus + tubule (b) pressure filtration of small molecules (c) reabsorption of useful substances (d) ADH -> concentrated urine", "Saying proteins pass into the filtrate."),
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u6-homeostasis-2-notes",
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
