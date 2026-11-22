import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edpm3-u3-lesson-3-3",
  code: "3-3",
  title: "Time, Money and Data",
  goal: "I CAN tell time to the minute, solve money problems and interpret bar charts and pictograms.",
  standards: ["Year 3 Time, money and statistics"],
  vocabulary: [
    {
      term: "Seconds",
      definition: "The smallest common unit of time — 60 seconds = 1 minute.",
    },
    { term: "Minutes", definition: "60 minutes = 1 hour." },
    {
      term: "Elapsed time",
      definition: "How much time has passed between two times.",
    },
    {
      term: "Change",
      definition: "Money returned when you pay more than the cost.",
    },
    { term: "Bar chart", definition: "A graph using bars to show quantities." },
    {
      term: "Scale",
      definition: "The numbers on an axis that show what each unit represents.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u3-time-money",
      title: "Time and money",
      skill:
        "Tell time to the minute, calculate elapsed time, and solve money problems with change.",
      lesson: {
        sections: [
          {
            heading: "Telling time to the minute",
            body: "The **minute hand** (long) counts minutes; each number = 5 minutes. The **hour hand** (short) moves slowly. At 3:20, the hour hand is just past 3 and the minute hand points at 4 (20 minutes). To read: hour hand first, then minutes.",
          },
          {
            heading: "Elapsed time",
            body: "'The film starts at 2:15 and lasts 40 minutes. When does it end?' Count on: 2:15 + 45 min = 3:00, so 40 min ends at 2:55. Or count back from a known point. Timetables and clocks help.",
          },
          {
            heading: "Money problems",
            body: "Add prices to find totals. Subtract to find change. 'A book costs £4.75, you pay £5 — change = £0.25.' Remember £1 = 100p. Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2.",
          },
        ],
        keyFormulas: [
          {
            name: "Time",
            statement:
              "60 s = 1 min; 60 min = 1 h; minute hand: each number = 5 min",
          },
          {
            name: "Money",
            statement: "£1 = 100p; change = amount paid − cost",
          },
        ],
        workedExample: {
          problem:
            "A bus leaves at 10:45 and the journey takes 35 minutes. When does it arrive?",
          solution:
            "10:45 + 15 min = 11:00, then +20 min = 11:20. Arrival: 11:20.",
        },
      },
      questions: [
        {
          id: "edpm3-u3-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many minutes are there in 1 hour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "60" },
              { id: "b", text: "100" },
              { id: "c", text: "30" },
              { id: "d", text: "24" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time units",
                statement: "60 minutes = 1 hour.",
              },
            ],
            steps: [
              { reasoning: "1 hour = 60 minutes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 60",
            commonErrors: ["Confusing with 24 hours in a day."],
          },
        },
        {
          id: "edpm3-u3-tm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A clock shows the minute hand on the 8. How many minutes past the hour is it?",
          response: {
            type: "numeric",
            parts: [{ label: "Minutes", answer: 40, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Clock reading",
                statement: "Each number = 5 minutes; 8 × 5 = 40.",
              },
            ],
            steps: [
              {
                reasoning: "Minute hand on 8 means 8 × 5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "8 × 5 = 40 minutes.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 40 minutes past.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "40",
            commonErrors: ["Reading the number as 8 minutes instead of 8 × 5."],
          },
        },
        {
          id: "edpm3-u3-tm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "School starts at 9:00 and ends at 3:30. How long is the school day?",
          response: {
            type: "numeric",
            parts: [
              { label: "Hours", answer: 6.5, tolerance: 0.1 },
              { label: "Or minutes", answer: 390, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elapsed time",
                statement: "9:00 → 3:00 = 6 h; +30 min = 6 h 30 min = 390 min.",
              },
            ],
            steps: [
              { reasoning: "9:00 to 3:00 = 6 hours.", marks: 1, markCode: "M" },
              {
                reasoning: "Plus 30 minutes = 6 h 30 min.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In hours: 6.5; in minutes: 390.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both forms acceptable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 hours 30 minutes (390 minutes)",
            commonErrors: [
              "Calculating 3:30 − 9:00 incorrectly across midday.",
            ],
          },
        },
        {
          id: "edpm3-u3-tm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You buy a pencil for 45p and a rubber for 30p. You pay with a £1 coin.",
          parts: [
            {
              label: "a",
              prompt: "How much do the items cost altogether?",
              marks: 3,
            },
            { label: "b", prompt: "How much change should you get?", marks: 3 },
            {
              label: "c",
              prompt:
                "If you buy two pencils instead, how much change from £1?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money problems",
                statement:
                  "Add costs; change = paid − cost; convert £1 = 100p.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "45p + 30p = 75p.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 75p.", marks: 1, markCode: "A" },
              {
                part: "a",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "£1 = 100p; 100 − 75 = 25p.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 25p change.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Conversion shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Two pencils = 90p.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "100 − 90 = 10p change.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answers: 90p cost, 10p change.",
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
            finalAnswer: "75p; 25p; 90p cost / 10p change",
            commonErrors: ["Subtracting pence from £1 without converting."],
          },
        },
      ],
    },
    {
      id: "edpm3-u3-data",
      title: "Reading charts and pictograms",
      skill: "Interpret bar charts and pictograms, including using scales.",
      lesson: {
        sections: [
          {
            heading: "Bar charts",
            body: "Bar charts show data with bars. Read the **scale** on the vertical axis — each grid line might be worth 2, 5 or 10 items. The height of the bar shows the value. Taller bar = more. Read axis labels to know what is being measured.",
          },
          {
            heading: "Pictograms",
            body: "Pictograms use pictures or symbols. A **key** tells you what each symbol represents — e.g. 🍎 = 2 children. Count symbols and multiply by the key value. Half a symbol = half the value.",
          },
          {
            heading: "Answering questions from charts",
            body: "Find the tallest/shortest bar, compare two bars (subtract), find totals (add), and spot patterns ('Which is most popular?'). Always check the scale — a bar reaching the 3rd line might mean 15 if scale is 5.",
          },
        ],
        keyFormulas: [
          {
            name: "Bar chart",
            statement: "height = value; read scale on axis",
          },
          { name: "Pictogram", statement: "symbols × key value = quantity" },
        ],
        workedExample: {
          problem:
            "A pictogram shows 4 apples and the key says each apple = 3 children. How many children like apples?",
          solution: "4 × 3 = 12 children.",
        },
      },
      questions: [
        {
          id: "edpm3-u3-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a pictogram, what does the key tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What each symbol represents" },
              { id: "b", text: "The colours" },
              { id: "c", text: "The total" },
              { id: "d", text: "The title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pictogram key",
                statement: "Key explains symbol values.",
              },
            ],
            steps: [
              {
                reasoning: "Key tells what each picture stands for.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** What each symbol represents",
            commonErrors: ["Thinking key is just decoration."],
          },
        },
        {
          id: "edpm3-u3-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bar chart shows pets owned: dogs bar reaches 8, cats bar reaches 5. How many more dogs than cats?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading bar charts",
                statement: "8 − 5 = 3.",
              },
            ],
            steps: [
              {
                reasoning: "Read values: 8 dogs, 5 cats.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "8 − 5 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 more dogs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "edpm3-u3-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pictogram uses ⭐ where each star = 4 votes. There are 6 stars and 2 half-stars. How many votes total?",
          response: {
            type: "numeric",
            parts: [{ label: "Votes", answer: 28, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pictogram scale",
                statement: "6 × 4 + 2 × 2 = 24 + 4 = 28.",
              },
            ],
            steps: [
              {
                reasoning: "6 full stars = 6 × 4 = 24.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "2 half-stars = 2 × 2 = 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "24 + 4 = 28 votes.", marks: 1, markCode: "A" },
              { reasoning: "Half symbol handled.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
            commonErrors: ["Ignoring the half-stars or counting them as full."],
          },
        },
        {
          id: "edpm3-u3-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bar chart shows favourite fruits: apple 12, banana 8, orange 10, grape 6. Each grid line = 2 fruits.",
          parts: [
            {
              label: "a",
              prompt: "Which fruit is most popular and which is least?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many children were surveyed in total?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If 4 more children choose apple, what is the new total for apple?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpreting charts",
                statement: "Read scale; compare bars; add for totals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Most: apple (12); least: grape (6).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct identification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both answers given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "12 + 8 + 10 + 6 = 36.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 36 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All four added.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "12 + 4 = 16.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer: 16.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Context understood.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Apple most, grape least; 36; 16",
            commonErrors: ["Misreading the scale — bars show values already."],
          },
        },
      ],
    },
  ],
};
