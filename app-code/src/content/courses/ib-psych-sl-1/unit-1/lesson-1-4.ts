import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "psych-u1-lesson-1-4",
  code: "1-4",
  title: "Neurotransmitters, Hormones and Genetics",
  goal: "I CAN explain synaptic transmission and the roles of major neurotransmitters and hormones, and evaluate behavioural genetics and brain lateralisation research.",
  standards: ["Paper 1", "Paper 2", "Topic 2"],
  vocabulary: [
    { term: "Neurotransmitter", definition: "A chemical released at a synapse that transmits signals between neurons." },
    { term: "Synapse", definition: "The microscopic gap between neurons across which neurotransmitters diffuse." },
    { term: "Endocrine system", definition: "The network of glands that release hormones into the bloodstream to regulate behaviour." },
    { term: "Nature vs nurture", definition: "The debate over whether behaviour is shaped by genetics (nature) or environment (nurture)." },
    { term: "Monozygotic twin", definition: "Identical twin formed from one fertilised egg, sharing 100% of genes." },
    { term: "Split-brain", definition: "A condition in which the corpus callosum is severed, disconnecting the brain's hemispheres." },
  ],
  concepts: [
    {
      id: "psych-u1-neurotransmission",
      title: "Neurotransmission and the endocrine system",
      skill: "Explain synaptic transmission, identify major neurotransmitters and hormones, and describe the stress response.",
      lesson: {
        sections: [
          {
            heading: "Synaptic transmission and neurotransmitters",
            body: "Neurons communicate across the **synapse**: an electrical impulse (action potential) triggers the release of **neurotransmitters** into the synaptic cleft, which bind to receptors on the next neuron. **Serotonin** regulates mood, sleep and appetite; low levels are linked to depression. **Dopamine** drives reward, motivation and motor control; its excess is implicated in schizophrenia and its loss in Parkinson's disease. **GABA** is the main inhibitory neurotransmitter, calming neural activity, while **glutamate** is the principal excitatory one. Drugs such as SSRIs work by altering neurotransmitter levels at the synapse.",
          },
          {
            heading: "Hormones and the endocrine system",
            body: "The **endocrine system** uses **glands** to secrete **hormones** into the bloodstream, producing slower but longer-lasting effects than neurotransmitters. The **adrenal glands** release **adrenaline** during the 'fight or flight' response; the **pituitary gland** (the 'master gland') directs other glands; **cortisol** sustains the stress response. Hormones influence mood, aggression, sexual behaviour and attachment — e.g. oxytocin promotes bonding.",
          },
          {
            heading: "The stress response and evaluation",
            body: "The **stress response** begins with the hypothalamus activating the sympathetic nervous system and the HPA axis: adrenaline prepares the body for action while cortisol maintains energy. Chronic stress damages health. Biological explanations are powerful but reductionist — neurotransmitter levels correlate with disorders without proving causation, and hormone effects interact with environment and cognition.",
          },
        ],
        keyFormulas: [
          { name: "Synaptic transmission", statement: "Action potential → neurotransmitter release → receptor binding → next neuron fires or is inhibited" },
          { name: "Excitatory vs inhibitory", statement: "Glutamate excites (promotes firing); GABA inhibits (reduces firing)" },
          { name: "Stress pathway", statement: "Hypothalamus → sympathetic nervous system + adrenal glands → adrenaline + cortisol" },
        ],
        workedExample: {
          problem: "Why do SSRIs (e.g. for depression) take several weeks to work even though they raise serotonin immediately?",
          solution: "SSRIs block serotonin reuptake, raising synaptic serotonin at once, but mood improvement follows slower neurochemical and neural adaptations. This illustrates that neurotransmitter effects are part of a complex, interacting system rather than a simple one-to-one switch.",
        },
      },
      questions: [
        {
          id: "psych-u1-neuroq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which neurotransmitter is primarily inhibitory and helps to calm neural activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dopamine" },
              { id: "b", text: "Serotonin" },
              { id: "c", text: "Glutamate" },
              { id: "d", text: "GABA" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "GABA", statement: "The main inhibitory neurotransmitter in the nervous system." },
            ],
            steps: [
              { reasoning: "GABA reduces neural firing; glutamate is the main excitatory transmitter.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** GABA",
            commonErrors: ["Confusing GABA (inhibitory) with glutamate (excitatory)."],
          },
        },
        {
          id: "psych-u1-neuroq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the roles of two major neurotransmitters in behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neurotransmitter function", statement: "Serotonin regulates mood/sleep; dopamine drives reward and motor control; GABA inhibits; glutamate excites." },
            ],
            steps: [
              { reasoning: "Serotonin: regulates mood, sleep and appetite; low levels are associated with depression.", marks: 1, markCode: "M" },
              { reasoning: "Dopamine: underlies reward, motivation and motor movement; implicated in schizophrenia and Parkinson's.", marks: 1, markCode: "M" },
              { reasoning: "Linking neurotransmitter imbalance to behaviour shows the biological basis of psychological states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Serotonin (mood/sleep) and dopamine (reward/movement) are key regulators of behaviour.",
            commonErrors: ["Naming neurotransmitters without linking them to behavioural functions."],
          },
        },
        {
          id: "psych-u1-neuroq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the endocrine system complements neural transmission during the stress response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress response", statement: "Fast neural signals (adrenaline) prepare immediate action; slower hormones (cortisol) sustain the response." },
            ],
            steps: [
              { reasoning: "Neural transmission is fast and targeted; the sympathetic nervous system triggers immediate 'fight or flight' responses.", marks: 1, markCode: "M" },
              { reasoning: "The endocrine system is slower but widespread — adrenaline from the adrenal medulla boosts heart rate and energy.", marks: 1, markCode: "M" },
              { reasoning: "Cortisol from the adrenal cortex sustains energy and suppresses non-essential functions over time.", marks: 1, markCode: "R" },
              { reasoning: "Together they coordinate a two-stage response: rapid preparation followed by sustained coping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neural signals act fast and locally; hormones act slower and body-wide, together sustaining the stress response.",
            commonErrors: ["Describing only one system without showing how they complement each other."],
          },
        },
        {
          id: "psych-u1-neuroq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A psychologist claims that 'depression is caused by a chemical imbalance in the brain.'",
          parts: [
            { label: "a", prompt: "Describe the process of synaptic transmission.", marks: 2 },
            { label: "b", prompt: "Explain how hormones and neurotransmitters may influence mood.", marks: 3 },
            { label: "c", prompt: "Evaluate the claim that depression is simply a chemical imbalance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biological explanation", statement: "Neurotransmitters and hormones shape mood, but single-cause chemical explanations are reductionist." },
            ],
            steps: [
              { part: "a", reasoning: "Action potential arrives at presynaptic terminal, triggering neurotransmitter release into the synapse.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Neurotransmitters bind to receptors on the postsynaptic neuron, exciting or inhibiting it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Low serotonin is associated with depressed mood; SSRIs raise synaptic serotonin.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stress hormones such as cortisol can affect mood and hippocampal function over time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Hormones like oxytocin and testosterone influence social bonding and aggression, affecting emotional states.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Correlation is not causation — low serotonin may be a consequence rather than a cause.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Depression involves cognitive, social and environmental factors that interact with biology.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The claim oversimplifies a complex disorder; biological factors are part, not the whole, explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Impulse → release → receptor binding. (b) Serotonin, cortisol, bonding hormones shape mood. (c) Reductionist — biology interacts with environment and cognition.",
            commonErrors: ["Accepting 'chemical imbalance' as a complete explanation without evaluation."],
          },
        },
        {
          id: "psych-u1-neuroq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Serotonin is most closely associated with regulating:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only voluntary movement" },
              { id: "b", text: "Mood, sleep and appetite" },
              { id: "c", text: "Only digestion" },
              { id: "d", text: "Only vision" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Serotonin", statement: "A neurotransmitter involved in mood, sleep and appetite regulation." },
            ],
            steps: [
              { reasoning: "Serotonin helps regulate mood, sleep and appetite.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mood, sleep and appetite",
            commonErrors: ["Assigning serotonin only to digestion or only to movement."],
          },
        },
        {
          id: "psych-u1-neuroq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Dopamine is most strongly linked to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regulating body temperature" },
              { id: "b", text: "Storing long-term memories" },
              { id: "c", text: "Reward, motivation and motor control" },
              { id: "d", text: "Calming all neural activity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dopamine", statement: "A neurotransmitter involved in reward, motivation, attention and motor control." },
            ],
            steps: [
              { reasoning: "Dopamine contributes to reward processing, motivation and movement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reward, motivation and motor control",
            commonErrors: ["Confusing dopamine with GABA, the main inhibitory transmitter."],
          },
        },
        {
          id: "psych-u1-neuroq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The endocrine system transmits chemical signals by releasing hormones into the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bloodstream" },
              { id: "b", text: "Nerve axons only" },
              { id: "c", text: "Synaptic cleft only" },
              { id: "d", text: "Spinal cord only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endocrine system", statement: "Glands secrete hormones into the bloodstream for widespread, slower effects." },
            ],
            steps: [
              { reasoning: "Hormones travel through the blood to reach target organs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Bloodstream",
            commonErrors: ["Confusing endocrine transmission with synaptic neurotransmission."],
          },
        },
        {
          id: "psych-u1-neuroq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which pair correctly identifies an inhibitory and an excitatory neurotransmitter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both GABA and glutamate are inhibitory" },
              { id: "b", text: "Glutamate inhibitory; GABA excitatory" },
              { id: "c", text: "GABA inhibitory; glutamate excitatory" },
              { id: "d", text: "Serotonin inhibitory; dopamine excitatory only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excitatory and inhibitory transmitters", statement: "GABA reduces firing; glutamate promotes firing." },
            ],
            steps: [
              { reasoning: "GABA is the main inhibitory transmitter and glutamate the principal excitatory one.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** GABA inhibitory; glutamate excitatory",
            commonErrors: ["Reversing the roles of GABA and glutamate."],
          },
        },
        {
          id: "psych-u1-neuroq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Cortisol is best described as a hormone that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produces an immediate reflex only" },
              { id: "b", text: "Directly carries signals across synapses" },
              { id: "c", text: "Is released only during sleep" },
              { id: "d", text: "Sustains the body's stress response over time" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cortisol", statement: "An adrenal hormone that helps sustain energy and coping during prolonged stress." },
            ],
            steps: [
              { reasoning: "Cortisol supports the longer-term stress response after initial adrenaline activation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Sustains the stress response",
            commonErrors: ["Confusing cortisol's sustained hormonal role with adrenaline's rapid neural role."],
          },
        },
        {
          id: "psych-u1-neuroq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "SSRIs are thought to help depression mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing GABA release in every brain region" },
              { id: "b", text: "Blocking serotonin reuptake and increasing synaptic serotonin" },
              { id: "c", text: "Destroying all dopamine neurons" },
              { id: "d", text: "Replacing cortisol with adrenaline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "SSRI mechanism", statement: "SSRIs prevent serotonin reuptake, raising serotonin available at receptors." },
            ],
            steps: [
              { reasoning: "Blocking reuptake keeps more serotonin in the synapse for longer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Blocking serotonin reuptake",
            commonErrors: ["Saying SSRIs instantly cure depression — effects involve slower neural adaptations."],
          },
        },
        {
          id: "psych-u1-neuroq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between neurotransmitters and hormones as chemical messengers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Neurotransmitters versus hormones", statement: "Neurotransmitters act across synapses; hormones travel in blood with slower, widespread effects." },
            ],
            steps: [
              { reasoning: "Neurotransmitters are released at synapses and bind to nearby receptors within milliseconds.", marks: 1, markCode: "M" },
              { reasoning: "Their effects are fast, localised and often short-lived.", marks: 1, markCode: "A" },
              { reasoning: "Hormones are secreted by glands into the bloodstream and reach distant target organs.", marks: 1, markCode: "M" },
              { reasoning: "Their effects are slower, longer-lasting and more widespread than synaptic transmission.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neurotransmitters = fast, local synaptic signals; hormones = slower, systemic blood-borne signals.",
            commonErrors: ["Saying both systems work identically because both use chemicals."],
          },
        },
        {
          id: "psych-u1-neuroq16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how adrenaline and cortisol differ in their roles during the stress response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Adrenaline versus cortisol", statement: "Adrenaline acts quickly for immediate arousal; cortisol sustains energy over time." },
            ],
            steps: [
              { reasoning: "Adrenaline is released rapidly by the adrenal medulla during fight-or-flight.", marks: 1, markCode: "M" },
              { reasoning: "It quickly raises heart rate, redirects blood to muscles and prepares immediate action.", marks: 1, markCode: "A" },
              { reasoning: "Cortisol is released more slowly and helps maintain energy and coping over a longer period.", marks: 1, markCode: "M" },
              { reasoning: "Together they provide rapid preparation followed by sustained stress responses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adrenaline = fast immediate arousal; cortisol = slower sustained stress support.",
            commonErrors: ["Describing both hormones as having identical timing and effects."],
          },
        },
        {
          id: "psych-u1-neuroq17",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Describe synaptic transmission and explain how drugs can alter neurotransmitter activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Synaptic pharmacology", statement: "Drugs can mimic transmitters, block receptors, increase release or prevent reuptake/breakdown." },
            ],
            steps: [
              { reasoning: "An action potential triggers neurotransmitter release into the synapse.", marks: 1, markCode: "M" },
              { reasoning: "The transmitter binds to receptors on the postsynaptic neuron, exciting or inhibiting it.", marks: 1, markCode: "M" },
              { reasoning: "Drugs may mimic a neurotransmitter and activate receptors directly.", marks: 1, markCode: "A" },
              { reasoning: "They may block receptors, preventing the natural transmitter from binding.", marks: 1, markCode: "M" },
              { reasoning: "They may increase release or block reuptake, leaving more transmitter in the synapse.", marks: 1, markCode: "M" },
              { reasoning: "These actions alter signalling and can change mood, movement or cognition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Synaptic transmission can be altered by mimicking, blocking, increasing release or preventing reuptake.",
            commonErrors: ["Assuming all drugs increase neurotransmitters — many block or mimic instead."],
          },
        },
        {
          id: "psych-u1-neuroq18",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate the claim that depression is simply caused by a chemical imbalance in the brain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biological reductionism", statement: "Neurotransmitters influence mood but single-cause chemical explanations ignore interaction and context." },
            ],
            steps: [
              { reasoning: "Low serotonin and altered dopamine are associated with depression, and SSRIs target serotonin.", marks: 1, markCode: "M" },
              { reasoning: "However association does not prove that low serotonin causes depression rather than resulting from it.", marks: 1, markCode: "R" },
              { reasoning: "Stress hormones such as cortisol and life events interact with brain chemistry over time.", marks: 1, markCode: "M" },
              { reasoning: "Cognitive, social and environmental factors also shape depressive symptoms.", marks: 1, markCode: "R" },
              { reasoning: "The chemical imbalance model is useful but incomplete and somewhat reductionist.", marks: 1, markCode: "R" },
              { reasoning: "A biopsychosocial view better explains depression as emerging from interacting biological and contextual factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Biology matters but 'simply a chemical imbalance' is reductionist; factors interact.",
            commonErrors: ["Accepting the claim because antidepressants exist — treatment response does not prove a single cause."],
          },
        },
        {
          id: "psych-u1-neuroq19",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student feels anxious before exams and cortisol remains elevated for several weeks.",
          parts: [
            { label: "a", prompt: "Outline the body's stress pathway from detection to hormone release.", marks: 2 },
            { label: "b", prompt: "Explain short-term and long-term effects of this response.", marks: 3 },
            { label: "c", prompt: "Evaluate a purely biological explanation of the student's anxiety.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Stress pathway", statement: "Threat detection activates sympathetic responses and the HPA axis, releasing adrenaline and cortisol." },
            ],
            steps: [
              { part: "a", reasoning: "The hypothalamus activates the sympathetic nervous system and stimulates the adrenal glands via the HPA axis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Adrenaline is released rapidly while cortisol is released to sustain the response.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Short-term effects include increased heart rate, alertness and redirected energy for coping.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Long-term elevated cortisol can impair sleep, memory and immune functioning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chronic stress may maintain anxiety symptoms if the response does not return to baseline.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Biology explains the physiological arousal but not why exams are interpreted as threatening.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Cognitive appraisal, past experiences and social pressures shape the stress response.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: a biopsychosocial explanation is stronger than a purely hormonal one.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hypothalamus → sympathetic/HPA → adrenaline + cortisol. (b) Short-term arousal, long-term harm. (c) Biology interacts with appraisal and context.",
            commonErrors: ["Treating cortisol as the cause of anxiety rather than part of the response."],
          },
        },
        {
          id: "psych-u1-neuroq20",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Synaptic serotonin rises from a mean of 40 to 64 units after SSRI treatment. Calculate the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 60, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "Percentage increase = (new - old) / old x 100" },
            ],
            steps: [
              { reasoning: "Increase = (64 - 40) / 40 x 100.", working: "(64 - 40) / 40 x 100", marks: 1, markCode: "M" },
              { reasoning: "The percentage increase is 60%.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60%",
            commonErrors: ["Dividing the increase by 64 instead of the original value 40."],
          },
        },
      ],
    },
    {
      id: "psych-u1-behavioural-genetics",
      title: "Behavioural genetics and brain lateralisation",
      skill: "Explain the nature-nurture debate, twin study evidence, split-brain research and neural plasticity.",
      lesson: {
        sections: [
          {
            heading: "Nature versus nurture and twin studies",
            body: "**Behavioural genetics** investigates how genes influence behaviour. **Monozygotic (MZ/identical) twins** share 100% of genes; **dizygotic (DZ/fraternal) twins** share about 50%. If MZ twins are more similar on a trait than DZ twins, genetic influence is inferred. Twin studies suggest substantial heritability for intelligence, personality and some mental disorders — but they cannot fully separate nature from nurture because MZ twins often share more similar environments too.",
          },
          {
            heading: "Split-brain research and lateralisation",
            body: "The brain's hemispheres are specialised (**lateralisation**): the left typically handles language and analytical processing, the right spatial and emotional processing. **Sperry and Gazzaniga's split-brain studies** on patients whose **corpus callosum** was severed (to treat epilepsy) showed each hemisphere can operate independently — the left 'interpreter' often confabulates explanations for actions driven by the right hemisphere.",
          },
          {
            heading: "Plasticity and evaluation",
            body: "**Neuroplasticity** is the brain's ability to reorganise and form new connections throughout life — shown by London taxi drivers' enlarged hippocampi and recovery after brain injury. Evaluation of behavioural genetics: twin concordance rates are suggestive but confounded by shared environment; gene-environment interaction means genes set potentials that experience shapes. Lateralisation findings come from small clinical samples and may overstate hemispheric differences.",
          },
        ],
        keyFormulas: [
          { name: "Twin logic", statement: "MZ twins share ~100% genes, DZ ~50% — greater MZ similarity implies genetic influence" },
          { name: "Split-brain", statement: "Severed corpus callosum → hemispheres process independently" },
          { name: "Plasticity", statement: "Experience changes brain structure and function across the lifespan" },
        ],
        workedExample: {
          problem: "If identical twins reared apart show similar personality traits, does this prove genetics determines personality?",
          solution: "It supports genetic influence but does not prove determinism — adoption agencies may match similar environments, genes interact with experience, and 'personality' measures may be heritable partly through genetic effects on environments sought. Twin studies show influence, not inevitability.",
        },
      },
      questions: [
        {
          id: "psych-u1-neuroq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Comparing monozygotic and dizygotic twins primarily helps psychologists investigate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cultural differences between countries" },
              { id: "b", text: "The effect of diet on growth" },
              { id: "c", text: "Genetic versus environmental influence on behaviour" },
              { id: "d", text: "The structure of the brain" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Twin study logic", statement: "MZ twins share all genes, DZ share half — differing similarity reveals genetic contribution." },
            ],
            steps: [
              { reasoning: "Twin comparisons are the classic method for estimating heritability of behavioural traits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Genetic versus environmental influence on behaviour",
            commonErrors: ["Thinking twin studies directly identify specific genes."],
          },
        },
        {
          id: "psych-u1-neuroq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two findings from split-brain research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Split-brain findings", statement: "Hemispheres can operate independently; the left hemisphere 'interprets' behaviour it did not control." },
            ],
            steps: [
              { reasoning: "Patients could handle objects with the left hand (right hemisphere) without consciously knowing what they held — each hemisphere processed independently.", marks: 1, markCode: "M" },
              { reasoning: "The left hemisphere often confabulated explanations for actions driven by the disconnected right hemisphere.", marks: 1, markCode: "M" },
              { reasoning: "Findings revealed lateralisation: language mainly left, spatial/emotional processing mainly right.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent hemisphere processing and left-hemisphere interpretation/confabulation.",
            commonErrors: ["Describing the surgical procedure rather than the research findings."],
          },
        },
        {
          id: "psych-u1-neuroq7",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why twin studies cannot fully separate genetic from environmental influences on behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Twin study limits", statement: "MZ twins share genes AND often similar environments, confounding heritability estimates." },
            ],
            steps: [
              { reasoning: "MZ twins typically share more similar environments (same family, friends, experiences) than DZ twins.", marks: 1, markCode: "M" },
              { reasoning: "Greater MZ similarity may therefore reflect shared environment, not genes alone.", marks: 1, markCode: "M" },
              { reasoning: "Gene-environment correlation: genes influence the environments people seek and create.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: twin studies estimate heritability but cannot isolate pure genetic effects — adoption and molecular studies help triangulate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MZ twins share similar environments too, so greater similarity cannot be attributed purely to genes.",
            commonErrors: ["Assuming twin concordance equals genetic determinism."],
          },
        },
        {
          id: "psych-u1-neuroq8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student claims that 'behaviour is entirely determined by our genes.'",
          parts: [
            { label: "a", prompt: "Explain the nature versus nurture debate.", marks: 2 },
            { label: "b", prompt: "Describe evidence from twin studies and split-brain research relevant to this claim.", marks: 3 },
            { label: "c", prompt: "Evaluate the claim that behaviour is entirely genetically determined.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nature-nurture", statement: "Genes and environment interact; neither alone determines behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Nature: behaviour shaped by inherited genes; nurture: shaped by environment and experience.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Modern view: gene-environment interaction — genes set potentials that experience realises.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Twin studies: MZ twins more concordant than DZ on traits like intelligence and personality, implying genetic influence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Split-brain research: shows hard-wired lateralisation but also that hemispheres adapt — partial evidence for innate organisation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Neuroplasticity demonstrates the brain changes with experience, supporting nurture's role.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Against 'entirely': twin studies show influence not determinism; environments shape gene expression.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Same genes produce different outcomes across environments (e.g. identical twins reared apart differ).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: genes contribute substantially but behaviour emerges from continuous gene-environment interaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Nature=genes, nurture=environment; they interact. (b) Twins show genetic influence; plasticity shows environmental shaping. (c) Genetic influence yes, genetic determinism no.",
            commonErrors: ["Treating heritability estimates as fixed percentages applying to individuals."],
          },
        },
        {
          id: "psych-u1-neuroq21",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Monozygotic twins share approximately what percentage of their genes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50%" },
              { id: "b", text: "100%" },
              { id: "c", text: "25%" },
              { id: "d", text: "75%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monozygotic twins", statement: "Identical twins develop from one fertilised egg and share virtually all genes." },
            ],
            steps: [
              { reasoning: "MZ twins share 100% of their genetic material, unlike DZ twins who share about 50%.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 100%",
            commonErrors: ["Confusing MZ 100% gene sharing with DZ 50% sharing."],
          },
        },
        {
          id: "psych-u1-neuroq22",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Split-brain research typically involves patients whose:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spinal cord is completely cut" },
              { id: "b", text: "Cerebellum has been damaged" },
              { id: "c", text: "Hippocampus is removed" },
              { id: "d", text: "Corpus callosum has been severed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Split-brain", statement: "The corpus callosum connecting hemispheres is severed, often to treat epilepsy." },
            ],
            steps: [
              { reasoning: "Severing the corpus callosum disconnects communication between the hemispheres.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Corpus callosum severed",
            commonErrors: ["Confusing split-brain surgery with removal of the hippocampus or cerebellum."],
          },
        },
        {
          id: "psych-u1-neuroq23",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Neuroplasticity refers to the brain's ability to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop all development in adulthood" },
              { id: "b", text: "Remain completely unchanged after birth" },
              { id: "c", text: "Reorganise and form new connections in response to experience" },
              { id: "d", text: "Duplicate identical hemispheres" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Neuroplasticity", statement: "The brain's capacity to change structure and function throughout life." },
            ],
            steps: [
              { reasoning: "Experience, learning and recovery can reshape neural connections.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reorganise and form new connections",
            commonErrors: ["Believing the adult brain is fixed and cannot adapt."],
          },
        },
        {
          id: "psych-u1-neuroq24",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Lateralisation of brain function generally means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The right hemisphere controls all language" },
              { id: "b", text: "Different functions are specialised to different hemispheres" },
              { id: "c", text: "Hemispheres cannot communicate at all" },
              { id: "d", text: "Both hemispheres perform every function equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lateralisation", statement: "Left hemisphere often handles language/analysis; right handles spatial/emotional processing." },
            ],
            steps: [
              { reasoning: "Lateralisation describes specialisation, though functions are also distributed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Functions are specialised across hemispheres",
            commonErrors: ["Overstating lateralisation — most functions involve both hemispheres."],
          },
        },
        {
          id: "psych-u1-neuroq25",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If monozygotic twins are more concordant for a trait than dizygotic twins, this suggests:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Concordance is impossible to measure" },
              { id: "b", text: "Environment is the only influence" },
              { id: "c", text: "The trait is learned only" },
              { id: "d", text: "Genetic factors contribute to the trait" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Twin concordance", statement: "Greater MZ than DZ similarity implies genetic influence on the trait." },
            ],
            steps: [
              { reasoning: "MZ twins share more genes, so greater similarity points to genetic contribution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Genetic factors contribute",
            commonErrors: ["Ignoring that MZ twins may also share more similar environments."],
          },
        },
        {
          id: "psych-u1-neuroq26",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A major limitation of twin studies in behavioural genetics is that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dizygotic twins share 100% of genes" },
              { id: "b", text: "Monozygotic twins share genes but often similar environments too" },
              { id: "c", text: "All traits are purely environmental" },
              { id: "d", text: "Twins cannot be compared on any trait" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Twin study confound", statement: "MZ twins share genes and often environments, making heritability estimates ambiguous." },
            ],
            steps: [
              { reasoning: "Greater MZ similarity may reflect shared upbringing rather than genes alone.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** MZ twins share genes and similar environments",
            commonErrors: ["Treating twin concordance as proof of genetic determinism."],
          },
        },
        {
          id: "psych-u1-neuroq27",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain the nature-nurture debate and the modern interactionist view.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nature-nurture interaction", statement: "Genes and environment interact; genes influence potentials while experience shapes outcomes." },
            ],
            steps: [
              { reasoning: "Nature refers to inherited genetic influences; nurture refers to environmental and experiential influences.", marks: 1, markCode: "M" },
              { reasoning: "Early debate asked which side determines behaviour, but most traits show both influences.", marks: 1, markCode: "M" },
              { reasoning: "Gene-environment interaction means the same genotype can produce different phenotypes in different environments.", marks: 1, markCode: "R" },
              { reasoning: "Modern psychology therefore studies how genes set potentials that experience realises.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nature and nurture interact; genes influence potentials shaped by experience.",
            commonErrors: ["Presenting nature and nurture as mutually exclusive causes."],
          },
        },
        {
          id: "psych-u1-neuroq28",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Describe two findings from split-brain research that reveal lateralisation of function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Split-brain evidence", statement: "Disconnected hemispheres can process information independently, revealing specialised roles." },
            ],
            steps: [
              { reasoning: "Information presented to one hemisphere could sometimes be processed without the other hemisphere knowing.", marks: 1, markCode: "M" },
              { reasoning: "Patients could manipulate objects with the hand controlled by the right hemisphere while verbally denying knowledge of the object.", marks: 1, markCode: "A" },
              { reasoning: "The left hemisphere often produced verbal explanations or confabulations for actions driven by the right hemisphere.", marks: 1, markCode: "M" },
              { reasoning: "These findings support left-hemisphere language/interpretation and right-hemisphere spatial/emotional specialisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent hemisphere processing and left-hemisphere confabulation reveal lateralisation.",
            commonErrors: ["Describing only the surgery rather than the behavioural findings."],
          },
        },
        {
          id: "psych-u1-neuroq29",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Evaluate twin study evidence for the heritability of intelligence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heritability evidence", statement: "Twin concordance suggests genetic influence but cannot fully separate genes from shared environment." },
            ],
            steps: [
              { reasoning: "Higher MZ than DZ concordance for intelligence suggests genes contribute to individual differences.", marks: 1, markCode: "M" },
              { reasoning: "Adoption and twin-reared-apart studies can reduce shared-environment confounds.", marks: 1, markCode: "A" },
              { reasoning: "However MZ twins may still share prenatal conditions and correlated environments.", marks: 1, markCode: "R" },
              { reasoning: "Gene-environment correlation means genetic traits can influence the environments people experience.", marks: 1, markCode: "R" },
              { reasoning: "Heritability estimates describe population variation, not fixed destiny for individuals.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: strong evidence for genetic influence, weak evidence for genetic determinism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Twin studies support genetic influence on intelligence but not inevitability.",
            commonErrors: ["Interpreting heritability as a fixed percentage for each person."],
          },
        },
        {
          id: "psych-u1-neuroq30",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Identical twins reared apart are both described as shy, while fraternal twins reared together differ greatly in sociability.",
          parts: [
            { label: "a", prompt: "Explain what the twin comparison is designed to investigate.", marks: 2 },
            { label: "b", prompt: "Interpret the pattern of results for nature and nurture.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the results prove genetic determination.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Twin design", statement: "MZ share more genes than DZ; greater MZ similarity suggests genetic influence." },
            ],
            steps: [
              { part: "a", reasoning: "The design compares genetic similarity (MZ vs DZ) with environmental similarity (reared apart vs together).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It estimates how much genetic and environmental factors contribute to a trait.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "MZ twins reared apart being similar despite different environments supports genetic influence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "DZ twins reared together differing suggests shared environment alone does not make them identical.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Together the pattern implies both genes and environment shape sociability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Similarity does not prove determinism because adoption environments may still be matched.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Genes may influence the environments individuals seek or create.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: evidence supports influence, not inevitability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Genetic vs environmental influence. (b) Genes and environment both matter. (c) Supports influence, not determinism.",
            commonErrors: ["Claiming reared-apart MZ similarity proves environment is irrelevant."],
          },
        },
        {
          id: "psych-u1-neuroq31",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "MZ twin concordance for a trait is 80% and DZ twin concordance is 40%. Calculate the difference in percentage points.",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 40, unit: "percentage points" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage-point difference", statement: "Difference = MZ concordance - DZ concordance" },
            ],
            steps: [
              { reasoning: "Subtract DZ concordance from MZ concordance.", working: "80 - 40", marks: 1, markCode: "M" },
              { reasoning: "The difference is 40 percentage points.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 percentage points",
            commonErrors: ["Dividing 80 by 40 instead of subtracting."],
          },
        },
        {
          id: "psych-u1-neuroq32",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A twin study has 120 MZ pairs and 80 DZ pairs. If 75% of MZ pairs and 50% of DZ pairs are concordant for a disorder, calculate the number of concordant pairs in each group.",
          response: {
            type: "numeric",
            parts: [
              { label: "Concordant MZ pairs", answer: 90 },
              { label: "Concordant DZ pairs", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Concordant pairs", statement: "Concordant pairs = total pairs x concordance percentage / 100" },
            ],
            steps: [
              { reasoning: "MZ concordant pairs = 120 x 0.75.", working: "120 x 0.75", marks: 1, markCode: "M" },
              { reasoning: "MZ concordant = 90.", working: "90", marks: 1, markCode: "A" },
              { reasoning: "DZ concordant = 80 x 0.50 = 40.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 MZ pairs and 40 DZ pairs concordant",
            commonErrors: ["Applying the MZ percentage to the DZ sample or vice versa."],
          },
        },
      ],
    },
  ],
};
