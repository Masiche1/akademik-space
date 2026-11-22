import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edpm3-u3-lesson-3-1",
  code: "3-1",
  title: "2D and 3D Shapes",
  goal: "I CAN describe and sort 2D and 3D shapes by their properties including angles.",
  standards: ["Year 3 Geometry"],
  vocabulary: [
    { term: "2D shape", definition: "A flat shape with sides and vertices." },
    {
      term: "3D shape",
      definition: "A solid shape with faces, edges and vertices.",
    },
    { term: "Right angle", definition: "A square corner of 90 degrees." },
    { term: "Acute angle", definition: "An angle smaller than a right angle." },
    {
      term: "Obtuse angle",
      definition:
        "An angle bigger than a right angle but smaller than a straight line.",
    },
    {
      term: "Parallel",
      definition: "Lines that stay the same distance apart and never meet.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u3-shapes",
      title: "Shape properties and angles",
      skill:
        "Name and describe 2D and 3D shapes, identify right angles and compare angles.",
      lesson: {
        sections: [
          {
            heading: "2D shapes review",
            body: "Recall: circle, triangle, square, rectangle, pentagon, hexagon, octagon. Count sides and vertices. A square has 4 equal sides and 4 right angles; a rectangle has 4 sides with opposite sides equal and 4 right angles; a triangle can have 0, 1, 2 or 3 right/acute/obtuse angles.",
          },
          {
            heading: "Angles",
            body: "Angles measure turns. A **right angle** is exactly 90° — like a book corner. An **acute** angle is smaller (sharp, like a slice of pizza). An **obtuse** angle is bigger than right but less than 180° (wide, like a opened laptop). A **straight line** is 180°.",
          },
          {
            heading: "3D shapes",
            body: "Recall: cube, cuboid, sphere, cylinder, cone, pyramid. Describe by faces, edges, vertices. A cube has 6 square faces, 12 edges, 8 vertices. A cylinder has 2 circular faces and 1 curved surface. Sort shapes by properties: curved surfaces, right angles, number of faces.",
          },
        ],
        keyFormulas: [
          {
            name: "Angles",
            statement: "acute < right (90°) < obtuse < straight (180°)",
          },
          {
            name: "Shape properties",
            statement: "sides, vertices, faces, edges, angles",
          },
        ],
        workedExample: {
          problem: "How many right angles does a rectangle have?",
          solution:
            "4 — one at each corner. All four corners are square corners.",
        },
      },
      questions: [
        {
          id: "edpm3-u3-shape-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which angle is bigger than a right angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Right" },
              { id: "b", text: "Obtuse" },
              { id: "c", text: "Acute" },
              { id: "d", text: "Straight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obtuse",
                statement: "Obtuse > 90° but < 180°.",
              },
            ],
            steps: [
              {
                reasoning: "Obtuse angle is bigger than right.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Obtuse",
            commonErrors: [
              "Choosing straight — that's 180°, bigger than obtuse.",
            ],
          },
        },
        {
          id: "edpm3-u3-shape-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many right angles does a square have?",
          response: {
            type: "numeric",
            parts: [{ label: "Right angles", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square",
                statement: "Square has 4 right angles.",
              },
            ],
            steps: [
              {
                reasoning: "Square = 4 equal sides, 4 corners.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Each corner is a right angle.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: [
              "Answering 4 sides instead of 4 right angles — coincidentally same number.",
            ],
          },
        },
        {
          id: "edpm3-u3-shape-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has one angle bigger than a right angle. What type of angle is it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obtuse",
                statement: "Bigger than right but less than straight = obtuse.",
              },
            ],
            steps: [
              {
                reasoning: "Bigger than 90° but less than 180°.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "That's the definition of obtuse.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: obtuse.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning clear.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Obtuse angle",
            commonErrors: ["Saying right angle — confusing 'bigger than'."],
          },
        },
        {
          id: "edpm3-u3-shape-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Sort these shapes: square, circle, cube, cylinder, triangle, sphere.",
          parts: [
            { label: "a", prompt: "Sort into 2D and 3D shapes.", marks: 3 },
            {
              label: "b",
              prompt: "Which shapes have curved surfaces?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Which shape has the most vertices? How many?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shape sorting",
                statement:
                  "2D flat vs 3D solid; curved vs flat; count vertices.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2D: square, circle, triangle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "3D: cube, cylinder, sphere.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Curved: circle, cylinder, sphere.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All three correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning about curved surfaces.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Cube has most vertices: 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Triangle has 3, square 4, circle 0.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: cube, 8 vertices.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Comparison shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "2D: square, circle, triangle; 3D: cube, cylinder, sphere; curved: circle, cylinder, sphere; cube (8 vertices)",
            commonErrors: ["Counting edges as vertices."],
          },
        },
      ],
    },
    {
      id: "edpm3-u3-shape-patterns",
      title: "Shape patterns and symmetry",
      skill: "Continue complex patterns and identify lines of symmetry.",
      lesson: {
        sections: [
          {
            heading: "Complex patterns",
            body: "Patterns can repeat with more complex chunks: ▲■●▲■● or A B B A B B. Find the repeating unit, then continue. Some patterns grow: 1 square, 2 squares, 3 squares... or shrink. Look at the rule, not just the shapes.",
          },
          {
            heading: "Symmetry in 2D shapes",
            body: "A shape has symmetry if both halves match when folded. Square: 4 lines. Rectangle: 2. Equilateral triangle: 3. Circle: infinite. Scalene triangle: 0. Regular hexagon: 6.",
          },
          {
            heading: "Symmetry in letters and patterns",
            body: "Letters like A, H, I, M, O, T, U, V, W, X, Y have vertical symmetry. Letters like B, C, D, E, H, I, K (depending on font) have horizontal symmetry. Patterns can have symmetry too — a repeated ABBA pattern is symmetric.",
          },
        ],
        keyFormulas: [
          { name: "Symmetry", statement: "Fold line where halves match" },
          {
            name: "Lines",
            statement:
              "Square=4, Rectangle=2, Equilateral triangle=3, Circle=infinite",
          },
        ],
        workedExample: {
          problem: "Does a scalene triangle have any lines of symmetry?",
          solution:
            "No — all three sides are different lengths, so no fold makes both halves match.",
        },
      },
      questions: [
        {
          id: "edpm3-u3-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Continue: ▲ ■ ● ▲ ■ ● __",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "●" },
              { id: "b", text: "■" },
              { id: "c", text: "◆" },
              { id: "d", text: "▲" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeating pattern",
                statement: "Chunk is ▲■●; next repeats ▲.",
              },
            ],
            steps: [
              { reasoning: "After ● comes ▲ again.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** ▲",
            commonErrors: ["Saying ■ — not restarting the chunk."],
          },
        },
        {
          id: "edpm3-u3-sp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many lines of symmetry does an equilateral triangle have?",
          response: {
            type: "numeric",
            parts: [{ label: "Lines", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilateral triangle",
                statement: "3 equal sides → 3 lines of symmetry.",
              },
            ],
            steps: [
              {
                reasoning: "Equilateral = all sides equal.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Each vertex to opposite side midpoint = symmetry line.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 0 — confusing with scalene."],
          },
        },
        {
          id: "edpm3-u3-sp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle has 2 lines of symmetry. Where are they?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rectangle symmetry",
                statement:
                  "Horizontal through middle + vertical through middle.",
              },
            ],
            steps: [
              {
                reasoning: "One horizontal line through the centre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One vertical line through the centre.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both described clearly.", marks: 1, markCode: "A" },
              {
                reasoning: "Not diagonal (unless square).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Horizontal and vertical lines through the centre",
            commonErrors: [
              "Including diagonals — rectangle diagonals don't create symmetry.",
            ],
          },
        },
        {
          id: "edpm3-u3-sp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A pattern repeats: red square, blue circle, red square, blue circle...",
          parts: [
            { label: "a", prompt: "What is the repeating chunk?", marks: 2 },
            { label: "b", prompt: "What is the 9th shape? Explain.", marks: 4 },
            {
              label: "c",
              prompt:
                "If you fold the pattern in half after 8 shapes, is it symmetric? Explain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pattern and symmetry",
                statement:
                  "Chunk = red-blue; odd=red, even=blue; ABAB is symmetric.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Chunk: red square, blue circle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Alternating two shapes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Odd positions = red, even = blue.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "9 is odd → red square.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: red square.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "8 shapes = 4 complete chunks.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Folding after position 4: positions 1-4 mirror 8-5? Check: pos1=red, pos8=blue — not matching.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Answer: No, not symmetric (red≠blue at mirror positions).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning about mirror positions.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "red-blue; 9th is red square; no, not symmetric",
            commonErrors: [
              "Assuming ABAB is always symmetric — it depends on fold point.",
            ],
          },
        },
      ],
    },
  ],
};
