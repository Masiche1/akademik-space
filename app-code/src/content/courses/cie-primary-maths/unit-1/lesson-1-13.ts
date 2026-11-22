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
            { id: "a", text: "30p" },
            { id: "b", text: "15p" },
            { id: "c", text: "25p" },
            { id: "d", text: "205p" },
          ], correctChoiceId: "c" },
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
        {
          id: "cipm-u1-mny-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the total value of a 50p, a 20p and a 5p coin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "255p" },
            { id: "b", text: "70p" },
            { id: "c", text: "75p" },
            { id: "d", text: "85p" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Total", statement: "Add coin values." }],
            steps: [{ reasoning: "50p + 20p + 5p = 75p.", marks: 1, markCode: "M" }],
            finalAnswer: "75p",
          },
        },
        {
          id: "cipm-u1-mny-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the total value of a £1 coin, a 20p coin and a 10p coin. Give your answer in pence.",
          response: { type: "numeric", parts: [{ label: "a", answer: 130, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Coin values", statement: "£1 = 100p." }],
            steps: [
              { reasoning: "£1 = 100p, so 100p + 20p + 10p.", marks: 1, markCode: "M" },
              { reasoning: "Total = 130p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "130p",
          },
        },
        {
          id: "cipm-u1-mny-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The long hand points to 3 and the short hand is between 4 and 5. What time is it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "quarter past four" },
            { id: "b", text: "quarter to four" },
            { id: "c", text: "quarter past three" },
            { id: "d", text: "half past four" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Clock reading", statement: "Long hand on 3 = quarter past." }],
            steps: [{ reasoning: "Long hand on 3 = 15 minutes past; short hand past 4 → quarter past four.", marks: 1, markCode: "A" }],
            finalAnswer: "quarter past four",
          },
        },
        {
          id: "cipm-u1-mny-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sticker costs 65p. You pay with a £1 coin. How much change do you get?",
          response: { type: "numeric", parts: [{ label: "a", answer: 35, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "paid − cost." }],
            steps: [
              { reasoning: "£1 = 100p; 100p − 65p = 35p.", marks: 1, markCode: "M" },
              { reasoning: "Change = 35p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35p",
          },
        },
        {
          id: "cipm-u1-mny-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these coins is worth the most?",
          response: { type: "mcq", choices: [
            { id: "a", text: "20p" },
            { id: "b", text: "£1" },
            { id: "c", text: "50p" },
            { id: "d", text: "10p" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coin values", statement: "Know each coin's value." }],
            steps: [{ reasoning: "£1 = 100p, more than 50p, 20p and 10p.", marks: 1, markCode: "A" }],
            finalAnswer: "£1",
          },
        },
        {
          id: "cipm-u1-mny-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "At the tuck shop: (a) A sandwich costs 45p and a juice costs 30p — find the total. (b) You pay with a £1 coin — how much change? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money totals and change", statement: "Add values; paid − total." }],
            steps: [
              { reasoning: "(a) 45p + 30p = 75p.", marks: 1, markCode: "M" },
              { reasoning: "(b) 100p − 75p = 25p change.", marks: 1, markCode: "M" },
              { reasoning: "Check by counting up: 75p + 25p = 100p. ✓", marks: 1, markCode: "M" },
              { reasoning: "All answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 75p (b) 25p",
          },
        },
        {
          id: "cipm-u1-mny-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "When the long hand points to 6 on a clock, how many minutes past the hour is it?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30, unit: "minutes" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Clock minutes", statement: "Each number = 5 minutes; 6 × 5 = 30." }],
            steps: [
              { reasoning: "Long hand on 6 = half past = 30 minutes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 minutes",
          },
        },
        {
          id: "cipm-u1-mny-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A toy costs £1.35. You pay with a £2 coin. How much change do you get?",
          response: { type: "mcq", choices: [
            { id: "a", text: "£0.35" },
            { id: "b", text: "£1.65" },
            { id: "c", text: "£0.65" },
            { id: "d", text: "£0.75" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Change", statement: "200p − 135p = 65p = £0.65." }],
            steps: [{ reasoning: "200p − 135p = 65p, written as £0.65.", marks: 1, markCode: "A" }],
            finalAnswer: "£0.65",
          },
        },
        {
          id: "cipm-u1-mny-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "(a) Write the value of a £2 coin in pence. (b) A book costs £1.80 — how much change from a £2 coin? (c) The long hand points to 9 and the short hand is between 7 and 8 — write the time in words. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money and time", statement: "Coin values, change, quarter to." }],
            steps: [
              { reasoning: "(a) £2 = 200p.", marks: 1, markCode: "M" },
              { reasoning: "(b) 200p − 180p = 20p change.", marks: 1, markCode: "M" },
              { reasoning: "(c) Long hand on 9 = quarter to; between 7 and 8 → quarter to eight.", marks: 1, markCode: "M" },
              { reasoning: "Correct units used (p or £ consistently).", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 200p (b) 20p (c) quarter to eight",
          },
        },
        {
          id: "cipm-u1-mny-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which position of the long hand shows 'quarter to' the hour?",
          response: { type: "mcq", choices: [
            { id: "a", text: "on 6" },
            { id: "b", text: "on 9" },
            { id: "c", text: "on 12" },
            { id: "d", text: "on 3" },
          ], correctChoiceIb: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quarter to", statement: "Long hand on 9 = 15 minutes before next hour." }],
            steps: [{ reasoning: "Quarter to: long hand on 9.", marks: 1, markCode: "A" }],
            finalAnswer: "on 9",
          },
        },
        {
          id: "cipm-u1-mny-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the total value of three 20p coins and two 10p coins. Give your answer in pence.",
          response: { type: "numeric", parts: [{ label: "a", answer: 80, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Money totals", statement: "Multiply repeated coins then add." }],
            steps: [
              { reasoning: "3 × 20p = 60p; 2 × 10p = 20p.", marks: 1, markCode: "M" },
              { reasoning: "60p + 20p = 80p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80p",
          },
        },
        {
          id: "cipm-u1-mny-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A pencil costs 28p and a rubber costs 12p — find the total cost. (b) You pay with a 50p coin — how much change? (c) School starts at quarter past nine. Write this time with the long hand position. (d) How many minutes is it from half past one to quarter to two? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money and time skills", statement: "Totals, change, clock reading, counting minutes." }],
            steps: [
              { reasoning: "(a) 28p + 12p = 40p.", marks: 1, markCode: "M" },
              { reasoning: "(b) 50p − 40p = 10p change.", marks: 1, markCode: "M" },
              { reasoning: "(c) Quarter past nine: long hand on 3, short hand past 9.", marks: 1, markCode: "M" },
              { reasoning: "(d) Half past one = 1:30; quarter to two = 1:45 → 15 minutes.", marks: 1, markCode: "M" },
              { reasoning: "Units and working shown correctly.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40p (b) 10p (c) long hand on 3 (d) 15 minutes",
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
