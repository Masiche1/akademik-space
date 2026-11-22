import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipm-u1-lesson-1-2",
  code: "1-2",
  title: "Stage 2 — Place Value and Subtraction",
  goal: "I CAN use place value to 1000 and subtract two-digit numbers.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: number",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Np, 2Ni"],
  stage: 2,
  vocabulary: [
    { term: "Place value", definition: "Value of a digit by its position." },
    { term: "Hundreds", definition: "The digit worth groups of 100." },
    { term: "Tens", definition: "The digit worth groups of 10." },
    { term: "Ones", definition: "The digit worth single units." },
    { term: "Subtract", definition: "Find the difference between two numbers." },
  ],
  concepts: [
    {
      id: "cipm-u1-s2-place-value",
      title: "Place value to 1000",
      skill: "Read and write numbers to 1000 at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Hundreds, tens and ones",
            body: "In 365, the 3 is worth 300, the 6 is worth 60 and the 5 is worth 5. The same digit can be worth different amounts depending on its position.",
          },
          {
            heading: "Partitioning",
            body: "Partitioning splits a number into its place values: $456 = 400 + 50 + 6$. This makes adding and subtracting easier.",
          },
        ],
        keyFormulas: [
          { name: "Partitioning", statement: "$abc = 100a + 10b + c$" },
        ],
        workedExample: {
          problem: "Partition 728.",
          solution: "$728 = 700 + 20 + 8$.",
        },
      },
      questions: [
        {
          id: "cipm-u1-s2-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit 7 in 374?",
          response: { type: "mcq", choices: [
            { id: "a", text: "70" },
            { id: "b", text: "7" },
            { id: "c", text: "700" },
            { id: "d", text: "7000" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Place value", statement: "Digit value depends on position." }],
            steps: [{ reasoning: "The 7 is in the tens column, so it is worth 70.", marks: 1, markCode: "A" }],
            finalAnswer: "70",
          },
        },
        {
          id: "cipm-u1-s2-pv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Partition the number 546 into hundreds, tens and ones.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 500 }, { label: "b", answer: 40 }, { label: "c", answer: 6 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Partitioning", statement: "Split by place value." }],
            steps: [
              { reasoning: "$546 = 500 + 40 + 6$.", marks: 1, markCode: "M" },
              { reasoning: "Hundreds: 500; tens: 40; ones: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500, 40, 6",
          },
        },
        {
          id: "cipm-u1-s2-pv-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is greater: 809 or 890?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing", statement: "Compare hundreds, then tens, then ones." }],
            steps: [
              { reasoning: "Hundreds are equal (8). Compare tens: 0 vs 9, so 890 is greater.", marks: 1, markCode: "M" },
              { reasoning: "$890 > 809$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "890",
          },
        },
        {
          id: "cipm-u1-s2-pv-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A school has 365 pupils in Year 3 and 428 pupils in Year 4. How many pupils are there in total?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Addition", statement: "Add hundreds, tens, ones." }],
            steps: [
              { reasoning: "Add ones: $5 + 8 = 13$, write 3 carry 1.", marks: 1, markCode: "M" },
              { reasoning: "Add tens: $6 + 2 + 1 = 9$; hundreds: $3 + 4 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Total is 793 pupils.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "793 pupils",
          },
        },
        {
          id: "cipm-u1-s2-pv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit 5 in 572?",
          response: { type: "mcq", choices: [
            { id: "a", text: "500" },
            { id: "b", text: "5" },
            { id: "c", text: "50" },
            { id: "d", text: "5000" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Place value", statement: "Digit value depends on position." }],
            steps: [{ reasoning: "The 5 is in the hundreds column, so it is worth 500.", marks: 1, markCode: "A" }],
            finalAnswer: "500",
          },
        },
        {
          id: "cipm-u1-s2-pv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 459 in expanded form: 459 = ___ + ___ + ___.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 400 }, { label: "b", answer: 50 }, { label: "c", answer: 9 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Partitioning", statement: "Split by place value." }],
            steps: [
              { reasoning: "$459 = 400 + 50 + 9$.", marks: 1, markCode: "M" },
              { reasoning: "Hundreds: 400; tens: 50; ones: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "400, 50, 9",
          },
        },
        {
          id: "cipm-u1-s2-pv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which number is made of 7 hundreds, 3 tens and 9 ones?",
          response: { type: "mcq", choices: [
            { id: "a", text: "793" },
            { id: "b", text: "739" },
            { id: "c", text: "937" },
            { id: "d", text: "379" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Place value", statement: "Hundreds, then tens, then ones." }],
            steps: [{ reasoning: "7 hundreds = 700, 3 tens = 30, 9 ones = 9, so $700 + 30 + 9 = 739$.", marks: 1, markCode: "A" }],
            finalAnswer: "739",
          },
        },
        {
          id: "cipm-u1-s2-pv-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 10 more than 486? What is 10 less than 486?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 496 }, { label: "b", answer: 476 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value steps", statement: "10 more/less changes the tens digit." }],
            steps: [
              { reasoning: "$486 + 10 = 496$.", marks: 1, markCode: "M" },
              { reasoning: "$486 - 10 = 476$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "496 and 476",
          },
        },
        {
          id: "cipm-u1-s2-pv-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shop sells 625 pens on Monday and 214 pens on Tuesday. How many pens does it sell altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Addition", statement: "Add hundreds, tens, ones." }],
            steps: [
              { reasoning: "Add ones: $5 + 4 = 9$; tens: $2 + 1 = 3$; hundreds: $6 + 2 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "$625 + 214 = 839$ pens.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "839 pens",
          },
        },
        {
          id: "cipm-u1-s2-pv-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the smallest number: 308, 380, 803 or 830?",
          response: { type: "mcq", choices: [
            { id: "a", text: "803" },
            { id: "b", text: "380" },
            { id: "c", text: "830" },
            { id: "d", text: "308" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing", statement: "Compare hundreds first." }],
            steps: [{ reasoning: "308 and 380 have 3 hundreds; all others have 8 hundreds. Of 308 and 380, 308 has fewer tens.", marks: 1, markCode: "A" }],
            finalAnswer: "308",
          },
        },
        {
          id: "cipm-u1-s2-pv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $345 + 232$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 577 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding", statement: "Add hundreds, tens, ones." }],
            steps: [
              { reasoning: "Ones: $5 + 2 = 7$; tens: $4 + 3 = 7$; hundreds: $3 + 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "$345 + 232 = 577$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "577",
          },
        },
        {
          id: "cipm-u1-s2-pv-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A library has 500 books. 237 books are borrowed. How many books are left in the library?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Left means subtract." }],
            steps: [
              { reasoning: "Work out $500 - 237$.", marks: 1, markCode: "M" },
              { reasoning: "Ones: exchange, $10 - 7 = 3$; tens: $9 - 3 = 6$ after exchange; hundreds: $4 - 2 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "263 books are left.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "263 books",
          },
        },
        {
          id: "cipm-u1-s2-pv-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which list shows the numbers in order from smallest to largest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "412, 421, 142" },
            { id: "b", text: "142, 421, 412" },
            { id: "c", text: "142, 412, 421" },
            { id: "d", text: "421, 412, 142" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ordering", statement: "Compare hundreds, then tens, then ones." }],
            steps: [
              { reasoning: "142 has 1 hundred so it is smallest; 412 and 421 share 4 hundreds, and 412 has fewer tens.", marks: 1, markCode: "M" },
              { reasoning: "Order: 142, 412, 421.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "142, 412, 421",
          },
        },
        {
          id: "cipm-u1-s2-pv-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the missing number: $600 + \\_\\_ + 4 = 674$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operation", statement: "Subtract known parts from the total." }],
            steps: [
              { reasoning: "The tens digit of 674 is 7, so the missing part is 70 tens-worth: $674 - 600 - 4 = 70$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $600 + 70 + 4 = 674$.", marks: 1, markCode: "M" },
              { reasoning: "Missing number is 70.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70",
          },
        },
        {
          id: "cipm-u1-s2-pv-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A mystery number has 9 hundreds. Its tens digit is 3 and its ones digit is double the tens digit. What is the number?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Place value", statement: "Each digit contributes its column value." }],
            steps: [
              { reasoning: "Ones digit is double 3, so it is 6.", marks: 1, markCode: "M" },
              { reasoning: "The number is 9 hundreds, 3 tens, 6 ones: $900 + 30 + 6$.", marks: 1, markCode: "M" },
              { reasoning: "The number is 936.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "936",
          },
        },
        {
          id: "cipm-u1-s2-pv-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A number is partitioned as $500 + 40 + 7$. (a) Write the number. (b) What is 100 more than the number? (c) What is 10 less than the number?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 547 }, { label: "b", answer: 647 }, { label: "c", answer: 537 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value steps", statement: "100 changes hundreds; 10 changes tens." }],
            steps: [
              { reasoning: "$500 + 40 + 7 = 547$.", marks: 1, markCode: "M" },
              { reasoning: "$547 + 100 = 647$ and $547 - 10 = 537$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 547, 647, 537.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "547, 647, 537",
          },
        },
      ],
    },
    {
      id: "cipm-u1-s2-subtraction",
      title: "Subtracting two-digit numbers",
      skill: "Subtract with and without exchanging at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Subtracting",
            body: "Subtract the ones first, then the tens. When the top ones digit is smaller, exchange one ten for ten ones.",
          },
          {
            heading: "Exchange",
            body: "In $52 - 27$, exchange one ten: 52 becomes 4 tens and 12 ones. $12 - 7 = 5$ and $4 - 2 = 2$, so the answer is 25.",
          },
        ],
        keyFormulas: [
          { name: "Subtracting", statement: "Subtract ones, then tens; exchange when needed." },
        ],
        workedExample: {
          problem: "Work out $63 - 28$.",
          solution: "Exchange: 63 becomes 5 tens and 13 ones. $13 - 8 = 5$; $5 - 2 = 3$. Answer: 35.",
        },
      },
      questions: [
        {
          id: "cipm-u1-s2-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $45 - 23$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" },
            { id: "b", text: "22" },
            { id: "c", text: "68" },
            { id: "d", text: "28" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Subtract ones then tens." }],
            steps: [{ reasoning: "$45 - 23 = 22$.", marks: 1, markCode: "A" }],
            finalAnswer: "22",
          },
        },
        {
          id: "cipm-u1-s2-sub-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $71 - 38$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 33 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exchange", statement: "Exchange a ten when ones are too small." }],
            steps: [
              { reasoning: "Exchange: 71 becomes 6 tens and 11 ones.", marks: 1, markCode: "M" },
              { reasoning: "$11 - 8 = 3$; $6 - 3 = 3$; answer 33.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "33",
          },
        },
        {
          id: "cipm-u1-s2-sub-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 80 stickers. Sam uses 46 of them. How many stickers does Sam have left?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction word problem", statement: "Left over means subtract." }],
            steps: [
              { reasoning: "Work out $80 - 46$.", marks: 1, markCode: "M" },
              { reasoning: "Exchange: $80 - 40 = 40$, then $40 - 6 = 34$.", marks: 1, markCode: "M" },
              { reasoning: "Sam has 34 stickers left.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34 stickers",
          },
        },
        {
          id: "cipm-u1-s2-sub-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the difference between 92 and 57.",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Difference", statement: "Difference = larger − smaller." }],
            steps: [
              { reasoning: "$92 - 57$ needs exchange: 9 tens 2 ones becomes 8 tens 12 ones.", marks: 1, markCode: "M" },
              { reasoning: "$12 - 7 = 5$; $8 - 5 = 3$; difference is 35.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "cipm-u1-s2-sub-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $68 - 35$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "33" },
            { id: "b", text: "103" },
            { id: "c", text: "43" },
            { id: "d", text: "23" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Subtract ones then tens." }],
            steps: [{ reasoning: "$68 - 35 = 33$.", marks: 1, markCode: "A" }],
            finalAnswer: "33",
          },
        },
        {
          id: "cipm-u1-s2-sub-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $76 - 29$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "43" },
            { id: "b", text: "47" },
            { id: "c", text: "57" },
            { id: "d", text: "53" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exchange", statement: "Exchange a ten when ones are too small." }],
            steps: [{ reasoning: "Exchange: 76 becomes 6 tens and 16 ones; $16 - 9 = 7$ and $6 - 2 = 4$, so the answer is 47.", marks: 1, markCode: "A" }],
            finalAnswer: "47",
          },
        },
        {
          id: "cipm-u1-s2-sub-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $85 - 48$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 37 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exchange", statement: "Exchange a ten when ones are too small." }],
            steps: [
              { reasoning: "Exchange: 85 becomes 7 tens and 15 ones.", marks: 1, markCode: "M" },
              { reasoning: "$15 - 8 = 7$; $7 - 4 = 3$; answer 37.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "37",
          },
        },
        {
          id: "cipm-u1-s2-sub-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 60 pencils in a box. 27 pencils are taken out. How many pencils are left in the box?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction word problem", statement: "Left over means subtract." }],
            steps: [
              { reasoning: "Work out $60 - 27$.", marks: 1, markCode: "M" },
              { reasoning: "Exchange: 60 becomes 5 tens and 10 ones; $10 - 7 = 3$ and $5 - 2 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "33 pencils are left in the box.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "33 pencils",
          },
        },
        {
          id: "cipm-u1-s2-sub-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which subtraction needs exchanging a ten?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$43 - 18$" },
            { id: "b", text: "$65 - 30$" },
            { id: "c", text: "$52 - 21$" },
            { id: "d", text: "$76 - 54$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exchange", statement: "Exchange when the top ones digit is smaller." }],
            steps: [{ reasoning: "Only $43 - 18$ has 3 ones, which is less than 8 ones, so a ten must be exchanged.", marks: 1, markCode: "A" }],
            finalAnswer: "$43 - 18$",
          },
        },
        {
          id: "cipm-u1-s2-sub-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the missing number: $84 - \\_\\_ = 56$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operation", statement: "Addition undoes subtraction." }],
            steps: [
              { reasoning: "$84 - 56 = 28$; check: $56 + 28 = 84$.", marks: 1, markCode: "M" },
              { reasoning: "Missing number is 28.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cipm-u1-s2-sub-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Mia works out $70 - 34 = 36$. Which addition can she use to check her answer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$34 + 36 = 70$" },
            { id: "b", text: "$70 + 34 = 104$" },
            { id: "c", text: "$36 + 34 = 71$" },
            { id: "d", text: "$36 - 34 = 2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse check", statement: "Subtraction is checked by adding the answer to the smaller number." }],
            steps: [{ reasoning: "Addition is the inverse of subtraction: $34 + 36 = 70$ checks $70 - 34 = 36$.", marks: 1, markCode: "A" }],
            finalAnswer: "$34 + 36 = 70$",
          },
        },
        {
          id: "cipm-u1-s2-sub-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Work out (a) $97 - 68$. (b) What is 3 more than your answer to part (a)?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 29 }, { label: "b", answer: 32 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exchange", statement: "Exchange a ten when ones are too small." }],
            steps: [
              { reasoning: "Exchange: 97 becomes 8 tens and 17 ones; $17 - 8 = 9$ and $8 - 6 = 2$; answer 29.", marks: 1, markCode: "M" },
              { reasoning: "Part (b): $29 + 3 = 32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "29 and 32",
          },
        },
        {
          id: "cipm-u1-s2-sub-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A box holds 95 marbles. 36 of the marbles are red and the rest are blue. How many marbles are blue?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction word problem", statement: "The rest means subtract." }],
            steps: [
              { reasoning: "Work out $95 - 36$.", marks: 1, markCode: "M" },
              { reasoning: "Exchange: 95 becomes 8 tens and 15 ones; $15 - 6 = 9$ and $8 - 3 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "59 marbles are blue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "59 marbles",
          },
        },
        {
          id: "cipm-u1-s2-sub-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $52 - 21$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "41" },
            { id: "b", text: "33" },
            { id: "c", text: "71" },
            { id: "d", text: "31" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Subtract ones then tens." }],
            steps: [{ reasoning: "$52 - 21 = 31$.", marks: 1, markCode: "A" }],
            finalAnswer: "31",
          },
        },
        {
          id: "cipm-u1-s2-sub-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $60 - 27$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "23" },
            { id: "b", text: "33" },
            { id: "c", text: "37" },
            { id: "d", text: "43" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exchange", statement: "Exchange a ten when ones are too small." }],
            steps: [{ reasoning: "Exchange: 60 becomes 5 tens and 10 ones; $10 - 7 = 3$ and $5 - 2 = 3$, so the answer is 33.", marks: 1, markCode: "A" }],
            finalAnswer: "33",
          },
        },
        {
          id: "cipm-u1-s2-sub-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out (a) $75 - 38$. (b) What is 100 less than your answer to part (a)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction and place value steps", statement: "100 less reduces the hundreds digit." }],
            steps: [
              { reasoning: "Exchange: 75 becomes 6 tens and 15 ones; $15 - 8 = 7$ and $6 - 3 = 3$; answer 37.", marks: 1, markCode: "M" },
              { reasoning: "Part (b): $100 - 37 = 63$.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 37 and 63.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "37 and 63",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-s2-pv-notes",
      title: "Stage 2 place value — revision notes",
      summary: "Place value to 1000, partitioning, subtracting with exchange.",
      sections: [
        { heading: "Key skills", body: "A digit's value depends on its position: hundreds, tens, ones. Partition numbers like $456 = 400 + 50 + 6$ to help with calculations." },
        { heading: "Exchange", body: "When subtracting, exchange one ten for ten ones so the ones digit is big enough." },
      ],
    },
  ],
};
