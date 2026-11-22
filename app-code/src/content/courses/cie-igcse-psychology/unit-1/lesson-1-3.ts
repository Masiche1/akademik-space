import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cieipsych-u1-lesson-1-3",
  code: "1-3",
  title: "Cognitive, psychodynamic and humanistic approaches",
  goal: "I CAN describe the cognitive, psychodynamic and humanistic approaches and compare their assumptions.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 1: Approaches to psychology",
  ],
  vocabulary: [
    {
      term: "Cognitive approach",
      definition:
        "Studies mental processes — memory, thinking, perception, problem-solving.",
    },
    {
      term: "Psychodynamic approach",
      definition:
        "Freud's view that unconscious conflicts and early experiences drive behaviour.",
    },
    {
      term: "Humanistic approach",
      definition:
        "Emphasises free will, self-actualisation and individual experience (Rogers, Maslow).",
    },
    {
      term: "Unconscious",
      definition:
        "Mental processes and memories inaccessible to conscious awareness but influencing behaviour.",
    },
    {
      term: "Self-actualisation",
      definition:
        "The drive to fulfil one's potential — the top of Maslow's hierarchy.",
    },
    {
      term: "Schema",
      definition: "A mental framework organising knowledge about the world.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u1-cph",
      title: "Cognitive, psychodynamic and humanistic views",
      skill: "Compare three major approaches to explaining behaviour.",
      lesson: {
        sections: [
          {
            heading: "Cognitive approach",
            body: "Focuses on **mental processes** — how people perceive, remember, think and solve problems. The mind is seen as an information processor: input → processing → output. Uses experiments (memory tests, problem-solving tasks) to study cognition scientifically. Example: schemas explain why people remember events differently — memory reconstructs rather than replays.",
          },
          {
            heading: "Psychodynamic approach",
            body: "Freud's approach emphasises the **unconscious** — hidden desires, memories and conflicts shaped by early childhood. Behaviour is driven by internal struggles between the **id** (instincts), **ego** (reality) and **superego** (morality). Defence mechanisms (repression, projection) hide anxiety-producing thoughts. Evidence comes from case studies and dream analysis — controversial scientifically.",
          },
          {
            heading: "Humanistic approach",
            body: "Rogers and Maslow emphasise **free will**, **self-actualisation** and subjective experience. People have an innate drive to fulfil potential; problems arise when conditions of worth block it. Therapy (client-centred) provides **unconditional positive regard**. Weakness: hard to test scientifically — relies on self-report. Strength: respects human agency and dignity.",
          },
        ],
        keyFormulas: [
          {
            name: "Cognitive",
            statement:
              "Mind = information processor; study mental processes directly",
          },
          {
            name: "Psychodynamic",
            statement: "Unconscious conflicts + early childhood → behaviour",
          },
          {
            name: "Humanistic",
            statement:
              "Free will + self-actualisation; people are basically good",
          },
        ],
        workedExample: {
          problem:
            "A person avoids commitment in relationships. Give a psychodynamic and a humanistic explanation.",
          solution:
            "Psychodynamic: childhood experiences (e.g. parental abandonment) created unconscious fear of intimacy. Humanistic: the person's self-concept is blocked by conditions of worth — they fear not meeting expectations if they open up.",
        },
      },
      questions: [
        {
          id: "cieipsych-u1-cph-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The psychodynamic approach emphasises the role of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Brain chemistry" },
              { id: "b", text: "Free will and self-actualisation" },
              { id: "c", text: "Observable learning only" },
              { id: "d", text: "Unconscious conflicts and early childhood" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychodynamic",
                statement:
                  "Unconscious conflicts and early experience drive behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Psychodynamic = unconscious + childhood; behaviourist = learning; humanistic = free will.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unconscious conflicts and early childhood.",
            commonErrors: ["Confusing psychodynamic with humanistic."],
          },
        },
        {
          id: "cieipsych-u1-cph-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the cognitive approach would study memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cognitive approach",
                statement:
                  "Studies mental processes like memory as information processing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It treats memory as a process — encoding, storage and retrieval — to be tested experimentally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Researchers use tasks (word lists, recall tests) and measure accuracy and speed objectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Findings (e.g. short-term memory capacity ~7 items) are based on measurable data, not speculation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Studies memory as measurable information processing via controlled experiments.",
            commonErrors: [
              "Saying the cognitive approach ignores behaviour — it studies mental processes behind it.",
            ],
          },
        },
        {
          id: "cieipsych-u1-cph-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe Maslow's concept of self-actualisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-actualisation",
                statement:
                  "The drive to fulfil one's potential — the highest human need.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maslow's hierarchy places self-actualisation at the top — beyond physiological, safety, belonging and esteem needs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is the drive to become the 'best version' of oneself — creativity, growth, meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lower needs must be reasonably satisfied first — hunger and insecurity block self-actualisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Self-actualisation = fulfilling one's potential, the top of Maslow's hierarchy, enabled by meeting lower needs.",
            commonErrors: [
              "Placing self-actualisation at the base of the hierarchy.",
            ],
          },
        },
        {
          id: "cieipsych-u1-cph-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the psychodynamic and humanistic approaches to explaining criminal behaviour.",
          parts: [
            {
              label: "a",
              prompt: "Give the psychodynamic explanation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give the humanistic explanation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate the scientific status of each approach.",
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
                  "Unconscious determinism vs free-will self-fulfilment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Psychodynamic: crime stems from unresolved unconscious conflicts and early deprivation — e.g. harsh parenting producing a weak superego.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Behaviour is driven by forces outside conscious control.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Humanistic: crime results when basic needs (belonging, esteem, self-actualisation) are blocked — people act to meet unmet needs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Individuals have free will to choose pro-social alternatives if given the right conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Psychodynamic: hard to test — unconscious constructs inferred from case studies; unscientific by strict criteria.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Humanistic: also hard to measure — relies on self-report; but respects agency. Both are weaker scientifically than cognitive or biological.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Unconscious conflict/early deprivation. (b) Blocked needs + free will. (c) Both hard to test scientifically.",
            commonErrors: [
              "Treating both approaches as identical or ignoring the evaluation.",
            ],
          },
        },
        {
          id: "cieipsych-u1-cph-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cognitive approach is mainly concerned with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free will and self-actualisation" },
              { id: "b", text: "Observable behaviour only" },
              { id: "c", text: "Mental processes like memory and thinking" },
              { id: "d", text: "Unconscious conflicts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognitive approach",
                statement:
                  "Studies mental processes — memory, thinking, perception, problem-solving.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cognition = mental processes; the approach treats the mind as an information processor.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Mental processes like memory and thinking.",
            commonErrors: ["Choosing 'observable behaviour only' — that describes the behaviourist approach."],
          },
        },
        {
          id: "cieipsych-u1-cph-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "This lesson compares how many major approaches? (cognitive, psychodynamic, humanistic)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Approaches compared",
                statement: "Cognitive, psychodynamic and humanistic = three approaches.",
              },
            ],
            steps: [
              {
                reasoning: "Three approaches are compared in this lesson.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
            commonErrors: ["Including biological or behaviourist approaches from the previous lesson."],
          },
        },
        {
          id: "cieipsych-u1-cph-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a survey of 40 students, 10 prefer studying alone. What percentage prefer studying alone?",
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
                  "10 / 40 = 0.25 → 25%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "25%",
            commonErrors: ["Answering 0.25 instead of 25%."],
          },
        },
        {
          id: "cieipsych-u1-cph-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what repression means in the psychodynamic approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Repression",
                statement:
                  "A defence mechanism that pushes anxiety-producing thoughts into the unconscious.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repression is an unconscious defence mechanism — unacceptable memories or desires are buried in the unconscious.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It protects the conscious mind from anxiety but the repressed material still influences behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: a childhood trauma repressed may surface later as unexplained fears or slips of the tongue.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Repression = unconsciously pushing threatening thoughts/memories into the unconscious, where they still influence behaviour.",
            commonErrors: ["Describing repression as a conscious choice to forget."],
          },
        },
        {
          id: "cieipsych-u1-cph-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Rogers' client-centred therapy is built on which core condition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Systematic desensitisation" },
              { id: "b", text: "Token economy" },
              { id: "c", text: "Free association" },
              { id: "d", text: "Unconditional positive regard" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Rogers' therapy",
                statement:
                  "Client-centred therapy provides unconditional positive regard.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unconditional positive regard is Rogers' core condition — accepting the client without judgement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Unconditional positive regard.",
            commonErrors: ["Confusing Rogers with Freud — free association is psychodynamic."],
          },
        },
        {
          id: "cieipsych-u1-cph-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Freud's model, which structure represents internalised moral standards and the sense of right and wrong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ego" },
              { id: "b", text: "The superego" },
              { id: "c", text: "The id" },
              { id: "d", text: "The unconscious" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Superego",
                statement: "Internalised morality — the sense of right and wrong.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Superego = morality; id = instinctive drives; ego = reality mediator.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) The superego.",
            commonErrors: ["Confusing ego (reality) with superego (morality)."],
          },
        },
        {
          id: "cieipsych-u1-cph-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which approach is most likely to use controlled experiments on memory tasks to test its ideas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Humanistic approach" },
              { id: "b", text: "Cognitive approach" },
              { id: "c", text: "Psychodynamic approach" },
              { id: "d", text: "All equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cognitive approach",
                statement:
                  "Uses experiments (memory tests, problem-solving tasks) to study cognition scientifically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cognitive psychology is the most experimental — mental processes can be measured via tasks.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Cognitive approach.",
            commonErrors: [
              "Choosing psychodynamic — it relies on case studies, not controlled experiments.",
            ],
          },
        },
        {
          id: "cieipsych-u1-cph-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Witnesses to a robbery give different accounts of events. Compare how the cognitive and psychodynamic approaches would explain these differences.",
          parts: [
            {
              label: "a",
              prompt: "Give the cognitive explanation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give the psychodynamic explanation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate which explanation is more testable.",
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
                  "Cognitive = information processing errors; psychodynamic = unconscious influences.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cognitive: memory reconstructs rather than replays — schemas and expectations distort recall; stress narrows attention (weapon focus).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Differences arise from how information was encoded and retrieved — measurable processing differences.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Psychodynamic: anxiety and defence mechanisms distort memory — repression or projection shapes what is recalled.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Unconscious conflicts from early experience may colour interpretation of threatening events.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Cognitive explanation is more testable — memory distortions can be studied in controlled experiments.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Psychodynamic claims rely on unobservable unconscious processes — hard to verify scientifically.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Schemas/expectations distort recall. (b) Defence mechanisms and unconscious conflicts distort memory. (c) Cognitive is more testable.",
            commonErrors: [
              "Treating both explanations as identical or skipping the evaluation.",
            ],
          },
        },
        {
          id: "cieipsych-u1-cph-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mental framework that organises our knowledge and guides interpretation is called a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflex" },
              { id: "b", text: "Schema" },
              { id: "c", text: "Reinforcer" },
              { id: "d", text: "Instinct" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Schema",
                statement: "A mental framework organising knowledge about the world.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Schemas are cognitive structures — e.g. our 'restaurant schema' tells us what to expect in a restaurant.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Schema.",
            commonErrors: ["Confusing schema with stereotype — schemas organise knowledge broadly."],
          },
        },
        {
          id: "cieipsych-u1-cph-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a study of 50 participants, 30 completed a memory task. (a) How many did not complete it? (b) What percentage completed it?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 60 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Sample calculations",
                statement:
                  "Non-completers = total − completers; percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "50 − 30 = 20.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "30 / 50 = 0.6 → 60%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 20  (b) 60%",
            commonErrors: ["Reporting 0.6 instead of 60%."],
          },
        },
        {
          id: "cieipsych-u1-cph-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate the scientific status of the humanistic approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Humanistic evaluation",
                statement:
                  "Respects human agency but relies on subjective self-report.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: it respects human dignity and free will — treats people as active agents, not passive subjects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: self-actualisation and subjective experience are hard to measure objectively — relies on self-report and case studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: valuable for therapy and understanding subjective experience, but weaker scientifically than cognitive or biological approaches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Humanistic approach values agency and dignity but is hard to test scientifically — weaker empirically than cognitive/biological.",
            commonErrors: [
              "One-sided evaluation ignoring either the strengths or weaknesses.",
            ],
          },
        },
        {
          id: "cieipsych-u1-cph-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare how the cognitive, psychodynamic and humanistic approaches view free will versus determinism.",
          parts: [
            {
              label: "a",
              prompt: "Describe each approach's stance on free will.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate which view is most consistent with scientific psychology.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Free will vs determinism",
                statement:
                  "Humanistic = free will; psychodynamic = unconscious determinism; cognitive = processing determines behaviour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Humanistic: emphasises free will — people choose their actions and can self-actualise.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Psychodynamic: behaviour is determined by unconscious conflicts beyond conscious control.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cognitive: behaviour follows from mental processing — information input, processing and output determine responses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Scientific psychology generally assumes behaviour is caused by identifiable factors (biological, cognitive, social) — determinism is more testable.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Free will is difficult to measure — humanistic claims resist falsification, though they respect human agency.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: cognitive and psychodynamic align better with scientific methods, while humanism offers valuable insights into subjective experience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Humanistic=free will; psychodynamic=unconscious determinism; cognitive=processing determines behaviour. (b) Deterministic views are more testable; humanism adds subjective value.",
            commonErrors: [
              "Describing stances without any evaluation.",
            ],
          },
        },
      ],
    },
  ],
};
