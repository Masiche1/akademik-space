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

export const lesson613: Lesson = {
  id: "cial-b-u6-lesson-6-3",
  code: "6-3",
  title: "Nervous system and hormones",
  goal: "I CAN describe the nervous system, reflex arc and hormonal coordination.",
  standards: ["9700 Unit 11: coordination"],
  vocabulary: [
    {
      term: "Neuron",
      definition: "Specialised cell transmitting electrical impulses.",
    },
    {
      term: "Synapse",
      definition:
        "Junction between neurons where neurotransmitters pass signals.",
    },
    {
      term: "Reflex arc",
      definition:
        "Automatic response pathway: receptor→sensory→relay→motor→effector.",
    },
    {
      term: "Neurotransmitter",
      definition: "Chemical messenger crossing synapse.",
    },
    {
      term: "CNS",
      definition: "Central nervous system: brain and spinal cord.",
    },
    {
      term: "Hormone",
      definition: "Chemical messenger carried in blood to target cells.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u6-neuron",
      title: "Neuron structure and nerve impulse",
      skill: "Describe neuron types and how impulses travel.",
      lesson: {
        sections: [
          {
            heading: "Neuron types",
            body: "Sensory neurons: receptor→CNS. Motor neurons: CNS→effector. Relay neurons: connect sensory to motor in CNS. Structure: cell body, dendrites, axon, myelin sheath, synaptic terminals.",
          },
          {
            heading: "Nerve impulse",
            body: "Resting potential ~-70mV. Depolarisation: Na⁺ influx reverses charge. Repolarisation: K⁺ efflux restores. Action potential travels along axon; myelin sheath speeds conduction (saltatory).",
          },
          {
            heading: "Synapse",
            body: "Impulse reaches synaptic terminal → Ca²⁺ influx → neurotransmitter release → binds to receptors on next neuron → new impulse. One-way transmission; can be excitatory or inhibitory.",
          },
        ],
        keyFormulas: [
          {
            name: "Neuron",
            statement:
              "Dendrites→cell body→axon→synapse; impulse=electrical→chemical→electrical.",
          },
        ],
        workedExample: {
          problem: "Why are synapses one-way?",
          solution:
            "Neurotransmitters only released from presynaptic terminals — receptors only on postsynaptic membrane.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-nr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which neuron type connects sensory to motor neurons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensory neuron" },
              { id: "b", text: "Interneuron" },
              { id: "c", text: "Motor neuron" },
              { id: "d", text: "Relay neuron" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relay neuron",
                statement: "Connects sensory to motor in CNS.",
              },
            ],
            steps: [
              { reasoning: "Relay = connector.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Relay neuron",
            commonErrors: ["Confusing with interneuron (same thing)."],
          },
        },
        {
          id: "cial-b-u6-nr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens at a synapse?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synapse",
                statement:
                  "Neurotransmitter released→binds receptors→new impulse.",
              },
            ],
            steps: [
              { reasoning: "Chemical transmission.", marks: 1, markCode: "M" },
              { reasoning: "One-way signal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurotransmitter crosses gap; one-way transmission.",
            commonErrors: ["Thinking impulses jump directly."],
          },
        },
        {
          id: "cial-b-u6-nr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the reflex arc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflex arc",
                statement: "Receptor→sensory→relay→motor→effector; automatic.",
              },
            ],
            steps: [
              { reasoning: "Stimulus→receptor.", marks: 1, markCode: "M" },
              { reasoning: "Sensory→CNS→motor.", marks: 1, markCode: "M" },
              {
                reasoning: "Motor→effector→response.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Automatic, fast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor→sensory→relay→motor→effector.",
            commonErrors: ["Missing relay neuron or order."],
          },
        },
        {
          id: "cial-b-u6-nr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nervous system.",
          parts: [
            { label: "a", prompt: "Three neuron types?", marks: 2 },
            { label: "b", prompt: "What happens at synapse?", marks: 2 },
            { label: "c", prompt: "Describe reflex arc.", marks: 3 },
            { label: "d", prompt: "Why is myelin important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nervous",
                statement: "Neurons+synapse+reflex+myelin.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sensory, motor, relay.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three named.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Neurotransmitter release.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "One-way.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Receptor→sensory→CNS.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Relay→motor→effector.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Automatic.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Speeds conduction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Saltatory jumping.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) sensory/motor/relay (b) neurotransmitter (c) reflex arc (d) speed",
          },
        },
        mcqQ({
          id: "cial-b-u6-nr-q5", d: "foundation",
          s: "Which way does a sensory neuron normally carry an impulse?",
          c: ["From receptor to CNS", "From CNS to effector", "Between two muscles", "From blood to brain only"], a: 0,
          p: ["Sensory neuron", "Sensory neurons carry impulses towards the CNS."],
          r: "Sensory neurons transmit impulses from receptors to the central nervous system.",
          f: "**(a)** From receptor to CNS", e: "Confusing sensory and motor direction.",
        }),
        mcqQ({
          id: "cial-b-u6-nr-q6", d: "core",
          s: "What is the approximate resting potential of a mammalian neuron?",
          c: ["$-70\\ \\mathrm{mV}$", "$+70\\ \\mathrm{mV}$", "$0\\ \\mathrm{mV}$", "$-7\\ \\mathrm{mV}$"], a: 0,
          p: ["Resting potential", "The inside of a resting neuron is negative relative to outside."],
          r: "A resting neuron has a membrane potential of about $-70\\ \\mathrm{mV}$.",
          f: "**(a)** $-70\\ \\mathrm{mV}$", e: "Choosing a positive or much smaller value.",
        }),
        mcqQ({
          id: "cial-b-u6-nr-q7", d: "challenge",
          s: "Which ion movement mainly causes depolarisation at the start of an action potential?",
          c: ["Sodium influx", "Potassium influx", "Calcium efflux", "Chloride influx"], a: 0,
          p: ["Depolarisation", "Voltage-gated sodium channels open and Na+ enters the axon."],
          r: "Sodium influx reverses the membrane potential during depolarisation.",
          f: "**(a)** Sodium influx", e: "Naming potassium movement, which restores the charge.",
        }),
        mcqQ({
          id: "cial-b-u6-nr-q8", d: "core",
          s: "Why does the myelin sheath speed up nerve impulses?",
          c: ["It allows saltatory conduction between nodes of Ranvier", "It produces more neurotransmitter", "It increases blood flow in the axon", "It makes the axon thicker"], a: 0,
          p: ["Myelin", "Myelin insulates the axon and supports saltatory conduction."],
          r: "The impulse jumps between nodes of Ranvier, speeding conduction.",
          f: "**(a)** It allows saltatory conduction between nodes of Ranvier", e: "Thinking myelin chemically transmits the impulse.",
        }),
        mcqQ({
          id: "cial-b-u6-nr-q9", d: "foundation",
          s: "Where are neurotransmitters released during synaptic transmission?",
          c: ["From the presynaptic terminal", "From the postsynaptic membrane", "From the cell body nucleus", "From the myelin sheath"], a: 0,
          p: ["Synaptic release", "Neurotransmitters are released from the presynaptic neuron."],
          r: "Neurotransmitter vesicles fuse at the presynaptic terminal.",
          f: "**(a)** From the presynaptic terminal", e: "Reversing presynaptic and postsynaptic roles.",
        }),
        mcqQ({
          id: "cial-b-u6-nr-q10", d: "challenge",
          s: "Why is transmission across a chemical synapse normally one-way?",
          c: ["Neurotransmitter receptors are located only on the postsynaptic membrane", "The synaptic gap conducts only backwards", "Calcium cannot enter presynaptic terminals", "Myelin blocks reverse impulses"], a: 0,
          p: ["Synaptic direction", "Release and receptor sites are on opposite sides of the synapse."],
          r: "Neurotransmitters are released presynaptically and receptors are postsynaptic, so signals pass one way.",
          f: "**(a)** Neurotransmitter receptors are located only on the postsynaptic membrane", e: "Assuming electrical synapses behave identically.",
        }),
        numQ({
          id: "cial-b-u6-nr-q11", d: "core",
          s: "An unmyelinated axon conducts an impulse at $1\\ \\mathrm{m\\ s^{-1}}$. Myelination increases conduction speed fivefold. What is the myelinated speed?",
          parts: [["a", 5, "m s^-1"]],
          steps: [
            ["Myelinated speed = unmyelinated speed multiplied by $5$.", 1, "M"],
            ["$1 \\times 5 = 5\\ \\mathrm{m\\ s^{-1}}$.", 1, "A"],
          ],
          p: ["Conduction speed", "Multiply baseline speed by the myelination factor."],
          f: "$5\\ \\mathrm{m\\ s^{-1}}$", e: "Adding $5\\ \\mathrm{m\\ s^{-1}}$ instead of multiplying.",
        }),
        numQ({
          id: "cial-b-u6-nr-q12", d: "core",
          s: "Each chemical synapse adds a delay of $0.5\\ \\mathrm{ms}$. How long is the total synaptic delay across $20$ synapses?",
          parts: [["a", 10, "ms"]],
          steps: [
            ["Total delay = delay per synapse multiplied by number of synapses.", 1, "M"],
            ["$0.5 \\times 20 = 10\\ \\mathrm{ms}$.", 1, "A"],
          ],
          p: ["Synaptic delay", "Delay per synapse times synapse number."],
          f: "$10\\ \\mathrm{ms}$", e: "Dividing by the number of synapses.",
        }),
        numQ({
          id: "cial-b-u6-nr-q13", d: "challenge",
          s: "A nerve pathway is $0.75\\ \\mathrm{m}$ long and conducts at $25\\ \\mathrm{m\\ s^{-1}}$. Calculate the time taken for the impulse to travel the pathway.",
          parts: [["a", 0.03, "s"]],
          steps: [
            ["Time = distance divided by speed.", 1, "M"],
            ["$0.75 / 25 = 0.03\\ \\mathrm{s}$.", 1, "A"],
          ],
          p: ["Impulse travel time", "Distance divided by conduction speed."],
          f: "$0.03\\ \\mathrm{s}$ ($30\\ \\mathrm{ms}$)", e: "Multiplying distance by speed.",
        }),
        numQ({
          id: "cial-b-u6-nr-q14", d: "challenge",
          s: "A neuron's membrane potential changes from $-70\\ \\mathrm{mV}$ at rest to $+30\\ \\mathrm{mV}$ at the peak of an action potential. What is the total voltage change?",
          parts: [["a", 100, "mV"]],
          steps: [
            ["Voltage change = peak potential minus resting potential.", 1, "M"],
            ["$30 - (-70) = 100\\ \\mathrm{mV}$.", 1, "A"],
          ],
          p: ["Action-potential change", "Subtract resting potential from peak potential."],
          f: "$100\\ \\mathrm{mV}$", e: "Subtracting $30$ from $70$ and ignoring the sign change.",
        }),
        numQ({
          id: "cial-b-u6-nr-q15", d: "challenge",
          s: "A presynaptic terminal contains $200$ vesicles and each vesicle releases an average of $50$ neurotransmitter molecules. How many molecules are released if all vesicles fuse?",
          parts: [["a", 10000, "molecules"]],
          steps: [
            ["Total molecules = vesicles multiplied by molecules per vesicle.", 1, "M"],
            ["$200 \\times 50 = 10000$ molecules.", 1, "A"],
          ],
          p: ["Neurotransmitter release", "Vesicle count times molecules per vesicle."],
          f: "$10000$ molecules", e: "Adding instead of multiplying.",
        }),
        openQ({
          id: "cial-b-u6-nr-q16", d: "challenge",
          s: "Describe the events at a chemical synapse that allow an impulse to pass from one neuron to the next.",
          steps: [
            ["The impulse reaches the presynaptic terminal and opens voltage-gated calcium channels.", 1, "M"],
            ["Calcium influx causes neurotransmitter vesicles to fuse and release transmitter.", 1, "M"],
            ["Transmitter diffuses across the synaptic cleft and binds to postsynaptic receptors.", 1, "M"],
            ["Receptor binding generates a new impulse in the postsynaptic neuron.", 1, "A"],
          ],
          p: ["Synaptic transmission", "Calcium, vesicle fusion, transmitter binding and new impulse."],
          f: "Impulse → Ca2+ influx → neurotransmitter release → receptor binding → new impulse.",
          e: "Describing direct electrical jump across the cleft.",
        }),
      ],
    },
    {
      id: "cial-b-u6-hormones",
      title: "Hormonal coordination",
      skill: "Describe major hormones and their target organs.",
      lesson: {
        sections: [
          {
            heading: "Hormone basics",
            body: "Hormones: chemical messengers secreted by endocrine glands into blood. Travel to target cells with specific receptors. Slower but longer-lasting than nervous signals.",
          },
          {
            heading: "Major hormones",
            body: "Insulin/glucagon (pancreas): blood glucose. Adrenaline (adrenal medulla): fight-or-flight. Thyroxine (thyroid): metabolism. Testosterone/oestrogen (gonads): reproduction. ADH (pituitary): water balance.",
          },
          {
            heading: "Nervous vs hormonal",
            body: "Nervous: fast, specific, short-lived. Hormonal: slow, widespread, long-lasting. Both maintain homeostasis — complementary coordination systems.",
          },
        ],
        keyFormulas: [
          {
            name: "Hormones",
            statement:
              "Gland→blood→target cell; slow+long-lasting vs fast nervous.",
          },
        ],
        workedExample: {
          problem: "Why does adrenaline act quickly?",
          solution:
            "Adrenaline triggers immediate fight-or-flight response — rapid release, widespread effects.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-hr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gland produces insulin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pancreas" },
              { id: "b", text: "Adrenal" },
              { id: "c", text: "Thyroid" },
              { id: "d", text: "Liver" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Insulin source",
                statement: "Pancreas produces insulin.",
              },
            ],
            steps: [
              { reasoning: "Pancreas = insulin.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Pancreas",
            commonErrors: ["Saying liver."],
          },
        },
        {
          id: "cial-b-u6-hr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do hormones differ from nervous signals?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hormone vs nerve",
                statement:
                  "Hormones slow+long-lasting+widespread; nerves fast+specific.",
              },
            ],
            steps: [
              { reasoning: "Speed difference.", marks: 1, markCode: "M" },
              {
                reasoning: "Duration/specificity difference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hormones slower but longer-lasting; nerves fast but brief.",
            commonErrors: ["Saying hormones are faster."],
          },
        },
        {
          id: "cial-b-u6-hr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Name three hormones and their functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hormones",
                statement:
                  "Insulin/glucose, adrenaline/stress, thyroxine/metabolism.",
              },
            ],
            steps: [
              {
                reasoning: "Any three hormones named.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Functions linked.", marks: 1, markCode: "M" },
              { reasoning: "Correct gland.", marks: 1, markCode: "M" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Insulin→glucose; adrenaline→stress; thyroxine→metabolism.",
            commonErrors: ["Hormone without function."],
          },
        },
        {
          id: "cial-b-u6-hr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Hormonal coordination.",
          parts: [
            { label: "a", prompt: "Insulin source?", marks: 1 },
            { label: "b", prompt: "Hormones vs nerves?", marks: 2 },
            { label: "c", prompt: "Three hormones+functions?", marks: 3 },
            { label: "d", prompt: "Why are hormones long-lasting?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hormones",
                statement: "Source+comparison+examples+duration.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Pancreas.", marks: 1, markCode: "B" },
              {
                part: "b",
                reasoning: "Speed difference.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Duration difference.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Three hormones.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Functions linked.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Blood transport.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Slow degradation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Sustained effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) pancreas (b) slow/long vs fast/brief (c) examples (d) blood+slow degradation",
          },
        },
        mcqQ({
          id: "cial-b-u6-hr-q5", d: "foundation",
          s: "What is a hormone?",
          c: ["A chemical messenger carried in the blood", "An electrical signal in a neuron", "A structural protein in muscle", "A digestive enzyme"], a: 0,
          p: ["Hormone", "Hormones are chemical messengers transported in blood."],
          r: "Hormones are chemical messengers secreted into the bloodstream.",
          f: "**(a)** A chemical messenger carried in the blood", e: "Confusing hormones with neurotransmitters.",
        }),
        mcqQ({
          id: "cial-b-u6-hr-q6", d: "core",
          s: "Why do hormones affect only certain cells?",
          c: ["Only target cells have receptors for that hormone", "Hormones cannot enter the bloodstream", "All cells respond identically", "Hormones are too large to diffuse"], a: 0,
          p: ["Target specificity", "Hormone action depends on complementary receptors."],
          r: "Hormones bind only to cells carrying specific receptors.",
          f: "**(a)** Only target cells have receptors for that hormone", e: "Assuming hormones affect every cell equally.",
        }),
        mcqQ({
          id: "cial-b-u6-hr-q7", d: "challenge",
          s: "Compared with nervous coordination, hormonal coordination is usually:",
          c: ["Slower but longer-lasting and more widespread", "Faster but shorter-lasting", "Always local and instant", "Independent of the blood"], a: 0,
          p: ["Nervous vs hormonal", "Hormones travel in blood and act more slowly and persistently."],
          r: "Hormonal signals are slower and longer-lasting because they are carried in blood.",
          f: "**(a)** Slower but longer-lasting and more widespread", e: "Reversing the speed and duration comparison.",
        }),
        mcqQ({
          id: "cial-b-u6-hr-q8", d: "core",
          s: "Which gland releases adrenaline during the fight-or-flight response?",
          c: ["Adrenal medulla", "Thyroid gland", "Pancreas", "Posterior pituitary"], a: 0,
          p: ["Adrenaline", "Adrenaline is secreted by the adrenal medulla."],
          r: "Adrenaline is released by the adrenal medulla.",
          f: "**(a)** Adrenal medulla", e: "Naming a gland for another hormone.",
        }),
        mcqQ({
          id: "cial-b-u6-hr-q9", d: "foundation",
          s: "Which hormone controls the basal metabolic rate?",
          c: ["Thyroxine", "Insulin", "Adrenaline", "ADH"], a: 0,
          p: ["Thyroxine", "Thyroxine from the thyroid regulates metabolic rate."],
          r: "Thyroxine regulates metabolic rate.",
          f: "**(a)** Thyroxine", e: "Choosing a hormone with a different role.",
        }),
        mcqQ({
          id: "cial-b-u6-hr-q10", d: "challenge",
          s: "Why can hormonal effects last longer than nervous effects?",
          c: ["Hormones remain in circulation until degraded or removed", "Neurons cannot cross synapses", "Hormones move by saltatory conduction", "Nervous impulses are always inhibitory"], a: 0,
          p: ["Hormone duration", "Blood transport and slower removal prolong hormonal action."],
          r: "Hormones persist in blood until metabolised or excreted, giving longer effects.",
          f: "**(a)** Hormones remain in circulation until degraded or removed", e: "Attributing duration to synaptic structure.",
        }),
        numQ({
          id: "cial-b-u6-hr-q11", d: "core",
          s: "Cardiac output is $5\\ \\mathrm{L\\ min^{-1}}$ and total blood volume is $5\\ \\mathrm{L}$. How long does it take blood to circulate once through the body?",
          parts: [["a", 1, "min"]],
          steps: [
            ["Circulation time = blood volume divided by cardiac output.", 1, "M"],
            ["$5 / 5 = 1\\ \\mathrm{min}$.", 1, "A"],
          ],
          p: ["Circulation time", "Blood volume divided by cardiac output."],
          f: "$1\\ \\mathrm{min}$", e: "Multiplying volume by output.",
        }),
        numQ({
          id: "cial-b-u6-hr-q12", d: "core",
          s: "An endocrine gland releases $2$ µg of hormone per minute into a blood volume of $5\\ \\mathrm{L}$. Assuming even distribution, what is the concentration?",
          parts: [["a", 0.4, "µg L^-1"]],
          steps: [
            ["Concentration = amount released divided by blood volume.", 1, "M"],
            ["$2 / 5 = 0.4$ µg/L.", 1, "A"],
          ],
          p: ["Hormone concentration", "Mass divided by volume."],
          f: "$0.4$ µg/L", e: "Multiplying mass by volume.",
        }),
        numQ({
          id: "cial-b-u6-hr-q13", d: "challenge",
          s: "A target cell population has $1000$ hormone receptors and $75\\%$ are occupied by hormone. How many receptors are occupied?",
          parts: [["a", 750, "receptors"]],
          steps: [
            ["Occupied receptors = $75\\%$ of $1000$.", 1, "M"],
            ["$0.75 \\times 1000 = 750$ receptors.", 1, "A"],
          ],
          p: ["Receptor occupancy", "Percentage of total receptors occupied."],
          f: "$750$ receptors", e: "Reporting the $250$ unoccupied receptors.",
        }),
        numQ({
          id: "cial-b-u6-hr-q14", d: "challenge",
          s: "A nervous response takes $0.01\\ \\mathrm{s}$ while a hormonal response takes $30\\ \\mathrm{s}$. How many times slower is the hormonal response?",
          parts: [["a", 3000, "times"]],
          steps: [
            ["Ratio = hormonal time divided by nervous time.", 1, "M"],
            ["$30 / 0.01 = 3000$ times slower.", 1, "A"],
          ],
          p: ["Response-time ratio", "Hormonal time divided by nervous time."],
          f: "$3000$ times slower", e: "Dividing the smaller time by the larger.",
        }),
        numQ({
          id: "cial-b-u6-hr-q15", d: "challenge",
          s: "The glucose set point is $5.0\\ \\mathrm{mmol\\ L^{-1}}$ and measured blood glucose is $8.0\\ \\mathrm{mmol\\ L^{-1}}$. By what percentage is measured glucose above the set point?",
          parts: [["a", 60, "%"]],
          steps: [
            ["Deviation = $8.0 - 5.0 = 3.0\\ \\mathrm{mmol\\ L^{-1}}$.", 1, "M"],
            ["Percentage = $(3.0 / 5.0) \\times 100 = 60\\%$.", 1, "A"],
          ],
          p: ["Set-point deviation", "Deviation divided by set point."],
          f: "$60\\%$ above the set point", e: "Using $8.0$ as the denominator.",
        }),
        openQ({
          id: "cial-b-u6-hr-q16", d: "challenge",
          s: "Compare nervous and hormonal coordination in terms of speed, specificity and duration.",
          steps: [
            ["Nervous impulses travel rapidly along neurons and synapses.", 1, "M"],
            ["Hormones travel more slowly in the blood to widespread targets.", 1, "M"],
            ["Nervous signals are brief and highly specific to pathways.", 1, "M"],
            ["Hormonal effects are longer-lasting because hormones persist in circulation.", 1, "A"],
          ],
          p: ["Coordination comparison", "Speed, target specificity and duration differ between systems."],
          f: "Nervous = fast, specific, brief; hormonal = slower, widespread, longer-lasting.",
          e: "Listing only similarities or one system.",
        }),
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u6-coordination-notes",
      title: "Coordination — revision notes",
      summary: "Neurons, synapses, reflex arc and hormonal systems.",
      sections: [
        {
          heading: "Nervous",
          body: "Sensory/motor/relay neurons. Synapse: neurotransmitter transmission. Reflex arc: receptor→sensory→relay→motor→effector. Myelin speeds conduction.",
        },
        {
          heading: "Hormonal",
          body: "Gland→blood→target. Insulin/glucose, adrenaline/stress, thyroxine/metabolism, ADH/water. Slow but long-lasting.",
        },
        {
          heading: "Exam checklist",
          body: "Can you describe reflex arc? Compare neuron types? Name hormones+functions? Contrast nervous vs hormonal?",
        },
      ],
    },
  ],
};
