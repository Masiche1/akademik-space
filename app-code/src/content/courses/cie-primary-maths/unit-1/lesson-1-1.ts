import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipm-u1-lesson-1-1",
  code: "1-1",
  title: "Stage 1 — Counting and Addition",
  goal: "I CAN count, compare and add numbers within 100.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 1: number",
  "Cambridge Primary Mathematics 0096 framework substrands: 1Nc, 1Ni"],
  stage: 1,
  vocabulary: [
    { term: "Count on", definition: "Say the next numbers in order." },
    { term: "More than", definition: "A greater number." },
    { term: "Less than", definition: "A smaller number." },
    { term: "Add", definition: "Combine two amounts to find the total." },
    { term: "Number bond", definition: "Two numbers that add to make a known total." },
  ],
  concepts: [
    {
      id: "cipm-u1-s1-counting",
      title: "Counting and comparing numbers",
      skill: "Count to 100 and compare numbers at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Counting",
            body: "At Stage 1 you count forwards and backwards in ones, twos, fives and tens. You find one more and one less than a number, and compare numbers using greater than, less than and equal to.",
          },
          {
            heading: "Comparing",
            body: "To compare two numbers, look at the tens digit first, then the ones digit. 47 is greater than 39 because 4 tens is more than 3 tens.",
          },
        ],
        keyFormulas: [
          { name: "Comparing", statement: "Compare tens first, then ones." },
        ],
        workedExample: {
          problem: "Which is greater: 56 or 65?",
          solution: "Both have 5 tens. Compare ones: 6 > 5, so 65 is greater.",
        },
      },
      questions: [
        {
          id: "cipm-u1-s1-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is one more than 69?",
          response: { type: "mcq", choices: [
            { id: "a", text: "68" }, { id: "b", text: "70" }, { id: "c", text: "79" }, { id: "d", text: "60" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Counting on", statement: "Count forwards to find one more." }],
            steps: [{ reasoning: "One more than 69 is 70.", marks: 1, markCode: "A" }],
            finalAnswer: "70",
          },
        },
        {
          id: "cipm-u1-s1-c-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number is the smallest: 34, 43, 24, 42?",
          response: { type: "mcq", choices: [
            { id: "a", text: "34" }, { id: "b", text: "43" }, { id: "c", text: "24" }, { id: "d", text: "42" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value comparison", statement: "Smaller tens digit means smaller number." }],
            steps: [{ reasoning: "24 has 2 tens; all others have 3 or 4 tens.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "cipm-u1-s1-c-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Count in fives: 5, 10, 15, __, __.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20 }, { label: "b", answer: 25 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Skip counting", statement: "Add 5 each time." }],
            steps: [
              { reasoning: "15 + 5 = 20.", marks: 1, markCode: "M" },
              { reasoning: "20 + 5 = 25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20, 25",
          },
        },
        {
          id: "cipm-u1-s1-c-q4",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bus has 28 seats. 15 are taken. How many seats are empty?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Subtraction", statement: "Empty seats = total − taken." }],
            steps: [
              { reasoning: "Subtract taken from total: $28 - 15$.", marks: 1, markCode: "M" },
              { reasoning: "$28 - 15 = 13$ empty seats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13 seats",
          },
        },
      ],
    },
    {
      id: "cipm-u1-s1-addition",
      title: "Adding within 100",
      skill: "Add two-digit numbers at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Adding",
            body: "To add two numbers, add the tens, then add the ones. For example, $34 + 25$: 3 tens + 2 tens = 5 tens, 4 + 5 = 9, so the answer is 59.",
          },
          {
            heading: "Number bonds",
            body: "Knowing pairs that make 10 and 20 makes adding much quicker. 7 + 3 = 10, so 47 + 23 = 47 + 20 + 3 = 70.",
          },
        ],
        keyFormulas: [
          { name: "Adding", statement: "Add tens, then add ones." },
          { name: "Number bond to 10", statement: "$1+9$, $2+8$, $3+7$, $4+6$, $5+5$ all make 10" },
        ],
        workedExample: {
          problem: "Work out $36 + 42$.",
          solution: "3 tens + 4 tens = 7 tens. 6 + 2 = 8. Answer: 78.",
        },
      },
      questions: [
        {
          id: "cipm-u1-s1-a-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $8 + 7$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" }, { id: "b", text: "15" }, { id: "c", text: "16" }, { id: "d", text: "13" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Addition", statement: "Combine to find total." }],
            steps: [{ reasoning: "8 + 7 = 15.", marks: 1, markCode: "A" }],
            finalAnswer: "15",
          },
        },
        {
          id: "cipm-u1-s1-a-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Complete the number bond: 6 + ___ = 10.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pair that adds to 10." }],
            steps: [{ reasoning: "$10 - 6 = 4$.", marks: 1, markCode: "M" }, { reasoning: "Missing number is 4.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u1-s1-a-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $45 + 32$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 77 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding tens and ones", statement: "Add tens then ones." }],
            steps: [
              { reasoning: "4 tens + 3 tens = 7 tens; 5 + 2 = 7.", marks: 1, markCode: "M" },
              { reasoning: "$45 + 32 = 77$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "77",
          },
        },
        {
          id: "cipm-u1-s1-a-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 23 red pens and 18 blue pens. How many pens are there altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Addition word problem", statement: "Altogether means add." }],
            steps: [
              { reasoning: "Add the two groups: $23 + 18$.", marks: 1, markCode: "M" },
              { reasoning: "2 tens + 1 ten = 3 tens; 3 + 8 = 11, so 3 tens + 11 = 4 tens + 1.", marks: 1, markCode: "M" },
              { reasoning: "$23 + 18 = 41$ pens.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "41 pens",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-s1-counting-notes",
      title: "Stage 1 counting and addition — revision notes",
      summary: "Counting to 100, comparing numbers, adding within 100.",
      sections: [
        { heading: "Key skills", body: "Count in ones, twos, fives and tens. Compare numbers by tens first, then ones. Add tens then ones." },
        { heading: "Exam tips", body: "Know number bonds to 10 and 20; check answers make sense." },
      ],
    },
  ],
};
