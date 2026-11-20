import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "cilm-u10-lesson-10-3",
  code: "10-3",
  title: "Stage 9 Checkpoint — Geometry, Measure and Statistics",
  goal: "I CAN apply geometry, measure and statistics skills at Stage 9 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Checkpoint Stage 9: geometry, measure, statistics",
  ],
  stage: 9,
  vocabulary: [
    { term: "Angle", definition: "Measure of turn between two lines." },
    { term: "Area", definition: "Space inside a 2D shape (units²)." },
    { term: "Mean", definition: "Average — sum divided by count." },
    { term: "Median", definition: "Middle value when data is ordered." },
    {
      term: "Range",
      definition: "Difference between largest and smallest values.",
    },
  ],
  concepts: [
    {
      id: "cilm-u10-s9-geometry",
      title: "Stage 9 geometry and measure checkpoint",
      skill: "Calculate angles, areas and volumes.",
      lesson: {
        sections: [
          {
            heading: "Geometry",
            body: "Angles on a line = 180°, around a point = 360°; triangle angles = 180°. Area of rectangle, triangle, parallelogram; volume of cuboid.",
          },
        ],
        keyFormulas: [
          { name: "Triangle angles", statement: "Sum = $180°$" },
          {
            name: "Areas",
            statement:
              "Rectangle $= lw$; triangle $= \\frac12 bh$; parallelogram $= bh$",
          },
          { name: "Volume", statement: "Cuboid $= lwh$" },
        ],
        workedExample: {
          problem:
            "Triangle angles 50° and 70° — find third. Area of triangle with base 10 and height 6.",
          solution:
            "Third angle $= 180 - 50 - 70 = 60°$. Area $= \\frac12 \\times 10 \\times 6 = 30$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s9-g-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles of a triangle are 65° and 45°. What is the third angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "70°" },
              { id: "b", text: "65°" },
              { id: "c", text: "75°" },
              { id: "d", text: "60°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Triangle angles",
                statement: "Sum = 180°.",
              },
            ],
            steps: [
              { reasoning: "$180 - 65 - 45 = 70°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70°",
          },
        },
        {
          id: "cilm-u10-s9-g-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a parallelogram with base 12 cm and height 7 cm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Parallelogram area",
                statement: "$A = bh$.",
              },
            ],
            steps: [
              {
                reasoning: "$A = 12 \\times 7 = 84\\ cm^2$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$84\\ cm^2$",
          },
        },
        {
          id: "cilm-u10-s9-g-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cuboid measures 5 cm × 4 cm × 3 cm. Find its volume and surface area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cuboid",
                statement: "$V = lwh$; $SA = 2(lw + lh + wh)$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = 5 \\times 4 \\times 3 = 60\\ cm^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$SA = 2(20 + 15 + 12) = 94\\ cm^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$60\\ cm^3$ and $94\\ cm^2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60\\ cm^3$, $94\\ cm^2$",
          },
        },
        {
          id: "cilm-u10-s9-g-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A garden is a rectangle 12 m by 8 m with a circular pond of radius 2 m. Find the grass area ($\\pi = 3.14$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composite area",
                statement: "Grass = rectangle − circle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rectangle $= 96\\ m^2$; pond $= \\pi r^2 = 3.14 \\times 4 = 12.56\\ m^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Grass $= 96 - 12.56 = 83.44\\ m^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$83.44\\ m^2$ (accept $83.4$).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Method of subtracting pond correct.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$83.44\\ m^2$",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s9-stats",
      title: "Stage 9 statistics checkpoint",
      skill: "Calculate mean, median, mode and range; interpret data.",
      lesson: {
        sections: [
          {
            heading: "Statistics",
            body: "Mean = sum ÷ count; median = middle of ordered data; mode = most frequent; range = max − min. Choose the right average for the situation.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\sum x}{n}$" },
          { name: "Range", statement: "$\\text{max} - \\text{min}$" },
        ],
        workedExample: {
          problem: "Find mean, median and range of 4, 7, 7, 9, 13.",
          solution: "Mean $= 40/5 = 8$; median $= 7$; range $= 13 - 4 = 9$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s9-s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of 3, 5, 7, 9, 11.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "5" },
              { id: "c", text: "8" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mean", statement: "Sum ÷ count." },
            ],
            steps: [
              {
                reasoning: "Sum $= 35$, count $= 5$, mean $= 7$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cilm-u10-s9-s-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the median of 2, 5, 9, 12, 15, 18.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Median",
                statement: "Middle value(s) of ordered data.",
              },
            ],
            steps: [
              {
                reasoning: "Even count → median $= (9 + 12)/2 = 10.5$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "10.5",
          },
        },
        {
          id: "cilm-u10-s9-s-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Scores: 6, 8, 8, 10, 12, 15, 15, 15. Find mode and range.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mode and range",
                statement: "Mode = most frequent; range = max − min.",
              },
            ],
            steps: [
              {
                reasoning: "Mode $= 15$ (appears 3 times).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Range $= 15 - 6 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Mode 15, range 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mode 15, range 9",
          },
        },
        {
          id: "cilm-u10-s9-s-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two classes have means 72 and 78. Class A has 20 students, Class B has 30. Find overall mean.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Combined mean",
                statement: "Total sum ÷ total count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total sum $= 20 \\times 72 + 30 \\times 78 = 1440 + 2340 = 3780$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Total count $= 50$.", marks: 1, markCode: "M" },
              {
                reasoning: "Mean $= 3780/50 = 75.6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$75.6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75.6",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s9-mx",
      title: "Stage 9 mixed checkpoint",
      skill:
        "Apply geometry, measure, statistics and probability skills together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine angles, area and volume, averages and simple probability. Identify the correct formula before calculating.",
          },
        ],
        keyFormulas: [
          { name: "Area of rectangle", statement: "$A = l \\times w$" },
          {
            name: "Mean",
            statement:
              "$\\bar{x} = \\frac{\\text{sum of values}}{\\text{number of values}}$",
          },
        ],
        workedExample: {
          problem: "Find the mean of $4, 8, 6, 10$.",
          solution: "Sum $= 28$; mean $= 28 \\div 4 = 7$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s9-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles on a straight line add up to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90^{\\circ}$" },
              { id: "b", text: "$180^{\\circ}$" },
              { id: "c", text: "$270^{\\circ}$" },
              { id: "d", text: "$360^{\\circ}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Straight line angle",
                statement: "Angles on a straight line sum to $180^{\\circ}$.",
              },
            ],
            steps: [
              {
                reasoning: "A straight line forms a $180^{\\circ}$ angle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$180^{\\circ}$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle measures $8\\ cm$ by $5\\ cm$. Calculate its area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Area of rectangle",
                statement: "$A = l \\times w$.",
              },
            ],
            steps: [
              { reasoning: "$A = 8 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 40\\ cm^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\ cm^2$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean of $4, 7, 9, 12, 14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mean",
                statement: "Add all values, divide by count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum $= 4 + 7 + 9 + 12 + 14 = 46$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Count $= 5$ values.", marks: 1, markCode: "M" },
              {
                reasoning: "Mean $= 46 \\div 5 = 9.2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9.2",
          },
        },
        {
          id: "cilm-u10-s9-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cuboid has length $5\\ cm$, width $4\\ cm$ and height $3\\ cm$. Calculate its volume and total surface area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cuboid",
                statement: "$V = lwh$; surface area $= 2(lw + lh + wh)$.",
              },
            ],
            steps: [
              {
                reasoning: "Volume $= 5 \\times 4 \\times 3 = 60\\ cm^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Face areas: $lw = 20$, $lh = 15$, $wh = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Surface area $= 2(20 + 15 + 12) = 94\\ cm^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$V = 60\\ cm^3$, surface area $= 94\\ cm^2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60\\ cm^3$; $94\\ cm^2$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u10-stage9-geometry-stats-notes",
      title: "Stage 9 geometry, measure and statistics — revision notes",
      summary: "Angles, areas, volumes, mean/median/mode/range.",
      sections: [
        {
          heading: "Geometry",
          body: "Triangle angles sum 180°; areas: rectangle lw, triangle ½bh, parallelogram bh; cuboid V = lwh, SA = 2(lw+lh+wh).",
        },
        {
          heading: "Statistics",
          body: "Mean = Σx/n; median = middle of ordered data (average two middles if even); range = max − min.",
        },
      ],
    },
  ],
};
