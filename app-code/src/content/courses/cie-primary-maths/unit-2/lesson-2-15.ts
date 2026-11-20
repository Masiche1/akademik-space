import type { Lesson } from "../../../types.ts";

export const lesson215: Lesson = {
  id: "cipm-u2-lesson-2-15",
  code: "2-15",
  title: "Stage 3 — Complements, Three-Digit Numbers and Time",
  goal: "I CAN find complements to 100, work with three-digit numbers and calculate time intervals.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 3: number and measure",
  "Cambridge Primary Mathematics 0096 framework substrands: 3Ni, 3Np, 3Gt"],
  stage: 3,
  vocabulary: [
    { term: "Complement", definition: "Number that adds to make 100: complement of 78 is 22." },
    { term: "Three-digit number", definition: "Number with hundreds, tens and units." },
    { term: "Partition", definition: "Split into hundreds, tens, units: 345 = 300+40+5." },
    { term: "Time interval", definition: "Length of time between two times." },
    { term: "A.M./P.M.", definition: "Before/after midday on a 12-hour clock." },
  ],
  concepts: [
    {
      id: "cipm-u2-s15-complement-time",
      title: "Complements, three-digit numbers and time",
      skill: "Find complements to 100, partition and calculate with three-digit numbers and time intervals at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Complements and three-digit numbers",
            body: "The complement of a number is what you add to reach 100: 78 + 22 = 100. For three-digit numbers, partition into hundreds, tens and units — 345 = 300 + 40 + 5. Add by columns keeping place value; subtract by counting up or column subtraction with exchanging.",
          },
          {
            heading: "Time intervals",
            body: "Read clocks to the nearest 5 minutes (analogue) and nearest minute (digital). To find an interval, count on: from 10:20 to 11:05 is 45 minutes. A.m. is morning (before 12 noon), p.m. is afternoon/evening. Calculate intervals across the hour boundary carefully.",
          },
        ],
        keyFormulas: [
          { name: "Complement", statement: "n + (100 − n) = 100" },
          { name: "Partition", statement: "abc = 100a + 10b + c" },
          { name: "Interval", statement: "end time − start time" },
        ],
        workedExample: {
          problem: "Find the complement of 63 and partition 472.",
          solution: "Complement = 37 (63 + 37 = 100); 472 = 400 + 70 + 2.",
        },
      },
      questions: [
        {
          id: "cipm-u2-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the complement of 45 (the number that makes 100)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "55" }, { id: "b", text: "65" }, { id: "c", text: "145" }, { id: "d", text: "35" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complement", statement: "Pairs to 100." }],
            steps: [{ reasoning: "45 + 55 = 100.", marks: 1, markCode: "M" }],
            finalAnswer: "55",
          },
        },
        {
          id: "cipm-u2-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Partition 836 into hundreds, tens and units.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Partition", statement: "Place value split." }],
            steps: [
              { reasoning: "836 = 800 + 30 + 6.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "800 + 30 + 6",
          },
        },
        {
          id: "cipm-u2-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A film starts at 14:30 and ends at 16:15. How long is it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time interval", statement: "Count on in hours and minutes." }],
            steps: [
              { reasoning: "14:30 → 15:30 = 1 hour.", marks: 1, markCode: "M" },
              { reasoning: "15:30 → 16:15 = 45 minutes.", marks: 1, markCode: "M" },
              { reasoning: "Total = 1 hour 45 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 hour 45 minutes",
          },
        },
        {
          id: "cipm-u2-ct-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "School ends at 15:40. (a) A pupil's mother picks them up at 16:25 — how long do they wait after school? (b) Find the complement of 87. (c) Add 456 + 278 showing column working. (d) Partition 905 and explain what the 0 in the tens place means. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time and number skills", statement: "Intervals, complements, column addition, partitioning." }],
            steps: [
              { reasoning: "(a) 15:40 → 16:25 = 45 minutes.", marks: 1, markCode: "M" },
              { reasoning: "(b) Complement of 87 = 13.", marks: 1, markCode: "M" },
              { reasoning: "(c) 456 + 278 = 734 (units 14 carry 1; tens 13 carry 1; hundreds 7).", marks: 1, markCode: "M" },
              { reasoning: "(d) 905 = 900 + 0 + 5 — 0 tens means no tens.", marks: 1, markCode: "M" },
              { reasoning: "Column working aligned by place value.", marks: 1, markCode: "M" },
              { reasoning: "Time interval counted correctly across the hour.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 45 min (b) 13 (c) 734 (d) 900 + 0 + 5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-ct-notes",
      title: "Complements and time — notes",
      summary: "Complement pairs to 100; partition abc=100a+10b+c; intervals count on in hours/minutes.",
      sections: [
        { heading: "Number", body: "Complements to 100 speed up change-finding; column addition keeps place value." },
        { heading: "Time", body: "A.m. before noon, p.m. after; count on through the hour boundary." },
      ],
    },
  ],
};
