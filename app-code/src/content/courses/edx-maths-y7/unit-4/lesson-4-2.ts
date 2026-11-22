import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edm7-u4-lesson-4-2",
  code: "4-2",
  title: "Area, Perimeter and Measure",
  goal: "I CAN calculate area and perimeter of rectangles and compound shapes, and convert metric units.",
  standards: ["Edexcel KS3 Maths — Measures"],
  vocabulary: [
    {
      term: "Perimeter",
      definition: "The distance around the outside of a shape.",
    },
    {
      term: "Area",
      definition:
        "The amount of surface covered by a shape, measured in square units.",
    },
    {
      term: "Compound shape",
      definition: "A shape made by joining two or more simple shapes.",
    },
    {
      term: "Metric conversion",
      definition: "Converting between units — mm, cm, m, km; ml, cl, l; g, kg.",
    },
  ],
  concepts: [
    {
      id: "edm7-u4-area",
      title: "Area and Perimeter",
      skill:
        "Calculate area and perimeter of rectangles, triangles and compound shapes.",
      lesson: {
        sections: [
          {
            heading: "Basic formulas",
            body: "**Rectangle**: area $= l \\times w$; perimeter $= 2(l + w)$. **Triangle**: area $= \\frac{1}{2} \\times b \\times h$ — height must be perpendicular to base. **Parallelogram**: area $= b \\times h$ (perpendicular height, not slant side).\n\nUnits: area in cm², m² (square units); perimeter in cm, m (linear units). Always include units in answers.",
          },
          {
            heading: "Compound shapes",
            body: "Break compound shapes into simple parts — add areas for combined shape, subtract for cut-outs. Perimeter needs care: only count **external edges** — internal lines where shapes join don't count.\n\nExample: L-shape = rectangle minus rectangle. Area = big − small. Perimeter = sum of all outer edges — trace the outline carefully.",
          },
        ],
        keyFormulas: [
          {
            name: "Rectangle",
            statement: "Area $= lw$; Perimeter $= 2(l+w)$.",
          },
          {
            name: "Triangle",
            statement: "Area $= \\frac{1}{2}bh$ — perpendicular height.",
          },
        ],
        workedExample: {
          problem: "A rectangle is 8 cm by 5 cm. Find area and perimeter.",
          solution:
            "Area $= 8 \\times 5 = 40$ cm². Perimeter $= 2(8 + 5) = 26$ cm.",
        },
      },
      questions: [
        {
          id: "edm7-u4-area-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A rectangle is 6 cm by 4 cm. What is its area?",
          response: {
            type: "numeric",
            parts: [{ label: "Area in cm²", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rectangle area",
                statement: "$A = l \\times w$.",
              },
            ],
            steps: [
              {
                reasoning: "$6 \\times 4 = 24$ cm².",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$24$ cm²",
            commonErrors: ["Answering 20 — adding instead of multiplying."],
          },
        },
        {
          id: "edm7-u4-area-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has base 10 cm and perpendicular height 6 cm. Find its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Area in cm²", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triangle area",
                statement: "$A = \\frac{1}{2}bh$ with perpendicular height.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{1}{2} \\times 10 \\times 6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 5 \\times 6 = 30$ cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct with units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30$ cm²",
            commonErrors: [
              "Forgetting the $\\frac{1}{2}$.",
              "Using slant height.",
            ],
          },
        },
        {
          id: "edm7-u4-area-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An L-shape is made from a 10 cm × 8 cm rectangle with a 4 cm × 3 cm corner removed. Find its area.",
          response: {
            type: "numeric",
            parts: [{ label: "Area in cm²", answer: 68 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Compound shape area",
                statement: "Area = large rectangle − cut-out.",
              },
            ],
            steps: [
              {
                reasoning: "Big rectangle: $10 \\times 8 = 80$ cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cut-out: $4 \\times 3 = 12$ cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$80 - 12 = 68$ cm².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$68$ cm²",
            commonErrors: [
              "Adding instead of subtracting.",
              "Including internal edges.",
            ],
          },
        },
        {
          id: "edm7-u4-area-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A garden is 12 m × 9 m with a 3 m × 2 m shed in one corner.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the garden's total area.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the lawn area (excluding shed).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Calculate the fencing needed around the whole garden.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Area and perimeter in context",
                statement: "Area subtracts shed; perimeter only outer edges.",
              },
            ],
            steps: [
              {
                reasoning: "$12 \\times 9 = 108$ m².",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Shed: $3 \\times 2 = 6$ m².",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Lawn: $108 - 6 = 102$ m².",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Perimeter: $2(12 + 9) = 42$ m.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Shed inside doesn't affect perimeter.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 108 m² (b) 102 m² (c) 42 m",
            commonErrors: [
              "Subtracting shed from perimeter.",
              "Wrong perimeter formula.",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u4-measure",
      title: "Metric Conversions",
      skill: "Convert between metric units of length, mass and capacity.",
      lesson: {
        sections: [
          {
            heading: "Length",
            body: "Metric prefixes: **kilo** (×1000), **centi** (÷100), **milli** (÷1000). Length: $1 \\text{ km} = 1000 \\text{ m} = 100\\,000 \\text{ cm} = 1\\,000\\,000 \\text{ mm}$.\n\n**Converting**: multiply when going to smaller units, divide for larger. $2.5$ km $= 2500$ m; $450$ cm $= 4.5$ m; $3.2$ m $= 320$ cm $= 3200$ mm.",
          },
          {
            heading: "Mass and capacity",
            body: "**Mass**: $1 \\text{ kg} = 1000 \\text{ g}$; $1 \\text{ tonne} = 1000 \\text{ kg}$. **Capacity**: $1 \\text{ l} = 1000 \\text{ ml} = 100 \\text{ cl}$. $750$ ml $= 0.75$ l; $2.3$ kg $= 2300$ g.\n\n**Choosing units**: mm for small objects, cm for everyday, m for rooms/distances, km for journeys. ml for drinks, l for containers, kg for body weight. Consistent units are essential for correct calculations.",
          },
        ],
        keyFormulas: [
          { name: "Length", statement: "km → m → cm → mm: ×1000, ×100, ×10." },
          { name: "Capacity", statement: "l → cl → ml: ×100, ×10." },
        ],
        workedExample: {
          problem: "Convert 2.4 km to metres and 750 ml to litres.",
          solution: "$2.4 \\text{ km} = 2400$ m; $750 \\text{ ml} = 0.75$ l.",
        },
      },
      questions: [
        {
          id: "edm7-u4-measure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Convert 3.5 km to metres.",
          response: {
            type: "numeric",
            parts: [{ label: "Metres", answer: 3500 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Unit conversion",
                statement: "km → m: ×1000.",
              },
            ],
            steps: [
              {
                reasoning: "$3.5 \\times 1000 = 3500$ m.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$3500$ m",
            commonErrors: ["$3.5 \\times 100 = 350$ — wrong multiplier."],
          },
        },
        {
          id: "edm7-u4-measure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 450 cm to metres.",
          response: {
            type: "numeric",
            parts: [{ label: "Metres", answer: 4.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Unit conversion",
                statement: "cm → m: ÷100.",
              },
            ],
            steps: [
              {
                reasoning: "$450 \\div 100$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 4.5$ m.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct with decimal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4.5$ m",
            commonErrors: ["$45$ m — dividing by 10 instead of 100."],
          },
        },
        {
          id: "edm7-u4-measure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A tank holds 2.5 litres. How many 250 ml bottles can it fill?",
          response: {
            type: "numeric",
            parts: [{ label: "Bottles", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Capacity conversion",
                statement:
                  "Convert to same units: 2.5 l = 2500 ml; 2500 ÷ 250 = 10.",
              },
            ],
            steps: [
              {
                reasoning: "$2.5 \\text{ l} = 2500 \\text{ ml}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2500 \\div 250$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 10$ bottles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$ bottles",
            commonErrors: ["Dividing 2.5 by 250 without converting."],
          },
        },
        {
          id: "edm7-u4-measure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A rectangular room is 4.5 m by 3.2 m. Calculate its area in m² and cm².",
          parts: [
            { label: "a", prompt: "Calculate area in m².", marks: 3 },
            { label: "b", prompt: "Convert to cm².", marks: 3 },
            {
              label: "c",
              prompt: "Explain why area units are 'square'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Area with conversions",
                statement: "Area = l × w; convert m² to cm² by ×10,000.",
              },
            ],
            steps: [
              {
                reasoning: "$4.5 \\times 3.2 = 14.4$ m².",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct area.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$14.4 \\times 10\\,000 = 144\\,000$ cm².",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct conversion.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Area covers 2 dimensions.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Square units reflect length × width.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 14.4 m² (b) 144,000 cm² (c) two dimensions",
            commonErrors: [
              "Multiplying by 100 instead of 10,000.",
              "Wrong area calculation.",
            ],
          },
        },
      ],
    },
  ],
};
