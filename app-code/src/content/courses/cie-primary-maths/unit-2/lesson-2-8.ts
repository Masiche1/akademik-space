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
            { id: "a", text: "3/4" },
            { id: "b", text: "2/4" },
            { id: "c", text: "2/3" },
            { id: "d", text: "1/4" },
          ], borrectChoiceId: "c" },
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
        {
          id: "cipm-u2-fa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 3/6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3/4" },
            { id: "b", text: "1/3" },
            { id: "c", text: "1/2" },
            { id: "d", text: "2/3" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Equivalent fractions", statement: "Same value." }],
            steps: [{ reasoning: "$\\frac{3}{6} = \\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipm-u2-fa-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 0.4 as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to fraction", statement: "$0.4 = \\frac{4}{10} = \\frac{2}{5}$." }],
            steps: [
              { reasoning: "$0.4 = \\frac{4}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{2}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/5",
          },
        },
        {
          id: "cipm-u2-fa-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of exactly 90° is called…",
          response: { type: "mcq", choices: [
            { id: "a", text: "reflex" },
            { id: "b", text: "obtuse" },
            { id: "c", text: "right" },
            { id: "d", text: "acute" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Right angle", statement: "Exactly 90°." }],
            steps: [{ reasoning: "A right angle measures exactly 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "right",
          },
        },
        {
          id: "cipm-u2-fa-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is greater: 5/8 or 2/3?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing fractions", statement: "Common denominator or decimals." }],
            steps: [
              { reasoning: "$\\frac{5}{8} = 0.625$; $\\frac{2}{3} \\approx 0.667$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{2}{3}$ is greater.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/3",
          },
        },
        {
          id: "cipm-u2-fa-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An angle of 200° is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "obtuse" },
            { id: "b", text: "acute" },
            { id: "c", text: "right" },
            { id: "d", text: "reflex" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflex angle", statement: "Greater than 180° and less than 360°." }],
            steps: [{ reasoning: "200° is between 180° and 360° → reflex.", marks: 1, markCode: "A" }],
            finalAnswer: "reflex",
          },
        },
        {
          id: "cipm-u2-fa-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these fractions from smallest to largest: $\\frac{1}{4}$, $\\frac{1}{2}$, $\\frac{3}{4}$, $\\frac{1}{8}$. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ordering fractions", statement: "Same numerator: bigger denominator = smaller." }],
            steps: [
              { reasoning: "Convert or use common denominator 8: $\\frac{2}{8}, \\frac{4}{8}, \\frac{6}{8}, \\frac{1}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Ordered: $\\frac{1}{8} < \\frac{1}{4} < \\frac{1}{2} < \\frac{3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{8}, \\frac{1}{4}, \\frac{1}{2}, \\frac{3}{4}$",
          },
        },
        {
          id: "cipm-u2-fa-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which angle is obtuse?",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" },
            { id: "b", text: "30°" },
            { id: "c", text: "45°" },
            { id: "d", text: "120°" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Obtuse angle", statement: "Between 90° and 180°." }],
            steps: [{ reasoning: "120° is between 90° and 180° → obtuse.", marks: 1, markCode: "A" }],
            finalAnswer: "120°",
          },
        },
        {
          id: "cipm-u2-fa-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which decimal is the largest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.16$" },
            { id: "b", text: "$0.66$" },
            { id: "c", text: "$0.06$" },
            { id: "d", text: "$0.6$" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing decimals", statement: "Compare tenths then hundredths." }],
            steps: [{ reasoning: "$0.66$ has 6 tenths and 6 hundredths — largest.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.66$",
          },
        },
        {
          id: "cipm-u2-fa-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Write 0.8 as a fraction in simplest form. (b) Which is bigger, $\\frac{3}{5}$ or $0.55$? (c) Classify a 170° angle. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fractions, decimals, angles", statement: "Convert; compare; classify." }],
            steps: [
              { reasoning: "(a) $0.8 = \\frac{8}{10} = \\frac{4}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $\\frac{3}{5} = 0.6 > 0.55$.", marks: 1, markCode: "M" },
              { reasoning: "(c) 170° is between 90° and 180° → obtuse.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{4}{5}$ (b) $\\frac{3}{5}$ (c) obtuse",
          },
        },
        {
          id: "cipm-u2-fa-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of 180° is called…",
          response: { type: "mcq", choices: [
            { id: "a", text: "reflex" },
            { id: "b", text: "straight" },
            { id: "c", text: "acute" },
            { id: "d", text: "obtuse" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Straight angle", statement: "Exactly 180°." }],
            steps: [{ reasoning: "An angle of 180° is a straight angle.", marks: 1, markCode: "A" }],
            finalAnswer: "straight",
          },
        },
        {
          id: "cipm-u2-fa-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which fraction is the smallest: $\\frac{1}{2}$, $\\frac{1}{4}$, $\\frac{1}{8}$, $\\frac{1}{6}$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing unit fractions", statement: "Bigger denominator = smaller value." }],
            steps: [
              { reasoning: "All have numerator 1; largest denominator gives smallest fraction: $\\frac{1}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{8}$",
          },
        },
        {
          id: "cipm-u2-fa-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Write $\\frac{5}{10}$ as a decimal and a percentage. (b) Which is bigger, $\\frac{7}{10}$ or $0.65$? (c) Classify angles of 30°, 95° and 190°. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fractions, decimals, angles", statement: "Convert forms; compare; classify by size." }],
            steps: [
              { reasoning: "(a) $\\frac{5}{10} = 0.5 = 50\\%$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $\\frac{7}{10} = 0.7 > 0.65$.", marks: 1, markCode: "M" },
              { reasoning: "(c) 30° acute; 95° obtuse; 190° reflex.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Correct conversions and classifications.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.5, 50% (b) $\\frac{7}{10}$ (c) acute, obtuse, reflex",
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
