import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edpm1-u2-lesson-2-1",
  code: "2-1",
  title: "Fractions of Shapes and Amounts",
  goal: "I CAN recognise halves and quarters and find fractions of shapes and small amounts.",
  standards: ["Year 1 Fractions", "Geometry"],
  vocabulary: [
    {
      term: "Fraction",
      definition: "A part of a whole, like a half or a quarter.",
    },
    { term: "Half", definition: "One of two equal parts of a whole." },
    { term: "Quarter", definition: "One of four equal parts of a whole." },
    {
      term: "Equal parts",
      definition: "Parts that are exactly the same size.",
    },
    {
      term: "Whole",
      definition: "The complete amount or shape before it is split into parts.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u2-fractions",
      title: "Halves and quarters",
      skill:
        "Identify halves and quarters of shapes and find halves and quarters of amounts up to 20.",
      lesson: {
        sections: [
          {
            heading: "Halves and quarters of shapes",
            body: "A fraction only works when the parts are **equal**. A shape split into 2 equal parts has halves — shade one part to show a half. Split into 4 equal parts and each part is a quarter — shade one part for a quarter, two parts for a half, three parts for three quarters.",
          },
          {
            heading: "Halves and quarters of amounts",
            body: "To find half of an amount, split it into 2 equal groups: half of 12 = 6 because 6 + 6 = 12. To find a quarter, split into 4 equal groups: quarter of 12 = 3 because 3 + 3 + 3 + 3 = 12. Halve twice to get a quarter: half of 12 is 6, half of 6 is 3.",
          },
          {
            heading: "Fractions in real life",
            body: "'Half' appears when sharing equally between 2: 10 grapes shared by 2 children = 5 each. 'Quarter' appears when sharing between 4: a pizza cut into 4 equal slices, each slice is a quarter.",
          },
        ],
        keyFormulas: [
          { name: "Half", statement: "half of n = n ÷ 2 (two equal parts)" },
          {
            name: "Quarter",
            statement: "quarter of n = n ÷ 4 (four equal parts)",
          },
        ],
        workedExample: {
          problem: "Find a quarter of 16.",
          solution:
            "Half of 16 = 8. Half of 8 = 4. So a quarter of 16 = 4. Check: 4 + 4 + 4 + 4 = 16.",
        },
      },
      questions: [
        {
          id: "edpm1-u2-frac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is split into 4 equal parts and 1 part is shaded. What fraction is shaded?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One third" },
              { id: "b", text: "A quarter" },
              { id: "c", text: "A half" },
              { id: "d", text: "Three quarters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quarter",
                statement: "1 of 4 equal parts = a quarter.",
              },
            ],
            steps: [
              {
                reasoning: "4 equal parts, 1 shaded → 1/4 = a quarter.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A quarter",
            commonErrors: [
              "Answering half — not checking the number of equal parts.",
            ],
          },
        },
        {
          id: "edpm1-u2-frac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is half of 14?",
          response: {
            type: "numeric",
            parts: [{ label: "Half of 14", answer: 7, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Halving", statement: "7 + 7 = 14." },
            ],
            steps: [
              {
                reasoning: "Look for the number that doubles to 14.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "7 + 7 = 14.", marks: 1, markCode: "M" },
              { reasoning: "Half of 14 = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
            commonErrors: ["Answering 6 — halving once too few/many."],
          },
        },
        {
          id: "edpm1-u2-frac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 20 biscuits on a plate. A quarter of them are chocolate. How many chocolate biscuits are there?",
          response: {
            type: "numeric",
            parts: [{ label: "Chocolate biscuits", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quarter in context",
                statement: "Quarter = split into 4 equal parts.",
              },
            ],
            steps: [
              {
                reasoning: "Quarter of 20: halve twice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Half of 20 = 10, half of 10 = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or share 20 into 4 groups of 5.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer: 5 chocolate biscuits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 biscuits",
            commonErrors: ["Answering 10 (a half) instead of a quarter."],
          },
        },
        {
          id: "edpm1-u2-frac-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A chocolate bar has 8 equal squares.",
          parts: [
            {
              label: "a",
              prompt: "How many squares make a half of the bar?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "If you eat 3 squares, what fraction of the bar is left?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "You give a quarter of the bar to a friend. How many squares do they get, and how many are left for you?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fractions of a whole",
                statement: "Count equal parts to name fractions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Half of 8 = 4 squares.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Answer: 4 squares.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "8 − 3 = 5 squares left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "5 of 8 equal parts = five eighths.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Fraction named correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Quarter of 8 = 2 squares for friend.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Left for you = 8 − 2 = 6 squares.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both answers correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Method shown (share into 4 equal parts).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 squares; five eighths; 2 for friend, 6 left",
            commonErrors: [
              "Naming 5/8 as 'five quarters' — denominator counts total parts.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm1-u2-shapes",
      title: "2D and 3D shapes, position and direction",
      skill:
        "Name and describe 2D and 3D shapes and use position and direction words.",
      lesson: {
        sections: [
          {
            heading: "2D shapes",
            body: "2D shapes are flat. Learn these names: **circle** (round, no corners), **square** (4 equal sides, 4 corners), **rectangle** (4 sides, opposite sides equal), **triangle** (3 sides), **pentagon** (5 sides), **hexagon** (6 sides). A shape's sides are the edges; its corners are called vertices.",
          },
          {
            heading: "3D shapes",
            body: "3D shapes are solid — you can hold them. Learn: **cube** (like a box, 6 square faces), **cuboid** (like a brick), **sphere** (perfectly round, like a ball), **cylinder** (like a tin can), **pyramid** (pointed top), **cone** (pointed top, round base). Count faces, edges and vertices to describe them.",
          },
          {
            heading: "Position and direction",
            body: "Use position words to say where things are: **above, below, next to, between, in front of, behind, left, right**. For directions, learn: **forwards, backwards, left, right, clockwise, anticlockwise**. On a grid, describe position as '2 squares right and 1 square up'.",
          },
        ],
        keyFormulas: [
          {
            name: "Shape vocabulary",
            statement:
              "sides = edges; corners = vertices; faces = flat surfaces of 3D shapes",
          },
          {
            name: "Direction",
            statement: "clockwise = direction clock hands move",
          },
        ],
        workedExample: {
          problem:
            "A toy is behind the box and to the left of the door. Describe its position.",
          solution:
            "Behind (relative to the box) and left of the door — two position words together give an exact location.",
        },
      },
      questions: [
        {
          id: "edpm1-u2-shape-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which 3D shape is perfectly round like a ball?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cone" },
              { id: "b", text: "Cube" },
              { id: "c", text: "Cylinder" },
              { id: "d", text: "Sphere" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sphere",
                statement: "A sphere is perfectly round in every direction.",
              },
            ],
            steps: [
              { reasoning: "Ball shape = sphere.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Sphere",
            commonErrors: [
              "Choosing cylinder — it is round but has flat ends.",
            ],
          },
        },
        {
          id: "edpm1-u2-shape-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many sides does a hexagon have?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of sides", answer: 6, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hexagon",
                statement: "Hexa- means six.",
              },
            ],
            steps: [
              {
                reasoning: "Hexagon = 6-sided shape.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Count: hexagon has 6 sides.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 5 — confusing with pentagon."],
          },
        },
        {
          id: "edpm1-u2-shape-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cat sits on the mat. The dog sits behind the cat. Where is the dog?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Position words",
                statement: "Behind means at the back of.",
              },
            ],
            steps: [
              {
                reasoning: "'Behind the cat' gives the dog's position.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The dog is at the back of the cat, further from the viewer.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Clear positional description.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Uses 'behind' correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The dog is behind the cat",
            commonErrors: ["Saying 'under' — behind ≠ under."],
          },
        },
        {
          id: "edpm1-u2-shape-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Look around your classroom.",
          parts: [
            {
              label: "a",
              prompt:
                "Name one 2D shape you can see and one 3D shape you can see. Describe each in one sentence.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Give the direction a clock's hands move in, and name the other direction.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "A book is on the table, a pencil is under the table, and a bag is next to the table. Describe where the pencil is relative to the book.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shapes and position",
                statement:
                  "Name shapes by properties; use position words precisely.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Correct 2D shape named (e.g. rectangle window).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct 3D shape named (e.g. cuboid door).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Descriptions use shape properties.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Clockwise = direction clock hands move.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Other direction = anticlockwise.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Both directions correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Pencil is under the table, book is on it → pencil is below the book.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Position described relative to the book.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning links through the table.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Clear final statement.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. rectangle window, cuboid door; clockwise/anticlockwise; pencil is below the book",
            commonErrors: [
              "Saying 'under the book' — the pencil is under the table, not the book.",
            ],
          },
        },
      ],
    },
  ],
};
