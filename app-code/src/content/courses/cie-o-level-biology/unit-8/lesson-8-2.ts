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

export const lesson82: Lesson = {
  id: "olbio-u8-lesson-8-2",
  code: "8-2",
  title: "Human Reproduction",
  goal: "I CAN describe the human reproductive systems, the menstrual cycle, fertilisation, and pregnancy.",
  standards: ["5090 8.3"],
  vocabulary: [
    { term: "Testis", definition: "Male gonad producing sperm and testosterone." },
    { term: "Ovary", definition: "Female gonad producing eggs (ova) and oestrogen/progesterone." },
    { term: "Sperm", definition: "Male gamete; has flagellum for swimming." },
    { term: "Egg (ovum)", definition: "Female gamete; large with yolk-like cytoplasm." },
    { term: "Fertilisation", definition: "Fusion of sperm nucleus with egg nucleus forming a zygote." },
    { term: "Menstrual cycle", definition: "~28-day cycle of changes in uterus preparing for pregnancy." },
    { term: "Placenta", definition: "Organ exchanging materials between mother and fetus." },
    { term: "Implantation", definition: "Embedding of the embryo in the uterus lining." },
  ],
  concepts: [
    {
      id: "olbio-u8-reproductive-systems",
      title: "Reproductive systems",
      skill: "Describe the male and female reproductive systems and gametes.",
      lesson: {
        sections: [
          {
            heading: "Male system",
            body: "- **Testes**: produce sperm + testosterone.\n- **Sperm ducts**: carry sperm.\n- **Penis**: delivers sperm during intercourse.\n- Sperm: small, flagellum, acrosome enzymes.",
          },
          {
            heading: "Female system",
            body: "- **Ovaries**: produce eggs + oestrogen/progesterone.\n- **Oviducts (Fallopian tubes)**: transport egg; fertilisation site.\n- **Uterus**: where embryo develops.\n- **Cervix + vagina**: birth canal.\n- Egg: large, contains nutrients for early development.",
          },
          {
            heading: "Gametes",
            body: "Sperm: millions produced, tiny, mobile. Egg: one per cycle (usually), large, immobile, contains yolk.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Where does fertilisation usually occur?",
          solution: "In the oviduct (Fallopian tube) — sperm meets egg there after ovulation.",
        },
      },
      questions: [
        {
          id: "olbio-u8-reproductive-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ produces sperm in males?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Testis" },
              { id: "b", text: "Penis" },
              { id: "c", text: "Ovary" },
              { id: "d", text: "Uterus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Testis", statement: "Produces sperm + testosterone." },
            ],
            steps: [
              { reasoning: "Match organ to function.", working: "\\text{testis} \\to \\text{sperm}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Testis",
            commonErrors: ["Choosing penis — that's for delivery, not production."],
          },
        },
        {
          id: "olbio-u8-reproductive-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the uterus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Uterus", statement: "Where embryo/fetus develops; thick muscular wall." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{embryo develops}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The uterus is where the embryo/fetus develops during pregnancy; its muscular wall contracts during birth.",
            commonErrors: ["Saying 'produces eggs' — that's ovaries."],
          },
        },
        {
          id: "olbio-u8-reproductive-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the structural differences between sperm and egg that suit their functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gamete adaptations", statement: "Sperm: small, flagellum, enzymes. Egg: large, nutrients, immobile." },
            ],
            steps: [
              { reasoning: "Sperm adaptation: flagellum for swimming.", working: "\\text{flagellum}", marks: 1, markCode: "M" },
              { reasoning: "Sperm adaptation: acrosome enzymes to penetrate.", working: "\\text{acrosome}", marks: 1, markCode: "M" },
              { reasoning: "Egg adaptation: large cytoplasm for nutrients.", working: "\\text{large cytoplasm}", marks: 1, markCode: "M" },
              { reasoning: "Complete comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sperm are small with a flagellum for swimming and acrosome enzymes to penetrate the egg; the egg is large with nutrient-rich cytoplasm to nourish early development.",
            commonErrors: ["Only describing one gamete."],
          },
        },
        {
          id: "olbio-u8-reproductive-systems-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the female reproductive system and the role of each part.",
          parts: [
            { label: "a", prompt: "Name and state the function of the ovaries.", marks: 2 },
            { label: "b", prompt: "Name and state the function of the oviducts.", marks: 2 },
            { label: "c", prompt: "Name and state the function of the uterus.", marks: 2 },
            { label: "d", prompt: "State where fertilisation occurs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Female system", statement: "Ovaries: eggs+oestrogen. Oviducts: transport/fertilisation. Uterus: development. Fertilisation in oviduct." },
            ],
            steps: [
              { part: "a", reasoning: "Ovaries: produce eggs + hormones.", working: "\\text{eggs + oestrogen}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State function.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oviducts: transport egg to uterus.", working: "\\text{transport}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Site of fertilisation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Uterus: embryo development.", working: "\\text{development}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Muscular wall for birth.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fertilisation in oviduct/Fallopian tube.", working: "\\text{oviduct}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sperm meets egg there.", working: "\\text{sperm + egg}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State location.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ovaries: eggs + oestrogen (b) oviducts: transport/fertilisation (c) uterus: development (d) oviduct",
            commonErrors: ["In (d) saying uterus — fertilisation happens BEFORE implantation in uterus."],
          },
        },
        mcq("olbio-u8-reproductive-systems-q5", "foundation", "The ovaries produce:", ["Eggs and hormones such as oestrogen", "Sperm and testosterone", "Urine", "Milk"], "a", prin("property", "Ovaries", "Ovaries produce eggs and hormones oestrogen/progesterone."), "Match organ to product.", "Testes produce sperm and testosterone."),
        mcq("olbio-u8-reproductive-systems-q6", "foundation", "Fertilisation usually occurs in the:", ["Oviduct (Fallopian tube)", "Uterus", "Ovary", "Vagina"], "a", prin("property", "Fertilisation site", "Sperm meets egg in the oviduct."), "Recall the site.", "The uterus is where the embryo develops after implantation."),
        mcq("olbio-u8-reproductive-systems-q7", "core", "Sperm are produced in the:", ["Testes", "Ovaries", "Uterus", "Prostate only"], "a", prin("property", "Sperm production", "The testes produce sperm and testosterone."), "Match organ to gamete.", "Ovaries produce eggs."),
        mcq("olbio-u8-reproductive-systems-q8", "core", "Compared with sperm, an egg is:", ["Large and immobile", "Small and mobile", "Produced in millions", "Able to swim"], "a", prin("property", "Egg structure", "The egg is large, contains nutrients and does not move."), "Compare gamete adaptations.", "Sperm are small and mobile."),
        mcq("olbio-u8-reproductive-systems-q9", "challenge", "Sperm are produced in vast numbers while usually only one egg is released per cycle because:", ["Many sperm must reach the egg for fertilisation", "Eggs are too large to make many", "Sperm cannot fertilise", "Only males reproduce"], "a", prin("property", "Gamete numbers", "Many sperm increase the chance that one reaches and fertilises the egg."), "Link numbers to fertilisation success.", "Egg production is limited by the cycle."),
        num("olbio-u8-reproductive-systems-q10", "foundation", "The main female reproductive organs are ovaries, oviducts and uterus. How many are there?", 3, "organs", prin("property", "Female organs", "Ovaries, oviducts and uterus are the main organs."), "Count the organs.", "3", "**3 organs**"),
        num("olbio-u8-reproductive-systems-q11", "core", "A sperm cell has one flagellum for swimming. How many flagella does one sperm have?", 1, "flagellum", prin("property", "Sperm flagellum", "Sperm have a single flagellum for movement."), "Recall the number.", "1", "**1 flagellum**"),
        num("olbio-u8-reproductive-systems-q12", "core", "In a 28-day menstrual cycle, ovulation occurs about day 14. How many days into the cycle is ovulation?", 14, "days", prin("property", "Ovulation timing", "Ovulation occurs around day 14 of a ~28-day cycle."), "Read the day.", "14", "**Day 14**"),
        num("olbio-u8-reproductive-systems-q13", "challenge", "If the menstrual cycle is 28 days and ovulation is on day 14, what percentage of the cycle has passed before ovulation?", 50, "%", prin("property", "Cycle percentage", "Percentage = day / cycle length x 100."), "Divide day by cycle length.", "14 / 28 x 100 = 50", "**50%**"),
        open("olbio-u8-reproductive-systems-q14", "core", 3, "Describe two structural differences between sperm and egg that suit their functions.", prin("property", "Gamete adaptations", "Sperm are small/mobile with enzymes; egg is large with nutrients."), [["Sperm has a flagellum for swimming to the egg.", 1, "M"], ["Sperm has acrosome enzymes to penetrate the egg.", 1, "M"], ["The egg is large with nutrient-rich cytoplasm for early development.", 1, "A"]], "Sperm is small/mobile with a flagellum and enzymes; the egg is large and nutrient-rich.", "Describing only one gamete."),
        open("olbio-u8-reproductive-systems-q15", "challenge", 4, "Describe the role of each main part of the female reproductive system.", prin("property", "Female system", "Ovaries produce eggs; oviducts transport; uterus develops embryo."), [["Ovaries produce eggs and hormones.", 1, "M"], ["Oviducts transport the egg and are the fertilisation site.", 1, "M"], ["The uterus is where the embryo develops.", 1, "M"], ["Complete the roles of all parts.", 1, "A"]], "Ovaries produce eggs/hormones, oviducts transport to fertilisation site, uterus supports development.", "Saying fertilisation occurs in the uterus."),
        struct("olbio-u8-reproductive-systems-q16", "challenge", "A student compares the male and female reproductive systems.", [["a", "Name the organ that produces sperm and the one that produces eggs.", 2], ["b", "State where fertilisation occurs.", 1], ["c", "Describe two adaptations of sperm for its role.", 2], ["d", "Describe two adaptations of the egg for its role.", 2], ["e", "State the function of the uterus.", 2]], prin("property", "Reproductive systems", "Testes produce sperm; ovaries produce eggs; fertilisation in oviduct; uterus develops embryo."), [["a", "Testes produce sperm.", 1, "M"], ["a", "Ovaries produce eggs.", 1, "A"], ["b", "Fertilisation occurs in the oviduct.", 1, "A"], ["c", "Sperm has a flagellum for swimming.", 1, "M"], ["c", "Sperm has acrosome enzymes to penetrate the egg.", 1, "A"], ["d", "Egg is large with nutrient-rich cytoplasm.", 1, "M"], ["d", "Egg is immobile and released one per cycle.", 1, "A"], ["e", "The uterus is where the embryo/fetus develops.", 1, "M"], ["e", "Its muscular wall contracts during birth.", 1, "A"]], "(a) testes/ovaries (b) oviduct (c) flagellum+enzymes (d) large+nutrients (e) embryo development", "Placing fertilisation in the uterus instead of the oviduct."),
      ],
    },
    {
      id: "olbio-u8-menstrual-pregnancy",
      title: "Menstrual cycle and pregnancy",
      skill: "Describe the menstrual cycle, fertilisation, implantation and the role of the placenta.",
      lesson: {
        sections: [
          {
            heading: "Menstrual cycle (~28 days)",
            body: "1. **Menstruation** (days 1–5): lining shed if no pregnancy.\n2. **Repair** (days 6–13): uterus lining rebuilds; FSH stimulates egg development.\n3. **Ovulation** (~day 14): LH surge releases egg from ovary.\n4. **Luteal phase** (days 15–28): progesterone maintains lining; if no fertilisation, cycle repeats.",
          },
          {
            heading: "Fertilisation to implantation",
            body: "Sperm + egg in oviduct → **zygote** → cell division → **embryo** → travels to uterus → **implantation** in lining → placenta forms.",
          },
          {
            heading: "Placenta",
            body: "Embedded in uterus wall; exchanges materials between mother and fetus: O₂ and nutrients → fetus; CO₂ and wastes → mother. Also produces hormones (progesterone) maintaining pregnancy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the role of the placenta?",
          solution: "It exchanges respiratory gases, nutrients and wastes between mother and fetus without mixing their blood.",
        },
      },
      questions: [
        {
          id: "olbio-u8-menstrual-pregnancy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ovulation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fertilisation of egg" },
              { id: "b", text: "Shedding of uterus lining" },
              { id: "c", text: "Release of an egg from the ovary" },
              { id: "d", text: "Formation of placenta" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Ovulation", statement: "Egg released from ovary (~day 14)." },
            ],
            steps: [
              { reasoning: "Recall the event.", working: "\\text{egg released}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Release of an egg from the ovary",
            commonErrors: ["Choosing menstruation — that's lining shedding."],
          },
        },
        {
          id: "olbio-u8-menstrual-pregnancy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the placenta.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Placenta", statement: "Exchanges gases/nutrients/wastes between mother and fetus." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{exchange materials}", marks: 1, markCode: "M" },
              { reasoning: "Complete: O₂/nutrients in, wastes out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The placenta exchanges oxygen and nutrients from mother to fetus, and carbon dioxide/wastes from fetus to mother.",
            commonErrors: ["Saying bloods mix — they don't; exchange happens across placenta."],
          },
        },
        {
          id: "olbio-u8-menstrual-pregnancy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens during the luteal phase of the menstrual cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Luteal phase", statement: "Corpus luteum secretes progesterone maintaining uterus lining." },
            ],
            steps: [
              { reasoning: "After ovulation, corpus luteum forms.", working: "\\text{corpus luteum}", marks: 1, markCode: "M" },
              { reasoning: "Progesterone maintains/thickens lining.", working: "\\text{progesterone}", marks: 1, markCode: "M" },
              { reasoning: "Prepares uterus for possible implantation.", working: "\\text{prepare for pregnancy}", marks: 1, markCode: "M" },
              { reasoning: "If no pregnancy, progesterone falls → menstruation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "After ovulation the corpus luteum secretes progesterone, maintaining and thickening the uterus lining to prepare for possible implantation; without pregnancy, progesterone falls and menstruation occurs.",
            commonErrors: ["Saying ovulation happens in luteal phase — ovulation marks its start."],
          },
        },
        {
          id: "olbio-u8-menstrual-pregnancy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the events from fertilisation to implantation.",
          parts: [
            { label: "a", prompt: "State where fertilisation occurs.", marks: 1 },
            { label: "b", prompt: "Describe the formation of the zygote and embryo.", marks: 3 },
            { label: "c", prompt: "Describe the journey to the uterus.", marks: 2 },
            { label: "d", prompt: "Explain what implantation is and why it is needed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation to implantation", statement: "Oviduct → zygote → embryo → uterus → implant in lining." },
            ],
            steps: [
              { part: "a", reasoning: "In oviduct.", working: "\\text{oviduct}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sperm + egg nuclei fuse → zygote.", working: "\\text{zygote}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Zygote divides → ball of cells (morula/blastocyst).", working: "\\text{cell division}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Becomes embryo.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Travels down oviduct to uterus.", working: "\\text{down oviduct}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Takes several days.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Embryo embeds in uterus lining.", working: "\\text{embed in lining}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Needed for placenta formation/nourishment.", working: "\\text{placenta}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Secure attachment for development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) oviduct (b) nuclei fuse→zygote→divides→embryo (c) travels to uterus (d) embeds in lining for placenta/nourishment",
            commonErrors: ["In (b) saying 'baby forms immediately' — it's a zygote then embryo."],
          },
        },
        mcq("olbio-u8-menstrual-pregnancy-q5", "foundation", "Menstruation is:", ["Shedding of the uterus lining when there is no pregnancy", "Release of an egg", "Fertilisation of the egg", "Formation of the placenta"], "a", prin("property", "Menstruation", "If no pregnancy occurs, the uterus lining is shed."), "Recall the event.", "Ovulation releases the egg; menstruation sheds the lining."),
        mcq("olbio-u8-menstrual-pregnancy-q6", "foundation", "Ovulation is the:", ["Release of an egg from the ovary", "Shedding of the uterus lining", "Implantation of the embryo", "Production of milk"], "a", prin("property", "Ovulation", "Ovulation releases an egg from the ovary around day 14."), "Recall the event.", "Menstruation is lining shedding."),
        mcq("olbio-u8-menstrual-pregnancy-q7", "core", "During the luteal phase, progesterone:", ["Maintains and thickens the uterus lining", "Stimulates ovulation", "Causes menstruation immediately", "Produces eggs"], "a", prin("property", "Progesterone", "Progesterone maintains the uterus lining to prepare for pregnancy."), "Recall the hormone role.", "FSH/LH are involved earlier in the cycle."),
        mcq("olbio-u8-menstrual-pregnancy-q8", "core", "Implantation is:", ["Embedding of the embryo in the uterus lining", "Release of the egg", "Shedding of the lining", "Formation of gametes"], "a", prin("property", "Implantation", "The embryo embeds in the uterus lining to attach and form the placenta."), "Recall the definition.", "It happens after the embryo reaches the uterus."),
        mcq("olbio-u8-menstrual-pregnancy-q9", "challenge", "The placenta is important because it:", ["Exchanges materials between mother and fetus without mixing their blood", "Produces sperm", "Releases the egg", "Digests food for the fetus"], "a", prin("property", "Placenta", "The placenta exchanges gases, nutrients and wastes across its surface."), "Recall the exchange role.", "Maternal and fetal blood do not mix."),
        num("olbio-u8-menstrual-pregnancy-q10", "foundation", "The menstrual cycle lasts about how many days?", 28, "days", prin("property", "Cycle length", "The menstrual cycle is about 28 days."), "Recall the length.", "28", "**28 days**"),
        num("olbio-u8-menstrual-pregnancy-q11", "core", "Menstruation typically lasts days 1 to 5 of the cycle. How many days is that?", 5, "days", prin("property", "Menstruation", "Menstruation occurs during days 1-5."), "Subtract start from end+1.", "5 - 1 + 1 = 5", "**5 days**"),
        num("olbio-u8-menstrual-pregnancy-q12", "core", "In a 28-day cycle, ovulation occurs around day 14. On which day does ovulation occur?", 14, "day", prin("property", "Ovulation timing", "Ovulation is around day 14."), "Read the day.", "14", "**Day 14**"),
        num("olbio-u8-menstrual-pregnancy-q13", "challenge", "The luteal phase lasts from day 15 to day 28. How many days is the luteal phase?", 14, "days", prin("property", "Luteal phase", "Luteal phase runs days 15-28."), "Subtract 14 from 28.", "28 - 14 = 14", "**14 days**"),
        open("olbio-u8-menstrual-pregnancy-q14", "core", 3, "Describe the main phases of the menstrual cycle.", prin("property", "Menstrual cycle", "Menstruation, repair, ovulation and luteal phase."), [["Menstruation: the uterus lining is shed if no pregnancy.", 1, "M"], ["Repair: the lining rebuilds and an egg develops.", 1, "M"], ["Ovulation releases the egg; the luteal phase maintains the lining via progesterone.", 1, "A"]], "The cycle includes menstruation, lining repair, ovulation around day 14, and the progesterone-maintained luteal phase.", "Omitting ovulation or progesterone."),
        open("olbio-u8-menstrual-pregnancy-q15", "challenge", 4, "Explain the role of the placenta during pregnancy.", prin("property", "Placenta", "Exchanges gases, nutrients and wastes between mother and fetus."), [["The placenta is embedded in the uterus wall.", 1, "M"], ["Oxygen and nutrients pass from mother to fetus.", 1, "M"], ["Carbon dioxide and wastes pass from fetus to mother.", 1, "M"], ["It also produces hormones such as progesterone to maintain pregnancy.", 1, "A"]], "The placenta exchanges respiratory gases, nutrients and wastes between mother and fetus and supports pregnancy hormones.", "Saying maternal and fetal blood mix."),
        struct("olbio-u8-menstrual-pregnancy-q16", "challenge", "A student describes events from fertilisation to pregnancy.", [["a", "State where fertilisation occurs.", 1], ["b", "Describe what happens to the zygote.", 2], ["c", "Explain implantation.", 2], ["d", "State the role of the placenta.", 2], ["e", "Name the hormone that maintains the uterus lining in the luteal phase.", 2]], prin("property", "Fertilisation to pregnancy", "Oviduct fertilisation → zygote → embryo → implantation → placenta exchange."), [["a", "Fertilisation occurs in the oviduct.", 1, "A"], ["b", "The zygote divides by mitosis.", 1, "M"], ["b", "It becomes an embryo that travels to the uterus.", 1, "A"], ["c", "The embryo embeds in the uterus lining.", 1, "M"], ["c", "This allows the placenta to form and nourish it.", 1, "A"], ["d", "The placenta exchanges gases, nutrients and wastes.", 1, "M"], ["d", "It supports pregnancy without blood mixing.", 1, "A"], ["e", "Progesterone maintains the lining.", 1, "M"], ["e", "It is produced by the corpus luteum/placenta.", 1, "A"]], "(a) oviduct (b) zygote→embryo→uterus (c) embed for placenta (d) material exchange (e) progesterone", "Placing fertilisation in the uterus rather than the oviduct."),
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u8-human-reproduction-notes",
      title: "Human reproduction — revision notes",
      summary: "Reproductive systems, menstrual cycle, fertilisation and placenta.",
      sections: [
        {
          heading: "Systems",
          body: "Male: testes (sperm+testosterone). Female: ovaries (eggs+oestrogen), oviducts (fertilisation site), uterus (development). Sperm small/mobile; egg large/immobile.",
        },
        {
          heading: "Cycle and pregnancy",
          body: "Menstrual cycle ~28 days: menstruation → repair → ovulation (~day 14) → luteal (progesterone). Fertilisation in oviduct → zygote → embryo → implantation → placenta exchanges materials.",
        },
        {
          heading: "Exam technique",
          body: "- Fertilisation = oviduct, NOT uterus.\n- Placenta: exchange without blood mixing.\n- Menstrual cycle: menstruation → repair → ovulation → luteal (progesterone).",
        },
      ],
    },
  ],
};
