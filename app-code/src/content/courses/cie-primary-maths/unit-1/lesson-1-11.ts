import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "cipm-u1-lesson-1-11",
  code: "1-11",
  title: "Stage 3 — Written Multiplication and Data Handling",
  goal: "I CAN multiply larger numbers and present data in charts.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 3: multiplication and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 3Ni, 3Ss"],
  stage: 3,
  vocabulary: [
    { term: "Column method", definition: "Multiplying by writing numbers in columns." },
    { term: "Product", definition: "The answer to a multiplication." },
    { term: "Bar chart", definition: "Chart with bars showing amounts." },
    { term: "Scale", definition: "The numbers on a chart axis." },
    { term: "Interpret", definition: "Read and explain what data shows." },
  ],
  concepts: [
    {
      id: "cipm-u1-s11-written-data",
      title: "Written multiplication and charts",
      skill: "Multiply two-digit numbers and read bar charts at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Column multiplication",
            body: "To multiply like 24 × 3: multiply ones (4×3=12, write 2 carry 1), then tens (2×3=6 plus carry 1 = 7), giving 72. For 24 × 5 the same way. Always multiply by the single digit, carrying when a column exceeds 9.",
          },
          {
            heading: "Reading charts",
            body: "Bar charts show amounts as bar heights against a labelled scale. Pictograms use pictures with a key. To interpret: read the scale, find the bar, state the value and compare — 'Class 3 read most books'. Always check what the scale counts (books? children?).",
          },
        ],
        keyFormulas: [
          { name: "Column method", statement: "ones first, carry to tens" },
          { name: "Charts", statement: "read scale → find bar → state value → compare" },
        ],
        workedExample: {
          problem: "Calculate 34 × 6 using the column method.",
          solution: "4×6=24 (write 4, carry 2); 3×6=18+2=20; answer 204.",
        },
      },
      questions: [
        {
          id: "cipm-u1-wd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 23 × 4?",
          response: { type: "mcq", choices: [
            { id: "a", text: "82" }, { id: "b", text: "92" }, { id: "c", text: "72" }, { id: "d", text: "96" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "Multiply each column, carry." }],
            steps: [{ reasoning: "3×4=12 carry 1; 2×4=8+1=9 → 92.", marks: 1, markCode: "A" }],
            finalAnswer: "92",
          },
        },
        {
          id: "cipm-u1-wd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a bar chart, what does the height of a bar show?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Bar chart", statement: "Bar height = amount." }],
            steps: [
              { reasoning: "The bar's height against the scale shows the value.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The amount/value",
          },
        },
        {
          id: "cipm-u1-wd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 45 × 6.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "Column-wise with carrying." }],
            steps: [
              { reasoning: "5×6=30, write 0 carry 3.", marks: 1, markCode: "M" },
              { reasoning: "4×6=24+3=27, write 7 carry 2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 270.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "270",
          },
        },
        {
          id: "cipm-u1-wd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A bar chart shows books read: Class A=12, Class B=18, Class C=15, Class D=21. (a) Which class read the most? (b) How many books did all classes read altogether? (c) How many more did Class D read than Class A? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chart interpretation", statement: "Read values, compare, total." }],
            steps: [
              { reasoning: "(a) Largest bar = Class D (21).", marks: 1, markCode: "M" },
              { reasoning: "(b) Total = 12+18+15+21.", marks: 1, markCode: "M" },
              { reasoning: "12+18=30; 30+15=45; 45+21=66.", marks: 1, markCode: "M" },
              { reasoning: "(c) Difference = 21 − 12.", marks: 1, markCode: "M" },
              { reasoning: "= 9.", marks: 1, markCode: "M" },
              { reasoning: "Units: books.", marks: 1, markCode: "M" },
              { reasoning: "Check total by another grouping: (12+18)+(15+21)=30+36=66. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answers: D; 66 books; 9 more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Class D; (b) 66 books; (c) 9 more",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-wd-notes",
      title: "Written multiplication and charts — notes",
      summary: "Column method: ones→tens, carry; charts: scale→bar→compare.",
      sections: [
        { heading: "Multiplication", body: "Multiply each column right to left, carry tens into next column." },
        { heading: "Data", body: "Read scale first; state value with units; compare bars for most/least." },
      ],
    },
  ],
};
