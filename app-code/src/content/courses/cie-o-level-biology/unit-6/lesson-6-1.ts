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

export const lesson61: Lesson = {
  id: "olbio-u6-lesson-6-1",
  code: "6-1",
  title: "Homeostasis and Temperature Control",
  goal: "I CAN explain homeostasis, negative feedback, and how the body regulates temperature.",
  standards: ["5090 6.1", "5090 6.2"],
  vocabulary: [
    { term: "Homeostasis", definition: "Maintenance of a stable internal environment despite external changes." },
    { term: "Negative feedback", definition: "Mechanism where a change triggers responses that reverse the change, keeping conditions stable." },
    { term: "Thermoregulation", definition: "Control of body temperature within a narrow range (~37°C)." },
    { term: "Vasodilation", definition: "Widening of blood vessels near skin surface → more heat loss." },
    { term: "Vasoconstriction", definition: "Narrowing of blood vessels near skin → less heat loss." },
    { term: "Sweating", definition: "Evaporation of sweat from skin surface cools the body." },
    { term: "Shivering", definition: "Involuntary muscle contractions that generate heat." },
  ],
  concepts: [
    {
      id: "olbio-u6-homeostasis",
      title: "Homeostasis and negative feedback",
      skill: "Define homeostasis and explain how negative feedback maintains stable conditions.",
      lesson: {
        sections: [
          {
            heading: "What is homeostasis?",
            body: "Cells need stable conditions: temperature ~37°C, blood glucose ~90 mg/dL, water/salt balance, pH ~7.4. Homeostasis keeps these within narrow limits using receptors, coordinators (brain/pancreas) and effectors.",
          },
          {
            heading: "Negative feedback loop",
            body: "1. **Receptor** detects change (e.g. temp rises).\n2. **Coordinator** (hypothalamus) processes it.\n3. **Effector** responds (sweat glands, muscles).\n4. Change is **reversed** → back to set point.\n\nThe response opposes the original change — hence 'negative'.",
          },
          {
            heading: "Examples",
            body: "- Temperature control (below).\n- Blood glucose control (insulin/glucagon — lesson 6-2).\n- Water balance (ADH/kidney).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is the feedback called 'negative'?",
          solution: "Because the response opposes/reverses the original change, returning the variable to its set point — it does not amplify it.",
        },
      },
      questions: [
        {
          id: "olbio-u6-homeostasis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Homeostasis is the maintenance of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum growth rate" },
              { id: "b", text: "A constant external temperature" },
              { id: "c", text: "High blood pressure" },
              { id: "d", text: "A stable internal environment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Stable internal conditions despite external changes." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{stable internal}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A stable internal environment",
            commonErrors: ["Choosing 'constant external' — homeostasis is about INTERNAL stability."],
          },
        },
        {
          id: "olbio-u6-homeostasis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the three components of a negative feedback loop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Feedback loop", statement: "Receptor detects → coordinator processes → effector responds." },
            ],
            steps: [
              { reasoning: "Give the components.", working: "\\text{receptor, coordinator, effector}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor (detects change), coordinator (processes), effector (produces response).",
            commonErrors: ["Including 'stimulus' as separate — stimulus is the initial change."],
          },
        },
        {
          id: "olbio-u6-homeostasis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what is meant by 'negative feedback' and give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative feedback", statement: "Response opposes the change, returning variable to set point." },
            ],
            steps: [
              { reasoning: "Define: response reverses the change.", working: "\\text{opposes change}", marks: 1, markCode: "M" },
              { reasoning: "Result: returns to set point/stable.", working: "\\text{set point}", marks: 1, markCode: "M" },
              { reasoning: "Give example (temperature, glucose, water).", working: "\\text{e.g. temperature}", marks: 1, markCode: "M" },
              { reasoning: "Complete explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A mechanism where a detected change triggers a response that reverses it, maintaining a stable set point — e.g. sweating when too hot.",
            commonErrors: ["Describing positive feedback (which amplifies — not O Level focus)."],
          },
        },
        {
          id: "olbio-u6-homeostasis-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the negative feedback loop for body temperature control.",
          parts: [
            { label: "a", prompt: "Identify the receptor and coordinator.", marks: 2 },
            { label: "b", prompt: "Describe the response when body temperature rises.", marks: 4 },
            { label: "c", prompt: "Describe the response when body temperature falls.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermoregulation", statement: "Hypothalamus detects; effectors: sweat glands, blood vessels, muscles." },
            ],
            steps: [
              { part: "a", reasoning: "Receptor: skin/temperature sensors. Coordinator: hypothalamus.", working: "\\text{hypothalamus}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sweat glands produce sweat → evaporation cools.", working: "\\text{sweating}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vasodilation → more blood to skin → heat loss.", working: "\\text{vasodilation}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hairs lie flat.", working: "\\text{hairs flat}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete response.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vasoconstriction → less heat loss.", working: "\\text{vasoconstriction}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shivering → muscle contractions generate heat.", working: "\\text{shivering}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hairs stand up (insulation).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) receptors/hypothalamus (b) sweat, vasodilate, hairs flat (c) vasoconstrict, shiver, hairs erect",
            commonErrors: ["Mixing up vasodilation (hot) and vasoconstriction (cold)."],
          },
        },
        mcq("olbio-u6-homeostasis-q5", "foundation", "In a negative feedback loop, which component detects the change?", ["Receptor", "Coordinator", "Effector", "Stimulus"], "a", prin("definition", "Feedback components", "Receptors detect changes; coordinators process them; effectors produce responses."), "Receptors detect the change.", "Confusing the receptor with the effector."),
        mcq("olbio-u6-homeostasis-q6", "foundation", "Which is an example of homeostasis?", ["Body temperature kept near 37°C", "Digesting a meal", "Growing taller", "Increasing heart rate during exercise"], "a", prin("definition", "Homeostasis", "Maintaining stable internal conditions despite external changes."), "Recall the definition.", "Exercise responses are not homeostatic set points."),
        mcq("olbio-u6-homeostasis-q7", "core", "During temperature regulation, the hypothalamus acts as the:", ["Coordinator", "Receptor", "Effector", "Stimulus"], "a", prin("property", "Coordinator", "The coordinator processes information from receptors and directs effectors."), "Match the component role.", "The hypothalamus does not detect temperature directly."),
        mcq("olbio-u6-homeostasis-q8", "core", "When body temperature rises above its set point, which response is triggered?", ["Sweating and vasodilation", "Vasoconstriction and shivering", "Hair erection", "Reduced breathing"], "a", prin("property", "Hot responses", "Overheating triggers sweating and vasodilation to increase heat loss."), "Recall heat-loss responses.", "Vasoconstriction and shivering are cold responses."),
        mcq("olbio-u6-homeostasis-q9", "challenge", "Why is the feedback called 'negative'?", ["The response opposes the original change", "It uses negative ions", "It slows all reactions", "It only works at night"], "a", prin("definition", "Negative feedback", "The response reverses the change, returning the variable to its set point."), "Recall the meaning of 'negative'.", "It is not about electrical charge or time of day."),
        num("olbio-u6-homeostasis-q10", "foundation", "Normal body temperature is about 37°C. If it falls by 1.5°C, what is the new temperature?", 35.5, "°C", prin("property", "Body temperature", "Normal body temperature is about 37°C."), "Subtract the fall from the set point.", "37 - 1.5 = 35.5", "**35.5 °C**"),
        num("olbio-u6-homeostasis-q11", "core", "A person's heart rate rises from 70 bpm to 110 bpm during exercise. Calculate the increase in heart rate.", 40, "bpm", prin("property", "Heart rate change", "Increase = final value - initial value."), "Subtract initial from final.", "110 - 70 = 40", "**40 bpm increase**"),
        num("olbio-u6-homeostasis-q12", "core", "Blood glucose is normally about 90 mg/dL. If it rises to 108 mg/dL, calculate the percentage increase.", 20, "%", prin("property", "Percentage change", "Percentage increase = change / original x 100."), "Compute change then percentage.", "(108 - 90) / 90 x 100 = 20", "**20% increase**"),
        num("olbio-u6-homeostasis-q13", "challenge", "Blood glucose rises from 90 mg/dL to 135 mg/dL after a meal. Calculate the percentage rise.", 50, "%", prin("property", "Percentage change", "Percentage increase = (new - old) / old x 100."), "Compute the percentage rise.", "(135 - 90) / 90 x 100 = 50", "**50% rise**"),
        open("olbio-u6-homeostasis-q14", "core", 3, "Explain the roles of the receptor, coordinator and effector in a negative feedback loop.", prin("definition", "Feedback loop", "Receptor detects, coordinator processes, effector responds."), [["The receptor detects the change in the variable.", 1, "M"], ["The coordinator processes the information and decides on a response.", 1, "M"], ["The effector carries out the response that reverses the change.", 1, "A"]], "Receptor detects the change, coordinator processes it, and effector produces the reversing response.", "Confusing the coordinator with the receptor."),
        open("olbio-u6-homeostasis-q15", "challenge", 4, "Describe the negative feedback that restores blood glucose after a meal.", prin("property", "Glucose homeostasis", "High glucose triggers insulin, glycogen storage and a fall back to the set point."), [["Blood glucose rises after food is absorbed.", 1, "M"], ["The pancreas releases insulin.", 1, "M"], ["Cells take up glucose and the liver converts it to glycogen.", 1, "M"], ["Blood glucose falls back towards its set point.", 1, "A"]], "Glucose rises, insulin is released, glucose is stored as glycogen, and blood glucose returns to normal.", "Omitting glycogen storage as the mechanism."),
        struct("olbio-u6-homeostasis-q16", "challenge", "A student is asked to explain homeostasis and negative feedback.", [["a", "Define homeostasis and state why it is needed.", 2], ["b", "Name the three components of a negative feedback loop.", 2], ["c", "Give two examples of homeostatic variables.", 2], ["d", "Explain why negative feedback is important for survival.", 3]], prin("definition", "Homeostasis", "Stable internal conditions maintained by negative feedback."), [["a", "Homeostasis is maintenance of stable internal conditions.", 1, "M", "stable internal environment"], ["a", "It lets cells function despite external changes.", 1, "A"], ["b", "Receptor detects the change.", 1, "M"], ["b", "Coordinator processes and effector responds.", 1, "A"], ["c", "Body temperature is one variable.", 1, "M"], ["c", "Blood glucose (or water balance) is another.", 1, "A"], ["d", "Keeps conditions within the range cells need.", 1, "M"], ["d", "Reverses deviations automatically.", 1, "M"], ["d", "Prevents dangerous extremes.", 1, "A"]], "(a) stable internal environment (b) receptor/coordinator/effector (c) temperature, glucose (d) keeps conditions in a safe range", "Listing positive feedback as the main mechanism."),
      ],
    },
    {
      id: "olbio-u6-temperature",
      title: "Temperature regulation",
      skill: "Describe how the body responds to overheating and overcooling.",
      lesson: {
        sections: [
          {
            heading: "Too hot",
            body: "- **Sweating**: sweat evaporates, taking heat from skin.\n- **Vasodilation**: blood vessels near skin widen → more heat radiated.\n- **Hairs lie flat**: less insulation.\n- (In humans also: behavioural — seek shade, remove clothing.)",
          },
          {
            heading: "Too cold",
            body: "- **Vasoconstriction**: blood vessels near skin narrow → less heat lost.\n- **Shivering**: muscles contract rapidly → heat generated.\n- **Hairs stand up**: trap insulating air layer.\n- (Also: behavioural — huddle, exercise, warm clothing.)",
          },
          {
            heading: "Why it matters",
            body: "Enzymes work best at ~37°C; too hot denatures them, too cold slows reactions. Temperature must stay within a narrow range.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do we shiver when cold?",
          solution: "Shivering is involuntary muscle contraction that generates heat through respiration, warming the body.",
        },
      },
      questions: [
        {
          id: "olbio-u6-temperature-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which response helps cool the body when hot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shivering" },
              { id: "b", text: "Vasoconstriction" },
              { id: "c", text: "Hairs standing up" },
              { id: "d", text: "Vasodilation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cooling response", statement: "Vasodilation + sweating when hot." },
            ],
            steps: [
              { reasoning: "Recall the response.", working: "\\text{vasodilation}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Vasodilation",
            commonErrors: ["Choosing shivering — that's for cold."],
          },
        },
        {
          id: "olbio-u6-temperature-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two responses of the body to cold.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cold responses", statement: "Vasoconstriction, shivering, hairs erect." },
            ],
            steps: [
              { reasoning: "Give two responses.", working: "\\text{vasoconstrict, shiver, hairs}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vasoconstriction (reduces heat loss), shivering (generates heat), hairs stand up (insulation).",
            commonErrors: ["Listing sweating — that's a heat response."],
          },
        },
        {
          id: "olbio-u6-temperature-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how sweating helps to cool the body.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sweating", statement: "Evaporation of sweat takes latent heat from skin." },
            ],
            steps: [
              { reasoning: "Sweat glands secrete sweat onto skin.", working: "\\text{sweat on skin}", marks: 1, markCode: "M" },
              { reasoning: "Evaporation requires heat energy.", working: "\\text{evaporation}", marks: 1, markCode: "M" },
              { reasoning: "Heat taken from skin/body → cooling.", working: "\\text{heat removed}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sweat evaporates from the skin surface; evaporation requires heat energy which is taken from the body, lowering skin temperature.",
            commonErrors: ["Saying 'sweat is cold' — it's the evaporation that cools."],
          },
        },
        {
          id: "olbio-u6-temperature-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare the body's responses to overheating and overcooling.",
          parts: [
            { label: "a", prompt: "List two responses to overheating.", marks: 2 },
            { label: "b", prompt: "List two responses to overcooling.", marks: 2 },
            { label: "c", prompt: "Explain the purpose of each response in terms of heat loss/gain.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Thermoregulation", statement: "Hot: increase heat loss (sweat, vasodilate). Cold: decrease heat loss + generate heat (vasoconstrict, shiver)." },
            ],
            steps: [
              { part: "a", reasoning: "Two hot responses.", working: "\\text{sweating, vasodilation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State them.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two cold responses.", working: "\\text{vasoconstriction, shivering}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State them.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sweating: evaporation removes heat.", working: "\\text{evaporative cooling}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vasodilation: more blood to skin → radiates heat.", working: "\\text{more heat loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Vasoconstriction: less blood to skin → less heat loss.", working: "\\text{less heat loss}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Shivering: muscle activity generates heat.", working: "\\text{heat generation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete explanations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sweating, vasodilation (b) vasoconstriction, shivering (c) explained heat loss/gain mechanisms",
            commonErrors: ["In (c) not distinguishing heat LOSS (hot responses) from heat CONSERVATION+GENERATION (cold responses)."],
          },
        },
        mcq("olbio-u6-temperature-q5", "foundation", "Which response increases heat loss when the body is hot?", ["Vasodilation", "Vasoconstriction", "Shivering", "Hair erection"], "a", prin("property", "Cooling responses", "Vasodilation and sweating increase heat loss when hot."), "Recall heat-loss responses.", "Vasoconstriction, shivering and hair erection conserve heat."),
        mcq("olbio-u6-temperature-q6", "foundation", "What does shivering do?", ["Generates heat by muscle contraction", "Cools by evaporation", "Filters the blood", "Produces sweat"], "a", prin("property", "Shivering", "Rapid involuntary muscle contraction generates heat."), "Recall the mechanism.", "Shivering warms; it does not cool."),
        mcq("olbio-u6-temperature-q7", "core", "When the body is cold, blood vessels near the skin undergo:", ["Vasoconstriction", "Vasodilation", "Dilation of alveoli", "Increased sweating"], "a", prin("property", "Cold responses", "Vasoconstriction reduces blood flow to the skin and conserves heat."), "Match response to condition.", "Vasodilation is a hot response."),
        mcq("olbio-u6-temperature-q8", "core", "Hairs standing up when cold helps by:", ["Trapping an insulating layer of air", "Increasing sweat production", "Lowering body temperature directly", "Blocking light"], "a", prin("property", "Hair erection", "Erect hairs trap air, which insulates the body."), "Recall the insulation mechanism.", "It does not directly lower temperature."),
        mcq("olbio-u6-temperature-q9", "challenge", "Why must body temperature stay near 37°C?", ["Enzymes work best at their optimum temperature", "To feel warm", "To speed up digestion only", "There is no reason"], "a", prin("property", "Enzyme optimum", "Enzymes function best near 37°C; extremes denature or slow them."), "Link temperature to enzyme function.", "It is about enzyme efficiency, not comfort."),
        num("olbio-u6-temperature-q10", "foundation", "Normal body temperature is 37°C. On a cold day skin temperature falls to 30°C. Calculate the fall in temperature.", 7, "°C", prin("property", "Temperature change", "Change = initial - final for a fall."), "Subtract final from initial.", "37 - 30 = 7", "**7 °C fall**"),
        num("olbio-u6-temperature-q11", "core", "A person sweats at 2 L per hour. How much sweat is produced in 30 minutes?", 1, "L", prin("property", "Sweat rate", "Amount = rate x time; 30 min = 0.5 h."), "Multiply rate by time in hours.", "2 x 0.5 = 1", "**1 L**"),
        num("olbio-u6-temperature-q12", "core", "Vasodilation increases blood flow to the skin from 0.5 L/min to 1.5 L/min. Calculate the increase.", 1, "L/min", prin("property", "Blood flow change", "Increase = final - initial."), "Subtract initial from final.", "1.5 - 0.5 = 1.0", "**1.0 L/min increase**"),
        num("olbio-u6-temperature-q13", "challenge", "A thermometer reads 38.5°C while the set point is 37°C. How many degrees above the set point is the reading?", 1.5, "°C", prin("property", "Deviation from set point", "Deviation = measured - set point."), "Subtract set point from reading.", "38.5 - 37 = 1.5", "**1.5 °C above set point**"),
        open("olbio-u6-temperature-q14", "core", 3, "Explain how vasodilation helps to cool the body.", prin("property", "Vasodilation", "Widening skin blood vessels increases heat loss by radiation."), [["Vasodilation widens blood vessels near the skin surface.", 1, "M"], ["More warm blood flows close to the skin.", 1, "M"], ["Heat is lost to the surroundings by radiation/convection.", 1, "A"]], "Vasodilation brings more warm blood to the skin so heat is radiated away, cooling the body.", "Confusing vasodilation with vasoconstriction."),
        open("olbio-u6-temperature-q15", "challenge", 4, "Explain why sweating is less effective at cooling the body in humid conditions.", prin("property", "Sweating", "Cooling depends on evaporation of sweat from the skin."), [["Sweat must evaporate to remove heat from the skin.", 1, "M"], ["In humid air the air is already saturated with water vapour.", 1, "M"], ["Evaporation is slower, so less heat is removed.", 1, "M"], ["The body may overheat because cooling is reduced.", 1, "A"]], "Sweat evaporates more slowly in humid air because the gradient for water vapour is smaller, so less cooling occurs.", "Saying sweat itself is cold rather than evaporation cooling."),
        struct("olbio-u6-temperature-q16", "challenge", "A student compares the body's responses to overheating and overcooling.", [["a", "List two responses to overheating.", 2], ["b", "List two responses to overcooling.", 2], ["c", "Explain how each response affects heat loss or heat gain.", 5]], prin("property", "Thermoregulation", "Hot responses increase heat loss; cold responses conserve and generate heat."), [["a", "Sweating is one hot response.", 1, "M"], ["a", "Vasodilation (or hairs flat) is another.", 1, "A"], ["b", "Vasoconstriction is one cold response.", 1, "M"], ["b", "Shivering (or hairs erect) is another.", 1, "A"], ["c", "Sweating removes heat by evaporation.", 1, "M"], ["c", "Vasodilation increases heat loss through the skin.", 1, "M"], ["c", "Vasoconstriction reduces heat loss.", 1, "M"], ["c", "Shivering generates heat by muscle contraction.", 1, "M"], ["c", "Complete the heat balance explanation.", 1, "A"]], "(a) sweating, vasodilation (b) vasoconstriction, shivering (c) hot responses lose heat, cold responses conserve/generate heat", "Mixing up heat loss (hot) with heat conservation (cold)."),
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u6-homeostasis-notes",
      title: "Homeostasis and temperature — revision notes",
      summary: "Negative feedback, thermoregulation responses.",
      sections: [
        {
          heading: "Negative feedback",
          body: "Receptor detects change → coordinator processes → effector responds → change reversed → set point restored. Examples: temperature, blood glucose, water balance.",
        },
        {
          heading: "Temperature",
          body: "Hot: sweating (evaporative cooling), vasodilation (heat loss), hairs flat. Cold: vasoconstriction (conserve heat), shivering (generate heat), hairs erect (insulate).",
        },
        {
          heading: "Exam technique",
          body: "- Always describe the LOOP: detect → coordinate → respond → reverse.\n- Vasodilation = hot response (lose heat); vasoconstriction = cold (conserve heat).",
        },
      ],
    },
  ],
};
