import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cieb-u7-lesson-7-1",
  code: "7-1",
  title: "The Nervous System",
  goal: "I CAN describe the structure of neurons, the reflex arc, and the central and peripheral nervous systems.",
  standards: ["0653 7.1"],
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
      id: "cieb-u7-neuron",
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
          id: "cieb-u7-neuron-q1",
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
          id: "cieb-u7-neuron-q2",
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
          id: "cieb-u7-neuron-q3",
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
          id: "cieb-u7-neuron-q4",
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
          id: "cieb-u7-neuron-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where is the nucleus of a neuron located?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the cell body" },
              { id: "b", text: "In the axon" },
              { id: "c", text: "In the myelin sheath" },
              { id: "d", text: "At the axon terminals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cell body", statement: "Contains the nucleus of the neuron." },
            ],
            steps: [
              { reasoning: "Recall location of nucleus.", working: "\\text{cell body}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** In the cell body",
            commonErrors: ["Choosing axon — the axon carries impulses, it doesn't contain the nucleus."],
          },
        },
        {
          id: "cieb-u7-neuron-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which neuron carries impulses from a receptor towards the central nervous system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sensory neuron" },
              { id: "b", text: "Motor neuron" },
              { id: "c", text: "Relay neuron" },
              { id: "d", text: "Effector" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sensory neuron", statement: "Carries impulses receptor → CNS." },
            ],
            steps: [
              { reasoning: "Match direction to neuron type.", working: "\\text{receptor} \\to \\text{CNS}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sensory neuron",
            commonErrors: ["Choosing motor — motor neurons carry impulses OUT to effectors."],
          },
        },
        {
          id: "cieb-u7-neuron-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the function of the axon terminals of a neuron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Axon terminals", statement: "Release neurotransmitter at the synapse." },
            ],
            steps: [
              { reasoning: "Give the function.", working: "\\text{release neurotransmitter}", marks: 1, markCode: "M" },
              { reasoning: "Complete: at synapse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The axon terminals release neurotransmitter into the synapse to pass the signal to the next neuron.",
            commonErrors: ["Saying 'receive signals' — that's the dendrites of the NEXT neuron."],
          },
        },
        {
          id: "cieb-u7-neuron-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a sensory neuron and a motor neuron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Neuron types", statement: "Sensory: receptor → CNS; motor: CNS → effector." },
            ],
            steps: [
              { reasoning: "Sensory neuron direction.", working: "\\text{receptor} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { reasoning: "Motor neuron direction.", working: "\\text{CNS} \\to \\text{effector}", marks: 1, markCode: "M" },
              { reasoning: "Conclude the difference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A sensory neuron carries impulses from a receptor to the CNS; a motor neuron carries impulses from the CNS to an effector.",
            commonErrors: ["Reversing the directions — sensory IN, motor OUT."],
          },
        },
        {
          id: "cieb-u7-neuron-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why synapses ensure one-way transmission of impulses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Synapse", statement: "Neurotransmitter released only at axon terminals → one-way signal." },
            ],
            steps: [
              { reasoning: "Neurotransmitter released only at axon terminals.", working: "\\text{axon terminal}", marks: 1, markCode: "M" },
              { reasoning: "Receptors only on receiving neuron's membrane.", working: "\\text{receptors}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: prevents backward transmission.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurotransmitter is released only at axon terminals and receptors are located only on the receiving neuron's membrane, so impulses can only travel in one direction.",
            commonErrors: ["Saying 'the gap blocks electricity' — it's the direction of release/receptors that matters."],
          },
        },
        {
          id: "cieb-u7-neuron-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The myelin sheath is made mainly of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lipid (fatty) material" },
              { id: "b", text: "Protein fibres" },
              { id: "c", text: "Carbohydrate" },
              { id: "d", text: "DNA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Myelin sheath", statement: "Fatty insulation around the axon." },
            ],
            steps: [
              { reasoning: "Recall composition.", working: "\\text{lipid/fatty}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Lipid (fatty) material",
            commonErrors: ["Choosing protein — protein is for structure, myelin is fatty insulation."],
          },
        },
        {
          id: "cieb-u7-neuron-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the path of an impulse from a pain receptor in the skin to a muscle that withdraws the hand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Impulse pathway", statement: "Receptor → sensory neuron → CNS → motor neuron → effector." },
            ],
            steps: [
              { reasoning: "Receptor detects stimulus.", working: "\\text{receptor}", marks: 1, markCode: "M" },
              { reasoning: "Sensory neuron → CNS, relay connects.", working: "\\text{sensory} \\to \\text{CNS}", marks: 1, markCode: "M" },
              { reasoning: "Motor neuron → effector.", working: "\\text{motor} \\to \\text{effector}", marks: 1, markCode: "M" },
              { reasoning: "Muscle contracts → withdrawal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor → sensory neuron → CNS (relay neuron) → motor neuron → muscle effector, which contracts to withdraw the hand.",
            commonErrors: ["Skipping the relay neuron or reversing motor direction."],
          },
        },
        {
          id: "cieb-u7-neuron-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Impulse transmission is fastest in axons that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Are myelinated with nodes of Ranvier" },
              { id: "b", text: "Have no cell body" },
              { id: "c", text: "Are very short" },
              { id: "d", text: "Lack dendrites" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Saltatory conduction", statement: "Myelin + nodes of Ranvier → fastest transmission." },
            ],
            steps: [
              { reasoning: "Recall speed factor.", working: "\\text{myelin + nodes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Are myelinated with nodes of Ranvier",
            commonErrors: ["Choosing 'short' — length affects total time, not transmission speed."],
          },
        },
        {
          id: "cieb-u7-neuron-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name three main parts of a neuron.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Neuron parts", statement: "Dendrites, cell body, axon, axon terminals." },
            ],
            steps: [
              { reasoning: "Give three parts.", working: "\\text{dendrites, body, axon}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dendrites, cell body (with nucleus), axon, and axon terminals — any three.",
            commonErrors: ["Listing synapse as a part — it's the gap BETWEEN neurons."],
          },
        },
        {
          id: "cieb-u7-neuron-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The role of a relay neuron is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Connect sensory and motor neurons within the CNS" },
              { id: "b", text: "Produce neurotransmitter" },
              { id: "c", text: "Detect stimuli" },
              { id: "d", text: "Carry impulses to muscles" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Relay neuron", statement: "Connects sensory to motor neurons in the CNS." },
            ],
            steps: [
              { reasoning: "Recall relay function.", working: "\\text{connects sensory + motor}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Connect sensory and motor neurons within the CNS",
            commonErrors: ["Choosing 'detect stimuli' — that's a receptor."],
          },
        },
        {
          id: "cieb-u7-neuron-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the structure and function of dendrites and the axon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Dendrites vs axon", statement: "Dendrites: many, short, receive. Axon: single, long, transmit." },
            ],
            steps: [
              { reasoning: "Dendrites structure/function.", working: "\\text{receive signals}", marks: 1, markCode: "M" },
              { reasoning: "Axon structure/function.", working: "\\text{transmits impulse}", marks: 1, markCode: "M" },
              { reasoning: "Contrast: many short vs single long.", working: "\\text{many vs single}", marks: 1, markCode: "M" },
              { reasoning: "Conclude comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dendrites are numerous, short branches that RECEIVE signals from other neurons; the axon is a single long fibre that TRANSMITS the impulse away from the cell body.",
            commonErrors: ["Reversing receive/transmit roles."],
          },
        },
        {
          id: "cieb-u7-neuron-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how an impulse is transmitted across a synapse.",
          parts: [
            { label: "a", prompt: "State what arrives at the axon terminal.", marks: 2 },
            { label: "b", prompt: "Describe the role of neurotransmitter.", marks: 3 },
            { label: "c", prompt: "Describe how the next neuron is activated.", marks: 2 },
            { label: "d", prompt: "State one advantage of synaptic transmission.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Synaptic transmission", statement: "Impulse → NT release → diffusion → receptor binding → new impulse; one-way." },
            ],
            steps: [
              { part: "a", reasoning: "Electrical impulse arrives at axon terminal.", working: "\\text{impulse arrives}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State arrival.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Neurotransmitter released from vesicles.", working: "\\text{NT released}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Diffuses across synaptic gap.", working: "\\text{diffuses}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chemical signal crosses gap.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Binds receptors on next neuron membrane.", working: "\\text{receptor binding}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "New impulse generated.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Ensures one-way transmission / precise control.", working: "\\text{one-way}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State advantage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) impulse at axon terminal (b) neurotransmitter released and diffuses across gap (c) binds receptors → new impulse (d) one-way, precise transmission",
            commonErrors: ["In (b) saying 'electricity crosses the gap' — it's chemical via neurotransmitter."],
          },
        },
      ],
    },
    {
      id: "cieb-u7-reflex",
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
          id: "cieb-u7-reflex-q1",
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
          id: "cieb-u7-reflex-q2",
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
          id: "cieb-u7-reflex-q3",
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
          id: "cieb-u7-reflex-q4",
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
          id: "cieb-u7-reflex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a reflex arc, the receptor is responsible for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Detecting the stimulus" },
              { id: "b", text: "Producing the response" },
              { id: "c", text: "Carrying impulse to muscle" },
              { id: "d", text: "Processing the signal in the brain" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Receptor", statement: "Detects the stimulus and generates an impulse." },
            ],
            steps: [
              { reasoning: "Recall receptor role.", working: "\\text{detects stimulus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Detecting the stimulus",
            commonErrors: ["Choosing 'producing the response' — that's the effector."],
          },
        },
        {
          id: "cieb-u7-reflex-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two examples of effectors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Effector", statement: "Muscle or gland producing the response." },
            ],
            steps: [
              { reasoning: "Give two examples.", working: "\\text{muscle, gland}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Muscles (e.g. biceps) and glands (e.g. salivary gland).",
            commonErrors: ["Listing a neuron — neurons carry impulses, effectors respond."],
          },
        },
        {
          id: "cieb-u7-reflex-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where are relay neurons usually located, and what do they do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Relay neuron", statement: "In the CNS (spinal cord); links sensory to motor neurons." },
            ],
            steps: [
              { reasoning: "Location: CNS/spinal cord.", working: "\\text{spinal cord}", marks: 1, markCode: "M" },
              { reasoning: "Function: connects sensory to motor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Relay neurons are in the spinal cord (CNS) and connect sensory neurons to motor neurons.",
            commonErrors: ["Saying they are in muscles — that's the effector."],
          },
        },
        {
          id: "cieb-u7-reflex-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why you feel pain AFTER withdrawing your hand from a hot object.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex timing", statement: "Reflex acts before brain processes the sensation." },
            ],
            steps: [
              { reasoning: "Withdrawal is a spinal reflex — no brain needed.", working: "\\text{spinal reflex}", marks: 1, markCode: "M" },
              { reasoning: "Pain sensation must travel to brain for awareness.", working: "\\text{brain awareness}", marks: 1, markCode: "M" },
              { reasoning: "Conclude: sensation arrives later.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The withdrawal is a rapid spinal reflex that doesn't wait for the brain; the pain signal travels separately to the brain, so you feel it only after the hand has moved.",
            commonErrors: ["Saying 'the hand moves before the signal arrives' — both travel together; it's processing that differs."],
          },
        },
        {
          id: "cieb-u7-reflex-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which neuron carries the impulse from the CNS to the effector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Motor neuron" },
              { id: "b", text: "Sensory neuron" },
              { id: "c", text: "Receptor cell" },
              { id: "d", text: "Red blood cell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Motor neuron", statement: "Carries impulse CNS → effector." },
            ],
            steps: [
              { reasoning: "Recall direction.", working: "\\text{CNS} \\to \\text{effector}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Motor neuron",
            commonErrors: ["Choosing sensory — that carries impulse INTO the CNS."],
          },
        },
        {
          id: "cieb-u7-reflex-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the reflex arc for the knee-jerk (patellar) reflex when a doctor taps the knee.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Knee-jerk reflex", statement: "Stretch receptors → sensory → spinal relay → motor → quadriceps contracts." },
            ],
            steps: [
              { reasoning: "Stretch receptors in muscle detect tap.", working: "\\text{stretch receptors}", marks: 1, markCode: "M" },
              { reasoning: "Sensory neuron → spinal cord.", working: "\\text{sensory} \\to \\text{spinal}", marks: 1, markCode: "M" },
              { reasoning: "Relay → motor neuron → quadriceps.", working: "\\text{motor} \\to \\text{quadriceps}", marks: 1, markCode: "M" },
              { reasoning: "Leg kicks forward automatically.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Stretch receptors detect the tap → sensory neuron → spinal cord relay → motor neuron → quadriceps muscle contracts → leg kicks forward.",
            commonErrors: ["Including the brain as required — this reflex is purely spinal."],
          },
        },
        {
          id: "cieb-u7-reflex-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A reflex action is described as 'automatic' because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Occurs without conscious thought" },
              { id: "b", text: "Is always harmful" },
              { id: "c", text: "Requires learning" },
              { id: "d", text: "Uses only one neuron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex", statement: "Automatic — no conscious control needed." },
            ],
            steps: [
              { reasoning: "Recall meaning of automatic.", working: "\\text{no conscious thought}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Occurs without conscious thought",
            commonErrors: ["Choosing 'requires learning' — reflexes are innate."],
          },
        },
        {
          id: "cieb-u7-reflex-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student steps on a sharp object and immediately lifts their foot. Identify each component of the reflex arc in this scenario.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex components", statement: "Receptor → sensory → relay → motor → effector." },
            ],
            steps: [
              { reasoning: "Receptor: pain receptors in sole of foot.", working: "\\text{pain receptors}", marks: 1, markCode: "M" },
              { reasoning: "Sensory + relay + motor neurons.", working: "\\text{sensory-relay-motor}", marks: 1, markCode: "M" },
              { reasoning: "Effector: leg muscles lifting foot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pain receptors in the foot → sensory neuron → relay neuron in spinal cord → motor neuron → leg muscles contract, lifting the foot.",
            commonErrors: ["Naming 'brain' as the processing centre — reflex uses spinal cord."],
          },
        },
        {
          id: "cieb-u7-reflex-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'effector'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Effector", statement: "Muscle or gland that produces the response." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{muscle/gland responds}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An effector is a muscle or gland that carries out the response to a stimulus.",
            commonErrors: ["Defining it as a neuron — neurons transmit, effectors act."],
          },
        },
        {
          id: "cieb-u7-reflex-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which part of the reflex arc is found in the spinal cord?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relay neuron" },
              { id: "b", text: "Receptor" },
              { id: "c", text: "Effector muscle" },
              { id: "d", text: "Skin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Relay neuron", statement: "Located in spinal cord/CNS." },
            ],
            steps: [
              { reasoning: "Recall location.", working: "\\text{relay in CNS}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Relay neuron",
            commonErrors: ["Choosing receptor — receptors are in sense organs/skin."],
          },
        },
        {
          id: "cieb-u7-reflex-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare a reflex action with a conscious (voluntary) action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex vs conscious", statement: "Reflex: automatic, fast, spinal. Conscious: deliberate, slower, brain." },
            ],
            steps: [
              { reasoning: "Reflex: automatic and rapid via spinal cord.", working: "\\text{automatic/fast}", marks: 1, markCode: "M" },
              { reasoning: "Conscious: deliberate via brain.", working: "\\text{deliberate/brain}", marks: 1, markCode: "M" },
              { reasoning: "Both use neurons but different pathways.", working: "\\text{different pathways}", marks: 1, markCode: "M" },
              { reasoning: "Conclude comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A reflex is automatic, rapid and coordinated by the spinal cord; a conscious action is deliberate, involves the brain and is slower — both use neurons but different pathways.",
            commonErrors: ["Saying reflexes 'don't use neurons' — they use the same neurons, just a shorter path."],
          },
        },
        {
          id: "cieb-u7-reflex-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A person touches a thorn and immediately withdraws their hand. Describe the complete reflex arc for this response.",
          parts: [
            { label: "a", prompt: "Identify the stimulus and receptor.", marks: 2 },
            { label: "b", prompt: "Trace the pathway through the neurons.", marks: 4 },
            { label: "c", prompt: "Identify the effector and response.", marks: 2 },
            { label: "d", prompt: "Explain why the response is protective.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflex arc example", statement: "Pain receptors → sensory → spinal relay → motor → muscles contract." },
            ],
            steps: [
              { part: "a", reasoning: "Stimulus: sharp pain from thorn.", working: "\\text{sharp stimulus}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Receptor: pain receptors in skin.", working: "\\text{pain receptors}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sensory neuron carries impulse to spinal cord.", working: "\\text{sensory} \\to \\text{spinal}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Relay neuron in spinal cord connects.", working: "\\text{relay}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Motor neuron carries impulse out.", working: "\\text{motor} \\to \\text{effector}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete neuron trace.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effector: muscles of arm/hand.", working: "\\text{muscles}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Response: hand withdraws/contracts.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Removes hand from harm rapidly.", working: "\\text{protective}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sharp pain/pain receptors (b) sensory→spinal relay→motor (c) muscles contract, hand withdraws (d) removes tissue from damage quickly",
            commonErrors: ["In (b) saying 'brain decides' — the spinal cord handles the reflex."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u7-nervous-notes",
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
