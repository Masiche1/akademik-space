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
              { id: "a", text: "Genetic inheritance" },
              { id: "b", text: "Consequences — rewards and punishments" },
              { id: "c", text: "Unconscious conflicts" },
              { id: "d", text: "Brain chemistry only" },
            ],
            correctChoiceId: "b",
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
      ],
    },
  ],
};
