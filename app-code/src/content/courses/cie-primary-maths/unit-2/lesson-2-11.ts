import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cipm-u2-lesson-2-11",
  code: "2-11",
  title: "Stage 4 — Number Bonds, Patterns and Estimation",
  goal: "I CAN use number bonds to 100, spot patterns and estimate.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: number and problem solving",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Nc, 4Ni"],
  stage: 4,
  vocabulary: [
    { term: "Number bond", definition: "Pairs that add to a total, like 30 + 70 = 100." },
    { term: "Pattern", definition: "A rule or repeating sequence of numbers." },
    { term: "Estimate", definition: "A sensible near-answer without exact calculating." },
    { term: "Round", definition: "Change to nearest 10, 100 or whole number." },
    { term: "Sequence", definition: "Numbers in order following a rule." },
  ],
  concepts: [
    {
      id: "cipm-u2-s11-bonds-patterns",
      title: "Bonds to 100, patterns and estimating",
      skill: "Recall bonds to 100, extend patterns and round/estimate at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Bonds and patterns",
            body: "Number bonds to 100 speed up mental maths — 47 + 53 = 100, so 147 + 53 = 200. Patterns follow rules: +5 each time (5, 10, 15, 20), ×2 (2, 4, 8, 16), or alternating. Spot the rule by looking at the difference between terms, then extend the sequence.",
          },
          {
            heading: "Estimating",
            body: "Estimate by rounding first — 48 + 37 ≈ 50 + 40 = 90. Rounding to the nearest 10 or 100 gives a quick check: is your exact answer sensible? Estimation catches errors — if 398 + 402 ≈ 800 but you got 80, something's wrong.",
          },
        ],
        keyFormulas: [
          { name: "Bonds to 100", statement: "pairs summing to 100: 30+70, 45+55" },
          { name: "Estimating", statement: "round first, then calculate, then compare" },
        ],
        workedExample: {
          problem: "Estimate 297 + 408, then find the exact answer.",
          solution: "≈ 300 + 400 = 700. Exact: 297 + 408 = 705 — close to estimate, sensible.",
        },
      },
      questions: [
        {
          id: "cipm-u2-ep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair adds to 100?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30 + 60" }, { id: "b", text: "45 + 55" }, { id: "c", text: "20 + 70" }, { id: "d", text: "60 + 30" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pairs summing to total." }],
            steps: [{ reasoning: "45 + 55 = 100.", marks: 1, markCode: "A" }],
            finalAnswer: "45 + 55",
          },
        },
        {
          id: "cipm-u2-ep-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the next number: 8, 16, 32, 64, …?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pattern rule", statement: "Each term doubles." }],
            steps: [
              { reasoning: "Rule: ×2 each time.", marks: 1, markCode: "M" },
              { reasoning: "64 × 2 = 128.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "128",
          },
        },
        {
          id: "cipm-u2-ep-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate 198 + 305 by rounding to the nearest 100.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding", statement: "198→200, 305→300." }],
            steps: [
              { reasoning: "198 ≈ 200; 305 ≈ 300.", marks: 1, markCode: "M" },
              { reasoning: "200 + 300 = 500.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈ 500.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈ 500",
          },
        },
        {
          id: "cipm-u2-ep-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A pattern goes 3, 7, 11, 15, … (a) State the rule. (b) Find the 10th term. (c) Estimate and then calculate 47 + 98, explaining why your estimate is sensible. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Patterns and estimation", statement: "+4 rule; term n = 4n−1; round then check." }],
            steps: [
              { reasoning: "(a) Rule: add 4 each time.", marks: 1, markCode: "M" },
              { reasoning: "(b) Terms: 3,7,11,15 → term n = 4n−1; 10th = 40−1 = 39.", marks: 1, markCode: "M" },
              { reasoning: "(b continued) Check: 15+4=19,23,27,31,35,39 — 10th is 39.", marks: 1, markCode: "M" },
              { reasoning: "(c) Estimate: 47≈50, 98≈100 → ≈150.", marks: 1, markCode: "M" },
              { reasoning: "Exact: 47+98 = 145.", marks: 1, markCode: "M" },
              { reasoning: "145 is close to 150 — estimate sensible.", marks: 1, markCode: "M" },
              { reasoning: "Bond check: 47+53=100, so 47+98=100+45=145. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answers: +4; 39; ≈150/145.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) +4; (b) 39; (c) ≈150, exact 145",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-ep-notes",
      title: "Bonds, patterns, estimation — notes",
      summary: "Bonds to 100; find pattern rule; round first to check answers.",
      sections: [
        { heading: "Patterns", body: "Find the difference/rule between terms, then extend." },
        { heading: "Estimating", body: "Round to nearest 10/100 → estimate → exact → compare." },
      ],
    },
  ],
};
