import type { Lesson } from "../../../types.ts";

export const lesson114: Lesson = {
  id: "cipm-u1-lesson-1-14",
  code: "1-14",
  title: "Stage 2 — Chance and Simple Probability",
  goal: "I CAN describe chance using words like certain, likely, unlikely and impossible, and record results of simple chance experiments.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: statistics and probability",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Sp, 2Nc"],
  stage: 2,
  vocabulary: [
    { term: "Chance", definition: "How likely something is to happen." },
    { term: "Certain", definition: "Will definitely happen — 100% sure." },
    { term: "Impossible", definition: "Can never happen — 0% chance." },
    { term: "Likely", definition: "Probably will happen." },
    { term: "Unlikely", definition: "Probably will not happen." },
    { term: "Outcome", definition: "The result of a chance experiment." },
  ],
  concepts: [
    {
      id: "cipm-u1-s14-chance",
      title: "Describing chance and recording experiments",
      skill: "Use chance language, predict outcomes and tally results of simple experiments at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Chance language",
            body: "Order events from impossible → unlikely → even chance → likely → certain. A coin toss landing heads is even chance (50/50). Rolling a 7 on a normal dice is impossible. The sun rising tomorrow is certain. A rainy day this week is unlikely (depends on season).",
          },
          {
            heading: "Chance experiments",
            body: "A chance experiment has outcomes you cannot control — coin tosses, dice rolls, spinner colours. Record results in a tally or table: e.g. toss a coin 10 times, count heads and tails. More trials give a better idea of the pattern, though results can still vary.",
          },
        ],
        keyFormulas: [
          { name: "Chance scale", statement: "impossible < unlikely < even < likely < certain" },
          { name: "Coin", statement: "heads or tails — even chance each" },
          { name: "Dice", statement: "numbers 1-6 — even chance each" },
        ],
        workedExample: {
          problem: "You roll a dice once. Is rolling a 4 impossible, unlikely, even chance, likely or certain? Then describe rolling an even number.",
          solution: "Rolling a 4 = even chance (1 of 6 faces, same as any number). Rolling an even number (2,4,6) = likely — 3 of 6 faces.",
        },
      },
      questions: [
        {
          id: "cipm-u1-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is impossible: rolling a 5 on a dice, or flipping a coin and getting tails?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rolling a 5" }, { id: "b", text: "Getting tails" }, { id: "c", text: "Both are impossible" }, { id: "d", text: "Neither is impossible" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Impossible", statement: "Cannot happen." }],
            steps: [{ reasoning: "5 is on a dice; tails is a coin outcome — both possible.", marks: 1, markCode: "M" }],
            finalAnswer: "Neither is impossible",
          },
        },
        {
          id: "cipm-u1-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Put these in order from least to most likely: (a) it rains tomorrow, (b) you are a frog, (c) you get heads on a coin toss.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chance order", statement: "impossible < unlikely < even < likely < certain." }],
            steps: [
              { reasoning: "Being a frog is impossible.", marks: 1, markCode: "M" },
              { reasoning: "Rain is unlikely; heads is even chance — order: frog, rain, heads.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "frog < rain < heads",
          },
        },
        {
          id: "cipm-u1-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner has 4 equal sections: 2 red, 1 blue, 1 yellow. Is landing on red likely, unlikely or even chance? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Chance reasoning", statement: "Compare favourable outcomes to total." }],
            steps: [
              { reasoning: "2 of 4 sections are red = half.", marks: 1, markCode: "M" },
              { reasoning: "Half the spins land on red → even chance.", marks: 1, markCode: "M" },
              { reasoning: "Answer: even chance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Even chance — 2 of 4 sections",
          },
        },
        {
          id: "cipm-u1-ch-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "You toss a coin 10 times and record: heads 6, tails 4. (a) Is heads or tails more likely based on this experiment? (b) What is the theoretical even-chance expectation for 10 tosses? (c) Why might the results differ from expectation? (d) Toss again 10 times — would you expect exactly 5 and 5? Explain. (e) Describe one event that is certain and one that is impossible in your school day.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chance experiments", statement: "Record, compare, explain variation." }],
            steps: [
              { reasoning: "(a) Heads appeared more (6 vs 4) in this trial.", marks: 1, markCode: "M" },
              { reasoning: "(b) Even chance → expect about 5 heads, 5 tails.", marks: 1, markCode: "M" },
              { reasoning: "(c) Chance results vary; small samples vary more.", marks: 1, markCode: "M" },
              { reasoning: "(d) No — exactly 5-5 is possible but not required; results vary.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. certain: school bell rings; impossible: snowing in July (locally).", marks: 1, markCode: "M" },
              { reasoning: "Distinguishes experimental vs theoretical chance.", marks: 1, markCode: "M" },
              { reasoning: "Uses chance vocabulary correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) heads (b) ~5 each (c) chance varies (d) no, varies (e) certain/impossible examples",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-ch-notes",
      title: "Chance — notes",
      summary: "Impossible < unlikely < even chance < likely < certain. Record trials in a tally; results vary around expectation.",
      sections: [
        { heading: "Chance words", body: "Match events to the chance scale before judging experiments." },
        { heading: "Experiments", body: "More trials → results closer to expected pattern, but never exact." },
      ],
    },
  ],
};
