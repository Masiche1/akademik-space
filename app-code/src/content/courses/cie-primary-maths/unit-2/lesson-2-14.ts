import type { Lesson } from "../../../types.ts";

export const lesson214: Lesson = {
  id: "cipm-u2-lesson-2-14",
  code: "2-14",
  title: "Stage 2 — Rounding, Halves and Turns",
  goal: "I CAN round to the nearest 10, find halves and recognise quarter and half turns.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: number, fractions and position",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Np, 2Nf, 2Gg"],
  stage: 2,
  vocabulary: [
    { term: "Round", definition: "Approximate to nearest 10 or 100." },
    { term: "Nearest 10", definition: "Which ten a number is closest to." },
    { term: "Half turn", definition: "180° rotation — facing the opposite way." },
    { term: "Quarter turn", definition: "90° rotation — a right angle." },
    { term: "Equivalent", definition: "Same value written differently: 1/2 = 2/4." },
  ],
  concepts: [
    {
      id: "cipm-u2-s14-round-turn",
      title: "Rounding, halves and turns",
      skill: "Round two-digit numbers, find halves of shapes/numbers and identify turns at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Rounding and halves",
            body: "To round to the nearest 10, look at the ones digit: 0–4 rounds down, 5–9 rounds up. 47 → 50; 42 → 40. Halves: 1/2 of a shape is two equal parts; 2/4 is the same as 1/2. Half of an even number of objects splits exactly.",
          },
          {
            heading: "Turns",
            body: "A quarter turn is 90° — like a clock hand moving one quarter of the way. A half turn is 180° — facing the opposite direction. Clockwise follows clock hands; anti-clockwise goes the other way. A right angle is a quarter turn.",
          },
        ],
        keyFormulas: [
          { name: "Round", statement: "ones 0-4 down, 5-9 up to nearest 10" },
          { name: "Turns", statement: "quarter turn = 90°; half turn = 180°" },
          { name: "Halves", statement: "1/2 = 2/4; half of 2n = n" },
        ],
        workedExample: {
          problem: "Round 68 to the nearest 10. Then find half of 68.",
          solution: "68 → 70 (8 rounds up); half of 68 = 34.",
        },
      },
      questions: [
        {
          id: "cipm-u2-rt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 43 to the nearest 10.",
          response: { type: "mcq", choices: [
            { id: "a", text: "40" }, { id: "b", text: "50" }, { id: "c", text: "45" }, { id: "d", text: "44" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rounding", statement: "0-4 down, 5-9 up." }],
            steps: [{ reasoning: "3 is in 0-4, so 43 rounds down to 40.", marks: 1, markCode: "M" }],
            finalAnswer: "40",
          },
        },
        {
          id: "cipm-u2-rt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a quarter turn in degrees?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter turn", statement: "90°." }],
            steps: [
              { reasoning: "Quarter of 360° = 90°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90°",
          },
        },
        {
          id: "cipm-u2-rt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shape is divided into 4 equal parts and 2 are shaded. What fraction is shaded? Give an equivalent fraction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Equivalent fractions", statement: "2/4 = 1/2." }],
            steps: [
              { reasoning: "2 of 4 parts = 2/4.", marks: 1, markCode: "M" },
              { reasoning: "2/4 simplifies to 1/2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2/4 = 1/2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/4 = 1/2",
          },
        },
        {
          id: "cipm-u2-rt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A class has 57 children. (a) Round 57 to the nearest 10. (b) The teacher shares 56 pencils equally between 2 groups — how many each? (c) A door on hinges turns — is opening it a quarter or half turn? Explain using degrees. (d) Write 3/4 as an equivalent fraction with denominator 8. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mixed number skills", statement: "Rounding, halving, turns, equivalence." }],
            steps: [
              { reasoning: "(a) 57 → 60 (7 rounds up).", marks: 1, markCode: "M" },
              { reasoning: "(b) 56 ÷ 2 = 28 each.", marks: 1, markCode: "M" },
              { reasoning: "(c) Door opens about 90° = quarter turn.", marks: 1, markCode: "M" },
              { reasoning: "Quarter turn = 90°, half = 180°.", marks: 1, markCode: "M" },
              { reasoning: "(d) 3/4 = 6/8 (×2 top and bottom).", marks: 1, markCode: "M" },
              { reasoning: "Equivalence preserves value.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted with working.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 60 (b) 28 (c) quarter turn ≈ 90° (d) 6/8",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-rt-notes",
      title: "Rounding and turns — notes",
      summary: "Round: 0-4 down, 5-9 up. Quarter turn=90°, half=180°. 1/2=2/4.",
      sections: [
        { heading: "Rounding", body: "Check ones digit: under 5 rounds down, 5 or more rounds up." },
        { heading: "Turns", body: "Clockwise/anti-clockwise; quarter=90° like a right angle." },
      ],
    },
  ],
};
