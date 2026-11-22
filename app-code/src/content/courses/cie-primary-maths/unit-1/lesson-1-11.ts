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
            { id: "a", text: "96" },
            { id: "b", text: "82" },
            { id: "c", text: "72" },
            { id: "d", text: "92" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u1-wd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $52 \\times 4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "28" },
            { id: "b", text: "248" },
            { id: "c", text: "218" },
            { id: "d", text: "208" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "Multiply each column, carry." }],
            steps: [{ reasoning: "2×4=8; 5×4=20 → 208.", marks: 1, markCode: "A" }],
            finalAnswer: "208",
          },
        },
        {
          id: "cipm-u1-wd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate $36 \\times 7$ using the column method.",
          response: { type: "numeric", parts: [{ label: "a", answer: 252 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "Ones first, carry to tens." }],
            steps: [
              { reasoning: "6×7=42, write 2 carry 4.", marks: 1, markCode: "M" },
              { reasoning: "3×7=21+4=25 → 252.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "252",
          },
        },
        {
          id: "cipm-u1-wd-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When calculating $56 \\times 9$ by columns, what do you write in the ones column first?",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "9" },
            { id: "c", text: "5" },
            { id: "d", text: "54" },
          ], correctChoiceIa: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "6×9=54: write ones digit, carry tens." }],
            steps: [{ reasoning: "6×9=54, write 4 in the ones column and carry 5.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u1-wd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pictogram shows pets owned: each paw print = 3 pets. Maya has 7 paw prints. How many pets does Maya own?",
          response: { type: "numeric", parts: [{ label: "a", answer: 21, unit: "pets" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram key", statement: "Multiply picture count by key value." }],
            steps: [
              { reasoning: "7 × 3 = 21.", marks: 1, markCode: "M" },
              { reasoning: "Maya owns 21 pets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "21 pets",
          },
        },
        {
          id: "cipm-u1-wd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bar chart shows goals scored: Team X=9, Team Y=14, Team Z=11. Which statement is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Team X scored the most" },
            { id: "b", text: "Team Z scored more than Team X" },
            { id: "c", text: "Team Y scored the most" },
            { id: "d", text: "All teams scored the same" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Bar chart", statement: "Tallest bar = largest value." }],
            steps: [{ reasoning: "Team Y has the tallest bar at 14.", marks: 1, markCode: "A" }],
            finalAnswer: "Team Y scored the most",
          },
        },
        {
          id: "cipm-u1-wd-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $63 \\times 8$ using the column method. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "Column-wise with carrying." }],
            steps: [
              { reasoning: "3×8=24, write 4 carry 2.", marks: 1, markCode: "M" },
              { reasoning: "6×8=48+2=50, write 0 carry 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 504.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "504",
          },
        },
        {
          id: "cipm-u1-wd-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bar chart shows rainfall in mm: Mon=12, Tue=8, Wed=15, Thu=10. Find (a) the total rainfall and (b) how much more rain fell on Wednesday than Tuesday.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 45, unit: "mm" },
            { label: "b", answer: 7, unit: "mm" },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Chart totals and differences", statement: "Add values; subtract to compare." }],
            steps: [
              { reasoning: "(a) 12+8+15+10 = 45 mm.", marks: 1, markCode: "M" },
              { reasoning: "(b) 15 − 8 = 7 mm.", marks: 1, markCode: "M" },
              { reasoning: "Answers stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 45 mm (b) 7 mm",
          },
        },
        {
          id: "cipm-u1-wd-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the correct answer to $45 \\times 8$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "340" },
            { id: "b", text: "360" },
            { id: "c", text: "400" },
            { id: "d", text: "320" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "5×8=40 carry 4; 4×8=32+4=36 → 360." }],
            steps: [{ reasoning: "45×8 = 360.", marks: 1, markCode: "A" }],
            finalAnswer: "360",
          },
        },
        {
          id: "cipm-u1-wd-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A pictogram uses one symbol = 5 children. Class 5A shows 6 symbols and Class 5B shows 4 symbols. (a) How many children are in 5A? (b) How many more children are in 5A than 5B? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram", statement: "Count symbols × key value; subtract to compare." }],
            steps: [
              { reasoning: "(a) 6 × 5 = 30 children.", marks: 1, markCode: "M" },
              { reasoning: "(b) 5B has 4 × 5 = 20 children.", marks: 1, markCode: "M" },
              { reasoning: "30 − 20 = 10 more children.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 (b) 10 more",
          },
        },
        {
          id: "cipm-u1-wd-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a bar chart, the scale on the axis tells you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the colour of the bars" },
            { id: "b", text: "the units and numbers to read values" },
            { id: "c", text: "the names of the bars" },
            { id: "d", text: "the order of the bars" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Scale", statement: "Axis numbers give the values." }],
            steps: [{ reasoning: "The scale shows the numbers (and units) for reading bar heights.", marks: 1, markCode: "A" }],
            finalAnswer: "the units and numbers to read values",
          },
        },
        {
          id: "cipm-u1-wd-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $17 \\times 9$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 153 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Column method", statement: "Column-wise with carrying." }],
            steps: [
              { reasoning: "7×9=63, write 3 carry 6; 1×9=9+6=15.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 153.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "153",
          },
        },
        {
          id: "cipm-u1-wd-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bar chart shows stickers collected: Week 1 = 24, Week 2 = 36, Week 3 = 30. (a) How many stickers were collected altogether? (b) How many more were collected in Week 2 than Week 1? (c) Calculate $76 \\times 4$ using the column method to check whether 4 times the Week 1 total equals 300. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Chart interpretation and column multiplication", statement: "Read values, total, difference, multiply with carrying." }],
            steps: [
              { reasoning: "(a) 24+36+30 = 90 stickers.", marks: 1, markCode: "M" },
              { reasoning: "(b) 36 − 24 = 12 more.", marks: 1, markCode: "M" },
              { reasoning: "(c) 6×4=24 write 4 carry 2; 7×4=28+2=30 → 304.", marks: 1, markCode: "M" },
              { reasoning: "$76 \\times 4 = 304$, not 300.", marks: 1, markCode: "A" },
              { reasoning: "Units and working shown.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 90 (b) 12 more (c) 304, not 300",
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
