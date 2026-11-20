import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "olbio-u7-lesson-7-1",
  code: "7-1",
  title: "The Nervous System",
  goal: "I CAN describe the structure of neurons, the reflex arc, and the central and peripheral nervous systems.",
  standards: ["5090 7.1"],
  vocabulary: [
    { term: "Neuron", definition: "Nerve cell that transmits electrical impulses." },
    { term: "Dendrite", definition: "Branching part of neuron receiving signals from other neurons." },
    { term: "Axon", definition: "Long fibre carrying impulse away from cell body." },
    { term: "Myelin sheath", definition: "Fatty insulation around axon; speeds up impulse transmission." },
    { term: "Synapse", definition: "Gap between neurons where neurotransmitters carry the signal." },
    { term: "Reflex arc", definition: "Automatic response pathway: receptor → sensory neuron → spinal cord → motor neuron → effector." },
    { term: "Central nervous system", definition: "Brain and spinal cord — processing centre." },
    { term: "Peripheral nervous system", definition: "Nerves connecting CNS to receptors and effectors." },
  ],
  concepts: [
    {
      id: "olbio-u7-neuron",
      title: "Neuron structure and impulse",
      skill: "Describe neuron structure and how impulses are transmitted.",
      lesson: {
        sections: [
          {
            heading: "Neuron parts",
            body: "- **Dendrites**: receive signals from other neurons.\n- **Cell body**: contains nucleus.\n- **Axon**: transmits impulse away; may be myelinated.\n- **Axon terminals**: release neurotransmitter at synapse.",
          },
          {
            heading: "Types of neuron",
            body: "- **Sensory**: receptor → CNS (carries 'message in').\n- **Motor**: CNS → effector (carries 'message out').\n- **Relay**: within CNS, connects sensory to motor.",
          },
          {
            heading: "Synapse",
            body: "Impulse reaches axon terminal → neurotransmitter released → diffuses across gap → binds to receptors on next neuron → new impulse generated. Ensures one-way transmission.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is the myelin sheath important?",
          solution: "It insulates the axon and speeds up impulse transmission by saltatory conduction.",
        },
      },
      questions: [
        {
          id: "olbio-u7-neuron-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a neuron receives signals from other neurons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dendrites" },
              { id: "b", text: "Axon" },
              { id: "c", text: "Myelin sheath" },
              { id: "d", text: "Cell body only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Dendrites", statement: "Receive signals from other neurons." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{dendrites}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Dendrites",
            commonErrors: ["Choosing axon — axon TRANSMITS, dendrites RECEIVE."],
          },
        },
        {
          id: "olbio-u7-neuron-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the myelin sheath.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Myelin sheath", statement: "Insulates axon; speeds impulse transmission." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{speeds transmission}", marks: 1, markCode: "M" },
              { reasoning: "Complete: insulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It insulates the axon and speeds up transmission of nerve impulses.",
            commonErrors: ["Saying 'produces neurotransmitter' — that's the axon terminal."],
          },
        },
        {
          id: "olbio-u7-neuron-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how an impulse crosses a synapse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Synapse", statement: "Neurotransmitter released → diffuses → binds receptors → new impulse." },
            ],
            steps: [
              { reasoning: "Impulse reaches axon terminal.", working: "\\text{axon terminal}", marks: 1, markCode: "M" },
              { reasoning: "Neurotransmitter released and diffuses across gap.", working: "\\text{NT released}", marks: 1, markCode: "M" },
              { reasoning: "Binds receptors on next neuron → new impulse.", working: "\\text{receptors}", marks: 1, markCode: "M" },
              { reasoning: "Ensures one-way signal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Impulse reaches the axon terminal, releasing neurotransmitter which diffuses across the synapse and binds to receptors on the next neuron, generating a new impulse — ensuring one-way transmission.",
            commonErrors: ["Saying 'electricity jumps the gap' — it's chemical via neurotransmitter."],
          },
        },
        {
          id: "olbio-u7-neuron-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the structure of a motor neuron and its function.",
          parts: [
            { label: "a", prompt: "Label the main parts of a motor neuron.", marks: 3 },
            { label: "b", prompt: "State the direction of impulse transmission.", marks: 2 },
            { label: "c", prompt: "Explain how the myelin sheath speeds up transmission.", marks: 2 },
            { label: "d", prompt: "State the role of the synapse in motor control.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Motor neuron", statement: "Dendrites + cell body + axon + terminals; carries impulse CNS → effector." },
            ],
            steps: [
              { part: "a", reasoning: "Dendrites/cell body/axon.", working: "\\text{dendrites, body, axon}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Axon terminals/myelin.", working: "\\text{terminals, myelin}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "From CNS to effector.", working: "\\text{CNS} \\to \\text{effector}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State direction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Insulation prevents signal loss.", working: "\\text{insulation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Impulse jumps between nodes → faster.", working: "\\text{saltatory}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Neurotransmitter at synapse ensures precise, one-way control.", working: "\\text{one-way control}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State role.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) dendrites/body/axon/terminals/myelin (b) CNS→effector (c) insulation + saltatory conduction (d) precise one-way transmission",
            commonErrors: ["In (b) reversing direction — motor goes OUT to effector."],
          },
        },
      ],
    },
    {
      id: "olbio-u7-reflex",
      title: "Reflex arc",
      skill: "Describe the reflex arc pathway and explain its advantage.",
      lesson: {
        sections: [
          {
            heading: "Pathway",
            body: "**Stimulus → receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector → response**\n\nExample: hand touches hot object → pain receptors → sensory neuron → spinal cord → motor neuron → muscles contract → hand withdrawn.",
          },
          {
            heading: "Why a reflex?",
            body: "Automatic and rapid — doesn't wait for brain processing. Protective: removes body from harm before conscious awareness. The brain is informed afterwards (you feel pain after withdrawing).",
          },
          {
            heading: "Components",
            body: "- **Receptor**: detects stimulus (e.g. temperature, pain).\n- **Sensory neuron**: carries impulse to CNS.\n- **Relay neuron**: connects sensory to motor in spinal cord.\n- **Motor neuron**: carries impulse to effector.\n- **Effector**: muscle/gland producing response.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does your hand withdraw before you feel pain?",
          solution: "The reflex arc acts via the spinal cord without brain involvement — faster than conscious processing; the brain is informed afterwards.",
        },
      },
      questions: [
        {
          id: "olbio-u7-reflex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which component of the reflex arc carries the impulse TO the central nervous system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensory neuron" },
              { id: "b", text: "Motor neuron" },
              { id: "c", text: "Effector" },
              { id: "d", text: "Receptor only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sensory neuron", statement: "Carries impulse receptor → CNS." },
            ],
            steps: [
              { reasoning: "Recall direction.", working: "\\text{sensory} \\to \\text{CNS}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sensory neuron",
            commonErrors: ["Choosing motor — motor carries impulse OUT to effector."],
          },
        },
        {
          id: "olbio-u7-reflex-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the components of a reflex arc in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex arc", statement: "Receptor → sensory → relay → motor → effector." },
            ],
            steps: [
              { reasoning: "Give the sequence.", working: "\\text{receptor} \\to \\text{sensory} \\to \\text{relay} \\to \\text{motor} \\to \\text{effector}", marks: 1, markCode: "M" },
              { reasoning: "State in correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor → sensory neuron → relay neuron (CNS) → motor neuron → effector.",
            commonErrors: ["Putting motor before relay or omitting relay."],
          },
        },
        {
          id: "olbio-u7-reflex-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why reflex actions are faster than conscious actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex speed", statement: "Spinal cord relay avoids brain processing delay." },
            ],
            steps: [
              { reasoning: "Reflex uses spinal cord relay.", working: "\\text{spinal cord}", marks: 1, markCode: "M" },
              { reasoning: "Fewer synapses/steps than conscious path.", working: "\\text{fewer steps}", marks: 1, markCode: "M" },
              { reasoning: "Doesn't wait for brain processing.", working: "\\text{no brain delay}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: protective and rapid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The reflex arc uses a spinal cord relay neuron with fewer synapses, bypassing brain processing — so the response is faster and protective.",
            commonErrors: ["Saying 'reflexes don't use neurons' — they use the same neurons, just a shorter path."],
          },
        },
        {
          id: "olbio-u7-reflex-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A patient touches a hot pan and immediately withdraws their hand.",
          parts: [
            { label: "a", prompt: "Trace the reflex arc for this response.", marks: 4 },
            { label: "b", prompt: "Identify the receptor and effector.", marks: 2 },
            { label: "c", prompt: "Explain why the response is automatic.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex arc example", statement: "Pain receptors → sensory → spinal relay → motor → muscles." },
            ],
            steps: [
              { part: "a", reasoning: "Receptor + sensory neuron.", working: "\\text{receptors} \\to \\text{sensory}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Relay + motor neuron.", working: "\\text{relay} \\to \\text{motor}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Effector + response.", working: "\\text{muscles contract}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete sequence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Receptor: pain/temperature receptors in skin.", working: "\\text{pain receptors}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effector: muscles in arm/hand.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Pathway doesn't involve conscious brain processing.", working: "\\text{no brain}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Spinal cord handles it automatically.", working: "\\text{spinal cord}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude: innate protective response.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) receptors→sensory→spinal relay→motor→muscles (b) pain receptors/muscles (c) spinal cord automatic, no conscious processing",
            commonErrors: ["In (a) saying 'brain sends message' — the reflex bypasses the brain."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u7-nervous-notes",
      title: "Nervous system — revision notes",
      summary: "Neuron structure, synapse, and reflex arc.",
      sections: [
        {
          heading: "Neuron and synapse",
          body: "Dendrites receive, axon transmits, myelin speeds up. Synapse: neurotransmitter crosses gap → one-way signal. Types: sensory (in), motor (out), relay (connect).",
        },
        {
          heading: "Reflex arc",
          body: "Receptor → sensory → relay (spinal cord) → motor → effector. Automatic, fast, protective; brain informed afterwards.",
        },
        {
          heading: "Exam technique",
          body: "- Motor neuron: CNS → effector (OUT). Sensory: receptor → CNS (IN).\n- Synapse = chemical (neurotransmitter), not electrical.\n- Reflex arc order: receptor → sensory → relay → motor → effector.",
        },
      ],
    },
  ],
};
