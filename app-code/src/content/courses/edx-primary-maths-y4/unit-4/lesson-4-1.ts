import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm4-u4-lesson-4-1",
  code: "4-1",
  title: "Algebra: Equations and Expressions",
  goal: "I CAN use algebra to represent and solve problems.",
  standards: ["Year 4 Algebra"],
  vocabulary: [
    {
      term: "Expression",
      definition:
        "A mathematical phrase with numbers and letters, e.g. 3x + 2.",
    },
    {
      term: "Equation",
      definition: "A statement that two expressions are equal.",
    },
    { term: "Unknown", definition: "A number represented by a letter." },
    {
      term: "Term",
      definition: "A part of an expression separated by + or -.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u4-algebra",
      title: "Writing and Solving Equations",
      skill: "Form equations from word problems and solve them.",
      lesson: {
        sections: [
          {
            heading: "Expressions and equations",
            body: "An expression like '3x + 5' means 3 times a number plus 5. An equation sets it equal to something: 3x + 5 = 20. To solve, undo operations in reverse order: subtract 5 → 3x = 15; divide by 3 → x = 5. Check: 3(5) + 5 = 20.",
          },
          {
            heading: "Writing equations from problems",
            body: "'A number multiplied by 4 then added to 7 equals 31' → 4x + 7 = 31. Solve: 4x = 24, x = 6. Always define what x represents first.",
          },
        ],
        keyFormulas: [
          { name: "Solve order", statement: "Undo + or - first, then × or ÷" },
        ],
        workedExample: {
          problem: "Solve: 2x + 8 = 24",
          solution: "2x = 16, x = 8.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does '5x' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 + x" },
              { id: "b", text: "5 × x" },
              { id: "c", text: "x ÷ 5" },
              { id: "d", text: "x - 5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Algebra notation",
                statement: "5x = 5 × x.",
              },
            ],
            steps: [{ reasoning: "5x = 5 times x.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 5 × x",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpm4-u4-al-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: x + 13 = 25",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "12" },
              { id: "c", text: "38" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "x = 25 - 13 = 12.",
              },
            ],
            steps: [{ reasoning: "25 - 13 = 12.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 12",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm4-u4-al-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: 3x = 27",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations", statement: "x = 9." },
            ],
            steps: [
              { reasoning: "3 × x = 27.", marks: 1, markCode: "M" },
              { reasoning: "27 ÷ 3 = 9.", marks: 1, markCode: "M" },
              { reasoning: "x = 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 9",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm4-u4-al-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A number is multiplied by 5 and then 12 is added, giving 47. Write an equation and solve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equation setup",
                statement: "5x + 12 = 47; x = 7.",
              },
            ],
            steps: [
              { reasoning: "Equation: 5x + 12 = 47.", marks: 1, markCode: "M" },
              { reasoning: "5x = 35; x = 7.", marks: 1, markCode: "M" },
              {
                reasoning: "x = 7; check 5(7)+12 = 47.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "x = 7",
            commonErrors: ["Wrong setup."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-sequences",
      title: "Number Patterns and Sequences",
      skill: "Continue sequences using rules and spot patterns.",
      lesson: {
        sections: [
          {
            heading: "Sequence rules",
            body: "Sequences follow rules: add/subtract a constant (4, 8, 12, 16 — add 4), multiply (3, 6, 12, 24 — double), square numbers (1, 4, 9, 16), or Fibonacci-style (1, 1, 2, 3, 5 — add previous two). Describe the rule in words.",
          },
          {
            heading: "Finding rules",
            body: "Test the rule on every step. For 5, 9, 13, 17 the rule is 'add 4'. For 2, 6, 18, 54 the rule is 'multiply by 3'. For missing terms, apply the rule forwards or backwards.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Find the rule and next term: 7, 14, 21, 28, ?",
          solution: "Rule = add 7. Next = 35.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-sq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in 3, 6, 9, 12?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add 2" },
              { id: "b", text: "Add 3" },
              { id: "c", text: "Double" },
              { id: "d", text: "Add 6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sequences", statement: "Add 3." },
            ],
            steps: [
              { reasoning: "Adds 3 each step.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Add 3",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm4-u4-sq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What comes next: 4, 8, 16, 32, ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "36" },
              { id: "b", text: "48" },
              { id: "c", text: "64" },
              { id: "d", text: "40" },
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
            steps: [{ reasoning: "32 × 2 = 64.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 64",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm4-u4-sq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the missing term: 6, 12, ?, 48, 96",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Rule = double; missing = 24.",
              },
            ],
            steps: [
              {
                reasoning: "Rule = double each time.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "12 × 2 = 24.", marks: 1, markCode: "M" },
              { reasoning: "Missing = 24.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm4-u4-sq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the rule in 1, 1, 2, 3, 5, 8 and find the next term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Fibonacci — add previous two.",
              },
            ],
            steps: [
              {
                reasoning: "Each term = sum of previous two.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "5 + 8 = 13.", marks: 1, markCode: "M" },
              { reasoning: "Next = 13.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Fibonacci; next = 13",
            commonErrors: ["Wrong rule."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-fractions",
      title: "Fractions: Equivalent and Ordering",
      skill: "Find equivalent fractions and order fractions.",
      lesson: {
        sections: [
          {
            heading: "Equivalent fractions",
            body: "Fractions that look different but are the same size: 1/2 = 2/4 = 3/6. Multiply or divide both numerator and denominator by the same number to find equivalents. Simplify by dividing by the highest common factor.",
          },
          {
            heading: "Ordering fractions",
            body: "To compare fractions, either convert to a common denominator or compare with benchmarks (1/2, 1/4). 3/8 < 1/2 < 5/8. Or use decimals: 3/8 = 0.375, 5/8 = 0.625. Same denominators: compare numerators; same numerators: bigger denominator = smaller fraction.",
          },
        ],
        keyFormulas: [
          { name: "Equivalent", statement: "1/2 = 2/4 = 3/6 = 4/8" },
        ],
        workedExample: {
          problem: "Order from smallest: 1/4, 3/8, 1/2",
          solution: "1/4 = 2/8, 3/8, 1/2 = 4/8. Order: 1/4, 3/8, 1/2.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 2/3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4/6" },
              { id: "b", text: "3/4" },
              { id: "c", text: "2/4" },
              { id: "d", text: "1/3" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equivalent fractions",
                statement: "2/3 = 4/6.",
              },
            ],
            steps: [{ reasoning: "2/3 × 2 = 4/6.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 4/6",
            commonErrors: ["Wrong fraction."],
          },
        },
        {
          id: "edpm4-u4-fr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is greater: 3/5 or 2/3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/5" },
              { id: "b", text: "2/3" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing fractions",
                statement: "2/3 ≈ 0.67 > 3/5 = 0.6.",
              },
            ],
            steps: [{ reasoning: "2/3 > 3/5.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 2/3",
            commonErrors: ["Wrong comparison."],
          },
        },
        {
          id: "edpm4-u4-fr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order from smallest to largest: 1/2, 1/4, 3/4",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering fractions",
                statement: "1/4 < 1/2 < 3/4.",
              },
            ],
            steps: [
              {
                reasoning: "Convert to quarters: 1/4, 2/4, 3/4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Order: 1/4, 1/2, 3/4.", marks: 1, markCode: "M" },
              { reasoning: "Correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4, 1/2, 3/4",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpm4-u4-fr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pizza is cut into 8 slices. Tom eats 3/8 and Ana eats 2/8. What fraction is left?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction addition",
                statement: "3/8 + 2/8 = 5/8; left = 3/8.",
              },
            ],
            steps: [
              { reasoning: "Ate: 3/8 + 2/8 = 5/8.", marks: 1, markCode: "M" },
              { reasoning: "Left: 8/8 - 5/8 = 3/8.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3/8 left.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "3/8",
            commonErrors: ["Wrong fraction."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-problems",
      title: "Multi-Step Problems",
      skill: "Solve complex problems across all Year 4 topics.",
      lesson: {
        sections: [
          {
            heading: "Multi-step strategy",
            body: "Break problems into steps: read carefully, identify what's given and what's asked, plan the steps, calculate each step, check the final answer. For money problems convert to pence first; for time problems work in minutes.",
          },
          {
            heading: "Common problem types",
            body: "Word problems with multiple operations, missing numbers, perimeter/area, fractions of quantities, time durations, and money change. Always estimate first to check if your answer is reasonable.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A shop sells 4 boxes of 12 pencils each. 15 are sold. How many left?",
          solution: "4 × 12 = 48. 48 - 15 = 33 left.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 12 × 8 + 15?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "81" },
              { id: "b", text: "111" },
              { id: "c", text: "96" },
              { id: "d", text: "105" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Order of operations",
                statement: "96 + 15 = 111.",
              },
            ],
            steps: [
              {
                reasoning: "12 × 8 = 96; 96 + 15 = 111.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 111",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpm4-u4-mp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A rectangle has perimeter 30 cm and length 8 cm. What is the width?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7 cm" },
              { id: "b", text: "8 cm" },
              { id: "c", text: "15 cm" },
              { id: "d", text: "22 cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter",
                statement: "2(8+w)=30; w=7.",
              },
            ],
            steps: [
              { reasoning: "8 + w = 15; w = 7.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(a)** 7 cm",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm4-u4-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 36 students. 3/4 of them walk to school. How many walk?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction of quantity",
                statement: "36 ÷ 4 = 9; 9 × 3 = 27.",
              },
            ],
            steps: [
              { reasoning: "36 ÷ 4 = 9.", marks: 1, markCode: "M" },
              { reasoning: "9 × 3 = 27.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 27 walk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27",
            commonErrors: ["Wrong fraction method."],
          },
        },
        {
          id: "edpm4-u4-mp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A train journey starts at 14:20 and lasts 2 hours 45 minutes. What time does it arrive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time problems",
                statement: "14:20 + 2h45m = 17:05.",
              },
            ],
            steps: [
              {
                reasoning: "14:20 + 2 hours = 16:20.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "16:20 + 45 min = 17:05.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17:05.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "17:05",
            commonErrors: ["Wrong time calc."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-stats",
      title: "Statistics and Data",
      skill: "Collect, present and interpret data.",
      lesson: {
        sections: [
          {
            heading: "Charts and graphs",
            body: "Data can be shown as tables, tally charts, pictograms, block graphs, and line graphs. Each shows data differently — tables organise, pictograms visualise, block graphs compare, line graphs show change over time.",
          },
          {
            heading: "Analysing data",
            body: "To analyse: find totals, most/least, differences ('how many more?'), averages (Year 4 may meet mean), and patterns. Always check the scale and key first. Questions often ask for comparisons or totals.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A block graph shows A=6, B=9, C=4. What is the total?",
          solution: "6 + 9 + 4 = 19.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chart is best for showing change over time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pictogram" },
              { id: "b", text: "Line graph" },
              { id: "c", text: "Tally chart" },
              { id: "d", text: "Table" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Charts",
                statement: "Line graphs show change.",
              },
            ],
            steps: [
              {
                reasoning: "Line graph = change over time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Line graph",
            commonErrors: ["Wrong chart."],
          },
        },
        {
          id: "edpm4-u4-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A table shows: red=7, blue=11, green=4. What is the total?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18" },
              { id: "b", text: "22" },
              { id: "c", text: "25" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data totals",
                statement: "7 + 11 + 4 = 22.",
              },
            ],
            steps: [{ reasoning: "7 + 11 + 4 = 22.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 22",
            commonErrors: ["Wrong total."],
          },
        },
        {
          id: "edpm4-u4-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pictogram shows each symbol = 5. Apples have 4 symbols, pears have 3. How many more apples than pears?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pictogram",
                statement: "Apples=20, pears=15; diff=5.",
              },
            ],
            steps: [
              { reasoning: "Apples: 4 × 5 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Pears: 3 × 5 = 15.", marks: 1, markCode: "M" },
              {
                reasoning: "Difference: 20 - 15 = 5.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 more",
            commonErrors: ["Wrong key use."],
          },
        },
        {
          id: "edpm4-u4-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a survey to find out your class's favourite season. Describe data collection and presentation.",
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
                reasoning: "Clear question: 'What is your favourite season?'",
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
