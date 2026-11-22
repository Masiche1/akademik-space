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
            { id: "a", text: "70" },
            { id: "b", text: "60" },
            { id: "c", text: "68" },
            { id: "d", text: "79" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "43" },
            { id: "b", text: "24" },
            { id: "c", text: "42" },
            { id: "d", text: "34" },
          ], correctChoiceId: "b" },
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
        {
          id: "cipm-u1-s1-c-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is one less than 40?",
          response: { type: "mcq", choices: [
            { id: "a", text: "41" },
            { id: "b", text: "30" },
            { id: "c", text: "39" },
            { id: "d", text: "49" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Counting back", statement: "Count back one to find one less." }],
            steps: [{ reasoning: "One less than 40 is 39.", marks: 1, markCode: "A" }],
            finalAnswer: "39",
          },
        },
        {
          id: "cipm-u1-s1-c-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number is greater: 29 or 92?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are equal" },
            { id: "b", text: "Neither" },
            { id: "c", text: "92" },
            { id: "d", text: "29" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value comparison", statement: "Compare tens digits first." }],
            steps: [{ reasoning: "92 has 9 tens and 29 has 2 tens, so 92 is greater.", marks: 1, markCode: "A" }],
            finalAnswer: "92",
          },
        },
        {
          id: "cipm-u1-s1-c-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Count in twos: 2, 4, 6, __, __.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 8 }, { label: "b", answer: 10 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Skip counting", statement: "Add 2 each time." }],
            steps: [
              { reasoning: "6 + 2 = 8.", marks: 1, markCode: "M" },
              { reasoning: "8 + 2 = 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8, 10",
          },
        },
        {
          id: "cipm-u1-s1-c-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 10 more than 57?",
          response: { type: "numeric", parts: [{ label: "a", answer: 67 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value", statement: "Adding 10 adds one ten." }],
            steps: [
              { reasoning: "57 has 5 tens; one more ten makes 6 tens.", marks: 1, markCode: "M" },
              { reasoning: "10 more than 57 is 67.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "67",
          },
        },
        {
          id: "cipm-u1-s1-c-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Count in tens: 10, 20, __, 40, __.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 30 }, { label: "b", answer: 50 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Skip counting", statement: "Add 10 each time." }],
            steps: [
              { reasoning: "20 + 10 = 30.", marks: 1, markCode: "M" },
              { reasoning: "40 + 10 = 50.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30, 50",
          },
        },
        {
          id: "cipm-u1-s1-c-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Is 63 more or less than 36? Explain how you know.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value comparison", statement: "Compare tens digits first." }],
            steps: [
              { reasoning: "63 has 6 tens; 36 has 3 tens.", marks: 1, markCode: "M" },
              { reasoning: "6 tens is more than 3 tens, so 63 is more than 36.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "63 is more than 36",
          },
        },
        {
          id: "cipm-u1-s1-c-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A counter is on the number 72. If you count on 5, which number do you reach?",
          response: { type: "numeric", parts: [{ label: "a", answer: 77 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Counting on", statement: "Add the count to the starting number." }],
            steps: [
              { reasoning: "Count on 5 from 72: 73, 74, 75, 76, 77.", marks: 1, markCode: "M" },
              { reasoning: "The counter reaches 77.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "77",
          },
        },
        {
          id: "cipm-u1-s1-c-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which number is between 58 and 60? Write the number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 59 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Counting", statement: "Numbers between sit in counting order." }],
            steps: [
              { reasoning: "After 58 comes 59, then 60.", marks: 1, markCode: "M" },
              { reasoning: "The number between 58 and 60 is 59.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "59",
          },
        },
        {
          id: "cipm-u1-s1-c-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which number is the largest: 76, 67, 97, 79?",
          response: { type: "mcq", choices: [
            { id: "a", text: "67" },
            { id: "b", text: "76" },
            { id: "c", text: "79" },
            { id: "d", text: "97" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value comparison", statement: "9 tens is more than 7 tens." }],
            steps: [{ reasoning: "97 has 9 tens, the most of any choice.", marks: 1, markCode: "A" }],
            finalAnswer: "97",
          },
        },
        {
          id: "cipm-u1-s1-c-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is one less than 15?",
          response: { type: "mcq", choices: [
            { id: "a", text: "13" },
            { id: "b", text: "14" },
            { id: "c", text: "16" },
            { id: "d", text: "5" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Counting back", statement: "Count back one to find one less." }],
            steps: [{ reasoning: "One less than 15 is 14.", marks: 1, markCode: "A" }],
            finalAnswer: "14",
          },
        },
        {
          id: "cipm-u1-s1-c-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A number is 10 more than 59 and 1 less than 70. What is the number?",
          response: { type: "numeric", parts: [{ label: "a", answer: 69 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Use the clues to find the number." }],
            steps: [
              { reasoning: "10 more than 59 is $59 + 10 = 69$.", marks: 1, markCode: "M" },
              { reasoning: "Check: 69 is 1 less than 70, so the number is 69.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "69",
          },
        },
        {
          id: "cipm-u1-s1-c-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "I am thinking of a number between 40 and 50. It has 4 tens and its ones digit is 7. What is the number? Explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Place value", statement: "Tens digit and ones digit build the number." }],
            steps: [
              { reasoning: "4 tens means the number is in the forties.", marks: 1, markCode: "M" },
              { reasoning: "7 ones means the number ends in 7.", marks: 1, markCode: "M" },
              { reasoning: "4 tens and 7 ones is 47, which is between 40 and 50.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "47",
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
            { id: "a", text: "13" },
            { id: "b", text: "15" },
            { id: "c", text: "14" },
            { id: "d", text: "16" },
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
        {
          id: "cipm-u1-s1-a-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $9 + 6$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" },
            { id: "b", text: "13" },
            { id: "c", text: "15" },
            { id: "d", text: "16" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Addition", statement: "Combine to find total." }],
            steps: [{ reasoning: "9 + 6 = 15.", marks: 1, markCode: "A" }],
            finalAnswer: "15",
          },
        },
        {
          id: "cipm-u1-s1-a-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Complete the number bond: 7 + ___ = 10.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pair that adds to 10." }],
            steps: [{ reasoning: "$10 - 7 = 3$.", marks: 1, markCode: "M" }, { reasoning: "Missing number is 3.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cipm-u1-s1-a-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $56 + 23$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 79 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding tens and ones", statement: "Add tens then ones." }],
            steps: [
              { reasoning: "5 tens + 2 tens = 7 tens; 6 + 3 = 9.", marks: 1, markCode: "M" },
              { reasoning: "$56 + 23 = 79$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "79",
          },
        },
        {
          id: "cipm-u1-s1-a-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $26 + 13$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 39 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding tens and ones", statement: "Add tens then ones." }],
            steps: [
              { reasoning: "2 tens + 1 ten = 3 tens; 6 + 3 = 9.", marks: 1, markCode: "M" },
              { reasoning: "$26 + 13 = 39$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "39",
          },
        },
        {
          id: "cipm-u1-s1-a-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which calculation makes 10?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6 + 4$" },
            { id: "b", text: "$7 + 2$" },
            { id: "c", text: "$8 + 3$" },
            { id: "d", text: "$5 + 3$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pairs that add to 10." }],
            steps: [{ reasoning: "$6 + 4 = 10$; the others make 9, 8 and 11.", marks: 1, markCode: "A" }],
            finalAnswer: "$6 + 4$",
          },
        },
        {
          id: "cipm-u1-s1-a-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "There are 14 red balloons and 13 blue balloons. How many balloons are there altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Addition word problem", statement: "Altogether means add." }],
            steps: [
              { reasoning: "Add the two groups: $14 + 13$.", marks: 1, markCode: "M" },
              { reasoning: "$14 + 13 = 27$ balloons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27 balloons",
          },
        },
        {
          id: "cipm-u1-s1-a-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $37 + 45$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 82 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding with exchange", statement: "When ones make 10, carry one ten." }],
            steps: [
              { reasoning: "3 tens + 4 tens = 7 tens; 7 + 5 = 12, which is 1 ten and 2 ones.", marks: 1, markCode: "M" },
              { reasoning: "$37 + 45 = 82$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "82",
          },
        },
        {
          id: "cipm-u1-s1-a-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Complete the number bond to 20: 14 + ___ = 20.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Number bond", statement: "Pair that adds to 20." }],
            steps: [{ reasoning: "$20 - 14 = 6$.", marks: 1, markCode: "M" }, { reasoning: "Missing number is 6.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u1-s1-a-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Ben has 46 marbles. He buys 27 more marbles. How many marbles does Ben have now?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Addition word problem", statement: "Now means add the new amount." }],
            steps: [
              { reasoning: "Add the marbles: $46 + 27$.", marks: 1, markCode: "M" },
              { reasoning: "4 tens + 2 tens = 6 tens; 6 + 7 = 13, which is 1 ten and 3 ones.", marks: 1, markCode: "M" },
              { reasoning: "$46 + 27 = 73$ marbles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "73 marbles",
          },
        },
        {
          id: "cipm-u1-s1-a-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $25 + 20$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "47" },
            { id: "b", text: "35" },
            { id: "c", text: "55" },
            { id: "d", text: "45" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding tens", statement: "Add the tens, keep the ones." }],
            steps: [{ reasoning: "25 + 20 = 45.", marks: 1, markCode: "A" }],
            finalAnswer: "45",
          },
        },
        {
          id: "cipm-u1-s1-a-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $49 + 47$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 96 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding with exchange", statement: "Add tens then ones; exchange when needed." }],
            steps: [
              { reasoning: "4 tens + 4 tens = 8 tens; 9 + 7 = 16, which is 1 ten and 6 ones.", marks: 1, markCode: "M" },
              { reasoning: "The 16 ones becomes 1 ten and 6 ones, so we have 9 tens and 6 ones.", marks: 1, markCode: "M" },
              { reasoning: "$49 + 47 = 96$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "96",
          },
        },
        {
          id: "cipm-u1-s1-a-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two numbers add to make 60. One of the numbers is 35. What is the other number? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse of addition", statement: "Subtract the known number from the total." }],
            steps: [
              { reasoning: "The total is 60 and one number is 35.", marks: 1, markCode: "M" },
              { reasoning: "Find the missing number: $60 - 35$.", marks: 1, markCode: "M" },
              { reasoning: "$60 - 35 = 25$; check $35 + 25 = 60$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25",
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
