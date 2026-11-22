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

export const lesson812: Lesson = {
  id: "cial-b-u8-lesson-8-2",
  code: "8-2",
  title: "Ecosystems and energy flow",
  goal: "I CAN describe trophic levels, food chains/webs, pyramids and nutrient cycles.",
  standards: ["9700 15.1: ecosystems and energy flow"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community of organisms interacting with their abiotic environment." },
    { term: "Trophic level", definition: "Feeding position in a food chain (producer→primary→secondary consumer)." },
    { term: "Food chain", definition: "Linear sequence of who eats whom." },
    { term: "Food web", definition: "Interconnected food chains showing real feeding relationships." },
    { term: "Producer/consumer", definition: "Producers make food (photosynthesis); consumers eat others." },
    { term: "Decomposer", definition: "Breaks down dead matter releasing nutrients (bacteria, fungi)." },
  ],
  concepts: [
    {
      id: "cial-b-u8-food",
      title: "Food chains and trophic pyramids",
      skill: "Construct food chains/webs and interpret pyramids of numbers, biomass and energy.",
      lesson: {
        sections: [
          {
            heading: "Trophic levels",
            body: "Producers (autotrophs — plants, algae) → primary consumers (herbivores) → secondary consumers (carnivores) → tertiary consumers (top predators). Decomposers break down all levels, returning nutrients to soil.",
          },
          {
            heading: "Food chains and webs",
            body: "Food chain: single linear path (grass→rabbit→fox). Food web: multiple chains interlinked — more realistic, shows how species affect each other. Arrows point from food source to consumer (direction of energy flow).",
          },
          {
            heading: "Pyramids",
            body: "Pyramid of numbers: organism count per level — usually decreases but can invert (one tree supports many insects). Pyramid of biomass: dry mass — always decreases upward (~10% transferred). Pyramid of energy: energy flow — always decreases (~10% efficiency at each transfer).",
          },
        ],
        keyFormulas: [
          { name: "10% rule", statement: "Only ~10% of energy/biomass transfers between trophic levels" },
          { name: "Energy pyramid", statement: "Always decreases upward — never inverts" },
        ],
        workedExample: {
          problem: "If producers capture 10,000 kJ of energy, how much reaches tertiary consumers?",
          solution: "10,000 → 1,000 (primary) → 100 (secondary) → 10 kJ (tertiary). Three transfers × 10%.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-fd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain, what do the arrows represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direction of nutrient flow" },
              { id: "b", text: "Direction of energy flow" },
              { id: "c", text: "Lifespan" },
              { id: "d", text: "Size of organism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Food chain", statement: "Arrows show energy transfer direction." }],
            steps: [{ reasoning: "Arrows point food→consumer = energy flow.", marks: 1, markCode: "A" }],
            finalAnswer: "Direction of energy flow",
          },
        },
        {
          id: "cial-b-u8-fd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between a food chain and a food web?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Food web", statement: "Chain=linear; web=interconnected chains." }],
            steps: [
              { reasoning: "Chain: single linear feeding path.", marks: 1, markCode: "M" },
              { reasoning: "Web: multiple interconnected chains — more realistic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Linear vs interconnected",
          },
        },
        {
          id: "cial-b-u8-fd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does the pyramid of energy always decrease upward while the pyramid of numbers can invert?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Trophic transfer", statement: "~90% energy lost as heat/respiration at each level." }],
            steps: [
              { reasoning: "Energy lost as heat, respiration, waste at each transfer.", marks: 1, markCode: "M" },
              { reasoning: "Only ~10% passes to next level — always decreasing.", marks: 1, markCode: "M" },
              { reasoning: "Numbers can invert: one large producer supports many small consumers.", marks: 1, markCode: "M" },
              { reasoning: "Energy/biomass reflect this but numbers don't necessarily.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Energy always ↓ (10% rule); numbers can invert",
          },
        },
        {
          id: "cial-b-u8-fd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Food chains and pyramids.",
          parts: [
            { label: "a", prompt: "Define trophic level and give an example of each level.", marks: 3 },
            { label: "b", prompt: "What is the difference between a food chain and a food web?", marks: 2 },
            { label: "c", prompt: "State the 10% rule.", marks: 1 },
            { label: "d", prompt: "Why does the pyramid of numbers sometimes invert?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Trophic levels", statement: "Producer→herbivore→carnivore→top predator." }],
            steps: [
              { part: "a", reasoning: "Trophic level = feeding position.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Examples: producer=grass, primary=rabbit, secondary=fox.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All levels named correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Chain linear; web interconnected.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "~10% energy/biomass transfers up.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "One producer can support many consumers (tree→insects).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Numbers don't have to decrease.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Biomass/energy still decrease.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) levels (b) chain vs web (c) 10% (d) one→many",
          },
        },
        mcqQ({
          id: "cial-b-u8-fd-q5", d: "foundation",
          s: "Which organisms are producers in most ecosystems?",
          c: ["Plants and algae", "Herbivores", "Top predators", "Decomposers only"], a: 0,
          p: ["Producers", "Producers make organic matter by photosynthesis."],
          r: "Plants and algae are autotrophic producers.",
          f: "**(a)** Plants and algae", e: "Choosing consumers or decomposers.",
        }),
        mcqQ({
          id: "cial-b-u8-fd-q6", d: "core",
          s: "In a food chain arrow grass → rabbit → fox, what does the first arrow show?",
          c: ["Energy transfer from grass to rabbit", "Rabbit moves towards grass", "Grass eats rabbit", "Nutrient cycling direction"], a: 0,
          p: ["Food-chain arrows", "Arrows show energy flow from food to consumer."],
          r: "The arrow points in the direction of energy transfer.",
          f: "**(a)** Energy transfer from grass to rabbit", e: "Reading arrows as movement or predation direction.",
        }),
        mcqQ({
          id: "cial-b-u8-fd-q7", d: "challenge",
          s: "What is the approximate percentage of energy transferred between trophic levels?",
          c: ["About $10\\%$", "About $50\\%$", "About $90\\%$", "About $1\\%$"], a: 0,
          p: ["Trophic transfer", "Only around one tenth of energy is transferred upward."],
          r: "Approximately $10\\%$ of energy transfers to the next trophic level.",
          f: "**(a)** About $10\\%$", e: "Using the percentage lost rather than transferred.",
        }),
        mcqQ({
          id: "cial-b-u8-fd-q8", d: "core",
          s: "What is the main role of decomposers in an ecosystem?",
          c: ["Break down dead matter and release nutrients", "Produce glucose by photosynthesis", "Hunt primary consumers", "Fix atmospheric nitrogen only"], a: 0,
          p: ["Decomposers", "Decomposers recycle nutrients from dead organic matter."],
          r: "Decomposers break down dead organisms and return nutrients to the soil.",
          f: "**(a)** Break down dead matter and release nutrients", e: "Attributing production or predation to decomposers.",
        }),
        mcqQ({
          id: "cial-b-u8-fd-q9", d: "foundation",
          s: "Which trophic level is occupied by a top predator such as an eagle?",
          c: ["Tertiary consumer", "Primary consumer", "Producer", "Decomposer"], a: 0,
          p: ["Trophic levels", "Top predators occupy the highest consumer level."],
          r: "An eagle eating secondary consumers is a tertiary consumer.",
          f: "**(a)** Tertiary consumer", e: "Confusing consumer levels.",
        }),
        mcqQ({
          id: "cial-b-u8-fd-q10", d: "challenge",
          s: "Why is a food web more realistic than a single food chain?",
          c: ["It shows multiple feeding relationships and energy pathways", "It always has fewer species", "It removes decomposers", "It shows only one predator"], a: 0,
          p: ["Food web", "Food webs represent interconnected feeding relationships."],
          r: "Most organisms feed on and are eaten by several species, forming a web.",
          f: "**(a)** It shows multiple feeding relationships and energy pathways", e: "Treating ecosystems as simple linear chains.",
        }),
        numQ({
          id: "cial-b-u8-fd-q11", d: "foundation",
          s: "Producers capture $20\\,000\\ \\mathrm{kJ}$ of energy. Using the $10\\%$ transfer rule, how much energy reaches primary consumers?",
          parts: [["a", 2000, "kJ"]],
          steps: [
            ["Primary consumer energy = $10\\%$ of producer energy.", 1, "M"],
            ["$0.10 \\times 20000 = 2000\\ \\mathrm{kJ}$.", 1, "A"],
          ],
          p: ["Trophic transfer", "Apply $10\\%$ efficiency to producer energy."],
          f: "$2000\\ \\mathrm{kJ}$", e: "Using $90\\%$ as transferred energy.",
        }),
        numQ({
          id: "cial-b-u8-fd-q12", d: "core",
          s: "Primary consumers contain $800\\ \\mathrm{kJ}$ of energy. How much energy is available to secondary consumers at $10\\%$ transfer?",
          parts: [["a", 80, "kJ"]],
          steps: [
            ["Secondary energy = $10\\%$ of primary consumer energy.", 1, "M"],
            ["$0.10 \\times 800 = 80\\ \\mathrm{kJ}$.", 1, "A"],
          ],
          p: ["Secondary consumer energy", "Apply $10\\%$ transfer efficiency."],
          f: "$80\\ \\mathrm{kJ}$", e: "Transferring $800\\ \\mathrm{kJ}$ unchanged.",
        }),
        numQ({
          id: "cial-b-u8-fd-q13", d: "challenge",
          s: "Producers capture $10\\,000\\ \\mathrm{kJ}$. After three trophic transfers at $10\\%$ efficiency, how much energy reaches tertiary consumers?",
          parts: [["a", 10, "kJ"]],
          steps: [
            ["Each transfer multiplies energy by $0.1$.", 1, "M"],
            ["$10000 \\times 0.1^3 = 10\\ \\mathrm{kJ}$.", 1, "A"],
          ],
          p: ["Multi-level energy", "Apply three successive $10\\%$ transfers."],
          f: "$10\\ \\mathrm{kJ}$", e: "Applying only one transfer.",
        }),
        numQ({
          id: "cial-b-u8-fd-q14", d: "core",
          s: "A trophic level has a biomass of $5000\\ \\mathrm{kg}$. Assuming $10\\%$ biomass transfer, what biomass is available to the next level?",
          parts: [["a", 500, "kg"]],
          steps: [
            ["Next-level biomass = $10\\%$ of current biomass.", 1, "M"],
            ["$0.10 \\times 5000 = 500\\ \\mathrm{kg}$.", 1, "A"],
          ],
          p: ["Biomass transfer", "Apply $10\\%$ transfer to dry biomass."],
          f: "$500\\ \\mathrm{kg}$", e: "Using $5000\\ \\mathrm{kg}$ without transfer loss.",
        }),
        numQ({
          id: "cial-b-u8-fd-q15", d: "challenge",
          s: "A food chain is grass → grasshopper → frog → snake → hawk. How many trophic levels does it contain?",
          parts: [["a", 5, "levels"]],
          steps: [
            ["Count each organism occupying a feeding level.", 1, "M"],
            ["Grass, grasshopper, frog, snake and hawk give $5$ levels.", 1, "A"],
          ],
          p: ["Trophic-level count", "Count organisms in the feeding sequence."],
          f: "$5$ trophic levels", e: "Counting only consumers.",
        }),
        openQ({
          id: "cial-b-u8-fd-q16", d: "challenge",
          s: "Explain why energy decreases at each trophic level and why the pyramid of numbers can sometimes invert.",
          steps: [
            ["Most energy is lost as heat through respiration at each level.", 1, "M"],
            ["Some energy is lost in waste and uneaten parts.", 1, "M"],
            ["Only about $10\\%$ is transferred, so energy always decreases upward.", 1, "M"],
            ["Numbers can invert when one large producer supports many small consumers.", 1, "A"],
          ],
          p: ["Trophic transfer", "Energy losses versus organism-number relationships."],
          f: "Energy is lost as heat/waste so it decreases; numbers may rise when one producer supports many consumers.",
          e: "Claiming numbers must always decrease like energy.",
        }),
      ],
    },
    {
      id: "cial-b-u8-nutrient",
      title: "Nutrient cycles",
      skill: "Describe the carbon and nitrogen cycles and their human impacts.",
      lesson: {
        sections: [
          {
            heading: "Carbon cycle",
            body: "Carbon moves: atmosphere (CO$_2$) → photosynthesis → organic matter → respiration/decomposition → CO$_2$. Also: fossil fuels (ancient organic matter) burned → CO$_2$; oceans absorb CO$_2$ (carbon sink); volcanoes release it. Human impact: burning fossil fuels + deforestation → rising CO$_2$ → greenhouse effect → climate change.",
          },
          {
            heading: "Nitrogen cycle",
            body: "Atmosphere N$_2$ is unusable by most organisms. Nitrogen fixation (lightning, Rhizobium bacteria in legume root nodules, industrial Haber process) converts N$_2$ → nitrates/ammonia. Plants absorb nitrates → proteins → animals eat → waste/death → decomposers → ammonification → nitrification → denitrification returns N$_2$. Humans add fertiliser → eutrophication.",
          },
          {
            heading: "Human impacts on cycles",
            body: "Carbon: fossil fuels, deforestation → climate change. Nitrogen: fertilisers → nitrate runoff → eutrophication (algal blooms → deoxygenation → dead zones). Phosphorus: detergent/fertiliser runoff → similar eutrophication.",
          },
        ],
        keyFormulas: [
          { name: "Carbon cycle", statement: "Photosynthesis↔respiration; fossil fuels+deforestation→CO₂ rise" },
          { name: "Nitrogen fixation", statement: "N₂→nitrates via bacteria/lightning/Haber" },
        ],
        workedExample: {
          problem: "Why can't plants use atmospheric nitrogen directly?",
          solution: "N$_2$ triple bond is very stable — plants need nitrates/ammonia produced by nitrogen-fixing bacteria.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-nc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process converts atmospheric nitrogen into usable nitrates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen fixation" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Respiration" },
              { id: "d", text: "Denitrification" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Nitrogen fixation", statement: "N₂→nitrates via bacteria/lightning/Haber." }],
            steps: [{ reasoning: "Nitrogen fixation converts N₂ to usable forms.", marks: 1, markCode: "A" }],
            finalAnswer: "Nitrogen fixation",
          },
        },
        {
          id: "cial-b-u8-nc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two human activities that increase atmospheric CO$_2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Carbon emissions", statement: "Fossil fuels and deforestation release CO₂." }],
            steps: [
              { reasoning: "Burning fossil fuels.", marks: 1, markCode: "A" },
              { reasoning: "Deforestation (less photosynthesis + burning).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fossil fuels, deforestation",
          },
        },
        {
          id: "cial-b-u8-nc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how fertiliser runoff causes eutrophication.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Eutrophication", statement: "Nitrate/phosphate runoff → algal bloom → deoxygenation." }],
            steps: [
              { reasoning: "Fertiliser nitrates/phosphates wash into water bodies.", marks: 1, markCode: "M" },
              { reasoning: "Algae bloom — rapid growth using nutrients.", marks: 1, markCode: "M" },
              { reasoning: "Algae die → decomposers consume oxygen decomposing them.", marks: 1, markCode: "M" },
              { reasoning: "Oxygen depleted → fish/aquatic life die — dead zone.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Nutrients→algae→decomposition→O₂ loss→dead zone",
          },
        },
        {
          id: "cial-b-u8-nc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nutrient cycles.",
          parts: [
            { label: "a", prompt: "Describe the carbon cycle in four steps.", marks: 4 },
            { label: "b", prompt: "Why can't plants use atmospheric N₂ directly?", marks: 2 },
            { label: "c", prompt: "Name two nitrogen-fixing agents.", marks: 2 },
            { label: "d", prompt: "What is eutrophication?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cycles", statement: "Carbon: photosynthesis↔respiration; nitrogen needs fixation." }],
            steps: [
              { part: "a", reasoning: "CO₂ → photosynthesis → organic matter.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Respiration/decomposition → CO₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fossil fuels/deforestation → extra CO₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Oceans absorb CO₂ (sink).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "N₂ triple bond very stable.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Plants need nitrates/ammonia from fixation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rhizobium bacteria, lightning, Haber process (any two).", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Excess nutrients → algal bloom → deoxygenation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 steps (b) stable N₂ (c) Rhizobium/lightning/Haber (d) algal bloom+O₂ loss",
          },
        },
        mcqQ({
          id: "cial-b-u8-nc-q5", d: "foundation",
          s: "Which process removes carbon dioxide from the atmosphere into organic matter?",
          c: ["Photosynthesis", "Respiration", "Combustion", "Denitrification"], a: 0,
          p: ["Carbon uptake", "Photosynthesis fixes carbon dioxide into carbohydrates."],
          r: "Photosynthesis incorporates atmospheric CO2 into organic molecules.",
          f: "**(a)** Photosynthesis", e: "Choosing a process that releases CO2.",
        }),
        mcqQ({
          id: "cial-b-u8-nc-q6", d: "core",
          s: "What does nitrogen fixation convert atmospheric nitrogen into?",
          c: ["Nitrates or ammonia usable by plants", "Carbon dioxide", "Oxygen gas", "Glucose"], a: 0,
          p: ["Nitrogen fixation", "N2 is converted to ammonium/nitrate forms."],
          r: "Nitrogen fixation converts N2 into nitrates or ammonia.",
          f: "**(a)** Nitrates or ammonia usable by plants", e: "Naming the unusable reactant.",
        }),
        mcqQ({
          id: "cial-b-u8-nc-q7", d: "challenge",
          s: "In the nitrogen cycle, what does nitrification convert ammonium ions into?",
          c: ["Nitrite then nitrate ions", "Atmospheric nitrogen gas", "Proteins only", "Carbon dioxide"], a: 0,
          p: ["Nitrification", "Nitrifying bacteria oxidise ammonium to nitrite and nitrate."],
          r: "Nitrification converts ammonium to nitrite and then nitrate.",
          f: "**(a)** Nitrite then nitrate ions", e: "Confusing nitrification with nitrogen fixation.",
        }),
        mcqQ({
          id: "cial-b-u8-nc-q8", d: "core",
          s: "Which nitrogen-cycle process returns nitrogen gas to the atmosphere?",
          c: ["Denitrification", "Nitrogen fixation", "Nitrification", "Ammonification"], a: 0,
          p: ["Denitrification", "Denitrifying bacteria convert nitrates back to N2."],
          r: "Denitrification returns nitrate nitrogen to atmospheric N2.",
          f: "**(a)** Denitrification", e: "Choosing a process that consumes N2.",
        }),
        mcqQ({
          id: "cial-b-u8-nc-q9", d: "foundation",
          s: "What produces ammonium ions during decomposition?",
          c: ["Decomposers breaking down proteins and urea", "Photosynthesis", "Denitrifying bacteria", "Legume roots only"], a: 0,
          p: ["Ammonification", "Decomposition releases ammonium from organic nitrogen."],
          r: "Decomposers convert organic nitrogen into ammonium ions.",
          f: "**(a)** Decomposers breaking down proteins and urea", e: "Choosing a nitrogen-fixing process.",
        }),
        mcqQ({
          id: "cial-b-u8-nc-q10", d: "challenge",
          s: "Why is burning fossil fuels described as releasing 'stored' carbon?",
          c: ["Fossil fuels contain carbon fixed by ancient photosynthesis", "Fossil fuels create new carbon atoms", "Coal contains no carbon", "Carbon is produced by the atmosphere"], a: 0,
          p: ["Fossil carbon", "Fossil fuels preserve carbon from ancient organisms."],
          r: "Fossil fuels contain carbon originally fixed by ancient photosynthetic organisms.",
          f: "**(a)** Fossil fuels contain carbon fixed by ancient photosynthesis", e: "Thinking combustion creates carbon rather than releasing stored carbon.",
        }),
        numQ({
          id: "cial-b-u8-nc-q11", d: "core",
          s: "A field receives $100\\ \\mathrm{kg}$ of nitrogen fertiliser and $15\\%$ runs off into a watercourse. How much fertiliser nitrogen enters the watercourse?",
          parts: [["a", 15, "kg"]],
          steps: [
            ["Runoff = $15\\%$ of $100\\ \\mathrm{kg}$.", 1, "M"],
            ["$0.15 \\times 100 = 15\\ \\mathrm{kg}$.", 1, "A"],
          ],
          p: ["Fertiliser runoff", "Percentage of applied fertiliser entering water."],
          f: "$15\\ \\mathrm{kg}$", e: "Using $85\\%$ instead of $15\\%$.",
        }),
        numQ({
          id: "cial-b-u8-nc-q12", d: "challenge",
          s: "An algal bloom reaches $10\\ \\mathrm{mg\\ L^{-1}}$ biomass and decomposition requires $1.5\\ \\mathrm{mg}$ of oxygen per $1\\ \\mathrm{mg}$ of algae. Calculate the oxygen demand.",
          parts: [["a", 15, "mg L^-1"]],
          steps: [
            ["Oxygen demand = algal biomass multiplied by oxygen requirement.", 1, "M"],
            ["$10 \\times 1.5 = 15\\ \\mathrm{mg\\ L^{-1}}$.", 1, "A"],
          ],
          p: ["Oxygen demand", "Biomass times oxygen consumed per unit biomass."],
          f: "$15\\ \\mathrm{mg\\ L^{-1}}$", e: "Dividing by $1.5$ instead of multiplying.",
        }),
        numQ({
          id: "cial-b-u8-nc-q13", d: "challenge",
          s: "In the Haber process $N_2 + 3H_2 \\rightarrow 2NH_3$, $28\\ \\mathrm{g}$ of nitrogen reacts completely. What mass of ammonia is produced?",
          parts: [["a", 34, "g"]],
          steps: [
            ["The equation shows $2\\ \\mathrm{mol}$ of $\\mathrm{NH_3}$ per $1\\ \\mathrm{mol}$ of $\\mathrm{N_2}$.", 1, "M"],
            ["Mass of ammonia = $2 \\times 17 = 34\\ \\mathrm{g}$.", 1, "A"],
          ],
          p: ["Haber mass balance", "Use mole ratio from the balanced equation."],
          f: "$34\\ \\mathrm{g}$ ammonia", e: "Using $28\\ \\mathrm{g}$ as the product mass.",
        }),
        numQ({
          id: "cial-b-u8-nc-q14", d: "core",
          s: "Coal contains $80\\%$ carbon by mass. How many kilograms of carbon are present in $500\\ \\mathrm{kg}$ of coal?",
          parts: [["a", 400, "kg"]],
          steps: [
            ["Carbon mass = $80\\%$ of $500\\ \\mathrm{kg}$.", 1, "M"],
            ["$0.80 \\times 500 = 400\\ \\mathrm{kg}$.", 1, "A"],
          ],
          p: ["Carbon content", "Percentage of fuel mass that is carbon."],
          f: "$400\\ \\mathrm{kg}$ carbon", e: "Using $20\\%$ instead of $80\\%$.",
        }),
        numQ({
          id: "cial-b-u8-nc-q15", d: "challenge",
          s: "Soil water contains $120\\ \\mathrm{kg}$ of nitrate and denitrifying bacteria reduce $75\\%$ of it to nitrogen gas. How much nitrate is reduced?",
          parts: [["a", 90, "kg"]],
          steps: [
            ["Reduced nitrate = $75\\%$ of $120\\ \\mathrm{kg}$.", 1, "M"],
            ["$0.75 \\times 120 = 90\\ \\mathrm{kg}$.", 1, "A"],
          ],
          p: ["Denitrification amount", "Percentage of nitrate converted to N2."],
          f: "$90\\ \\mathrm{kg}$ nitrate reduced", e: "Reporting the $30\\ \\mathrm{kg}$ remaining.",
        }),
        openQ({
          id: "cial-b-u8-nc-q16", d: "challenge",
          s: "Describe how human activities disrupt the carbon and nitrogen cycles and one consequence of each disruption.",
          steps: [
            ["Burning fossil fuels and deforestation add carbon dioxide to the atmosphere.", 1, "M"],
            ["Rising CO2 contributes to the enhanced greenhouse effect and climate change.", 1, "M"],
            ["Fertiliser runoff adds nitrates and phosphates to water bodies.", 1, "M"],
            ["Nutrient enrichment causes algal blooms, deoxygenation and eutrophication.", 1, "A"],
          ],
          p: ["Human impacts on cycles", "Carbon emissions and nitrogen runoff consequences."],
          f: "Fossil fuels/deforestation→CO2 rise→climate change; fertiliser runoff→eutrophication.",
          e: "Describing only one cycle or no consequence.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u8-ecosystems-notes",
      title: "Ecosystems and nutrient cycles — revision notes",
      summary: "Food chains, trophic pyramids, carbon and nitrogen cycles.",
      sections: [
        {
          heading: "Food chains",
          body: "Producer→primary→secondary→tertiary consumers; decomposers recycle. Food web = interconnected chains. Arrows show energy flow. Only ~10% energy transfers up (10% rule) — energy pyramid always decreases.",
        },
        {
          heading: "Cycles",
          body: "Carbon: photosynthesis↔respiration; fossil fuels+deforestation→CO₂ rise→climate change. Nitrogen: N₂ unusable → fixation (Rhizobium, lightning, Haber) → nitrates→proteins→waste→denitrification. Fertiliser runoff→eutrophication.",
        },
        {
          heading: "Exam checklist",
          body: "For pyramid questions remember numbers can invert but energy/biomass always decrease. For cycles trace the full loop including human impacts.",
        },
      ],
    },
  ],
};
