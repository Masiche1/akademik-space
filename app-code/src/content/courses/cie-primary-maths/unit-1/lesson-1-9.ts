import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cipm-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Money, Time and Measures",
  goal: "I CAN use money, tell the time and measure length, mass and capacity.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 3: measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 3Nm, 3Gt, 3Gg"],
  stage: 3,
  vocabulary: [
    { term: "Pound", definition: "£ — the main unit of British money." },
    { term: "Quarter past/to", definition: "15 minutes after/before the hour." },
    { term: "Centimetre", definition: "cm — unit for measuring length." },
    { term: "Millilitre", definition: "ml — unit for measuring capacity." },
    { term: "Change", definition: "Money given back after paying." },
  ],
  concepts: [
    {
      id: "cipm-u1-s9-money-time",
      title: "Money, time and measurement",
      skill: "Calculate with money, read analogue/digital time and measure at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Money",
            body: "Know coins and notes up to £5 and £10. Add prices to find totals; subtract to find change. £1 = 100p — convert between pounds and pence when comparing prices. Count on from the price to the next coin to find change quickly.",
          },
          {
            heading: "Time and measures",
            body: "Read o'clock, half past, quarter past and quarter to on analogue clocks; digital time shows 24-hour format too. Measure length in cm/m, mass in g/kg, capacity in ml/l. Choose sensible units — a pencil in cm, a bag of flour in kg, a drink bottle in ml.",
          },
        ],
        keyFormulas: [
          { name: "Money", statement: "£1 = 100p; change = paid − price" },
          { name: "Time", statement: "quarter past = :15; half past = :30; quarter to = :45" },
        ],
        workedExample: {
          problem: "A book costs £2.50 and you pay with £5. What is the change?",
          solution: "£5.00 − £2.50 = £2.50 change.",
        },
      },
      questions: [
        {
          id: "cipm-u1-mt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many pence are in £1?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10p" }, { id: "b", text: "50p" }, { id: "c", text: "100p" }, { id: "d", text: "1000p" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pound", statement: "£1 = 100p." }],
            steps: [{ reasoning: "One pound is 100 pence.", marks: 1, markCode: "A" }],
            finalAnswer: "100p",
          },
        },
        {
          id: "cipm-u1-mt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The clock shows the long hand on 3 and the short hand just past 4. What time is it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter past", statement: "Long hand on 3 = 15 minutes." }],
            steps: [
              { reasoning: "Long hand on 3 = 15 minutes past.", marks: 1, markCode: "M" },
              { reasoning: "Answer: quarter past 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quarter past 4",
          },
        },
        {
          id: "cipm-u1-mt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You buy a pencil for 35p and an eraser for 20p, paying with £1. How much change?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "Total cost then subtract from payment." }],
            steps: [
              { reasoning: "Total = 35 + 20 = 55p = £0.55.", marks: 1, markCode: "M" },
              { reasoning: "Change = £1.00 − £0.55 = £0.45 = 45p.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 45p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45p",
          },
        },
        {
          id: "cipm-u1-mt-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Which unit fits each: (a) length of a classroom, (b) mass of a strawberry, (c) capacity of a water bottle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sensible units", statement: "Match unit size to object size." }],
            steps: [
              { reasoning: "(a) metres.", marks: 1, markCode: "M" },
              { reasoning: "(b) grams.", marks: 1, markCode: "M" },
              { reasoning: "(c) millilitres (or litres for large bottle).", marks: 1, markCode: "M" },
              { reasoning: "All three correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "m, g, ml",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-mt-notes",
      title: "Money, time, measures — revision notes",
      summary: "£1=100p; quarter past=:15, quarter to=:45; choose sensible units.",
      sections: [
        { heading: "Money", body: "Add for total, subtract for change; convert £↔p when needed." },
        { heading: "Measures", body: "Length cm/m, mass g/kg, capacity ml/l — match unit to object." },
      ],
    },
  ],
};
