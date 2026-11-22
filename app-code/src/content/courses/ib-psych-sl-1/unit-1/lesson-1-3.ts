import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "psych-u1-lesson-1-3",
  code: "1-3",
  title: "The Nervous System and Brain",
  goal: "I CAN describe the structure of neurons and the nervous system, and explain the functions of major brain regions.",
  standards: ["Paper 1", "Paper 2", "Topic 2"],
  vocabulary: [
    { term: "Neuron", definition: "A nerve cell that transmits electrochemical signals around the body." },
    { term: "Synapse", definition: "The gap between neurons across which neurotransmitters diffuse." },
    { term: "Neurotransmitter", definition: "A chemical messenger (e.g. serotonin, dopamine) released at synapses." },
    { term: "Central nervous system", definition: "The brain and spinal cord — the body's control centre." },
    { term: "Peripheral nervous system", definition: "Nerves outside the CNS, divided into somatic and autonomic branches." },
    { term: "Cerebral cortex", definition: "The folded outer layer of the brain responsible for higher mental processes." },
  ],
  concepts: [
    {
      id: "psych-u1-neurons-ns",
      title: "Neurons and the nervous system",
      skill: "Describe the structure of a neuron, synaptic transmission, and the organisation of the CNS and PNS.",
      lesson: {
        sections: [
          {
            heading: "Structure of the neuron",
            body: "A **neuron** consists of **dendrites** (receive signals), a **cell body** (soma, containing the nucleus), an **axon** (conducts the impulse away) and terminal **axon buttons** (release neurotransmitters). Many axons are insulated by a **myelin sheath**, which speeds conduction through **saltatory conduction** — the impulse jumps between nodes of Ranvier. Neurons are classified as sensory, motor or relay.",
          },
          {
            heading: "Synaptic transmission",
            body: "An action potential arrives at the axon terminal, triggering release of **neurotransmitters** into the **synapse**. These diffuse across and bind to receptors on the next neuron, which may be **excited** (signal continues) or **inhibited** (signal suppressed). Unused neurotransmitter is reabsorbed or broken down. Drugs can mimic, block or alter neurotransmitter action.",
          },
          {
            heading: "The nervous system",
            body: "The **central nervous system (CNS)** = brain + spinal cord; it processes information and issues commands. The **peripheral nervous system (PNS)** carries signals to and from the CNS and has two branches: the **somatic** system controls voluntary movement, while the **autonomic** system controls involuntary functions — the **sympathetic** branch mobilises 'fight or flight' and the **parasympathetic** branch restores calm ('rest and digest').",
          },
        ],
        keyFormulas: [
          { name: "Signal path", statement: "Dendrites → cell body → axon → synapse → next neuron" },
          { name: "Autonomic split", statement: "Sympathetic = arousal; Parasympathetic = relaxation" },
        ],
        workedExample: {
          problem: "Explain how a spider on your hand produces a jump response.",
          solution: "Sensory neurons detect the touch and send an impulse via the PNS to the spinal cord. A relay neuron in the cord sends motor commands back through the PNS to muscles, producing the jump — often before the brain consciously registers the stimulus (a reflex arc).",
        },
      },
      questions: [
        {
          id: "psych-u1-nnq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Neurotransmitters cross the gap between neurons at the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dendrite" },
              { id: "b", text: "Synapse" },
              { id: "c", text: "Node of Ranvier" },
              { id: "d", text: "Myelin sheath" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synapse", statement: "The junction where neurotransmitters pass between neurons." },
            ],
            steps: [
              { reasoning: "The synapse is the gap across which neurotransmitters diffuse.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Synapse",
            commonErrors: ["Confusing the myelin sheath (insulation) with the synapse (junction)."],
          },
        },
        {
          id: "psych-u1-nnq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the functions of the sympathetic and parasympathetic nervous systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Autonomic branches", statement: "Sympathetic arouses the body; parasympathetic calms and restores it." },
            ],
            steps: [
              { reasoning: "Sympathetic: 'fight or flight' — increases heart rate, dilates pupils, diverts blood to muscles.", marks: 1, markCode: "M" },
              { reasoning: "Parasympathetic: 'rest and digest' — slows heart rate, aids digestion, promotes recovery.", marks: 1, markCode: "M" },
              { reasoning: "Together they maintain homeostasis by balancing arousal and relaxation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sympathetic = arousal; parasympathetic = calm/restoration.",
            commonErrors: ["Reversing the two branches' functions."],
          },
        },
        {
          id: "psych-u1-nnq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how neurotransmitters can be described as chemical messengers and give one example of their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neurotransmission", statement: "Neurotransmitters cross the synapse and bind to receptors, exciting or inhibiting the next neuron." },
            ],
            steps: [
              { reasoning: "An action potential triggers vesicles to release neurotransmitter into the synaptic gap.", marks: 1, markCode: "M" },
              { reasoning: "The chemical diffuses across and binds to receptor sites like a key in a lock.", marks: 1, markCode: "M" },
              { reasoning: "Binding either excites the postsynaptic neuron (continues the signal) or inhibits it (stops the signal).", marks: 1, markCode: "R" },
              { reasoning: "Example: serotonin regulates mood; low serotonin activity is linked to depression.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurotransmitters carry signals across synapses, exciting or inhibiting the next neuron.",
            commonErrors: ["Saying neurotransmitters carry electrical signals — the electrical impulse is on the axon; chemicals cross the synapse."],
          },
        },
        {
          id: "psych-u1-nnq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A drug company claims its new compound 'boosts focus by increasing dopamine activity'.",
          parts: [
            { label: "a", prompt: "Describe how the drug might act at a synapse to increase dopamine activity.", marks: 2 },
            { label: "b", prompt: "Explain two possible side effects of altering dopamine transmission.", marks: 3 },
            { label: "c", prompt: "Evaluate whether this claim could be tested experimentally.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dopamine pharmacology", statement: "Dopamine affects reward, motivation and attention; altering it has widespread effects." },
            ],
            steps: [
              { part: "a", reasoning: "The drug could block dopamine reuptake, leaving more dopamine in the synapse to bind receptors.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Alternatively it could mimic dopamine at receptors or prevent its breakdown.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Addiction risk: dopamine mediates reward — overstimulation can create dependence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mood disturbance: excess dopamine is linked to mania and psychotic symptoms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Motor effects: dopamine imbalance is involved in Parkinson's and can cause tremors.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Yes — a double-blind placebo-controlled trial could compare focus task scores.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Dopamine affects many systems, so the study must measure side effects as well as focus.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ethically, risks to participants must be justified against the benefit of testing the claim.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reuptake blockade/mimicry. (b) Addiction, mood, motor effects. (c) Yes, with placebo control and side-effect monitoring.",
            commonErrors: ["Assuming a drug affects only one brain function."],
          },
        },
        {
          id: "psych-u1-nnq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which part of a neuron receives signals from other neurons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Myelin sheath" },
              { id: "b", text: "Axon" },
              { id: "c", text: "Axon terminals" },
              { id: "d", text: "Dendrites" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dendrites", statement: "Branch-like extensions that receive incoming signals." },
            ],
            steps: [
              { reasoning: "Dendrites receive neurotransmitter signals and pass them toward the cell body.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dendrites",
            commonErrors: ["Confusing axon terminals, which send signals, with dendrites, which receive them."],
          },
        },
        {
          id: "psych-u1-nnq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The myelin sheath speeds up nerve impulses mainly by enabling:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Storage of the cell nucleus" },
              { id: "b", text: "Saltatory conduction between nodes of Ranvier" },
              { id: "c", text: "Release of neurotransmitters" },
              { id: "d", text: "Continuous slow conduction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Saltatory conduction", statement: "The impulse jumps between nodes of Ranvier, increasing speed." },
            ],
            steps: [
              { reasoning: "Myelin insulates the axon so the signal jumps rather than travelling continuously.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Saltatory conduction",
            commonErrors: ["Thinking myelin carries the signal chemically — it insulates the axon electrically."],
          },
        },
        {
          id: "psych-u1-nnq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The central nervous system consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The brain and spinal cord" },
              { id: "b", text: "Sensory and motor neurons only" },
              { id: "c", text: "All nerves outside the brain" },
              { id: "d", text: "Only the cerebral cortex" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Central nervous system", statement: "CNS = brain + spinal cord." },
            ],
            steps: [
              { reasoning: "The CNS is the body's central processing and command centre.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Brain and spinal cord",
            commonErrors: ["Including peripheral nerves in the CNS."],
          },
        },
        {
          id: "psych-u1-nnq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A motor neuron typically carries signals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From the CNS to muscles or glands" },
              { id: "b", text: "From one brain hemisphere to the other" },
              { id: "c", text: "From receptors to the spinal cord" },
              { id: "d", text: "Between sensory and motor neurons only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motor neuron", statement: "Carries commands from the CNS to effectors such as muscles." },
            ],
            steps: [
              { reasoning: "Motor neurons transmit outgoing commands to muscles and glands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** From the CNS to muscles or glands",
            commonErrors: ["Reversing sensory and motor neuron directions."],
          },
        },
        {
          id: "psych-u1-nnq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Neurotransmitter release at a synapse is usually triggered by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Receptors binding on the presynaptic membrane" },
              { id: "b", text: "An action potential reaching the axon terminal" },
              { id: "c", text: "The myelin sheath breaking down" },
              { id: "d", text: "The postsynaptic neuron firing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Synaptic transmission", statement: "An action potential depolarises the presynaptic terminal and triggers vesicle release." },
            ],
            steps: [
              { reasoning: "The electrical impulse reaches the axon terminal and causes neurotransmitter release.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Action potential at the axon terminal",
            commonErrors: ["Thinking neurotransmitters are released by the receiving neuron."],
          },
        },
        {
          id: "psych-u1-nnq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "If a drug blocks GABA receptors, neural activity is most likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop completely" },
              { id: "b", text: "Remain unchanged" },
              { id: "c", text: "Increase because inhibitory signalling is reduced" },
              { id: "d", text: "Decrease because inhibition is increased" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inhibitory neurotransmission", statement: "GABA reduces neural firing; blocking it can increase excitability." },
            ],
            steps: [
              { reasoning: "GABA is inhibitory, so blocking its receptors reduces inhibition.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increase because inhibition is reduced",
            commonErrors: ["Assuming all drugs calm the nervous system — receptor effects depend on the transmitter."],
          },
        },
        {
          id: "psych-u1-nnq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the basic reflex arc that produces a quick withdrawal response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflex arc", statement: "Sensory neuron to spinal cord to motor neuron produces a rapid automatic response." },
            ],
            steps: [
              { reasoning: "A stimulus activates sensory receptors and sensory neurons carry the signal to the spinal cord.", marks: 1, markCode: "M" },
              { reasoning: "A relay neuron in the cord connects the sensory input to a motor neuron.", marks: 1, markCode: "M" },
              { reasoning: "The motor neuron sends commands through the PNS to muscles, producing withdrawal.", marks: 1, markCode: "A" },
              { reasoning: "The response can occur before the brain fully processes the stimulus, making it fast and automatic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Receptor → sensory neuron → spinal cord relay → motor neuron → muscle withdrawal.",
            commonErrors: ["Including the brain as a necessary first step in a simple reflex."],
          },
        },
        {
          id: "psych-u1-nnq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how the myelin sheath affects the speed of nerve impulses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Myelination", statement: "Myelin insulates axons and allows saltatory conduction." },
            ],
            steps: [
              { reasoning: "The myelin sheath insulates sections of the axon, preventing signal loss along the membrane.", marks: 1, markCode: "M" },
              { reasoning: "The impulse jumps from one node of Ranvier to the next instead of travelling continuously.", marks: 1, markCode: "M" },
              { reasoning: "This saltatory conduction is faster than unmyelinated conduction.", marks: 1, markCode: "A" },
              { reasoning: "Damage to myelin, as in multiple sclerosis, slows or disrupts signalling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Myelin enables faster saltatory conduction; demyelination slows signals.",
            commonErrors: ["Saying myelin produces neurotransmitters or carries chemical messages."],
          },
        },
        {
          id: "psych-u1-nnq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Describe the process of synaptic transmission, including how a signal can be excited or inhibited.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Synaptic transmission", statement: "Electrical impulse triggers chemical release across the synapse to excite or inhibit the next neuron." },
            ],
            steps: [
              { reasoning: "An action potential reaches the presynaptic axon terminal.", marks: 1, markCode: "M" },
              { reasoning: "Synaptic vesicles release neurotransmitter into the synaptic cleft.", marks: 1, markCode: "M" },
              { reasoning: "The neurotransmitter diffuses across and binds to receptors on the postsynaptic neuron.", marks: 1, markCode: "M" },
              { reasoning: "Excitatory transmitters make the next neuron more likely to fire; inhibitory transmitters make it less likely.", marks: 1, markCode: "R" },
              { reasoning: "Unused transmitter is reabsorbed or broken down to reset the synapse.", marks: 1, markCode: "A" },
              { reasoning: "This chemical step allows integration and modulation of neural signals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Impulse → release → diffusion → receptor binding → excitation or inhibition.",
            commonErrors: ["Saying electricity crosses the synapse — chemicals carry the signal across the gap."],
          },
        },
        {
          id: "psych-u1-nnq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the claim that 'the brain is the only part of the nervous system involved in behaviour.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nervous system division", statement: "The CNS processes information while the PNS carries signals and controls voluntary and involuntary responses." },
            ],
            steps: [
              { reasoning: "The claim is partly true because the brain is central to complex thought, emotion and decision-making.", marks: 1, markCode: "M" },
              { reasoning: "However the spinal cord and peripheral nerves are necessary for sensation and movement.", marks: 1, markCode: "M" },
              { reasoning: "Reflex arcs in the spinal cord produce behaviour without initial brain involvement.", marks: 1, markCode: "R" },
              { reasoning: "The autonomic PNS controls involuntary behaviour such as heart rate and digestion.", marks: 1, markCode: "R" },
              { reasoning: "The brain and PNS interact continuously, so behaviour emerges from the whole system.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: the brain is crucial but not the only structure involved in behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Brain is central, but spinal cord and PNS are also essential for behaviour.",
            commonErrors: ["Ignoring reflexes and autonomic responses when evaluating the claim."],
          },
        },
        {
          id: "psych-u1-nnq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A company claims a new compound reduces anxiety by enhancing GABA inhibition.",
          parts: [
            { label: "a", prompt: "Describe how the drug might increase GABA inhibition at a synapse.", marks: 2 },
            { label: "b", prompt: "Predict two behavioural effects that would support the anxiety claim.", marks: 3 },
            { label: "c", prompt: "Evaluate how this claim could be tested experimentally.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "GABA pharmacology", statement: "Enhancing inhibitory GABA signalling may reduce neural overactivity associated with anxiety." },
            ],
            steps: [
              { part: "a", reasoning: "The drug could mimic GABA at receptors or prolong GABA's action by blocking reuptake.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Either action would increase inhibition of postsynaptic neurons.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Reduced self-reported anxiety on a validated scale would support the claim.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lower physiological arousal such as heart rate or cortisol could also support it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Improved performance on an avoidance or threat task may indicate reduced anxious responding.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A double-blind placebo-controlled trial could compare drug and placebo groups.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Random allocation and standardised anxiety measures would strengthen causal inference.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Side effects and ethical risk of administering a compound must also be monitored.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) GABA mimicry or reuptake blockade. (b) Lower anxiety scores and arousal. (c) Placebo-controlled RCT with side-effect monitoring.",
            commonErrors: ["Testing the drug without a placebo or blinding."],
          },
        },
        {
          id: "psych-u1-nnq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a sample of 80 neurons, 25% are classified as sensory neurons. Calculate how many sensory neurons there are.",
          response: { type: "numeric", parts: [{ label: "Sensory neurons", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage of sample", statement: "Part = total x percentage / 100" },
            ],
            steps: [
              { reasoning: "Calculate 25% of 80.", working: "80 x 0.25", marks: 1, markCode: "M" },
              { reasoning: "There are 20 sensory neurons.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 sensory neurons",
            commonErrors: ["Multiplying 80 by 25 instead of 0.25."],
          },
        },
      ],
    },
    {
      id: "psych-u1-brain-regions",
      title: "Brain structures and function",
      skill: "Describe the lobes of the cerebral cortex and the functions of key subcortical structures.",
      lesson: {
        sections: [
          {
            heading: "The cerebral cortex",
            body: "The **cerebral cortex** is the folded outer layer of the brain. Its four lobes have specialised roles: the **frontal lobe** controls planning, decision-making, personality and voluntary movement (motor cortex); the **parietal lobe** processes touch, temperature and spatial awareness (somatosensory cortex); the **temporal lobe** handles hearing, language comprehension and memory; the **occipital lobe** processes vision (primary visual cortex).",
          },
          {
            heading: "Subcortical structures",
            body: "Below the cortex: the **thalamus** relays sensory signals to the cortex (except smell); the **hypothalamus** regulates hunger, thirst, temperature and drives the pituitary gland; the **amygdala** processes emotion, especially fear; the **hippocampus** is essential for forming new memories; the **cerebellum** coordinates movement, balance and motor learning.",
          },
          {
            heading: "Localisation of function",
            body: "Evidence for localisation comes from **brain damage studies** (e.g. Phineas Gage's personality change after frontal lobe injury), **imaging** (fMRI showing active regions during tasks) and **electrical stimulation**. Functions are localised but also distributed — complex processes like memory involve multiple regions working together.",
          },
        ],
        keyFormulas: [
          { name: "Lobe functions", statement: "Frontal = executive; Parietal = touch/space; Temporal = hearing/memory; Occipital = vision" },
          { name: "Key structures", statement: "Thalamus = relay; Hypothalamus = homeostasis; Amygdala = emotion; Hippocampus = memory" },
        ],
        workedExample: {
          problem: "A patient cannot form new memories but recalls childhood events. Which structure is likely damaged?",
          solution: "The hippocampus, which is critical for consolidating new memories into long-term storage, is likely damaged — explaining anterograde amnesia while remote memories remain intact.",
        },
      },
      questions: [
        {
          id: "psych-u1-brq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which lobe of the brain is primarily responsible for processing visual information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parietal lobe" },
              { id: "b", text: "Occipital lobe" },
              { id: "c", text: "Frontal lobe" },
              { id: "d", text: "Temporal lobe" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Occipital lobe", statement: "Contains the primary visual cortex." },
            ],
            steps: [
              { reasoning: "Vision is processed in the occipital lobe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Occipital lobe",
            commonErrors: ["Confusing temporal (hearing) with occipital (vision)."],
          },
        },
        {
          id: "psych-u1-brq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the role of the thalamus and the hypothalamus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thalamus and hypothalamus", statement: "Thalamus relays sensory input; hypothalamus regulates homeostasis and the pituitary." },
            ],
            steps: [
              { reasoning: "Thalamus: acts as a relay station, routing sensory signals (except smell) to the appropriate cortical areas.", marks: 1, markCode: "M" },
              { reasoning: "Hypothalamus: maintains homeostasis — hunger, thirst, body temperature — and controls the pituitary gland.", marks: 1, markCode: "M" },
              { reasoning: "Both are subcortical structures linking brain and body regulation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Thalamus = sensory relay; hypothalamus = homeostasis and endocrine control.",
            commonErrors: ["Assigning vision or hearing to the hypothalamus."],
          },
        },
        {
          id: "psych-u1-brq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how damage to the hippocampus can produce anterograde amnesia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Hippocampus and memory", statement: "The hippocampus is essential for consolidating new experiences into long-term memory." },
            ],
            steps: [
              { reasoning: "New experiences are initially held in short-term memory, then consolidated for long-term storage.", marks: 1, markCode: "M" },
              { reasoning: "The hippocampus performs this consolidation — damage prevents new memories being stored.", marks: 1, markCode: "M" },
              { reasoning: "Result: the patient cannot form new long-term memories (anterograde amnesia) after the injury.", marks: 1, markCode: "R" },
              { reasoning: "Memories formed before the damage remain accessible, since they were already consolidated elsewhere (cortex).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hippocampal damage blocks consolidation of new memories while old memories persist.",
            commonErrors: ["Claiming all memory is lost — only new memory formation is affected."],
          },
        },
        {
          id: "psych-u1-brq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Phineas Gage survived an iron rod through his frontal lobe but his personality changed dramatically.",
          parts: [
            { label: "a", prompt: "Describe two functions associated with the frontal lobe.", marks: 2 },
            { label: "b", prompt: "Explain what Gage's case suggests about localisation of function.", marks: 3 },
            { label: "c", prompt: "Evaluate the limitations of using case studies like Gage's to study brain function.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Frontal lobe and localisation", statement: "Frontal lobe supports executive functions and personality; damage can alter behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Planning, decision-making and problem solving (executive functions).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Personality regulation, emotional control and voluntary movement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gage's personality change after frontal damage suggests this region is critical for personality and self-control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Supports localisation: specific brain areas relate to specific functions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "However the rod damaged multiple areas, so precise localisation is uncertain — functions are also distributed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "One case cannot establish reliable brain–behaviour links; the injury was uncontrolled.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "No baseline personality measures existed — 'change' is inferred, not measured.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Modern imaging studies with many participants provide stronger evidence, though case studies offer unique insight.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Executive + personality/movement. (b) Supports but complicates localisation. (c) Unique but uncontrolled and non-general.",
            commonErrors: ["Treating Gage as proof of strict localisation — the injury was diffuse."],
          },
        },
        {
          id: "psych-u1-brq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Planning, decision-making and personality are primarily associated with the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Frontal lobe" },
              { id: "b", text: "Temporal lobe" },
              { id: "c", text: "Parietal lobe" },
              { id: "d", text: "Occipital lobe" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Frontal lobe", statement: "Supports executive functions, planning, personality and voluntary movement." },
            ],
            steps: [
              { reasoning: "These higher functions are characteristic of the frontal lobe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Frontal lobe",
            commonErrors: ["Confusing frontal executive functions with parietal spatial processing."],
          },
        },
        {
          id: "psych-u1-brq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Touch, temperature and spatial awareness are mainly processed by the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parietal lobe" },
              { id: "b", text: "Frontal lobe" },
              { id: "c", text: "Occipital lobe" },
              { id: "d", text: "Temporal lobe" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parietal lobe", statement: "Contains somatosensory and spatial processing areas." },
            ],
            steps: [
              { reasoning: "Somatosensory and spatial functions localise mainly to the parietal lobe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Parietal lobe",
            commonErrors: ["Assigning vision to the parietal lobe — vision is occipital."],
          },
        },
        {
          id: "psych-u1-brq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Hearing, language comprehension and memory are strongly associated with the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temporal lobe" },
              { id: "b", text: "Occipital lobe" },
              { id: "c", text: "Frontal lobe" },
              { id: "d", text: "Cerebellum" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Temporal lobe", statement: "Processes hearing, language comprehension and contributes to memory." },
            ],
            steps: [
              { reasoning: "Auditory and language areas are located in the temporal lobe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Temporal lobe",
            commonErrors: ["Confusing temporal language functions with occipital vision."],
          },
        },
        {
          id: "psych-u1-brq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The thalamus mainly functions as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structure essential for forming new memories" },
              { id: "b", text: "Centre for regulating body temperature" },
              { id: "c", text: "Area controlling voluntary movement" },
              { id: "d", text: "Relay station for sensory signals to the cortex" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thalamus", statement: "Relays sensory information to appropriate cortical areas, except smell." },
            ],
            steps: [
              { reasoning: "The thalamus routes sensory input to the cortex for further processing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sensory relay station",
            commonErrors: ["Assigning homeostasis to the thalamus — that is primarily hypothalamic."],
          },
        },
        {
          id: "psych-u1-brq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Coordination of movement, balance and motor learning are mainly controlled by the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cerebellum" },
              { id: "b", text: "Hippocampus" },
              { id: "c", text: "Hypothalamus" },
              { id: "d", text: "Amygdala" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cerebellum", statement: "Coordinates movement, balance and motor learning." },
            ],
            steps: [
              { reasoning: "The cerebellum fine-tunes motor output and maintains balance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Cerebellum",
            commonErrors: ["Confusing cerebellum with cerebrum — the cerebellum coordinates movement."],
          },
        },
        {
          id: "psych-u1-brq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe the roles of the amygdala and hippocampus in behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amygdala and hippocampus", statement: "Amygdala processes emotion especially fear; hippocampus supports formation of new memories." },
            ],
            steps: [
              { reasoning: "The amygdala evaluates emotional significance, particularly threats and fear responses.", marks: 1, markCode: "M" },
              { reasoning: "It helps generate emotional reactions and memories tied to emotionally charged events.", marks: 1, markCode: "A" },
              { reasoning: "The hippocampus consolidates new experiences into long-term memory.", marks: 1, markCode: "M" },
              { reasoning: "Together they link emotional experience with memory, influencing behaviour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amygdala = emotion/fear; hippocampus = new memory consolidation.",
            commonErrors: ["Reversing the two structures' functions."],
          },
        },
        {
          id: "psych-u1-brq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how functional brain imaging such as fMRI can support localisation of function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neuroimaging evidence", statement: "Active brain regions can be inferred from blood-flow changes during tasks." },
            ],
            steps: [
              { reasoning: "Participants perform a task while the scanner records changes in blood oxygenation.", marks: 1, markCode: "M" },
              { reasoning: "Regions with increased activity during the task are inferred to contribute to that function.", marks: 1, markCode: "M" },
              { reasoning: "For example, visual tasks may show occipital activation and language tasks temporal/frontal activation.", marks: 1, markCode: "A" },
              { reasoning: "However imaging shows correlation, not proof that a region alone controls the function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "fMRI links task performance to active regions, supporting but not proving localisation.",
            commonErrors: ["Claiming imaging proves a single region is solely responsible for a function."],
          },
        },
        {
          id: "psych-u1-brq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Compare the functions of the occipital and temporal lobes, giving one example of behaviour affected by damage to each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Occipital versus temporal", statement: "Occipital = vision; temporal = hearing, language comprehension and memory." },
            ],
            steps: [
              { reasoning: "The occipital lobe contains the primary visual cortex and processes visual information.", marks: 1, markCode: "M" },
              { reasoning: "Damage can cause visual field loss or difficulty recognising objects despite intact eyes.", marks: 1, markCode: "A" },
              { reasoning: "The temporal lobe processes sound and contributes to language comprehension and memory.", marks: 1, markCode: "M" },
              { reasoning: "Damage can produce difficulty understanding speech or forming new memories if medial temporal areas are affected.", marks: 1, markCode: "A" },
              { reasoning: "Both lobes show localisation but also connect with other regions for complex processing.", marks: 1, markCode: "R" },
              { reasoning: "Therefore function is specialised yet distributed across the cortex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Occipital = vision; temporal = hearing/language/memory; damage affects respective functions.",
            commonErrors: ["Swapping the lobe functions or ignoring distributed processing."],
          },
        },
        {
          id: "psych-u1-brq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the use of brain damage case studies as evidence for localisation of function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lesion evidence", statement: "Damage linked to specific deficits suggests localisation, but lesions are rarely clean and baselines are often unknown." },
            ],
            steps: [
              { reasoning: "Case studies such as Phineas Gage can reveal striking links between injury and behavioural change.", marks: 1, markCode: "M" },
              { reasoning: "They offer unique insight into functions that cannot be experimentally induced ethically.", marks: 1, markCode: "A" },
              { reasoning: "However injuries usually damage multiple areas, so precise localisation is uncertain.", marks: 1, markCode: "R" },
              { reasoning: "Without pre-injury measures, recovery may reflect plasticity or other factors rather than simple loss.", marks: 1, markCode: "R" },
              { reasoning: "Single cases cannot be generalised to the wider population.", marks: 1, markCode: "M" },
              { reasoning: "Modern imaging and group lesion studies provide more controlled evidence, though case studies remain valuable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Powerful but uncontrolled and non-general; best used alongside imaging and group studies.",
            commonErrors: ["Treating one dramatic case as conclusive proof of strict localisation."],
          },
        },
        {
          id: "psych-u1-brq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A patient can recognise objects and voices but cannot identify familiar faces after damage near the occipitotemporal region.",
          parts: [
            { label: "a", prompt: "Identify the likely type of deficit and brain area involved.", marks: 2 },
            { label: "b", prompt: "Explain how this deficit relates to localisation of function.", marks: 3 },
            { label: "c", prompt: "Evaluate how strongly this case supports strict localisation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Face processing", statement: "Face recognition depends on specialised ventral-stream regions linking vision and memory." },
            ],
            steps: [
              { part: "a", reasoning: "The deficit is prosopagnosia or face-recognition impairment, linked to ventral occipitotemporal areas such as the fusiform region.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Other visual and auditory functions are spared, suggesting a selective deficit.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Selective impairment after focal damage suggests that face processing is localised to this pathway.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It supports the idea that specialised cortical regions handle distinct visual categories.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "However face recognition also involves memory and attention systems beyond one region.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The case is strong evidence because the deficit is specific and anatomically plausible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It is weaker evidence because one case cannot show the region is solely responsible.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Imaging and group studies are needed to confirm the degree of localisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Prosopagnosia in ventral occipitotemporal cortex. (b) Supports specialised face-processing localisation. (c) Strong but not proof of sole control.",
            commonErrors: ["Calling it blindness — object and voice recognition are intact."],
          },
        },
        {
          id: "psych-u1-brq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A patient with right parietal damage often ignores objects on the left side of space. Explain this neglect and evaluate what it suggests about brain function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spatial attention", statement: "Parietal regions contribute to spatial awareness and attention; right-sided damage can produce left neglect." },
            ],
            steps: [
              { reasoning: "The parietal lobe integrates sensory information to represent space and direct attention.", marks: 1, markCode: "M" },
              { reasoning: "Right parietal damage disrupts attention to the left side, producing hemispatial neglect.", marks: 1, markCode: "M" },
              { reasoning: "The patient is not blind — information reaches the brain but is not attended to or acted upon.", marks: 1, markCode: "R" },
              { reasoning: "This supports localisation of spatial attention but also shows attention is network-based.", marks: 1, markCode: "R" },
              { reasoning: "Other regions such as frontal and subcortical areas also contribute to spatial behaviour.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: strong evidence for specialised parietal roles within a distributed attention system.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Right parietal damage disrupts left spatial attention; supports localisation within a distributed network.",
            commonErrors: ["Describing neglect as a visual field defect rather than an attention deficit."],
          },
        },
        {
          id: "psych-u1-brq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In an fMRI fear study, 18 of 60 participants show amygdala activation. Calculate the percentage showing activation.",
          response: { type: "numeric", parts: [{ label: "Activation percentage", answer: 30, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage", statement: "Percentage = part / total x 100" },
            ],
            steps: [
              { reasoning: "Calculate 18 / 60 x 100.", working: "18 / 60 x 100", marks: 1, markCode: "M" },
              { reasoning: "The percentage is 30%.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Dividing 60 by 18 instead of 18 by 60."],
          },
        },
      ],
    },
  ],
};
