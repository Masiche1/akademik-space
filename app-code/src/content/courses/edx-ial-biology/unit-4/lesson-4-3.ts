import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edialbio-u4-lesson-4-3",
  code: "4-3",
  title: "Nervous and Hormonal Coordination",
  goal: "I CAN describe nerve impulses, synapses and hormonal communication.",
  standards: ["IB4 Metabolism, homeostasis and response", "Coordination"],
  vocabulary: [
    { term: "Neuron", definition: "Nerve cell transmitting impulses." },
    { term: "Resting potential", definition: "Membrane potential ~−70 mV when neuron inactive." },
    { term: "Action potential", definition: "Rapid depolarisation propagating along axon." },
    { term: "Synapse", definition: "Junction between neurons where neurotransmitters pass signals." },
  ],
  concepts: [
    {
      id: "edialbio-u4-neuron",
      title: "Nerve impulses",
      skill: "Describe resting/action potentials and impulse propagation.",
      lesson: {
        sections: [
          {
            heading: "Resting potential",
            body: "Inside neuron ~−70 mV relative to outside. Maintained by Na⁺/K⁺ pump (3 Na⁺ out, 2 K⁺ in) and selective permeability. K⁺ leaks out → negative inside. Requires ATP.",
          },
          {
            heading: "Action potential",
            body: "Stimulus depolarises membrane: Na⁺ channels open → Na⁺ floods in → +40 mV. Na⁺ channels close, K⁺ channels open → K⁺ leaves → repolarisation. Myelin sheath + nodes of Ranvier → saltatory conduction (faster). Impulse is all-or-nothing.",
          },
          {
            heading: "Synapse",
            body: "Impulse reaches axon terminal → Ca²⁺ enters → neurotransmitter vesicles fuse → release into synaptic cleft → bind receptors on next neuron → new impulse. One-way transmission; can be excitatory or inhibitory.",
          },
        ],
        keyFormulas: [
          { name: "Resting", statement: "−70 mV; Action peak: +40 mV" },
        ],
        workedExample: {
          problem: "Why is the nerve impulse all-or-nothing?",
          solution: "Once threshold potential reached, full depolarisation occurs regardless of stimulus strength — either fires completely or not at all.",
        },
      },
      questions: [
        {
          id: "edialbio-neur-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What maintains the resting potential of a neuron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Na⁺/K⁺ pump" },
              { id: "b", text: "Diffusion of glucose" },
              { id: "c", text: "Osmosis" },
              { id: "d", text: "Photosynthesis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Resting potential", statement: "Na⁺/K⁺ pump maintains −70 mV." }],
            steps: [{ reasoning: "Pump actively transports ions.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Na⁺/K⁺ pump",
          },
        },
        {
          id: "edialbio-neur-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the sequence of an action potential.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Action potential", statement: "Depolarisation → repolarisation." }],
            steps: [
              { reasoning: "Na⁺ channels open → Na⁺ enters → depolarisation.", marks: 1, markCode: "M" },
              { reasoning: "Peak ~+40 mV then Na⁺ channels close.", marks: 1, markCode: "A" },
              { reasoning: "K⁺ channels open → K⁺ leaves → repolarisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Na⁺ in → depolarise → K⁺ out → repolarise",
            commonErrors: ["Wrong ion order."],
          },
        },
        {
          id: "edialbio-neur-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why myelinated neurons conduct impulses faster.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Myelin", statement: "Saltatory conduction at nodes." }],
            steps: [
              { reasoning: "Myelin sheath insulates axon preventing ion flow across membrane.", marks: 1, markCode: "M" },
              { reasoning: "Impulse 'jumps' between nodes of Ranvier (saltatory).", marks: 1, markCode: "M" },
              { reasoning: "Only depolarisation at nodes → faster propagation.", marks: 1, markCode: "A" },
              { reasoning: "Conclude speed advantage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Saltatory conduction at nodes → faster",
            commonErrors: ["Saying myelin conducts electricity."],
          },
        },
        {
          id: "edialbio-neur-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe synaptic transmission.",
          parts: [
            { label: "a", prompt: "Arrival of impulse at presynaptic terminal.", marks: 3 },
            { label: "b", prompt: "Neurotransmitter release.", marks: 4 },
            { label: "c", prompt: "Postsynaptic response.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Synapse", statement: "Ca²⁺ → vesicle fusion → neurotransmitter → receptors." }],
            steps: [
              { part: "a", reasoning: "Action potential reaches axon terminal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Voltage-gated Ca²⁺ channels open.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ca²⁺ enters terminal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ca²⁺ triggers synaptic vesicle fusion with membrane.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Neurotransmitter released into cleft (e.g. acetylcholine).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diffuses across ~20 nm gap.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Binds to receptors on postsynaptic membrane.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Receptor binding opens ion channels.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Na⁺ enters → depolarisation → new action potential.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Enzymes break down neurotransmitter; reuptake.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "AP → Ca²⁺ → vesicle → neurotransmitter → receptors → new AP",
            commonErrors: ["Saying neurotransmitter enters cell."],
          },
        },
      ],
    },
    {
      id: "edialbio-u4-hormones",
      title: "Hormonal coordination",
      skill: "Compare nervous and hormonal systems and describe endocrine glands and feedback.",
      lesson: {
        sections: [
          {
            heading: "Nervous vs hormonal",
            body: "Nervous: fast, specific, short-lived, direct to target. Hormonal: slower, widespread, long-lasting, via bloodstream. Complementary — nervous for rapid responses, hormonal for sustained regulation.",
          },
          {
            heading: "Endocrine glands",
            body: "Pituitary: 'master gland' — growth hormone, TSH, ACTH etc. Thyroid: thyroxine (metabolism). Pancreas: insulin/glucagon (glucose). Adrenal: adrenaline (fight/flight), cortisol. Gonads: sex hormones. Each hormone has target cells with specific receptors.",
          },
          {
            heading: "Hormone action",
            body: "Hormones bind receptors on target cells → trigger response. Steroid hormones enter cell, bind DNA → affect gene expression. Peptide hormones bind surface receptors → second messenger cascade. Feedback loops maintain levels.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does adrenaline act faster than thyroxine?",
          solution: "Adrenaline is peptide → surface receptors → fast second messenger cascade. Thyroxine is steroid → enters cell → changes gene expression → slower.",
        },
      },
      questions: [
        {
          id: "edialbio-horm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gland produces adrenaline?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pituitary" },
              { id: "b", text: "Adrenal" },
              { id: "c", text: "Thyroid" },
              { id: "d", text: "Pancreas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Adrenal", statement: "Produces adrenaline/cortisol." }],
            steps: [{ reasoning: "Adrenal medulla → adrenaline.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Adrenal",
          },
        },
        {
          id: "edialbio-horm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between nervous and hormonal communication.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Nervous vs hormonal", statement: "Speed, specificity, duration." }],
            steps: [
              { reasoning: "Nervous: fast (ms); hormonal: slower (seconds-minutes).", marks: 1, markCode: "A" },
              { reasoning: "Nervous: specific target; hormonal: widespread via blood.", marks: 1, markCode: "A" },
              { reasoning: "Nervous: short-lived; hormonal: long-lasting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speed, specificity, duration differ",
            commonErrors: ["Saying hormones are faster."],
          },
        },
        {
          id: "edialbio-horm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how steroid hormones differ from peptide hormones in mechanism.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Hormone types", statement: "Steroid enters cell; peptide surface receptor." }],
            steps: [
              { reasoning: "Steroid: lipid-soluble → crosses membrane → binds intracellular receptor → affects DNA.", marks: 1, markCode: "M" },
              { reasoning: "Slower but longer-lasting effect.", marks: 1, markCode: "A" },
              { reasoning: "Peptide: binds surface receptor → second messenger → fast response.", marks: 1, markCode: "M" },
              { reasoning: "Cannot cross membrane.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steroid: intracellular receptor; peptide: surface receptor",
            commonErrors: ["Saying all hormones enter cells."],
          },
        },
        {
          id: "edialbio-horm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe how hormones coordinate the body's response to stress.",
          parts: [
            { label: "a", prompt: "Immediate response (sympathetic).", marks: 4 },
            { label: "b", prompt: "Hormonal response (adrenaline).", marks: 3 },
            { label: "c", prompt: "Long-term response (cortisol).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Stress response", statement: "Fight or flight via sympathetic + hormones." }],
            steps: [
              { part: "a", reasoning: "Sympathetic nervous system activated.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Heart rate ↑, bronchi dilate, blood to muscles.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Digestion slows, pupils dilate.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Prepares body for action.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Adrenal medulla releases adrenaline.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prolongs sympathetic effects.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Increases glucose release from liver.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adrenal cortex releases cortisol (steroid).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Longer-term energy mobilisation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suppresses immune/inflammatory responses.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Sympathetic + adrenaline + cortisol → fight/flight",
            commonErrors: ["Missing cortisol."],
          },
        },
      ],
    },
  ],
};
