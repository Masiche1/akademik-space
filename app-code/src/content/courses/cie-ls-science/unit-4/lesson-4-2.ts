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
              { id: "a", text: "Conscious decision" },
              { id: "b", text: "Hormone release" },
              { id: "c", text: "Voluntary muscle movement" },
              { id: "d", text: "Automatic rapid response to stimulus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflex", statement: "Automatic protective response via spinal cord." },
            ],
            steps: [
              { reasoning: "Reflex = automatic, fast, protective — not conscious.", working: "automatic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Automatic rapid response to stimulus",
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
        {
          id: "cils-u4-ner-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of a sensory neuron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To contract muscles directly" },
              { id: "b", text: "To carry impulses from receptors to the CNS" },
              { id: "c", text: "To produce hormones" },
              { id: "d", text: "To store calcium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Sensory neuron", statement: "Sensory neurons carry impulses toward the CNS." }],
            steps: [{ reasoning: "Sensory neurons detect stimuli and transmit to CNS.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** To carry impulses from receptors to the CNS",
          },
        },
        {
          id: "cils-u4-ner-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The reflex arc has receptor, sensory neuron, spinal cord, motor neuron and effector. Enter the number of components.",
          response: { type: "numeric", parts: [{ label: "Components", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Reflex arc", statement: "Five components are listed." }],
            steps: [{ reasoning: "Five components are named.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u4-ner-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a voluntary and an involuntary action.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Voluntary vs involuntary", statement: "Voluntary actions are conscious; involuntary actions are automatic." }],
            steps: [
              { reasoning: "Voluntary actions are under conscious control, such as writing.", marks: 1, markCode: "M" },
              { reasoning: "Involuntary actions are automatic, such as heartbeat or digestion.", marks: 1, markCode: "A" }],
            finalAnswer: "Voluntary actions are conscious; involuntary actions occur automatically.",
          },
        },
        {
          id: "cils-u4-ner-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How is an impulse transmitted across a synapse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By chemical neurotransmitters" },
              { id: "b", text: "By blood pressure" },
              { id: "c", text: "By direct electricity only" },
              { id: "d", text: "By gravity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Synapse", statement: "Chemical messengers cross the synaptic gap." }],
            steps: [{ reasoning: "Neurotransmitters carry the signal across the gap.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** By chemical neurotransmitters",
          },
        },
        {
          id: "cils-u4-ner-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The pathway includes receptor, sensory neuron, CNS, motor neuron and effector. Enter the number of stages.",
          response: { type: "numeric", parts: [{ label: "Stages", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Nervous pathway", statement: "Five stages are listed." }],
            steps: [{ reasoning: "Five stages are named.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u4-ner-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the role of the brain during a reflex action.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reflex", statement: "The spinal cord coordinates the rapid response; the brain processes it later." }],
            steps: [
              { reasoning: "The reflex response is coordinated mainly by the spinal cord.", marks: 1, markCode: "M" },
              { reasoning: "The brain receives information after or during the response.", marks: 1, markCode: "M" },
              { reasoning: "It registers pain and can modify future behaviour.", marks: 1, markCode: "A" }],
            finalAnswer: "The spinal cord gives the fast response; the brain processes information afterward.",
          },
        },
        {
          id: "cils-u4-ner-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an effector?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The spinal cord" },
              { id: "b", text: "A muscle or gland that responds" },
              { id: "c", text: "A type of neuron only" },
              { id: "d", text: "A receptor only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Effector", statement: "An effector carries out the response." }],
            steps: [{ reasoning: "Muscles and glands are effectors.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A muscle or gland that responds",
          },
        },
        {
          id: "cils-u4-ner-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A nerve impulse is electrical within a neuron and chemical at a synapse. Enter the number of transmission types.",
          response: { type: "numeric", parts: [{ label: "Types", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Impulse transmission", statement: "Electrical and chemical transmission occur." }],
            steps: [{ reasoning: "Two types are described.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u4-ner-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a reflex action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Knee-jerk response" },
              { id: "b", text: "Deciding to run" },
              { id: "c", text: "Choosing a pen" },
              { id: "d", text: "Writing an answer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflex", statement: "Knee-jerk is an automatic protective response." }],
            steps: [{ reasoning: "Knee-jerk occurs without conscious decision.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Knee-jerk response",
          },
        },
        {
          id: "cils-u4-ner-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A voluntary response takes 0.40 s and a reflex takes 0.10 s. Enter the time saved in s.",
          response: { type: "numeric", parts: [{ label: "Time saved", answer: 0.3, unit: "s" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Comparison", statement: "Difference = voluntary time minus reflex time." }],
            steps: [{ reasoning: "$0.40-0.10 = 0.30$ s.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.30$ s",
          },
        },
        {
          id: "cils-u4-ner-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why synapses ensure one-way transmission.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Synapse", statement: "Neurotransmitters are released on one side and receptors on the other." }],
            steps: [
              { reasoning: "Vesicles release neurotransmitter at the presynaptic side.", marks: 1, markCode: "M" },
              { reasoning: "Receptors are only on the postsynaptic side.", marks: 1, markCode: "M" },
              { reasoning: "This prevents backward transmission.", marks: 1, markCode: "A" }],
            finalAnswer: "Neurotransmitter release and receptor placement make synapses one-way.",
          },
        },
        {
          id: "cils-u4-ner-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the central nervous system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All bones" },
              { id: "b", text: "All muscles" },
              { id: "c", text: "Brain and spinal cord" },
              { id: "d", text: "Skin only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "CNS", statement: "The CNS comprises brain and spinal cord." }],
            steps: [{ reasoning: "Brain and spinal cord are the central nervous system.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Brain and spinal cord",
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
              { id: "a", text: "106" },
              { id: "b", text: "206" },
              { id: "c", text: "306" },
              { id: "d", text: "256" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Skeleton", statement: "Adult human skeleton = 206 bones." },
            ],
            steps: [
              { reasoning: "Standard fact: 206 bones.", working: "206", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 206",
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
        {
          id: "cils-u4-bone-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which joint allows the widest range of movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hinge joint" },
              { id: "b", text: "Fixed joint" },
              { id: "c", text: "Gliding joint" },
              { id: "d", text: "Ball-and-socket joint" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ball-and-socket", statement: "Ball-and-socket joints allow rotation in many directions." }],
            steps: [{ reasoning: "Hip and shoulder are ball-and-socket joints.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Ball-and-socket joint",
          },
        },
        {
          id: "cils-u4-bone-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The skeleton provides support, protection, movement, blood cell production and calcium storage. Enter the number of functions listed.",
          response: { type: "numeric", parts: [{ label: "Functions", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Skeleton functions", statement: "Five functions are listed." }],
            steps: [{ reasoning: "Five functions are named.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cils-u4-bone-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe a hinge joint and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hinge joint", statement: "A hinge joint allows movement in one plane." }],
            steps: [
              { reasoning: "Hinge joints move mainly backward and forward.", marks: 1, markCode: "M" },
              { reasoning: "The elbow or knee is an example.", marks: 1, markCode: "A" }],
            finalAnswer: "A hinge joint allows one-direction movement, e.g. elbow or knee.",
          },
        },
        {
          id: "cils-u4-bone-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of cartilage at joints?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To store calcium" },
              { id: "b", text: "To cushion and reduce friction" },
              { id: "c", text: "To connect muscle to bone" },
              { id: "d", text: "To produce blood cells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cartilage", statement: "Cartilage cushions joints and reduces friction." }],
            steps: [{ reasoning: "Cartilage covers bone ends at joints.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** To cushion and reduce friction",
          },
        },
        {
          id: "cils-u4-bone-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Muscles at a joint work in antagonistic pairs. How many muscles act at the elbow example? Enter the number.",
          response: { type: "numeric", parts: [{ label: "Muscles", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Antagonistic pair", statement: "Two muscles work oppositely at a joint." }],
            steps: [{ reasoning: "Biceps and triceps form a pair.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u4-bone-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Distinguish between ligaments and tendons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Ligaments vs tendons", statement: "Ligaments join bone to bone; tendons join muscle to bone." }],
            steps: [
              { reasoning: "Ligaments connect bones at joints and stabilise them.", marks: 1, markCode: "M" },
              { reasoning: "Tendons connect muscles to bones and transmit force.", marks: 1, markCode: "M" },
              { reasoning: "They have different roles despite both being connective tissues.", marks: 1, markCode: "A" }],
            finalAnswer: "Ligaments join bone to bone; tendons join muscle to bone.",
          },
        },
        {
          id: "cils-u4-bone-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which joint type is found between small wrist bones?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gliding joint" },
              { id: "b", text: "Pivot only" },
              { id: "c", text: "Hinge joint" },
              { id: "d", text: "Ball-and-socket joint" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gliding joint", statement: "Gliding joints allow small sliding movements." }],
            steps: [{ reasoning: "Wrist bones slide past each other in gliding joints.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Gliding joint",
          },
        },
        {
          id: "cils-u4-bone-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A joint contains bones, a ligament and cartilage. Enter the number of structures listed.",
          response: { type: "numeric", parts: [{ label: "Structures", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Joint structures", statement: "Three structures are listed." }],
            steps: [{ reasoning: "Bones, ligament and cartilage make three.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cils-u4-bone-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which muscle contracts to bend the elbow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heart muscle" },
              { id: "b", text: "Deltoid only" },
              { id: "c", text: "Biceps" },
              { id: "d", text: "Triceps" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Antagonistic muscles", statement: "Biceps contracts for elbow flexion." }],
            steps: [{ reasoning: "Biceps pulls the forearm upward.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Biceps",
          },
        },
        {
          id: "cils-u4-bone-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A forearm lifts through 45° in 1.5 s. Enter the average angular speed in °/s.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 30, unit: "°/s" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Speed", statement: "Speed = angle divided by time." }],
            steps: [{ reasoning: "$45\\div 1.5 = 30$ °/s.", marks: 1, markCode: "A" }],
            finalAnswer: "$30$ °/s",
          },
        },
        {
          id: "cils-u4-bone-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why muscles work in antagonistic pairs.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Muscle action", statement: "Muscles can contract but cannot actively push." }],
            steps: [
              { reasoning: "A muscle contracts to pull a bone.", marks: 1, markCode: "M" },
              { reasoning: "The opposing muscle relaxes or lengthens.", marks: 1, markCode: "M" },
              { reasoning: "Alternating contraction allows movement in both directions.", marks: 1, markCode: "A" }],
            finalAnswer: "Muscles pull but cannot push, so antagonistic pairs allow movement both ways.",
          },
        },
        {
          id: "cils-u4-bone-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is produced inside bone marrow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hormones only" },
              { id: "b", text: "Pollen" },
              { id: "c", text: "Blood cells" },
              { id: "d", text: "Synapses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Bone marrow", statement: "Bone marrow produces blood cells." }],
            steps: [{ reasoning: "Marrow is the site of blood cell production.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Blood cells",
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
              { id: "a", text: "Responding to stimuli" },
              { id: "b", text: "Growing and reproducing" },
              { id: "c", text: "Maintaining stable internal conditions" },
              { id: "d", text: "Breaking down food" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Stable internal environment despite external changes." },
            ],
            steps: [
              { reasoning: "Homeostasis = internal constancy.", working: "stable", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Maintaining stable internal conditions",
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
        {
          id: "cils-u4-homeo-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the normal human body temperature set point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 20 °C" },
              { id: "b", text: "About 100 °C" },
              { id: "c", text: "About 0 °C" },
              { id: "d", text: "About 37 °C" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Temperature set point", statement: "Normal body temperature is about 37 °C." }],
            steps: [{ reasoning: "Homeostasis maintains approximately 37 °C.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** About 37 °C",
          },
        },
        {
          id: "cils-u4-homeo-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lesson lists sweating and vasodilation as responses to heat. Enter the number of cooling responses.",
          response: { type: "numeric", parts: [{ label: "Responses", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Cooling responses", statement: "Two responses are listed." }],
            steps: [{ reasoning: "Sweating and vasodilation make two.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u4-homeo-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what vasodilation does when the body is hot.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Vasodilation", statement: "Vasodilation increases blood flow near the skin surface." }],
            steps: [
              { reasoning: "Blood vessels near the skin widen.", marks: 1, markCode: "M" },
              { reasoning: "More heat is transferred from blood to the environment.", marks: 1, markCode: "A" }],
            finalAnswer: "Vasodilation increases blood flow to the skin, increasing heat loss.",
          },
        },
        {
          id: "cils-u4-homeo-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of feedback maintains stable internal conditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positive feedback only" },
              { id: "b", text: "Negative feedback" },
              { id: "c", text: "No feedback" },
              { id: "d", text: "Random feedback" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative feedback", statement: "Negative feedback opposes deviations from a set point." }],
            steps: [{ reasoning: "Responses act to reverse the change.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Negative feedback",
          },
        },
        {
          id: "cils-u4-homeo-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Body temperature rises from 37 °C to 39 °C. Enter the increase in °C.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 2, unit: "°C" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Temperature change", statement: "Increase = final temperature minus initial temperature." }],
            steps: [{ reasoning: "$39-37 = 2$ °C.", marks: 1, markCode: "A" }],
            finalAnswer: "$2$ °C",
          },
        },
        {
          id: "cils-u4-homeo-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how shivering helps when the body is cold.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Shivering", statement: "Shivering is rapid muscle contraction that generates heat." }],
            steps: [
              { reasoning: "Muscles contract rapidly during shivering.", marks: 1, markCode: "M" },
              { reasoning: "Contraction releases energy as heat.", marks: 1, markCode: "M" },
              { reasoning: "This helps raise body temperature toward the set point.", marks: 1, markCode: "A" }],
            finalAnswer: "Shivering generates heat through rapid muscle contraction, warming the body.",
          },
        },
        {
          id: "cils-u4-homeo-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers high blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Thyroxine" },
              { id: "c", text: "Glucagon" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Insulin", statement: "Insulin lowers blood glucose." }],
            steps: [{ reasoning: "Insulin promotes glucose uptake and storage.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Insulin",
          },
        },
        {
          id: "cils-u4-homeo-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A person loses 1.2 L of water by sweating and drinks 0.8 L. Enter the net water loss in L.",
          response: { type: "numeric", parts: [{ label: "Net loss", answer: 0.4, unit: "L" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Water balance", statement: "Net loss = water lost minus water gained." }],
            steps: [{ reasoning: "$1.2-0.8 = 0.4$ L.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.4$ L",
          },
        },
        {
          id: "cils-u4-homeo-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does glucagon do to blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It raises blood glucose" },
              { id: "b", text: "It contracts muscles" },
              { id: "c", text: "It lowers blood glucose" },
              { id: "d", text: "It stops respiration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Glucagon", statement: "Glucagon raises blood glucose." }],
            steps: [{ reasoning: "Glucagon stimulates glucose release from storage.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** It raises blood glucose",
          },
        },
        {
          id: "cils-u4-homeo-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Cold responses listed: shivering, vasoconstriction, hairs standing and seeking warmth. Enter the number.",
          response: { type: "numeric", parts: [{ label: "Responses", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "convention", name: "Cold responses", statement: "Four warming responses are listed." }],
            steps: [{ reasoning: "Four responses are named.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cils-u4-homeo-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how negative feedback restores body temperature after overheating.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Negative feedback", statement: "Responses oppose the temperature rise until the set point is restored." }],
            steps: [
              { reasoning: "Receptors detect that temperature is above the set point.", marks: 1, markCode: "M" },
              { reasoning: "Effectors trigger sweating and vasodilation.", marks: 1, markCode: "M" },
              { reasoning: "Heat loss lowers temperature back toward normal.", marks: 1, markCode: "A" }],
            finalAnswer: "Detection triggers sweating and vasodilation, increasing heat loss until temperature returns to normal.",
          },
        },
        {
          id: "cils-u4-homeo-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is maintaining body temperature near 37 °C important?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enzymes work best at this temperature" },
              { id: "b", text: "It removes the need for food" },
              { id: "c", text: "It stops all hormones" },
              { id: "d", text: "It prevents all movement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Enzymes", statement: "Enzyme activity is optimal near body temperature." }],
            steps: [{ reasoning: "Most body enzymes function best around 37 °C.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Enzymes work best at this temperature",
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
