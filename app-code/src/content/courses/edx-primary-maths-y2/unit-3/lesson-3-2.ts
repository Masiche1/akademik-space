import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edpm2-u3-lesson-3-2",
  code: "3-2",
  title: "Telling the Time and Using Money",
  goal: "I CAN tell the time to o'clock, half past, quarter past and quarter to, and use coins and notes.",
  standards: ["Year 2 Time", "Year 2 Money"],
  vocabulary: [
    { term: "O'clock", definition: "When the minute hand points to 12." },
    {
      term: "Half past",
      definition:
        "When the minute hand points to 6 — 30 minutes after the hour.",
    },
    {
      term: "Quarter past",
      definition:
        "When the minute hand points to 3 — 15 minutes after the hour.",
    },
    {
      term: "Quarter to",
      definition: "15 minutes before the next hour — minute hand on 9.",
    },
    {
      term: "Coin",
      definition:
        "Money: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2 coins and £5, £10 notes.",
    },
    {
      term: "Change",
      definition: "Money returned when you pay more than the price.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u3-time",
      title: "Reading the clock",
      skill:
        "Tell the time to o'clock, half past, quarter past and quarter to.",
      lesson: {
        sections: [
          {
            heading: "The clock face",
            body: "The clock has 12 numbers. The **minute hand** (long) shows minutes; the **hour hand** (short) shows hours. Minute hand on 12 = o'clock. On 3 = quarter past. On 6 = half past. On 9 = quarter to the next hour.",
          },
          {
            heading: "Quarter past and quarter to",
            body: "**Quarter past** = 15 minutes after the hour: minute hand on 3, hour hand just past the hour number. **Quarter to** = 15 minutes before the next hour: minute hand on 9, hour hand nearly at the next hour. 'Quarter to 5' means 4:45.",
          },
          {
            heading: "Reading both hands",
            body: "Always check the minute hand first to know which part of the hour, then the hour hand. At half past 7, the hour hand is between 7 and 8. At quarter to 3, the hour hand is nearly at 3 (it is 2:45).",
          },
        ],
        keyFormulas: [
          {
            name: "Minute hand",
            statement: "12=o'clock, 3=quarter past, 6=half past, 9=quarter to",
          },
          {
            name: "Hour hand",
            statement:
              "Points to current hour; moves gradually between numbers",
          },
        ],
        workedExample: {
          problem:
            "The minute hand points to 9 and the hour hand is nearly at 6. What time is it?",
          solution:
            "Minute hand on 9 = quarter to. Hour hand nearly at 6 → quarter to 6 (5:45).",
        },
      },
      questions: [
        {
          id: "edpm2-u3-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The minute hand points to 3 and the hour hand is just past 4. What time is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quarter to 4" },
              { id: "b", text: "Half past 4" },
              { id: "c", text: "4 o'clock" },
              { id: "d", text: "Quarter past 4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quarter past",
                statement: "Minute hand on 3 = 15 minutes after hour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Minute hand on 3, hour just past 4 → quarter past 4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Quarter past 4",
            commonErrors: ["Reading hour hand as 3 — it's just past 4."],
          },
        },
        {
          id: "edpm2-u3-time-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What time is it when the minute hand points to 9 and the hour hand is between 7 and 8, closer to 8?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quarter to",
                statement: "Minute hand on 9 = 15 minutes before next hour.",
              },
            ],
            steps: [
              {
                reasoning: "Minute hand on 9 → quarter to.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hour hand closer to 8 → the next hour is 8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: quarter to 8 (7:45).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Quarter to 8",
            commonErrors: ["Saying quarter to 7 — wrong hour hand reading."],
          },
        },
        {
          id: "edpm2-u3-time-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "School finishes at quarter to 3. What time does school finish?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quarter to in context",
                statement: "Quarter to 3 = 15 minutes before 3 = 2:45.",
              },
            ],
            steps: [
              {
                reasoning: "Quarter to 3 = 15 minutes before 3 o'clock.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "15 minutes before 3 = 2:45.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2:45.", marks: 1, markCode: "A" },
              {
                reasoning: "Clock position described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2:45 (quarter to 3)",
            commonErrors: [
              "Saying 3:15 — confusing quarter to with quarter past.",
            ],
          },
        },
        {
          id: "edpm2-u3-time-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A film starts at half past 6 and lasts 1 hour 30 minutes.",
          parts: [
            { label: "a", prompt: "What time does the film start?", marks: 2 },
            { label: "b", prompt: "What time does the film finish?", marks: 4 },
            { label: "c", prompt: "How many minutes is the film?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time calculation",
                statement: "Half past 6 = 6:30; add 1h30m = 8:00; 90 minutes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Half past 6 = 6:30.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Answer: 6:30.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "6:30 + 1 hour = 7:30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "7:30 + 30 minutes = 8:00.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 8:00.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "1 hour 30 minutes = 60 + 30 = 90 minutes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 90 minutes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conversion correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "6:30; 8:00; 90 minutes",
            commonErrors: ["Adding 1:30 to 6:30 incorrectly."],
          },
        },
      ],
    },
    {
      id: "edpm2-u3-money",
      title: "Using money",
      skill:
        "Use coins and notes to make amounts, find totals and give change.",
      lesson: {
        sections: [
          {
            heading: "Coins and notes",
            body: "Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2. Notes: £5, £10, £20. To make an amount, count up: 35p = 20p + 10p + 5p, or 20p + 10p + 2p + 2p + 1p. The fewest coins is usually best.",
          },
          {
            heading: "Totals and change",
            body: "To find a total, add the prices: £2 + £3 = £5. To find **change**, subtract the price from what you paid: pay £5 for a £3 item → £5 − £3 = £2 change. Count up from the price to the paid amount as a check.",
          },
          {
            heading: "Money problems",
            body: "'How much more' = subtract. 'How much altogether' = add. Always check the answer makes sense — change can't be negative, and totals should match the coins/notes available.",
          },
        ],
        keyFormulas: [
          {
            name: "Making amounts",
            statement: "Count up coins to reach the total",
          },
          { name: "Change", statement: "paid − price = change" },
        ],
        workedExample: {
          problem: "You pay £5 for a £3.50 toy. What change do you get?",
          solution: "£5.00 − £3.50 = £1.50. Check: £3.50 + £1.50 = £5.00.",
        },
      },
      questions: [
        {
          id: "edpm2-u3-money-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which coins make 20p?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20p" },
              { id: "b", text: "10p + 10p" },
              { id: "c", text: "5p + 5p + 5p + 5p" },
              { id: "d", text: "All of these" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Making amounts",
                statement: "Multiple combinations can make 20p.",
              },
            ],
            steps: [
              {
                reasoning: "All three options make 20p.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** All of these",
            commonErrors: ["Thinking only one combination works."],
          },
        },
        {
          id: "edpm2-u3-money-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pencil costs 30p. You pay with a £1 coin. How much change?",
          response: {
            type: "numeric",
            parts: [{ label: "Change", answer: 70, tolerance: 0, unit: "p" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change",
                statement: "100p − 30p = 70p.",
              },
            ],
            steps: [
              { reasoning: "£1 = 100p.", marks: 1, markCode: "M" },
              { reasoning: "100 − 30 = 70.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 70p change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70p",
            commonErrors: ["Answering 30p — giving the price not the change."],
          },
        },
        {
          id: "edpm2-u3-money-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You buy a book for £4 and a pen for £2. How much do you pay altogether?",
          response: {
            type: "numeric",
            parts: [{ label: "Total", answer: 6, tolerance: 0, unit: "£" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money addition",
                statement: "£4 + £2 = £6.",
              },
            ],
            steps: [
              { reasoning: "Altogether → add.", marks: 1, markCode: "M" },
              { reasoning: "£4 + £2 = £6.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £6.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£6",
            commonErrors: ["Answering £2 — subtracting instead of adding."],
          },
        },
        {
          id: "edpm2-u3-money-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You have £10. You buy a game for £6.50.",
          parts: [
            { label: "a", prompt: "How much change do you get?", marks: 4 },
            {
              label: "b",
              prompt:
                "You then buy sweets for £2.50. How much money do you have left?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Could you have afforded both items with £10? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money calculations",
                statement: "Change = paid − price; track remaining money.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "£10.00 − £6.50 = £3.50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Change: £3.50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £3.50.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Calculation clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "£3.50 − £2.50 = £1.00.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £1.00 left.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total cost = £6.50 + £2.50 = £9.00.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "£9.00 < £10, so yes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "£3.50; £1.00; yes (£9 < £10)",
            commonErrors: [
              "Using change £3.50 + sweets instead of subtracting for part (b).",
            ],
          },
        },
      ],
    },
  ],
};
