import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edpm4-u3-lesson-3-1",
  code: "3-1",
  title: "Area, Perimeter and Angles",
  goal: "I CAN calculate area and perimeter of rectangles and identify acute, right, obtuse and reflex angles.",
  standards: ["Year 4 Geometry"],
  vocabulary: [
    {
      term: "Area",
      definition:
        "The space inside a 2D shape, measured in square units (cm²).",
    },
    {
      term: "Perimeter",
      definition: "The distance around the edge of a shape.",
    },
    { term: "Acute angle", definition: "An angle smaller than 90°." },
    { term: "Right angle", definition: "An angle of exactly 90°." },
    { term: "Obtuse angle", definition: "An angle between 90° and 180°." },
    {
      term: "Reflex angle",
      definition: "An angle bigger than 180° but less than 360°.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u3-area",
      title: "Area and perimeter",
      skill: "Calculate area and perimeter of rectangles and compound shapes.",
      lesson: {
        sections: [
          {
            heading: "Area of a rectangle",
            body: "Area = length × width, measured in **square units** (cm², m²). A 5 cm × 3 cm rectangle: area = 15 cm² — 15 squares of 1 cm² fit inside. Perimeter = 2 × (5 + 3) = 16 cm.",
          },
          {
            heading: "Area of compound shapes",
            body: "Split into rectangles, find each area, add. An L-shape made of 4×3 and 2×2 rectangles: 12 + 4 = 16 cm². For perimeter, trace the outer edge carefully.",
          },
        ],
        keyFormulas: [
          { name: "Area", statement: "A = length × width (square units)" },
          { name: "Perimeter", statement: "P = 2 × (length + width)" },
        ],
        workedExample: {
          problem: "Find the area of a 7 m × 4 m rectangle.",
          solution: "Area = 7 × 4 = 28 m². Perimeter = 2 × (7 + 4) = 22 m.",
        },
      },
      questions: [
        {
          id: "edpm4-u3-ap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a 5 cm × 3 cm rectangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16 cm²" },
              { id: "b", text: "15 cm²" },
              { id: "c", text: "8 cm²" },
              { id: "d", text: "30 cm²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area", statement: "5 × 3 = 15 cm²." },
            ],
            steps: [
              {
                reasoning: "Area = length × width = 15 cm².",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 15 cm²",
            commonErrors: ["Adding 5+3=8 — that's not area."],
          },
        },
        {
          id: "edpm4-u3-ap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the perimeter of a 8 m × 5 m rectangle?",
          response: {
            type: "numeric",
            parts: [
              { label: "Perimeter", answer: 26, tolerance: 0, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Perimeter",
                statement: "P = 2 × (8 + 5) = 26 m.",
              },
            ],
            steps: [
              { reasoning: "8 + 5 = 13.", marks: 1, markCode: "M" },
              { reasoning: "13 × 2 = 26.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 26 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26 m",
            commonErrors: ["Answering 40 — that's area (8×5)."],
          },
        },
        {
          id: "edpm4-u3-ap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A square has area 36 cm². What is its perimeter?",
          response: {
            type: "numeric",
            parts: [
              { label: "Perimeter", answer: 24, tolerance: 0, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Area to side to perimeter",
                statement: "Side = √36 = 6; P = 4 × 6 = 24.",
              },
            ],
            steps: [
              {
                reasoning: "Area 36 = side × side → side = 6 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Perimeter = 4 × 6 = 24 cm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 24 cm.", marks: 1, markCode: "A" },
              {
                reasoning: "Two-step reasoning shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24 cm",
            commonErrors: ["Answering 36 — confusing area with perimeter."],
          },
        },
        {
          id: "edpm4-u3-ap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An L-shaped garden is made of two rectangles: 6 m × 4 m and 3 m × 2 m (the small rectangle overlaps the corner).",
          parts: [
            {
              label: "a",
              prompt: "Find the total area if the rectangles don't overlap.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If the small rectangle overlaps a 3 m × 2 m corner of the big one, what is the actual area?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain why area and perimeter are different measurements.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound area",
                statement: "Add areas; subtract overlap.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "6×4 = 24; 3×2 = 6; total 30 m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 30 m².",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Overlap = 3×2 = 6 m² counted twice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Actual = 30 − 6 = 24 m².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 24 m².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Overlap handled.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Area = inside space (m²); perimeter = edge distance (m).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Different units and meanings.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "30 m²; 24 m² (subtract overlap); area=inside, perimeter=edge",
            commonErrors: ["Not subtracting the overlapping area."],
          },
        },
      ],
    },
    {
      id: "edpm4-u3-angles",
      title: "Angles and lines",
      skill:
        "Identify and measure angles; recognise parallel and perpendicular lines.",
      lesson: {
        sections: [
          {
            heading: "Types of angles",
            body: "**Acute** < 90° (sharp), **right** = 90° (square corner), **obtuse** 90–180° (wide), **reflex** > 180° (more than a straight line, like a Pac-Man mouth opening wide). Measure with a protractor.",
          },
          {
            heading: "Parallel and perpendicular",
            body: "**Parallel** lines never meet (like railway tracks) — marked with arrows. **Perpendicular** lines meet at exactly 90°. In a rectangle: opposite sides are parallel, adjacent sides are perpendicular.",
          },
        ],
        keyFormulas: [
          {
            name: "Angles",
            statement: "acute < 90 < obtuse < 180 < reflex < 360",
          },
          {
            name: "Lines",
            statement: "parallel = never meet; perpendicular = 90°",
          },
        ],
        workedExample: {
          problem: "An angle measures 120°. What type is it?",
          solution: "Between 90° and 180° → obtuse.",
        },
      },
      questions: [
        {
          id: "edpm4-u3-ang-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An angle of 200° is what type?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acute" },
              { id: "b", text: "Right" },
              { id: "c", text: "Obtuse" },
              { id: "d", text: "Reflex" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reflex",
                statement: "200° > 180° → reflex.",
              },
            ],
            steps: [
              {
                reasoning: "Bigger than straight line → reflex.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Reflex",
            commonErrors: ["Calling it obtuse — obtuse stops at 180°."],
          },
        },
        {
          id: "edpm4-u3-ang-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two lines meet at 90°. What are they called?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perpendicular",
                statement: "Lines meeting at 90° are perpendicular.",
              },
            ],
            steps: [
              {
                reasoning: "90° angle = right angle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lines at right angles = perpendicular.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer: perpendicular lines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Perpendicular",
            commonErrors: ["Saying parallel — parallel lines never meet."],
          },
        },
        {
          id: "edpm4-u3-ang-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A protractor shows an angle between 90° and 180°. Name the type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obtuse",
                statement: "90° < angle < 180° = obtuse.",
              },
            ],
            steps: [
              {
                reasoning: "Bigger than right angle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Smaller than straight line.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: obtuse.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Obtuse",
            commonErrors: ["Confusing with reflex which is > 180°."],
          },
        },
        {
          id: "edpm4-u3-ang-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A rectangle has angles of 90° at each corner.",
          parts: [
            {
              label: "a",
              prompt: "How many right angles does it have?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Are the opposite sides parallel or perpendicular?",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Are adjacent sides parallel or perpendicular?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rectangle properties",
                statement:
                  "4 right angles; opposite parallel; adjacent perpendicular.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "4 corners × 90° = 4 right angles.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Answer: 4.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Opposite sides never meet → parallel.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both pairs of opposite sides.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Adjacent sides meet at 90° → perpendicular.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "All four corners are right angles.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "4; opposite sides parallel; adjacent sides perpendicular",
            commonErrors: [
              "Saying adjacent sides are parallel — they meet at 90°.",
            ],
          },
        },
      ],
    },
  ],
};
