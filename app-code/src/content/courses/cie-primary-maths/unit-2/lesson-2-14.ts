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
            { id: "a", text: "40" },
            { id: "b", text: "44" },
            { id: "c", text: "45" },
            { id: "d", text: "50" },
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
        {
          id: "cipm-u2-rt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 56 to the nearest 10.",
          response: { type: "mcq", choices: [
            { id: "a", text: "50" },
            { id: "b", text: "60" },
            { id: "c", text: "57" },
            { id: "d", text: "55" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rounding", statement: "5-9 rounds up." }],
            steps: [{ reasoning: "6 is in 5-9, so 56 rounds up to 60.", marks: 1, markCode: "M" }],
            finalAnswer: "60",
          },
        },
        {
          id: "cipm-u2-rt-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is half of 64?",
          response: { type: "numeric", parts: [{ label: "a", answer: 32 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Half", statement: "Split into two equal parts." }],
            steps: [
              { reasoning: "$64 \\div 2 = 32$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 32.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cipm-u2-rt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A half turn is how many degrees?",
          response: { type: "mcq", choices: [
            { id: "a", text: "360°" },
            { id: "b", text: "180°" },
            { id: "c", text: "90°" },
            { id: "d", text: "45°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half turn", statement: "180°." }],
            steps: [{ reasoning: "A half turn = 180°.", marks: 1, markCode: "A" }],
            finalAnswer: "180°",
          },
        },
        {
          id: "cipm-u2-rt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Round 92 to the nearest 10.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Rounding", statement: "0-4 down, 5-9 up." }],
            steps: [
              { reasoning: "2 is in 0-4, so 92 rounds down to 90.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90",
          },
        },
        {
          id: "cipm-u2-rt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 1/2?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2/5" },
            { id: "b", text: "2/4" },
            { id: "c", text: "3/4" },
            { id: "d", text: "1/3" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Equivalent fractions", statement: "Same value." }],
            steps: [{ reasoning: "$\\frac{2}{4} = \\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "2/4",
          },
        },
        {
          id: "cipm-u2-rt-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) Round 75 to the nearest 10. (b) Half of 48 is? (c) A clock hand moves from 12 to 3 — is that a quarter or half turn? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding, halves, turns", statement: "Round; divide by 2; quarter=90°." }],
            steps: [
              { reasoning: "(a) 75 → 80 (5 rounds up).", marks: 1, markCode: "M" },
              { reasoning: "(b) $48 \\div 2 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "(c) 12 to 3 is a quarter of the clock face = 90° = quarter turn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 80 (b) 24 (c) quarter turn",
          },
        },
        {
          id: "cipm-u2-rt-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A shape is turned clockwise 90°. This is a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "quarter turn" },
            { id: "b", text: "reflection" },
            { id: "c", text: "half turn" },
            { id: "d", text: "full turn" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter turn", statement: "90°." }],
            steps: [{ reasoning: "90° is a quarter turn.", marks: 1, markCode: "A" }],
            finalAnswer: "quarter turn",
          },
        },
        {
          id: "cipm-u2-rt-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is half of 86?",
          response: { type: "numeric", parts: [{ label: "a", answer: 43 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Halving", statement: "Divide by 2." }],
            steps: [
              { reasoning: "$86 \\div 2 = 43$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 43.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "43",
          },
        },
        {
          id: "cipm-u2-rt-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Round 38 to the nearest 10. (b) A pizza is cut into 8 slices; 4 are eaten — what fraction remains as an equivalent of 1/2? (c) Is a door swinging open a quarter or half turn? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding, fractions, turns", statement: "Round; equivalent fractions; door ≈ 90°." }],
            steps: [
              { reasoning: "(a) 38 → 40.", marks: 1, markCode: "M" },
              { reasoning: "(b) 4 of 8 remain = $\\frac{4}{8} = \\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Door opens about 90° → quarter turn.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 (b) $\\frac{1}{2}$ (c) quarter turn",
          },
        },
        {
          id: "cipm-u2-rt-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To round 64 to the nearest 10 you look at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the tens digit" },
            { id: "b", text: "the hundreds digit" },
            { id: "c", text: "the whole number" },
            { id: "d", text: "the ones digit" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding", statement: "Ones digit decides." }],
            steps: [{ reasoning: "The ones digit (4) decides rounding to 60.", marks: 1, markCode: "A" }],
            finalAnswer: "the ones digit",
          },
        },
        {
          id: "cipm-u2-rt-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is half of 58?",
          response: { type: "numeric", parts: [{ label: "a", answer: 29 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Halving", statement: "Divide by 2." }],
            steps: [
              { reasoning: "$58 \\div 2 = 29$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 29.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "29",
          },
        },
        {
          id: "cipm-u2-rt-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Round 89 to the nearest 10. (b) Round 91 to the nearest 10. (c) Which is nearer to 100: 89 or 91? (d) Half of 76 = ? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rounding and halving", statement: "0-4 down, 5-9 up; halve by ÷2." }],
            steps: [
              { reasoning: "(a) 89 → 90 (9 rounds up).", marks: 1, markCode: "M" },
              { reasoning: "(b) 91 → 90 (1 rounds down).", marks: 1, markCode: "M" },
              { reasoning: "(c) 91 is nearer to 100 (distance 9 vs 11).", marks: 1, markCode: "M" },
              { reasoning: "(d) $76 \\div 2 = 38$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 90 (b) 90 (c) 91 (d) 38",
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
