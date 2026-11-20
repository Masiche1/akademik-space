import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cipm-u1-lesson-1-13",
  code: "1-13",
  title: "Stage 2 — Money and Time",
  goal: "I CAN recognise coins and notes, find totals and give change, and tell the time to the hour, half hour and quarter hour.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Nm, 2Gt"],
  stage: 2,
  vocabulary: [
    { term: "Coin", definition: "A small metal money piece: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2." },
    { term: "Note", definition: "Paper money: £5, £10, £20." },
    { term: "Total", definition: "The sum of amounts added together." },
    { term: "Change", definition: "Money returned when you pay more than the cost." },
    { term: "Quarter past", definition: "15 minutes after the hour — the minute hand on 3." },
    { term: "Quarter to", definition: "15 minutes before the next hour — minute hand on 9." },
  ],
  concepts: [
    {
      id: "cipm-u1-s13-money-time",
      title: "Money totals, change and telling the time",
      skill: "Add coin and note values, calculate change and read analogue clocks at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Money",
            body: "Know the values: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2 coins and £5, £10 notes. To find a total, add the values — £1 + 50p + 20p = £1.70. Change = amount paid − cost: pay £2 for a 70p item, change is £1.30. Count up from the cost to the amount paid as a check.",
          },
          {
            heading: "Time",
            body: "The short hand shows the hour, the long hand shows minutes. o'clock: long hand on 12. Half past: long hand on 6. Quarter past: on 3. Quarter to: on 9. Each number on the clock is 5 minutes. Sequence daily events: wake up, school, lunch, bed.",
          },
        ],
        keyFormulas: [
          { name: "Total", statement: "add all coin/note values" },
          { name: "Change", statement: "amount paid − cost" },
          { name: "Clock", statement: "short hand = hour, long hand = minutes; each number = 5 min" },
        ],
        workedExample: {
          problem: "A pencil costs 45p. You pay with a £1 coin. What is the change? Then write the time when the long hand is on 6 and the short hand is between 3 and 4.",
          solution: "Change = 100p − 45p = 55p. Long hand on 6 = half past; short hand between 3 and 4 → 3:30 (half past three).",
        },
      },
      questions: [
        {
          id: "cipm-u1-mny-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the total value of a 20p and a 5p coin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "25p" }, { id: "b", text: "15p" }, { id: "c", text: "205p" }, { id: "d", text: "30p" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Total", statement: "Add coin values." }],
            steps: [{ reasoning: "20p + 5p = 25p.", marks: 1, markCode: "M" }],
            finalAnswer: "25p",
          },
        },
        {
          id: "cipm-u1-mny-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The long hand points to 12 and the short hand points to 7. What time is it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Clock reading", statement: "Long hand on 12 = o'clock." }],
            steps: [
              { reasoning: "Long hand on 12 means o'clock.", marks: 1, markCode: "M" },
              { reasoning: "Short hand on 7 → 7 o'clock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 o'clock",
          },
        },
        {
          id: "cipm-u1-mny-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An apple costs 30p. You pay with a 50p coin. How much change do you get? Show how you could count up to check.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "paid − cost; or count up." }],
            steps: [
              { reasoning: "50p − 30p = 20p change.", marks: 1, markCode: "M" },
              { reasoning: "Count up: 30p + 20p = 50p. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20p",
          },
        },
        {
          id: "cipm-u1-mny-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "At the school shop: (a) Write the value of a £1 coin and a 20p coin. (b) A drink costs 60p and a bun costs 35p — find the total. (c) You pay with a £2 coin — how much change? (d) The clock shows the long hand on 9 and the short hand between 4 and 5 — write the time in words. (e) Name two events in a school day that happen before lunch.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money and time skills", statement: "Coin values, totals, change, clock reading, sequencing." }],
            steps: [
              { reasoning: "(a) £1 coin = 100p; 20p coin = 20p.", marks: 1, markCode: "M" },
              { reasoning: "(b) 60p + 35p = 95p.", marks: 1, markCode: "M" },
              { reasoning: "(c) 200p − 95p = 105p = £1.05.", marks: 1, markCode: "M" },
              { reasoning: "(d) Long hand on 9 = quarter to; between 4 and 5 → quarter to five.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. registration and morning lessons before lunch.", marks: 1, markCode: "M" },
              { reasoning: "Correct units used throughout (p/£).", marks: 1, markCode: "M" },
              { reasoning: "Change calculated as paid − total.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100p, 20p (b) 95p (c) £1.05 (d) quarter to five (e) registration/morning lessons",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-mt-notes",
      title: "Money and time — notes",
      summary: "Total = add values; change = paid − cost. Long hand: 12=o'clock, 6=half, 3=quarter past, 9=quarter to.",
      sections: [
        { heading: "Money", body: "Know every coin/note value. Count up from cost to payment to find change." },
        { heading: "Time", body: "Each clock number = 5 minutes. Quarter to = 15 min before next hour." },
      ],
    },
  ],
};
