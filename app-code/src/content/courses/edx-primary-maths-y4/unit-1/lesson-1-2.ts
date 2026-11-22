import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm4-u1-lesson-1-2",
  code: "1-2",
  title: "Addition and Subtraction to 10 000",
  goal: "I CAN add and subtract numbers up to 10 000 using efficient written methods.",
  standards: ["Year 4 Addition and subtraction"],
  vocabulary: [
    {
      term: "Column addition",
      definition:
        "Adding digits in columns starting from ones, carrying when needed.",
    },
    {
      term: "Exchange",
      definition: "Trading 10 of one place for 1 of the next higher place.",
    },
    {
      term: "Inverse",
      definition: "Addition and subtraction undo each other — use to check.",
    },
    {
      term: "Compensation",
      definition:
        "Adjusting numbers to make a calculation easier, then correcting.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u1-add",
      title: "Addition with exchanging",
      skill: "Add numbers up to 10 000 using column addition with exchanging.",
      lesson: {
        sections: [
          {
            heading: "Column addition",
            body: "Line up digits by place value. Add ones first, then tens, hundreds, thousands. If a column totals 10 or more, **exchange**: write the ones digit and carry the tens. 456 + 378: ones 6+8=14 → write 4 carry 1; tens 5+7+1=13 → write 3 carry 1; hundreds 4+3+1=8 → 834.",
          },
          {
            heading: "Checking answers",
            body: "Add the smaller number to the bigger, or use the inverse: if 456 + 378 = 834, then 834 − 378 = 456. Estimate first: 456 + 378 ≈ 500 + 400 = 900? Real answer 834 — hmm, round better: 460 + 380 = 840, close to 834. Estimation catches big errors.",
          },
        ],
        keyFormulas: [
          {
            name: "Column addition",
            statement: "Add right to left; exchange 10 → 1",
          },
          { name: "Check", statement: "a + b = c ⟺ c − b = a" },
        ],
        workedExample: {
          problem: "Calculate 2 456 + 1 789.",
          solution:
            "Ones: 6+9=15 → 5 carry 1. Tens: 5+8+1=14 → 4 carry 1. Hundreds: 4+7+1=12 → 2 carry 1. Thousands: 2+1+1=4. Answer: 4 245.",
        },
      },
      questions: [
        {
          id: "edpm4-u1-add-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 345 + 234?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "579" },
              { id: "b", text: "5790" },
              { id: "c", text: "679" },
              { id: "d", text: "569" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Column addition",
                statement: "345 + 234 = 579.",
              },
            ],
            steps: [
              {
                reasoning: "Ones 9, tens 7, hundreds 5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 579",
            commonErrors: ["Forgetting to add column by column."],
          },
        },
        {
          id: "edpm4-u1-add-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 456 + 378.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 834, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchanging",
                statement: "6+8=14→4 carry 1; 5+7+1=13→3 carry 1; 4+3+1=8.",
              },
            ],
            steps: [
              {
                reasoning: "Ones: 14 → write 4, carry 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tens: 13 → write 3, carry 1; hundreds: 8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 834.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "834",
            commonErrors: ["Forgetting carried digits."],
          },
        },
        {
          id: "edpm4-u1-add-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 3 456 + 2 789.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6245, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Column addition",
                statement: "Ones 15, tens 14, hundreds 12, thousands 6.",
              },
            ],
            steps: [
              {
                reasoning: "Ones: 6+9=15 → 5 c1; tens: 5+8+1=14 → 4 c1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hundreds: 4+7+1=12 → 2 c1; thousands: 3+2+1=6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 6245.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6245",
            commonErrors: ["Losing a carry in the thousands column."],
          },
        },
        {
          id: "edpm4-u1-add-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A charity raises £2 345 on Saturday and £1 876 on Sunday.",
          parts: [
            { label: "a", prompt: "How much is raised in total?", marks: 3 },
            {
              label: "b",
              prompt: "Check your answer using subtraction.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Estimate the total first and say if your answer is sensible.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Addition problems",
                statement: "Add amounts; check by inverse; estimate first.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "2 345 + 1 876: ones 5+6=11→1 c1; tens 4+7+1=12→2 c1; hundreds 3+8+1=12→2 c1; thousands 2+1+1=4. Total 4 221.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £4 221.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct total.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "4 221 − 1 876 = 2 345. ✓",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Check method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Confirmed correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Estimate: 2 300 + 1 900 ≈ 4 200.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "4 221 is close to 4 200 — sensible.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Comparison stated.",
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
            finalAnswer:
              "£4 221; check: 4 221 − 1 876 = 2 345; estimate ~£4 200 — sensible",
            commonErrors: [
              "Rounding for estimate instead of exact for final answer.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm4-u1-sub",
      title: "Subtraction with exchanging",
      skill:
        "Subtract numbers up to 10 000 using column subtraction with exchanging.",
      lesson: {
        sections: [
          {
            heading: "Column subtraction",
            body: "Line up digits, subtract ones first. If a digit is too small, **exchange**: borrow 1 from the next column (10 of the smaller place). 523 − 178: ones 3<8 → exchange: 13−8=5; tens 1<7 → exchange: 11−7=4; hundreds 4−1=3. Answer 345.",
          },
          {
            heading: "Checking and compensating",
            body: "Check by adding back: 345 + 178 = 523. Or add on: 178 + 200 = 378, +145 = 523 → difference 345. **Compensation**: 523 − 178 = 523 − 200 + 22 = 323 + 22 = 345. Adjust to friendly numbers.",
          },
        ],
        keyFormulas: [
          {
            name: "Column subtraction",
            statement: "Subtract right to left; exchange when needed",
          },
          {
            name: "Compensation",
            statement: "Subtract a friendly number then adjust",
          },
        ],
        workedExample: {
          problem: "Calculate 5 000 − 2 345.",
          solution:
            "Exchange across zeros: 5 000 → 4 999 + 1. 9−5=4, 9−4=5, 9−3=6, 4−2=2. Answer: 2 655.",
        },
      },
      questions: [
        {
          id: "edpm4-u1-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 523 − 178?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "255" },
              { id: "b", text: "345" },
              { id: "c", text: "445" },
              { id: "d", text: "355" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Column subtraction",
                statement: "523 − 178 = 345.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange twice; result 345.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 345",
            commonErrors: ["Subtracting smaller from larger in each column."],
          },
        },
        {
          id: "edpm4-u1-sub-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 5 000 − 2 345.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2655, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchanging across zeros",
                statement: "5 000 = 4 999 + 1; result 2 655.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange through zeros to 4 999 + 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract column by column: 2 655.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2655.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2655",
            commonErrors: [
              "Getting stuck at zeros — must cascade the exchange.",
            ],
          },
        },
        {
          id: "edpm4-u1-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 6 000 − 3 456.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2544, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Column subtraction",
                statement:
                  "6 000 = 5 999 + 1; 5 999 − 3 456 = 2 543, adjust for the extra 1 → 2 544.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange through zeros: 6 000 → 5 999 + 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "5 999 − 3 456 = 2 543, then add the remaining 1 → 2 544.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: 3 456 + 2 544 = 6 000. ✓",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 2544.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2544",
            commonErrors: [
              "Answering 2543 — forgetting to add back the exchanged unit.",
            ],
          },
        },
        {
          id: "edpm4-u1-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A library has 4 500 books. 1 876 are borrowed.",
          parts: [
            {
              label: "a",
              prompt: "How many books remain in the library?",
              marks: 3,
            },
            { label: "b", prompt: "Check your answer by adding.", marks: 3 },
            {
              label: "c",
              prompt:
                "If 956 books are returned, how many are in the library now?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction problems",
                statement: "Subtract borrowed; check by inverse; add returns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4 500 − 1 876 = 2 624.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 2 624 books.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct subtraction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "2 624 + 1 876 = 4 500. ✓",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Inverse check shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Confirmed.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "2 624 + 956 = 3 580.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 3 580 books.",
                marks: 1,
                markCode: "A",
              },
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
            finalAnswer: "2 624; check 2 624 + 1 876 = 4 500; 3 580",
            commonErrors: ["Adding returns to borrowed instead of remaining."],
          },
        },
      ],
    },
  ],
};
