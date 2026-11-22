import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edpm1-u2-lesson-2-2",
  code: "2-2",
  title: "Length, Height, Time and Money",
  goal: "I CAN compare lengths and heights, tell the time to the hour and half hour, and use coins to make amounts.",
  standards: ["Year 1 Measure", "Time", "Money"],
  vocabulary: [
    { term: "Length", definition: "How long something is." },
    { term: "Height", definition: "How tall something is." },
    {
      term: "Compare",
      definition:
        "Find out which is longer, taller or heavier by measuring or lining up.",
    },
    {
      term: "O'clock",
      definition: "When the minute hand points to 12, e.g. 3 o'clock.",
    },
    {
      term: "Half past",
      definition:
        "When the minute hand points to 6, 30 minutes after the hour.",
    },
    {
      term: "Coin",
      definition:
        "Money used to buy things, e.g. 1p, 2p, 5p, 10p, 20p, 50p, £1, £2.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u2-measure",
      title: "Comparing length and height",
      skill:
        "Compare lengths and heights using direct comparison and simple non-standard units.",
      lesson: {
        sections: [
          {
            heading: "Comparing lengths",
            body: "To compare two lengths, line them up at one end — the one that sticks out further is longer. 'Longer', 'shorter', 'taller' and 'shorter' are the key words. A pencil is longer than a rubber; a ruler is longer than a pencil.",
          },
          {
            heading: "Measuring with non-standard units",
            body: "You can measure length using any repeated unit: paperclips, cubes, hand spans. Count how many units fit along the object. The number of units is the length — but the units must all be the same size and must touch end to end.",
          },
          {
            heading: "Height",
            body: "Height is how tall something is, measured from bottom to top. Compare heights by standing objects side by side or marking heights on a wall. A door is taller than a table; a giraffe is taller than a tree.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparing",
            statement: "Line up one end; the object that sticks out is longer",
          },
          {
            name: "Non-standard measure",
            statement: "Length = number of same-size units that fit end to end",
          },
        ],
        workedExample: {
          problem:
            "A pencil is 7 cubes long. A crayon is 4 cubes long. How much longer is the pencil?",
          solution:
            "7 − 4 = 3 cubes longer. Same unit (cubes) makes the comparison valid.",
        },
      },
      questions: [
        {
          id: "edpm1-u2-meas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is longer: a pencil or a rubber?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pencil" },
              { id: "b", text: "It depends on the colour" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "The rubber" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Length",
                statement: "Length is how long an object is.",
              },
            ],
            steps: [
              {
                reasoning: "A pencil is longer than a rubber.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** The pencil",
            commonErrors: ["Guessing — compare real objects."],
          },
        },
        {
          id: "edpm1-u2-meas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ribbon is 9 paperclips long. A strip of paper is 6 paperclips long. How many paperclips longer is the ribbon?",
          response: {
            type: "numeric",
            parts: [{ label: "Paperclips longer", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing with units",
                statement: "Difference = longer − shorter.",
              },
            ],
            steps: [
              {
                reasoning: "Same unit (paperclips) → subtract.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 − 6 = 3.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 3 paperclips longer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3 paperclips",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "edpm1-u2-meas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tom measures his book with cubes but leaves gaps between the cubes. He counts 10 cubes. Is his measurement correct? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-standard units",
                statement: "Units must touch end to end with no gaps.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the error: gaps between cubes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gaps mean the units don't cover the full length.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Measurement is too long / incorrect.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "No — units must touch end to end with no gaps",
            commonErrors: ["Saying it's fine because he counted carefully."],
          },
        },
        {
          id: "edpm1-u2-meas-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Five children measure the playground wall with their hands.",
          parts: [
            {
              label: "a",
              prompt:
                "Why might each child get a different number of 'hands' for the same wall?",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "How could you make the measurement fair so everyone gets the same answer?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "A ribbon is 8 cubes long and a string is 5 cubes long. How much longer is the ribbon?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fair measurement",
                statement: "Same-size units needed for fair comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Children have different-sized hands.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Non-standard units must be the same size for everyone.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Bigger hand → fewer 'hands'; smaller hand → more.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Reasoning links hand size to count.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Use same-size units (cubes, paperclips) for all.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Or use a proper ruler/standard unit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Clear method for fair measurement.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Difference = 8 − 5 = 3.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Same unit allows subtraction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 3 cubes longer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Different hand sizes; use same-size units; 3 cubes longer",
            commonErrors: ["Not realising hand size affects the count."],
          },
        },
      ],
    },
    {
      id: "edpm1-u2-time-money",
      title: "Telling the time and using money",
      skill:
        "Tell the time to the hour and half hour and use coins to make amounts up to 20p.",
      lesson: {
        sections: [
          {
            heading: "O'clock and half past",
            body: "On a clock, the short hand is the hour hand and the long hand is the minute hand. When the minute hand points to 12, it is o'clock — the hour hand tells you which hour: 3 o'clock. When the minute hand points to 6, it is half past — 30 minutes after the hour: half past 3.",
          },
          {
            heading: "Reading the time",
            body: "To tell the time: first look at the minute hand — 12 means o'clock, 6 means half past. Then look at the hour hand — whichever number it is nearest or has just passed tells the hour. At half past 4, the hour hand is between 4 and 5.",
          },
          {
            heading: "Money",
            body: "Coins come in 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2. To make an amount, count up the coins. 7p could be 5p + 2p, or 5p + 1p + 1p. To find change, count up from the price to the amount paid: a 10p sweet paid with 20p gives 10p change.",
          },
        ],
        keyFormulas: [
          { name: "O'clock", statement: "Minute hand on 12 → o'clock" },
          {
            name: "Half past",
            statement: "Minute hand on 6 → half past the hour",
          },
          {
            name: "Making amounts",
            statement: "Count up coins: e.g. 8p = 5p + 2p + 1p",
          },
        ],
        workedExample: {
          problem: "Make 13p using the fewest coins.",
          solution:
            "10p + 2p + 1p = 13p. That's 3 coins — fewer than 5p+5p+2p+1p (4 coins).",
        },
      },
      questions: [
        {
          id: "edpm1-u2-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The minute hand points to 12 and the hour hand points to 5. What time is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 o'clock" },
              { id: "b", text: "12 o'clock" },
              { id: "c", text: "Half past 5" },
              { id: "d", text: "Half past 12" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "O'clock",
                statement: "Minute hand on 12 = o'clock.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Minute hand on 12 → o'clock; hour hand on 5 → 5 o'clock.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 5 o'clock",
            commonErrors: ["Reading the minute hand instead of the hour hand."],
          },
        },
        {
          id: "edpm1-u2-tm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Make 9p using coins. Give one way.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Making amounts",
                statement: "Count up coins to reach the total.",
              },
            ],
            steps: [
              {
                reasoning: "One valid combination: 5p + 2p + 1p + 1p = 9p.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Or 5p + 1p × 4 = 9p.", marks: 1, markCode: "M" },
              { reasoning: "Total = 9p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 5p + 2p + 1p + 1p",
            commonErrors: ["Using coins that don't exist (e.g. 3p, 4p)."],
          },
        },
        {
          id: "edpm1-u2-tm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You buy a sticker for 15p and pay with a 20p coin. How much change do you get?",
          response: {
            type: "numeric",
            parts: [{ label: "Change", answer: 5, tolerance: 0, unit: "p" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change",
                statement: "Change = paid − price.",
              },
            ],
            steps: [
              { reasoning: "20 − 15 = 5.", marks: 1, markCode: "M" },
              {
                reasoning: "Count up from 15 to 20: 5p.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 5p change.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5p",
            commonErrors: ["Answering 35p — adding instead of subtracting."],
          },
        },
        {
          id: "edpm1-u2-tm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "It is half past 2 on the school clock.",
          parts: [
            {
              label: "a",
              prompt: "Where does the minute hand point at half past?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Where does the hour hand point at half past 2?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Lunch is at half past 12. How many minutes after 12 o'clock is that?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Clock reading",
                statement:
                  "Quarter past = minute hand on 3; half past = minute hand on 6 = 30 minutes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Half past = 30 minutes → minute hand on 6.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Position: pointing at the 6.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Clear description.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Hour hand between 2 and 3, closer to 3.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Half way from 2 to 3.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning about the half hour.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Half past = 30 minutes.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Minute hand on 6 = 30 minutes.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Answer: 30 minutes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Minute hand on 6; hour hand between 2 and 3; 30 minutes",
            commonErrors: [
              "Putting the hour hand exactly on 2 — it moves as minutes pass.",
            ],
          },
        },
      ],
    },
  ],
};
