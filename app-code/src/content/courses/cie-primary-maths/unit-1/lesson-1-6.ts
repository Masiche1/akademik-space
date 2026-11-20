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
            { id: "a", text: "4 and 7" }, { id: "b", text: "3 and 6" }, { id: "c", text: "5 and 5" }, { id: "d", text: "2 and 9" },
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
