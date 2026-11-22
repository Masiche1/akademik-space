import type { Lesson, MarkPrinciple, MarkStep, Question } from "../../../types.ts";

type Difficulty = Question["difficulty"];
type PrincipleKind = MarkPrinciple["kind"];
type StepCode = MarkStep["markCode"];

const makePrinciple = (
  kind: PrincipleKind,
  name: string,
  statement: string,
): MarkPrinciple => ({ kind, name, statement });

const makeSteps = (steps: [string, number, StepCode][]): MarkStep[] =>
  steps.map(([reasoning, marks, markCode]) => ({ reasoning, marks, markCode }));

const makeNumericParts = (parts: [string, number, string?][]) =>
  parts.map(([label, answer, unit]) => ({
    label,
    answer,
    ...(unit === undefined ? {} : { unit }),
  }));

type MarkedQuestion = {
  id: string;
  d: Difficulty;
  s: string;
  steps: [string, number, StepCode][];
  p: [string, string];
  f: string;
  k?: PrincipleKind;
  e?: string;
};

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

const mcqQ = (q: {
  id: string;
  d: Difficulty;
  s: string;
  c: [string, string, string, string];
  a: number;
  p: [string, string];
  r: string;
  f: string;
  k?: PrincipleKind;
  e?: string;
}): Question => {
  const __o = mcqOrder(q.c, q.id);
  const __c = __o ? __o.map((i) => q.c[i]) : q.c;
  const __a = __o ? __o.indexOf(q.a) : q.a;
  return {
  id: q.id,
  difficulty: q.d,
  totalMarks: 1,
  stem: q.s,
  response: {
    type: "mcq",
    choices: __c.map((text, index) => ({
      id: String.fromCharCode(97 + index),
      text,
    })),
    correctChoiceId: String.fromCharCode(97 + __a),
  },
  markscheme: {
    principles: [makePrinciple(q.k ?? "definition", q.p[0], q.p[1])],
    steps: [{ reasoning: q.r, marks: 1, markCode: "A" }],
    finalAnswer: q.f,
    ...(q.e ? { commonErrors: [q.e] } : {}),
  },
  };
};

const numQ = (
  q: MarkedQuestion & { parts: [string, number, string?][] },
): Question => ({
  id: q.id,
  difficulty: q.d,
  totalMarks: q.steps.reduce((sum, [, marks]) => sum + marks, 0),
  stem: q.s,
  response: { type: "numeric", parts: makeNumericParts(q.parts) },
  markscheme: {
    principles: [makePrinciple(q.k ?? "skill", q.p[0], q.p[1])],
    steps: makeSteps(q.steps),
    finalAnswer: q.f,
    ...(q.e ? { commonErrors: [q.e] } : {}),
  },
});

const openQ = (q: MarkedQuestion): Question => ({
  id: q.id,
  difficulty: q.d,
  totalMarks: q.steps.reduce((sum, [, marks]) => sum + marks, 0),
  stem: q.s,
  response: { type: "open" },
  markscheme: {
    principles: [makePrinciple(q.k ?? "definition", q.p[0], q.p[1])],
    steps: makeSteps(q.steps),
    finalAnswer: q.f,
    ...(q.e ? { commonErrors: [q.e] } : {}),
  },
});

export const lesson612: Lesson = {
  id: "cial-b-u6-lesson-6-2",
  code: "6-2",
  title: "Blood glucose and temperature regulation",
  goal: "I CAN explain homeostatic control of blood glucose and body temperature.",
  standards: ["9700 Unit 11: homeostasis"],
  vocabulary: [
    {
      term: "Homeostasis",
      definition: "Maintenance of stable internal conditions.",
    },
    {
      term: "Insulin",
      definition:
        "Hormone lowering blood glucose by promoting glycogen storage.",
    },
    {
      term: "Glucagon",
      definition:
        "Hormone raising blood glucose by promoting glycogen breakdown.",
    },
    {
      term: "Glycogen",
      definition: "Storage carbohydrate in liver and muscles.",
    },
    {
      term: "Hypothalamus",
      definition:
        "Brain region detecting temperature and controlling thermoregulation.",
    },
    {
      term: "Vasodilation",
      definition: "Widening of blood vessels increasing heat loss.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u6-glucose",
      title: "Blood glucose regulation",
      skill: "Explain insulin and glucagon control of blood glucose.",
      lesson: {
        sections: [
          {
            heading: "Glucose balance",
            body: "Blood glucose must stay ~4-6 mmol/L. Too high → insulin from pancreas → glucose→glycogen in liver/muscle + cellular uptake. Too low → glucagon → glycogen→glucose.",
          },
          {
            heading: "Insulin and glucagon",
            body: "Insulin (beta cells): lowers glucose — promotes glycogen synthesis and cellular uptake. Glucagon (alpha cells): raises glucose — promotes glycogen breakdown and gluconeogenesis. Opposing hormones = negative feedback.",
          },
          {
            heading: "Diabetes",
            body: "Type 1: autoimmune destruction of insulin-producing cells — needs insulin injections. Type 2: insulin resistance — managed with diet/medication. Both cause hyperglycaemia.",
          },
        ],
        keyFormulas: [
          {
            name: "Glucose",
            statement: "High glucose→insulin→storage; low→glucagon→release.",
          },
        ],
        workedExample: {
          problem: "What happens to blood glucose after a sugary meal?",
          solution:
            "Glucose rises → insulin released → glucose taken up by cells and stored as glycogen → levels return to normal.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-gl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thyroxine" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insulin",
                statement: "Lowers blood glucose.",
              },
            ],
            steps: [
              {
                reasoning: "Insulin = lowers glucose.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Insulin",
            commonErrors: ["Confusing with glucagon."],
          },
        },
        {
          id: "cial-b-u6-gl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does insulin lower blood glucose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insulin action",
                statement:
                  "Promotes cellular glucose uptake and glycogen synthesis.",
              },
            ],
            steps: [
              {
                reasoning: "Increases cellular uptake.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Promotes glycogen storage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Uptake into cells + glycogen storage.",
            commonErrors: ["Saying it destroys glucose."],
          },
        },
        {
          id: "cial-b-u6-gl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Type 1 and Type 2 diabetes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diabetes",
                statement: "T1: no insulin; T2: insulin resistance.",
              },
            ],
            steps: [
              {
                reasoning: "Type 1 = autoimmune, no insulin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Type 2 = insulin resistance.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both → hyperglycaemia.", marks: 1, markCode: "M" },
              { reasoning: "Treatments differ.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "T1=no insulin (injections); T2=resistance (diet/meds).",
            commonErrors: ["Same cause for both."],
          },
        },
        {
          id: "cial-b-u6-gl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Blood glucose regulation.",
          parts: [
            { label: "a", prompt: "Hormone lowering glucose?", marks: 1 },
            { label: "b", prompt: "How does insulin work?", marks: 2 },
            { label: "c", prompt: "Type 1 vs Type 2 diabetes?", marks: 3 },
            {
              label: "d",
              prompt: "What happens when glucose is low?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glucose",
                statement: "Insulin+glucagon+diabetes+low glucose response.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Insulin.", marks: 1, markCode: "B" },
              {
                part: "b",
                reasoning: "Cellular uptake.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Glycogen storage.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "T1=autoimmune/no insulin.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "T2=resistance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both→hyperglycaemia.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Glucagon released.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Glycogen→glucose.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Glucose restored.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) insulin (b) uptake+storage (c) T1 vs T2 (d) glucagon→release",
          },
        },
        mcqQ({
          id: "cial-b-u6-gl-q5", d: "foundation",
          s: "Which pancreatic cells secrete insulin?",
          c: ["Beta cells", "Alpha cells", "Delta cells", "Acinar cells"], a: 0,
          p: ["Insulin secretion", "Beta cells of the pancreatic islets secrete insulin."],
          r: "Insulin is secreted by beta cells in the islets of Langerhans.",
          f: "**(a)** Beta cells", e: "Confusing beta with alpha cells.",
        }),
        mcqQ({
          id: "cial-b-u6-gl-q6", d: "core",
          s: "What is the main action of glucagon on blood glucose?",
          c: ["It promotes glycogen breakdown and raises glucose", "It promotes glycogen storage and lowers glucose", "It increases insulin secretion directly", "It blocks cellular respiration"], a: 0,
          p: ["Glucagon", "Glucagon raises blood glucose by releasing stored carbohydrate."],
          r: "Glucagon stimulates glycogen breakdown, increasing blood glucose.",
          f: "**(a)** It promotes glycogen breakdown and raises glucose", e: "Describing insulin's action instead.",
        }),
        mcqQ({
          id: "cial-b-u6-gl-q7", d: "challenge",
          s: "After a carbohydrate-rich meal, which sequence best describes blood glucose control?",
          c: ["Glucose rises → insulin released → uptake and glycogen storage", "Glucose falls → glucagon released → glycogen breakdown", "Glucose rises → glucagon released → more storage", "Insulin falls → glucose is excreted unchanged"], a: 0,
          p: ["Post-meal response", "High glucose stimulates insulin, which promotes uptake and storage."],
          r: "A meal raises blood glucose; insulin then promotes cellular uptake and glycogen synthesis.",
          f: "**(a)** Glucose rises → insulin released → uptake and glycogen storage", e: "Using glucagon for a high-glucose state.",
        }),
        mcqQ({
          id: "cial-b-u6-gl-q8", d: "core",
          s: "What is the key difference between Type 1 and Type 2 diabetes?",
          c: ["Type 1 lacks insulin production; Type 2 involves insulin resistance", "Type 1 is caused by diet only; Type 2 is autoimmune", "Type 1 needs no treatment; Type 2 always needs insulin", "Both are caused by identical mechanisms"], a: 0,
          p: ["Diabetes types", "Type 1 is autoimmune insulin deficiency; Type 2 is insulin resistance."],
          r: "Type 1 diabetes results from loss of insulin-producing cells, whereas Type 2 involves reduced insulin effectiveness.",
          f: "**(a)** Type 1 lacks insulin production; Type 2 involves insulin resistance", e: "Swapping the causes of the two types.",
        }),
        mcqQ({
          id: "cial-b-u6-gl-q9", d: "foundation",
          s: "What is glycogen?",
          c: ["A storage carbohydrate in liver and muscle", "A transport protein in blood", "A digestive enzyme", "A type of fibre"], a: 0,
          p: ["Glycogen", "Glycogen is the animal storage polysaccharide for glucose."],
          r: "Glycogen stores glucose in liver and muscle cells.",
          f: "**(a)** A storage carbohydrate in liver and muscle", e: "Confusing it with starch or cellulose.",
        }),
        mcqQ({
          id: "cial-b-u6-gl-q10", d: "challenge",
          s: "Why is Type 2 diabetes described as insulin resistance rather than simply insulin absence?",
          c: ["Cells respond less effectively to insulin even though it is produced", "The pancreas never makes insulin", "Insulin is destroyed before entering blood", "Glucose cannot be filtered by kidneys"], a: 0,
          p: ["Insulin resistance", "Target cells respond less strongly to insulin."],
          r: "In Type 2 diabetes insulin may be present, but cells respond less effectively.",
          f: "**(a)** Cells respond less effectively to insulin even though it is produced", e: "Treating it as identical to Type 1.",
        }),
        numQ({
          id: "cial-b-u6-gl-q11", d: "core",
          s: "Blood glucose rises from $4.0$ to $9.0\\ \\mathrm{mmol\\ L^{-1}}$ after a meal. By how much does it increase?",
          parts: [["a", 5, "mmol L^-1"]],
          steps: [
            ["Increase = final concentration minus initial concentration.", 1, "M"],
            ["$9.0 - 4.0 = 5.0\\ \\mathrm{mmol\\ L^{-1}}$.", 1, "A"],
          ],
          p: ["Glucose increase", "Subtract initial from final concentration."],
          f: "$5.0\\ \\mathrm{mmol\\ L^{-1}}$", e: "Adding the two concentrations.",
        }),
        numQ({
          id: "cial-b-u6-gl-q12", d: "core",
          s: "The liver stores $100\\ \\mathrm{mmol}$ of glycogen and glucagon stimulates release of $60\\%$ of it. How much glucose is released?",
          parts: [["a", 60, "mmol"]],
          steps: [
            ["Released glucose = $60\\%$ of $100\\ \\mathrm{mmol}$.", 1, "M"],
            ["$0.60 \\times 100 = 60\\ \\mathrm{mmol}$.", 1, "A"],
          ],
          p: ["Glycogen release", "Percentage of stored glycogen converted to glucose."],
          f: "$60\\ \\mathrm{mmol}$", e: "Using $60$ as a whole number of mmol without percentage.",
        }),
        numQ({
          id: "cial-b-u6-gl-q13", d: "challenge",
          s: "A patient's normal fasting glucose is $5.0\\ \\mathrm{mmol\\ L^{-1}}$. After treatment the reading is $8.0\\ \\mathrm{mmol\\ L^{-1}}$. By what percentage is this above normal?",
          parts: [["a", 60, "%"]],
          steps: [
            ["Deviation = $8.0 - 5.0 = 3.0\\ \\mathrm{mmol\\ L^{-1}}$.", 1, "M"],
            ["Percentage = $(3.0 / 5.0) \\times 100 = 60\\%$.", 1, "A"],
          ],
          p: ["Percentage above normal", "Deviation divided by normal value."],
          f: "$60\\%$ above normal", e: "Dividing by $8.0$ instead of $5.0$.",
        }),
        numQ({
          id: "cial-b-u6-gl-q14", d: "challenge",
          s: "In a clinic cohort, $25\\%$ of $400$ patients with diabetes have Type 1 diabetes. How many patients have Type 1 diabetes?",
          parts: [["a", 100, "patients"]],
          steps: [
            ["Type 1 patients = $25\\%$ of $400$.", 1, "M"],
            ["$0.25 \\times 400 = 100$ patients.", 1, "A"],
          ],
          p: ["Type 1 count", "Percentage of cohort."],
          f: "$100$ patients", e: "Finding the Type 2 count instead.",
        }),
        numQ({
          id: "cial-b-u6-gl-q15", d: "challenge",
          s: "A tissue culture contains $2000$ cells. Insulin treatment increases glucose uptake by $40\\%$. If the untreated cells take up $500$ µmol of glucose, what is the uptake after treatment?",
          parts: [["a", 700, "µmol"]],
          steps: [
            ["Increase = $40\\%$ of $500 = 200$ µmol.", 1, "M"],
            ["New uptake = $500 + 200 = 700$ µmol.", 1, "A"],
          ],
          p: ["Glucose uptake", "Apply percentage increase to baseline uptake."],
          f: "$700$ µmol", e: "Multiplying the total by $0.4$ only.",
        }),
        openQ({
          id: "cial-b-u6-gl-q16", d: "challenge",
          s: "Explain how insulin and glucagon restore blood glucose balance after a meal followed by fasting.",
          steps: [
            ["After a meal, blood glucose rises.", 1, "M"],
            ["Insulin promotes cellular uptake and glycogen storage, lowering glucose.", 1, "M"],
            ["During fasting, falling glucose stimulates glucagon.", 1, "M"],
            ["Glucagon promotes glycogen breakdown, returning glucose towards normal.", 1, "A"],
          ],
          p: ["Glucose homeostasis", "Insulin lowers high glucose; glucagon raises low glucose."],
          f: "High glucose → insulin → storage; low glucose → glucagon → release.",
          e: "Giving only one hormone or reversing their effects.",
        }),
      ],
    },
    {
      id: "cial-b-u6-temperature",
      title: "Temperature regulation",
      skill: "Describe thermoregulation mechanisms in humans.",
      lesson: {
        sections: [
          {
            heading: "Thermoregulation",
            body: "Core temperature must stay ~37°C. Hypothalamus acts as thermostat detecting blood temperature and skin receptors.",
          },
          {
            heading: "Cooling mechanisms",
            body: "Too hot → vasodilation (more blood to skin surface) + sweating (evaporative cooling) + reduced metabolic rate. Hair lies flat.",
          },
          {
            heading: "Warming mechanisms",
            body: "Too cold → vasoconstriction (less blood to skin) + shivering (muscle heat) + increased metabolic rate + hair erection (insulation). Brown fat in infants.",
          },
        ],
        keyFormulas: [
          {
            name: "Thermoregulation",
            statement:
              "Hot→vasodilation+sweating; cold→vasoconstriction+shivering.",
          },
        ],
        workedExample: {
          problem: "Why do we shiver when cold?",
          solution:
            "Shivering = rapid muscle contractions generating heat to raise body temperature.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-tp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ controls body temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Liver" },
              { id: "b", text: "Hypothalamus" },
              { id: "c", text: "Heart" },
              { id: "d", text: "Kidney" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothalamus",
                statement: "Thermoregulatory centre in brain.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothalamus = thermostat.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Hypothalamus",
            commonErrors: ["Saying liver or kidney."],
          },
        },
        {
          id: "cial-b-u6-tp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does sweating cool the body?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sweating",
                statement:
                  "Evaporative cooling — sweat evaporates taking heat.",
              },
            ],
            steps: [
              { reasoning: "Evaporation takes heat.", marks: 1, markCode: "M" },
              { reasoning: "Cools skin surface.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporative cooling.",
            commonErrors: ["Saying sweat itself cools."],
          },
        },
        {
          id: "cial-b-u6-tp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the body's response to cold.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cold response",
                statement:
                  "Vasoconstriction+shivering+metabolic increase+hair erection.",
              },
            ],
            steps: [
              {
                reasoning: "Vasoconstriction reduces heat loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shivering generates heat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metabolic rate increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hair erection insulates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vasoconstriction+shivering+metabolic increase+insulation.",
            commonErrors: ["Missing multiple mechanisms."],
          },
        },
        {
          id: "cial-b-u6-tp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Temperature regulation.",
          parts: [
            { label: "a", prompt: "Thermoregulatory organ?", marks: 1 },
            { label: "b", prompt: "How does sweating cool?", marks: 2 },
            { label: "c", prompt: "Cold response mechanisms?", marks: 3 },
            { label: "d", prompt: "Hot response mechanisms?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thermoregulation",
                statement: "Hypothalamus+sweating+cold+hot responses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hypothalamus.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Evaporative cooling.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Heat loss.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Vasoconstriction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Shivering+metabolic increase.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Hair erection.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Vasodilation.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Sweating.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Reduced metabolism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) hypothalamus (b) evaporation (c) vasoconstrict+shiver (d) vasodilate+sweat",
          },
        },
        mcqQ({
          id: "cial-b-u6-tp-q5", d: "foundation",
          s: "What is the approximate normal core body temperature in humans?",
          c: ["$37\\ \\mathrm{°C}$", "$30\\ \\mathrm{°C}$", "$42\\ \\mathrm{°C}$", "$25\\ \\mathrm{°C}$"], a: 0,
          p: ["Core temperature", "Human core temperature is maintained near $37\\ \\mathrm{°C}$."],
          r: "Normal human core temperature is about $37\\ \\mathrm{°C}$.",
          f: "**(a)** $37\\ \\mathrm{°C}$", e: "Choosing environmental rather than body temperature.",
        }),
        mcqQ({
          id: "cial-b-u6-tp-q6", d: "core",
          s: "What is the main effect of vasodilation during heat exposure?",
          c: ["More blood flows near the skin surface to lose heat", "Less blood flows to the skin", "Muscle contractions increase", "Sweat production stops"], a: 0,
          p: ["Vasodilation", "Vasodilation increases heat loss through the skin."],
          r: "Vasodilation brings warm blood closer to the skin surface, increasing heat loss.",
          f: "**(a)** More blood flows near the skin surface to lose heat", e: "Confusing vasodilation with vasoconstriction.",
        }),
        mcqQ({
          id: "cial-b-u6-tp-q7", d: "challenge",
          s: "Why does sweating cool the body most effectively when the sweat evaporates?",
          c: ["Evaporation transfers heat energy from the skin", "Sweat blocks heat production", "Water adds insulation to the skin", "Evaporation raises metabolic rate"], a: 0,
          p: ["Evaporative cooling", "Changing liquid sweat to vapour removes heat energy."],
          r: "Evaporation absorbs latent heat from the skin, lowering temperature.",
          f: "**(a)** Evaporation transfers heat energy from the skin", e: "Thinking the sweat liquid itself cools.",
        }),
        mcqQ({
          id: "cial-b-u6-tp-q8", d: "core",
          s: "Which response helps conserve heat when the body is cold?",
          c: ["Vasoconstriction of skin arterioles", "Vasodilation of skin arterioles", "Increased sweating", "Reduced hair erection"], a: 0,
          p: ["Cold response", "Vasoconstriction reduces blood flow to the skin surface."],
          r: "Vasoconstriction reduces warm blood flow near the skin and conserves heat.",
          f: "**(a)** Vasoconstriction of skin arterioles", e: "Choosing a heat-loss mechanism.",
        }),
        mcqQ({
          id: "cial-b-u6-tp-q9", d: "foundation",
          s: "Which structure acts as the body's thermoregulatory centre?",
          c: ["Hypothalamus", "Medulla", "Cerebellum", "Pituitary gland"], a: 0,
          p: ["Thermoregulatory centre", "The hypothalamus coordinates temperature responses."],
          r: "The hypothalamus detects temperature and coordinates thermoregulation.",
          f: "**(a)** Hypothalamus", e: "Naming another brain region or gland.",
        }),
        mcqQ({
          id: "cial-b-u6-tp-q10", d: "challenge",
          s: "Why does shivering raise body temperature?",
          c: ["Rapid muscle contractions release heat during respiration", "It increases sweat evaporation", "It dilates blood vessels at the skin", "It slows the heartbeat"], a: 0,
          p: ["Shivering", "Muscle contraction increases respiration and heat production."],
          r: "Shivering is involuntary muscle contraction that increases metabolic heat production.",
          f: "**(a)** Rapid muscle contractions release heat during respiration", e: "Attributing warming to heat loss mechanisms.",
        }),
        numQ({
          id: "cial-b-u6-tp-q11", d: "foundation",
          s: "Core temperature falls from $37.0\\ \\mathrm{°C}$ to $35.5\\ \\mathrm{°C}$. What is the temperature change?",
          parts: [["a", -1.5, "°C"]],
          steps: [
            ["Change = final temperature minus initial temperature.", 1, "M"],
            ["$35.5 - 37.0 = -1.5\\ \\mathrm{°C}$.", 1, "A"],
          ],
          p: ["Temperature change", "Subtract initial from final temperature."],
          f: "$-1.5\\ \\mathrm{°C}$", e: "Ignoring the direction of change.",
        }),
        numQ({
          id: "cial-b-u6-tp-q12", d: "core",
          s: "A resting person produces $300\\ \\mathrm{kJ\\ h^{-1}}$ of heat. If $270\\ \\mathrm{kJ\\ h^{-1}}$ is lost through the skin and $30\\ \\mathrm{kJ\\ h^{-1}}$ through other routes, what percentage is lost through the skin?",
          parts: [["a", 90, "%"]],
          steps: [
            ["Skin loss percentage = skin loss divided by total production.", 1, "M"],
            ["$(270 / 300) \\times 100 = 90\\%$.", 1, "A"],
          ],
          p: ["Skin heat loss", "Skin loss as a percentage of total heat production."],
          f: "$90\\%$ through the skin", e: "Using $30\\ \\mathrm{kJ}$ as the skin loss.",
        }),
        numQ({
          id: "cial-b-u6-tp-q13", d: "core",
          s: "A person has a body mass of $70\\ \\mathrm{kg}$ and skin surface area of $1.8\\ \\mathrm{m^2}$. Calculate surface area per kilogram of body mass.",
          parts: [["a", 0.0257, "m^2 kg^-1"]],
          steps: [
            ["Surface area per mass = $1.8 / 70$.", 1, "M"],
            ["$1.8 / 70 = 0.0257\\ \\mathrm{m^2\\ kg^{-1}}$.", 1, "A"],
          ],
          p: ["Surface-area-to-mass ratio", "Skin area divided by body mass."],
          f: "$0.0257\\ \\mathrm{m^2\\ kg^{-1}}$", e: "Multiplying instead of dividing.",
        }),
        numQ({
          id: "cial-b-u6-tp-q14", d: "challenge",
          s: "Shivering raises heat production from $80\\ \\mathrm{W}$ to $240\\ \\mathrm{W}$. By what percentage does heat production increase?",
          parts: [["a", 200, "%"]],
          steps: [
            ["Increase = $240 - 80 = 160\\ \\mathrm{W}$.", 1, "M"],
            ["Percentage = $(160 / 80) \\times 100 = 200\\%$.", 1, "A"],
          ],
          p: ["Heat-production increase", "Increase divided by original value."],
          f: "$200\\%$ increase", e: "Reporting $240\\%$ of the original value as the increase.",
        }),
        numQ({
          id: "cial-b-u6-tp-q15", d: "challenge",
          s: "Evaporation of sweat removes heat using a latent heat value of $2.4\\ \\mathrm{kJ\\ g^{-1}}$. If $500\\ \\mathrm{g}$ of sweat evaporates, calculate the heat removed.",
          parts: [["a", 1200, "kJ"]],
          steps: [
            ["Heat removed = mass of sweat multiplied by latent heat.", 1, "M"],
            ["$500 \\times 2.4 = 1200\\ \\mathrm{kJ}$.", 1, "A"],
          ],
          p: ["Evaporative heat loss", "Mass times latent heat of vaporisation."],
          f: "$1200\\ \\mathrm{kJ}$", e: "Dividing by the latent heat instead of multiplying.",
        }),
        openQ({
          id: "cial-b-u6-tp-q16", d: "challenge",
          s: "Describe the coordinated responses when body temperature rises above the set point.",
          steps: [
            ["The hypothalamus detects the temperature rise.", 1, "M"],
            ["Vasodilation increases blood flow to the skin for heat loss.", 1, "M"],
            ["Sweating increases evaporative cooling.", 1, "M"],
            ["Metabolic rate and heat production fall until temperature returns to normal.", 1, "A"],
          ],
          p: ["Heat-loss response", "Detection followed by vasodilation, sweating and reduced heat production."],
          f: "Detect rise → vasodilation + sweating + lower metabolism → temperature restored.",
          e: "Listing cold responses instead of heat-loss mechanisms.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u6-homeostasis-notes",
      title: "Homeostasis — revision notes",
      summary: "Blood glucose and temperature regulation mechanisms.",
      sections: [
        {
          heading: "Glucose",
          body: "High→insulin (uptake+glycogen); low→glucagon (glycogen breakdown). T1=autoimmune; T2=resistance.",
        },
        {
          heading: "Temperature",
          body: "Hypothalamus controls. Hot→vasodilation+sweating. Cold→vasoconstriction+shivering+metabolic increase.",
        },
        {
          heading: "Exam checklist",
          body: "Can you compare insulin/glucagon? Explain diabetes types? Describe thermoregulation mechanisms?",
        },
      ],
    },
  ],
};
