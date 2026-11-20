import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "cieipsych-u3-lesson-3-5",
  code: "3-5",
  title: "Biological psychology, disorders and treatments",
  goal: "I CAN explain brain function, sleep, disorders and psychological treatments.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 6: Biological and abnormal psychology",
  ],
  vocabulary: [
    {
      term: "Neurons",
      definition: "Nerve cells transmitting electrical/chemical signals.",
    },
    {
      term: "Synapse",
      definition: "Gap between neurons where neurotransmitters pass.",
    },
    {
      term: "Neurotransmitters",
      definition: "Chemical messengers crossing synapses.",
    },
    {
      term: "Cerebral cortex",
      definition: "Outer brain layer handling higher functions.",
    },
    {
      term: "Hippocampus",
      definition: "Brain region crucial for memory formation.",
    },
    {
      term: "REM sleep",
      definition: "Rapid eye movement sleep — dreaming stage.",
    },
    {
      term: "Disorder",
      definition: "Pattern of thoughts/feelings/behaviours causing distress.",
    },
    {
      term: "CBT (cognitive behavioural therapy)",
      definition: "Therapy targeting thoughts and behaviours.",
    },
    {
      term: "Psychoanalysis",
      definition: "Freud's therapy exploring unconscious conflicts.",
    },
    {
      term: "Drug therapy",
      definition: "Medication treating psychological symptoms.",
    },
    {
      term: "Case study",
      definition: "In-depth investigation of one individual.",
    },
    {
      term: "Humanistic therapy",
      definition: "Client-centred therapy focusing on self-actualisation.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u3-biological",
      title: "Brain function and sleep",
      skill:
        "Explain neurons, brain regions, neurotransmitters and sleep stages.",
      lesson: {
        sections: [
          {
            heading: "Neurons and neurotransmitters",
            body: "**Neurons** are nerve cells transmitting electrical impulses. At the **synapse**, chemical messengers (**neurotransmitters**) cross the gap to the next neuron. Key neurotransmitters: **serotonin** (mood regulation — low levels linked to depression), **dopamine** (reward/movement — low in Parkinson's), **adrenaline** (fight-or-flight), **GABA** (calming). Imbalances in neurotransmitters are linked to disorders.",
          },
          {
            heading: "Brain regions",
            body: "**Cerebral cortex**: outer layer handling thinking, memory, voluntary movement. **Hippocampus**: crucial for forming new memories — damage causes amnesia. **Amygdala**: emotion processing, especially fear. **Hypothalamus**: maintains homeostasis, controls hunger/thirst/temperature. **Cerebellum**: coordination and balance. **Brainstem**: vital functions — breathing, heart rate.",
          },
          {
            heading: "Sleep",
            body: "Sleep has stages: **Stage 1-2** (light sleep), **Stage 3-4** (deep slow-wave sleep — physical restoration, growth hormone), **REM** (rapid eye movement — dreaming, emotional processing, memory consolidation). Sleep deprivation impairs concentration, mood and memory. Dreams may reflect wish fulfilment (Freud) or random neural activity (activation-synthesis).",
          },
        ],
        keyFormulas: [
          {
            name: "Serotonin",
            statement: "Mood regulation — low = depression",
          },
          {
            name: "Dopamine",
            statement: "Reward/movement — low = Parkinson's",
          },
          {
            name: "Hippocampus",
            statement: "Memory formation",
          },
          {
            name: "REM",
            statement: "Dreaming stage",
          },
        ],
        workedExample: {
          problem:
            "A patient can't form new memories but remembers old ones. Which brain region is damaged?",
          solution:
            "The hippocampus — it's crucial for forming new memories (anterior to it for retrieval). Damage causes anterograde amnesia.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-bio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Neurons are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nerve cells transmitting signals" },
              { id: "b", text: "Blood cells" },
              { id: "c", text: "Muscle cells" },
              { id: "d", text: "Bone cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neurons",
                statement: "Nerve cells transmitting signals.",
              },
            ],
            steps: [
              {
                reasoning: "Neurons = nerve cells.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nerve cells.",
          },
        },
        {
          id: "cieipsych-u3-bio-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The synapse is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The gap between neurons" },
              { id: "b", text: "A brain region" },
              { id: "c", text: "A type of cell" },
              { id: "d", text: "A hormone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synapse",
                statement: "Gap between neurons.",
              },
            ],
            steps: [
              {
                reasoning: "Synapse = gap between neurons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The gap between neurons.",
          },
        },
        {
          id: "cieipsych-u3-bio-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Neurotransmitters are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical messengers crossing synapses" },
              { id: "b", text: "Blood cells" },
              { id: "c", text: "Muscles" },
              { id: "d", text: "Bones" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neurotransmitters",
                statement: "Chemical messengers across synapses.",
              },
            ],
            steps: [
              {
                reasoning: "Neurotransmitters = chemical messengers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Chemical messengers.",
          },
        },
        {
          id: "cieipsych-u3-bio-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Low serotonin levels are linked to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depression" },
              { id: "b", text: "Parkinson's" },
              { id: "c", text: "Epilepsy" },
              { id: "d", text: "Schizophrenia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Serotonin",
                statement: "Low levels linked to depression.",
              },
            ],
            steps: [
              {
                reasoning: "Low serotonin → depression.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Depression.",
          },
        },
        {
          id: "cieipsych-u3-bio-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Low dopamine levels are linked to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parkinson's disease" },
              { id: "b", text: "Depression" },
              { id: "c", text: "Anxiety" },
              { id: "d", text: "OCD" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dopamine",
                statement: "Low levels linked to Parkinson's.",
              },
            ],
            steps: [
              {
                reasoning: "Low dopamine → Parkinson's.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Parkinson's disease.",
          },
        },
        {
          id: "cieipsych-u3-bio-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The hippocampus is crucial for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory formation" },
              { id: "b", text: "Movement" },
              { id: "c", text: "Breathing" },
              { id: "d", text: "Vision" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hippocampus",
                statement: "Memory formation region.",
              },
            ],
            steps: [
              {
                reasoning: "Hippocampus = memory.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Memory formation.",
          },
        },
        {
          id: "cieipsych-u3-bio-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "REM sleep is characterized by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rapid eye movements and dreaming" },
              { id: "b", text: "Deep sleep" },
              { id: "c", text: "No brain activity" },
              { id: "d", text: "Physical restoration only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "REM sleep",
                statement: "Dreaming stage with rapid eye movements.",
              },
            ],
            steps: [
              {
                reasoning: "REM = dreaming.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Rapid eye movements and dreaming.",
          },
        },
        {
          id: "cieipsych-u3-bio-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The amygdala is involved in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotion processing, especially fear" },
              { id: "b", text: "Memory formation" },
              { id: "c", text: "Breathing" },
              { id: "d", text: "Balance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amygdala",
                statement: "Emotion processing, especially fear.",
              },
            ],
            steps: [
              {
                reasoning: "Amygdala = emotion/fear.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Emotion processing, especially fear.",
          },
        },
        {
          id: "cieipsych-u3-bio-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The hypothalamus maintains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homeostasis — hunger, thirst, temperature" },
              { id: "b", text: "Memory" },
              { id: "c", text: "Vision" },
              { id: "d", text: "Speech" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothalamus",
                statement: "Maintains homeostasis.",
              },
            ],
            steps: [
              {
                reasoning: "Hypothalamus = homeostasis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Homeostasis.",
          },
        },
        {
          id: "cieipsych-u3-bio-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how neurotransmitters affect behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Neurotransmitter function",
                statement: "Chemical messengers regulate behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Neurotransmitters cross synapses to transmit signals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Imbalances affect mood, movement, behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Neurotransmitters transmit signals; imbalances affect behaviour.",
          },
        },
        {
          id: "cieipsych-u3-bio-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between the cerebral cortex and the hippocampus.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brain regions",
                statement: "Cortex = higher functions; hippocampus = memory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cerebral cortex: outer layer, thinking, voluntary movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hippocampus: memory formation specifically.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cortex = higher functions; hippocampus = memory.",
          },
        },
        {
          id: "cieipsych-u3-bio-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how sleep deprivation affects psychological functioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sleep deprivation effects",
                statement: "Impairs concentration, mood, memory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sleep deprivation impairs concentration and attention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It affects mood — irritability, anxiety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It impairs memory consolidation — can't form new memories well.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Impairs concentration, mood and memory consolidation.",
          },
        },
        {
          id: "cieipsych-u3-bio-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A patient has damage to the hippocampus. Explain likely symptoms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Brain region application",
                statement: "Hippocampus = memory formation.",
              },
            ],
            steps: [
              {
                reasoning: "Cannot form new memories — anterograde amnesia.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May remember old memories (stored in cortex).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May have difficulty with spatial navigation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other functions (movement, vision) likely intact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anterograde amnesia — can't form new memories; old memories intact.",
          },
        },
        {
          id: "cieipsych-u3-bio-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Adrenaline is released during:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fight-or-flight response" },
              { id: "b", text: "Sleep" },
              { id: "c", text: "Digestion" },
              { id: "d", text: "Memory formation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adrenaline",
                statement: "Fight-or-flight neurotransmitter.",
              },
            ],
            steps: [
              {
                reasoning: "Adrenaline = fight-or-flight.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fight-or-flight response.",
          },
        },
        {
          id: "cieipsych-u3-bio-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of GABA?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GABA",
                statement: "Calming neurotransmitter.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GABA is an inhibitory neurotransmitter — calms neural activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Low GABA linked to anxiety.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Calming neurotransmitter; low levels linked to anxiety.",
          },
        },
        {
          id: "cieipsych-u3-bio-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cerebellum controls:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coordination and balance" },
              { id: "b", text: "Memory" },
              { id: "c", text: "Emotion" },
              { id: "d", text: "Breathing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cerebellum",
                statement: "Coordination and balance.",
              },
            ],
            steps: [
              {
                reasoning: "Cerebellum = coordination/balance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Coordination and balance.",
          },
        },
        {
          id: "cieipsych-u3-bio-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens during REM sleep?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "REM sleep",
                statement: "Dreaming, emotional processing.",
              },
            ],
            steps: [
              {
                reasoning: "Rapid eye movements, vivid dreaming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Memory consolidation and emotional processing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dreaming, memory consolidation, emotional processing.",
          },
        },
        {
          id: "cieipsych-u3-bio-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the activation-synthesis theory of dreaming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Activation-synthesis",
                statement: "Dreams = random neural activity interpreted.",
              },
            ],
            steps: [
              {
                reasoning: "Random neural activity during REM sleep.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Brain tries to make sense of it → dreams.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contrasts with Freud's wish fulfilment view.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dreams are brain interpreting random neural activity.",
          },
        },
        {
          id: "cieipsych-u3-bio-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare Freud's and Hobson's theories of dreaming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dream theories",
                statement: "Wish fulfilment vs random activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Freud: dreams = wish fulfilment of unconscious desires.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hobson (activation-synthesis): dreams = random neural activity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Freud's is psychoanalytic; Hobson's is biological.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both have evidence but neither fully explains dreams.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Freud = wish fulfilment; Hobson = random activity; both partial.",
          },
        },
        {
          id: "cieipsych-u3-bio-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The brainstem controls:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vital functions — breathing, heart rate" },
              { id: "b", text: "Memory" },
              { id: "c", text: "Vision" },
              { id: "d", text: "Speech" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brainstem",
                statement: "Vital functions.",
              },
            ],
            steps: [
              {
                reasoning: "Brainstem = vital functions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Vital functions.",
          },
        },
        {
          id: "cieipsych-u3-bio-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the function of the cerebral cortex?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cerebral cortex",
                statement: "Higher functions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Outer layer handling thinking, memory, voluntary movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Most complex human functions occur here.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Higher functions — thinking, memory, voluntary movement.",
          },
        },
        {
          id: "cieipsych-u3-bio-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how neurotransmitter imbalances can cause disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Neurotransmitter imbalance",
                statement: "Chemical imbalances → disorders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Neurotransmitters regulate mood, movement, behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low serotonin → depression; low dopamine → Parkinson's.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Drug therapy aims to restore balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Imbalances cause disorders; drugs aim to restore balance.",
          },
        },
        {
          id: "cieipsych-u3-bio-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the biological explanation of psychological disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biological explanation evaluation",
                statement: "Strong evidence but reductionist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: clear evidence for neurotransmitter imbalances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: drug therapy works for many disorders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: reductionist — ignores psychological/social factors.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: correlation doesn't prove causation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong evidence but reductionist and correlation ≠ causation.",
          },
        },
        {
          id: "cieipsych-u3-bio-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which neurotransmitter is linked to reward and movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dopamine" },
              { id: "b", text: "Serotonin" },
              { id: "c", text: "GABA" },
              { id: "d", text: "Adrenaline" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dopamine function",
                statement: "Reward and movement.",
              },
            ],
            steps: [
              {
                reasoning: "Dopamine = reward/movement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Dopamine.",
          },
        },
        {
          id: "cieipsych-u3-bio-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'anterograde amnesia'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anterograde amnesia",
                statement: "Can't form new memories.",
              },
            ],
            steps: [
              {
                reasoning: "Inability to form new memories after damage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Old memories may remain intact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Can't form new memories; old memories intact.",
          },
        },
        {
          id: "cieipsych-u3-bio-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sleep is important for memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sleep and memory",
                statement: "Consolidates memories during sleep.",
              },
            ],
            steps: [
              {
                reasoning: "Sleep consolidates memories — strengthens them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "REM sleep particularly important for emotional memories.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sleep deprivation impairs memory formation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sleep consolidates memories; deprivation impairs memory.",
          },
        },
        {
          id: "cieipsych-u3-bio-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which brain region is involved in fear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amygdala" },
              { id: "b", text: "Hippocampus" },
              { id: "c", text: "Cerebellum" },
              { id: "d", text: "Brainstem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amygdala fear",
                statement: "Amygdala processes fear.",
              },
            ],
            steps: [
              {
                reasoning: "Amygdala = fear.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Amygdala.",
          },
        },
        {
          id: "cieipsych-u3-bio-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of the hypothalamus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hypothalamus function",
                statement: "Maintains homeostasis.",
              },
            ],
            steps: [
              {
                reasoning: "Maintains homeostasis — internal balance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Controls hunger, thirst, temperature, sleep.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maintains homeostasis — hunger, thirst, temperature.",
          },
        },
        {
          id: "cieipsych-u3-bio-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the biological approach to psychological disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biological approach evaluation",
                statement: "Evidence-based but reductionist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: clear evidence for brain/neurotransmitter involvement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: drug therapy effective for many disorders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: reductionist — ignores psychological/social factors.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: correlation doesn't prove causation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Strong evidence but reductionist; correlation ≠ causation.",
          },
        },
        {
          id: "cieipsych-u3-bio-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the hippocampus important for memory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hippocampus importance",
                statement: "Critical for forming new memories.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Essential for converting short-term to long-term memory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Damage causes anterograde amnesia.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Essential for forming new memories; damage = amnesia.",
          },
        },
      ],
    },
    {
      id: "cieipsych-u3-treatments",
      title: "Psychological disorders and treatments",
      skill:
        "Explain types of disorders and evaluate psychological and biological treatments.",
      lesson: {
        sections: [
          {
            heading: "Types of disorder",
            body: "A **psychological disorder** is a pattern of thoughts, feelings or behaviours causing significant distress or impairment. **Anxiety disorders** include generalised anxiety, phobias, OCD — characterised by excessive worry and avoidance. **Depressive disorders** involve persistent low mood, loss of interest, sleep/appetite changes. **Schizophrenia** involves delusions, hallucinations and disorganised thinking — often linked to dopamine imbalance. The **medical model** sees disorders as illnesses with biological causes; the **biopsychosocial model** includes psychological and social factors.",
          },
          {
            heading: "Biological treatments",
            body: "**Drug therapy**: antidepressants (SSRIs increase serotonin), antipsychotics (block dopamine), anxiolytics (reduce anxiety). Strengths: fast-acting, effective for severe symptoms. Weaknesses: side effects, don't address causes, dependency risk. **Electroconvulsive therapy (ECT)**: used for severe depression — effective but controversial.",
          },
          {
            heading: "Psychological treatments",
            body: "**CBT (cognitive behavioural therapy)**: challenges negative thoughts and changes behaviours — effective for anxiety/depression; homework-based. **Psychoanalysis** (Freud): explores unconscious conflicts through free association and dream analysis — slow, expensive. **Humanistic/client-centred therapy** (Rogers): unconditional positive regard, empathy — focuses on self-actualisation. Choice of treatment depends on disorder type and patient preference.",
          },
        ],
        keyFormulas: [
          {
            name: "SSRIs",
            statement: "Increase serotonin — antidepressants",
          },
          {
            name: "Antipsychotics",
            statement: "Block dopamine — schizophrenia",
          },
          {
            name: "CBT",
            statement: "Challenge thoughts, change behaviours",
          },
          {
            name: "Psychoanalysis",
            statement: "Unconscious conflicts — Freud",
          },
        ],
        workedExample: {
          problem:
            "A patient with depression wants therapy, not medication. Which treatment fits best?",
          solution:
            "CBT — challenges negative thought patterns causing depression; effective and non-invasive. Humanistic therapy also possible for self-exploration.",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-tx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A psychological disorder is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A pattern of thoughts/feelings/behaviours causing distress",
              },
              { id: "b", text: "Any unusual behaviour" },
              { id: "c", text: "A physical illness" },
              { id: "d", text: "A personality trait" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychological disorder",
                statement: "Pattern causing significant distress/impairment.",
              },
            ],
            steps: [
              {
                reasoning: "Disorder = distress/impairment pattern.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Pattern causing distress.",
          },
        },
        {
          id: "cieipsych-u3-tx-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anxiety disorders are characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excessive worry and avoidance" },
              { id: "b", text: "Hallucinations" },
              { id: "c", text: "Delusions" },
              { id: "d", text: "Loss of memory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anxiety disorders",
                statement: "Excessive worry and avoidance.",
              },
            ],
            steps: [
              {
                reasoning: "Anxiety = excessive worry.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Excessive worry and avoidance.",
          },
        },
        {
          id: "cieipsych-u3-tx-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Depressive disorders involve:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Persistent low mood and loss of interest" },
              { id: "b", text: "Mania" },
              { id: "c", text: "Hallucinations" },
              { id: "d", text: "Compulsions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depression",
                statement: "Low mood and loss of interest.",
              },
            ],
            steps: [
              {
                reasoning: "Depression = low mood, anhedonia.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Persistent low mood and loss of interest.",
          },
        },
        {
          id: "cieipsych-u3-tx-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Schizophrenia is characterised by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Delusions, hallucinations and disorganised thinking",
              },
              { id: "b", text: "Only sadness" },
              { id: "c", text: "Only anxiety" },
              { id: "d", text: "Only memory loss" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Schizophrenia",
                statement: "Delusions, hallucinations, disorganised thinking.",
              },
            ],
            steps: [
              {
                reasoning: "Schizophrenia = delusions/hallucinations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Delusions, hallucinations, disorganised thinking.",
          },
        },
        {
          id: "cieipsych-u3-tx-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "SSRIs work by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing serotonin levels" },
              { id: "b", text: "Blocking dopamine" },
              { id: "c", text: "Increasing adrenaline" },
              { id: "d", text: "Reducing GABA" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SSRI mechanism",
                statement: "Increase serotonin.",
              },
            ],
            steps: [
              {
                reasoning: "SSRIs increase serotonin.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Increasing serotonin.",
          },
        },
        {
          id: "cieipsych-u3-tx-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Antipsychotic drugs work by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blocking dopamine receptors" },
              { id: "b", text: "Increasing serotonin" },
              { id: "c", text: "Increasing dopamine" },
              { id: "d", text: "Blocking serotonin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antipsychotics",
                statement: "Block dopamine.",
              },
            ],
            steps: [
              {
                reasoning: "Antipsychotics block dopamine.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Blocking dopamine receptors.",
          },
        },
        {
          id: "cieipsych-u3-tx-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "CBT focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing thoughts and behaviours" },
              { id: "b", text: "Exploring unconscious conflicts" },
              { id: "c", text: "Medication only" },
              { id: "d", text: "Dream analysis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "CBT",
                statement: "Challenge thoughts, change behaviours.",
              },
            ],
            steps: [
              {
                reasoning: "CBT = thoughts + behaviours.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Changing thoughts and behaviours.",
          },
        },
        {
          id: "cieipsych-u3-tx-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Psychoanalysis was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sigmund Freud" },
              { id: "b", text: "Carl Rogers" },
              { id: "c", text: "Aaron Beck" },
              { id: "d", text: "Ivan Pavlov" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychoanalysis founder",
                statement: "Freud.",
              },
            ],
            steps: [
              {
                reasoning: "Freud developed psychoanalysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sigmund Freud.",
          },
        },
        {
          id: "cieipsych-u3-tx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Client-centred therapy was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carl Rogers" },
              { id: "b", text: "Sigmund Freud" },
              { id: "c", text: "Aaron Beck" },
              { id: "d", text: "B.F. Skinner" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rogers",
                statement: "Client-centred therapy founder.",
              },
            ],
            steps: [
              {
                reasoning: "Rogers = client-centred.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Carl Rogers.",
          },
        },
        {
          id: "cieipsych-u3-tx-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between the medical model and biopsychosocial model of disorder.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disorder models",
                statement: "Biological vs holistic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Medical model: disorder as illness with biological causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Biopsychosocial: includes psychological and social factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Medical = biological illness; biopsychosocial = holistic.",
          },
        },
        {
          id: "cieipsych-u3-tx-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two strengths of drug therapy for disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug therapy strengths",
                statement: "Fast, effective for severe symptoms.",
              },
            ],
            steps: [
              {
                reasoning: "Fast-acting — relief within weeks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effective for severe symptoms where therapy insufficient.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fast-acting; effective for severe symptoms.",
          },
        },
        {
          id: "cieipsych-u3-tx-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how CBT treats anxiety disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT mechanism",
                statement: "Challenge thoughts, change behaviours.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies negative thought patterns causing anxiety.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Challenges and replaces them with rational thoughts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Uses exposure and behavioural experiments to change responses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Challenges negative thoughts and changes behaviours to reduce anxiety.",
          },
        },
        {
          id: "cieipsych-u3-tx-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A patient with depression is offered CBT or SSRIs. Evaluate both options.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Treatment evaluation",
                statement: "Compare strengths/weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSRIs: fast-acting, effective; but side effects and dependency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CBT: addresses causes, longer-lasting; but requires effort/time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combination often best — medication for severe symptoms + therapy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Patient preference matters — some prefer non-drug approaches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both effective; combination often best; consider severity and preference.",
          },
        },
        {
          id: "cieipsych-u3-tx-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Psychoanalysis aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Explore unconscious conflicts" },
              { id: "b", text: "Change behaviours quickly" },
              { id: "c", text: "Provide medication" },
              { id: "d", text: "Increase serotonin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychoanalysis aim",
                statement: "Explore unconscious conflicts.",
              },
            ],
            steps: [
              {
                reasoning: "Psychoanalysis = unconscious exploration.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Explore unconscious conflicts.",
          },
        },
        {
          id: "cieipsych-u3-tx-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'free association' in psychoanalysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free association",
                statement: "Saying whatever comes to mind.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Patient says whatever comes to mind without censoring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals unconscious thoughts and conflicts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Saying whatever comes to mind to reveal unconscious thoughts.",
          },
        },
        {
          id: "cieipsych-u3-tx-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Client-centred therapy emphasises:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unconditional positive regard and empathy" },
              { id: "b", text: "Challenging thoughts" },
              { id: "c", text: "Medication" },
              { id: "d", text: "Dream analysis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Client-centred",
                statement: "Positive regard and empathy.",
              },
            ],
            steps: [
              {
                reasoning: "Client-centred = positive regard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unconditional positive regard and empathy.",
          },
        },
        {
          id: "cieipsych-u3-tx-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two weaknesses of drug therapy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drug therapy weaknesses",
                statement: "Side effects, doesn't address causes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Side effects — nausea, weight gain, sexual dysfunction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Treats symptoms not causes; dependency risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Side effects; treats symptoms not causes; dependency risk.",
          },
        },
        {
          id: "cieipsych-u3-tx-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how psychoanalysis treats disorders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychoanalysis mechanism",
                statement: "Unconscious conflicts → symptoms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Believes disorders stem from unconscious conflicts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therapy explores these through free association and dreams.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bringing conflicts to consciousness enables resolution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explores unconscious conflicts to bring them to consciousness.",
          },
        },
        {
          id: "cieipsych-u3-tx-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate CBT as a treatment for depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBT evaluation",
                statement: "Effective but requires effort.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: effective for mild-moderate depression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: addresses causes (thoughts) not just symptoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: requires effort and homework — not for everyone.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: less effective for severe depression alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective and addresses causes but requires effort; less effective alone for severe.",
          },
        },
        {
          id: "cieipsych-u3-tx-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The medical model views disorders as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Illnesses with biological causes" },
              { id: "b", text: "Learned behaviours" },
              { id: "c", text: "Moral failings" },
              { id: "d", text: "Social constructs only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Medical model",
                statement: "Disorders as biological illnesses.",
              },
            ],
            steps: [
              {
                reasoning: "Medical model = biological illness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Illnesses with biological causes.",
          },
        },
        {
          id: "cieipsych-u3-tx-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is ECT and when is it used?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ECT",
                statement: "Electroconvulsive therapy for severe depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Electrical stimulation of brain for severe depression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used when other treatments fail; controversial.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Electrical brain stimulation for severe depression; controversial.",
          },
        },
        {
          id: "cieipsych-u3-tx-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why treatment choice depends on disorder type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Treatment matching",
                statement: "Different disorders need different treatments.",
              },
            ],
            steps: [
              {
                reasoning: "Biological disorders may need medication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Psychological disorders may need therapy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Severity and patient preference also matter.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Disorder type, severity and preference determine treatment.",
          },
        },
        {
          id: "cieipsych-u3-tx-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate psychoanalysis as a treatment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Psychoanalysis evaluation",
                statement: "Historically influential but unscientific.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: historically influential, explores deep issues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: some find it valuable for self-understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: unscientific — unconscious can't be measured.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: slow, expensive, limited evidence of effectiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Influential but unscientific; slow and expensive with limited evidence.",
          },
        },
        {
          id: "cieipsych-u3-tx-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anxiolytics are used to treat:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anxiety disorders" },
              { id: "b", text: "Depression" },
              { id: "c", text: "Schizophrenia" },
              { id: "d", text: "OCD only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anxiolytics",
                statement: "Treat anxiety disorders.",
              },
            ],
            steps: [
              {
                reasoning: "Anxiolytics = anxiety treatment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Anxiety disorders.",
          },
        },
        {
          id: "cieipsych-u3-tx-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'unconditional positive regard' in client-centred therapy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unconditional positive regard",
                statement: "Accepting client without judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Therapist accepts client unconditionally — no judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps client develop self-acceptance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Accepting client without judgement to promote self-acceptance.",
          },
        },
        {
          id: "cieipsych-u3-tx-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how drug therapy and CBT might be combined for depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined treatment",
                statement: "Medication + therapy often best.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSRIs reduce symptoms quickly — enables engagement in therapy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CBT addresses underlying thought patterns — prevents relapse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combination often more effective than either alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Medication for symptoms + therapy for causes — often best combined.",
          },
        },
        {
          id: "cieipsych-u3-tx-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CBT was developed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aaron Beck" },
              { id: "b", text: "Sigmund Freud" },
              { id: "c", text: "Carl Rogers" },
              { id: "d", text: "Ivan Pavlov" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Beck",
                statement: "Developed CBT.",
              },
            ],
            steps: [
              {
                reasoning: "Beck developed CBT.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Aaron Beck.",
          },
        },
        {
          id: "cieipsych-u3-tx-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'case study' in psychological research?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Case study",
                statement: "In-depth investigation of one individual.",
              },
            ],
            steps: [
              {
                reasoning: "Detailed study of one person or small group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Can reveal rare phenomena but lacks generalisability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "In-depth study of one individual; detailed but not generalisable.",
          },
        },
        {
          id: "cieipsych-u3-tx-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate drug therapy for schizophrenia.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Antipsychotic evaluation",
                statement: "Effective but side effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: reduces hallucinations and delusions effectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: allows patients to function in society.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: side effects — weight gain, tremors, sedation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: doesn't cure — symptoms return if stopped.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Effective for symptoms but side effects and doesn't cure.",
          },
        },
        {
          id: "cieipsych-u3-tx-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a therapist choose humanistic therapy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanistic therapy choice",
                statement: "Focus on self-actualisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Focuses on client's self-actualisation and personal growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-directive — client leads, therapist facilitates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Focuses on self-actualisation; non-directive approach.",
          },
        },
      ],
    },
  ],
};
