import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cipm-u2-lesson-2-3",
  code: "2-3",
  title: "Stage 6 — Ratio, Algebra and Geometry",
  goal: "I CAN use simple ratio, write expressions and apply geometry rules.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 6: number and geometry",
  "Cambridge Primary Mathematics 0096 framework substrands: 6Nf, 6Gg"],
  stage: 6,
  vocabulary: [
    { term: "Ratio", definition: "A comparison of two quantities, e.g. 2:3." },
    { term: "Expression", definition: "A mathematical phrase with numbers and symbols, e.g. $3n + 2$." },
    { term: "Perimeter", definition: "The distance around a shape." },
    { term: "Area", definition: "The space inside a shape, measured in square units." },
    { term: "Symmetry", definition: "When a shape can be folded so both halves match." },
  ],
  concepts: [
    {
      id: "cipm-u2-s6-ratio-algebra",
      title: "Ratio and simple algebra",
      skill: "Use simple ratios and write expressions at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Ratio",
            body: "Ratio compares quantities. A juice made from 2 parts orange to 3 parts water has ratio $2:3$. To share in a ratio, add the parts, find one share, then multiply.",
          },
          {
            heading: "Algebra",
            body: "A letter stands for an unknown number. $n + 5$ means add 5 to $n$. If $n = 3$, then $n + 5 = 8$. Expressions can be simplified: $2n + 3n = 5n$.",
          },
        ],
        keyFormulas: [
          { name: "Ratio", statement: "$a:b$ compare parts; total parts $= a + b$" },
          { name: "Expressions", statement: "$2n + 3n = 5n$" },
        ],
        workedExample: {
          problem: "Share $\\$20$ in the ratio $1:3$.",
          solution: "Total parts $= 1 + 3 = 4$; one share $= 20 \\div 4 = 5$. Shares: $\\$5$ and $\\$15$.",
        },
      },
      questions: [
        {
          id: "cipm-u2-s6-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio $4:8$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "1:2" }, { id: "b", text: "2:4" }, { id: "c", text: "4:2" }, { id: "d", text: "1:4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simplifying ratio", statement: "Divide both parts by common factor." }],
            steps: [{ reasoning: "$4:8$ divided by 4 gives $1:2$.", marks: 1, markCode: "A" }],
            finalAnswer: "1:2",
          },
        },
        {
          id: "cipm-u2-s6-ra-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $n = 7$, what is the value of $n + 4$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 11 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Substitution", statement: "Replace the letter with its value." }],
            steps: [
              { reasoning: "Substitute $n = 7$: $7 + 4$.", marks: 1, markCode: "M" },
              { reasoning: "$7 + 4 = 11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
        {
          id: "cipm-u2-s6-ra-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $3n + 2n + 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simplifying expressions", statement: "Add like terms." }],
            steps: [
              { reasoning: "$3n + 2n = 5n$.", marks: 1, markCode: "M" },
              { reasoning: "The $+5$ is a different term and stays.", marks: 1, markCode: "M" },
              { reasoning: "$3n + 2n + 5 = 5n + 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5n + 5$",
          },
        },
        {
          id: "cipm-u2-s6-ra-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Red and blue marbles are in the ratio $2:5$. There are 35 marbles altogether. How many are blue?",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Ratio sharing", statement: "Find one share then scale." }],
            steps: [
              { reasoning: "Total parts $= 2 + 5 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "One share $= 35 \\div 7 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Blue is 5 parts: $5 \\times 5 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "There are 25 blue marbles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25",
          },
        },
      ],
    },
    {
      id: "cipm-u2-s6-geometry",
      title: "Perimeter, area and symmetry",
      skill: "Find perimeter and area and identify symmetry at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Perimeter",
            body: "Perimeter is the distance around a shape. For a rectangle: $P = 2 \\times (\\text{length} + \\text{width})$. For a square with side $s$: $P = 4s$.",
          },
          {
            heading: "Area and symmetry",
            body: "Area of a rectangle $= \\text{length} \\times \\text{width}$, measured in square units. A shape has line symmetry if a mirror line makes both halves match.",
          },
        ],
        keyFormulas: [
          { name: "Perimeter of rectangle", statement: "$P = 2(l + w)$" },
          { name: "Area of rectangle", statement: "$A = l \\times w$" },
          { name: "Square perimeter", statement: "$P = 4s$" },
        ],
        workedExample: {
          problem: "Find the area of a rectangle 8 cm by 5 cm.",
          solution: "$A = 8 \\times 5 = 40\\ \\text{cm}^2$.",
        },
      },
      questions: [
        {
          id: "cipm-u2-s6-geo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a square with side 7 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "14 cm" }, { id: "b", text: "21 cm" }, { id: "c", text: "28 cm" }, { id: "d", text: "49 cm" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Square perimeter", statement: "$P = 4s$." }],
            steps: [{ reasoning: "$4 \\times 7 = 28$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "28 cm",
          },
        },
        {
          id: "cipm-u2-s6-geo-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the area of a rectangle 9 cm by 4 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Rectangle area", statement: "$A = l \\times w$." }],
            steps: [
              { reasoning: "$9 \\times 4 = 36$.", marks: 1, markCode: "M" },
              { reasoning: "Area is $36\\ \\text{cm}^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36\\ \\text{cm}^2$",
          },
        },
        {
          id: "cipm-u2-s6-geo-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle is 12 cm long and 5 cm wide. Find its perimeter.",
          response: { type: "numeric", parts: [{ label: "a", answer: 34, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Rectangle perimeter", statement: "$P = 2(l + w)$." }],
            steps: [
              { reasoning: "$l + w = 12 + 5 = 17$.", marks: 1, markCode: "M" },
              { reasoning: "$2 \\times 17 = 34$.", marks: 1, markCode: "M" },
              { reasoning: "Perimeter is 34 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34 cm",
          },
        },
        {
          id: "cipm-u2-s6-geo-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A square tile has area $49\\ \\text{cm}^2$. What is the length of one side?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Square area", statement: "$A = s^2$; find side by factoring." }],
            steps: [
              { reasoning: "Area $= s \\times s = 49$.", marks: 1, markCode: "M" },
              { reasoning: "$7 \\times 7 = 49$, so $s = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Side length is 7 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 cm",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-s6-ratio-notes",
      title: "Stage 6 ratio and algebra — revision notes",
      summary: "Simple ratios, expressions, perimeter, area and symmetry.",
      sections: [
        { heading: "Ratio", body: "Ratio compares parts. To share in ratio $a:b$, total parts $= a + b$; find one share, then scale." },
        { heading: "Geometry", body: "Rectangle perimeter $= 2(l + w)$; area $= l \\times w$. Check units: perimeter in cm, area in cm²." },
      ],
    },
  ],
};
