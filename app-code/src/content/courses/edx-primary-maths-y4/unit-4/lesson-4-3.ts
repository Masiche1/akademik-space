import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm4-u4-lesson-4-3",
  code: "4-3",
  title: "Money, Time and Problem Solving",
  goal: "I CAN solve problems involving money, time and reasoning.",
  standards: ["Year 4 Problem Solving"],
  vocabulary: [
    {
      term: "Change",
      definition: "Money returned when you pay more than the price.",
    },
    {
      term: "Duration",
      definition: "How long something lasts, e.g. 2 hours 30 minutes.",
    },
    {
      term: "Elapsed time",
      definition: "The amount of time between two events.",
    },
    {
      term: "Estimate",
      definition: "A reasonable guess close to the exact answer.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u4-money",
      title: "Money Problems",
      skill: "Solve money problems including change, totals and comparisons.",
      lesson: {
        sections: [
          {
            heading: "Money calculations",
            body: "Always work in pence to avoid errors. £1 = 100p. To find change: convert to pence, subtract, convert back. To find total: add all prices. To compare: convert both to pence first. Remember: £2.50 = 250p, £0.75 = 75p.",
          },
          {
            heading: "Money word problems",
            body: "Read carefully: 'how much change?' = paid - cost; 'how much in total?' = sum all items; 'which is cheaper?' = compare unit prices or totals. Check if you need to include tax or delivery costs.",
          },
        ],
        keyFormulas: [
          { name: "Change", statement: "Paid - cost = change" },
          { name: "Total", statement: "Sum of all prices" },
        ],
        workedExample: {
          problem:
            "You buy 3 books at £4.50 each and pay £20. What is the change?",
          solution: "3 × 450p = 1350p = £13.50. Change = £20 - £13.50 = £6.50.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-mo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is £2.75 in pence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25p" },
              { id: "b", text: "275p" },
              { id: "c", text: "2750p" },
              { id: "d", text: "27.5p" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Money conversion",
                statement: "£1 = 100p.",
              },
            ],
            steps: [{ reasoning: "£2.75 = 275p.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 275p",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm4-u4-mo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A pen costs £1.20 and a ruler costs £0.80. What is the total?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£1.80" },
              { id: "b", text: "£2.00" },
              { id: "c", text: "£2.20" },
              { id: "d", text: "£1.60" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Money addition",
                statement: "120p + 80p = 200p = £2.00.",
              },
            ],
            steps: [
              {
                reasoning: "120 + 80 = 200p = £2.00.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** £2.00",
            commonErrors: ["Wrong addition."],
          },
        },
        {
          id: "edpm4-u4-mo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You pay £5.00 for items costing £3.75. What is the change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Change",
                statement: "500 - 375 = 125p = £1.25.",
              },
            ],
            steps: [
              {
                reasoning: "Convert: £5.00 = 500p, £3.75 = 375p.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "500 - 375 = 125p.", marks: 1, markCode: "M" },
              { reasoning: "Change = £1.25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£1.25",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm4-u4-mo-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells apples in bags of 6 for £2.40 or single apples for £0.50 each. Which is cheaper per apple? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unit price",
                statement: "Bag = 240p/6 = 40p; single = 50p.",
              },
            ],
            steps: [
              {
                reasoning: "Bag: 240p ÷ 6 = 40p per apple.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Single: 50p per apple.", marks: 1, markCode: "M" },
              {
                reasoning: "Bag is cheaper (40p < 50p).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Bag of 6 cheaper",
            commonErrors: ["Wrong comparison."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-time",
      title: "Time and Duration",
      skill: "Calculate elapsed time and solve time problems.",
      lesson: {
        sections: [
          {
            heading: "Reading and calculating time",
            body: "Time uses 24-hour clock in school or 12-hour with AM/PM. To find elapsed time: count minutes to the next hour, then count full hours. Example: 10:45 to 13:15 = 15 min to 11:00 + 2 hours + 15 min = 2 hours 30 minutes.",
          },
          {
            heading: "Duration problems",
            body: "To find start time: subtract duration from end time. To find end time: add duration to start time. Always check if you cross midnight or noon. Use a timeline or clock face to help.",
          },
        ],
        keyFormulas: [
          { name: "Elapsed time", statement: "End - Start = Duration" },
          { name: "Start time", statement: "End - Duration = Start" },
        ],
        workedExample: {
          problem:
            "A film starts at 14:30 and lasts 1 hour 45 minutes. When does it end?",
          solution: "14:30 + 1:45 = 16:15.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-ti-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3:15 PM in 24-hour time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "03:15" },
              { id: "b", text: "13:15" },
              { id: "c", text: "15:15" },
              { id: "d", text: "23:15" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time conversion",
                statement: "PM = +12 hours.",
              },
            ],
            steps: [
              {
                reasoning: "3 PM = 15:00; 3:15 PM = 15:15.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 15:15",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm4-u4-ti-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How long is it from 09:00 to 10:30?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 hour" },
              { id: "b", text: "1 hour 30 minutes" },
              { id: "c", text: "2 hours" },
              { id: "d", text: "30 minutes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Elapsed time",
                statement: "1 hour 30 minutes.",
              },
            ],
            steps: [
              { reasoning: "09:00 to 10:30 = 1h30m.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 1h30m",
            commonErrors: ["Wrong duration."],
          },
        },
        {
          id: "edpm4-u4-ti-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A meeting ends at 16:45. It lasted 1 hour 20 minutes. What time did it start?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Start time",
                statement: "16:45 - 1:20 = 15:25.",
              },
            ],
            steps: [
              { reasoning: "Sub 20 min: 16:25.", marks: 1, markCode: "M" },
              { reasoning: "Sub 1 hour: 15:25.", marks: 1, markCode: "M" },
              { reasoning: "Started at 15:25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15:25",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm4-u4-ti-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train leaves at 08:15 and arrives at 11:05. How long is the journey? Give your answer in hours and minutes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Elapsed time",
                statement: "08:15 to 11:05 = 2h50m.",
              },
            ],
            steps: [
              {
                reasoning: "08:15 to 09:00 = 45 min.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "09:00 to 11:00 = 2 hours.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "11:00 to 11:05 = 5 min.", marks: 1, markCode: "M" },
              {
                reasoning: "Total: 45 + 120 + 5 = 170 min = 2h50m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2 hours 50 minutes",
            commonErrors: ["Wrong duration."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-reasoning",
      title: "Problem Solving and Reasoning",
      skill: "Apply reasoning strategies to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Problem-solving strategies",
            body: "Use these strategies: (1) Draw a picture or diagram; (2) Work backwards; (3) Look for patterns; (4) Break into smaller steps; (5) Estimate first; (6) Check your answer makes sense. Always read the question carefully and underline key information.",
          },
          {
            heading: "Reasoning skills",
            body: "Reasoning means explaining WHY, not just WHAT. Use words like 'because', 'so', 'therefore'. Check if your answer is reasonable: if you calculate a negative number of people or a negative amount of money, you've made an error.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Tom has £10. He buys 2 toys at £3.50 each. Does he have enough money?",
          solution:
            "2 × £3.50 = £7.00. £10 > £7.00, so yes, he has enough with £3.00 left.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a good first step when solving a word problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start calculating immediately" },
              { id: "b", text: "Read the question carefully" },
              { id: "c", text: "Guess the answer" },
              { id: "d", text: "Skip the question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem solving",
                statement: "Read carefully first.",
              },
            ],
            steps: [
              {
                reasoning: "Read and understand before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Read the question",
            commonErrors: ["Wrong approach."],
          },
        },
        {
          id: "edpm4-u4-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A box has 5 rows of 4 pencils. How many pencils are there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "20" },
              { id: "c", text: "15" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "5 × 4 = 20.",
              },
            ],
            steps: [
              { reasoning: "5 × 4 = 20 pencils.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 20",
            commonErrors: ["Wrong multiplication."],
          },
        },
        {
          id: "edpm4-u4-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A library has 120 books. 45 are fiction and 30 are non-fiction. How many are other types?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem solving",
                statement: "120 - 75 = 45.",
              },
            ],
            steps: [
              {
                reasoning: "Fiction + non-fiction = 45 + 30 = 75.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Other = 120 - 75.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 45 books.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45 books",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm4-u4-re-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how you would solve: 'A shopkeeper sells 6 cakes at £2.50 each and 4 pies at £3.00 each. What is the total money taken?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem solving",
                statement: "Cakes + pies = total.",
              },
            ],
            steps: [
              {
                reasoning: "Cakes: 6 × £2.50 = £15.00.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pies: 4 × £3.00 = £12.00.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total: £15 + £12 = £27.00.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "£27.00",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
  ],
};
