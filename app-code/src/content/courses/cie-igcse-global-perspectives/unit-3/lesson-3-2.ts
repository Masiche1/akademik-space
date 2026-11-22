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
              { id: "a", text: "A judgement after weighing evidence" },
              { id: "b", text: "Only supporting evidence" },
              { id: "c", text: "A summary of the issue" },
              { id: "d", text: "A list of sources" },
            ],
            correctChoiceId: "a",
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
        {
          id: "ciegp-u3-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct chain for an analytical point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List → summary → conclusion" },
              {
                id: "b",
                text: "Point → evidence → significance → link to question",
              },
              { id: "c", text: "Evidence → opinion → repeat" },
              { id: "d", text: "Question → answer → done" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis chain",
                statement: "Point→evidence→significance→link.",
              },
            ],
            steps: [
              {
                reasoning: "The full analytical chain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Point→evidence→significance→link",
          },
        },
        {
          id: "ciegp-u3-ev-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In GP evaluation, a 'judgement' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A guess" },
              { id: "b", text: "A summary of sources" },
              { id: "c", text: "A restatement of the question" },
              {
                id: "d",
                text: "A supported conclusion reached after weighing evidence",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Judgement",
                statement: "Supported conclusion after weighing.",
              },
            ],
            steps: [
              {
                reasoning: "Judgement = reasoned, supported conclusion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Supported conclusion after weighing",
          },
        },
        {
          id: "ciegp-u3-ev-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should every analytical point be linked back to the research question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Relevance",
                statement: "Links show significance.",
              },
            ],
            steps: [
              {
                reasoning: "Unlinked points look like description, not analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Linking proves the evidence matters to the issue.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shows evidence's significance to the question",
          },
        },
        {
          id: "ciegp-u3-ev-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An evaluation answer covers 3 of the 4 required elements (strengths, weaknesses, counter-argument, judgement). What percentage is covered?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage covered", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation coverage",
                statement: "Elements covered / total.",
              },
            ],
            steps: [
              {
                reasoning: "3/4 x 100 = 75%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "ciegp-u3-ev-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An essay is 1200 words and 25% is devoted to counter-arguments. How many words is that?",
          response: {
            type: "numeric",
            parts: [{ label: "Words", answer: 300 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word allocation",
                statement: "Percentage of total words.",
              },
            ],
            steps: [
              {
                reasoning: "0.25 x 1200 = 300 words.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "300 words",
          },
        },
        {
          id: "ciegp-u3-ev-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the 'significance' step adds in an analysis chain, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Significance",
                statement: "Why evidence matters.",
              },
            ],
            steps: [
              {
                reasoning: "Significance explains why the evidence matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. 'Emissions rose 50%' → significance: undermines climate targets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Without it, answers are descriptive only.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Explains why evidence matters; prevents description-only",
          },
        },
        {
          id: "ciegp-u3-ev-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do one-sided GP answers cap at mid-band?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Balanced evaluation",
                statement: "Both sides + judgement needed.",
              },
            ],
            steps: [
              {
                reasoning: "Global issues are genuinely contested.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One-sided shows incomplete weighing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exam boards require counter-arguments and judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Incomplete weighing; exam requires balance and judgement",
          },
        },
        {
          id: "ciegp-u3-ev-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which ending gives the strongest evaluation judgement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Both sides are right.'" },
              { id: "b", text: "'I don't know.'" },
              { id: "c", text: "'It is good.'" },
              {
                id: "d",
                text: "'On balance, the policy is largely effective in most contexts, though equity concerns remain.'",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Qualified judgement",
                statement: "Position + qualification.",
              },
            ],
            steps: [
              {
                reasoning: "Qualified, positioned conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Qualified judgement with position",
          },
        },
        {
          id: "ciegp-u3-ev-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A candidate makes 6 analytical points; 4 are linked to the question and 2 are not. What percentage are linked?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage linked", answer: 66.7, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical linking",
                statement: "Linked/total points.",
              },
            ],
            steps: [
              {
                reasoning: "4/6 x 100 = 66.7%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "66.7%",
          },
        },
        {
          id: "ciegp-u3-ev-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When is an unqualified judgement (no 'largely' or 'in most cases') acceptable in GP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "When the evidence is overwhelming and near-unanimous",
              },
              { id: "b", text: "Always" },
              { id: "c", text: "Only in foundation tier" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Judgement qualification",
                statement: "Qualify unless evidence overwhelming.",
              },
            ],
            steps: [
              {
                reasoning: "Overwhelming evidence permits firm judgement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "When evidence is overwhelming",
          },
        },
        {
          id: "ciegp-u3-ev-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan a balanced evaluation of 'sanctions versus engagement for authoritarian regimes', naming the content of each paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation plan",
                statement: "Build→counter→weigh→judge.",
              },
            ],
            steps: [
              {
                reasoning: "P1: how sanctions pressure regimes (economy, elites).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P2: how engagement can encourage reform + its failures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P3: weighing — regime type and context decide effectiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P4: qualified judgement — combination often best.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mechanisms→counter→weighing→qualified judgement",
          },
        },
        {
          id: "ciegp-u3-ev-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A mark scheme awards: strengths 4 marks, weaknesses 3, counter-argument 2, judgement 3. What is the total, and what percentage is the judgement?",
          response: {
            type: "numeric",
            parts: [
              { label: "Total marks", answer: 12 },
              { label: "Judgement percentage", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mark allocation",
                statement: "Sum of components.",
              },
            ],
            steps: [
              {
                reasoning: "4 + 3 + 2 + 3 = 12.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3/12 x 100 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 marks; judgement = 25%",
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
