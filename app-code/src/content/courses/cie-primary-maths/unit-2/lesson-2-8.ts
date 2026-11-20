import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cipm-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 4 — Fractions, Decimals and Angles",
  goal: "I CAN work with fractions and decimals and measure angles.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: fractions, decimals and geometry",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Nf, 4Gg"],
  stage: 4,
  vocabulary: [
    { term: "Numerator", definition: "Top number of a fraction — how many parts." },
    { term: "Denominator", definition: "Bottom number — how many equal parts in total." },
    { term: "Decimal", definition: "Number with a point: 0.5 is half." },
    { term: "Acute angle", definition: "Angle smaller than a right angle (< 90°)." },
    { term: "Obtuse angle", definition: "Angle bigger than a right angle but less than 180°." },
  ],
  concepts: [
    {
      id: "cipm-u2-s8-fractions-angles",
      title: "Fractions, decimals and angles",
      skill: "Compare/order fractions and decimals and classify angles at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Fractions and decimals",
            body: "A fraction names part of a whole — 3/4 means 3 of 4 equal parts. Equivalent fractions have the same value (1/2 = 2/4). Decimals are another way to write fractions: 0.5 = 1/2, 0.25 = 1/4. To compare fractions, use the same denominator or convert to decimals.",
          },
          {
            heading: "Angles",
            body: "Angles are measured in degrees (°) with a protractor. Right angle = 90°, straight line = 180°. Angles smaller than 90° are acute; between 90° and 180° are obtuse; exactly 180° is a straight angle. Angles around a point total 360°.",
          },
        ],
        keyFormulas: [
          { name: "Angle types", statement: "acute < 90° < obtuse < 180° < reflex" },
          { name: "Decimals", statement: "0.5 = 1/2; 0.25 = 1/4; 0.75 = 3/4" },
        ],
        workedExample: {
          problem: "Classify a 120° angle.",
          solution: "120° is between 90° and 180°, so it is obtuse.",
        },
      },
      questions: [
        {
          id: "cipm-u2-fa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 1/2?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2/3" }, { id: "b", text: "3/4" }, { id: "c", text: "2/4" }, { id: "d", text: "1/4" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Equivalent fractions", statement: "Same value, different numbers." }],
            steps: [{ reasoning: "2/4 = 1/2.", marks: 1, markCode: "A" }],
            finalAnswer: "2/4",
          },
        },
        {
          id: "cipm-u2-fa-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 0.75 as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to fraction", statement: "0.75 = 75/100 = 3/4." }],
            steps: [
              { reasoning: "0.75 = 75/100.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: 3/4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3/4",
          },
        },
        {
          id: "cipm-u2-fa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is greater: 2/3 or 3/5?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing fractions", statement: "Same denominator or decimals." }],
            steps: [
              { reasoning: "2/3 ≈ 0.667; 3/5 = 0.6.", marks: 1, markCode: "M" },
              { reasoning: "Or common denominator 15: 10/15 vs 9/15.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2/3 is greater.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/3",
          },
        },
        {
          id: "cipm-u2-fa-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "An angle measures 75°. Is it acute, right, obtuse or reflex? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Angle classification", statement: "Compare to 90° and 180°." }],
            steps: [
              { reasoning: "75° < 90°.", marks: 1, markCode: "M" },
              { reasoning: "Smaller than a right angle.", marks: 1, markCode: "M" },
              { reasoning: "Therefore acute.", marks: 1, markCode: "M" },
              { reasoning: "Answer: acute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acute",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-fa-notes",
      title: "Fractions, decimals, angles — revision notes",
      summary: "Equivalent fractions; decimal conversions; acute <90, obtuse 90–180.",
      sections: [
        { heading: "Fractions", body: "Same value via ×/÷; decimals: 0.5=½, 0.25=¼, 0.75=¾." },
        { heading: "Angles", body: "Right=90°, straight=180°, around point=360°; classify by size." },
      ],
    },
  ],
};
