import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cieipsych-u1-lesson-1-1",
  code: "1-1",
  title: "What is psychology?",
  goal: "I CAN explain psychology's aims and the main perspectives that guide research.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 1: The nature of psychology",
  ],
  vocabulary: [
    {
      term: "Psychology",
      definition: "The scientific study of mind and behaviour.",
    },
    { term: "Behaviour", definition: "Observable actions and responses." },
    {
      term: "Cognition",
      definition:
        "Mental processes — thinking, remembering, perceiving, problem-solving.",
    },
    {
      term: "Nature vs nurture",
      definition:
        "Whether behaviour is innate (genes) or learned (environment).",
    },
    {
      term: "Perspective",
      definition:
        "A framework of assumptions guiding how psychologists study behaviour.",
    },
    {
      term: "Empirical",
      definition:
        "Based on observation and experiment rather than speculation.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u1-what",
      title: "The aims and perspectives of psychology",
      skill:
        "Describe psychology's subject matter and identify major perspectives.",
      lesson: {
        sections: [
          {
            heading: "What psychology studies",
            body: "Psychology investigates the **mind** (thoughts, emotions, memories) and **behaviour** (observable actions). Its aims include **describing** behaviour, **explaining** its causes, **predicting** future behaviour and, where possible, **changing** it (therapy, education). Modern psychology is **empirical** — claims are tested through research, not just argued.",
          },
          {
            heading: "Nature vs nurture",
            body: "A central debate: is behaviour caused by **nature** (genes, biology, brain chemistry) or **nurture** (learning, environment, culture)? Most psychologists now accept interaction — genes set potential, environment shapes expression. Approaches differ in emphasis: biological approaches stress nature; behaviourist approaches stress nurture.",
          },
          {
            heading: "Perspectives at a glance",
            body: "Major perspectives include **biological** (brain and genes), **behaviourist** (learning through conditioning), **cognitive** (mental processes like memory and thinking), **psychodynamic** (unconscious conflicts), **humanistic** (free will and self-actualisation) and **social** (how others influence us). Each asks different questions about the same behaviour.",
          },
        ],
        keyFormulas: [
          {
            name: "Psychology's aims",
            statement: "Describe → explain → predict → change",
          },
          {
            name: "Nature–nurture",
            statement: "Genes set potential; environment shapes expression",
          },
        ],
        workedExample: {
          problem:
            "A child fears dogs. How would nature and nurture each explain it?",
          solution:
            "Nature: an inherited anxiety trait or bad early experience altering the brain's fear response. Nurture: a frightening dog attack in childhood taught the fear through learning.",
        },
      },
      questions: [
        {
          id: "cieipsych-u1-what-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Psychology is best defined as the study of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only mental illness" },
              { id: "b", text: "Mind and behaviour" },
              { id: "c", text: "Only observable actions" },
              { id: "d", text: "Brain anatomy only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychology",
                statement: "Scientific study of mind and behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Psychology covers both mental processes and observable behaviour — not just illness or brain anatomy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Mind and behaviour.",
            commonErrors: [
              "Thinking psychology only studies abnormal behaviour.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List psychology's four main aims and explain one in your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Aims of psychology",
                statement: "Describe, explain, predict and change behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Describe: observe and record behaviour accurately.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explain/predict: find causes and forecast behaviour; change: apply findings to improve wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example explanation: explaining why people forget helps predict and treat memory problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Describe, explain, predict, change — e.g. explaining memory loss enables treatment.",
            commonErrors: ["Listing aims without explaining any."],
          },
        },
        {
          id: "cieipsych-u1-what-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the nature–nurture debate with one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature vs nurture",
                statement:
                  "Innate biology vs environmental learning — most accept interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nature: behaviour shaped by genes, brain structure and hormones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nurture: behaviour shaped by learning, upbringing and culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: intelligence — genes set range, education and environment determine where within it a person falls.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nature = genes/biology; nurture = environment/learning — e.g. intelligence is shaped by both.",
            commonErrors: [
              "Treating nature and nurture as mutually exclusive rather than interacting.",
            ],
          },
        },
        {
          id: "cieipsych-u1-what-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that psychology is a 'science'.",
          parts: [
            {
              label: "a",
              prompt: "Give two ways psychology uses scientific methods.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give two limitations of calling psychology a science.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Psychology as science",
                statement:
                  "Empirical, testable methods vs complexity of human behaviour.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Experiments with controls test cause-effect relationships (e.g. memory studies).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Hypotheses are tested empirically and findings are replicated and peer-reviewed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Measurable data — reaction times, test scores, brain scans — provide objective evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Human behaviour is complex and context-dependent — lab results may not generalise to real life.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Some phenomena (consciousness, free will) resist objective measurement.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: psychology uses scientific methods but is perhaps better called a 'science of the mind' with interpretive elements.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Experiments, measurement, replication. (b) Complexity, unmeasurable phenomena — scientific method but imperfect science.",
            commonErrors: [
              "One-sided answers ignoring either the methods or the limitations.",
            ],
          },
        },
      ],
    },
  ],
};
