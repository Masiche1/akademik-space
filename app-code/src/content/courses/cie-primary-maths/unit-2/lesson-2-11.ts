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
            { id: "a", text: "30 + 60" },
            { id: "b", text: "60 + 30" },
            { id: "c", text: "20 + 70" },
            { id: "d", text: "45 + 55" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-ep-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair adds to 100?",
          response: { type: "mcq", choices: [
            { id: "a", text: "40 + 50" },
            { id: "b", text: "38 + 62" },
            { id: "c", text: "15 + 75" },
            { id: "d", text: "25 + 65" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pairs summing to 100." }],
            steps: [{ reasoning: "$38 + 62 = 100$.", marks: 1, markCode: "A" }],
            finalAnswer: "38 + 62",
          },
        },
        {
          id: "cipm-u2-ep-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the next number: 5, 10, 20, 40, …?",
          response: { type: "numeric", parts: [{ label: "a", answer: 80 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pattern rule", statement: "Each term doubles." }],
            steps: [
              { reasoning: "Rule: ×2; $40 \\times 2 = 80$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80",
          },
        },
        {
          id: "cipm-u2-ep-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 47 to the nearest 10.",
          response: { type: "mcq", choices: [
            { id: "a", text: "40" },
            { id: "b", text: "50" },
            { id: "c", text: "47" },
            { id: "d", text: "45" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding", statement: "47 is closer to 50 than 40." }],
            steps: [{ reasoning: "47 is nearer to 50 → rounds to 50.", marks: 1, markCode: "A" }],
            finalAnswer: "50",
          },
        },
        {
          id: "cipm-u2-ep-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the next number: 2, 5, 8, 11, …?",
          response: { type: "numeric", parts: [{ label: "a", answer: 14 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pattern rule", statement: "Add 3 each time." }],
            steps: [
              { reasoning: "Rule: +3; $11 + 3 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 14.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cipm-u2-ep-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Estimate 396 + 204 by rounding to the nearest 100.",
          response: { type: "mcq", choices: [
            { id: "a", text: "650" },
            { id: "b", text: "600" },
            { id: "c", text: "700" },
            { id: "d", text: "500" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding", statement: "396→400, 204→200." }],
            steps: [{ reasoning: "$400 + 200 = 600$.", marks: 1, markCode: "A" }],
            finalAnswer: "600",
          },
        },
        {
          id: "cipm-u2-ep-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate 298 + 401, then find the exact answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimating", statement: "Round first, then exact, then compare." }],
            steps: [
              { reasoning: "Estimate: $300 + 400 = 700$.", marks: 1, markCode: "M" },
              { reasoning: "Exact: $298 + 401 = 699$.", marks: 1, markCode: "M" },
              { reasoning: "699 is close to 700 — estimate sensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "≈700; exact 699",
          },
        },
        {
          id: "cipm-u2-ep-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pattern rule fits 4, 9, 14, 19, …?",
          response: { type: "mcq", choices: [
            { id: "a", text: "double" },
            { id: "b", text: "add 6" },
            { id: "c", text: "add 5" },
            { id: "d", text: "add 4" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pattern rule", statement: "Find the difference." }],
            steps: [{ reasoning: "Differences are all 5 → add 5 each time.", marks: 1, markCode: "A" }],
            finalAnswer: "add 5",
          },
        },
        {
          id: "cipm-u2-ep-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What number pairs with 63 to make 100?",
          response: { type: "numeric", parts: [{ label: "a", answer: 37 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond to 100", statement: "Pairs summing to 100." }],
            steps: [
              { reasoning: "$100 - 63 = 37$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 37.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "37",
          },
        },
        {
          id: "cipm-u2-ep-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) What is the next number: 1, 4, 9, 16, …? (b) Estimate 502 − 198, then find the exact answer. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Patterns and estimation", statement: "Squares; round then exact." }],
            steps: [
              { reasoning: "(a) Rule: perfect squares; next is 25.", marks: 1, markCode: "M" },
              { reasoning: "(b) Estimate: $500 - 200 = 300$.", marks: 1, markCode: "M" },
              { reasoning: "Exact: $502 - 198 = 304$.", marks: 1, markCode: "M" },
              { reasoning: "304 is close to 300 — sensible estimate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25 (b) ≈300, exact 304",
          },
        },
        {
          id: "cipm-u2-ep-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sequence is 7, 14, 21, 28, … What is the rule?",
          response: { type: "mcq", choices: [
            { id: "a", text: "double" },
            { id: "b", text: "multiply by 3" },
            { id: "c", text: "add 6" },
            { id: "d", text: "add 7" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pattern rule", statement: "Multiples of 7." }],
            steps: [{ reasoning: "Each term adds 7 — the 7 times table.", marks: 1, markCode: "A" }],
            finalAnswer: "add 7",
          },
        },
        {
          id: "cipm-u2-ep-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Estimate 97 + 203 by rounding to the nearest 100.",
          response: { type: "numeric", parts: [{ label: "a", answer: 300 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding", statement: "97→100, 203→200." }],
            steps: [
              { reasoning: "$100 + 200 = 300$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ≈300.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300",
          },
        },
        {
          id: "cipm-u2-ep-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) What is the next number: 2, 6, 18, 54, …? (b) Which pair makes 100: 84 and 16, or 75 and 25? (c) Estimate 603 − 297 then find the exact answer. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Patterns, bonds and estimation", statement: "×3 rule; bonds to 100; round then exact." }],
            steps: [
              { reasoning: "(a) Rule: ×3; next $= 54 \\times 3 = 162$.", marks: 1, markCode: "M" },
              { reasoning: "(b) 84 + 16 = 100 and 75 + 25 = 100 — both pairs work.", marks: 1, markCode: "M" },
              { reasoning: "(c) Estimate: $600 - 300 = 300$; exact $= 306$.", marks: 1, markCode: "M" },
              { reasoning: "306 close to 300 — sensible.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 162 (b) both (c) ≈300, exact 306",
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
