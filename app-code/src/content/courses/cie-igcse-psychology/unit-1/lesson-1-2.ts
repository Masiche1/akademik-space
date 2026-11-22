import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cieipsych-u1-lesson-1-2",
  code: "1-2",
  title: "Biological and behaviourist approaches",
  goal: "I CAN describe the biological and behaviourist approaches and compare their explanations of behaviour.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 1: Approaches to psychology",
  ],
  vocabulary: [
    {
      term: "Biological approach",
      definition:
        "Explains behaviour through brain structure, genes, hormones and neurotransmitters.",
    },
    {
      term: "Behaviourist approach",
      definition:
        "Explains behaviour through learning — conditioning and reinforcement.",
    },
    {
      term: "Classical conditioning",
      definition:
        "Learning by association — a neutral stimulus becomes linked to an automatic response.",
    },
    {
      term: "Operant conditioning",
      definition:
        "Learning through consequences — behaviour followed by reward is repeated, by punishment reduced.",
    },
    {
      term: "Neurotransmitter",
      definition:
        "Chemical messenger in the brain affecting mood, thought and behaviour.",
    },
    {
      term: "Genetic predisposition",
      definition: "Inherited tendency toward certain behaviours or disorders.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u1-bio-beh",
      title: "Biological and behaviourist explanations",
      skill:
        "Apply biological and behaviourist principles to explain behaviour.",
      lesson: {
        sections: [
          {
            heading: "The biological approach",
            body: "This approach locates causes of behaviour in the **body**: brain structure and function, **genes** (e.g. predisposition to schizophrenia), **hormones** (e.g. adrenaline in fight-or-flight) and **neurotransmitters** (e.g. serotonin in depression). It uses methods like brain scans, twin studies and genetic research. Strength: objective, measurable. Weakness: may underplay environmental and social factors.",
          },
          {
            heading: "The behaviourist approach",
            body: "Behaviourists argue behaviour is **learned**, not innate. **Classical conditioning** (Pavlov): a neutral stimulus paired with an unconditioned one comes to trigger the response — e.g. a child fears dogs after a bite. **Operant conditioning** (Skinner): behaviour is shaped by consequences — rewarded behaviour repeats (a child tidies for praise), punished behaviour fades. Focus: observable behaviour only.",
          },
          {
            heading: "Comparing the two",
            body: "Biological says 'inside the body'; behaviourist says 'outside in the environment'. Biological explains predispositions and disorders; behaviourist explains learned habits and phobias. Modern psychology combines both — biology sets limits, environment fills them.",
          },
        ],
        keyFormulas: [
          {
            name: "Biological causes",
            statement: "Genes + brain + hormones + neurotransmitters",
          },
          {
            name: "Behaviourist causes",
            statement: "Classical association + operant consequences",
          },
        ],
        workedExample: {
          problem:
            "A child is afraid of injections. Explain using classical conditioning.",
          solution:
            "The needle (neutral stimulus) was paired with pain (unconditioned stimulus producing fear). After repetition, the needle alone triggers fear — a conditioned response.",
        },
      },
      questions: [
        {
          id: "cieipsych-u1-bb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Operant conditioning explains behaviour as shaped by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brain chemistry only" },
              { id: "b", text: "Genetic inheritance" },
              { id: "c", text: "Unconscious conflicts" },
              { id: "d", text: "Consequences — rewards and punishments" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operant conditioning",
                statement: "Behaviour learned through its consequences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Operant conditioning = behaviour shaped by rewards (reinforcement) and punishments.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Consequences — rewards and punishments.",
            commonErrors: ["Confusing operant with classical conditioning."],
          },
        },
        {
          id: "cieipsych-u1-bb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how classical conditioning could produce a phobia of spiders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical conditioning",
                statement:
                  "Neutral stimulus paired with fear-producing stimulus → conditioned fear response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A neutral stimulus (spider) is paired with an unconditioned stimulus that naturally causes fear (e.g. a painful bite or scream).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After pairing, the spider alone triggers the fear response — it has become a conditioned stimulus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The phobia persists because the association generalises — even pictures of spiders may trigger fear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Spider (neutral) + pain (unconditioned) → spider alone triggers fear = conditioned phobia.",
            commonErrors: [
              "Describing operant conditioning (rewards/punishments) instead of association.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways the biological approach explains behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Biological explanations",
                statement:
                  "Genes, brain, hormones and neurotransmitters shape behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genes: inherited predispositions — e.g. twin studies show higher concordance for schizophrenia in identical twins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Brain/neurochemistry: neurotransmitter imbalances (serotonin) linked to depression; brain damage affects behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hormones: adrenaline produces fight-or-flight responses; sex hormones affect behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genetic predisposition, brain/neurotransmitter activity and hormonal influences.",
            commonErrors: [
              "Giving only one explanation or mixing in behaviourist ideas.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the biological and behaviourist approaches to explaining a student's disruptive classroom behaviour.",
          parts: [
            { label: "a", prompt: "Give a biological explanation.", marks: 2 },
            {
              label: "b",
              prompt: "Give a behaviourist explanation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate which approach gives the better explanation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Approach comparison",
                statement:
                  "Internal biological causes vs learned environmental causes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Biological: the student may have attention difficulties linked to brain/neurotransmitter differences or a genetic predisposition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Could also involve sleep deprivation, diet or undiagnosed conditions affecting self-control.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Behaviourist: disruption is learned — it may have been rewarded by peer attention (operant reinforcement) or modelled from others.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "If outbursts escape boring lessons, the behaviour is negatively reinforced and repeats.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Biology explains predisposition but not the specific classroom trigger; behaviourism explains the learning but not why some children are more susceptible.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: complementary — biology sets vulnerability, environment shapes expression; neither alone is complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Brain/genetic factors. (b) Learned reinforcement. (c) Complementary — biology + environment interact.",
            commonErrors: [
              "Forcing one approach to 'win' rather than weighing both.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Classical conditioning is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conscious decision-making" },
              {
                id: "b",
                text: "Learning through rewards and punishments",
              },
              {
                id: "c",
                text: "Learning by association between stimuli",
              },
              { id: "d", text: "Innate biological drives" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classical conditioning",
                statement:
                  "Learning by association — a neutral stimulus becomes linked to an automatic response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Classical conditioning pairs stimuli so a neutral one triggers a response; operant uses consequences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Learning by association between stimuli.",
            commonErrors: [
              "Confusing classical conditioning with operant conditioning.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The biological approach explains behaviour through which factors? (genes, brain, hormones, neurotransmitters — how many?)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Biological causes",
                statement: "Genes + brain + hormones + neurotransmitters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Four factors: genes, brain structure/function, hormones and neurotransmitters.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
            commonErrors: ["Omitting one factor or adding environment."],
          },
        },
        {
          id: "cieipsych-u1-bb-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a sample of 60 children, 15 show a fear of dogs after being bitten. What percentage show this fear?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Percentage calculation",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "15 / 60 = 0.25 → 25%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Answering 0.25 instead of 25%."],
          },
        },
        {
          id: "cieipsych-u1-bb-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain positive reinforcement in operant conditioning with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Positive reinforcement",
                statement:
                  "Adding a pleasant consequence increases the behaviour that produced it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive reinforcement adds a reward after a behaviour, making that behaviour more likely to be repeated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The behaviour is strengthened because the consequence is pleasant — e.g. praise after tidying a room.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a child helps with chores and receives pocket money → helping becomes more frequent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Adding a reward after a behaviour makes it more likely — e.g. praise increases tidying.",
            commonErrors: [
              "Confusing positive reinforcement with punishment — both involve consequences but have opposite effects.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which neurotransmitter has been linked to depression when its levels are low?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Serotonin" },
              { id: "b", text: "Dopamine only" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Neurotransmitters",
                statement:
                  "Serotonin imbalance is linked to mood disorders such as depression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low serotonin activity is associated with depression; adrenaline relates to arousal, not mood disorder.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Serotonin.",
            commonErrors: [
              "Choosing adrenaline — it mediates fight-or-flight, not depression.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of 50 participants, 20 report regular exercise. (a) How many do not exercise regularly? (b) What percentage exercise regularly?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
              { label: "b", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sample calculations",
                statement:
                  "Non-exercisers = total − exercisers; percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "50 − 20 = 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "20 / 50 = 0.4 → 40%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 30  (b) 40%",
            commonErrors: [
              "Reporting 0.4 instead of 40% for part (b).",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "In operant conditioning, a behaviour that is followed by punishment is most likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decrease in frequency" },
              { id: "b", text: "Remain unchanged" },
              { id: "c", text: "Increase in frequency" },
              { id: "d", text: "Become a reflex" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Operant conditioning",
                statement:
                  "Behaviour followed by punishment is reduced; followed by reward it is repeated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Punishment is an aversive consequence — the behaviour that produced it becomes less likely.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Decrease in frequency.",
            commonErrors: [
              "Thinking punishment strengthens behaviour through attention.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A child develops a fear of lifts after being trapped in one. Compare biological and behaviourist explanations of this fear.",
          parts: [
            {
              label: "a",
              prompt: "Give a biological explanation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give a behaviourist explanation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate which approach explains it better.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Approach comparison",
                statement:
                  "Internal biological causes vs learned environmental causes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Biological: the traumatic event may have altered the brain's fear circuitry — e.g. heightened amygdala response to enclosed spaces.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Some children may have a genetic predisposition to anxiety disorders making them more vulnerable.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Behaviourist: classical conditioning — the lift (neutral stimulus) was paired with the trauma (unconditioned stimulus) producing fear.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The fear is maintained by avoidance — avoiding lifts prevents extinction of the conditioned response.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The behaviourist account directly explains how the fear was acquired and maintained; biology explains vulnerability but not the specific trigger.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: they complement each other — conditioning explains acquisition, biology explains individual differences in susceptibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Altered fear circuitry/predisposition. (b) Classical conditioning + avoidance. (c) Complementary — learning explains acquisition, biology explains susceptibility.",
            commonErrors: [
              "Claiming biology alone explains the specific fear of lifts.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In classical conditioning, the stimulus that naturally and automatically triggers a response is the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral stimulus" },
              { id: "b", text: "Unconditioned stimulus" },
              { id: "c", text: "Conditioned stimulus" },
              { id: "d", text: "Reinforcer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unconditioned stimulus",
                statement:
                  "A stimulus that naturally triggers a response without learning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The unconditioned stimulus (e.g. food, pain) triggers the unconditioned response automatically.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Unconditioned stimulus.",
            commonErrors: [
              "Swapping neutral and unconditioned stimulus.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which approach argues that behaviour is learned through the environment rather than innate biology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Behaviourist approach" },
              { id: "b", text: "Psychodynamic approach" },
              { id: "c", text: "Biological approach" },
              { id: "d", text: "Humanistic approach" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Behaviourist approach",
                statement:
                  "Behaviour is learned through conditioning — environment over biology.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Behaviourists reject innate explanations, focusing on observable learned behaviour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Behaviourist approach.",
            commonErrors: [
              "Choosing psychodynamic — it stresses unconscious drives, not environmental learning.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the behaviourist approach would explain depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Behaviourist view of depression",
                statement:
                  "Depressive behaviour is learned through conditioning and lack of reinforcement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Learned helplessness: repeated failures without reward teach the person that actions have no effect — passivity and low mood follow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Loss of positive reinforcement: when pleasant activities stop being rewarding, depressive behaviours (withdrawal, inactivity) are maintained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social learning: depression may be modelled — observing others' depressive responses teaches similar behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Depression is learned — learned helplessness and loss of reinforcement maintain low mood and inactivity.",
            commonErrors: [
              "Giving a biological explanation (serotonin) instead of a behaviourist one.",
            ],
          },
        },
        {
          id: "cieipsych-u1-bb-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the behaviourist approach to explaining behaviour.",
          parts: [
            {
              label: "a",
              prompt: "Give two strengths of the behaviourist approach.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give two limitations of the behaviourist approach.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Reach a justified judgement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Behaviourist evaluation",
                statement:
                  "Scientific study of observable behaviour vs ignoring mental processes and biology.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It studies observable behaviour objectively — conditioning can be tested and measured in controlled experiments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It has practical applications — behaviour therapy uses reinforcement principles to treat phobias and habits.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "It ignores mental processes, biology and free will — much behaviour involves cognition the approach cannot explain.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Animal studies may not generalise to humans, and some behaviours are clearly not learned by simple conditioning.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: powerful for learned behaviours and therapies, but incomplete as a general theory of all behaviour.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Modern psychology incorporates conditioning alongside cognitive and biological explanations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Objective, testable, therapeutic applications. (b) Ignores mind and biology; limited generalisability. (c) Valuable but incomplete.",
            commonErrors: [
              "One-sided evaluation with no judgement.",
            ],
          },
        },
      ],
    },
  ],
};
