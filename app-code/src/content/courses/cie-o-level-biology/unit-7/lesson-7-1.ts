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
              { id: "a", text: "Axon" },
              { id: "b", text: "Cell body only" },
              { id: "c", text: "Myelin sheath" },
              { id: "d", text: "Dendrites" },
            ],
            correctChoiceId: "d",
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
        {
          id: "olbio-u7-neuron-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a neuron carries the impulse away from the cell body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Receptor" },
              { id: "b", text: "Axon" },
              { id: "c", text: "Dendrite" },
              { id: "d", text: "Effector" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Axon", statement: "Carries the impulse away from the cell body." },
            ],
            steps: [
              { reasoning: "Recall the axon's direction of transmission.", working: "\\text{axon} \\to \\text{away}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Axon",
            commonErrors: ["Choosing dendrite — dendrites receive impulses toward the cell body."],
          },
        },
        {
          id: "olbio-u7-neuron-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of a sensory neuron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sensory neuron", statement: "Carries impulses from receptors to the CNS." },
            ],
            steps: [
              { reasoning: "Give the direction of transmission.", working: "\\text{receptor} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { reasoning: "Identify the role.", working: "\\text{carry impulses}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A sensory neuron carries nerve impulses from receptors to the central nervous system.",
            commonErrors: ["Saying it carries impulses to an effector — that is a motor neuron."],
          },
        },
        {
          id: "olbio-u7-neuron-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What chemical crosses the gap at a synapse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Insulin" },
              { id: "c", text: "Neurotransmitter" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Synapse", statement: "Neurotransmitter diffuses across the gap to the next neuron." },
            ],
            steps: [
              { reasoning: "Recall the chemical messenger at synapses.", working: "\\text{neurotransmitter}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Neurotransmitter",
            commonErrors: ["Choosing adrenaline — it is a hormone carried in blood, not a synaptic messenger."],
          },
        },
        {
          id: "olbio-u7-neuron-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the function of the cell body of a neuron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Cell body", statement: "Contains the nucleus and controls the neuron's activities." },
            ],
            steps: [
              { reasoning: "Identify where the nucleus is located.", working: "\\text{cell body}", marks: 1, markCode: "M" },
              { reasoning: "State its role in maintaining the neuron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The cell body contains the nucleus and maintains the neuron's normal activities.",
            commonErrors: ["Saying it transmits impulses — the axon does that."],
          },
        },
        {
          id: "olbio-u7-neuron-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the myelin sheath speeds up nerve impulses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Myelin sheath", statement: "Insulates the axon and allows saltatory conduction between nodes of Ranvier." },
            ],
            steps: [
              { reasoning: "State that the sheath insulates the axon.", working: "\\text{insulation}", marks: 1, markCode: "M" },
              { reasoning: "Explain that the impulse jumps between nodes of Ranvier.", working: "\\text{nodes of Ranvier}", marks: 1, markCode: "M" },
              { reasoning: "Conclude that this increases transmission speed.", working: "\\text{faster}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The myelin sheath insulates the axon, so the impulse can jump between nodes of Ranvier (saltatory conduction), increasing its speed.",
            commonErrors: ["Saying the sheath produces the impulse — it only speeds up transmission."],
          },
        },
        {
          id: "olbio-u7-neuron-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the functions of sensory and motor neurons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Neurone types", statement: "Sensory carries impulses to the CNS; motor carries impulses from the CNS to effectors." },
            ],
            steps: [
              { reasoning: "State the direction for sensory neurons.", working: "\\text{receptor} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { reasoning: "State the direction for motor neurons.", working: "\\text{CNS} \\to \\text{effector}", marks: 1, markCode: "M" },
              { reasoning: "Give the role of each type.", working: "\\text{message in/out}", marks: 1, markCode: "M" },
              { reasoning: "Make a clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sensory neurons carry impulses from receptors to the CNS, while motor neurons carry impulses from the CNS to effectors.",
            commonErrors: ["Reversing the directions — sensory goes in and motor goes out."],
          },
        },
        {
          id: "olbio-u7-neuron-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the function of a relay neuron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produces hormones" },
              { id: "b", text: "Connects sensory and motor neurons in the CNS" },
              { id: "c", text: "Contracts muscles" },
              { id: "d", text: "Detects stimuli in the skin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Relay neuron", statement: "Connects sensory and motor neurons within the CNS." },
            ],
            steps: [
              { reasoning: "Recall the relay neuron's role.", working: "\\text{sensory} \\leftrightarrow \\text{motor}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Connects sensory and motor neurons in the CNS",
            commonErrors: ["Choosing receptor — receptors detect stimuli; relay neurons connect neurons."],
          },
        },
        {
          id: "olbio-u7-neuron-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State one effect of damage to the myelin sheath.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Myelin damage", statement: "Loss of insulation slows or disrupts impulse transmission." },
            ],
            steps: [
              { reasoning: "Link the sheath to fast transmission.", working: "\\text{saltatory conduction}", marks: 1, markCode: "M" },
              { reasoning: "State that impulses become slower or may fail.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Damage to the myelin sheath slows nerve impulse transmission and can disrupt communication between neurons.",
            commonErrors: ["Saying the neuron cannot produce impulses at all — conduction is slowed or interrupted."],
          },
        },
        {
          id: "olbio-u7-neuron-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why impulses normally travel in only one direction across a synapse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Synaptic direction", statement: "Neurotransmitter is released only from the axon terminal and receptors are on the next neuron." },
            ],
            steps: [
              { reasoning: "Neurotransmitter is stored and released at axon terminals.", working: "\\text{axon terminal}", marks: 1, markCode: "M" },
              { reasoning: "Receptors that respond are located on the receiving neuron.", working: "\\text{receptors}", marks: 1, markCode: "M" },
              { reasoning: "Conclude that the arrangement makes transmission one-way.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurotransmitter is released only from axon terminals and binds to receptors on the next neuron, so the signal cannot normally travel backwards across the synapse.",
            commonErrors: ["Saying synapses are gaps with no chemical involvement."],
          },
        },
        {
          id: "olbio-u7-neuron-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A stimulus is detected by a receptor in the skin. State the next two structures involved before the CNS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sensory pathway", statement: "Receptor → sensory neuron → CNS." },
            ],
            steps: [
              { reasoning: "The impulse is carried by a sensory neuron.", working: "\\text{sensory neuron}", marks: 1, markCode: "M" },
              { reasoning: "The impulse then reaches the CNS, often via a relay neuron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A sensory neuron carries the impulse, and it then reaches the central nervous system where a relay neuron may connect it to a motor pathway.",
            commonErrors: ["Starting with a motor neuron — the impulse has not yet reached an effector."],
          },
        },
        {
          id: "olbio-u7-neuron-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe the path of a nerve impulse from a dendrite to the next neuron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Impulse pathway", statement: "Dendrites/cell body → axon → axon terminals → synapse → next neuron." },
            ],
            steps: [
              { reasoning: "Impulse is received at dendrites or cell body.", working: "\\text{dendrites}", marks: 1, markCode: "M" },
              { reasoning: "It passes through the cell body to the axon.", working: "\\text{cell body} \\to \\text{axon}", marks: 1, markCode: "M" },
              { reasoning: "The myelin sheath may speed conduction along the axon.", marks: 1, markCode: "M" },
              { reasoning: "It reaches axon terminals where neurotransmitter is released.", working: "\\text{axon terminals}", marks: 1, markCode: "M" },
              { reasoning: "The neurotransmitter crosses the synapse to the next neuron.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The impulse is received at the dendrites or cell body, passes along the axon to the axon terminals, releases neurotransmitter across the synapse, and generates an impulse in the next neuron.",
            commonErrors: ["Ending at the axon — the synapse and next neuron must be included."],
          },
        },
        {
          id: "olbio-u7-neuron-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student draws a neuron with dendrites, a cell body, a myelinated axon and axon terminals.",
          parts: [
            { label: "a", prompt: "Label the part that receives impulses.", marks: 1 },
            { label: "b", prompt: "Label the part that carries impulses away from the cell body.", marks: 1 },
            { label: "c", prompt: "State the function of the myelin sheath.", marks: 2 },
            { label: "d", prompt: "Explain what happens at the axon terminals.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Neuron structure", statement: "Dendrites receive, axon conducts, myelin speeds conduction, terminals release neurotransmitter." },
            ],
            steps: [
              { part: "a", reasoning: "Dendrites receive signals.", working: "\\text{dendrites}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The axon carries impulses away.", working: "\\text{axon}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "It insulates the axon.", working: "\\text{insulation}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It increases impulse speed by saltatory conduction.", working: "\\text{faster}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Neurotransmitter is released into the synapse.", working: "\\text{neurotransmitter}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "It binds receptors on the next neuron to continue the signal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) dendrites (b) axon (c) insulation and faster conduction (d) neurotransmitter release across the synapse",
            commonErrors: ["Labelling the myelin sheath as the part that produces the impulse."],
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
              { id: "a", text: "Receptor only" },
              { id: "b", text: "Effector" },
              { id: "c", text: "Sensory neuron" },
              { id: "d", text: "Motor neuron" },
            ],
            correctChoiceId: "c",
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
        {
          id: "olbio-u7-reflex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which component detects the stimulus at the start of a reflex arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Effector" },
              { id: "b", text: "Cerebrum" },
              { id: "c", text: "Receptor" },
              { id: "d", text: "Motor neuron" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Receptor", statement: "Detects the stimulus that starts the reflex arc." },
            ],
            steps: [
              { reasoning: "Recall the first component of the pathway.", working: "\\text{receptor}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Receptor",
            commonErrors: ["Choosing effector — the effector produces the response at the end."],
          },
        },
        {
          id: "olbio-u7-reflex-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the effector in a knee-jerk reflex.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Effector", statement: "Muscle or gland that produces the response." },
            ],
            steps: [
              { reasoning: "Recall that the effector carries out the response.", working: "\\text{effector}", marks: 1, markCode: "M" },
              { reasoning: "For a knee-jerk reflex the effector is leg muscle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The effector is the muscle in the leg that contracts to produce the knee-jerk response.",
            commonErrors: ["Naming the spinal cord — it contains relay neurons but is not the effector."],
          },
        },
        {
          id: "olbio-u7-reflex-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Where is the relay neuron usually located in a simple reflex arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skin" },
              { id: "b", text: "Spinal cord" },
              { id: "c", text: "Muscle" },
              { id: "d", text: "Blood" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Relay neuron", statement: "Usually located in the spinal cord or brain." },
            ],
            steps: [
              { reasoning: "Recall the site of the relay neuron.", working: "\\text{spinal cord}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Spinal cord",
            commonErrors: ["Choosing muscle — muscles are effectors, not relay neurons."],
          },
        },
        {
          id: "olbio-u7-reflex-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the role of the sensory neuron in a reflex arc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sensory neuron", statement: "Carries the impulse from the receptor to the CNS." },
            ],
            steps: [
              { reasoning: "State the direction of travel.", working: "\\text{receptor} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { reasoning: "State its role in the reflex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The sensory neuron carries the impulse generated by the receptor to the central nervous system.",
            commonErrors: ["Saying it carries the impulse to the muscle — that is the motor neuron's role."],
          },
        },
        {
          id: "olbio-u7-reflex-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why withdrawing a hand from a hot object is an advantage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex advantage", statement: "Automatic protective responses reduce damage before conscious awareness." },
            ],
            steps: [
              { reasoning: "The response happens without waiting for conscious thought.", working: "\\text{automatic}", marks: 1, markCode: "M" },
              { reasoning: "It removes the body part from the harmful stimulus quickly.", working: "\\text{protective}", marks: 1, markCode: "M" },
              { reasoning: "Conclude that this reduces injury.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Withdrawing the hand is automatic and rapid, so the body is removed from the hot object before conscious processing, reducing the risk of burns.",
            commonErrors: ["Saying the brain plans the withdrawal first — the spinal reflex acts first."],
          },
        },
        {
          id: "olbio-u7-reflex-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare a reflex action with a voluntary action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Reflex vs voluntary", statement: "Reflex: automatic, rapid, spinal pathway. Voluntary: conscious, slower, cerebrum involved." },
            ],
            steps: [
              { reasoning: "Reflex actions are automatic and do not require conscious thought.", working: "\\text{automatic}", marks: 1, markCode: "M" },
              { reasoning: "Voluntary actions are consciously controlled.", working: "\\text{conscious}", marks: 1, markCode: "M" },
              { reasoning: "Compare speed and control.", working: "\\text{fast vs slower}", marks: 1, markCode: "M" },
              { reasoning: "Give a clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A reflex action is automatic and rapid through a spinal pathway, whereas a voluntary action is consciously controlled by the cerebrum and is generally slower.",
            commonErrors: ["Saying reflexes are always stronger rather than faster and automatic."],
          },
        },
        {
          id: "olbio-u7-reflex-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sequence shows the correct order of a reflex arc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Effector → motor neuron → receptor → sensory neuron" },
              { id: "b", text: "Receptor → sensory neuron → relay neuron → motor neuron → effector" },
              { id: "c", text: "Motor neuron → receptor → sensory neuron → effector" },
              { id: "d", text: "Sensory neuron → effector → receptor → motor neuron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex arc order", statement: "Receptor → sensory → relay → motor → effector." },
            ],
            steps: [
              { reasoning: "Recall the pathway order.", working: "\\text{receptor} \\to \\text{sensory} \\to \\text{relay} \\to \\text{motor} \\to \\text{effector}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Receptor → sensory neuron → relay neuron → motor neuron → effector",
            commonErrors: ["Putting the effector before the motor neuron."],
          },
        },
        {
          id: "olbio-u7-reflex-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two components of a reflex arc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex components", statement: "Receptor, sensory neuron, relay neuron, motor neuron and effector." },
            ],
            steps: [
              { reasoning: "Give any two correct components.", working: "\\text{any two}", marks: 1, markCode: "M" },
              { reasoning: "Ensure they are named accurately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: receptor, sensory neuron, relay neuron, motor neuron, effector.",
            commonErrors: ["Listing 'brain' instead of relay neuron for a simple spinal reflex."],
          },
        },
        {
          id: "olbio-u7-reflex-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the brain may not be involved when a hand is withdrawn from a flame.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Spinal reflex", statement: "The reflex pathway uses the spinal cord before conscious brain processing." },
            ],
            steps: [
              { reasoning: "Sensory and motor neurons connect through a spinal relay.", working: "\\text{spinal cord}", marks: 1, markCode: "M" },
              { reasoning: "This avoids waiting for conscious processing in the cerebrum.", marks: 1, markCode: "M" },
              { reasoning: "Conclude that the response is faster and protective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The withdrawal is coordinated by a spinal reflex arc, so the response begins before the brain processes the sensation consciously.",
            commonErrors: ["Saying the brain has no role at all — it may be informed afterwards but is not needed for the reflex."],
          },
        },
        {
          id: "olbio-u7-reflex-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bright light causes the pupil to constrict. Name the type of response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflex response", statement: "An automatic response to a stimulus through a reflex arc." },
            ],
            steps: [
              { reasoning: "Identify that the response is automatic.", working: "\\text{automatic}", marks: 1, markCode: "M" },
              { reasoning: "Name it as a reflex response.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It is a reflex response, specifically the pupil reflex.",
            commonErrors: ["Calling it a voluntary action — pupil adjustment is automatic."],
          },
        },
        {
          id: "olbio-u7-reflex-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Trace a reflex arc when a person steps on a sharp object.",
          parts: [
            { label: "a", prompt: "State the stimulus and receptor.", marks: 2 },
            { label: "b", prompt: "Trace the pathway to the effector.", marks: 2 },
            { label: "c", prompt: "State the response.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Pain withdrawal reflex", statement: "Pain receptors → sensory → spinal relay → motor → leg muscles lift foot." },
            ],
            steps: [
              { part: "a", reasoning: "Stimulus is pain from the sharp object.", working: "\\text{pain}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Receptors are in the skin of the foot.", working: "\\text{skin receptors}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sensory neuron carries impulse to spinal cord.", working: "\\text{sensory} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Relay then motor neuron carries impulse to leg muscles.", working: "\\text{relay} \\to \\text{motor}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The foot is lifted away from the object.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pain stimulus detected by skin receptors (b) sensory neuron → spinal relay → motor neuron → leg muscles (c) foot is withdrawn",
            commonErrors: ["Stopping at the spinal cord instead of naming the effector response."],
          },
        },
        {
          id: "olbio-u7-reflex-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the advantage of reflex actions in avoiding injury.",
          parts: [
            { label: "a", prompt: "State why reflexes are rapid.", marks: 2 },
            { label: "b", prompt: "Explain how this protects the body.", marks: 2 },
            { label: "c", prompt: "Give one example of a protective reflex.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Protective reflexes", statement: "Automatic spinal responses act before conscious awareness and reduce damage." },
            ],
            steps: [
              { part: "a", reasoning: "They use a short spinal pathway with few synapses.", working: "\\text{short pathway}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They do not wait for conscious brain processing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The body is removed from harm before injury worsens.", working: "\\text{removed from harm}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This reduces burns, cuts or other damage.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Give a valid example such as hand withdrawal or pupil constriction.", working: "\\text{withdrawal}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the protective response clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) short spinal pathway without conscious delay (b) removes the body from harm quickly (c) e.g. withdrawing hand from a hot object",
            commonErrors: ["Giving an example that is not automatic, such as deciding to move away slowly."],
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
