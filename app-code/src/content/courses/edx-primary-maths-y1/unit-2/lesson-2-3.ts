import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edpm1-u2-lesson-2-3",
  code: "2-3",
  title: "Patterns, Sequences and Days of the Week",
  goal: "I CAN recognise and continue patterns, order the days of the week and months of the year.",
  standards: ["Year 1 Patterns", "Time"],
  vocabulary: [
    { term: "Pattern", definition: "Something that repeats in a regular way." },
    {
      term: "Sequence",
      definition: "A list of numbers or shapes that follows a rule.",
    },
    {
      term: "Repeat",
      definition: "Say or do something again, e.g. red, blue, red, blue.",
    },
    { term: "Rule", definition: "The pattern that tells you what comes next." },
    {
      term: "Day",
      definition:
        "One of the seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
    },
    { term: "Month", definition: "One of the twelve parts of the year." },
  ],
  concepts: [
    {
      id: "edpm1-u2-patterns",
      title: "Repeating patterns and sequences",
      skill: "Continue repeating patterns and simple number sequences.",
      lesson: {
        sections: [
          {
            heading: "Repeating patterns",
            body: "A repeating pattern goes back to the start again and again: 🔴🔵🔴🔵🔴🔵 or A B B A B B A B B. To continue a pattern, find the part that repeats (the 'chunk') and repeat it. In 🔴🔵🔴🔵, the chunk is 🔴🔵 — two items. The next item after 🔵 is 🔴.",
          },
          {
            heading: "Growing number sequences",
            body: "Number sequences follow a rule. Counting in 2s: 2, 4, 6, 8, 10 — each number is 2 more than the last. Counting in 5s: 5, 10, 15, 20. To find the next number, add the same amount each time. Look at the gap between numbers to find the rule.",
          },
          {
            heading: "Shape and colour patterns",
            body: "Patterns can use shapes, colours or numbers. For a shape pattern like ⬤▲⬤▲, continue with ⬤▲. For a colour pattern like red, red, blue, the chunk is red-red-blue — repeat that whole chunk. Always identify the repeating unit first.",
          },
        ],
        keyFormulas: [
          {
            name: "Repeating pattern",
            statement: "Find the chunk that repeats, then repeat it",
          },
          {
            name: "Number sequence",
            statement: "Each term = previous term + constant step",
          },
        ],
        workedExample: {
          problem: "Continue the pattern: 3, 6, 9, 12, __",
          solution:
            "Each number is 3 more than the last (3, +3, 6, +3, 9, +3, 12). Next: 12 + 3 = 15.",
        },
      },
      questions: [
        {
          id: "edpm1-u2-pat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Continue the pattern: red, blue, red, blue, __",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "red" },
              { id: "b", text: "blue" },
              { id: "c", text: "green" },
              { id: "d", text: "yellow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeating pattern",
                statement: "The chunk is red-blue; next repeats red.",
              },
            ],
            steps: [
              {
                reasoning: "Pattern repeats red, blue — after blue comes red.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** red",
            commonErrors: ["Saying blue — not seeing the repeat."],
          },
        },
        {
          id: "edpm1-u2-pat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Continue the sequence: 2, 4, 6, 8, __, __",
          response: {
            type: "numeric",
            parts: [
              { label: "First missing number", answer: 10, tolerance: 0 },
              { label: "Second missing number", answer: 12, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting in 2s",
                statement: "Each number is 2 more than the last.",
              },
            ],
            steps: [
              { reasoning: "8 + 2 = 10.", marks: 1, markCode: "M" },
              { reasoning: "10 + 2 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10, 12",
            commonErrors: ["Continuing with +1 instead of +2."],
          },
        },
        {
          id: "edpm1-u2-pat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pattern goes: star, moon, star, star, moon, star, star, moon, ... What are the next two shapes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Finding the chunk",
                statement: "The repeating chunk is star-star-moon.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the chunk: ⭐⭐🌙 (star, star, moon).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "After 🌙 comes ⭐ again.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Next two: star, star.", marks: 1, markCode: "A" },
              {
                reasoning: "Reasoning about the repeat shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "star, star",
            commonErrors: ["Thinking the pattern is just star-moon."],
          },
        },
        {
          id: "edpm1-u2-pat-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Your class makes a pattern with cubes: red, blue, blue, red, blue, blue, ...",
          parts: [
            {
              label: "a",
              prompt: "What is the repeating chunk of this pattern?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What colour is the 7th cube? Explain how you know.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Write the next three cubes in the pattern.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeating patterns",
                statement:
                  "Chunk = red-blue-blue; position = count through chunk.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Chunk: red, blue, blue (3 cubes).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "The pattern repeats this chunk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "7th cube: count through chunks — positions 1-3, 4-6, 7 = start of 3rd chunk = red.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "7 = 3 + 3 + 1, so it's the first in the chunk = red.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: red.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "After the given pattern continues: red, blue, blue (the next chunk).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Next three: red, blue, blue.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Pattern continues correctly.",
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
            finalAnswer: "red-blue-blue; 7th is red; red, blue, blue",
            commonErrors: ["Miscounting the position within the chunk."],
          },
        },
      ],
    },
    {
      id: "edpm1-u2-calendar",
      title: "Days of the week and months",
      skill:
        "Order the days of the week and months of the year and use them to talk about time.",
      lesson: {
        sections: [
          {
            heading: "Days of the week",
            body: "There are 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. They repeat in order every week. Use them to talk about when things happen: 'We have PE on Tuesday and Friday.' Yesterday is the day before today; tomorrow is the day after.",
          },
          {
            heading: "Months of the year",
            body: "There are 12 months: January, February, March, April, May, June, July, August, September, October, November, December. They repeat in order every year. Use them for birthdays, holidays and seasons: December is winter, June is summer (in the northern hemisphere).",
          },
          {
            heading: "Today, yesterday and tomorrow",
            body: "Today is the current day. Yesterday is the day that came before today. Tomorrow is the day that comes after today. If today is Wednesday, yesterday was Tuesday and tomorrow is Thursday. Days of the week help us plan and remember.",
          },
        ],
        keyFormulas: [
          {
            name: "Days",
            statement:
              "Mon, Tue, Wed, Thu, Fri, Sat, Sun — 7 days, repeat weekly",
          },
          {
            name: "Months",
            statement: "Jan to Dec — 12 months, repeat yearly",
          },
        ],
        workedExample: {
          problem:
            "Today is Friday. What day was yesterday? What day is tomorrow?",
          solution:
            "Yesterday = Thursday, tomorrow = Saturday. Days go in order: ... Wed, Thu, Fri, Sat, Sun ...",
        },
      },
      questions: [
        {
          id: "edpm1-u2-cal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which day comes after Wednesday?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tuesday" },
              { id: "b", text: "Thursday" },
              { id: "c", text: "Friday" },
              { id: "d", text: "Monday" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Days of week",
                statement: "Order: Mon, Tue, Wed, Thu, Fri, Sat, Sun.",
              },
            ],
            steps: [
              {
                reasoning: "After Wednesday comes Thursday.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Thursday",
            commonErrors: ["Saying Tuesday — reversing the order."],
          },
        },
        {
          id: "edpm1-u2-cal-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Today is Monday. What day was yesterday?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Yesterday",
                statement: "Yesterday = day before today.",
              },
            ],
            steps: [
              {
                reasoning: "Yesterday = day before Monday = Sunday.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Days wrap around: Sunday comes before Monday.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: Sunday.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sunday",
            commonErrors: [
              "Saying Tuesday — not realising the week wraps around.",
            ],
          },
        },
        {
          id: "edpm1-u2-cal-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which month comes after June?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Months",
                statement:
                  "Order: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec.",
              },
            ],
            steps: [
              { reasoning: "After June comes July.", marks: 1, markCode: "B" },
              {
                reasoning: "Months repeat in order every year.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Answer: July.", marks: 1, markCode: "A" },
              { reasoning: "Clear answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "July",
            commonErrors: ["Confusing with days of the week."],
          },
        },
        {
          id: "edpm1-u2-cal-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Your birthday is in August. School starts in September.",
          parts: [
            {
              label: "a",
              prompt: "Which month comes before August?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How many months are there between August and September?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If today is the last day of August, what month is tomorrow?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Months in order",
                statement: "Months repeat Jan-Dec; count carefully.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Before August is July.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Answer: July.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Between Aug and Sep: counting months strictly between = 0.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Or interpret as 'months apart' = 1 (Sep is 1 after Aug).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Accept 0 (strictly between) or 1 (difference).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Last day of Aug → next day is 1st of September.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Month changes at month boundary.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: September.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning about month boundary.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "July; 0 or 1; September",
            commonErrors: ["Saying August again — not crossing the boundary."],
          },
        },
      ],
    },
  ],
};
