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

export const lesson81: Lesson = {
  id: "olbio-u8-lesson-8-1",
  code: "8-1",
  title: "Asexual and Sexual Reproduction",
  goal: "I CAN compare asexual and sexual reproduction and describe flower structure, pollination and fertilisation in plants.",
  standards: ["5090 8.1", "5090 8.2"],
  vocabulary: [
    { term: "Asexual reproduction", definition: "Production of genetically identical offspring from one parent, without gametes." },
    { term: "Sexual reproduction", definition: "Production of offspring from fusion of two gametes; introduces variation." },
    { term: "Stamen", definition: "Male part of flower: anther (produces pollen) + filament." },
    { term: "Carpel", definition: "Female part of flower: stigma, style, ovary (contains ovules)." },
    { term: "Pollination", definition: "Transfer of pollen from anther to stigma." },
    { term: "Fertilisation", definition: "Fusion of male and female nuclei to form a zygote." },
    { term: "Self-pollination", definition: "Pollen transferred to stigma of same flower or same plant." },
    { term: "Cross-pollination", definition: "Pollen transferred to stigma of a different plant." },
  ],
  concepts: [
    {
      id: "olbio-u8-asexual-sexual",
      title: "Asexual vs sexual reproduction",
      skill: "Compare asexual and sexual reproduction and give examples of each.",
      lesson: {
        sections: [
          {
            heading: "Asexual reproduction",
            body: "- One parent, **no gametes**, **mitosis** only.\n- Offspring **genetically identical** (clones) — no variation.\n- Examples: binary fission (bacteria), budding (yeast), runners (strawberry), tubers (potato), cuttings.",
          },
          {
            heading: "Sexual reproduction",
            body: "- Two parents, **gametes** fuse (fertilisation).\n- Offspring **genetically different** — variation for natural selection.\n- Gametes produced by **meiosis** (half chromosome number).",
          },
          {
            heading: "Comparison table",
            body: "| Feature | Asexual | Sexual |\n|---|---|---|\n| Parents | 1 | 2 |\n| Gametes | no | yes |\n| Division | mitosis | meiosis + fertilisation |\n| Offspring | identical | varied |\n| Speed | fast | slower |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do farmers prefer asexual reproduction for some crops?",
          solution: "It produces identical offspring with desirable traits — no variation means predictable quality.",
        },
      },
      questions: [
        {
          id: "olbio-u8-asexual-sexual-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a feature of asexual reproduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Involves gametes" },
              { id: "b", text: "Produces variation" },
              { id: "c", text: "Requires two parents" },
              { id: "d", text: "Offspring are genetically identical" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual", statement: "One parent, clones, no gametes, mitosis." },
            ],
            steps: [
              { reasoning: "Recall the feature.", working: "\\text{identical offspring}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Offspring are genetically identical",
            commonErrors: ["Choosing 'two parents' — that's sexual."],
          },
        },
        {
          id: "olbio-u8-asexual-sexual-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of asexual reproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Asexual examples", statement: "Binary fission, budding, runners, tubers, cuttings." },
            ],
            steps: [
              { reasoning: "Give two examples.", working: "\\text{fission, budding, runners, tubers}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binary fission (bacteria), budding (yeast), runners (strawberry), tubers (potato), cuttings.",
            commonErrors: ["Giving 'fertilisation' — that's sexual."],
          },
        },
        {
          id: "olbio-u8-asexual-sexual-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sexual reproduction is important for species survival.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sexual advantage", statement: "Genetic variation allows adaptation and natural selection." },
            ],
            steps: [
              { reasoning: "Gametes fuse → new gene combinations.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { reasoning: "Variation allows some offspring to survive changes.", working: "\\text{survival advantage}", marks: 1, markCode: "M" },
              { reasoning: "Link to natural selection/evolution.", working: "\\text{selection}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: maintains adaptability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sexual reproduction produces genetically varied offspring; this variation allows natural selection to favour traits that help survival in changing environments.",
            commonErrors: ["Saying 'to make more offspring' — asexual is faster for that."],
          },
        },
        {
          id: "olbio-u8-asexual-sexual-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare asexual and sexual reproduction.",
          parts: [
            { label: "a", prompt: "State the number of parents and whether gametes are involved.", marks: 2 },
            { label: "b", prompt: "State the type of cell division in each.", marks: 2 },
            { label: "c", prompt: "Compare the genetic makeup of offspring.", marks: 2 },
            { label: "d", prompt: "Give one advantage of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reproduction comparison", statement: "Asexual: 1 parent, mitosis, clones. Sexual: 2 parents, meiosis+fertilisation, varied." },
            ],
            steps: [
              { part: "a", reasoning: "Asexual: 1 parent, no gametes.", working: "\\text{1 parent}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sexual: 2 parents, gametes.", working: "\\text{2 parents}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Asexual: mitosis.", working: "\\text{mitosis}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sexual: meiosis for gametes.", working: "\\text{meiosis}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Asexual: identical.", working: "\\text{identical}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sexual: varied.", working: "\\text{varied}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Asexual advantage: fast, no mate needed.", working: "\\text{fast}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sexual advantage: variation/adaptation.", working: "\\text{variation}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State advantages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 vs 2 parents, no vs yes gametes (b) mitosis vs meiosis (c) identical vs varied (d) asexual fast, sexual variation",
            commonErrors: ["In (b) saying sexual uses only mitosis — gametes need meiosis."],
          },
        },
        mcq("olbio-u8-asexual-sexual-q5", "foundation", "Asexual reproduction involves only:", ["Mitosis", "Meiosis", "Fertilisation", "Pollination"], "a", prin("property", "Asexual division", "Asexual reproduction uses mitosis to produce clones."), "Recall the division type.", "Meiosis and fertilisation are sexual."),
        mcq("olbio-u8-asexual-sexual-q6", "foundation", "Sexual reproduction requires:", ["Gametes from two parents", "One parent and mitosis", "No cell division", "Only a single nucleus"], "a", prin("property", "Sexual reproduction", "Sexual reproduction fuses gametes from two parents."), "Recall the requirement.", "Asexual uses one parent and mitosis."),
        mcq("olbio-u8-asexual-sexual-q7", "core", "Offspring produced by asexual reproduction are:", ["Genetically identical clones", "Genetically varied", "Always sterile", "Larger than parents"], "a", prin("property", "Asexual offspring", "Asexual offspring are genetically identical to the parent."), "Recall the outcome.", "Variation is a sexual feature."),
        mcq("olbio-u8-asexual-sexual-q8", "core", "Sexual reproduction produces genetic variation because:", ["Gametes from two parents fuse", "Only mitosis occurs", "One parent divides", "No nuclei are involved"], "a", prin("property", "Sexual variation", "Fusion of gametes creates new gene combinations and variation."), "Recall the source of variation.", "Asexual produces identical offspring."),
        mcq("olbio-u8-asexual-sexual-q9", "challenge", "Farmers often prefer asexual reproduction for some crops because it:", ["Produces identical offspring with desirable traits", "Creates more genetic variation", "Requires two parents", "Is slower but stronger"], "a", prin("property", "Asexual advantage", "Identical offspring keep desirable traits predictable."), "Link clones to predictability.", "Variation is a disadvantage for uniform crops."),
        num("olbio-u8-asexual-sexual-q10", "foundation", "Asexual reproduction involves how many parents?", 1, "parent", prin("property", "Asexual parents", "Asexual reproduction uses one parent."), "Recall the number.", "1", "**1 parent**"),
        num("olbio-u8-asexual-sexual-q11", "core", "Sexual reproduction involves how many parents?", 2, "parents", prin("property", "Sexual parents", "Sexual reproduction uses two parents."), "Recall the number.", "2", "**2 parents**"),
        num("olbio-u8-asexual-sexual-q12", "core", "Mitosis produces 2 identical cells from 1 cell. If a cell divides twice by mitosis, how many cells result?", 4, "cells", prin("property", "Mitosis", "Each mitotic division doubles the cell number: 1→2→4."), "Double for each division.", "1 x 2 x 2 = 4", "**4 cells**"),
        num("olbio-u8-asexual-sexual-q13", "challenge", "Binary fission doubles bacteria each generation. Starting with 1 bacterium, how many are there after 3 generations?", 8, "bacteria", prin("property", "Binary fission", "Each generation doubles the number: 1→2→4→8."), "Double three times.", "1 x 2 x 2 x 2 = 8", "**8 bacteria**"),
        open("olbio-u8-asexual-sexual-q14", "core", 3, "Give one advantage and one disadvantage of asexual reproduction.", prin("property", "Asexual pros/cons", "Fast and no mate needed, but no variation and vulnerable to disease."), [["Advantage: it is fast and does not need a mate or gametes.", 1, "M"], ["Disadvantage: offspring are clones with no variation.", 1, "M"], ["State both clearly.", 1, "A"]], "Asexual is fast and needs one parent but produces identical offspring vulnerable to change.", "Listing only advantages or only disadvantages."),
        open("olbio-u8-asexual-sexual-q15", "challenge", 4, "Explain why genetic variation is important for a species.", prin("property", "Variation", "Variation allows natural selection and adaptation to changing environments."), [["Sexual reproduction produces genetically varied offspring.", 1, "M"], ["Different individuals have different traits.", 1, "M"], ["In a changing environment some traits improve survival.", 1, "M"], ["Natural selection favours the better-adapted individuals.", 1, "A"]], "Variation lets natural selection favour traits that help survival, so the species can adapt.", "Saying variation is always harmful."),
        struct("olbio-u8-asexual-sexual-q16", "challenge", "A student compares asexual and sexual reproduction.", [["a", "State the number of parents in each.", 2], ["b", "State whether gametes are involved in each.", 2], ["c", "Compare the offspring of each.", 2], ["d", "Give one advantage of each method.", 3]], prin("property", "Reproduction comparison", "Asexual: 1 parent, mitosis, clones; sexual: 2 parents, meiosis+fertilisation, varied."), [["a", "Asexual uses one parent.", 1, "M"], ["a", "Sexual uses two parents.", 1, "A"], ["b", "Asexual does not use gametes.", 1, "M"], ["b", "Sexual fuses gametes.", 1, "A"], ["c", "Asexual offspring are identical clones.", 1, "M"], ["c", "Sexual offspring are genetically varied.", 1, "A"], ["d", "Asexual is fast and needs no mate.", 1, "M"], ["d", "Sexual gives variation for adaptation.", 1, "M"], ["d", "State one advantage of each.", 1, "A"]], "(a) 1 vs 2 parents (b) no gametes vs gametes (c) identical vs varied (d) asexual fast, sexual variation", "Confusing mitosis (asexual) with meiosis (sexual gametes)."),
      ],
    },
    {
      id: "olbio-u8-flower",
      title: "Flower structure and fertilisation",
      skill: "Describe flower parts, pollination types, and the process of fertilisation in plants.",
      lesson: {
        sections: [
          {
            heading: "Flower structure",
            body: "- **Sepals**: protect bud.\n- **Petals**: attract pollinators.\n- **Stamen** (male): anther produces pollen, filament supports.\n- **Carpel** (female): stigma (receives pollen), style (tube), ovary (contains ovules).",
          },
          {
            heading: "Pollination",
            body: "- **Self**: same flower/plant — no variation but reliable.\n- **Cross**: different plant — variation but needs vector (wind/insects).\n- Adaptations: bright petals/scent (insect), feathery stigma/light pollen (wind).",
          },
          {
            heading: "Fertilisation",
            body: "Pollen lands on stigma → pollen tube grows down style → male nucleus fuses with female nucleus in ovule → **zygote** → seed. Ovary → fruit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the difference between pollination and fertilisation?",
          solution: "Pollination = transfer of pollen to stigma; fertilisation = fusion of male and female nuclei inside the ovule.",
        },
      },
      questions: [
        {
          id: "olbio-u8-flower-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of the flower produces pollen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Petal" },
              { id: "b", text: "Stigma" },
              { id: "c", text: "Anther" },
              { id: "d", text: "Ovary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Anther", statement: "Produces pollen (male gamete)." },
            ],
            steps: [
              { reasoning: "Match part to function.", working: "\\text{anther} \\to \\text{pollen}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Anther",
            commonErrors: ["Choosing stigma — that's where pollen LANDS."],
          },
        },
        {
          id: "olbio-u8-flower-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define pollination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pollination", statement: "Transfer of pollen from anther to stigma." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{anther} \\to \\text{stigma}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The transfer of pollen grains from the anther to the stigma of a flower.",
            commonErrors: ["Confusing with fertilisation — pollination precedes fertilisation."],
          },
        },
        {
          id: "olbio-u8-flower-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between self-pollination and cross-pollination and their advantages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pollination types", statement: "Self: reliable, no variation. Cross: variation, needs vector." },
            ],
            steps: [
              { reasoning: "Define self-pollination.", working: "\\text{same plant}", marks: 1, markCode: "M" },
              { reasoning: "Define cross-pollination.", working: "\\text{different plant}", marks: 1, markCode: "M" },
              { reasoning: "Advantage of self: reliable.", marks: 1, markCode: "M" },
              { reasoning: "Advantage of cross: variation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Self-pollination is within the same plant (reliable but no variation); cross-pollination is between different plants (variation but needs a vector).",
            commonErrors: ["Saying cross-pollination is 'better' without explaining why."],
          },
        },
        {
          id: "olbio-u8-flower-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the process of fertilisation in a flowering plant.",
          parts: [
            { label: "a", prompt: "State what pollination must occur first.", marks: 2 },
            { label: "b", prompt: "Describe the growth of the pollen tube.", marks: 3 },
            { label: "c", prompt: "Describe what happens when the pollen tube reaches the ovule.", marks: 2 },
            { label: "d", prompt: "State the fate of the ovary and ovule.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fertilisation", statement: "Pollen tube → ovule → nuclei fuse → zygote → seed; ovary → fruit." },
            ],
            steps: [
              { part: "a", reasoning: "Pollen must reach stigma (pollination).", working: "\\text{pollination first}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State prerequisite.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pollen grain germinates on stigma.", working: "\\text{germinates}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Pollen tube grows down style to ovary.", working: "\\text{tube down style}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Carries male nuclei to ovule.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Male nucleus fuses with female nucleus.", working: "\\text{nuclei fuse}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Forms zygote.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ovary → fruit; ovule → seed.", working: "\\text{fruit + seed}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pollination first (b) pollen tube grows down style (c) nuclei fuse → zygote (d) ovary→fruit, ovule→seed",
            commonErrors: ["In (b) saying pollen 'swims' — it grows a tube."],
          },
        },
        mcq("olbio-u8-flower-q5", "foundation", "The female part of a flower is the:", ["Carpel", "Stamen", "Anther", "Filament"], "a", prin("property", "Carpel", "The carpel (stigma, style, ovary) is the female part."), "Match part to sex.", "The stamen is male."),
        mcq("olbio-u8-flower-q6", "foundation", "Petals mainly function to:", ["Attract pollinators", "Produce pollen", "Protect the bud", "Store water"], "a", prin("property", "Petals", "Brightly coloured petals attract insects for pollination."), "Recall the function.", "Sepals protect the bud; anthers produce pollen."),
        mcq("olbio-u8-flower-q7", "core", "Pollen grains land on the:", ["Stigma", "Anther", "Ovary", "Filament"], "a", prin("property", "Stigma", "The stigma is the sticky part that receives pollen."), "Recall the landing site.", "The anther produces pollen."),
        mcq("olbio-u8-flower-q8", "core", "Ovules are contained inside the:", ["Ovary", "Stigma", "Style", "Petal"], "a", prin("property", "Ovary", "The ovary contains ovules that develop into seeds."), "Recall the structure.", "The style is a tube between stigma and ovary."),
        mcq("olbio-u8-flower-q9", "challenge", "Cross-pollination usually requires a:", ["Vector such as wind or an insect", "Single parent only", "No external agent", "Direct fusion in the anther"], "a", prin("property", "Cross-pollination", "Cross-pollination needs a vector to move pollen between plants."), "Recall the need for a vector.", "Self-pollination does not need a vector."),
        num("olbio-u8-flower-q10", "foundation", "The main parts of a flower are sepals, petals, stamen and carpel. How many are there?", 4, "parts", prin("property", "Flower parts", "Sepals, petals, stamen and carpel are the main parts."), "Count the parts.", "4", "**4 parts**"),
        num("olbio-u8-flower-q11", "core", "A pollen tube grows 0.5 cm per hour down a style of length 2 cm. How many hours does it take to reach the ovary?", 4, "hours", prin("property", "Pollen tube growth", "Time = distance / rate."), "Divide distance by rate.", "2 / 0.5 = 4", "**4 hours**"),
        num("olbio-u8-flower-q12", "core", "After fertilisation the ovary becomes a fruit and the ovule becomes a seed. How many structures change?", 2, "structures", prin("property", "Fruit and seed", "Ovary -> fruit; ovule -> seed."), "Count the changes.", "2", "**2 structures**"),
        num("olbio-u8-flower-q13", "challenge", "Cross-pollination succeeds 60% of the time and self-pollination 90%. Calculate the percentage-point difference in success.", 30, "percentage points", prin("property", "Success difference", "Difference = higher - lower percentage."), "Subtract self from cross? Use absolute difference.", "90 - 60 = 30", "**30 percentage points**"),
        open("olbio-u8-flower-q14", "core", 3, "Distinguish pollination from fertilisation.", prin("property", "Pollination vs fertilisation", "Pollination transfers pollen; fertilisation fuses nuclei in the ovule."), [["Pollination is the transfer of pollen from anther to stigma.", 1, "M"], ["Fertilisation is the fusion of male and female nuclei in the ovule.", 1, "M"], ["Pollination must occur before fertilisation.", 1, "A"]], "Pollination moves pollen to the stigma; fertilisation fuses the gamete nuclei inside the ovule.", "Confusing pollen transfer with nuclear fusion."),
        open("olbio-u8-flower-q15", "challenge", 4, "Describe the sequence of events during fertilisation in a flower.", prin("property", "Fertilisation", "Pollen tube grows to ovule; nuclei fuse; zygote forms."), [["Pollen lands on the stigma and germinates.", 1, "M"], ["A pollen tube grows down the style to the ovary.", 1, "M"], ["The male nucleus fuses with the female nucleus in the ovule.", 1, "M"], ["A zygote forms and develops into a seed.", 1, "A"]], "Pollen germinates on the stigma, the tube reaches the ovule, nuclei fuse to form a zygote and a seed.", "Saying pollen swims to the ovule."),
        struct("olbio-u8-flower-q16", "challenge", "A student describes flower structure and fertilisation.", [["a", "Name the male and female parts of the flower.", 2], ["b", "State the function of the anther and stigma.", 2], ["c", "Describe pollination.", 2], ["d", "Describe fertilisation and the fate of ovary and ovule.", 3]], prin("property", "Flower structure", "Stamen male, carpel female; pollination then fertilisation produces seed and fruit."), [["a", "Stamen is male; carpel is female.", 1, "M"], ["a", "Name both correctly.", 1, "A"], ["b", "Anther produces pollen.", 1, "M"], ["b", "Stigma receives pollen.", 1, "A"], ["c", "Pollen is transferred from anther to stigma.", 1, "M"], ["c", "It may be self or cross pollination.", 1, "A"], ["d", "Nuclei fuse in the ovule to form a zygote.", 1, "M"], ["d", "Ovary becomes fruit; ovule becomes seed.", 1, "M"], ["d", "State both fates.", 1, "A"]], "(a) stamen/carpel (b) anther pollen, stigma receives (c) pollen transfer (d) zygote; ovary->fruit, ovule->seed", "Reversing anther (produces) and stigma (receives)."),
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u8-reproduction-notes",
      title: "Reproduction — revision notes",
      summary: "Asexual vs sexual reproduction, flower structure, pollination and fertilisation.",
      sections: [
        {
          heading: "Reproduction types",
          body: "Asexual: 1 parent, mitosis, clones (fast, no variation). Sexual: 2 parents, meiosis + fertilisation, varied (adaptation).",
        },
        {
          heading: "Flower",
          body: "Stamen (anther+filament) = male; carpel (stigma+style+ovary) = female. Pollination: anther→stigma. Fertilisation: pollen tube → nuclei fuse → zygote → seed; ovary → fruit.",
        },
        {
          heading: "Exam technique",
          body: "- Pollination ≠ fertilisation: pollination is pollen transfer, fertilisation is nuclear fusion.\n- Self = reliable/no variation; cross = variation/needs vector.\n- Ovary → fruit; ovule → seed.",
        },
      ],
    },
  ],
};
