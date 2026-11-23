import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm3-u4-lesson-4-1",
  code: "4-1",
  title: "Introduction to Algebra",
  goal: "I CAN use symbols and letters to represent unknown numbers.",
  standards: ["Year 3 Algebra"],
  vocabulary: [
    {
      term: "Variable",
      definition: "A letter that stands for an unknown number.",
    },
    {
      term: "Expression",
      definition: "A mathematical phrase with numbers and/or letters.",
    },
    {
      term: "Equation",
      definition: "A statement that two expressions are equal.",
    },
    { term: "Unknown", definition: "A number we don't know yet." },
  ],
  concepts: [
    {
      id: "edpm3-u4-algebra",
      title: "Using Letters for Numbers",
      skill: "Understand variables and simple expressions.",
      lesson: {
        sections: [
          {
            heading: "What is algebra?",
            body: "Algebra uses letters (usually x, y, n) to stand for unknown numbers. Instead of writing '? + 5 = 12', we write 'x + 5 = 12'. The letter is a variable — it can be any number. Algebra helps us solve problems where we don't know one of the numbers.",
          },
          {
            heading: "Simple expressions",
            body: "An expression like '3x' means 3 × x. 'x + 4' means a number plus 4. To solve 'x + 5 = 12', ask: what number plus 5 equals 12? Answer: 7. Check: 7 + 5 = 12. Algebra is just thinking backwards.",
          },
        ],
        keyFormulas: [
          { name: "Variable", statement: "A letter for an unknown number" },
          { name: "3x", statement: "Means 3 × x" },
        ],
        workedExample: {
          problem: "Solve: x + 3 = 9",
          solution: "x = 6, because 6 + 3 = 9.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the equation x + 5 = 12, what does x represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A known number" },
              { id: "b", text: "An unknown number" },
              { id: "c", text: "A letter of the alphabet" },
              { id: "d", text: "A fraction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variable",
                statement: "Unknown number.",
              },
            ],
            steps: [{ reasoning: "x = unknown.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Unknown",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpm3-u4-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does '4x' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 + x" },
              { id: "b", text: "4 × x" },
              { id: "c", text: "x ÷ 4" },
              { id: "d", text: "x - 4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Algebra notation",
                statement: "4x = 4 × x.",
              },
            ],
            steps: [{ reasoning: "4x = 4 times x.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 4 × x",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpm3-u4-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: x + 7 = 15",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simple equations", statement: "x = 8." },
            ],
            steps: [
              { reasoning: "What + 7 = 15?", marks: 1, markCode: "M" },
              { reasoning: "15 - 7 = 8.", marks: 1, markCode: "M" },
              { reasoning: "x = 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 8",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm3-u4-al-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve: 3x = 18. Explain how you found x.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations", statement: "x = 6." },
            ],
            steps: [
              { reasoning: "3 × x = 18.", marks: 1, markCode: "M" },
              { reasoning: "18 ÷ 3 = 6.", marks: 1, markCode: "M" },
              { reasoning: "x = 6.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "x = 6",
            commonErrors: ["No working."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-sequences",
      title: "Number Sequences",
      skill: "Continue and describe number sequences using rules.",
      lesson: {
        sections: [
          {
            heading: "Sequence rules",
            body: "A sequence is a list of numbers following a rule. Common rules: add a constant (5, 10, 15, 20 — add 5), multiply (2, 4, 8, 16 — double), or more complex (1, 4, 9, 16 — square numbers). Describe the rule in words: 'add 3 each time' or 'double each time'.",
          },
          {
            heading: "Finding missing terms",
            body: "To find a missing term, apply the rule. In 4, 8, ?, 16 the rule is 'add 4', so the missing term is 12. In 3, 6, 12, 24 the rule is 'double', so next is 48. Always verify the rule works for every step.",
          },
        ],
        keyFormulas: [
          {
            name: "Sequence rule",
            statement:
              "What happens each step: add, subtract, multiply, square",
          },
        ],
        workedExample: {
          problem: "Continue: 7, 14, 21, 28, ?",
          solution: "Rule = add 7. Next = 35.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in 2, 4, 6, 8?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add 2" },
              { id: "b", text: "Double" },
              { id: "c", text: "Add 4" },
              { id: "d", text: "Multiply by 3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Add 2 each time.",
              },
            ],
            steps: [{ reasoning: "2→4→6→8 adds 2.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Add 2",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm3-u4-seq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What comes next: 5, 10, 20, 40, ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50" },
              { id: "b", text: "60" },
              { id: "c", text: "80" },
              { id: "d", text: "100" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Double each time.",
              },
            ],
            steps: [{ reasoning: "40 × 2 = 80.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 80",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm3-u4-seq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the missing number: 3, 6, ?, 24, 48",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Rule = double; missing = 12.",
              },
            ],
            steps: [
              {
                reasoning: "Rule = double each time.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "6 × 2 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Missing = 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm3-u4-seq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the rule in the sequence 1, 4, 9, 16, 25 and find the next term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Square numbers: n².",
              },
            ],
            steps: [
              {
                reasoning: "1=1², 4=2², 9=3², 16=4², 25=5².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Rule = square numbers.", marks: 1, markCode: "M" },
              { reasoning: "Next = 6² = 36.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Square numbers; next = 36",
            commonErrors: ["Wrong rule."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-problems",
      title: "Complex Problem Solving",
      skill: "Solve multi-step problems across all Year 3 topics.",
      lesson: {
        sections: [
          {
            heading: "Multi-step problems",
            body: "Year 3 problems can need several steps: 'A shop has 48 pencils. It sells 15 in the morning and 12 in the afternoon. It then gets a delivery of 20. How many pencils?' Step 1: 15 + 12 = 27 sold. Step 2: 48 - 27 = 21. Step 3: 21 + 20 = 41. Break into small steps.",
          },
          {
            heading: "Checking strategies",
            body: "Estimate first: will the answer be bigger or smaller? Check each step. For division problems, multiply back to check. For word problems, underline the key numbers and operations needed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Solve: 7 × 8 - 5",
          solution: "56 - 5 = 51.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 8 × 6 - 4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "44" },
              { id: "b", text: "48" },
              { id: "c", text: "52" },
              { id: "d", text: "56" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Order of operations",
                statement: "8 × 6 = 48, 48 - 4 = 44.",
              },
            ],
            steps: [{ reasoning: "48 - 4 = 44.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 44",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpm3-u4-mp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A box holds 6 rows of 4 eggs. How many eggs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "20" },
              { id: "c", text: "24" },
              { id: "d", text: "28" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "6 × 4 = 24.",
              },
            ],
            steps: [{ reasoning: "6 × 4 = 24.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 24",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm3-u4-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 60 students. 24 are in Year 3, 18 in Year 4, and the rest in Year 5. How many are in Year 5?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step problems",
                statement: "60 - 24 - 18 = 18.",
              },
            ],
            steps: [
              { reasoning: "24 + 18 = 42.", marks: 1, markCode: "M" },
              { reasoning: "60 - 42 = 18.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 18.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
            commonErrors: ["Wrong steps."],
          },
        },
        {
          id: "edpm3-u4-mp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train leaves at 9:30 and takes 2 hours 15 minutes to arrive. What time does it arrive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time problems",
                statement: "9:30 + 2h15m = 11:45.",
              },
            ],
            steps: [
              { reasoning: "9:30 + 2 hours = 11:30.", marks: 1, markCode: "M" },
              { reasoning: "11:30 + 15 min = 11:45.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 11:45.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "11:45",
            commonErrors: ["Wrong time calc."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-data",
      title: "Data Handling",
      skill: "Collect, present and interpret data.",
      lesson: {
        sections: [
          {
            heading: "Types of charts",
            body: "Data can be shown as tally charts, pictograms, block graphs, tables, and (in Year 3) simple line graphs. Each shows data differently — pictograms use pictures, block graphs use columns, tables use rows and columns.",
          },
          {
            heading: "Analysing data",
            body: "To analyse: find the total, find the most/least, compare values, spot patterns. Questions like 'How many more?' require subtraction; 'How many altogether?' requires addition. Always check the scale and key.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A block graph shows Mon=5, Tue=8, Wed=3. What is the total?",
          solution: "5 + 8 + 3 = 16.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-dh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a pictogram use to show data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Numbers only" },
              { id: "b", text: "Pictures or symbols" },
              { id: "c", text: "Lines" },
              { id: "d", text: "Words" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pictogram",
                statement: "Uses pictures.",
              },
            ],
            steps: [
              { reasoning: "Pictogram = pictures.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Pictures",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm3-u4-dh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A chart shows: A=4, B=7, C=2. Which is the smallest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A" },
              { id: "b", text: "B" },
              { id: "c", text: "C" },
              { id: "d", text: "All same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data reading",
                statement: "Smallest = lowest value.",
              },
            ],
            steps: [{ reasoning: "C=2 is smallest.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** C",
            commonErrors: ["Wrong category."],
          },
        },
        {
          id: "edpm3-u4-dh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A table shows favourite colours: red=8, blue=12, green=5, yellow=7. What is the total?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data totals",
                statement: "8+12+5+7 = 32.",
              },
            ],
            steps: [
              { reasoning: "8 + 12 = 20.", marks: 1, markCode: "M" },
              { reasoning: "5 + 7 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Total = 32.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
            commonErrors: ["Wrong total."],
          },
        },
        {
          id: "edpm3-u4-dh-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a survey to find out Year 3's favourite school subject. Describe how you would collect and present the data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey design",
                statement: "Question+method+display.",
              },
            ],
            steps: [
              {
                reasoning: "Clear question: 'What is your favourite subject?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect via tally chart or table.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Present in pictogram or block graph with key.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Question+method+display",
            commonErrors: ["Incomplete."],
          },
        },
      ],
    },
  ],
};
