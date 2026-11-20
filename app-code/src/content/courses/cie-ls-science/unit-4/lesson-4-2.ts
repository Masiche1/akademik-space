import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cils-u4-lesson-4-2",
  code: "4-2",
  title: "Nervous and skeletal systems",
  goal: "I CAN explain how the nervous system coordinates responses and how bones and muscles work.",
  standards: ["0893 Biology: nervous and musculoskeletal systems"],
  vocabulary: [
    { term: "Neuron", definition: "Nerve cell transmitting electrical impulses." },
    { term: "Reflex action", definition: "Automatic rapid response — e.g. pulling hand from heat." },
    { term: "Synapse", definition: "Gap between neurons where chemical messengers transmit signals." },
    { term: "Voluntary action", definition: "Response under conscious control — e.g. picking up a pen." },
    { term: "Joint", definition: "Where bones meet — held by ligaments." },
    { term: "Muscle", definition: "Contractile tissue that pulls bones to cause movement." },
  ],
  concepts: [
    {
      id: "cils-u4-nervous",
      title: "The nervous system",
      skill: "Describe how neurons transmit impulses and how reflexes work.",
      lesson: {
        sections: [
          {
            heading: "Neurons and impulses",
            body: "Sensory neurons detect stimuli → transmit to CNS (brain/spinal cord) → motor neurons transmit to effectors (muscles/glands). Impulses are electrical; cross synapses chemically.",
          },
          {
            heading: "Voluntary vs involuntary",
            body: "Voluntary: conscious, brain-controlled (e.g. walking). Involuntary: automatic (e.g. heartbeat, digestion).",
          },
          {
            heading: "Reflex actions",
            body: "Path: receptor → sensory neuron → spinal cord → motor neuron → effector. Bypasses brain for speed — protective responses.",
          },
        ],
        keyFormulas: [
          { name: "Reflex arc", statement: "Receptor→sensory neuron→spinal cord→motor neuron→effector." },
        ],
        workedExample: {
          problem: "Why is a reflex faster than a voluntary response?",
          solution: "Reflex arc goes through spinal cord only — skips brain processing, saving milliseconds.",
        },
      },
      questions: [
        {
          id: "cils-u4-ner-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a reflex action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Automatic rapid response to stimulus" },
              { id: "b", text: "Conscious decision" },
              { id: "c", text: "Voluntary muscle movement" },
              { id: "d", text: "Hormone release" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflex", statement: "Automatic protective response via spinal cord." },
            ],
            steps: [
              { reasoning: "Reflex = automatic, fast, protective — not conscious.", working: "automatic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Automatic rapid response to stimulus",
            commonErrors: ["Choosing (b) — reflexes are unconscious."],
          },
        },
        {
          id: "cils-u4-ner-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the parts of a reflex arc in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Reflex arc", statement: "Receptor→sensory neuron→relay/spinal cord→motor neuron→effector." },
            ],
            steps: [
              { reasoning: "Correct sequence.", working: "sequence", marks: 1, markCode: "M" },
              { reasoning: "All parts named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor → sensory neuron → spinal cord → motor neuron → effector",
            commonErrors: ["Skipping spinal cord or reversing order."],
          },
        },
        {
          id: "cils-u4-ner-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how impulses cross a synapse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synapse", statement: "Chemical neurotransmitters cross the gap — ensures one-way transmission." },
            ],
            steps: [
              { reasoning: "Impulse arrives at presynaptic terminal — triggers vesicle release.", working: "vesicle", marks: 1, markCode: "M" },
              { reasoning: "Neurotransmitter diffuses across synaptic gap.", working: "diffusion", marks: 1, markCode: "M" },
              { reasoning: "Binds receptors on postsynaptic neuron — new impulse generated.", working: "receptors", marks: 1, markCode: "M" },
              { reasoning: "One-way transmission ensured.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurotransmitter released → crosses gap → binds receptors → new impulse.",
            commonErrors: ["Saying impulses jump the gap — chemical transmission, not electrical."],
          },
        },
        {
          id: "cils-u4-ner-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Trace what happens when you touch a hot object.",
          parts: [
            { label: "a", prompt: "Describe the reflex arc pathway.", marks: 3 },
            { label: "b", prompt: "Why is this faster than thinking about it?", marks: 2 },
            { label: "c", prompt: "What role does the brain play?", marks: 2 },
            { label: "d", prompt: "Give another example of a reflex.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflex arc", statement: "Receptor→sensory→spinal cord→motor→effector; brain informed after." },
            ],
            steps: [
              { part: "a", reasoning: "Heat receptors→sensory neuron→spinal cord→motor neuron→arm muscles contract.", working: "path", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Path correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bypasses brain — spinal cord processes directly; saves time.", working: "faster", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Brain receives signal after — registers pain, learns to avoid.", working: "brain role", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Blinking, knee-jerk, coughing, sneezing.", working: "example", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid reflex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) receptors→spinal cord→muscles (b) skips brain (c) pain/learning after (d) blink/knee-jerk",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Path accurate.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Saying brain initiates reflex — spinal cord does."],
          },
        },
      ],
    },
    {
      id: "cils-u4-musculoskeletal",
      title: "Bones, joints and muscles",
      skill: "Describe the skeleton, joints and how muscles cause movement.",
      lesson: {
        sections: [
          {
            heading: "The skeleton",
            body: "206 bones: skull (protection), ribs (protect organs), spine (support), limbs (movement). Bones store calcium, produce blood cells in marrow.",
          },
          {
            heading: "Joints",
            body: "Ball-and-socket (hip/shoulder — wide range), hinge (elbow/knee — one direction), gliding (wrists — small movements). Ligaments connect bones; cartilage cushions.",
          },
          {
            heading: "Muscles",
            body: "Muscles work in antagonistic pairs — biceps contract to bend elbow (triceps relax); triceps contract to straighten (biceps relax).",
          },
        ],
        keyFormulas: [
          { name: "Movement", statement: "Muscles contract in pairs — one contracts while antagonist relaxes." },
        ],
        workedExample: {
          problem: "Why can't muscles push, only pull?",
          solution: "Muscles only contract (shorten) — they pull bones. Pairs work antagonistically to move joints both ways.",
        },
      },
      questions: [
        {
          id: "cils-u4-bone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many bones does an adult human have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "206" },
              { id: "b", text: "106" },
              { id: "c", text: "306" },
              { id: "d", text: "256" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Skeleton", statement: "Adult human skeleton = 206 bones." },
            ],
            steps: [
              { reasoning: "Standard fact: 206 bones.", working: "206", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 206",
            commonErrors: ["Choosing other numbers — memorise 206."],
          },
        },
        {
          id: "cils-u4-bone-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of ligaments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ligaments", statement: "Connect bone to bone at joints — stabilise." },
            ],
            steps: [
              { reasoning: "Ligaments join bones at joints.", working: "bone-bone", marks: 1, markCode: "M" },
              { reasoning: "Prevent dislocation, stabilise joint.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ligaments connect bones at joints, preventing dislocation and stabilising movement.",
            commonErrors: ["Saying tendons — tendons connect muscle to bone."],
          },
        },
        {
          id: "cils-u4-bone-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the elbow joint bends and straightens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Antagonistic muscles", statement: "Biceps contract to bend; triceps contract to straighten." },
            ],
            steps: [
              { reasoning: "Biceps contracts → pulls forearm up (flexion).", working: "biceps", marks: 1, markCode: "M" },
              { reasoning: "Triceps relaxes during flexion; contracts to extend.", working: "triceps", marks: 1, markCode: "M" },
              { reasoning: "Muscles work in antagonistic pairs — one contracts while other relaxes.", working: "pairs", marks: 1, markCode: "M" },
              { reasoning: "Mechanism clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Biceps contract to bend; triceps contract to straighten — antagonistic pair.",
            commonErrors: ["Both contracting — they alternate."],
          },
        },
        {
          id: "cils-u4-bone-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare different joint types.",
          parts: [
            { label: "a", prompt: "Describe a ball-and-socket joint with example.", marks: 2 },
            { label: "b", prompt: "Describe a hinge joint with example.", marks: 2 },
            { label: "c", prompt: "Explain why joint type matters.", marks: 2 },
            { label: "d", prompt: "Name two functions of the skeleton.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Joints", statement: "Ball-socket=wide range; hinge=one plane; structure determines function." },
            ],
            steps: [
              { part: "a", reasoning: "Ball in socket — rotates all directions; hip or shoulder.", working: "ball-socket", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Hinge — one direction only; elbow or knee.", working: "hinge", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Structure determines movement range — shoulder needs rotation, elbow needs stability.", working: "function", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Support, protection, movement (with muscles), blood cell production, calcium storage.", working: "functions", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Three+ valid.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ball-socket: hip/shoulder, all directions (b) hinge: elbow/knee, one plane (c) structure→function (d) support/protection/movement/marrow",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple functions.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Confusing tendons and ligaments."],
          },
        },
      ],
    },
    {
      id: "cils-u4-homeostasis",
      title: "Homeostasis and temperature control",
      skill: "Explain how the body maintains constant internal conditions.",
      lesson: {
        sections: [
          {
            heading: "What is homeostasis?",
            body: "Maintaining stable internal environment — temperature, blood glucose, water balance — despite external changes. Negative feedback loops correct deviations.",
          },
          {
            heading: "Temperature control",
            body: "Too hot: sweat (evaporative cooling), vasodilation (blood to skin). Too cold: shiver (muscle heat), vasoconstriction (reduce heat loss), hairs stand up.",
          },
          {
            heading: "Other homeostasis",
            body: "Blood glucose: insulin lowers, glucagon raises. Water balance: kidneys adjust urine concentration. pH: buffers maintain ~7.4.",
          },
        ],
        keyFormulas: [
          { name: "Homeostasis", statement: "Negative feedback maintains internal constancy — temperature, glucose, water." },
        ],
        workedExample: {
          problem: "Why do you sweat when hot?",
          solution: "Sweat evaporates from skin — evaporation cools the body, restoring normal temperature.",
        },
      },
      questions: [
        {
          id: "cils-u4-homeo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is homeostasis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maintaining stable internal conditions" },
              { id: "b", text: "Growing and reproducing" },
              { id: "c", text: "Responding to stimuli" },
              { id: "d", text: "Breaking down food" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Stable internal environment despite external changes." },
            ],
            steps: [
              { reasoning: "Homeostasis = internal constancy.", working: "stable", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Maintaining stable internal conditions",
            commonErrors: ["Choosing (c) — that's response to stimuli, related but not homeostasis."],
          },
        },
        {
          id: "cils-u4-homeo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two responses when body temperature rises.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cooling responses", statement: "Sweating, vasodilation." },
            ],
            steps: [
              { reasoning: "Sweating + vasodilation (blood to skin surface).", working: "sweat+vaso", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sweating and vasodilation (blood vessels widen near skin).",
            commonErrors: ["Saying shivering — that's for cold."],
          },
        },
        {
          id: "cils-u4-homeo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how negative feedback maintains temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Negative feedback", statement: "Deviation detected → response → return to set point." },
            ],
            steps: [
              { reasoning: "Receptors detect temperature change from set point (~37°C).", working: "detect", marks: 1, markCode: "M" },
              { reasoning: "Effectors respond — sweat or shiver to correct.", working: "respond", marks: 1, markCode: "M" },
              { reasoning: "Temperature returns to normal — feedback loop complete.", working: "return", marks: 1, markCode: "M" },
              { reasoning: "Cycle explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Detect deviation → respond (sweat/shiver) → return to set point — negative feedback.",
            commonErrors: ["Calling it positive feedback — it opposes the change."],
          },
        },
        {
          id: "cils-u4-homeo-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate body responses to temperature change.",
          parts: [
            { label: "a", prompt: "Describe responses to overheating.", marks: 2 },
            { label: "b", prompt: "Describe responses to cold.", marks: 2 },
            { label: "c", prompt: "Explain the role of blood vessels.", marks: 3 },
            { label: "d", prompt: "Why is maintaining temperature important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thermoregulation", statement: "Vasodilation/vasoconstriction + sweating/shivering maintain ~37°C." },
            ],
            steps: [
              { part: "a", reasoning: "Sweat, vasodilation, seek shade, reduce activity.", working: "cooling", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two+ valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shiver, vasoconstriction, hairs stand, seek warmth.", working: "warming", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two+ valid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vasodilation: widen → more blood to skin → heat loss. Vasoconstriction: narrow → less heat loss.", working: "vaso", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Enzymes work best at ~37°C; too hot denatures, too cold slows — cells need optimal temp.", working: "enzymes", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sweat/vasodilation (b) shiver/vasoconstriction (c) blood flow control (d) enzymes need ~37°C",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Responses correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Responses correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Saying 'body adapts' without mechanism."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u4-nervous-notes",
      title: "Nervous, skeletal and homeostasis — revision notes",
      summary: "Reflex arcs, synapses, joints, muscles, negative feedback.",
      sections: [
        {
          heading: "Nervous & muscles",
          body: "Reflex: receptor→sensory→spinal cord→motor→effector. Synapses use chemicals. Joints: ball-socket/hinge/gliding. Muscles work in antagonistic pairs.",
        },
        {
          heading: "Homeostasis",
          body: "Negative feedback maintains ~37°C, glucose, water. Hot: sweat + vasodilation. Cold: shiver + vasoconstriction. Enzymes need optimal temp.",
        },
      ],
    },
  ],
};
