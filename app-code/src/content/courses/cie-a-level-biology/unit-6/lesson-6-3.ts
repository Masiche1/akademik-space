import type { Lesson } from "../../../types.ts";

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
              { id: "a", text: "Relay neuron" },
              { id: "b", text: "Sensory neuron" },
              { id: "c", text: "Motor neuron" },
              { id: "d", text: "Interneuron" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Liver" },
              { id: "c", text: "Thyroid" },
              { id: "d", text: "Adrenal" },
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
