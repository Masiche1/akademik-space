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
            { id: "a", text: "9" }, { id: "b", text: "15" }, { id: "c", text: "17" }, { id: "d", text: "21" },
          ], correctChoiceId: "c" },
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
