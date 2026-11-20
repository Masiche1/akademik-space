import type { Lesson } from "../../../types.ts";

export const lesson219: Lesson = {
  id: "cipm-u2-lesson-2-19",
  code: "2-19",
  title: "Stage 4 — Probability and Chance",
  goal: "I CAN find the probability of simple events as fractions, use a sample space and interpret experimental results.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: statistics and probability",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Sp, 4Ss"],
  stage: 4,
  vocabulary: [
    { term: "Probability", definition: "A measure of how likely an event is, often written as a fraction." },
    { term: "Sample space", definition: "All possible outcomes of an experiment." },
    { term: "Favourable outcomes", definition: "The outcomes that count as success." },
    { term: "Experimental probability", definition: "Estimated from actual trial results: successes ÷ trials." },
    { term: "Theoretical probability", definition: "What should happen in the long run: favourable ÷ total." },
    { term: "Equally likely", definition: "Each outcome has the same chance." },
  ],
  concepts: [
    {
      id: "cipm-u2-s19-probability",
      title: "Probability as fractions and experiments",
      skill: "Calculate theoretical probability, list sample spaces and compare with experimental results at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Theoretical probability",
            body: "For equally likely outcomes: P(event) = favourable outcomes ÷ total outcomes. A bag has 3 red, 2 blue counters — P(red) = 3/5. A dice: P(even) = 3/6 = 1/2. Probability ranges from 0 (impossible) to 1 (certain).",
          },
          {
            heading: "Experimental probability",
            body: "Roll a dice 60 times and 6 comes up 14 times — experimental P(6) = 14/60 ≈ 0.23, close to theoretical 1/6 ≈ 0.17. More trials → experimental results approach theoretical probability, but never exactly match in a finite run.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "P = favourable outcomes ÷ total outcomes" },
          { name: "Experimental", statement: "P ≈ successes ÷ number of trials" },
          { name: "Range", statement: "0 ≤ P ≤ 1; impossible = 0, certain = 1" },
        ],
        workedExample: {
          problem: "A bag contains 4 green, 3 yellow and 3 red beads. Find P(green) and P(not red).",
          solution: "Total = 10. P(green) = 4/10 = 2/5. Not red = green + yellow = 7/10.",
        },
      },
      questions: [
        {
          id: "cipm-u2-pr2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has 5 red and 5 blue balls. What is P(red)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1/2" }, { id: "b", text: "1/5" }, { id: "c", text: "5/10 only as 5/5" }, { id: "d", text: "1/10" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "favourable ÷ total." }],
            steps: [{ reasoning: "5 red of 10 total = 5/10 = 1/2.", marks: 1, markCode: "M" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipm-u2-pr2-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List the sample space for flipping two coins (H = heads, T = tails).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sample space", statement: "All possible outcomes." }],
            steps: [
              { reasoning: "HH, HT, TH, TT.", marks: 1, markCode: "M" },
              { reasoning: "4 equally likely outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "HH, HT, TH, TT",
          },
        },
        {
          id: "cipm-u2-pr2-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner has 8 equal sections numbered 1-8. Find P(landing on a multiple of 4) and P(landing on an odd number).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "Count favourable ÷ 8." }],
            steps: [
              { reasoning: "Multiples of 4: 4, 8 → P = 2/8 = 1/4.", marks: 1, markCode: "M" },
              { reasoning: "Odd: 1,3,5,7 → P = 4/8 = 1/2.", marks: 1, markCode: "M" },
              { reasoning: "Answers simplified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4 and 1/2",
          },
        },
        {
          id: "cipm-u2-pr2-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A class rolls a dice 30 times recording sixes: 7 sixes. (a) Find the experimental probability of a six. (b) Find the theoretical probability. (c) Why do they differ? (d) Predict roughly how many sixes in 300 rolls. (e) A bag has 2 red, 3 blue, 5 green counters — find P(green) and P(not blue). (f) Which is more likely: rolling a six or drawing green? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability comparison", statement: "Experimental vs theoretical; fraction comparison." }],
            steps: [
              { reasoning: "(a) 7/30 ≈ 0.23.", marks: 1, markCode: "M" },
              { reasoning: "(b) Theoretical = 1/6 ≈ 0.17.", marks: 1, markCode: "M" },
              { reasoning: "(c) Chance variation in small samples.", marks: 1, markCode: "M" },
              { reasoning: "(d) ≈ 300 × 1/6 = 50 sixes.", marks: 1, markCode: "M" },
              { reasoning: "(e) P(green) = 5/10 = 1/2; P(not blue) = 7/10.", marks: 1, markCode: "M" },
              { reasoning: "(f) P(six)=1/6≈0.17 < P(green)=1/2 → green more likely.", marks: 1, markCode: "M" },
              { reasoning: "Fractions compared correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 7/30≈0.23 (b) 1/6≈0.17 (c) variation (d) ~50 (e) 1/2, 7/10 (f) green",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-pr2-notes",
      title: "Probability — notes",
      summary: "P = favourable ÷ total for equally likely outcomes. Experimental ≈ successes ÷ trials, approaching theoretical as trials increase.",
      sections: [
        { heading: "Theoretical", body: "Count outcomes carefully — include all equally likely possibilities." },
        { heading: "Experimental", body: "Small samples vary; expect experimental → theoretical over many trials." },
      ],
    },
  ],
};
