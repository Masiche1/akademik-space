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

export const lesson611: Lesson = {
  id: "cial-b-u6-lesson-6-1",
  code: "6-1",
  title: "Excretion and osmoregulation",
  goal: "I CAN describe kidney structure and explain how water balance is regulated.",
  standards: ["9700 Unit 11: excretion and homeostasis"],
  vocabulary: [
    {
      term: "Excretion",
      definition: "Removal of metabolic waste products from the body.",
    },
    {
      term: "Osmoregulation",
      definition: "Control of water and salt concentration in body fluids.",
    },
    {
      term: "Nephron",
      definition: "Functional unit of the kidney filtering blood.",
    },
    {
      term: "ADH",
      definition:
        "Antidiuretic hormone controlling water reabsorption in kidney.",
    },
    {
      term: "Ultrafiltration",
      definition:
        "Pressure-driven filtration of blood in the Bowman's capsule.",
    },
    {
      term: "Urea",
      definition:
        "Nitrogenous waste product of protein metabolism, excreted in urine.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u6-kidney",
      title: "Kidney structure and ultrafiltration",
      skill: "Describe nephron structure and the ultrafiltration process.",
      lesson: {
        sections: [
          {
            heading: "Kidney overview",
            body: "Kidneys filter blood, remove urea and excess water/salts, produce urine. Each kidney contains ~1 million nephrons. Blood enters via renal artery, leaves via renal vein; urine drains to ureter→bladder.",
          },
          {
            heading: "Nephron structure",
            body: "Bowman's capsule surrounds glomerulus (capillary knot). Proximal convoluted tubule → loop of Henle → distal convoluted tubule → collecting duct. Blood supply: afferent arteriole in, efferent arteriole out.",
          },
          {
            heading: "Ultrafiltration",
            body: "High pressure in glomerulus forces small molecules (water, glucose, urea, ions) through filter into Bowman's capsule. Large molecules (proteins, blood cells) stay in blood. Filtrate then processed along tubule.",
          },
        ],
        keyFormulas: [
          {
            name: "Kidney",
            statement:
              "Glomerulus filters→Bowman's capsule; tubule reabsorbs; collecting duct→urine.",
          },
        ],
        workedExample: {
          problem: "Why is ultrafiltration not selective?",
          solution:
            "It's pressure-driven — all small molecules pass regardless of need; selectivity comes later in tubule.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-kd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional unit of the kidney?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alveolus" },
              { id: "b", text: "Villus" },
              { id: "c", text: "Nephron" },
              { id: "d", text: "Neuron" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nephron",
                statement: "Functional unit of kidney.",
              },
            ],
            steps: [
              { reasoning: "Nephron = kidney unit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Nephron",
            commonErrors: ["Confusing with neuron."],
          },
        },
        {
          id: "cial-b-u6-kd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens during ultrafiltration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ultrafiltration",
                statement:
                  "High pressure forces small molecules through filter.",
              },
            ],
            steps: [
              {
                reasoning: "High pressure in glomerulus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small molecules pass; large stay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pressure-driven filtration of small molecules.",
            commonErrors: ["Calling it selective."],
          },
        },
        {
          id: "cial-b-u6-kd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the structure of a nephron and its blood supply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nephron",
                statement:
                  "Bowman's capsule→PCT→loop→DCT→collecting duct; afferent/efferent arterioles.",
              },
            ],
            steps: [
              {
                reasoning: "Bowman's capsule around glomerulus.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Tubule regions named.", marks: 1, markCode: "M" },
              {
                reasoning: "Afferent/efferent arterioles.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capsule→tubule→duct; afferent in, efferent out.",
            commonErrors: ["Missing blood supply detail."],
          },
        },
        {
          id: "cial-b-u6-kd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Kidney and ultrafiltration.",
          parts: [
            { label: "a", prompt: "Nephron = ?", marks: 1 },
            { label: "b", prompt: "What is ultrafiltration?", marks: 2 },
            {
              label: "c",
              prompt: "Nephron structure and blood supply?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Why is ultrafiltration non-selective?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kidney",
                statement: "Nephron+ultrafiltration+structure+selectivity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Functional unit.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Pressure filtration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Small molecules pass.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bowman's capsule.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Tubule regions.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Arterioles.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Pressure-driven.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "All small molecules pass.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Selectivity later.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) nephron (b) pressure filtration (c) capsule+tubule+arterioles (d) non-selective",
          },
        },
        mcqQ({
          id: "cial-b-u6-kd-q5", d: "foundation",
          s: "Which vessel delivers blood directly to the glomerulus?",
          c: ["Afferent arteriole", "Efferent arteriole", "Renal vein", "Ureter"], a: 0,
          p: ["Afferent arteriole", "Blood enters the glomerulus through the afferent arteriole."],
          r: "The afferent arteriole carries blood into the glomerulus.",
          f: "**(a)** Afferent arteriole", e: "Confusing afferent with efferent.",
        }),
        mcqQ({
          id: "cial-b-u6-kd-q6", d: "core",
          s: "Which molecules are most likely to pass through the glomerular filter during ultrafiltration?",
          c: ["Water, urea, glucose and ions", "Plasma proteins and red blood cells", "Large protein molecules only", "Blood cells and platelets"], a: 0,
          p: ["Ultrafiltration", "Small molecules pass; large molecules are retained."],
          r: "Small molecules pass the filter while cells and proteins remain in blood.",
          f: "**(a)** Water, urea, glucose and ions", e: "Selecting proteins or cells.",
        }),
        mcqQ({
          id: "cial-b-u6-kd-q7", d: "core",
          s: "Where is most glucose normally reabsorbed from the nephron filtrate?",
          c: ["Proximal convoluted tubule", "Collecting duct", "Loop of Henle", "Ureter"], a: 0,
          p: ["Proximal tubule", "The proximal convoluted tubule carries out most selective reabsorption."],
          r: "The proximal convoluted tubule reabsorbs most useful solutes including glucose.",
          f: "**(a)** Proximal convoluted tubule", e: "Choosing the collecting duct.",
        }),
        mcqQ({
          id: "cial-b-u6-kd-q8", d: "challenge",
          s: "Why do plasma proteins usually remain in the blood instead of entering the filtrate?",
          c: ["They are too large to pass through the filter", "They are converted to urea first", "They are pumped back before filtration", "They are broken down in Bowman's capsule"], a: 0,
          p: ["Filter size", "The glomerular filter retains large molecules such as proteins."],
          r: "Plasma proteins are too large for the pores in the glomerular filter.",
          f: "**(a)** They are too large to pass through the filter", e: "Thinking filtration removes every blood component.",
        }),
        mcqQ({
          id: "cial-b-u6-kd-q9", d: "foundation",
          s: "What is the glomerulus?",
          c: ["A knot of capillaries", "The urine storage region", "The final urine duct", "A kidney hormone"], a: 0,
          p: ["Glomerulus", "A capillary network inside Bowman's capsule."],
          r: "The glomerulus is a tuft of capillaries where blood is filtered.",
          f: "**(a)** A knot of capillaries", e: "Confusing it with the collecting duct.",
        }),
        mcqQ({
          id: "cial-b-u6-kd-q10", d: "challenge",
          s: "Which change would most directly increase the pressure driving ultrafiltration?",
          c: ["Constriction of the efferent arteriole", "Dilation of the afferent arteriole", "Relaxation of the collecting duct", "Decreased blood protein concentration"], a: 1,
          p: ["Filtration pressure", "Pressure in the glomerulus is generated by incoming blood flow."],
          r: "Increasing incoming flow or reducing outflow raises glomerular pressure; dilation of the afferent arteriole increases flow into the glomerulus.",
          f: "**(b)** Dilation of the afferent arteriole", e: "Choosing an effect unrelated to blood pressure in the glomerulus.",
        }),
        numQ({
          id: "cial-b-u6-kd-q11", d: "core",
          s: "The renal plasma flow is $600\\ \\mathrm{mL\\ min^{-1}}$ and the glomerular filtration rate is $120\\ \\mathrm{mL\\ min^{-1}}$. Calculate the filtration fraction.",
          parts: [["a", 0.2, "fraction"]],
          steps: [
            ["Filtration fraction = GFR divided by renal plasma flow.", 1, "M"],
            ["$120 / 600 = 0.2$.", 1, "A"],
          ],
          p: ["Filtration fraction", "GFR divided by renal plasma flow."],
          f: "$0.2$", e: "Inverting the ratio.",
        }),
        numQ({
          id: "cial-b-u6-kd-q12", d: "core",
          s: "A kidney contains $2.4$ million nephrons and $15\\%$ are non-functional. How many functional nephrons remain?",
          parts: [["a", 2040000, "nephrons"]],
          steps: [
            ["Non-functional nephrons = $15\\%$ of $2.4$ million = $360000$.", 1, "M"],
            ["Functional nephrons = $2400000 - 360000 = 2040000$.", 1, "A"],
          ],
          p: ["Functional nephrons", "Subtract damaged nephrons from the total."],
          f: "$2040000$ nephrons", e: "Multiplying by $0.15$ instead of $0.85$.",
        }),
        numQ({
          id: "cial-b-u6-kd-q13", d: "challenge",
          s: "The kidneys filter $180\\ \\mathrm{L\\ day^{-1}}$ and produce $1.8\\ \\mathrm{L\\ day^{-1}}$ of urine. What percentage of filtered water is reabsorbed?",
          parts: [["a", 99, "%"]],
          steps: [
            ["Water reabsorbed = $180 - 1.8 = 178.2\\ \\mathrm{L}$.", 1, "M"],
            ["Percentage = $(178.2 / 180) \\times 100 = 99\\%$.", 1, "A"],
          ],
          p: ["Water reabsorption", "Reabsorbed water divided by filtered water."],
          f: "$99\\%$", e: "Using urine volume as the reabsorbed amount.",
        }),
        numQ({
          id: "cial-b-u6-kd-q14", d: "challenge",
          s: "The urine contains urea at $300\\ \\mathrm{mmol\\ L^{-1}}$ and a person produces $1.5\\ \\mathrm{L\\ day^{-1}}$ of urine. Calculate the daily urea excretion.",
          parts: [["a", 450, "mmol day^-1"]],
          steps: [
            ["Urea excreted = concentration multiplied by urine volume.", 1, "M"],
            ["$300 \\times 1.5 = 450\\ \\mathrm{mmol\\ day^{-1}}$.", 1, "A"],
          ],
          p: ["Urea excretion", "Concentration times volume."],
          f: "$450\\ \\mathrm{mmol\\ day^{-1}}$", e: "Dividing instead of multiplying.",
        }),
        numQ({
          id: "cial-b-u6-kd-q15", d: "challenge",
          s: "If the total glomerular filtration rate is $120\\ \\mathrm{mL\\ min^{-1}}$ across $1000000$ nephrons, calculate the filtration rate per nephron in microlitres per minute.",
          parts: [["a", 0.12, "µL min^-1"]],
          steps: [
            ["Rate per nephron = $120 / 1000000 = 0.00012\\ \\mathrm{mL\\ min^{-1}}$.", 1, "M"],
            ["Convert to microlitres: $0.00012 \\times 1000 = 0.12$ µL/min.", 1, "A"],
          ],
          p: ["Filtration per nephron", "Total GFR divided by nephron number, then convert units."],
          f: "$0.12$ µL/min", e: "Forgetting the millilitre to microlitre conversion.",
        }),
        openQ({
          id: "cial-b-u6-kd-q16", d: "challenge",
          s: "Explain why selective reabsorption occurs mainly in the tubule rather than during ultrafiltration.",
          steps: [
            ["Ultrafiltration is driven by hydrostatic pressure and is non-selective.", 1, "M"],
            ["All small molecules pass into Bowman's capsule regardless of need.", 1, "M"],
            ["The tubule selectively reabsorbs useful substances such as glucose and ions.", 1, "M"],
            ["Waste products remain in the filtrate and continue towards urine formation.", 1, "A"],
          ],
          p: ["Selective reabsorption", "Pressure filtration is non-selective; tubule transport is selective."],
          f: "Ultrafiltration is non-selective; the tubule reabsorbs useful molecules selectively.",
          e: "Claiming Bowman's capsule chooses which molecules to filter.",
        }),
      ],
    },
    {
      id: "cial-b-u6-adh",
      title: "ADH and water balance",
      skill: "Explain how ADH regulates water reabsorption in the kidney.",
      lesson: {
        sections: [
          {
            heading: "Osmoregulation",
            body: "Body fluids must stay at ~300 mOsm/kg. Dehydration → blood osmotic pressure rises → hypothalamus detects → pituitary releases ADH → kidney reabsorbs more water → concentrated urine, less water loss.",
          },
          {
            heading: "ADH mechanism",
            body: "ADH makes collecting duct walls more permeable to water → more water reabsorbed back into blood → less urine, more concentrated. Low ADH → dilute urine, more water loss.",
          },
          {
            heading: "Negative feedback",
            body: "Water balance restored → osmotic pressure drops → ADH secretion stops → kidney reabsorbs less water. Classic negative feedback maintaining homeostasis.",
          },
        ],
        keyFormulas: [
          {
            name: "ADH",
            statement:
              "Dehydration→ADH→more water reabsorption→concentrated urine.",
          },
        ],
        workedExample: {
          problem: "What happens to urine after drinking lots of water?",
          solution:
            "Blood diluted → ADH drops → less water reabsorption → large volume of dilute urine.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ADH stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aldosterone hormone" },
              { id: "b", text: "Anti-diabetic hormone" },
              { id: "c", text: "Antidiuretic enzyme" },
              { id: "d", text: "Antidiuretic hormone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ADH",
                statement:
                  "Antidiuretic hormone — controls water reabsorption.",
              },
            ],
            steps: [
              {
                reasoning: "ADH = antidiuretic hormone.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Antidiuretic hormone",
            commonErrors: ["Thinking it's an enzyme."],
          },
        },
        {
          id: "cial-b-u6-ad-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does ADH affect urine production?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ADH action",
                statement:
                  "More ADH→more water reabsorption→less concentrated urine.",
              },
            ],
            steps: [
              {
                reasoning: "ADH increases water reabsorption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Results in concentrated urine.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High ADH→concentrated urine; low→dilute.",
            commonErrors: ["Reversing the effect."],
          },
        },
        {
          id: "cial-b-u6-ad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the negative feedback loop for water balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative feedback",
                statement:
                  "Osmotic pressure→ADH→water reabsorption→balance restored→ADH stops.",
              },
            ],
            steps: [
              {
                reasoning: "Osmotic pressure detected.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "ADH released/adjusted.", marks: 1, markCode: "M" },
              { reasoning: "Water balance restored.", marks: 1, markCode: "M" },
              { reasoning: "Feedback stops ADH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Osmotic pressure→ADH→reabsorption→balance→stop.",
            commonErrors: ["Missing the feedback element."],
          },
        },
        {
          id: "cial-b-u6-ad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "ADH and osmoregulation.",
          parts: [
            { label: "a", prompt: "ADH = ?", marks: 1 },
            { label: "b", prompt: "How does ADH affect urine?", marks: 2 },
            { label: "c", prompt: "Negative feedback loop?", marks: 3 },
            {
              label: "d",
              prompt: "What happens after drinking water?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ADH",
                statement: "Hormone+urine effect+feedback+response.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Antidiuretic hormone.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "More reabsorption→concentrated.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Less→dilute.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Osmotic pressure detected.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "ADH→reabsorption.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Restored→stops.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Blood diluted.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "ADH drops.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Dilute urine produced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) antidiuretic (b) reabsorption→concentrated (c) feedback loop (d) dilute urine",
          },
        },
        mcqQ({
          id: "cial-b-u6-ad-q5", d: "foundation",
          s: "Where is ADH released into the blood from?",
          c: ["Posterior pituitary", "Anterior pituitary", "Pancreas", "Adrenal cortex"], a: 0,
          p: ["ADH release", "ADH is released by the posterior pituitary into the blood."],
          r: "ADH is released from the posterior pituitary.",
          f: "**(a)** Posterior pituitary", e: "Confusing pituitary regions or other glands.",
        }),
        mcqQ({
          id: "cial-b-u6-ad-q6", d: "core",
          s: "When blood osmotic pressure rises, what is the immediate effect on the collecting duct?",
          c: ["It becomes more permeable to water", "It becomes less permeable to water", "It stops producing urea", "It dilates the afferent arteriole"], a: 0,
          p: ["ADH action", "ADH increases collecting-duct permeability to water."],
          r: "Rising osmotic pressure triggers ADH, making the collecting duct more permeable to water.",
          f: "**(a)** It becomes more permeable to water", e: "Reversing the permeability response.",
        }),
        mcqQ({
          id: "cial-b-u6-ad-q7", d: "core",
          s: "After drinking a large volume of water, which urine change is expected?",
          c: ["A larger volume of dilute urine", "A smaller volume of concentrated urine", "No change in urine", "Urine containing more urea only"], a: 0,
          p: ["Water loading", "Low ADH reduces water reabsorption and produces dilute urine."],
          r: "Water loading lowers ADH, so less water is reabsorbed and urine volume increases.",
          f: "**(a)** A larger volume of dilute urine", e: "Predicting concentrated urine after water intake.",
        }),
        mcqQ({
          id: "cial-b-u6-ad-q8", d: "challenge",
          s: "Why is ADH secretion described as negative feedback?",
          c: ["Its effect restores osmotic balance and then reduces its own secretion", "It always increases until dehydration stops", "It directly destroys excess water", "It acts only after the kidneys fail"], a: 0,
          p: ["Negative feedback", "The response opposes the stimulus and switches the signal off."],
          r: "ADH restores water balance; once osmotic pressure falls, ADH secretion decreases.",
          f: "**(a)** Its effect restores osmotic balance and then reduces its own secretion", e: "Describing positive feedback instead.",
        }),
        mcqQ({
          id: "cial-b-u6-ad-q9", d: "foundation",
          s: "Which condition most directly stimulates ADH release?",
          c: ["High blood osmotic pressure", "Low blood glucose", "Low body temperature", "High blood oxygen"], a: 0,
          p: ["Osmotic stimulus", "Dehydration raises blood osmotic pressure and stimulates ADH."],
          r: "High blood osmotic pressure is the key stimulus for ADH release.",
          f: "**(a)** High blood osmotic pressure", e: "Choosing a stimulus for another hormone.",
        }),
        mcqQ({
          id: "cial-b-u6-ad-q10", d: "core",
          s: "If ADH secretion is very low, what happens to urine?",
          c: ["It becomes dilute and voluminous", "It becomes concentrated and scanty", "It contains no urea", "It stops completely"], a: 0,
          p: ["Low ADH", "Low ADH means less water reabsorption and more dilute urine."],
          r: "Low ADH reduces collecting-duct water permeability, so urine is dilute and large in volume.",
          f: "**(a)** It becomes dilute and voluminous", e: "Reversing the effect of low ADH.",
        }),
        numQ({
          id: "cial-b-u6-ad-q11", d: "core",
          s: "Plasma osmotic pressure is $300\\ \\mathrm{mOsm\\ kg^{-1}}$ and the urine is $900\\ \\mathrm{mOsm\\ kg^{-1}}$. Calculate the urine concentration factor relative to plasma.",
          parts: [["a", 3, "times"]],
          steps: [
            ["Concentration factor = urine osmolarity divided by plasma osmolarity.", 1, "M"],
            ["$900 / 300 = 3$.", 1, "A"],
          ],
          p: ["Concentration factor", "Urine osmolarity divided by plasma osmolarity."],
          f: "$3$ times more concentrated", e: "Inverting the ratio.",
        }),
        numQ({
          id: "cial-b-u6-ad-q12", d: "core",
          s: "A person filters $180\\ \\mathrm{L\\ day^{-1}}$ of water and excretes $1.2\\ \\mathrm{L\\ day^{-1}}$ in urine. How many litres are reabsorbed each day?",
          parts: [["a", 178.8, "L day^-1"]],
          steps: [
            ["Reabsorbed water = filtered water minus urine volume.", 1, "M"],
            ["$180 - 1.2 = 178.8\\ \\mathrm{L\\ day^{-1}}$.", 1, "A"],
          ],
          p: ["Reabsorbed water", "Filtered volume minus urine volume."],
          f: "$178.8\\ \\mathrm{L\\ day^{-1}}$", e: "Subtracting urine from total body water instead of filtrate.",
        }),
        numQ({
          id: "cial-b-u6-ad-q13", d: "challenge",
          s: "A kidney excretes $600\\ \\mathrm{mOsm\\ day^{-1}}$ in urine. At plasma osmolarity $300\\ \\mathrm{mOsm\\ L^{-1}}$, the obligatory urine volume is $2.0\\ \\mathrm{L}$. After ADH acts, urine osmolarity rises to $900\\ \\mathrm{mOsm\\ L^{-1}}$ with unchanged solute excretion. Calculate the new urine volume.",
          parts: [["a", 0.667, "L day^-1"]],
          steps: [
            ["Solute excretion stays constant at $600\\ \\mathrm{mOsm\\ day^{-1}}$.", 1, "M"],
            ["Volume = $600 / 900 = 0.667\\ \\mathrm{L\\ day^{-1}}$.", 1, "A"],
          ],
          p: ["Urine volume", "Solute excretion divided by urine osmolarity."],
          f: "$0.667\\ \\mathrm{L\\ day^{-1}}$", e: "Keeping the original volume unchanged.",
        }),
        numQ({
          id: "cial-b-u6-ad-q14", d: "challenge",
          s: "The osmotic set point is $300\\ \\mathrm{mOsm\\ kg^{-1}}$ and measured blood osmolarity is $360\\ \\mathrm{mOsm\\ kg^{-1}}$. By what percentage is the measured value above the set point?",
          parts: [["a", 20, "%"]],
          steps: [
            ["Deviation = $360 - 300 = 60\\ \\mathrm{mOsm\\ kg^{-1}}$.", 1, "M"],
            ["Percentage = $(60 / 300) \\times 100 = 20\\%$.", 1, "A"],
          ],
          p: ["Deviation percentage", "Deviation divided by set point."],
          f: "$20\\%$ above the set point", e: "Dividing by $360$ instead of the set point.",
        }),
        numQ({
          id: "cial-b-u6-ad-q15", d: "core",
          s: "One hundred units of water enter the collecting duct and $8$ units remain in the urine. What percentage of the water is reabsorbed in the collecting duct?",
          parts: [["a", 92, "%"]],
          steps: [
            ["Reabsorbed water = $100 - 8 = 92$ units.", 1, "M"],
            ["Percentage = $92 / 100 \\times 100 = 92\\%$.", 1, "A"],
          ],
          p: ["Collecting-duct reabsorption", "Water removed divided by water entering."],
          f: "$92\\%$", e: "Reporting the $8\\%$ left in urine.",
        }),
        openQ({
          id: "cial-b-u6-ad-q16", d: "challenge",
          s: "Explain how ADH maintains water balance during prolonged dehydration.",
          steps: [
            ["Dehydration raises blood osmotic pressure.", 1, "M"],
            ["The hypothalamus stimulates ADH release from the posterior pituitary.", 1, "M"],
            ["ADH increases collecting-duct permeability so more water is reabsorbed.", 1, "M"],
            ["Urine becomes concentrated and water loss falls until balance is restored.", 1, "A"],
          ],
          p: ["ADH feedback", "Osmotic stimulus, ADH release, water reabsorption and restoration."],
          f: "High osmotic pressure → ADH → increased water reabsorption → concentrated urine.",
          e: "Omitting the feedback or the target tissue.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u6-excretion-notes",
      title: "Excretion and osmoregulation — revision notes",
      summary: "Kidney structure, ultrafiltration and ADH regulation.",
      sections: [
        {
          heading: "Kidney",
          body: "Nephron: Bowman's capsule→PCT→loop of Henle→DCT→collecting duct. Ultrafiltration: high pressure filters small molecules; large stay.",
        },
        {
          heading: "ADH",
          body: "Dehydration→osmotic pressure↑→ADH→more water reabsorption→concentrated urine. Negative feedback restores balance.",
        },
        {
          heading: "Exam checklist",
          body: "Can you trace nephron? Explain ultrafiltration? Describe ADH feedback? Predict urine concentration?",
        },
      ],
    },
  ],
};
