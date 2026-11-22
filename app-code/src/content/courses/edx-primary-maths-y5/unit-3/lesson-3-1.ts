import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "edpm5-u3-lesson-3-1",
  code: "3-1",
  title: "Area and Volume",
  goal: "I CAN calculate area of rectangles and volume of cuboids.",
  standards: ["Year 5 Measurement"],
  vocabulary: [
    {
      term: "Volume",
      definition: "The space inside a 3D shape, measured in cubic units (cm³).",
    },
    {
      term: "Cubic centimetre",
      definition: "A cube measuring 1 cm × 1 cm × 1 cm.",
    },
    {
      term: "Area",
      definition: "2D space inside a shape, measured in square units (cm²).",
    },
    { term: "Cuboid", definition: "A 3D box shape with rectangular faces." },
  ],
  concepts: [
    {
      id: "edpm5-u3-area",
      title: "Area of rectangles",
      skill: "Calculate area of rectangles and compound rectilinear shapes.",
      lesson: {
        sections: [
          {
            heading: "Rectangle area",
            body: "Area = length × width in **square units**. 6 cm × 4 cm = 24 cm². For compound shapes, split into rectangles, find each area, add. An L-shape = two rectangles.",
          },
          {
            heading: "From area to side",
            body: "If area = 24 cm² and width = 4 cm, length = 24 ÷ 4 = 6 cm. Rearrange: length = area ÷ width. Useful for missing dimensions.",
          },
        ],
        keyFormulas: [
          { name: "Area", statement: "A = length × width (cm²)" },
          { name: "Missing side", statement: "length = area ÷ width" },
        ],
        workedExample: {
          problem: "Find the area of a 9 m × 5 m rectangle.",
          solution: "9 × 5 = 45 m².",
        },
      },
      questions: [
        {
          id: "edpm5-u3-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a 6 cm × 4 cm rectangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20 cm²" },
              { id: "b", text: "24 cm²" },
              { id: "c", text: "48 cm²" },
              { id: "d", text: "10 cm²" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area", statement: "6 × 4 = 24 cm²." },
            ],
            steps: [
              { reasoning: "Area = length × width.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 24 cm²",
            commonErrors: ["Adding 6+4=10 — that's perimeter-ish."],
          },
        },
        {
          id: "edpm5-u3-ar-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has area 35 cm² and width 5 cm. What is its length?",
          response: {
            type: "numeric",
            parts: [{ label: "Length", answer: 7, tolerance: 0, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Area rearranged",
                statement: "length = area ÷ width = 35 ÷ 5 = 7.",
              },
            ],
            steps: [
              { reasoning: "length = area ÷ width.", marks: 1, markCode: "M" },
              { reasoning: "35 ÷ 5 = 7.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 cm",
            commonErrors: ["Multiplying 35 × 5 instead of dividing."],
          },
        },
        {
          id: "edpm5-u3-ar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An L-shaped room is made of two rectangles: 5 m × 4 m and 3 m × 2 m. What is the total floor area?",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 26, tolerance: 0, unit: "m²" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound area",
                statement: "5×4=20; 3×2=6; total 26 m².",
              },
            ],
            steps: [
              {
                reasoning: "First rectangle: 5 × 4 = 20 m².",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Second: 3 × 2 = 6 m².", marks: 1, markCode: "M" },
              { reasoning: "Total: 20 + 6 = 26 m².", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26 m²",
            commonErrors: ["Adding dimensions instead of multiplying."],
          },
        },
        {
          id: "edpm5-u3-ar-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A rectangular garden is 12 m × 8 m. A path 1 m wide runs around the inside edge.",
          parts: [
            {
              label: "a",
              prompt: "What is the area of the whole garden?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What are the dimensions of the inner area (inside the path)?",
              marks: 4,
            },
            { label: "c", prompt: "What is the area of the path?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound area",
                statement: "Whole 96 m²; inner 10×6=60 m²; path 96−60=36 m².",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "12 × 8 = 96 m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 96 m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Path 1 m each side: length 12−2=10, width 8−2=6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Inner dimensions: 10 m × 6 m.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Path area = 96 − 60 = 36 m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or sum four strips: 12+12+6+6=36.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 36 m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "96 m²; 10×6 m; 36 m²",
            commonErrors: [
              "Subtracting only 1 m total instead of 2 m (both sides).",
            ],
          },
        },
      ],
    },
    {
      id: "edpm5-u3-volume",
      title: "Volume of cuboids",
      skill: "Calculate volume of cuboids using cubic units.",
      lesson: {
        sections: [
          {
            heading: "What is volume?",
            body: "Volume = space inside a 3D shape, measured in **cubic units** (cm³, m³). A 1 cm cube has volume 1 cm³. Count the cubes that fit inside.",
          },
          {
            heading: "Volume formula",
            body: "For a cuboid: **V = length × width × height**. A 4 cm × 3 cm × 2 cm box: V = 4 × 3 × 2 = 24 cm³. Think: area of base (4×3=12) × height (2) = 24.",
          },
        ],
        keyFormulas: [
          { name: "Volume", statement: "V = length × width × height (cm³)" },
          { name: "Base × height", statement: "Volume = base area × height" },
        ],
        workedExample: {
          problem: "Find the volume of a 5 cm × 4 cm × 3 cm box.",
          solution: "5 × 4 × 3 = 60 cm³.",
        },
      },
      questions: [
        {
          id: "edpm5-u3-vol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a 4 cm × 3 cm × 2 cm cuboid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 cm³" },
              { id: "b", text: "48 cm³" },
              { id: "c", text: "9 cm³" },
              { id: "d", text: "24 cm³" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume",
                statement: "4 × 3 × 2 = 24 cm³.",
              },
            ],
            steps: [{ reasoning: "4×3=12, ×2=24.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 24 cm³",
            commonErrors: ["Adding dimensions: 4+3+2=9."],
          },
        },
        {
          id: "edpm5-u3-vol-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A box is 6 cm × 5 cm × 4 cm. What is its volume?",
          response: {
            type: "numeric",
            parts: [
              { label: "Volume", answer: 120, tolerance: 0, unit: "cm³" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Volume",
                statement: "6 × 5 × 4 = 120 cm³.",
              },
            ],
            steps: [
              { reasoning: "6 × 5 = 30.", marks: 1, markCode: "M" },
              { reasoning: "30 × 4 = 120.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120 cm³",
            commonErrors: ["Answering 15 — adding instead of multiplying."],
          },
        },
        {
          id: "edpm5-u3-vol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cube has volume 27 cm³. What is the length of each edge?",
          response: {
            type: "numeric",
            parts: [{ label: "Edge", answer: 3, tolerance: 0, unit: "cm" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cube volume",
                statement: "3 × 3 × 3 = 27 → edge = 3 cm.",
              },
            ],
            steps: [
              {
                reasoning: "Cube: all sides equal; find n where n³ = 27.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "3 × 3 × 3 = 27.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 cm.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 cm",
            commonErrors: ["Dividing 27 by 3 = 9 — that's not the cube root."],
          },
        },
        {
          id: "edpm5-u3-vol-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A storage box is 50 cm × 40 cm × 30 cm.",
          parts: [
            { label: "a", prompt: "What is its volume in cm³?", marks: 3 },
            {
              label: "b",
              prompt: "What is its volume in litres? (1 litre = 1000 cm³)",
              marks: 3,
            },
            {
              label: "c",
              prompt: "If you fill it with 1-litre bottles, how many fit?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volume problems",
                statement: "50×40×30=60 000 cm³; =60 litres; 60 bottles.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "50 × 40 = 2 000; × 30 = 60 000 cm³.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 60 000 cm³.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "60 000 ÷ 1000 = 60 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 60 litres.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Conversion shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "60 litres ÷ 1 litre = 60 bottles.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 60 bottles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Assumes perfect packing.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "60 000 cm³; 60 litres; 60 bottles",
            commonErrors: ["Forgetting 1 litre = 1000 cm³ conversion."],
          },
        },
      ],
    },
  ],
};
