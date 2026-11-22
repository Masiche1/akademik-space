import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edpm1-u1-lesson-1-2",
  code: "1-2",
  title: "Addition and Subtraction within 20",
  goal: "I CAN add and subtract numbers within 20, using number bonds and counting on or back.",
  standards: ["Year 1 Number", "Addition and subtraction"],
  vocabulary: [
    { term: "Add", definition: "Combine two or more numbers to find a total." },
    {
      term: "Subtract",
      definition: "Take one number away from another to find what is left.",
    },
    {
      term: "Number bond",
      definition:
        "Two numbers that add to make a given total, e.g. 7 + 3 = 10.",
    },
    {
      term: "Count on",
      definition:
        "Start from the bigger number and count on the smaller amount.",
    },
    {
      term: "Inverse",
      definition:
        "The opposite operation: addition undoes subtraction and vice versa.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u1-addition",
      title: "Adding within 20",
      skill:
        "Add two numbers within 20 using counting on, number bonds and known facts.",
      lesson: {
        sections: [
          {
            heading: "Counting on to add",
            body: "When adding, start from the bigger number and count on the smaller one. For 9 + 4, start at 9 and count on 4: 10, 11, 12, 13. The answer is 13. This works for any pair of numbers within 20.",
          },
          {
            heading: "Number bonds to 10 and 20",
            body: "Know your number bonds to 10 by heart: 1+9, 2+8, 3+7, 4+6, 5+5 and the reverse. To add near 10, split the smaller number. For 8 + 5, split 5 into 2 + 3: 8 + 2 = 10, then 10 + 3 = 13.",
          },
          {
            heading: "Adding three numbers",
            body: "Add three numbers by adding two first, then adding the third. For 4 + 6 + 3, do 4 + 6 = 10 first, then 10 + 3 = 13. Look for pairs that make 10 — this makes the calculation quicker.",
          },
        ],
        keyFormulas: [
          { name: "Count on", statement: "9 + 4: start at 9, count on 4 → 13" },
          {
            name: "Splitting to make 10",
            statement: "8 + 5 = 8 + 2 + 3 = 10 + 3 = 13",
          },
        ],
        workedExample: {
          problem: "Work out 7 + 6 using the make-10 method.",
          solution:
            "Split 6 into 3 + 3. 7 + 3 = 10, then 10 + 3 = 13. So 7 + 6 = 13.",
        },
      },
      questions: [
        {
          id: "edpm1-u1-add-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 8 + 5.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13" },
              { id: "b", text: "12" },
              { id: "c", text: "14" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count on",
                statement: "Start at 8, count on 5.",
              },
            ],
            steps: [
              {
                reasoning: "8 → 9, 10, 11, 12, 13. Answer 13.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 13",
            commonErrors: [
              "Starting at 5 instead of the bigger number — still gives 13, but check method.",
            ],
          },
        },
        {
          id: "edpm1-u1-add-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 9 + 7.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 16, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Make 10",
                statement: "Split 7 into 1 + 6: 9 + 1 = 10, 10 + 6 = 16.",
              },
            ],
            steps: [
              { reasoning: "9 + 1 = 10.", marks: 1, markCode: "M" },
              { reasoning: "10 + 6 = 16.", marks: 1, markCode: "M" },
              { reasoning: "9 + 7 = 16.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
            commonErrors: [
              "Answering 15 or 17 — miscounting when crossing 10.",
            ],
          },
        },
        {
          id: "edpm1-u1-add-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 6 red pencils and 8 blue pencils in a pot. How many pencils altogether?",
          response: {
            type: "numeric",
            parts: [{ label: "Total pencils", answer: 14, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Real-life addition",
                statement: "Altogether means add.",
              },
            ],
            steps: [
              {
                reasoning: "Altogether → add: 6 + 8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 + 2 = 10, then 10 + 4 = 14.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer 14.", marks: 1, markCode: "A" },
              {
                reasoning: "Units/labels sensible in a written answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "14 pencils",
            commonErrors: ["Subtracting instead of adding."],
          },
        },
        {
          id: "edpm1-u1-add-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Amara has 5 stickers. Ben has 7 stickers. Cleo has 4 stickers.",
          parts: [
            {
              label: "a",
              prompt: "How many stickers do Amara and Ben have together?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many more stickers does Ben have than Amara?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If they put all their stickers in a pile and deal them out one at a time to the three of them, how many stickers are left over?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Addition and sharing",
                statement:
                  "Together = add; how many more = subtract; share equally = divide into groups.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Together → 5 + 7 = 12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Count on from 7: 8, 9, 10, 11, 12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 12 stickers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "How many more → 7 − 5 = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Count back from 7 to 5: 2 steps.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 2 more stickers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total stickers = 5 + 7 + 4 = 16.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Deal 16 into 3 equal groups: 5, 5, 5 with 1 left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Check: 5 + 5 + 5 = 15, and 16 − 15 = 1.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: 1 sticker left over.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12; 2; 1 sticker left over",
            commonErrors: [
              "Forgetting to add all three children's stickers before dealing out.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm1-u1-subtraction",
      title: "Subtracting within 20",
      skill:
        "Subtract numbers within 20 using counting back, number bonds and inverse facts.",
      lesson: {
        sections: [
          {
            heading: "Counting back to subtract",
            body: "When subtracting, start from the bigger number and count back the smaller one. For 15 − 6, start at 15 and count back 6: 14, 13, 12, 11, 10, 9. The answer is 9.",
          },
          {
            heading: "Using number bonds",
            body: "Subtraction is the inverse of addition. If you know 9 + 6 = 15, then 15 − 6 = 9 and 15 − 9 = 6. Knowing bonds to 10 helps: 13 − 5 = 13 − 3 − 2 = 10 − 2 = 8.",
          },
          {
            heading: "What is left?",
            body: "In real problems, 'how many are left' means subtract. There are 18 grapes on a plate and 7 are eaten. Left: 18 − 7 = 11. Draw a picture or use counters to check your answer.",
          },
        ],
        keyFormulas: [
          {
            name: "Count back",
            statement: "15 − 6: start at 15, count back 6 → 9",
          },
          { name: "Inverse", statement: "If 9 + 6 = 15 then 15 − 6 = 9" },
        ],
        workedExample: {
          problem: "Work out 16 − 8 using a number bond.",
          solution: "8 + 8 = 16, so 16 − 8 = 8. Halving facts are useful here.",
        },
      },
      questions: [
        {
          id: "edpm1-u1-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 14 − 6.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "8" },
              { id: "c", text: "9" },
              { id: "d", text: "6" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count back",
                statement: "14, 13, 12, 11, 10, 9 — six steps back.",
              },
            ],
            steps: [
              {
                reasoning: "6 + 8 = 14, so 14 − 6 = 8.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 8",
            commonErrors: ["Counting back one step too many or too few."],
          },
        },
        {
          id: "edpm1-u1-sub-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 17 − 9.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 8, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse",
                statement: "9 + 8 = 17, so 17 − 9 = 8.",
              },
            ],
            steps: [
              {
                reasoning: "Use the inverse: what + 9 = 17?",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 + 8 = 17.", marks: 1, markCode: "M" },
              { reasoning: "17 − 9 = 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
            commonErrors: ["Answering 9 — confusing subtract with doubling."],
          },
        },
        {
          id: "edpm1-u1-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 20 birds on a wall. 13 fly away. How many birds are left on the wall?",
          response: {
            type: "numeric",
            parts: [{ label: "Birds left", answer: 7, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction in context",
                statement: "Left = start − gone.",
              },
            ],
            steps: [
              { reasoning: "Left = 20 − 13.", marks: 1, markCode: "M" },
              {
                reasoning: "Count back from 20 by 13: reaches 7.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: 7 + 13 = 20. Correct.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 7 birds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 birds",
            commonErrors: ["Adding instead of subtracting."],
          },
        },
        {
          id: "edpm1-u1-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A toy shop has 19 balloons. On Monday it sells some, and 8 balloons are left.",
          parts: [
            {
              label: "a",
              prompt: "How many balloons were sold on Monday?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "On Tuesday the shop sells 6 more balloons and buys 4 new ones. How many balloons does it have now?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain how you know your answer to part (a) is correct.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Missing number and inverse",
                statement: "Start − left = sold; check by adding back.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sold = 19 − 8 = 11.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Count back from 19 to 8: 11 steps.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 11 balloons.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "8 − 6 = 2 left after selling.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "2 + 4 = 6 after buying new ones.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both steps correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 6 balloons.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Check: 11 + 8 = 19 — sold + left = start.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Uses inverse operation to verify.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Clear explanation linking check to question.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "11 sold; 6 now; check 11 + 8 = 19",
            commonErrors: ["Forgetting the +4 step in part (b)."],
          },
        },
      ],
    },
  ],
};
