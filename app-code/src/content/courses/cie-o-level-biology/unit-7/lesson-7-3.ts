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

export const lesson73: Lesson = {
  id: "olbio-u7-lesson-7-3",
  code: "7-3",
  title: "Sense Organs and the Brain",
  goal: "I CAN describe receptors, the pupil reflex, and the regions and functions of the brain.",
  standards: ["5090 7.1"],
  vocabulary: [
    { term: "Receptor", definition: "Specialised cell detecting a stimulus (light, sound, touch, temperature)." },
    { term: "Pupil reflex", definition: "Automatic adjustment of pupil size in response to light intensity." },
    { term: "Cerebrum", definition: "Largest brain region; conscious thought, memory, voluntary actions." },
    { term: "Cerebellum", definition: "Coordinates balance and fine motor control." },
    { term: "Medulla oblongata", definition: "Controls involuntary functions: breathing, heart rate, blood pressure." },
    { term: "Iris", definition: "Muscular ring controlling pupil size." },
    { term: "Retina", definition: "Light-sensitive layer at back of eye containing photoreceptors." },
    { term: "Optic nerve", definition: "Carries impulses from retina to brain." },
  ],
  concepts: [
    {
      id: "olbio-u7-sense-organs",
      title: "Receptors and the pupil reflex",
      skill: "Describe receptors, the eye's response to light, and the pupil reflex arc.",
      lesson: {
        sections: [
          {
            heading: "Receptors",
            body: "Specialised cells detect stimuli: light (retina), sound (cochlea), touch/pressure/pain/temperature (skin). Receptors generate nerve impulses sent to CNS.",
          },
          {
            heading: "Eye response to light",
            body: "- **Bright light**: pupil constricts (smaller) → less light enters → protects retina.\n- **Dim light**: pupil dilates (larger) → more light enters → better vision.",
          },
          {
            heading: "Pupil reflex arc",
            body: "Light receptors in retina → sensory neuron → brain (medulla) → motor neuron → iris muscles → pupil constricts/dilates. Automatic and protective.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does the pupil constrict in bright light?",
          solution: "To reduce the amount of light entering the eye, preventing damage to the retina.",
        },
      },
      questions: [
        {
          id: "olbio-u7-sense-organs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a receptor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A muscle that contracts" },
              { id: "b", text: "A cell that detects a stimulus" },
              { id: "c", text: "A blood vessel" },
              { id: "d", text: "A gland producing hormones" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Receptor", statement: "Cell detecting stimuli (light, sound, touch)." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{detects stimulus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A cell that detects a stimulus",
            commonErrors: ["Choosing effector — that's the responder, not detector."],
          },
        },
        {
          id: "olbio-u7-sense-organs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State what happens to the pupil in bright vs dim light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex", statement: "Bright → constrict; dim → dilate." },
            ],
            steps: [
              { reasoning: "Bright light response.", working: "\\text{constrict}", marks: 1, markCode: "M" },
              { reasoning: "Dim light response.", working: "\\text{dilate}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In bright light the pupil constricts (smaller); in dim light it dilates (larger).",
            commonErrors: ["Reversing the responses."],
          },
        },
        {
          id: "olbio-u7-sense-organs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the pupil reflex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex", statement: "Retina receptors → brain → iris muscles → pupil adjusts." },
            ],
            steps: [
              { reasoning: "Light detected by retinal receptors.", working: "\\text{retina}", marks: 1, markCode: "M" },
              { reasoning: "Impulse to brain via optic nerve.", working: "\\text{optic nerve}", marks: 1, markCode: "M" },
              { reasoning: "Motor impulse to iris muscles.", working: "\\text{iris muscles}", marks: 1, markCode: "M" },
              { reasoning: "Pupil constricts or dilates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Light is detected by retinal receptors; impulses travel via optic nerve to the brain, which sends motor impulses to the iris muscles to constrict or dilate the pupil automatically.",
            commonErrors: ["Saying 'eye decides' — the brain coordinates via reflex arc."],
          },
        },
        {
          id: "olbio-u7-sense-organs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how the eye responds to changes in light intensity.",
          parts: [
            { label: "a", prompt: "State the two responses of the pupil.", marks: 2 },
            { label: "b", prompt: "Explain the purpose of each response.", marks: 3 },
            { label: "c", prompt: "Describe the reflex arc involved.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pupil reflex", statement: "Constrict in bright (protect retina), dilate in dim (more light)." },
            ],
            steps: [
              { part: "a", reasoning: "Constriction + dilation.", working: "\\text{constrict/dilate}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Constriction: less light, protect retina.", working: "\\text{protect retina}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dilation: more light enters.", working: "\\text{more light}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Purpose of each.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Receptor: retinal cells.", working: "\\text{retina}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sensory → brain → motor → iris.", working: "\\text{arc}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Iris muscles contract/relax.", working: "\\text{iris}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete reflex description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) constrict/dilate (b) protect/more light (c) retina→brain→iris reflex arc",
            commonErrors: ["In (b) saying dilation is 'to see colours' — it's for more light in dim conditions."],
          },
        },
        mcq("olbio-u7-sense-organs-q5", "foundation", "A receptor is a cell that:", ["Detects a stimulus", "Produces a hormone", "Contracts a muscle", "Filters blood"], "a", prin("definition", "Receptor", "Receptors are specialised cells that detect stimuli such as light or touch."), "Recall the definition.", "Effectors respond; receptors detect."),
        mcq("olbio-u7-sense-organs-q6", "foundation", "In bright light, the pupil:", ["Constricts", "Dilates", "Stays the same", "Closes completely"], "a", prin("property", "Pupil response", "Bright light causes the pupil to constrict to reduce light entry."), "Recall the response.", "Dilation occurs in dim light."),
        mcq("olbio-u7-sense-organs-q7", "core", "The size of the pupil is controlled by the:", ["Iris", "Retina", "Optic nerve", "Cornea"], "a", prin("property", "Iris", "The iris is a muscular ring that adjusts pupil size."), "Recall the structure.", "The retina detects light; the iris controls pupil size."),
        mcq("olbio-u7-sense-organs-q8", "core", "The optic nerve carries impulses from the:", ["Retina to the brain", "Brain to the muscles", "Iris to the retina", "Cornea to the lens"], "a", prin("property", "Optic nerve", "The optic nerve transmits visual impulses from retina to brain."), "Recall the pathway.", "It carries sensory impulses, not motor ones."),
        mcq("olbio-u7-sense-organs-q9", "challenge", "The pupil reflex is described as automatic because it:", ["Occurs without conscious control", "Is controlled by the cerebrum", "Requires voluntary effort", "Only happens during sleep"], "a", prin("property", "Reflex", "A reflex is an automatic, involuntary response."), "Recall the meaning of reflex.", "It does not need conscious thought."),
        num("olbio-u7-sense-organs-q10", "foundation", "In dim light a pupil is 6 mm wide; in bright light it constricts to 2 mm. Calculate the decrease in diameter.", 4, "mm", prin("property", "Pupil diameter", "Decrease = dim diameter - bright diameter."), "Subtract bright from dim.", "6 - 2 = 4", "**4 mm decrease**"),
        num("olbio-u7-sense-organs-q11", "core", "A reflex arc includes receptor, sensory neuron, coordinator, motor neuron and effector. How many components are listed?", 5, "components", prin("property", "Reflex arc", "A reflex arc has five stages from stimulus to response."), "Count the components.", "5", "**5 components**"),
        num("olbio-u7-sense-organs-q12", "core", "A pupil measures 2 mm in bright light and 8 mm in dim light. How many times wider is it in dim light?", 4, "times", prin("property", "Pupil ratio", "Ratio = dim diameter / bright diameter."), "Divide dim by bright.", "8 / 2 = 4", "**4 times wider**"),
        num("olbio-u7-sense-organs-q13", "challenge", "A pupil constricts from 6 mm to 2 mm. Calculate the percentage decrease in diameter.", 66.7, "%", prin("property", "Percentage decrease", "Percentage = decrease / original x 100."), "Compute decrease then percentage.", "(6 - 2) / 6 x 100 = 66.7", "**About 66.7% decrease**"),
        open("olbio-u7-sense-organs-q14", "core", 3, "Describe the pupil reflex arc.", prin("property", "Pupil reflex arc", "Retinal receptors to sensory neuron to brain to motor neuron to iris muscles."), [["Light is detected by receptors in the retina.", 1, "M"], ["A sensory impulse travels to the brain via the optic nerve.", 1, "M"], ["A motor impulse reaches the iris muscles to adjust the pupil.", 1, "A"]], "Retinal receptors detect light; impulses go to the brain then to iris muscles, which adjust the pupil automatically.", "Saying the eye acts without the brain."),
        open("olbio-u7-sense-organs-q15", "challenge", 4, "Compare the pupil's response in bright and dim light and explain the purpose of each.", prin("property", "Pupil responses", "Constriction protects the retina; dilation admits more light."), [["In bright light the pupil constricts.", 1, "M"], ["This reduces light entry and protects the retina.", 1, "M"], ["In dim light the pupil dilates.", 1, "M"], ["This allows more light to reach the retina for better vision.", 1, "A"]], "Bright light constricts the pupil to protect the retina; dim light dilates it to admit more light.", "Reversing the two responses."),
        struct("olbio-u7-sense-organs-q16", "challenge", "A student investigates how the eye responds to light.", [["a", "Name the cells that detect light in the eye.", 1], ["b", "State the pupil response in bright and dim light.", 2], ["c", "Describe the reflex arc for the pupil response.", 4], ["d", "Explain why the reflex is protective.", 2]], prin("property", "Pupil reflex", "Retina receptors to brain to iris muscles adjust pupil size."), [["a", "Photoreceptors in the retina detect light.", 1, "M"], ["b", "Pupil constricts in bright light.", 1, "M"], ["b", "Pupil dilates in dim light.", 1, "A"], ["c", "Light detected by retinal receptors.", 1, "M"], ["c", "Sensory impulse to brain via optic nerve.", 1, "M"], ["c", "Motor impulse to iris muscles.", 1, "M"], ["c", "Iris muscles adjust pupil size.", 1, "A"], ["d", "Constriction reduces light to protect retina.", 1, "M"], ["d", "It prevents damage from excessive light.", 1, "A"]], "(a) retinal photoreceptors (b) constrict bright/dilate dim (c) retina-brain-iris arc (d) protects retina", "Omitting the brain and iris in the arc."),
      ],
    },
    {
      id: "olbio-u7-brain",
      title: "The brain",
      skill: "Describe the regions of the brain and their functions.",
      lesson: {
        sections: [
          {
            heading: "Brain regions",
            body: "| Region | Function |\n|---|---|\n| Cerebrum | conscious thought, memory, voluntary actions, senses |\n| Cerebellum | balance, posture, fine motor coordination |\n| Medulla oblongata | involuntary: breathing, heart rate, blood pressure |",
          },
          {
            heading: "CNS protection",
            body: "Brain and spinal cord protected by: skull/vertebrae (bones), meninges (membranes), cerebrospinal fluid (cushion), blood-brain barrier.",
          },
          {
            heading: "Conscious vs unconscious",
            body: "- **Conscious**: voluntary actions, thinking — cerebrum.\n- **Unconscious/involuntary**: breathing, heart rate — medulla; balance — cerebellum.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which brain region controls breathing?",
          solution: "Medulla oblongata — it controls involuntary functions including breathing and heart rate.",
        },
      },
      questions: [
        {
          id: "olbio-u7-brain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which brain region controls breathing and heart rate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cerebellum" },
              { id: "b", text: "Spinal cord" },
              { id: "c", text: "Medulla oblongata" },
              { id: "d", text: "Cerebrum" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Medulla", statement: "Controls involuntary functions: breathing, heart rate." },
            ],
            steps: [
              { reasoning: "Match region to function.", working: "\\text{medulla}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Medulla oblongata",
            commonErrors: ["Choosing cerebrum — that's conscious thought."],
          },
        },
        {
          id: "olbio-u7-brain-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the cerebellum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cerebellum", statement: "Coordinates balance and fine motor control." },
            ],
            steps: [
              { reasoning: "Give function.", working: "\\text{balance/coordination}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The cerebellum coordinates balance, posture and fine motor movements.",
            commonErrors: ["Saying 'thinking' — that's cerebrum."],
          },
        },
        {
          id: "olbio-u7-brain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between conscious and unconscious actions and which brain regions control them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Brain regions", statement: "Cerebrum: conscious. Medulla: involuntary. Cerebellum: coordination." },
            ],
            steps: [
              { reasoning: "Conscious: voluntary, cerebrum.", working: "\\text{cerebrum}", marks: 1, markCode: "M" },
              { reasoning: "Unconscious: involuntary, medulla.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { reasoning: "Examples each.", working: "\\text{thinking vs breathing}", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conscious actions (thinking, voluntary movement) are controlled by the cerebrum; unconscious actions (breathing, heart rate) by the medulla; balance/coordination by the cerebellum.",
            commonErrors: ["Saying 'all actions are conscious' — breathing/heart rate are involuntary."],
          },
        },
        {
          id: "olbio-u7-brain-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the three main regions of the brain and their functions.",
          parts: [
            { label: "a", prompt: "Name and describe the cerebrum.", marks: 3 },
            { label: "b", prompt: "Name and describe the cerebellum.", marks: 3 },
            { label: "c", prompt: "Name and describe the medulla oblongata.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Brain regions", statement: "Cerebrum: conscious; cerebellum: balance; medulla: involuntary." },
            ],
            steps: [
              { part: "a", reasoning: "Cerebrum: largest region.", working: "\\text{cerebrum}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conscious thought/memory/voluntary.", working: "\\text{conscious}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cerebellum: coordination.", working: "\\text{cerebellum}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balance/posture/fine movement.", working: "\\text{balance}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete description.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Medulla: involuntary.", working: "\\text{medulla}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Breathing/heart rate/BP.", working: "\\text{breathing/HR}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete description.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) cerebrum: conscious thought/memory (b) cerebellum: balance/coordination (c) medulla: breathing/heart rate",
            commonErrors: ["Swapping cerebellum and medulla functions."],
          },
        },
        mcq("olbio-u7-brain-q5", "foundation", "The largest region of the brain is the:", ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"], "a", prin("property", "Cerebrum", "The cerebrum is the largest brain region and controls conscious functions."), "Recall the largest region.", "The cerebellum and medulla are smaller."),
        mcq("olbio-u7-brain-q6", "foundation", "The cerebellum mainly controls:", ["Balance and coordination", "Breathing", "Memory", "Hormone release"], "a", prin("property", "Cerebellum", "The cerebellum coordinates balance, posture and fine movements."), "Match region to function.", "Breathing is controlled by the medulla."),
        mcq("olbio-u7-brain-q7", "core", "The medulla oblongata controls:", ["Involuntary functions such as breathing and heart rate", "Voluntary movement", "Memory storage", "Vision"], "a", prin("property", "Medulla", "The medulla controls involuntary functions including breathing and heart rate."), "Match region to function.", "Voluntary movement is a cerebrum function."),
        mcq("olbio-u7-brain-q8", "core", "The brain and spinal cord are protected by all of the following EXCEPT:", ["Skin", "Skull and vertebrae", "Meninges", "Cerebrospinal fluid"], "a", prin("property", "CNS protection", "The CNS is protected by bones, meninges and cerebrospinal fluid."), "Identify the exception.", "Skin is not a listed CNS protection."),
        mcq("olbio-u7-brain-q9", "challenge", "A voluntary action such as raising your hand is mainly controlled by the:", ["Cerebrum", "Cerebellum", "Medulla", "Receptors"], "a", prin("property", "Voluntary control", "Voluntary actions and conscious thought are cerebrum functions."), "Match action type to region.", "The cerebellum coordinates movement but does not initiate conscious decisions."),
        num("olbio-u7-brain-q10", "foundation", "The three main regions of the brain are the cerebrum, cerebellum and medulla oblongata. How many regions are there?", 3, "regions", prin("property", "Brain regions", "Cerebrum, cerebellum and medulla are the three main regions."), "Count the regions.", "3", "**3 regions**"),
        num("olbio-u7-brain-q11", "core", "Heart rate rises from 70 bpm to 90 bpm during exercise. Calculate the increase.", 20, "bpm", prin("property", "Heart rate change", "Increase = final - initial."), "Subtract initial from final.", "90 - 70 = 20", "**20 bpm increase**"),
        num("olbio-u7-brain-q12", "core", "The cerebellum coordinates balance, posture and fine motor control. How many functions are listed?", 3, "functions", prin("property", "Cerebellum functions", "Balance, posture and fine motor control are cerebellum roles."), "Count the functions.", "3", "**3 functions**"),
        num("olbio-u7-brain-q13", "challenge", "Damage to the medulla can affect breathing, heart rate and blood pressure. How many involuntary functions are listed?", 3, "functions", prin("property", "Medulla functions", "Breathing, heart rate and blood pressure are involuntary medulla controls."), "Count the functions.", "3", "**3 functions**"),
        open("olbio-u7-brain-q14", "core", 3, "Explain the function of the cerebellum.", prin("property", "Cerebellum", "Coordinates balance, posture and fine motor movements."), [["The cerebellum coordinates movement.", 1, "M"], ["It maintains balance and posture.", 1, "M"], ["It enables fine motor control such as writing or playing an instrument.", 1, "A"]], "The cerebellum coordinates balance, posture and fine motor movements.", "Assigning thinking or memory to the cerebellum."),
        open("olbio-u7-brain-q15", "challenge", 4, "Compare conscious and unconscious actions, naming the brain region responsible for each.", prin("property", "Brain regions", "Cerebrum: conscious; medulla: involuntary; cerebellum: coordination."), [["Conscious actions are voluntary, such as thinking or deciding to move.", 1, "M"], ["They are controlled by the cerebrum.", 1, "M"], ["Unconscious actions are involuntary, such as breathing and heart rate.", 1, "M"], ["They are controlled by the medulla oblongata.", 1, "A"]], "Conscious/voluntary actions are cerebrum functions; unconscious/involuntary actions are medulla functions.", "Swapping cerebrum and medulla roles."),
        struct("olbio-u7-brain-q16", "challenge", "A student labels the regions of the brain and their functions.", [["a", "Name the largest brain region and its main function.", 2], ["b", "Name the region that controls balance.", 1], ["c", "Name the region that controls breathing and heart rate.", 1], ["d", "State two ways the CNS is protected.", 3], ["e", "Give one example of a voluntary and one of an involuntary action.", 2]], prin("property", "Brain regions", "Cerebrum: conscious; cerebellum: balance; medulla: involuntary; protected by bones/meninges/CSF."), [["a", "The cerebrum is the largest region.", 1, "M"], ["a", "It controls conscious thought, memory and voluntary actions.", 1, "A"], ["b", "The cerebellum controls balance and coordination.", 1, "A"], ["c", "The medulla oblongata controls breathing and heart rate.", 1, "A"], ["d", "The skull/vertebrae protect the brain and spinal cord.", 1, "M"], ["d", "Meninges and cerebrospinal fluid cushion the CNS.", 1, "M"], ["d", "State two protective features.", 1, "A"], ["e", "Voluntary: e.g. raising a hand.", 1, "M"], ["e", "Involuntary: e.g. breathing.", 1, "A"]], "(a) cerebrum - conscious (b) cerebellum - balance (c) medulla - breathing/HR (d) skull/meninges/CSF (e) voluntary vs involuntary", "Confusing balance (cerebellum) with involuntary control (medulla)."),
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u7-brain-notes",
      title: "Sense organs and brain — revision notes",
      summary: "Receptors, pupil reflex, brain regions and functions.",
      sections: [
        {
          heading: "Receptors and pupil reflex",
          body: "Receptors detect stimuli → impulses to CNS. Pupil reflex: bright → constrict (protect retina); dim → dilate (more light). Arc: retina → brain → iris.",
        },
        {
          heading: "Brain",
          body: "Cerebrum: conscious thought/memory/voluntary. Cerebellum: balance/coordination. Medulla: breathing/heart rate/BP (involuntary). Protected by skull, meninges, CSF.",
        },
        {
          heading: "Exam technique",
          body: "- Pupil reflex: constrict in BRIGHT, dilate in DIM — don't reverse.\n- Medulla = involuntary; cerebrum = voluntary/conscious.",
        },
      ],
    },
  ],
};
