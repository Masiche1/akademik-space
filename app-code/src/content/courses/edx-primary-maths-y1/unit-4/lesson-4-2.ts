import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm1-u4-lesson-4-2",
  code: "4-2",
  title: "Solving Problems with Numbers",
  goal: "I CAN solve one-step and two-step problems using addition, subtraction, multiplication and division.",
  standards: ["Year 1 Problem solving"],
  vocabulary: [
    { term: "Problem", definition: "A question that needs working out." },
    { term: "Step", definition: "One calculation in a problem." },
    {
      term: "Two-step problem",
      definition: "A problem needing two calculations.",
    },
    {
      term: "Check",
      definition: "Look back to see if your answer makes sense.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u4-problems",
      title: "Reading and Solving Problems",
      skill: "Identify what a problem asks and solve it step by step.",
      lesson: {
        sections: [
          {
            heading: "Steps to solve",
            body: "1) Read the problem carefully — twice if needed. 2) Find the important numbers. 3) Decide which operation (add, subtract, multiply, divide). 4) Calculate. 5) Check your answer makes sense — if you started with 5 and added 3, the answer should be bigger than 5.",
          },
          {
            heading: "Two-step problems",
            body: "Some problems need two steps. 'Sam has 4 red balls and 3 blue balls. He buys 2 more red balls. How many red balls does he have?' Step 1: 4 + 2 = 6 red balls. Step 2: total = 6 + 3 = 9 balls. Do the steps in order.",
          },
        ],
        keyFormulas: [
          {
            name: "Check",
            statement:
              "Answer should be bigger for +, smaller for -, equal groups for ×",
          },
        ],
        workedExample: {
          problem: "A box holds 5 pencils. You have 3 boxes. How many pencils?",
          solution: "3 × 5 = 15 pencils.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pack has 4 biscuits. How many biscuits in 2 packs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word problems", statement: "2 × 4 = 8." },
            ],
            steps: [
              { reasoning: "2 groups of 4 = 8.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Added instead of multiplied."],
          },
        },
        {
          id: "edpm1-u4-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "There are 10 apples. 4 are eaten. How many are left?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "6" },
              { id: "d", text: "14" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word problems",
                statement: "10 - 4 = 6.",
              },
            ],
            steps: [{ reasoning: "10 - 4 = 6.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 6",
            commonErrors: ["Added instead of subtracted."],
          },
        },
        {
          id: "edpm1-u4-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 3 bags with 2 oranges in each. One orange is rotten and thrown away. How many good oranges are left?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step problems",
                statement: "3 × 2 = 6, then 6 - 1.",
              },
            ],
            steps: [
              { reasoning: "3 × 2 = 6 oranges.", marks: 1, markCode: "M" },
              { reasoning: "6 - 1 = 5 good oranges.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 oranges",
            commonErrors: ["Only one step done."],
          },
        },
        {
          id: "edpm1-u4-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 12 children. 5 are girls and the rest are boys. How many boys are there? Show your two steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step problems",
                statement: "12 - 5 = 7 boys.",
              },
            ],
            steps: [
              { reasoning: "12 children total.", marks: 1, markCode: "M" },
              { reasoning: "12 - 5 = 7 boys.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7 boys.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "7 boys",
            commonErrors: ["Wrong operation."],
          },
        },
      ],
    },
    {
      id: "edpm1-u4-check",
      title: "Checking Answers",
      skill: "Check calculations using inverse operations and estimation.",
      lesson: {
        sections: [
          {
            heading: "Inverse operations",
            body: "Every calculation has an opposite that checks it: addition checks subtraction (5 + 3 = 8, check 8 - 3 = 5), subtraction checks addition, multiplication checks division, division checks multiplication. Always check your answer using the inverse.",
          },
          {
            heading: "Estimating",
            body: "Before calculating, estimate: is the answer close to what you expect? 48 + 51 should be near 100. If your answer is 199 or 5, something is wrong. Checking catches mistakes before you hand in work.",
          },
        ],
        keyFormulas: [
          { name: "Inverse check", statement: "a + b = c, check c - b = a" },
        ],
        workedExample: {
          problem: "Check: 7 - 3 = 5. Is this right?",
          solution: "No — check: 5 + 3 = 8, not 7. Correct answer is 4.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-chk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do you check 6 + 4 = 10?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 + 4" },
              { id: "b", text: "10 - 4 = 6" },
              { id: "c", text: "6 × 4" },
              { id: "d", text: "Guess" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inverse check",
                statement: "Subtract to check add.",
              },
            ],
            steps: [
              { reasoning: "10 - 4 = 6 checks.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 10 - 4 = 6",
            commonErrors: ["Wrong check."],
          },
        },
        {
          id: "edpm1-u4-chk-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Is 8 - 5 = 4 correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes" },
              { id: "b", text: "No — it should be 3" },
              { id: "c", text: "No — it should be 13" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Checking", statement: "8 - 5 = 3." },
            ],
            steps: [
              { reasoning: "8 - 5 = 3, not 4.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Should be 3",
            commonErrors: ["Accepted wrong answer."],
          },
        },
        {
          id: "edpm1-u4-chk-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 9 - 4 and check your answer using the inverse operation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inverse check",
                statement: "9 - 4 = 5, check 5 + 4 = 9.",
              },
            ],
            steps: [
              { reasoning: "9 - 4 = 5.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: 5 + 4 = 9. Correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer with check shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 (check: 5 + 4 = 9)",
            commonErrors: ["No check done."],
          },
        },
        {
          id: "edpm1-u4-chk-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tom calculated 20 - 8 = 28. Use estimation to show his answer is wrong, then give the correct answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Estimation",
                statement: "Answer should be less than 20.",
              },
            ],
            steps: [
              {
                reasoning: "20 - 8 must be less than 20.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "28 is more than 20 — impossible.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct: 20 - 8 = 12.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "12 (28 impossible)",
            commonErrors: ["No estimation used."],
          },
        },
      ],
    },
    {
      id: "edpm1-u4-mixed",
      title: "Mixed Number Practice",
      skill: "Apply all Year 1 number skills together.",
      lesson: {
        sections: [
          {
            heading: "Putting it together",
            body: "Year 1 maths covers: counting to 100, place value (tens and ones), addition and subtraction within 20, number bonds, multiplication and division (2, 5, 10 times tables), fractions (halves, quarters), shape, measure, time and money, patterns and data.",
          },
          {
            heading: "Problem-solving strategy",
            body: "When unsure: write down what you know, draw a picture if it helps, do the calculation step by step, and always check your answer. Practice makes these skills automatic.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "You have £2. You buy a sweet for 50p. How much change?",
          solution: "£2 = 200p. 200 - 50 = 150p = £1.50.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-mix-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 7 + 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "12" },
              { id: "c", text: "13" },
              { id: "d", text: "14" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Addition", statement: "7 + 5 = 12." },
            ],
            steps: [{ reasoning: "7 + 5 = 12.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 12",
            commonErrors: ["Wrong sum."],
          },
        },
        {
          id: "edpm1-u4-mix-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is half of 10?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fractions",
                statement: "Half of 10 = 5.",
              },
            ],
            steps: [{ reasoning: "10 ÷ 2 = 5.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 5",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm1-u4-mix-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 4 rows of 3 chairs. How many chairs are there? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "4 × 3 = 12.",
              },
            ],
            steps: [
              { reasoning: "4 rows of 3 = 4 × 3.", marks: 1, markCode: "M" },
              { reasoning: "4 × 3 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12 chairs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 chairs",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm1-u4-mix-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A toy costs £1.50. You have £2. How much change will you get? Show each step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Money", statement: "200p - 150p = 50p." },
            ],
            steps: [
              {
                reasoning: "£2 = 200p; £1.50 = 150p.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "200 - 150 = 50p.", marks: 1, markCode: "M" },
              { reasoning: "Change = 50p (50pence).", marks: 2, markCode: "A" },
            ],
            finalAnswer: "50p change",
            commonErrors: ["Wrong conversion."],
          },
        },
      ],
    },
  ],
};
