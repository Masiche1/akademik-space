import type { Lesson } from "../../../types.ts";

export const lesson217: Lesson = {
  id: "cipm-u2-lesson-2-17",
  code: "2-17",
  title: "Stage 5 — Coordinates, Large Numbers and Fractions of Quantities",
  goal: "I CAN plot coordinates, work with large numbers and find fractions of amounts.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 5: number, position and measure",
  "Cambridge Primary Mathematics 0096 framework substrands: 5Gp, 5Np, 5Nf"],
  stage: 5,
  vocabulary: [
    { term: "Coordinate", definition: "Pair (x, y) locating a point on a grid." },
    { term: "Origin", definition: "Point (0, 0) where axes cross." },
    { term: "Large number", definition: "Numbers into hundreds of thousands or millions." },
    { term: "Fraction of quantity", definition: "e.g. 1/4 of 40 = 10." },
    { term: "Temperature scale", definition: "Degrees with negative values below freezing." },
  ],
  concepts: [
    {
      id: "cipm-u2-s17-coord-fraction",
      title: "Coordinates, large numbers and fractions of quantities",
      skill: "Read and plot first-quadrant coordinates, handle large numbers and find fractions of amounts at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Coordinates and large numbers",
            body: "Coordinates (x, y) locate points: x is across (horizontal), y is up (vertical). Plot (3, 2) by going 3 right, 2 up from origin. Large numbers partition into thousands, hundreds, tens, units — 456,789 = 456 thousand + 789. Multiply/divide by 10 or 100 by moving digits.",
          },
          {
            heading: "Fractions of quantities",
            body: "To find a fraction of an amount, divide then multiply: 1/4 of 40 = 40 ÷ 4 = 10; 3/4 of 40 = 30. For fractions of quantities like '2/5 of 35', divide by denominator (35 ÷ 5 = 7) then multiply by numerator (7 × 2 = 14).",
          },
        ],
        keyFormulas: [
          { name: "Coordinates", statement: "(x, y): x across, y up from origin" },
          { name: "Partition", statement: "456789 = 456 thousands + 789" },
          { name: "Fraction of quantity", statement: "a/b of n = (n ÷ b) × a" },
        ],
        workedExample: {
          problem: "Plot (4, 3) and find 3/5 of 45.",
          solution: "(4,3): 4 right, 3 up. 45 ÷ 5 = 9; 9 × 3 = 27.",
        },
      },
      questions: [
        {
          id: "cipm-u2-cf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the coordinates of a point 5 across and 2 up from the origin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "(5, 2)" },
            { id: "b", text: "(2, 5)" },
            { id: "c", text: "(0, 5)" },
            { id: "d", text: "(5, 0)" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coordinates", statement: "x first, y second." }],
            steps: [{ reasoning: "x=5 across, y=2 up → (5, 2).", marks: 1, markCode: "M" }],
            finalAnswer: "(5, 2)",
          },
        },
        {
          id: "cipm-u2-cf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find 1/4 of 36.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of quantity", statement: "Divide by denominator." }],
            steps: [
              { reasoning: "36 ÷ 4 = 9.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipm-u2-cf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle on a grid has corners at (1,1), (5,1), (5,4) and (1,4). What is its width and height?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinates on grid", statement: "Difference in x = width, y = height." }],
            steps: [
              { reasoning: "Width: 5 − 1 = 4 units.", marks: 1, markCode: "M" },
              { reasoning: "Height: 4 − 1 = 3 units.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 × 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Width 4, height 3",
          },
        },
        {
          id: "cipm-u2-cf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Plot the points (2,5), (6,5), (6,2) and join them — what shape? (b) Find 2/3 of 48. (c) Partition 782,450 into thousands and units. (d) A recipe uses 3/4 cup of flour for 8 pancakes — how much for 16 pancakes? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinates and fractions", statement: "Grid shapes, fraction of quantity, partitioning, proportion." }],
            steps: [
              { reasoning: "(a) Right-angled triangle (or check: 3 right, 3 down → right triangle).", marks: 1, markCode: "M" },
              { reasoning: "(b) 48 ÷ 3 = 16; 16 × 2 = 32.", marks: 1, markCode: "M" },
              { reasoning: "(c) 782,450 = 782 thousands + 450 units.", marks: 1, markCode: "M" },
              { reasoning: "(d) 16 is double 8 → double the flour: 1.5 cups.", marks: 1, markCode: "M" },
              { reasoning: "Proportion reasoning correct.", marks: 1, markCode: "M" },
              { reasoning: "Coordinate plot accurately described.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) right-angled triangle (b) 32 (c) 782 thousands + 450 (d) 1.5 cups",
          },
        },
        {
          id: "cipm-u2-cf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the coordinates of a point 3 across and 4 up from the origin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "(3, 0)" },
            { id: "b", text: "(0, 3)" },
            { id: "c", text: "(3, 4)" },
            { id: "d", text: "(4, 3)" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coordinates", statement: "x across first, y up second." }],
            steps: [{ reasoning: "x = 3, y = 4 → (3, 4).", marks: 1, markCode: "A" }],
            finalAnswer: "(3, 4)",
          },
        },
        {
          id: "cipm-u2-cf-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find 1/5 of 45.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of quantity", statement: "Divide by denominator." }],
            steps: [
              { reasoning: "$45 \\div 5 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipm-u2-cf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The origin on a coordinate grid is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the top right corner" },
            { id: "b", text: "(10, 10)" },
            { id: "c", text: "(0, 0)" },
            { id: "d", text: "(1, 1)" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Origin", statement: "(0, 0)." }],
            steps: [{ reasoning: "Origin = (0, 0).", marks: 1, markCode: "A" }],
            finalAnswer: "(0, 0)",
          },
        },
        {
          id: "cipm-u2-cf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 3/4 of 60.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of quantity", statement: "Divide then multiply." }],
            steps: [
              { reasoning: "$60 \\div 4 = 15$; $15 \\times 3 = 45$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 45.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45",
          },
        },
        {
          id: "cipm-u2-cf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the coordinate (6, 2), the 6 tells you to go…",
          response: { type: "mcq", choices: [
            { id: "a", text: "6 down" },
            { id: "b", text: "6 left" },
            { id: "c", text: "6 across" },
            { id: "d", text: "6 up" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coordinates", statement: "x = across." }],
            steps: [{ reasoning: "First number (x) is the horizontal move → 6 across.", marks: 1, markCode: "A" }],
            finalAnswer: "6 across",
          },
        },
        {
          id: "cipm-u2-cf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) What are the coordinates of a point 7 across and 1 up? (b) Find 2/5 of 50. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinates and fractions", statement: "(x, y); divide by denominator, multiply by numerator." }],
            steps: [
              { reasoning: "(a) (7, 1).", marks: 1, markCode: "M" },
              { reasoning: "(b) $50 \\div 5 = 10$; $10 \\times 2 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) (7, 1) (b) 20",
          },
        },
        {
          id: "cipm-u2-cf-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A point is plotted at (4, 4). It lies…",
          response: { type: "mcq", choices: [
            { id: "a", text: "at the origin" },
            { id: "b", text: "in the first quadrant" },
            { id: "c", text: "on the y-axis" },
            { id: "d", text: "on the x-axis" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Quadrants", statement: "Both positive = first quadrant." }],
            steps: [{ reasoning: "x and y both positive → first quadrant.", marks: 1, markCode: "A" }],
            finalAnswer: "in the first quadrant",
          },
        },
        {
          id: "cipm-u2-cf-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 5/6 of 42.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of quantity", statement: "Divide by denominator, multiply by numerator." }],
            steps: [
              { reasoning: "$42 \\div 6 = 7$; $7 \\times 5 = 35$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "cipm-u2-cf-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A square on a grid has corners at (2,2), (6,2), (6,6), (2,6) — what is its side length? (b) Find 3/7 of 56. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinates and fractions", statement: "Side = difference in coordinates; fraction of quantity." }],
            steps: [
              { reasoning: "(a) Side $= 6 - 2 = 4$ units.", marks: 1, markCode: "M" },
              { reasoning: "(b) $56 \\div 7 = 8$; $8 \\times 3 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 units (b) 24",
          },
        },
        {
          id: "cipm-u2-cf-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find 3/8 of a number you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "divide by 3 then multiply by 8" },
            { id: "b", text: "multiply by 3 then divide by 8 in any order without checking" },
            { id: "c", text: "add 3 and 8" },
            { id: "d", text: "divide by 8 then multiply by 3" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of quantity", statement: "n ÷ b × a." }],
            steps: [{ reasoning: "$n \\div 8 \\times 3$ — divide by denominator first.", marks: 1, markCode: "A" }],
            finalAnswer: "divide by 8 then multiply by 3",
          },
        },
        {
          id: "cipm-u2-cf-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 4/9 of 72.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of quantity", statement: "Divide then multiply." }],
            steps: [
              { reasoning: "$72 \\div 9 = 8$; $8 \\times 4 = 32$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 32.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cipm-u2-cf-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) What are the coordinates of a point 9 across and 5 up? (b) Find 2/3 of 90. (c) Partition 123,456. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinates, fractions, large numbers", statement: "(x, y); a/b of n; place value partitioning." }],
            steps: [
              { reasoning: "(a) (9, 5).", marks: 1, markCode: "M" },
              { reasoning: "(b) $90 \\div 3 = 30$; $30 \\times 2 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $123,456 = 123$ thousands $+ 456$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "M" },
              { reasoning: "Place value groups correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) (9, 5) (b) 60 (c) 123 thousands + 456",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-cf-notes",
      title: "Coordinates and fractions — notes",
      summary: "(x,y): x across y up; a/b of n = (n÷b)×a; partition into thousands.",
      sections: [
        { heading: "Coordinates", body: "Origin (0,0); first quadrant only at this stage." },
        { heading: "Fractions", body: "Divide by bottom number, multiply by top; scale recipes proportionally." },
      ],
    },
  ],
};
