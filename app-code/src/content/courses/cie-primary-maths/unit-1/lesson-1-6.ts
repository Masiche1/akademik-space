import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "cipm-u1-lesson-1-6",
  code: "1-6",
  title: "Stage 1 — Number Bonds, Subtraction and Shapes",
  goal: "I CAN use number bonds, subtract and name 2D and 3D shapes.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 1: number and shape",
  "Cambridge Primary Mathematics 0096 framework substrands: 1Ni, 1Gg"],
  stage: 1,
  vocabulary: [
    { term: "Number bond", definition: "Two numbers that add to make a total, like 3 and 7 make 10." },
    { term: "Subtract", definition: "Take away to find how many are left." },
    { term: "Double", definition: "Add a number to itself." },
    { term: "Half", definition: "Share into two equal parts." },
    { term: "Vertex", definition: "The pointy corner where two sides meet." },
  ],
  concepts: [
    {
      id: "cipm-u1-s6-bonds-shapes",
      title: "Number bonds, subtraction and naming shapes",
      skill: "Recall bonds to 10 and 20, subtract and identify shapes at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Number bonds and subtraction",
            body: "Number bonds are pairs that make a total — learn all pairs to 10 and 20 by heart. Subtraction is taking away: 9 − 4 leaves 5. You can check with the bond: 5 + 4 = 9, so 9 − 4 = 5. Doubling adds a number to itself (double 4 is 8); halving shares into two equal parts (half of 8 is 4).",
          },
          {
            heading: "Naming shapes",
            body: "2D shapes are flat: circle, square, triangle, rectangle. 3D shapes are solid: sphere, cube, cuboid, pyramid, cylinder. Count sides and vertices to describe them — a triangle has 3 sides and 3 vertices.",
          },
        ],
        keyFormulas: [
          { name: "Bonds to 10", statement: "1+9, 2+8, 3+7, 4+6, 5+5" },
          { name: "Double and half", statement: "double = add to itself; half = share equally" },
        ],
        workedExample: {
          problem: "What is double 6, and what is half of 14?",
          solution: "Double 6 = 6 + 6 = 12. Half of 14 = 7 (since 7 + 7 = 14).",
        },
      },
      questions: [
        {
          id: "cipm-u1-ns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair adds to make 10?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2 and 9" },
            { id: "b", text: "3 and 6" },
            { id: "c", text: "5 and 5" },
            { id: "d", text: "4 and 7" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pairs that make the total." }],
            steps: [{ reasoning: "5 + 5 = 10.", marks: 1, markCode: "A" }],
            finalAnswer: "5 and 5",
          },
        },
        {
          id: "cipm-u1-ns-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 12 − 5?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Count back or use the bond." }],
            steps: [
              { reasoning: "Count back 5 from 12: 11, 10, 9, 8, 7.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7 (check: 7 + 5 = 12).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipm-u1-ns-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is double 7?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Double", statement: "Add the number to itself." }],
            steps: [
              { reasoning: "Double means 7 + 7.", marks: 1, markCode: "M" },
              { reasoning: "7 + 7 = 14.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 14.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cipm-u1-ns-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A solid shape has 6 flat faces that are all squares. Name it and say how many edges it has.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cube", statement: "6 square faces, 12 edges, 8 vertices." }],
            steps: [
              { reasoning: "6 square faces ⇒ cube.", marks: 1, markCode: "M" },
              { reasoning: "A cube has 12 edges.", marks: 1, markCode: "M" },
              { reasoning: "(8 vertices if mentioned.)", marks: 1, markCode: "M" },
              { reasoning: "Answer: cube, 12 edges.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cube; 12 edges",
          },
        },
        {
          id: "cipm-u1-ns-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pair adds to make 10?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 and 1" },
            { id: "b", text: "6 and 4" },
            { id: "c", text: "2 and 6" },
            { id: "d", text: "7 and 3" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pairs that make the total." }],
            steps: [{ reasoning: "6 + 4 = 10.", marks: 1, markCode: "A" }],
            finalAnswer: "6 and 4",
          },
        },
        {
          id: "cipm-u1-ns-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $15 - 8$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Count back or use the bond." }],
            steps: [
              { reasoning: "Count back 8 from 15, or use $7 + 8 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipm-u1-ns-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is double 8?",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" },
            { id: "b", text: "16" },
            { id: "c", text: "12" },
            { id: "d", text: "18" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Double", statement: "n + n." }],
            steps: [{ reasoning: "8 + 8 = 16.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cipm-u1-ns-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is half of 20?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Half", statement: "Share into two equal parts." }],
            steps: [
              { reasoning: "20 ÷ 2 = 10.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u1-ns-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a 2D shape?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cube" },
            { id: "b", text: "Triangle" },
            { id: "c", text: "Cylinder" },
            { id: "d", text: "Sphere" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "2D shape", statement: "Flat shape." }],
            steps: [{ reasoning: "A triangle is flat; the others are solid 3D shapes.", marks: 1, markCode: "A" }],
            finalAnswer: "Triangle",
          },
        },
        {
          id: "cipm-u1-ns-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) What is $9 + 6$? (b) Use your answer to find $15 - 6$. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Number bonds", statement: "Addition and subtraction are inverse." }],
            steps: [
              { reasoning: "(a) $9 + 6 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Since $9 + 6 = 15$, then $15 - 6 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct with bond shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15 (b) 9",
          },
        },
        {
          id: "cipm-u1-ns-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What number pairs with 13 to make 20?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond to 20", statement: "Pairs that make 20." }],
            steps: [
              { reasoning: "$13 + 7 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipm-u1-ns-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a triangle have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "5" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Triangle", statement: "3 sides and 3 vertices." }],
            steps: [{ reasoning: "A triangle has 3 sides.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cipm-u1-ns-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) What is double 5? (b) What is half of 18? (c) Name a 3D shape with a curved surface. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double, half and shapes", statement: "n + n; share equally; curved solids." }],
            steps: [
              { reasoning: "(a) $5 + 5 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $18 ÷ 2 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "(c) e.g. sphere, cylinder or cone.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 (b) 9 (c) e.g. sphere",
          },
        },
        {
          id: "cipm-u1-ns-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $18 - 9$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "8" },
            { id: "c", text: "27" },
            { id: "d", text: "10" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Take away using bonds." }],
            steps: [{ reasoning: "$18 - 9 = 9$ since $9 + 9 = 18$.", marks: 1, markCode: "A" }],
            finalAnswer: "9",
          },
        },
        {
          id: "cipm-u1-ns-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) What is double 12? (b) What is half of your answer to (a)?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 24 },
            { label: "b", answer: 12 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Double and half", statement: "Inverse operations." }],
            steps: [
              { reasoning: "(a) $12 + 12 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $24 ÷ 2 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 24 (b) 12",
          },
        },
        {
          id: "cipm-u1-ns-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Which pairs make 20: 8 and 12, or 9 and 11? (b) What is $20 - 13$? (c) A shape has 5 sides — what is it called? (d) A solid has 2 flat circular faces and a curved surface — name it. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bonds and shapes", statement: "Bonds to 20; count sides/faces to name shapes." }],
            steps: [
              { reasoning: "(a) 8 + 12 = 20; 9 + 11 = 20 — both pairs work.", marks: 1, markCode: "M" },
              { reasoning: "(b) $20 - 13 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Pentagon (5 sides).", marks: 1, markCode: "M" },
              { reasoning: "(d) Cylinder.", marks: 1, markCode: "M" },
              { reasoning: "Working shown clearly.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) both (b) 7 (c) pentagon (d) cylinder",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-ns-notes",
      title: "Number bonds and shapes — revision notes",
      summary: "Bonds to 10/20; subtract = take away; double/half; name shapes by faces/edges.",
      sections: [
        { heading: "Bonds", body: "Learn pairs to 10 and 20 — they make adding and subtracting fast." },
        { heading: "Shapes", body: "2D flat, 3D solid. Cube = 6 square faces, 12 edges." },
      ],
    },
  ],
};
