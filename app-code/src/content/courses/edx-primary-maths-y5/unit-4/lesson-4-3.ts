import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm5-u4-lesson-4-3",
  code: "4-3",
  title: "Geometry and Angles",
  goal: "I CAN work with angles, shapes and their properties.",
  standards: ["Year 5 Geometry"],
  vocabulary: [
    { term: "Angle", definition: "The amount of turn between two directions." },
    { term: "Complementary angles", definition: "Two angles that add to 90°." },
    {
      term: "Symmetry",
      definition: "A line dividing a shape into matching halves.",
    },
    {
      term: "Coordinates",
      definition: "Numbers that describe a position on a grid.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u4-angles",
      title: "Angles and Properties",
      skill: "Calculate missing angles using angle rules.",
      lesson: {
        sections: [
          {
            heading: "Angle rules",
            body: "Angles around a point = 360°. Angles on a straight line = 180°. Triangle angles = 180°. Complementary = sum to 90°. Adjacent angles share a side. Year 5 introduces acute (<90°), right (=90°), obtuse (90-180°), reflex (>180°).",
          },
          {
            heading: "Missing angles",
            body: "Find missing angle by subtracting known angles from the total. Triangle: 180° - other two angles. Around a point: 360° - others. On a line: 180° - others. Always state the angle rule used.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "Angles sum to 180°" },
          { name: "Around a point", statement: "Angles sum to 360°" },
        ],
        workedExample: {
          problem: "A triangle has angles 50° and 70°. Find the third.",
          solution: "180 - 50 - 70 = 60°.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles on a straight line are 110° and x°. Find x.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "70°" },
              { id: "b", text: "80°" },
              { id: "c", text: "60°" },
              { id: "d", text: "90°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Angles on line",
                statement: "180 - 110 = 70°.",
              },
            ],
            steps: [{ reasoning: "180 - 110 = 70°.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 70°",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm5-u4-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An angle is 35°. What is its complementary angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "55°" },
              { id: "b", text: "65°" },
              { id: "c", text: "145°" },
              { id: "d", text: "125°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complementary",
                statement: "90 - 35 = 55°.",
              },
            ],
            steps: [
              {
                reasoning: "Complementary angles sum to 90°.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 55°",
            commonErrors: ["Wrong total."],
          },
        },
        {
          id: "edpm5-u4-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has angles 65°, 55° and x°. Find x.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Triangle angles",
                statement: "180 - 120 = 60°.",
              },
            ],
            steps: [
              { reasoning: "65 + 55 = 120°.", marks: 1, markCode: "M" },
              { reasoning: "x = 180 - 120.", marks: 1, markCode: "M" },
              { reasoning: "x = 60°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60°",
            commonErrors: ["Wrong total."],
          },
        },
        {
          id: "edpm5-u4-an-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three angles around a point are 80°, 140° and x°. Find x, then classify it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Angles around point",
                statement: "360 - 220 = 140°; obtuse.",
              },
            ],
            steps: [
              { reasoning: "80 + 140 = 220°.", marks: 1, markCode: "M" },
              { reasoning: "x = 360 - 220 = 140°.", marks: 1, markCode: "M" },
              {
                reasoning: "140° is obtuse (between 90° and 180°).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "140°, obtuse",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-coords",
      title: "Coordinates and Position",
      skill: "Use coordinates to describe positions on a grid.",
      lesson: {
        sections: [
          {
            heading: "Coordinate grids",
            body: "A coordinate grid has x-axis (horizontal) and y-axis (vertical), meeting at origin (0,0). A point is written (x, y): go across then up. (3, 2) means 3 right, 2 up. Negative coordinates go left/down from origin.",
          },
          {
            heading: "Describing shapes",
            body: "Plot points to form shapes: a square needs 4 points with equal sides; a triangle needs 3 non-collinear points. Find missing coordinates by counting grid squares. Use symmetry lines to find mirror points.",
          },
        ],
        keyFormulas: [
          {
            name: "Coordinate order",
            statement: "(x, y) = across first, then up",
          },
        ],
        workedExample: {
          problem: "What point is 4 right and 3 up from origin?",
          solution: "(4, 3).",
        },
      },
      questions: [
        {
          id: "edpm5-u4-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In coordinates (x, y), which number comes first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "y" },
              { id: "b", text: "x" },
              { id: "c", text: "Either" },
              { id: "d", text: "Origin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Coordinates",
                statement: "x first.",
              },
            ],
            steps: [{ reasoning: "Order is (x, y).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** x",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpm5-u4-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the coordinates of a point 5 units right and 2 units up from origin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(2, 5)" },
              { id: "b", text: "(5, 2)" },
              { id: "c", text: "(5, 0)" },
              { id: "d", text: "(0, 5)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coordinates",
                statement: "Across then up = (5, 2).",
              },
            ],
            steps: [{ reasoning: "x = 5, y = 2.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** (5, 2)",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "edpm5-u4-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A square has corners at (1,1), (4,1), (4,4) and (1,4). What is the length of each side?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coordinates",
                statement: "Side = 3 units.",
              },
            ],
            steps: [
              {
                reasoning: "From (1,1) to (4,1): 3 units across.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "From (1,1) to (1,4): 3 units up.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Side length = 3 units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 units",
            commonErrors: ["Wrong counting."],
          },
        },
        {
          id: "edpm5-u4-co-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Point A is at (3, 5). Point B is the reflection of A in the x-axis. What are B's coordinates?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement: "Reflect in x-axis: (3, -5).",
              },
            ],
            steps: [
              { reasoning: "x stays the same.", marks: 1, markCode: "M" },
              { reasoning: "y changes sign: 5 → -5.", marks: 1, markCode: "M" },
              { reasoning: "B = (3, -5).", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(3, -5)",
            commonErrors: ["Wrong reflection."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-symmetry",
      title: "Symmetry and Transformations",
      skill: "Identify symmetry and describe transformations.",
      lesson: {
        sections: [
          {
            heading: "Lines of symmetry",
            body: "A line of symmetry divides a shape into two mirror-image halves. Count lines by testing fold lines. Square = 4, rectangle = 2, equilateral triangle = 3, circle = infinite. Some shapes have no symmetry (scalene triangle).",
          },
          {
            heading: "Transformations",
            body: "Translation = slide (no turn); reflection = flip over a mirror line; rotation = turn around a point. Describe transformations by direction and amount: 'rotate 90° clockwise about the origin'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How many lines of symmetry does a regular hexagon have?",
          solution: "6.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-sy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many lines of symmetry does a rectangle have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "4" },
              { id: "d", text: "0" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "Rectangle = 2.",
              },
            ],
            steps: [
              {
                reasoning: "Rectangle has 2 lines of symmetry.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 2",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edpm5-u4-sy-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which transformation is a 'flip'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translation" },
              { id: "b", text: "Reflection" },
              { id: "c", text: "Rotation" },
              { id: "d", text: "Enlargement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflection",
                statement: "Flip over a line.",
              },
            ],
            steps: [
              { reasoning: "Reflection = flip.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reflection",
            commonErrors: ["Wrong term."],
          },
        },
        {
          id: "edpm5-u4-sy-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Draw or describe how many lines of symmetry an isosceles triangle has.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "Isosceles triangle = 1 line of symmetry.",
              },
            ],
            steps: [
              {
                reasoning: "Isosceles has two equal sides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One line through apex to base midpoint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1 line of symmetry.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1 line",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edpm5-u4-sy-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape at (2, 3) is translated 4 units right and 1 unit down. What are its new coordinates?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Translation",
                statement: "(2+4, 3-1) = (6, 2).",
              },
            ],
            steps: [
              {
                reasoning: "Right = x increases: 2 + 4 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Down = y decreases: 3 - 1 = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "New position = (6, 2).", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(6, 2)",
            commonErrors: ["Wrong direction."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-problem-solving",
      title: "Problem Solving",
      skill: "Solve complex problems using reasoning and strategy.",
      lesson: {
        sections: [
          {
            heading: "Problem-solving approach",
            body: "Read twice. Identify given and required information. Choose a strategy: draw a diagram, work backwards, find a pattern, or break into steps. Estimate first. Check the answer is sensible and units are correct.",
          },
          {
            heading: "Reasoning words",
            body: "Use 'because', 'so', 'therefore', 'which means'. Explain each step. For multi-step problems, show all working — method marks are awarded for correct steps even if the final answer is wrong.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A rectangle has perimeter 30 cm. Its length is 3 cm more than its width. Find the width.",
          solution: "2(w + w + 3) = 30 → 4w + 6 = 30 → w = 6 cm.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-pz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best first step for a word problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Read and underline key information" },
              { id: "c", text: "Guess" },
              { id: "d", text: "Skip" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Problem solving",
                statement: "Read first.",
              },
            ],
            steps: [
              {
                reasoning: "Understand before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Read first",
            commonErrors: ["Wrong approach."],
          },
        },
        {
          id: "edpm5-u4-pz-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: 4x = 36",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "9" },
              { id: "c", text: "7" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations", statement: "x = 9." },
            ],
            steps: [{ reasoning: "36 ÷ 4 = 9.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 9",
            commonErrors: ["Wrong division."],
          },
        },
        {
          id: "edpm5-u4-pz-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle's length is 3 times its width. Its perimeter is 48 cm. Find the width.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Algebra",
                statement: "2(w + 3w) = 48; w = 6.",
              },
            ],
            steps: [
              {
                reasoning: "Perimeter = 2(w + 3w) = 8w.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "8w = 48 → w = 6.", marks: 1, markCode: "M" },
              { reasoning: "Width = 6 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 cm",
            commonErrors: ["Wrong equation."],
          },
        },
        {
          id: "edpm5-u4-pz-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells a shirt for £25. It is reduced by 20%, then the reduced price is increased by 10%. What is the final price?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage change",
                statement: "£20 then £22.",
              },
            ],
            steps: [
              {
                reasoning: "20% of £25 = £5; reduced = £20.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "10% of £20 = £2; final = £22.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Final price = £22.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "£22",
            commonErrors: ["Wrong order or percentage."],
          },
        },
      ],
    },
  ],
};
