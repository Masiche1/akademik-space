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
              { id: "a", text: "Observable learning only" },
              { id: "b", text: "Unconscious conflicts and early childhood" },
              { id: "c", text: "Brain chemistry" },
              { id: "d", text: "Free will and self-actualisation" },
            ],
            correctChoiceId: "b",
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
      ],
    },
  ],
};
