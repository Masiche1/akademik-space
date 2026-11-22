import type { Lesson } from "../../../types.ts";

export const lesson218: Lesson = {
  id: "cipm-u2-lesson-2-18",
  code: "2-18",
  title: "Stage 6 — Prime Numbers, Percentages and Transformations",
  goal: "I CAN identify primes, calculate percentages and describe transformations on a grid.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 6: number and geometry",
  "Cambridge Primary Mathematics 0096 framework substrands: 6Ni, 6Nf, 6Gp"],
  stage: 6,
  vocabulary: [
    { term: "Prime number", definition: "Number with exactly two factors: 1 and itself." },
    { term: "Percentage", definition: "Parts per hundred: 50% = half." },
    { term: "Translation", definition: "Slide a shape without turning or flipping." },
    { term: "Reflection", definition: "Flip a shape over a mirror line." },
    { term: "Rotation", definition: "Turn a shape around a point." },
  ],
  concepts: [
    {
      id: "cipm-u2-s18-prime-percent",
      title: "Prime numbers, percentages and transformations",
      skill: "Identify prime numbers, find percentages of quantities and describe grid transformations at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Primes and percentages",
            body: "Prime numbers have exactly two factors — 2, 3, 5, 7, 11, 13… (1 is NOT prime). Percentage means 'out of 100': 25% = 25/100 = 1/4, 10% = 1/10. To find a percentage of an amount, convert to a fraction or divide by 100 and multiply.",
          },
          {
            heading: "Transformations",
            body: "Translation slides a shape — describe by 'left/right/up/down' units. Reflection flips over a mirror line — each point is the same distance on the other side. Rotation turns around a point — quarter turn = 90°, half = 180°. On a coordinate grid, track how each vertex moves.",
          },
        ],
        keyFormulas: [
          { name: "Prime", statement: "exactly two factors: 1 and itself" },
          { name: "Percentage", statement: "x% of n = n × x ÷ 100" },
          { name: "Transformations", statement: "translate = slide; reflect = flip; rotate = turn" },
        ],
        workedExample: {
          problem: "Is 91 prime? Find 15% of 80.",
          solution: "91 = 7 × 13, so NOT prime. 15% of 80 = 80 × 15 ÷ 100 = 12.",
        },
      },
      questions: [
        {
          id: "cipm-u2-pp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a prime number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "15" },
            { id: "b", text: "17" },
            { id: "c", text: "21" },
            { id: "d", text: "9" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prime", statement: "Two factors only." }],
            steps: [{ reasoning: "17 has only factors 1 and 17.", marks: 1, markCode: "M" }],
            finalAnswer: "17",
          },
        },
        {
          id: "cipm-u2-pp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find 10% of 60.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "10% = divide by 10." }],
            steps: [
              { reasoning: "10% of 60 = 60 ÷ 10 = 6.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u2-pp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle with vertices (1,1), (4,1), (1,3) is reflected in the y-axis. Describe where the new vertices are.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection", statement: "x-coordinate changes sign." }],
            steps: [
              { reasoning: "Reflect in y-axis: (x,y) → (−x,y).", marks: 1, markCode: "M" },
              { reasoning: "New vertices: (−1,1), (−4,1), (−1,3).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(−1,1), (−4,1), (−1,3)",
          },
        },
        {
          id: "cipm-u2-pp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) List all prime numbers less than 20. (b) A jacket costs £50 and is 20% off — what is the sale price? (c) A shape is translated 3 right and 2 up — describe the movement. (d) Explain why 1 is not a prime number. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Primes, percentages, transformations", statement: "Listing primes, discount calculation, translation description." }],
            steps: [
              { reasoning: "(a) 2, 3, 5, 7, 11, 13, 17, 19.", marks: 1, markCode: "M" },
              { reasoning: "(b) 20% of 50 = 10; sale price = £40.", marks: 1, markCode: "M" },
              { reasoning: "(c) Translation: slide 3 right, 2 up — no turn or flip.", marks: 1, markCode: "M" },
              { reasoning: "(d) 1 has only one factor (itself), primes need exactly two.", marks: 1, markCode: "M" },
              { reasoning: "Prime list complete and correct.", marks: 1, markCode: "M" },
              { reasoning: "Percentage calculation shown.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2,3,5,7,11,13,17,19 (b) £40 (c) 3 right, 2 up (d) 1 has only one factor",
          },
        },
        {
          id: "cipm-u2-pp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT prime?",
          response: { type: "mcq", choices: [
            { id: "a", text: "19" },
            { id: "b", text: "31" },
            { id: "c", text: "2" },
            { id: "d", text: "27" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prime", statement: "Exactly two factors." }],
            steps: [{ reasoning: "$27 = 3 \\times 9$ → composite, not prime.", marks: 1, markCode: "A" }],
            finalAnswer: "27",
          },
        },
        {
          id: "cipm-u2-pp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find 25% of 80.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "25% = 1/4." }],
            steps: [
              { reasoning: "$80 \\times 25 \\div 100 = 20$ or $80 \\div 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipm-u2-pp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is reflected in a mirror line. This is called a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "reflection" },
            { id: "b", text: "translation" },
            { id: "c", text: "rotation" },
            { id: "d", text: "enlargement" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflection", statement: "Flip over a mirror line." }],
            steps: [{ reasoning: "Flipping over a mirror line = reflection.", marks: 1, markCode: "A" }],
            finalAnswer: "reflection",
          },
        },
        {
          id: "cipm-u2-pp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 30% of 50.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "n × p ÷ 100." }],
            steps: [
              { reasoning: "$50 \\times 30 \\div 100 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cipm-u2-pp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the smallest prime number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "0" },
            { id: "d", text: "3" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prime", statement: "1 is not prime; 2 is." }],
            steps: [{ reasoning: "2 is the smallest prime (only even prime).", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cipm-u2-pp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) Find 40% of 250. (b) A shape is turned 180° around a point — what transformation is this? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentages and rotations", statement: "n × p ÷ 100; 180° turn = half turn rotation." }],
            steps: [
              { reasoning: "(a) $250 \\times 40 \\div 100 = 100$.", marks: 1, markCode: "M" },
              { reasoning: "(b) 180° turn around a point = rotation (half turn).", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100 (b) rotation",
          },
        },
        {
          id: "cipm-u2-pp-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Is 1 a prime number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No — it is even" },
            { id: "b", text: "No — it has only one factor" },
            { id: "c", text: "Yes — it divides everything" },
            { id: "d", text: "Yes — it is the smallest" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Prime", statement: "Exactly two factors." }],
            steps: [{ reasoning: "1 has only one factor (itself) → not prime.", marks: 1, markCode: "A" }],
            finalAnswer: "No — it has only one factor",
          },
        },
        {
          id: "cipm-u2-pp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 5% of 200.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "n × p ÷ 100." }],
            steps: [
              { reasoning: "$200 \\times 5 \\div 100 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u2-pp-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Is 51 prime? Explain. (b) Find 15% of 60. (c) A point (3, 5) is translated 2 left and 1 down — what are its new coordinates? Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Primes, percentages, translation", statement: "Factor check; n × p ÷ 100; add/subtract coordinates." }],
            steps: [
              { reasoning: "(a) $51 = 3 \\times 17$ → not prime.", marks: 1, markCode: "M" },
              { reasoning: "(b) $60 \\times 15 \\div 100 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $3 - 2 = 1$; $5 - 1 = 4$ → (1, 4).", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) no, $51 = 3 \\times 17$ (b) 9 (c) (1, 4)",
          },
        },
        {
          id: "cipm-u2-pp-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "50% of a number is the same as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "a quarter of it" },
            { id: "b", text: "double it" },
            { id: "c", text: "ten times it" },
            { id: "d", text: "half of it" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Percentage", statement: "50% = 1/2." }],
            steps: [{ reasoning: "$50\\% = \\frac{50}{100} = \\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "half of it",
          },
        },
        {
          id: "cipm-u2-pp-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 75% of 40.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "n × p ÷ 100." }],
            steps: [
              { reasoning: "$40 \\times 75 \\div 100 = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cipm-u2-pp-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) List primes between 20 and 30. (b) Find 12% of 150. (c) A square with corner (1,1) is translated 4 right and 3 up — describe the transformation and give the new corner. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Primes, percentages, translation", statement: "Factor check; n × p ÷ 100; slide without turn." }],
            steps: [
              { reasoning: "(a) Primes: 23, 29.", marks: 1, markCode: "M" },
              { reasoning: "(b) $150 \\times 12 \\div 100 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Translation: slide 4 right, 3 up; new corner $(1+4, 1+3) = (5, 4)$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "M" },
              { reasoning: "Transformation type correct (translation).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 23, 29 (b) 18 (c) translation 4 right, 3 up → (5, 4)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-pp-notes",
      title: "Primes and transformations — notes",
      summary: "Prime = 2 factors (1 not prime); x% of n = n×x÷100; translate/reflect/rotate.",
      sections: [
        { heading: "Numbers", body: "Primes to 20: 2,3,5,7,11,13,17,19. Percentages = per hundred." },
        { heading: "Transformations", body: "Track vertices: reflection flips sign of one coordinate." },
      ],
    },
  ],
};
