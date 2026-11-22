import type { Lesson } from "../../../types.ts";

export const lesson216: Lesson = {
  id: "cipm-u2-lesson-2-16",
  code: "2-16",
  title: "Stage 4 — Decimals, Negatives and Angles",
  goal: "I CAN use decimals to two places, negative numbers in context and measure angles in degrees.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: number and geometry",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Ni, 4Nf, 4Gg"],
  stage: 4,
  vocabulary: [
    { term: "Decimal", definition: "Number with tenths and hundredths after the point." },
    { term: "Tenths/hundredths", definition: "First/second decimal place: 0.3 = 3 tenths, 0.07 = 7 hundredths." },
    { term: "Negative number", definition: "Below zero: temperatures like −5°C." },
    { term: "Degree (°)", definition: "Unit for measuring angles; full turn = 360°." },
    { term: "Acute/obtuse", definition: "Angle less than 90° / between 90° and 180°." },
  ],
  concepts: [
    {
      id: "cipm-u2-s16-decimal-angle",
      title: "Decimals, negatives and angles in degrees",
      skill: "Read/write decimals to two places, use negative numbers and measure angles at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Decimals and negatives",
            body: "Decimals show tenths and hundredths: 0.4 = 4/10, 0.25 = 25/100 = 1/4. Money and measures use decimals naturally (£3.50, 2.4 m). Negative numbers appear in temperature and below-zero contexts — on a number line they sit left of zero. Compare: −5 is less than 3.",
          },
          {
            heading: "Angles in degrees",
            body: "Angles are measured in degrees with a protractor. A right angle = 90°, straight line = 180°, full turn = 360°. Acute angles are under 90°, obtuse between 90° and 180°. To measure, line up the protractor's centre on the vertex and 0° line on one arm.",
          },
        ],
        keyFormulas: [
          { name: "Decimals", statement: "0.1 = 1/10; 0.01 = 1/100" },
          { name: "Angles", statement: "right angle = 90°; straight = 180°; full = 360°" },
          { name: "Types", statement: "acute < 90° < obtuse < 180°" },
        ],
        workedExample: {
          problem: "Write 7/10 as a decimal and name the angle type for 120°.",
          solution: "7/10 = 0.7; 120° is obtuse (between 90° and 180°).",
        },
      },
      questions: [
        {
          id: "cipm-u2-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 3/10 as a decimal.",
          response: { type: "mcq", choices: [
            { id: "a", text: "3.0" },
            { id: "b", text: "0.3" },
            { id: "c", text: "0.33" },
            { id: "d", text: "0.03" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Tenths", statement: "3/10 = 0.3." }],
            steps: [{ reasoning: "Tenths go in the first decimal place.", marks: 1, markCode: "M" }],
            finalAnswer: "0.3",
          },
        },
        {
          id: "cipm-u2-da-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is colder: −8°C or −2°C?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative numbers", statement: "More negative = colder." }],
            steps: [
              { reasoning: "−8 is further below zero than −2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: −8°C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "−8°C",
          },
        },
        {
          id: "cipm-u2-da-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An angle measures 45°. What type is it and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Acute angle", statement: "Less than 90°." }],
            steps: [
              { reasoning: "45° < 90°.", marks: 1, markCode: "M" },
              { reasoning: "It is acute.", marks: 1, markCode: "A" },
              { reasoning: "Reason: smaller than a right angle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acute — less than 90°",
          },
        },
        {
          id: "cipm-u2-da-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Write 0.6 as a fraction in simplest form. (b) The temperature falls from −3°C to −11°C — what is the fall? (c) Two angles measure 85° and 95° — name each type. (d) Convert £4.75 to pence. (e) Explain why 0.5 and 1/2 are the same. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimals, negatives, angles", statement: "Conversions and comparisons." }],
            steps: [
              { reasoning: "(a) 0.6 = 6/10 = 3/5.", marks: 1, markCode: "M" },
              { reasoning: "(b) Fall = 8°C (from −3 to −11).", marks: 1, markCode: "M" },
              { reasoning: "(c) 85° acute, 95° obtuse.", marks: 1, markCode: "M" },
              { reasoning: "(d) £4.75 = 475p.", marks: 1, markCode: "M" },
              { reasoning: "(e) 0.5 = 5/10 = 1/2.", marks: 1, markCode: "M" },
              { reasoning: "Decimal and fraction equivalence shown.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3/5 (b) 8°C fall (c) acute, obtuse (d) 475p (e) 0.5 = 5/10 = 1/2",
          },
        },
        {
          id: "cipm-u2-da-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write 0.4 as a fraction in simplest form.",
          response: { type: "mcq", choices: [
            { id: "a", text: "4/100" },
            { id: "b", text: "1/4" },
            { id: "c", text: "2/5" },
            { id: "d", text: "4/10" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decimals", statement: "0.4 = 4/10 = 2/5." }],
            steps: [{ reasoning: "$0.4 = \\frac{4}{10} = \\frac{2}{5}$.", marks: 1, markCode: "A" }],
            finalAnswer: "2/5",
          },
        },
        {
          id: "cipm-u2-da-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is warmer: −4°C or 2°C?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative numbers", statement: "2 > −4." }],
            steps: [
              { reasoning: "2°C is above zero; −4°C is below zero.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2°C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2°C",
          },
        },
        {
          id: "cipm-u2-da-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of 150° is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "obtuse" },
            { id: "b", text: "reflex" },
            { id: "c", text: "right" },
            { id: "d", text: "acute" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Obtuse angle", statement: "Between 90° and 180°." }],
            steps: [{ reasoning: "$90 < 150 < 180$ → obtuse.", marks: 1, markCode: "A" }],
            finalAnswer: "obtuse",
          },
        },
        {
          id: "cipm-u2-da-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write 1/4 as a decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Decimals", statement: "1/4 = 0.25." }],
            steps: [
              { reasoning: "$1 \\div 4 = 0.25$ or $\\frac{25}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.25",
          },
        },
        {
          id: "cipm-u2-da-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The temperature on Monday is −2°C and Tuesday is 5°C. Which is colder?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Monday" },
            { id: "b", text: "same" },
            { id: "c", text: "cannot tell" },
            { id: "d", text: "Tuesday" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative numbers", statement: "−2 < 5." }],
            steps: [{ reasoning: "−2°C is below zero; 5°C above → Monday colder.", marks: 1, markCode: "A" }],
            finalAnswer: "Monday",
          },
        },
        {
          id: "cipm-u2-da-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) Write 0.8 as a fraction. (b) Name the angle type for 70°. (c) Convert £2.40 to pence. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimals, angles, money", statement: "0.8 = 8/10; acute < 90°; £1 = 100p." }],
            steps: [
              { reasoning: "(a) $0.8 = \\frac{8}{10} = \\frac{4}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "(b) 70° < 90° → acute.", marks: 1, markCode: "M" },
              { reasoning: "(c) £2.40 = 240p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4/5 (b) acute (c) 240p",
          },
        },
        {
          id: "cipm-u2-da-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which temperature is the coldest: −10°C, −3°C or 0°C?",
          response: { type: "mcq", choices: [
            { id: "a", text: "−10°C" },
            { id: "b", text: "−3°C" },
            { id: "c", text: "they are equal" },
            { id: "d", text: "0°C" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative numbers", statement: "More negative = colder." }],
            steps: [{ reasoning: "−10 is furthest below zero.", marks: 1, markCode: "A" }],
            finalAnswer: "−10°C",
          },
        },
        {
          id: "cipm-u2-da-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write 3/5 as a decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }],
            steps: [
              { reasoning: "$3 \\div 5 = 0.6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.6",
          },
        },
        {
          id: "cipm-u2-da-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A freezer is at −18°C; the room is at 20°C — what is the difference? (b) An angle measures 200° — is it acute, right or obtuse? (c) Write £1.05 in pence. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Negatives, angles, money", statement: "Difference across zero; 200° > 180°; £1 = 100p." }],
            steps: [
              { reasoning: "(a) $20 - (-18) = 38$°C difference.", marks: 1, markCode: "M" },
              { reasoning: "(b) 200° > 180° → reflex (not acute/right/obtuse).", marks: 1, markCode: "M" },
              { reasoning: "(c) £1.05 = 105p.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 38°C (b) reflex (c) 105p",
          },
        },
        {
          id: "cipm-u2-da-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A right angle measures exactly…",
          response: { type: "mcq", choices: [
            { id: "a", text: "360°" },
            { id: "b", text: "45°" },
            { id: "c", text: "180°" },
            { id: "d", text: "90°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Right angle", statement: "90°." }],
            steps: [{ reasoning: "Right angle = 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "90°",
          },
        },
        {
          id: "cipm-u2-da-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Order from coldest to warmest: 3°C, −1°C, −7°C.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Negative numbers", statement: "Order on number line." }],
            steps: [
              { reasoning: "Number line: −7 < −1 < 3.", marks: 1, markCode: "M" },
              { reasoning: "Order: −7°C, −1°C, 3°C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "−7°C, −1°C, 3°C",
          },
        },
        {
          id: "cipm-u2-da-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Write 7/20 as a decimal. (b) Temperature rises from −6°C to −1°C — what is the rise? (c) An angle measures 75° — name its type. (d) Convert 0.35 to a fraction in simplest form. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimals, negatives, angles", statement: "Fraction→decimal; temperature change; angle types." }],
            steps: [
              { reasoning: "(a) $7 \\div 20 = 0.35$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Rise = $-1 - (-6) = 5$°C.", marks: 1, markCode: "M" },
              { reasoning: "(c) 75° < 90° → acute.", marks: 1, markCode: "M" },
              { reasoning: "(d) $0.35 = \\frac{35}{100} = \\frac{7}{20}$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.35 (b) 5°C rise (c) acute (d) 7/20",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-da-notes",
      title: "Decimals and angles — notes",
      summary: "0.1=1/10, 0.01=1/100; negatives below zero; acute<90°<obtuse<180°.",
      sections: [
        { heading: "Decimals", body: "Tenths first decimal place, hundredths second; halves = 0.5." },
        { heading: "Angles", body: "Measure with protractor; right=90°, straight=180°, full=360°." },
      ],
    },
  ],
};
