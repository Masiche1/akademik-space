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

export const lesson713: Lesson = {
  id: "cial-b-u7-lesson-7-3",
  code: "7-3",
  title: "Reproduction",
  goal: "I CAN describe asexual and sexual reproduction in animals and plants and the menstrual cycle.",
  standards: ["9700 13: reproduction"],
  vocabulary: [
    { term: "Asexual reproduction", definition: "One parent; offspring genetically identical (clones)." },
    { term: "Sexual reproduction", definition: "Two parents; gametes fuse → genetically varied offspring." },
    { term: "Fertilisation", definition: "Fusion of male and female gametes to form zygote." },
    { term: "Pollination", definition: "Transfer of pollen to stigma — self or cross." },
    { term: "Menstrual cycle", definition: "~28-day cycle of hormonal and uterine changes in humans." },
    { term: "Implantation", definition: "Embedding of blastocyst in uterine lining." },
  ],
  concepts: [
    {
      id: "cial-b-u7-repro-animal",
      title: "Animal reproduction",
      skill: "Describe sexual reproduction, gametes and the menstrual cycle.",
      lesson: {
        sections: [
          {
            heading: "Gametes and fertilisation",
            body: "Sexual reproduction: meiosis produces haploid gametes — sperm (male) and ovum (female). Fertilisation restores diploid zygote → embryo. Internal fertilisation (mammals) vs external (fish, amphibians). Asexual reproduction (budding, fission, parthenogenesis) gives clones — fast but no variation.",
          },
          {
            heading: "The menstrual cycle",
            body: "~28 days. Day 1: menstruation (uterine lining shed). FSH stimulates follicle → oestrogen → LH surge → ovulation (~day 14). Corpus luteum secretes progesterone → maintains lining. If no pregnancy: progesterone falls → menstruation. If fertilised: hCG maintains corpus luteum → implantation.",
          },
          {
            heading: "Pregnancy and birth",
            body: "Implantation ~day 7; placenta exchanges gases/nutrients/wastes between mother and fetus; umbilical cord links them. Parturition (birth) triggered by oxytocin/prostaglandins; lactation by prolactin/oxytocin.",
          },
        ],
        keyFormulas: [
          { name: "Cycle hormones", statement: "FSH→follicle, LH→ovulation, oestrogen/progesterone→lining" },
          { name: "Fertilisation", statement: "Sperm + ovum → diploid zygote" },
        ],
        workedExample: {
          problem: "Which hormone triggers ovulation and what does it do?",
          solution: "LH surge around day 14 triggers ovulation — follicle ruptures releasing ovum.",
        },
      },
      questions: [
        {
          id: "cial-b-u7-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between asexual and sexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asexual is slower; sexual is faster" },
              { id: "b", text: "Asexual: one parent, clones; sexual: two parents, variation" },
              { id: "c", text: "They are identical" },
              { id: "d", text: "Asexual needs gametes; sexual does not" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Reproduction", statement: "Asexual=clones; sexual=gametes+variation." }],
            steps: [{ reasoning: "Asexual one parent clones; sexual two parents variation.", marks: 1, markCode: "A" }],
            finalAnswer: "One parent clones vs two parents varied",
          },
        },
        {
          id: "cial-b-u7-ra-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which hormone triggers ovulation in the menstrual cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Menstrual cycle", statement: "LH surge → ovulation." }],
            steps: [
              { reasoning: "LH (luteinising hormone) surges around day 14.", marks: 1, markCode: "M" },
              { reasoning: "Surge causes follicle to rupture and release ovum.", marks: 1, markCode: "M" },
              { reasoning: "Correct hormone and role stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "LH surge → ovulation",
          },
        },
        {
          id: "cial-b-u7-ra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the menstrual cycle stops during pregnancy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pregnancy hormones", statement: "hCG maintains corpus luteum → progesterone stays high." }],
            steps: [
              { reasoning: "After fertilisation, embryo secretes hCG.", marks: 1, markCode: "M" },
              { reasoning: "hCG keeps corpus luteum active → progesterone maintained.", marks: 1, markCode: "M" },
              { reasoning: "High progesterone maintains uterine lining — no shedding.", marks: 1, markCode: "M" },
              { reasoning: "Without hCG, corpus luteum degenerates → menstruation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "hCG maintains progesterone → no menstruation",
          },
        },
        {
          id: "cial-b-u7-ra-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Animal reproduction.",
          parts: [
            { label: "a", prompt: "Distinguish asexual and sexual reproduction.", marks: 2 },
            { label: "b", prompt: "Name the hormones that trigger ovulation and maintain the uterine lining.", marks: 3 },
            { label: "c", prompt: "What is the role of the placenta?", marks: 2 },
            { label: "d", prompt: "Why does sexual reproduction produce more variation than asexual?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reproduction", statement: "Gametes+meiosis → variation; hormones control cycle." }],
            steps: [
              { part: "a", reasoning: "Asexual: one parent, clones; sexual: gametes, variation.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "LH triggers ovulation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Oestrogen and progesterone maintain lining.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "All three correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exchanges gases, nutrients, wastes between mother and fetus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Does not mix blood — selective barrier.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Meiosis + random fertilisation shuffle alleles.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Each offspring genetically unique.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) clone vs varied (b) LH, oestrogen, progesterone (c) exchange barrier (d) meiosis+fertilisation",
          },
        },
        mcqQ({
          id: "cial-b-u7-ra-q5", d: "foundation",
          s: "Which process produces haploid gametes in animals?",
          c: ["Mitosis", "Meiosis", "Fertilisation", "Germination"], a: 1,
          p: ["Gamete formation", "Meiosis produces haploid gametes."],
          r: "Meiosis halves the chromosome number to produce gametes.",
          f: "**(b)** Meiosis", e: "Confusing gamete formation with fertilisation.",
        }),
        mcqQ({
          id: "cial-b-u7-ra-q6", d: "core",
          s: "Which hormone surge triggers ovulation around day 14 of the menstrual cycle?",
          c: ["FSH", "Progesterone", "LH", "hCG"], a: 2,
          p: ["Ovulation", "The LH surge causes the follicle to rupture."],
          r: "A surge of luteinising hormone triggers ovulation.",
          f: "**(c)** LH", e: "Choosing FSH or a pregnancy hormone.",
        }),
        mcqQ({
          id: "cial-b-u7-ra-q7", d: "challenge",
          s: "Which structure secretes progesterone after ovulation to maintain the uterine lining?",
          c: ["Corpus luteum", "Graafian follicle only", "Uterine muscle", "Placenta before implantation"], a: 0,
          p: ["Corpus luteum", "The corpus luteum produces progesterone."],
          r: "After ovulation the corpus luteum secretes progesterone.",
          f: "**(a)** Corpus luteum", e: "Naming the follicle before it becomes corpus luteum.",
        }),
        mcqQ({
          id: "cial-b-u7-ra-q8", d: "core",
          s: "What is the main role of the placenta during pregnancy?",
          c: ["It produces milk", "It forms the umbilical cord muscles", "It stores sperm", "It exchanges gases, nutrients and wastes between mother and fetus"], a: 3,
          p: ["Placenta", "The placenta is the exchange surface between maternal and fetal blood."],
          r: "The placenta exchanges respiratory gases, nutrients and wastes without mixing blood.",
          f: "**(d)** It exchanges gases, nutrients and wastes between mother and fetus", e: "Describing a function of the ovary or mammary gland.",
        }),
        mcqQ({
          id: "cial-b-u7-ra-q9", d: "foundation",
          s: "Which pair shows internal fertilisation?",
          c: ["Mammals", "Most fish and many amphibians", "External spawners", "Corals releasing gametes into water"], a: 0,
          p: ["Fertilisation site", "Internal fertilisation occurs inside the female body."],
          r: "Mammals fertilise internally, unlike many aquatic animals.",
          f: "**(a)** Mammals", e: "Choosing an external fertilisation example.",
        }),
        mcqQ({
          id: "cial-b-u7-ra-q10", d: "challenge",
          s: "What is the main advantage of asexual reproduction in stable environments?",
          c: ["It produces offspring rapidly without needing a mate", "It creates maximum genetic variation", "It requires meiosis", "It prevents all disease"], a: 0,
          p: ["Asexual reproduction", "One parent produces clones quickly."],
          r: "Asexual reproduction is fast and does not require a mate, although it limits variation.",
          f: "**(a)** It produces offspring rapidly without needing a mate", e: "Claiming asexual reproduction increases variation.",
        }),
        numQ({
          id: "cial-b-u7-ra-q11", d: "foundation",
          s: "The menstrual cycle lasts $28$ days and ovulation normally occurs around day $14$. What fraction of the cycle has passed at ovulation?",
          parts: [["a", 0.5, "fraction"]],
          steps: [
            ["Fraction = day of ovulation divided by cycle length.", 1, "M"],
            ["$14 / 28 = 0.5$.", 1, "A"],
          ],
          p: ["Cycle fraction", "Elapsed days divided by total cycle length."],
          f: "$0.5$ or $50\\%$ of the cycle", e: "Using day $28$ as ovulation day.",
        }),
        numQ({
          id: "cial-b-u7-ra-q12", d: "core",
          s: "Human gametes are haploid with $23$ chromosomes. How many chromosomes are present in the fertilised zygote?",
          parts: [["a", 46, "chromosomes"]],
          steps: [
            ["Zygote receives one set from each gamete.", 1, "M"],
            ["$23 + 23 = 46$ chromosomes.", 1, "A"],
          ],
          p: ["Zygote chromosomes", "Sum of sperm and ovum chromosome numbers."],
          f: "$46$ chromosomes", e: "Leaving the zygote haploid.",
        }),
        numQ({
          id: "cial-b-u7-ra-q13", d: "core",
          s: "The corpus luteum normally functions for about $14$ days after ovulation in a $28$-day cycle. On which day of the cycle does it begin to degenerate if pregnancy does not occur?",
          parts: [["a", 28, "day"]],
          steps: [
            ["Degeneration day = ovulation day plus corpus luteum lifespan.", 1, "M"],
            ["$14 + 14 = 28$.", 1, "A"],
          ],
          p: ["Corpus luteum regression", "Add luteal lifespan to ovulation day."],
          f: "Around day $28$", e: "Counting from day $1$ as day $0$.",
        }),
        numQ({
          id: "cial-b-u7-ra-q14", d: "challenge",
          s: "Progesterone concentration peaks at day $21$ and falls to baseline by day $28$. Over how many days does the fall occur?",
          parts: [["a", 7, "days"]],
          steps: [
            ["Duration of fall = end day minus peak day.", 1, "M"],
            ["$28 - 21 = 7$ days.", 1, "A"],
          ],
          p: ["Hormone decline", "Subtract peak day from baseline day."],
          f: "$7$ days", e: "Including both endpoint days gives $8$; use elapsed time.",
        }),
        numQ({
          id: "cial-b-u7-ra-q15", d: "challenge",
          s: "Of $1000$ sperm reaching the ovum, only one successfully fertilises it. What percentage of arriving sperm fertilise the ovum?",
          parts: [["a", 0.1, "%"]],
          steps: [
            ["Percentage = successful sperm divided by total sperm multiplied by $100$.", 1, "M"],
            ["$(1 / 1000) \\times 100 = 0.1\\%$.", 1, "A"],
          ],
          p: ["Fertilisation percentage", "Successful events divided by total events."],
          f: "$0.1\\%$", e: "Reporting $1\\%$ or $10\\%$.",
        }),
        openQ({
          id: "cial-b-u7-ra-q16", d: "challenge",
          s: "Explain the hormonal sequence that prepares the uterus for pregnancy and what changes if fertilisation does not occur.",
          steps: [
            ["FSH stimulates follicle development and oestrogen production.", 1, "M"],
            ["An LH surge triggers ovulation around day $14$.", 1, "M"],
            ["The corpus luteum secretes progesterone, maintaining the uterine lining.", 1, "M"],
            ["Without hCG from an embryo, progesterone falls and menstruation begins.", 1, "A"],
          ],
          p: ["Menstrual cycle", "FSH, LH, oestrogen, progesterone and hCG roles."],
          f: "FSH→follicle, LH→ovulation, progesterone→lining; no pregnancy→menstruation.",
          e: "Missing LH or the role of hCG.",
        }),
      ],
    },
    {
      id: "cial-b-u7-repro-plant",
      title: "Plant reproduction",
      skill: "Describe flower structure, pollination, fertilisation and seed dispersal.",
      lesson: {
        sections: [
          {
            heading: "Flower structure",
            body: "Stamen (male): anther produces pollen. Carpel/pistil (female): stigma receives pollen → style → ovary containing ovules. Petals attract pollinators; sepals protect bud. Bisexual flowers have both; unisexual have one.",
          },
          {
            heading: "Pollination and fertilisation",
            body: "Pollination: pollen grain lands on stigma → pollen tube grows down style → sperm nuclei enter ovule. Double fertilisation: one sperm + ovum → zygote; second sperm + polar nuclei → endosperm (food store). Self-pollination vs cross-pollination (more variation).",
          },
          {
            heading: "Seed and fruit formation",
            body: "After fertilisation: ovule → seed (embryo + endosperm + seed coat); ovary → fruit (protects/disperses seeds). Germination needs water, oxygen, suitable temperature. Seed dispersal: wind (winged/dandelion), water, animals (fleshy fruit, hooks).",
          },
        ],
        keyFormulas: [
          { name: "Double fertilisation", statement: "Sperm+ovum→zygote; sperm+polar nuclei→endosperm" },
          { name: "Fruit/seed", statement: "Ovary→fruit; ovule→seed" },
        ],
        workedExample: {
          problem: "What structures become the seed and fruit after fertilisation?",
          solution: "Ovule → seed; ovary wall → fruit (pericarp).",
        },
      },
      questions: [
        {
          id: "cial-b-u7-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the flower produces pollen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stigma" },
              { id: "b", text: "Anther" },
              { id: "c", text: "Petal" },
              { id: "d", text: "Ovary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flower parts", statement: "Anther in stamen produces pollen." }],
            steps: [{ reasoning: "Anther produces pollen grains.", marks: 1, markCode: "A" }],
            finalAnswer: "Anther",
          },
        },
        {
          id: "cial-b-u7-rp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is double fertilisation in flowering plants?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Double fertilisation", statement: "Two sperm nuclei fertilise ovum and polar nuclei." }],
            steps: [
              { reasoning: "One sperm nucleus + ovum → diploid zygote.", marks: 1, markCode: "M" },
              { reasoning: "Second sperm + polar nuclei → triploid endosperm.", marks: 1, markCode: "M" },
              { reasoning: "Both events occur in the ovule — unique to flowering plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Zygote + endosperm formed",
          },
        },
        {
          id: "cial-b-u7-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two adaptations of flowers for wind pollination.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Pollination adaptations", statement: "Wind-pollinated: small petals, feathery stigma, light pollen." }],
            steps: [
              { reasoning: "Small or no petals — no need to attract animals.", marks: 1, markCode: "M" },
              { reasoning: "Feathery/bushy stigma with large surface area to catch pollen.", marks: 1, markCode: "M" },
              { reasoning: "Light, smooth pollen produced in large quantities.", marks: 1, markCode: "M" },
              { reasoning: "Two valid adaptations given.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Small petals + feathery stigma/light pollen",
          },
        },
        {
          id: "cial-b-u7-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Plant reproduction.",
          parts: [
            { label: "a", prompt: "Label the male and female parts of a flower.", marks: 2 },
            { label: "b", prompt: "What is double fertilisation?", marks: 3 },
            { label: "c", prompt: "What does the ovule develop into? What does the ovary develop into?", marks: 2 },
            { label: "d", prompt: "Give two methods of seed dispersal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant reproduction", statement: "Stamen male, carpel female; ovule→seed, ovary→fruit." }],
            steps: [
              { part: "a", reasoning: "Male: stamen (anther+filament); female: carpel (stigma+style+ovary).", marks: 2, markCode: "A" },
              { part: "b", reasoning: "One sperm + ovum → zygote.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second sperm + polar nuclei → endosperm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both in ovule — double fertilisation.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Ovule→seed; ovary→fruit.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Any two: wind, water, animals, explosive.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Two valid methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) stamen/carpel (b) zygote+endosperm (c) seed/fruit (d) wind/water/animals",
          },
        },
        mcqQ({
          id: "cial-b-u7-rp-q5", d: "foundation",
          s: "Which parts make up the female carpel of a flower?",
          c: ["Stigma, style and ovary", "Anther and filament", "Sepal and petal", "Pollen and ovule only"], a: 0,
          p: ["Carpel", "The carpel contains stigma, style and ovary."],
          r: "The female carpel consists of stigma, style and ovary.",
          f: "**(a)** Stigma, style and ovary", e: "Naming stamen parts instead.",
        }),
        mcqQ({
          id: "cial-b-u7-rp-q6", d: "core",
          s: "After landing on the stigma, where does the pollen tube grow to deliver sperm nuclei?",
          c: ["Down the style to the ovule", "Into the petal", "Through the sepal", "Directly into the anther"], a: 0,
          p: ["Pollen tube", "The pollen tube grows through the style to the ovule."],
          r: "The pollen tube grows down the style and into the ovule.",
          f: "**(a)** Down the style to the ovule", e: "Stopping at the stigma.",
        }),
        mcqQ({
          id: "cial-b-u7-rp-q7", d: "challenge",
          s: "What are the two products of double fertilisation in flowering plants?",
          c: ["Zygote and endosperm", "Seed and fruit only", "Pollen and ovule", "Petal and sepal"], a: 0,
          p: ["Double fertilisation", "One sperm forms the zygote; the other forms endosperm."],
          r: "Double fertilisation produces a diploid zygote and triploid endosperm.",
          f: "**(a)** Zygote and endosperm", e: "Naming structures formed later rather than fertilisation products.",
        }),
        mcqQ({
          id: "cial-b-u7-rp-q8", d: "core",
          s: "After fertilisation, which structures develop into the seed and fruit respectively?",
          c: ["Ovule and ovary", "Stamen and petal", "Pollen and stigma", "Style and sepal"], a: 0,
          p: ["Seed and fruit", "Ovule→seed and ovary→fruit."],
          r: "The ovule develops into the seed and the ovary into the fruit.",
          f: "**(a)** Ovule and ovary", e: "Reversing the two structures.",
        }),
        mcqQ({
          id: "cial-b-u7-rp-q9", d: "foundation",
          s: "What is pollination?",
          c: ["Transfer of pollen to the stigma", "Fusion of sperm and ovum", "Growth of the pollen tube", "Dispersal of seeds"], a: 0,
          p: ["Pollination", "Pollination is pollen transfer to the stigma."],
          r: "Pollination is the transfer of pollen grains to a stigma.",
          f: "**(a)** Transfer of pollen to the stigma", e: "Confusing pollination with fertilisation.",
        }),
        mcqQ({
          id: "cial-b-u7-rp-q10", d: "challenge",
          s: "Why does cross-pollination usually produce more genetic variation than self-pollination?",
          c: ["Pollen from a different plant combines different alleles", "It always produces sterile seeds", "It avoids meiosis", "It prevents endosperm formation"], a: 0,
          p: ["Cross-pollination", "Different parents contribute different genetic material."],
          r: "Cross-pollination mixes alleles from two parents, increasing variation.",
          f: "**(a)** Pollen from a different plant combines different alleles", e: "Claiming it reduces genetic mixing.",
        }),
        numQ({
          id: "cial-b-u7-rp-q11", d: "foundation",
          s: "A flower has $5$ sepals, $4$ petals, $6$ stamens and $1$ carpel. How many floral parts are present in total?",
          parts: [["a", 16, "parts"]],
          steps: [
            ["Total parts = sepals plus petals plus stamens plus carpels.", 1, "M"],
            ["$5 + 4 + 6 + 1 = 16$ parts.", 1, "A"],
          ],
          p: ["Floral parts", "Add all whorl counts."],
          f: "$16$ floral parts", e: "Omitting the carpel.",
        }),
        numQ({
          id: "cial-b-u7-rp-q12", d: "core",
          s: "An anther releases $1200$ pollen grains and $25\\%$ reach a compatible stigma. How many pollen grains arrive?",
          parts: [["a", 300, "pollen grains"]],
          steps: [
            ["Arriving pollen = $25\\%$ of $1200$.", 1, "M"],
            ["$0.25 \\times 1200 = 300$ pollen grains.", 1, "A"],
          ],
          p: ["Pollen arrival", "Percentage of released pollen reaching stigma."],
          f: "$300$ pollen grains", e: "Using $75\\%$ instead of $25\\%$.",
        }),
        numQ({
          id: "cial-b-u7-rp-q13", d: "core",
          s: "An ovary contains $8$ ovules and $75\\%$ are successfully fertilised. How many seeds can develop?",
          parts: [["a", 6, "seeds"]],
          steps: [
            ["Fertilised ovules = $75\\%$ of $8$.", 1, "M"],
            ["$0.75 \\times 8 = 6$ seeds.", 1, "A"],
          ],
          p: ["Seed number", "Fertilisation percentage of ovules."],
          f: "$6$ seeds", e: "Assuming every ovule is fertilised.",
        }),
        numQ({
          id: "cial-b-u7-rp-q14", d: "challenge",
          s: "A plant species has gametes with $n = 12$ chromosomes. How many chromosomes are in the fertilised zygote?",
          parts: [["a", 24, "chromosomes"]],
          steps: [
            ["Zygote chromosome number = $2n$.", 1, "M"],
            ["$2 \\times 12 = 24$ chromosomes.", 1, "A"],
          ],
          p: ["Plant zygote", "Two haploid gamete sets combine."],
          f: "$24$ chromosomes", e: "Leaving the zygote at $n = 12$.",
        }),
        numQ({
          id: "cial-b-u7-rp-q15", d: "challenge",
          s: "A germination trial uses $200$ seeds and $85\\%$ germinate successfully. How many seeds germinate?",
          parts: [["a", 170, "seeds"]],
          steps: [
            ["Germinated seeds = $85\\%$ of $200$.", 1, "M"],
            ["$0.85 \\times 200 = 170$ seeds.", 1, "A"],
          ],
          p: ["Germination count", "Apply percentage to seed total."],
          f: "$170$ seeds", e: "Reporting the $30$ non-germinating seeds.",
        }),
        openQ({
          id: "cial-b-u7-rp-q16", d: "challenge",
          s: "Explain double fertilisation and describe how the ovule and ovary change after fertilisation.",
          steps: [
            ["Two sperm nuclei enter the ovule through the pollen tube.", 1, "M"],
            ["One sperm fuses with the ovum to form the diploid zygote.", 1, "M"],
            ["The second sperm fuses with polar nuclei to form triploid endosperm.", 1, "M"],
            ["The ovule develops into a seed and the ovary into a fruit.", 1, "A"],
          ],
          p: ["Double fertilisation", "Two fusions produce zygote and endosperm; ovule→seed, ovary→fruit."],
          f: "Sperm+ovum→zygote; sperm+polar nuclei→endosperm; ovule→seed; ovary→fruit.",
          e: "Describing only single fertilisation.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u7-reproduction-notes",
      title: "Reproduction — revision notes",
      summary: "Animal reproduction, menstrual cycle hormones and plant reproduction.",
      sections: [
        {
          heading: "Animals",
          body: "Sexual: meiosis → gametes → fertilisation → zygote. Asexual: clones, no variation. Menstrual cycle ~28 days: FSH→follicle, LH surge→ovulation (~day 14), oestrogen/progesterone maintain lining; hCG in pregnancy maintains corpus luteum.",
        },
        {
          heading: "Plants",
          body: "Stamen (anther→pollen) male; carpel (stigma→style→ovary) female. Pollination→pollen tube→double fertilisation (zygote + endosperm). Ovule→seed, ovary→fruit. Wind-pollinated: small petals, feathery stigma, light pollen.",
        },
        {
          heading: "Exam checklist",
          body: "For cycle questions sequence hormones in order. For plant questions distinguish self vs cross pollination — cross gives more variation.",
        },
      ],
    },
  ],
};
