import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edpm2-u3-lesson-3-1",
  code: "3-1",
  title: "2D and 3D Shapes",
  goal: "I CAN name, describe and sort 2D and 3D shapes by their properties.",
  standards: ["Year 2 Geometry"],
  vocabulary: [
    {
      term: "2D shape",
      definition: "A flat shape with sides and corners, e.g. triangle, square.",
    },
    {
      term: "3D shape",
      definition: "A solid shape you can hold, e.g. cube, sphere.",
    },
    { term: "Vertex (vertices)", definition: "A corner where two sides meet." },
    { term: "Face", definition: "A flat surface of a 3D shape." },
    { term: "Edge", definition: "Where two faces of a 3D shape meet." },
    {
      term: "Right angle",
      definition: "A square corner, like the corner of a book.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u3-shapes",
      title: "Naming and describing shapes",
      skill:
        "Name 2D and 3D shapes and describe them by sides, vertices, faces and edges.",
      lesson: {
        sections: [
          {
            heading: "2D shapes",
            body: "Learn these 2D shapes: **circle** (1 curved side, 0 vertices), **triangle** (3 sides, 3 vertices), **square** (4 equal sides, 4 right-angle vertices), **rectangle** (4 sides, opposite equal, 4 right angles), **pentagon** (5 sides), **hexagon** (6 sides), **octagon** (8 sides). Count sides and vertices to identify them.",
          },
          {
            heading: "3D shapes",
            body: "Learn these 3D shapes: **cube** (6 square faces, 12 edges, 8 vertices), **cuboid** (6 rectangular faces), **sphere** (perfectly round, no faces/edges/vertices), **cylinder** (2 circular faces, 1 curved face), **cone** (1 circular face, 1 curved face, 1 vertex), **pyramid** (triangular faces meeting at a point).",
          },
          {
            heading: "Sorting by properties",
            body: "Shapes can be sorted many ways: by number of sides (triangles together), by whether they have curved sides (circle, sphere), by right angles (square, rectangle), or by faces. A good sort uses one clear rule for all shapes.",
          },
        ],
        keyFormulas: [
          {
            name: "Shape vocabulary",
            statement:
              "sides/edges, vertices (corners), faces (3D flat surfaces)",
          },
          {
            name: "Sorting",
            statement: "Use one clear rule: sides, angles, curves or faces",
          },
        ],
        workedExample: {
          problem: "How many faces, edges and vertices does a cube have?",
          solution: "Cube: 6 faces (all squares), 12 edges, 8 vertices.",
        },
      },
      questions: [
        {
          id: "edpm2-u3-shape-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which 2D shape has 6 sides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pentagon" },
              { id: "b", text: "Hexagon" },
              { id: "c", text: "Octagon" },
              { id: "d", text: "Square" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hexagon",
                statement: "Hexa- = six.",
              },
            ],
            steps: [
              { reasoning: "Hexagon has 6 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Hexagon",
            commonErrors: ["Choosing pentagon — off by one."],
          },
        },
        {
          id: "edpm2-u3-shape-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many vertices does a triangle have?",
          response: {
            type: "numeric",
            parts: [{ label: "Vertices", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vertices",
                statement: "Triangle has 3 corners.",
              },
            ],
            steps: [
              {
                reasoning: "Triangle = 3 sides, 3 corners.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Vertices = corners = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: [
              "Counting sides as vertices incorrectly — they happen to match for triangles.",
            ],
          },
        },
        {
          id: "edpm2-u3-shape-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cuboid has 6 faces. How many of its faces are rectangles?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cuboid",
                statement: "All 6 faces of a cuboid are rectangles.",
              },
            ],
            steps: [
              {
                reasoning: "Cuboid = box shape with rectangular faces.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "All 6 faces are rectangles.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning about faces.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "6 (all faces)",
            commonErrors: ["Saying 4 — confusing with sides of a face."],
          },
        },
        {
          id: "edpm2-u3-shape-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You have these shapes: circle, square, triangle, sphere, cube, cylinder.",
          parts: [
            {
              label: "a",
              prompt: "Sort them into 2D shapes and 3D shapes.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Which shapes have curved surfaces?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Which shape has the most vertices? Explain how you counted.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shape properties",
                statement:
                  "2D flat vs 3D solid; curves vs flat; count vertices.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2D: circle, square, triangle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "3D: sphere, cube, cylinder.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both groups correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Curved: circle, sphere, cylinder.",
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
                reasoning: "Reasoning about curved vs flat.",
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
                reasoning: "Counted cube's corners: 8.",
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
                reasoning: "Comparison with other shapes shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "2D: circle, square, triangle; 3D: sphere, cube, cylinder; curved: circle, sphere, cylinder; cube with 8 vertices",
            commonErrors: ["Counting edges as vertices."],
          },
        },
      ],
    },
    {
      id: "edpm2-u3-shape-patterns",
      title: "Shape patterns and symmetry",
      skill: "Continue shape patterns and identify simple symmetry.",
      lesson: {
        sections: [
          {
            heading: "Shape patterns",
            body: "Patterns repeat in a chunk: ▲■▲■▲■ continues ▲■. Find the repeating unit first, then repeat it. Patterns can mix shapes, colours and sizes: big red circle, small blue circle, big red circle, small blue circle...",
          },
          {
            heading: "Symmetry",
            body: "A shape has **symmetry** if you can fold it so both halves match exactly — the fold line is the **line of symmetry**. A square has 4 lines of symmetry, a rectangle has 2, a circle has infinite. Test by folding or mirroring mentally.",
          },
          {
            heading: "Mirror images",
            body: "A mirror image flips left-right. The letter 'b' mirrors to 'd'. Shapes like triangles and squares look the same in a mirror along certain lines. Practise spotting which shapes have symmetry and how many lines.",
          },
        ],
        keyFormulas: [
          {
            name: "Symmetry",
            statement: "Fold line where both halves match exactly",
          },
          {
            name: "Lines of symmetry",
            statement:
              "Square=4, rectangle=2, circle=infinite, triangle=varies",
          },
        ],
        workedExample: {
          problem: "How many lines of symmetry does a rectangle have?",
          solution:
            "2 — one horizontal through the middle, one vertical. (Not diagonal, unless it's a square.)",
        },
      },
      questions: [
        {
          id: "edpm2-u3-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Continue the pattern: circle, square, circle, square, __",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "circle" },
              { id: "b", text: "square" },
              { id: "c", text: "triangle" },
              { id: "d", text: "rectangle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeating pattern",
                statement: "Chunk is circle-square; next is circle.",
              },
            ],
            steps: [
              {
                reasoning: "Pattern alternates; after square comes circle.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** circle",
            commonErrors: ["Saying square — not tracking position."],
          },
        },
        {
          id: "edpm2-u3-sp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many lines of symmetry does a square have?",
          response: {
            type: "numeric",
            parts: [{ label: "Lines of symmetry", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square symmetry",
                statement:
                  "Square has 4: horizontal, vertical, both diagonals.",
              },
            ],
            steps: [
              {
                reasoning: "Square: horizontal, vertical, 2 diagonals.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Total = 4.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 2 — missing the diagonals."],
          },
        },
        {
          id: "edpm2-u3-sp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape has a line of symmetry. What does that mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "Both halves match when folded along the line.",
              },
            ],
            steps: [
              {
                reasoning: "Folding along the line makes both halves match.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The two sides are mirror images.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear definition.", marks: 1, markCode: "R" },
              {
                reasoning: "Uses 'line of symmetry' correctly.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Both halves match exactly when folded along the line",
            commonErrors: ["Confusing with pattern repetition."],
          },
        },
        {
          id: "edpm2-u3-sp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Draw or describe a shape pattern: red triangle, blue triangle, red triangle, blue triangle...",
          parts: [
            { label: "a", prompt: "What is the repeating chunk?", marks: 2 },
            {
              label: "b",
              prompt: "What is the 7th shape in the pattern?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "If the pattern changes to red, blue, blue repeating, what are the next 3 shapes after 'red'?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pattern analysis",
                statement: "Identify chunk, count position, apply new rule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Chunk: red triangle, blue triangle.",
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
                reasoning: "7th: odd positions are red (1,3,5,7).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "7 is odd → red triangle.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: red triangle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning about position parity.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "New chunk: red, blue, blue.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "After red comes blue, blue.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Next 3: blue, blue, red (start of next chunk).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Pattern continuation correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "red-blue; 7th is red triangle; blue, blue, red",
            commonErrors: ["For part (c), not restarting the chunk correctly."],
          },
        },
      ],
    },
  ],
};
