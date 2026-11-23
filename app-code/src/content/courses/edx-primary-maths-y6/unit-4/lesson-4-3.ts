import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpm6-u4-lesson-4-3",
  code: "4-3",
  title: "Geometry, Statistics and Reasoning",
  goal: "I CAN solve problems using geometry, statistics and reasoning.",
  standards: ["Year 6 Problem Solving"],
  vocabulary: [
    {
      term: "Mean",
      definition: "The average: sum of values divided by count.",
    },
    { term: "Median", definition: "The middle value when data is ordered." },
    { term: "Mode", definition: "The most frequent value." },
    { term: "Range", definition: "Largest value minus smallest value." },
  ],
  concepts: [
    {
      id: "edpm6-u4-stats",
      title: "Statistics: Mean, Median, Mode and Range",
      skill: "Calculate and interpret measures of central tendency and spread.",
      lesson: {
        sections: [
          {
            heading: "Mean",
            body: "Mean = sum of all values ÷ number of values. For 4, 8, 6, 10, 2: sum = 30, count = 5, mean = 6. The mean can be affected by extreme values.",
          },
          {
            heading: "Median, mode and range",
            body: "Median = middle value when ordered (for even counts, average the two middle values). Mode = most frequent. Range = largest - smallest. These summarise data differently; choose the appropriate one for the question.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum ÷ count" },
          { name: "Range", statement: "Largest - smallest" },
        ],
        workedExample: {
          problem: "Find mean, median, mode and range of 3, 7, 7, 9, 4",
          solution: "Mean = 6; median = 7; mode = 7; range = 6.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of 5, 10, 15?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "10" },
              { id: "c", text: "15" },
              { id: "d", text: "30" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mean", statement: "30 ÷ 3 = 10." },
            ],
            steps: [
              {
                reasoning: "Sum = 30; count = 3; mean = 10.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 10",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm6-u4-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the median of 2, 5, 8, 11, 14?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "8" },
              { id: "c", text: "11" },
              { id: "d", text: "7.5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Median", statement: "Middle value = 8." },
            ],
            steps: [
              {
                reasoning: "Ordered: 2, 5, 8, 11, 14; middle = 8.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Wrong position."],
          },
        },
        {
          id: "edpm6-u4-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean and range of 6, 9, 12, 15, 8",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Statistics",
                statement: "Mean = 10; range = 9.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = 50; count = 5; mean = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Largest = 15, smallest = 6; range = 9.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mean = 10, range = 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mean 10, range 9",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm6-u4-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two classes have the same mean score of 70. Class A scores: 60, 70, 80. Class B scores: 65, 70, 75. Which class has the smaller range? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Range comparison",
                statement: "A range = 20; B range = 10; B is smaller.",
              },
            ],
            steps: [
              {
                reasoning: "Class A range: 80 - 60 = 20.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Class B range: 75 - 65 = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Class B has smaller range (10 < 20).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Class B",
            commonErrors: ["Wrong comparison."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-geometry",
      title: "Geometry: Angles and Shapes",
      skill: "Solve geometry problems involving angles and shape properties.",
      lesson: {
        sections: [
          {
            heading: "Angles in polygons",
            body: "Sum of interior angles: triangle = 180°, quadrilateral = 360°, pentagon = 540°, hexagon = 720°. Regular polygons have equal angles. Exterior angle = 360° ÷ number of sides for regular polygons.",
          },
          {
            heading: "Shape properties",
            body: "Identify shapes by properties: parallel sides, equal sides, angles, symmetry. Composite shapes: break into simpler shapes to find area or perimeter. Coordinates: plot points, find lengths and midpoints.",
          },
        ],
        keyFormulas: [
          { name: "Polygon angles", statement: "Sum = (n - 2) × 180°" },
          { name: "Exterior angle", statement: "360° ÷ n for regular polygon" },
        ],
        workedExample: {
          problem: "Find each interior angle of a regular hexagon",
          solution: "Sum = (6-2) × 180 = 720; each = 720 ÷ 6 = 120°.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-ge-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of interior angles of a pentagon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "360°" },
              { id: "b", text: "540°" },
              { id: "c", text: "720°" },
              { id: "d", text: "900°" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polygon angles",
                statement: "(5-2) × 180 = 540°.",
              },
            ],
            steps: [
              { reasoning: "(5-2) × 180 = 540°.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 540°",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm6-u4-ge-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Each interior angle of a regular hexagon is 120°. What is each exterior angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "60°" },
              { id: "b", text: "120°" },
              { id: "c", text: "30°" },
              { id: "d", text: "240°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exterior angles",
                statement: "180 - 120 = 60°.",
              },
            ],
            steps: [
              {
                reasoning: "Interior + exterior = 180°; exterior = 60°.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 60°",
            commonErrors: ["Wrong relationship."],
          },
        },
        {
          id: "edpm6-u4-ge-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find each interior angle of a regular octagon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polygon angles",
                statement: "Sum = 1080; each = 135°.",
              },
            ],
            steps: [
              {
                reasoning: "Sum = (8-2) × 180 = 1080°.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Each = 1080 ÷ 8 = 135°.", marks: 1, markCode: "M" },
              {
                reasoning: "Each interior angle = 135°.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "135°",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm6-u4-ge-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A regular polygon has exterior angles of 30°. How many sides does it have?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exterior angles",
                statement: "360 ÷ 30 = 12 sides.",
              },
            ],
            steps: [
              {
                reasoning: "Exterior angles sum to 360°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Number of sides = 360 ÷ 30 = 12.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It is a dodecagon (12 sides).",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "12 sides",
            commonErrors: ["Wrong formula."],
          },
        },
      ],
    },
    {
      id: "edpm6-u4-reasoning",
      title: "Reasoning and Problem Solving",
      skill: "Apply advanced reasoning to complex problems.",
      lesson: {
        sections: [
          {
            heading: "Reasoning strategies",
            body: "Break problems into stages. Look for patterns and relationships. Use algebra to represent unknowns. Check if answers are sensible. For multi-step problems, plan before calculating. Estimation helps verify results.",
          },
          {
            heading: "Common problem types",
            body: "Algebra word problems: define variables, write equations. Percentage problems: work backwards from final amounts. Ratio problems: find one part then scale. Geometry problems: use angle rules and area formulas. Always check units and that answers answer the question.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Three consecutive numbers sum to 51. Find them.",
          solution:
            "n + (n+1) + (n+2) = 51 → 3n + 3 = 51 → n = 16. Numbers: 16, 17, 18.",
        },
      },
      questions: [
        {
          id: "edpm6-u4-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the best strategy for a complex word problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Break into stages and plan" },
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
                statement: "Plan first.",
              },
            ],
            steps: [
              {
                reasoning: "Break into stages before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Break into stages",
            commonErrors: ["Wrong approach."],
          },
        },
        {
          id: "edpm6-u4-re-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: 3x - 7 = 14",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "9" },
              { id: "c", text: "21" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "3x = 21; x = 7.",
              },
            ],
            steps: [{ reasoning: "3x = 21; x = 7.", marks: 2, markCode: "B" }],
            finalAnswer: "**(a)** 7",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm6-u4-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A number multiplied by 3 then added to 5 equals 26. Find the number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Algebra",
                statement: "3n + 5 = 26; n = 7.",
              },
            ],
            steps: [
              { reasoning: "Equation: 3n + 5 = 26.", marks: 1, markCode: "M" },
              { reasoning: "3n = 21; n = 7.", marks: 1, markCode: "M" },
              { reasoning: "Number = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
            commonErrors: ["Wrong equation."],
          },
        },
        {
          id: "edpm6-u4-re-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shopkeeper buys 100 items at £2 each. He sells 60% at £3 each and the rest at £2.50 each. What is the total revenue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step",
                statement:
                  "60 items at £3 = £180; 40 items at £2.50 = £100; total £280.",
              },
            ],
            steps: [
              { reasoning: "60% of 100 = 60 items.", marks: 1, markCode: "M" },
              {
                reasoning: "60 × £3 = £180; 40 × £2.50 = £100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total revenue = £180 + £100 = £280.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "£280",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
  ],
};
