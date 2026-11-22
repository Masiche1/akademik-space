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
            { id: "a", text: "35" },
            { id: "b", text: "145" },
            { id: "c", text: "65" },
            { id: "d", text: "55" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-ct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the complement of 32?",
          response: { type: "mcq", choices: [
            { id: "a", text: "68" },
            { id: "b", text: "78" },
            { id: "c", text: "38" },
            { id: "d", text: "132" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complement", statement: "Pairs to 100." }],
            steps: [{ reasoning: "$32 + 68 = 100$.", marks: 1, markCode: "A" }],
            finalAnswer: "68",
          },
        },
        {
          id: "cipm-u2-ct-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Partition 549 into hundreds, tens and units.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Partition", statement: "Place value split." }],
            steps: [
              { reasoning: "$549 = 500 + 40 + 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 + 40 + 9",
          },
        },
        {
          id: "cipm-u2-ct-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A.m. means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "after midday" },
            { id: "b", text: "at midnight" },
            { id: "c", text: "exactly noon" },
            { id: "d", text: "before midday" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "A.m./p.m.", statement: "a.m. before noon, p.m. after." }],
            steps: [{ reasoning: "A.m. = ante meridiem = before midday.", marks: 1, markCode: "A" }],
            finalAnswer: "before midday",
          },
        },
        {
          id: "cipm-u2-ct-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bus leaves at 08:15 and arrives at 09:05. How long is the journey?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time interval", statement: "Count on in minutes." }],
            steps: [
              { reasoning: "08:15 → 09:05 = 50 minutes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 minutes",
          },
        },
        {
          id: "cipm-u2-ct-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the complement of 76?",
          response: { type: "mcq", choices: [
            { id: "a", text: "24" },
            { id: "b", text: "176" },
            { id: "c", text: "26" },
            { id: "d", text: "34" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complement", statement: "Pairs to 100." }],
            steps: [{ reasoning: "$76 + 24 = 100$.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "cipm-u2-ct-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) Find the complement of 19. (b) Partition 660. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complements and partitioning", statement: "n + (100 − n) = 100; abc = 100a+10b+c." }],
            steps: [
              { reasoning: "(a) $19 + 81 = 100$ → complement 81.", marks: 1, markCode: "M" },
              { reasoning: "(b) $660 = 600 + 60 + 0$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 81 (b) 600 + 60 + 0",
          },
        },
        {
          id: "cipm-u2-ct-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A lesson starts at 10:50 and lasts 35 minutes. It ends at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "11:85" },
            { id: "b", text: "11:25" },
            { id: "c", text: "11:15" },
            { id: "d", text: "10:85" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time intervals", statement: "Count on minutes across the hour." }],
            steps: [{ reasoning: "10:50 + 35 min = 10:85 = 11:25.", marks: 1, markCode: "A" }],
            finalAnswer: "11:25",
          },
        },
        {
          id: "cipm-u2-ct-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the complement of 58?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complement", statement: "Pairs to 100." }],
            steps: [
              { reasoning: "$100 - 58 = 42$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $58 + 42 = 100$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "cipm-u2-ct-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A shop opens at 09:20 and closes at 17:45 — how long is it open? (b) Partition 304. Show working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time intervals and partitioning", statement: "Count on hours/minutes; place value." }],
            steps: [
              { reasoning: "(a) 09:20 → 17:20 = 8 hours; 17:20 → 17:45 = 25 min; total 8 h 25 min.", marks: 1, markCode: "M" },
              { reasoning: "(b) $304 = 300 + 0 + 4$.", marks: 1, markCode: "M" },
              { reasoning: "Time counted correctly across hours.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 8 hours 25 minutes (b) 300 + 0 + 4",
          },
        },
        {
          id: "cipm-u2-ct-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The complement of a number n is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n \\times 2$" },
            { id: "b", text: "$100 \\div n$" },
            { id: "c", text: "$100 - n$" },
            { id: "d", text: "$n - 100$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Complement", statement: "What adds to 100." }],
            steps: [{ reasoning: "Complement = $100 - n$.", marks: 1, markCode: "A" }],
            finalAnswer: "$100 - n$",
          },
        },
        {
          id: "cipm-u2-ct-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A train journey is 2 hours 20 minutes. It leaves at 13:10. When does it arrive?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Time intervals", statement: "Add hours then minutes." }],
            steps: [
              { reasoning: "13:10 + 2 h = 15:10; + 20 min = 15:30.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15:30.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15:30",
          },
        },
        {
          id: "cipm-u2-ct-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Find the complement of 91. (b) Partition 807. (c) A meeting runs from 14:05 to 15:50 — how long? (d) Write 615 + 285 in column form and find the answer. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Complements, partition, time, addition", statement: "100−n; place value; intervals; column addition." }],
            steps: [
              { reasoning: "(a) $100 - 91 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $807 = 800 + 0 + 7$.", marks: 1, markCode: "M" },
              { reasoning: "(c) 14:05 → 15:05 = 1 h; 15:05 → 15:50 = 45 min; total 1 h 45 min.", marks: 1, markCode: "M" },
              { reasoning: "(d) $615 + 285 = 900$ (units 10 carry 1; tens 10 carry 1; hundreds 9).", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 9 (b) 800 + 0 + 7 (c) 1 hour 45 minutes (d) 900",
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
