import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ciegp-u3-lesson-3-2",
  code: "3-2",
  title: "Paper 1 Technique: Analysis and Evaluation",
  goal: "I CAN structure analysis and evaluation answers that score highly in IGCSE GP Paper 1.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Paper 1: analysis, evaluation",
  ],
  vocabulary: [
    {
      term: "Analysis",
      definition: "Breaking evidence into components to explain significance.",
    },
    {
      term: "Evaluation",
      definition: "Weighing evidence and perspectives to judge quality.",
    },
    {
      term: "Judgement",
      definition: "A supported conclusion reached after weighing.",
    },
    {
      term: "Counter-argument",
      definition: "The opposing view that must be addressed.",
    },
    {
      term: "Synthesis",
      definition: "Combining perspectives into a balanced conclusion.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u3-s2-eval",
      title: "Analysis and evaluation structure",
      skill: "Build answers that analyse evidence and reach a judgement.",
      lesson: {
        sections: [
          {
            heading: "Analysis structure",
            body: "Point → evidence → significance → link to question. Each analytical point should explain WHY the evidence matters to the issue, not just restate it. Use at least two stakeholder perspectives where the question allows.",
          },
          {
            heading: "Evaluation structure",
            body: "Strengths → weaknesses → counter-argument → judgement. IGCSE GP rewards answers that acknowledge the strongest opposing view before concluding — one-sided answers cap at mid-band. End with a qualified judgement ('largely', 'in most contexts') unless evidence is overwhelming.",
          },
        ],
        keyFormulas: [
          {
            name: "Analysis",
            statement: "point + evidence + significance + link",
          },
          {
            name: "Evaluation",
            statement: "strengths + weaknesses + counter-argument + judgement",
          },
        ],
        workedExample: {
          problem: "Evaluate 'carbon taxes effectively reduce emissions'.",
          solution:
            "Strengths: price signals change behaviour. Weaknesses: regressive on poor households; firms may relocate. Counter: border adjustments address leakage. Judgement: effective where enforcement and equity measures exist.",
        },
      },
      questions: [
        {
          id: "ciegp-u3-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a strong evaluation answer always include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only supporting evidence" },
              { id: "b", text: "A judgement after weighing evidence" },
              { id: "c", text: "A list of sources" },
              { id: "d", text: "A summary of the issue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Weighing ending in judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation requires a supported judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A judgement after weighing evidence",
          },
        },
        {
          id: "ciegp-u3-ev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why acknowledging a counter-argument strengthens a GP evaluation answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Counter-argument",
                statement: "Shows the issue is genuinely weighed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It demonstrates the candidate has considered the strongest opposing view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Addressing and responding to it makes the final judgement more credible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shows genuine weighing; makes the judgement more credible",
          },
        },
        {
          id: "ciegp-u3-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A candidate evaluates 'renewable energy can replace fossil fuels' by listing only benefits. Identify two weaknesses in this answer and how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Balanced evaluation",
                statement: "Both sides + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness 1: one-sided — no costs or limitations of renewables (intermittency, storage, land use).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness 2: no judgement — just a list of benefits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix: add limitations, then a qualified conclusion e.g. 'largely feasible with storage investment'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "One-sided and no judgement; add limitations and a qualified conclusion",
          },
        },
        {
          id: "ciegp-u3-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a four-paragraph evaluation structure for the question 'To what extent do sanctions effectively pressure authoritarian regimes?', naming what goes in each paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation structure",
                statement: "Build → counter → weigh → judge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P1: mechanisms — how sanctions pressure regimes (economy, elites, legitimacy).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P2: counter-evidence — regimes adapt, sanctions hurt civilians, evasion via allies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P3: weighing — effectiveness varies by regime type and sanction design.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P4: judgement — 'moderately effective when targeted and multilateral; limited when unilateral'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mechanisms → counter-evidence → weighing → qualified judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u3-eval-notes",
      title: "Paper 1 analysis/evaluation — revision notes",
      summary:
        "Analysis chain, evaluation structure, counter-arguments, qualified judgements.",
      sections: [
        {
          heading: "Key skills",
          body: "Point→evidence→significance→link for analysis; strengths→weaknesses→counter→judgement for evaluation.",
        },
        {
          heading: "Exam tips",
          body: "One-sided answers cap at mid-band. Always end with 'largely/in most contexts' unless evidence is overwhelming.",
        },
      ],
    },
  ],
};
