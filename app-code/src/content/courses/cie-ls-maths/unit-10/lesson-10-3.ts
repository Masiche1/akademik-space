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
              { id: "b", text: "60°" },
              { id: "c", text: "65°" },
              { id: "d", text: "75°" },
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
        {
          id: "cilm-u10-s9-g-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles around a point add up to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$360^{\\circ}$" },
              { id: "b", text: "$180^{\\circ}$" },
              { id: "c", text: "$270^{\\circ}$" },
              { id: "d", text: "$90^{\\circ}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Angles at a point",
                statement: "A full turn is $360^{\\circ}$.",
              },
            ],
            steps: [
              {
                reasoning: "Angles around a point complete a full turn.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$360^{\\circ}$",
          },
        },
        {
          id: "cilm-u10-s9-g-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a rectangle measuring $15$ cm by $8$ cm.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 120, unit: "cm^2" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Rectangle area",
                statement: "$A=lw$.",
              },
            ],
            steps: [
              {
                reasoning: "$A=15\\times8=120$ cm².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Area is $120$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120\\ cm^2$",
          },
        },
        {
          id: "cilm-u10-s9-g-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The area of a triangle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$b+h$" },
              { id: "b", text: "$\\frac12bh$" },
              { id: "c", text: "$\\frac12(b+h)$" },
              { id: "d", text: "$bh$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Triangle area",
                statement: "$A=\\frac12bh$.",
              },
            ],
            steps: [
              {
                reasoning: "Half the base times perpendicular height.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac12bh$",
          },
        },
        {
          id: "cilm-u10-s9-g-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cuboid has dimensions $6$ cm, $5$ cm and $4$ cm. Find its volume.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 120, unit: "cm^3" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cuboid volume",
                statement: "$V=lwh$.",
              },
            ],
            steps: [
              {
                reasoning: "$6\\times5=30$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$30\\times4=120$ cm³.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Volume is $120$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120\\ cm^3$",
          },
        },
        {
          id: "cilm-u10-s9-g-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The total surface area of a cuboid is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$lwh$" },
              { id: "b", text: "$lw+lh+wh$" },
              { id: "c", text: "$2(l+w+h)$" },
              { id: "d", text: "$2(lw+lh+wh)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Surface area",
                statement: "Add three pairs of faces.",
              },
            ],
            steps: [
              {
                reasoning: "$2(lw+lh+wh)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2(lw+lh+wh)$",
          },
        },
        {
          id: "cilm-u10-s9-g-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two angles of a triangle are $54^{\\circ}$ and $61^{\\circ}$. Find the third angle.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 65, unit: "degrees" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Triangle angles",
                statement: "Angles sum to $180^{\\circ}$.",
              },
            ],
            steps: [
              {
                reasoning: "$180-54-61=65$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Third angle is $65^{\\circ}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65^{\\circ}$",
          },
        },
        {
          id: "cilm-u10-s9-g-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle $9$ m by $4$ m?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18$ m" },
              { id: "b", text: "$13$ m" },
              { id: "c", text: "$36$ m" },
              { id: "d", text: "$26$ m" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Perimeter",
                statement: "$P=2(l+w)$.",
              },
            ],
            steps: [
              {
                reasoning: "$2(9+4)=26$ m.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$26$ m",
          },
        },
        {
          id: "cilm-u10-s9-g-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular field is $30$ m by $20$ m. A square pond of side $6$ m is inside it. Find the area of grass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composite area",
                statement: "Subtract pond area from field area.",
              },
            ],
            steps: [
              {
                reasoning: "Field area is $30\\times20=600$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pond area is $6\\times6=36$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Grass area is $600-36=564$ m².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Grass area is $564$ m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$564\\ m^2$",
          },
        },
        {
          id: "cilm-u10-s9-g-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the volume of a cube with side length $7$ cm.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume", answer: 343, unit: "cm^3" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cube volume",
                statement: "$V=s^3$.",
              },
            ],
            steps: [
              {
                reasoning: "$V=7^3=343$ cm³.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Volume is $343$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$343\\ cm^3$",
          },
        },
        {
          id: "cilm-u10-s9-g-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles on a straight line add up to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$180^{\\circ}$" },
              { id: "b", text: "$360^{\\circ}$" },
              { id: "c", text: "$270^{\\circ}$" },
              { id: "d", text: "$90^{\\circ}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Straight line",
                statement: "Angles sum to $180^{\\circ}$.",
              },
            ],
            steps: [
              {
                reasoning: "A straight line is a half-turn.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$180^{\\circ}$",
          },
        },
        {
          id: "cilm-u10-s9-g-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A triangular sail has base $10$ m and height $6$ m. Find its area. Then find the total area of two identical sails.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Area",
                statement: "$A=\\frac12bh$.",
              },
            ],
            steps: [
              {
                reasoning: "One sail area is $\\frac12\\times10\\times6=30$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two sails have area $2\\times30=60$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Units are correct.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "One sail $30$ m²; two sails $60$ m².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Final answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\ m^2$; $60\\ m^2$",
          },
        },
        {
          id: "cilm-u10-s9-g-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which method finds the area of a composite shape made from a rectangle and a triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiply all dimensions" },
              { id: "b", text: "Add all side lengths" },
              { id: "c", text: "Add or subtract the component areas" },
              { id: "d", text: "Average the areas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composite area",
                statement: "Decompose into known shapes.",
              },
            ],
            steps: [
              {
                reasoning: "Add or subtract component areas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Add or subtract component areas",
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
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "8" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cilm-u10-s9-s-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the mean of $4, 8, 12, 16$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "10" },
              { id: "c", text: "40" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mean",
                statement: "Sum divided by count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum $=40$, count $=4$, mean $=10$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cilm-u10-s9-s-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the median of $3, 7, 9, 12, 15$.",
          response: {
            type: "numeric",
            parts: [{ label: "Median", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Median",
                statement: "Middle value of ordered data.",
              },
            ],
            steps: [
              {
                reasoning: "The middle value is $9$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Median is $9$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cilm-u10-s9-s-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mode of $2, 5, 5, 8, 8, 8, 11$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "No mode" },
              { id: "c", text: "11" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement: "Most frequent value.",
              },
            ],
            steps: [
              {
                reasoning: "$8$ appears three times.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cilm-u10-s9-s-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the range of $14, 6, 22, 9, 17$.",
          response: {
            type: "numeric",
            parts: [{ label: "Range", answer: 16 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Range",
                statement: "Maximum minus minimum.",
              },
            ],
            steps: [
              {
                reasoning: "Maximum $=22$, minimum $=6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Range $=16$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "cilm-u10-s9-s-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which average is most affected by an extreme outlier?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mode" },
              { id: "b", text: "Range" },
              { id: "c", text: "Mean" },
              { id: "d", text: "Median" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Choice of average",
                statement: "Mean uses every value.",
              },
            ],
            steps: [
              {
                reasoning: "An outlier changes the sum and therefore the mean.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mean",
          },
        },
        {
          id: "cilm-u10-s9-s-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of $5, 7, 9, 11, 13, 15$.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mean",
                statement: "Sum divided by count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum $=60$, count $=6$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mean $=10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cilm-u10-s9-s-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the median of $4, 8, 10, 14$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Median",
                statement: "Even count: average the two middle values.",
              },
            ],
            steps: [
              {
                reasoning: "Median $=\\frac{8+10}{2}=9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cilm-u10-s9-s-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the data $6, 8, 8, 10, 13$, find the mean, median, mode and range.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Averages",
                statement: "Mean, median, mode and range each use the data differently.",
              },
            ],
            steps: [
              {
                reasoning: "Sum $=45$, mean $=9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Median is $8$; mode is $8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range is $13-6=7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mean $9$, median $8$, mode $8$, range $7$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mean $9$, median $8$, mode $8$, range $7$",
          },
        },
        {
          id: "cilm-u10-s9-s-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Class A has 12 students with mean score $70$. Class B has 18 students with mean score $80$. Find the overall mean.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 76 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Combined mean",
                statement: "Total sum divided by total count.",
              },
            ],
            steps: [
              {
                reasoning: "Total sum $=12(70)+18(80)=840+1440=2280$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total count $=30$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mean $=2280\\div30=76$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "76",
          },
        },
        {
          id: "cilm-u10-s9-s-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the range of $21, 15, 30, 8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "38" },
              { id: "b", text: "15" },
              { id: "c", text: "30" },
              { id: "d", text: "22" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Range",
                statement: "$30-8=22$.",
              },
            ],
            steps: [
              {
                reasoning: "Maximum $30$, minimum $8$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "22",
          },
        },
        {
          id: "cilm-u10-s9-s-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two classes have the same mean but different ranges. Explain what this tells you about the spread of their scores and which average would be more useful for comparing typical performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Interpreting statistics",
                statement: "Mean describes typical value; range describes spread.",
              },
            ],
            steps: [
              {
                reasoning: "Equal means show similar typical scores.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different ranges show different spread; larger range means more variation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mean is useful for typical performance; range or another spread measure is needed for consistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear interpretation given.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same typical score, different spread; use mean plus spread measure",
          },
        },
        {
          id: "cilm-u10-s9-s-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mode of $4, 7, 7, 9, 12, 12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "7" },
              { id: "c", text: "7 and 12" },
              { id: "d", text: "No mode" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement: "There can be more than one mode.",
              },
            ],
            steps: [
              {
                reasoning: "$7$ and $12$ each appear twice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7$ and $12$",
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
              { id: "b", text: "$360^{\\circ}$" },
              { id: "c", text: "$180^{\\circ}$" },
              { id: "d", text: "$270^{\\circ}$" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cilm-u10-s9-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles of a triangle are $47^{\\circ}$ and $58^{\\circ}$. What is the third angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$105^{\\circ}$" },
              { id: "b", text: "$75^{\\circ}$" },
              { id: "c", text: "$85^{\\circ}$" },
              { id: "d", text: "$65^{\\circ}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Triangle angles",
                statement: "Angles sum to $180^{\\circ}$.",
              },
            ],
            steps: [
              {
                reasoning: "$180-47-58=75$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$75^{\\circ}$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a rectangle $13$ cm by $7$ cm.",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 91, unit: "cm^2" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Rectangle area",
                statement: "$A=lw$.",
              },
            ],
            steps: [
              {
                reasoning: "$13\\times7=91$ cm².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Area is $91$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$91\\ cm^2$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The volume of a cuboid is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$lw$" },
              { id: "b", text: "$2(lw+lh+wh)$" },
              { id: "c", text: "$l+w+h$" },
              { id: "d", text: "$lwh$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cuboid volume",
                statement: "$V=lwh$.",
              },
            ],
            steps: [
              {
                reasoning: "Volume is length × width × height.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$lwh$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of $6, 10, 14, 18, 22$.",
          response: {
            type: "numeric",
            parts: [{ label: "Mean", answer: 14 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mean",
                statement: "Sum divided by count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum $=70$, count $=5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mean $=14$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cilm-u10-s9-mx-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the median of $5, 9, 12, 16, 20$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "10" },
              { id: "c", text: "9" },
              { id: "d", text: "16" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Median",
                statement: "Middle value of ordered data.",
              },
            ],
            steps: [
              {
                reasoning: "The middle value is $12$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cilm-u10-s9-mx-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cuboid measures $4$ cm by $3$ cm by $2$ cm. Find its total surface area.",
          response: {
            type: "numeric",
            parts: [{ label: "Surface area", answer: 52, unit: "cm^2" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cuboid",
                statement: "$SA=2(lw+lh+wh)$.",
              },
            ],
            steps: [
              {
                reasoning: "Face areas are $lw=12$, $lh=8$, $wh=6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$SA=2(12+8+6)=52$ cm².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Surface area is $52$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$52\\ cm^2$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has $3$ red and $7$ blue counters. What is the probability of choosing red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{10}{3}$" },
              { id: "b", text: "$\\frac{3}{10}$" },
              { id: "c", text: "$\\frac{3}{7}$" },
              { id: "d", text: "$\\frac{7}{10}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probability",
                statement: "Favourable outcomes divided by total outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "$P=\\frac{3}{10}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{10}$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A rectangular courtyard is $18$ m by $12$ m. A circular fountain of radius $3$ m is inside it ($\\pi=3.14$). Find the paved area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Composite area",
                statement: "Rectangle minus circle.",
              },
            ],
            steps: [
              {
                reasoning: "Courtyard area is $18\\times12=216$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fountain area is $3.14\\times3^2=28.26$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Paved area is $216-28.26=187.74$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Units are correct.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Paved area is $187.74$ m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$187.74\\ m^2$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the range of $8, 12, 17, 23, 11$.",
          response: {
            type: "numeric",
            parts: [{ label: "Range", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Range",
                statement: "Maximum minus minimum.",
              },
            ],
            steps: [
              {
                reasoning: "Maximum $=23$, minimum $=8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Range $=15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cilm-u10-s9-mx-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rule finds missing angles in a triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are all equal" },
              { id: "b", text: "They sum to $180^{\\circ}$" },
              { id: "c", text: "They sum to $90^{\\circ}$" },
              { id: "d", text: "They sum to $360^{\\circ}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Triangle angles",
                statement: "Interior angles sum to $180^{\\circ}$.",
              },
            ],
            steps: [
              {
                reasoning: "Triangle angles sum to $180^{\\circ}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "They sum to $180^{\\circ}$",
          },
        },
        {
          id: "cilm-u10-s9-mx-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A rectangular hall measures $25$ m by $14$ m. Carpet costs $\\pounds12$ per square metre. Find the carpet cost. Then find the mean cost per square metre if a $10\\%$ discount is applied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed problem",
                statement: "Area then cost, then percentage reduction.",
              },
            ],
            steps: [
              {
                reasoning: "Area is $25\\times14=350$ m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost is $350\\times12=4200$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Discounted cost is $4200\\times0.9=3780$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mean cost per m² is $3780\\div350=10.80$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\pounds4200$; discounted $\\pounds3780$; $\\pounds10.80$ per m².",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\pounds4200$; $\\pounds3780$; $\\pounds10.80$ per m²",
          },
        },
        {
          id: "cilm-u10-s9-mx-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which average is best for describing the typical shoe size in a class?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mode" },
              { id: "b", text: "Range" },
              { id: "c", text: "Mean" },
              { id: "d", text: "Median" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Choice of average",
                statement: "Mode identifies the most common size.",
              },
            ],
            steps: [
              {
                reasoning: "Mode is most useful for typical shoe size.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mode",
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
