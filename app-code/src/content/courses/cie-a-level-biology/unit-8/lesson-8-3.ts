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

export const lesson813: Lesson = {
  id: "cial-b-u8-lesson-8-3",
  code: "8-3",
  title: "Populations and succession",
  goal: "I CAN describe population growth, limiting factors, succession and human impact on ecosystems.",
  standards: ["9700 15.2: populations, succession, human impact"],
  vocabulary: [
    { term: "Population", definition: "Group of organisms of the same species in an area." },
    { term: "Carrying capacity", definition: "Maximum population size an environment can sustain." },
    { term: "Limiting factor", definition: "Factor restricting population growth (food, space, disease)." },
    { term: "Succession", definition: "Directional change in community composition over time." },
    { term: "Pioneer species", definition: "First colonisers of bare habitat (lichens, mosses)." },
    { term: "Climax community", definition: "Stable, self-sustaining final community." },
  ],
  concepts: [
    {
      id: "cial-b-u8-population",
      title: "Population growth",
      skill: "Describe exponential vs logistic growth and limiting factors.",
      lesson: {
        sections: [
          {
            heading: "Exponential growth",
            body: "J-shaped curve: unlimited resources → population doubles at regular intervals. Rare in nature — eventually limited by resources. Bacteria in fresh culture show this briefly.",
          },
          {
            heading: "Logistic growth and carrying capacity",
            body: "S-shaped curve: slow start → rapid growth → slows → plateaus at carrying capacity ($K$). Limiting factors: food, water, space, disease, predation, waste accumulation. Population oscillates around $K$.",
          },
          {
            heading: "Density-dependent vs independent",
            body: "Density-dependent: effect increases with density (competition, disease, predation). Density-independent: affects all densities equally (floods, fires, harsh weather).",
          },
        ],
        keyFormulas: [
          { name: "Carrying capacity", statement: "Maximum sustainable population ($K$)" },
          { name: "Logistic curve", statement: "S-shaped — growth slows at $K$" },
        ],
        workedExample: {
          problem: "Why can't populations grow exponentially forever?",
          solution: "Resources (food, space, water) are finite — limiting factors cap growth at carrying capacity.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-pp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carrying capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum population an environment can sustain" },
              { id: "b", text: "Smallest population size" },
              { id: "c", text: "Number of predators" },
              { id: "d", text: "Fastest growth rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Carrying capacity", statement: "Max sustainable population." }],
            steps: [{ reasoning: "$K$ = max population environment supports.", marks: 1, markCode: "A" }],
            finalAnswer: "Maximum sustainable population",
          },
        },
        {
          id: "cial-b-u8-pp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two limiting factors that affect population growth.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Limiting factors", statement: "Food, water, space, disease, predation, waste." }],
            steps: [
              { reasoning: "Any two valid factors.", marks: 1, markCode: "A" },
              { reasoning: "Two correct factors named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Food, water, space, disease, etc.",
          },
        },
        {
          id: "cial-b-u8-pp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between density-dependent and density-independent limiting factors with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Limiting factors", statement: "Density-dependent increases with density; independent affects all equally." }],
            steps: [
              { reasoning: "Density-dependent: effect worsens as population grows (competition, disease).", marks: 1, markCode: "M" },
              { reasoning: "Example: disease spread or food competition.", marks: 1, markCode: "A" },
              { reasoning: "Density-independent: same effect regardless of density (floods, fires).", marks: 1, markCode: "M" },
              { reasoning: "Example: volcanic eruption or frost.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Dependent=competition/disease; independent=floods/fires",
          },
        },
        {
          id: "cial-b-u8-pp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Population growth.",
          parts: [
            { label: "a", prompt: "Define carrying capacity.", marks: 1 },
            { label: "b", prompt: "Describe exponential growth and give an example.", marks: 3 },
            { label: "c", prompt: "Describe logistic growth.", marks: 2 },
            { label: "d", prompt: "Distinguish density-dependent from density-independent factors.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Population growth", statement: "Exponential J-curve vs logistic S-curve; K limits growth." }],
            steps: [
              { part: "a", reasoning: "Max sustainable population.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Unlimited resources → doubling at intervals.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "J-shaped curve.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: bacteria in culture.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "S-shaped: growth slows at carrying capacity.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Density-dependent worsens with density.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Density-independent affects all equally.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Examples of each.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) max sustainable (b) J-curve exponential (c) S-curve logistic (d) dep/indep",
          },
        },
        mcqQ({
          id: "cial-b-u8-pp-q5", d: "foundation",
          s: "Which curve represents exponential population growth?",
          c: ["J-shaped", "S-shaped", "Bell-shaped", "Straight horizontal line"], a: 0,
          p: ["Exponential growth", "Unlimited resources produce a J-shaped curve."],
          r: "Exponential growth gives a J-shaped curve.",
          f: "**(a)** J-shaped", e: "Choosing the logistic S-curve.",
        }),
        mcqQ({
          id: "cial-b-u8-pp-q6", d: "core",
          s: "What happens to logistic population growth near carrying capacity?",
          c: ["Growth slows and levels off", "Growth becomes infinitely fast", "The population always crashes", "Resources become unlimited"], a: 0,
          p: ["Logistic growth", "Growth rate decreases as population approaches K."],
          r: "Near carrying capacity, limiting factors slow growth.",
          f: "**(a)** Growth slows and levels off", e: "Assuming unlimited growth continues.",
        }),
        mcqQ({
          id: "cial-b-u8-pp-q7", d: "challenge",
          s: "Which is a density-dependent limiting factor?",
          c: ["Disease spreading faster in crowded populations", "A volcanic eruption", "A severe frost", "A tsunami"], a: 0,
          p: ["Density dependence", "Effect increases as population density rises."],
          r: "Disease transmission increases with population density.",
          f: "**(a)** Disease spreading faster in crowded populations", e: "Choosing a density-independent event.",
        }),
        mcqQ({
          id: "cial-b-u8-pp-q8", d: "core",
          s: "Which event is density-independent?",
          c: ["Flood", "Food shortage", "Predation", "Parasitic infection"], a: 0,
          p: ["Density independence", "Abiotic events can affect all densities similarly."],
          r: "Floods can kill organisms regardless of population density.",
          f: "**(a)** Flood", e: "Choosing a factor worsened by crowding.",
        }),
        mcqQ({
          id: "cial-b-u8-pp-q9", d: "foundation",
          s: "Which set contains limiting factors for population growth?",
          c: ["Food, water, space and disease", "Sunlight only", "Colour and shape", "Latitude and longitude"], a: 0,
          p: ["Limiting factors", "Resources and biotic pressures restrict growth."],
          r: "Food, water, space, disease and predation limit populations.",
          f: "**(a)** Food, water, space and disease", e: "Choosing non-ecological variables.",
        }),
        mcqQ({
          id: "cial-b-u8-pp-q10", d: "challenge",
          s: "Why does a population often oscillate around carrying capacity?",
          c: ["Births, deaths and resource availability fluctuate", "The environment has infinite resources", "Populations never reproduce", "K changes every second"], a: 0,
          p: ["Population oscillation", "Dynamic balance around K produces fluctuations."],
          r: "Population size fluctuates as births, deaths and resources vary around K.",
          f: "**(a)** Births, deaths and resource availability fluctuate", e: "Assuming a perfectly stable fixed population.",
        }),
        numQ({
          id: "cial-b-u8-pp-q11", d: "foundation",
          s: "A bacterial population starts at $100$ cells and doubles every generation. After $5$ generations, what is the population size?",
          parts: [["a", 3200, "cells"]],
          steps: [
            ["Population after $n$ doublings = $N_0 \\times 2^n$.", 1, "M"],
            ["$100 \\times 2^5 = 3200$ cells.", 1, "A"],
          ],
          p: ["Exponential growth", "Apply repeated doubling."],
          f: "$3200$ cells", e: "Multiplying by $5$ instead of $2^5$.",
        }),
        numQ({
          id: "cial-b-u8-pp-q12", d: "core",
          s: "A habitat has a carrying capacity of $5000$ individuals and the current population is $4500$. What percentage of carrying capacity is reached?",
          parts: [["a", 90, "%"]],
          steps: [
            ["Percentage = current population divided by K times $100$.", 1, "M"],
            ["$(4500 / 5000) \\times 100 = 90\\%$.", 1, "A"],
          ],
          p: ["Carrying-capacity use", "Population as percentage of K."],
          f: "$90\\%$ of carrying capacity", e: "Using $500$ as the denominator.",
        }),
        numQ({
          id: "cial-b-u8-pp-q13", d: "core",
          s: "A deer population increases from $200$ to $400$ in $3$ hours. Assuming exponential growth continues, what is the doubling time?",
          parts: [["a", 3, "hours"]],
          steps: [
            ["The population doubled once in the observed period.", 1, "M"],
            ["Doubling time = $3$ hours.", 1, "A"],
          ],
          p: ["Doubling time", "Time for population to double under exponential growth."],
          f: "$3$ hours", e: "Reporting the final population instead.",
        }),
        numQ({
          id: "cial-b-u8-pp-q14", d: "challenge",
          s: "Disease cases rise from $80$ to $160$ when population density doubles, showing density-dependent spread. If density doubles again, how many cases are expected?",
          parts: [["a", 320, "cases"]],
          steps: [
            ["Cases doubled when density doubled, so apply the same proportional increase.", 1, "M"],
            ["$160 \\times 2 = 320$ cases.", 1, "A"],
          ],
          p: ["Density-dependent increase", "Scale cases proportionally with density."],
          f: "$320$ cases", e: "Adding $80$ cases instead of doubling.",
        }),
        numQ({
          id: "cial-b-u8-pp-q15", d: "challenge",
          s: "A habitat previously supported $2500$ individuals. If resource availability falls to $80\\%$ of its former level, what is the new approximate carrying capacity?",
          parts: [["a", 2000, "individuals"]],
          steps: [
            ["New carrying capacity = $80\\%$ of $2500$.", 1, "M"],
            ["$0.80 \\times 2500 = 2000$ individuals.", 1, "A"],
          ],
          p: ["Reduced carrying capacity", "Apply resource percentage to original K."],
          f: "$2000$ individuals", e: "Reducing by $80$ individuals rather than $20\\%$.",
        }),
        openQ({
          id: "cial-b-u8-pp-q16", d: "challenge",
          s: "Explain the difference between exponential and logistic population growth and identify what determines carrying capacity.",
          steps: [
            ["Exponential growth occurs when resources are effectively unlimited and gives a J-shaped curve.", 1, "M"],
            ["Logistic growth slows as the population approaches carrying capacity, giving an S-shaped curve.", 1, "M"],
            ["Limiting factors such as food, space, water, disease and predation restrict growth.", 1, "M"],
            ["Carrying capacity is the maximum population sustainable by available resources.", 1, "A"],
          ],
          p: ["Population growth", "J vs S curves, limiting factors and K."],
          f: "Exponential=unlimited J-curve; logistic=S-curve limited by resources at K.",
          e: "Describing only one growth type.",
        }),
      ],
    },
    {
      id: "cial-b-u8-succession",
      title: "Succession and human impact",
      skill: "Describe ecological succession and human effects on ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Primary succession",
            body: "On bare rock/no soil: pioneer species (lichens, mosses) weather rock → soil forms → grasses → shrubs → trees → climax community. Very slow (hundreds of years). Example: volcanic island colonisation.",
          },
          {
            heading: "Secondary succession",
            body: "After disturbance where soil remains (fire, farming abandonment): faster recovery. Grasses/weeds → shrubs → young forest → mature forest. Example: abandoned farmland → woodland over decades.",
          },
          {
            heading: "Human impact",
            body: "Deforestation, pollution, overexploitation, climate change → habitat loss → species extinction → loss of ecosystem services (pollination, water purification, carbon storage). Sustainable management balances use and conservation.",
          },
        ],
        keyFormulas: [
          { name: "Succession", statement: "Pioneers→grasses→shrubs→trees→climax community" },
          { name: "Primary vs secondary", statement: "No soil (slow) vs soil present (faster)" },
        ],
        workedExample: {
          problem: "After a forest fire, grasses appear first, then shrubs, then trees. What type of succession is this?",
          solution: "Secondary succession — soil remained after fire, so recovery is faster than primary succession on bare rock.",
        },
      },
      questions: [
        {
          id: "cial-b-u8-sx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are pioneer species?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endangered species" },
              { id: "b", text: "First organisms to colonise bare habitat" },
              { id: "c", text: "Top predators" },
              { id: "d", text: "Largest species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Pioneer species", statement: "First colonisers of bare habitat." }],
            steps: [{ reasoning: "Pioneers = lichens, mosses on bare rock.", marks: 1, markCode: "A" }],
            finalAnswer: "First colonisers",
          },
        },
        {
          id: "cial-b-u8-sx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between primary and secondary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Succession", statement: "Primary=no soil, slow; secondary=soil present, faster." }],
            steps: [
              { reasoning: "Primary: bare rock, no soil — very slow.", marks: 1, markCode: "M" },
              { reasoning: "Secondary: soil remains after disturbance — faster.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No soil (slow) vs soil (fast)",
          },
        },
        {
          id: "cial-b-u8-sx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why secondary succession is faster than primary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Succession", statement: "Existing soil/seeds/seeds bank speeds recovery." }],
            steps: [
              { reasoning: "Soil already present — no need to weather rock.", marks: 1, markCode: "M" },
              { reasoning: "Seed bank in soil → plants germinate quickly.", marks: 1, markCode: "M" },
              { reasoning: "Surviving organisms/residual nutrients accelerate recovery.", marks: 1, markCode: "M" },
              { reasoning: "Overall faster than starting from bare rock.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Soil+seeds+nutrients remain → faster",
          },
        },
        {
          id: "cial-b-u8-sx-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Succession and human impact.",
          parts: [
            { label: "a", prompt: "Define succession and name the stages.", marks: 3 },
            { label: "b", prompt: "Distinguish primary from secondary succession.", marks: 2 },
            { label: "c", prompt: "What are pioneer species? Give two examples.", marks: 2 },
            { label: "d", prompt: "Name two human activities that disrupt ecosystems.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Succession", statement: "Pioneers→...→climax; primary slow, secondary fast." }],
            steps: [
              { part: "a", reasoning: "Directional community change over time.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Stages: pioneers→grasses→shrubs→trees→climax.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All stages in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Primary=no soil, slow; secondary=soil, fast.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "First colonisers (lichens, mosses).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two examples.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any two: deforestation, pollution, overexploitation, climate change.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) stages (b) primary/secondary (c) lichens/mosses (d) 2 impacts",
          },
        },
        mcqQ({
          id: "cial-b-u8-sx-q5", d: "foundation",
          s: "Which organisms are typical pioneer species on bare rock?",
          c: ["Lichens and mosses", "Oak trees", "Foxes", "Flowering crops"], a: 0,
          p: ["Pioneer species", "Lichens and mosses tolerate harsh bare conditions."],
          r: "Lichens and mosses are common pioneer colonisers.",
          f: "**(a)** Lichens and mosses", e: "Choosing late-successional or animal species.",
        }),
        mcqQ({
          id: "cial-b-u8-sx-q6", d: "core",
          s: "What defines primary succession?",
          c: ["It starts on bare substrate with little or no soil", "It follows a volcanic eruption only", "It always occurs in one year", "It requires existing topsoil"], a: 0,
          p: ["Primary succession", "Primary succession begins without soil."],
          r: "Primary succession starts on bare rock or substrate lacking soil.",
          f: "**(a)** It starts on bare substrate with little or no soil", e: "Confusing it with secondary succession.",
        }),
        mcqQ({
          id: "cial-b-u8-sx-q7", d: "challenge",
          s: "Why is secondary succession faster than primary succession?",
          c: ["Soil, seeds and surviving organisms remain after disturbance", "It involves no plants", "It only occurs underwater", "It skips all intermediate stages"], a: 0,
          p: ["Secondary succession", "Residual soil and propagules accelerate recovery."],
          r: "Existing soil, seed banks and survivors speed secondary recovery.",
          f: "**(a)** Soil, seeds and surviving organisms remain after disturbance", e: "Ignoring the role of residual soil.",
        }),
        mcqQ({
          id: "cial-b-u8-sx-q8", d: "core",
          s: "What is a climax community?",
          c: ["A stable, self-sustaining community in equilibrium", "The first species to arrive", "A community after every fire", "A group of only predators"], a: 0,
          p: ["Climax community", "The climax is relatively stable and self-perpetuating."],
          r: "A climax community is the stable endpoint of succession.",
          f: "**(a)** A stable, self-sustaining community in equilibrium", e: "Choosing pioneer or disturbed stages.",
        }),
        mcqQ({
          id: "cial-b-u8-sx-q9", d: "foundation",
          s: "What does ecological succession describe?",
          c: ["Directional change in community composition over time", "Daily movement of animals", "Random weather only", "Nutrient content of soil"], a: 0,
          p: ["Succession", "Succession is predictable community change over time."],
          r: "Succession describes directional changes in species composition.",
          f: "**(a)** Directional change in community composition over time", e: "Confusing it with population growth alone.",
        }),
        mcqQ({
          id: "cial-b-u8-sx-q10", d: "challenge",
          s: "Which human activity most directly prevents natural forest succession?",
          c: ["Repeated clearance for agriculture or urban development", "Planting native trees", "Protecting reserves", "Recording species"], a: 0,
          p: ["Human impact", "Repeated disturbance removes or prevents later successional stages."],
          r: "Continual clearance stops succession before a stable community develops.",
          f: "**(a)** Repeated clearance for agriculture or urban development", e: "Choosing a conservation action.",
        }),
        numQ({
          id: "cial-b-u8-sx-q11", d: "foundation",
          s: "A simple succession sequence is pioneer species → grasses → shrubs → trees → climax community. How many stages are listed?",
          parts: [["a", 5, "stages"]],
          steps: [
            ["Count each named stage in the sequence.", 1, "M"],
            ["Pioneer, grasses, shrubs, trees and climax give $5$ stages.", 1, "A"],
          ],
          p: ["Succession stages", "Count community stages in order."],
          f: "$5$ stages", e: "Omitting the climax community.",
        }),
        numQ({
          id: "cial-b-u8-sx-q12", d: "core",
          s: "In primary succession, estimated times to reach stages are lichens $50$ years, soil formation $100$ years, grasses $150$ years, shrubs $250$ years and trees $400$ years. How long until trees dominate?",
          parts: [["a", 400, "years"]],
          steps: [
            ["Read the cumulative time for the tree stage.", 1, "M"],
            ["Trees dominate after approximately $400$ years.", 1, "A"],
          ],
          p: ["Primary succession timing", "Use cumulative stage times."],
          f: "$400$ years", e: "Adding all stage times to get $950$ years.",
        }),
        numQ({
          id: "cial-b-u8-sx-q13", d: "challenge",
          s: "Secondary succession reaches the shrub stage in $20$ years while primary succession needs $200$ years for the same stage. How many times faster is secondary succession?",
          parts: [["a", 10, "times"]],
          steps: [
            ["Speed ratio = primary time divided by secondary time.", 1, "M"],
            ["$200 / 20 = 10$ times faster.", 1, "A"],
          ],
          p: ["Succession rate", "Compare times for the same stage."],
          f: "$10$ times faster", e: "Dividing $20$ by $200$ and getting $0.1$.",
        }),
        numQ({
          id: "cial-b-u8-sx-q14", d: "core",
          s: "Species richness at succession stages is $2$, $5$, $9$, $14$ and $18$. How many species are present at the final stage?",
          parts: [["a", 18, "species"]],
          steps: [
            ["The final listed stage has richness $18$.", 1, "M"],
            ["Final richness = $18$ species.", 1, "A"],
          ],
          p: ["Climax richness", "Read the highest successional stage value."],
          f: "$18$ species", e: "Summing all stage richness values.",
        }),
        numQ({
          id: "cial-b-u8-sx-q15", d: "challenge",
          s: "Lichens add soil at $0.5\\ \\mathrm{mm\\ year^{-1}}$. How many years are needed to form $50\\ \\mathrm{mm}$ of soil?",
          parts: [["a", 100, "years"]],
          steps: [
            ["Time = required soil depth divided by accumulation rate.", 1, "M"],
            ["$50 / 0.5 = 100$ years.", 1, "A"],
          ],
          p: ["Soil formation time", "Depth divided by rate of accumulation."],
          f: "$100$ years", e: "Multiplying $50$ by $0.5$.",
        }),
        openQ({
          id: "cial-b-u8-sx-q16", d: "challenge",
          s: "Distinguish primary from secondary succession and explain why secondary succession is usually faster.",
          steps: [
            ["Primary succession begins on bare substrate with little or no soil.", 1, "M"],
            ["Secondary succession begins after disturbance where soil remains.", 1, "M"],
            ["Residual soil, nutrients, seeds and surviving organisms accelerate recovery.", 1, "M"],
            ["Therefore secondary succession reaches later stages more quickly than primary succession.", 1, "A"],
          ],
          p: ["Primary vs secondary", "Starting conditions determine speed of recovery."],
          f: "Primary=no soil, slow; secondary=soil remains, faster due to seeds/nutrients/survivors.",
          e: "Defining succession without comparing starting conditions.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u8-populations-notes",
      title: "Populations and succession — revision notes",
      summary: "Population growth curves, limiting factors, ecological succession.",
      sections: [
        {
          heading: "Populations",
          body: "Exponential growth (J-curve, unlimited resources) → logistic growth (S-curve, plateaus at carrying capacity K). Limiting factors: food, space, disease, predation. Density-dependent factors worsen with density; independent (floods, fires) don't.",
        },
        {
          heading: "Succession",
          body: "Pioneer species (lichens, mosses) → grasses → shrubs → trees → climax community. Primary succession on bare rock (no soil, very slow); secondary after disturbance with soil (faster). Human impacts: deforestation, pollution, overexploitation, climate change.",
        },
        {
          heading: "Exam checklist",
          body: "For growth curves identify J vs S shape and the role of carrying capacity. For succession state whether soil is present to classify primary vs secondary.",
        },
      ],
    },
  ],
};
