import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cipm-u1-lesson-1-12",
  code: "1-12",
  title: "Stage 1 — Doubling, Halving, Sharing and Estimating",
  goal: "I CAN double and halve numbers, share equally and make sensible estimates.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 1: calculation and number sense",
  "Cambridge Primary Mathematics 0096 framework substrands: 1Nc, 1Ni, 1Nf"],
  stage: 1,
  vocabulary: [
    { term: "Double", definition: "Add a number to itself: double 4 = 8." },
    { term: "Half", definition: "Split into two equal parts: half of 8 = 4." },
    { term: "Share equally", definition: "Divide objects so each group gets the same." },
    { term: "Estimate", definition: "A sensible guess you can check by counting." },
    { term: "Odd/even", definition: "Even numbers pair up; odd have one left over." },
  ],
  concepts: [
    {
      id: "cipm-u1-s12-double-halve",
      title: "Doubling, halving, sharing and estimating",
      skill: "Use doubling and halving facts, share objects equally and estimate quantities at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Doubling and halving",
            body: "Doubling means adding a number to itself — double 5 is 5 + 5 = 10. Halving splits into two equal parts — half of 10 is 5. Doubles and halves are opposites: if double 4 = 8, then half of 8 = 4. Learn doubles to at least double 5 by heart: 2, 4, 6, 8, 10.",
          },
          {
            heading: "Sharing and estimating",
            body: "Sharing equally means dealing objects so every group gets the same — share 12 counters between 2 people = 6 each. Estimate first: look at a group and guess 'about 20', then check by counting. Even numbers can be halved exactly; odd numbers leave one left over when halved.",
          },
        ],
        keyFormulas: [
          { name: "Double", statement: "double n = n + n" },
          { name: "Half", statement: "half of 2n = n" },
          { name: "Share", statement: "total ÷ groups = each (if it divides evenly)" },
        ],
        workedExample: {
          problem: "Share 14 grapes equally between 2 children. How many each?",
          solution: "14 ÷ 2 = 7 grapes each.",
        },
      },
      questions: [
        {
          id: "cipm-u1-dh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is double 6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "12" },
            { id: "b", text: "10" },
            { id: "c", text: "8" },
            { id: "d", text: "14" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Double", statement: "n + n." }],
            steps: [{ reasoning: "6 + 6 = 12.", marks: 1, markCode: "M" }],
            finalAnswer: "12",
          },
        },
        {
          id: "cipm-u1-dh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is half of 18?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half", statement: "Two equal parts." }],
            steps: [
              { reasoning: "18 ÷ 2 = 9.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipm-u1-dh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 20 pencils equally among 4 pots. How many in each pot?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equal sharing", statement: "Deal until all used; count each group." }],
            steps: [
              { reasoning: "20 ÷ 4 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Check: 5 × 4 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 pencils per pot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u1-dh-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A jar holds counters. You estimate about 30. You count them in groups of 10: 3 full groups plus 4 more. (a) What is the exact count? (b) Was your estimate sensible? (c) Double the exact count, then halve it — explain what you notice. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimating and doubling/halving", statement: "Group counting, estimate check, inverse operations." }],
            steps: [
              { reasoning: "(a) 3 tens + 4 = 34.", marks: 1, markCode: "M" },
              { reasoning: "Counting in tens is efficient.", marks: 1, markCode: "M" },
              { reasoning: "(b) 30 vs 34 — close, so estimate was sensible.", marks: 1, markCode: "M" },
              { reasoning: "(c) Double 34 = 68; half of 68 = 34.", marks: 1, markCode: "M" },
              { reasoning: "Doubling then halving returns the original number.", marks: 1, markCode: "M" },
              { reasoning: "They are inverse operations.", marks: 1, markCode: "A" },
              { reasoning: "Working shown clearly.", marks: 1, markCode: "M" },
              { reasoning: "All parts answered correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 34 (b) yes, close estimate (c) 68 then 34 — doubling and halving are opposites",
          },
        },
        {
          id: "cipm-u1-dh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is double 9?",
          response: { type: "mcq", choices: [
            { id: "a", text: "18" },
            { id: "b", text: "16" },
            { id: "c", text: "27" },
            { id: "d", text: "19" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Double", statement: "n + n." }],
            steps: [{ reasoning: "9 + 9 = 18.", marks: 1, markCode: "M" }],
            finalAnswer: "18",
          },
        },
        {
          id: "cipm-u1-dh-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is half of 24?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Half", statement: "Two equal parts." }],
            steps: [
              { reasoning: "24 ÷ 2 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cipm-u1-dh-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is even?",
          response: { type: "mcq", choices: [
            { id: "a", text: "15" },
            { id: "b", text: "16" },
            { id: "c", text: "7" },
            { id: "d", text: "13" },
          ], correctChoiceIb: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Even number", statement: "Pairs up exactly, no one left over." }],
            steps: [{ reasoning: "16 pairs into 8 twos; 7, 13 and 15 each leave one over.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cipm-u1-dh-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Share 18 grapes equally between 3 children. How many grapes does each child get?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6, unit: "grapes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Equal sharing", statement: "Deal out equally; check by multiplying back." }],
            steps: [
              { reasoning: "18 ÷ 3 = 6.", marks: 1, markCode: "M" },
              { reasoning: "Check: 6 × 3 = 18. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 grapes",
          },
        },
        {
          id: "cipm-u1-dh-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is half of 15?",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "7 with 1 left over" },
            { id: "d", text: "15" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Halving odd numbers", statement: "Odd numbers cannot be halved exactly." }],
            steps: [{ reasoning: "15 ÷ 2 = 7 remainder 1 — one is left over.", marks: 1, markCode: "A" }],
            finalAnswer: "7 with 1 left over",
          },
        },
        {
          id: "cipm-u1-dh-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 24 sweets equally among 4 children. How many sweets does each child get? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equal sharing", statement: "Deal until all used; count each group." }],
            steps: [
              { reasoning: "24 ÷ 4 = 6.", marks: 1, markCode: "M" },
              { reasoning: "Check: 6 × 4 = 24. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6 sweets each.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 sweets",
          },
        },
        {
          id: "cipm-u1-dh-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "(a) What is double 16? (b) What is half of your answer to (a)?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 32 },
            { label: "b", answer: 16 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Double and half", statement: "Inverse operations." }],
            steps: [
              { reasoning: "(a) 16 + 16 = 32.", marks: 1, markCode: "M" },
              { reasoning: "(b) 32 ÷ 2 = 16.", marks: 1, markCode: "M" },
              { reasoning: "Halving undoes doubling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 32 (b) 16",
          },
        },
        {
          id: "cipm-u1-dh-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If double a number is 20, what is the number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "20" },
            { id: "c", text: "40" },
            { id: "d", text: "5" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse of doubling", statement: "Halve to undo a double." }],
            steps: [{ reasoning: "Half of 20 = 10.", marks: 1, markCode: "A" }],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u1-dh-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "There are some beads in a jar. You guess 'about 40'. You count in groups of 10 and find 4 full groups plus 3 more. (a) What is the exact number of beads? (b) Was your guess sensible? (c) Double the exact number. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimating and doubling", statement: "Count in tens; estimate check; n + n." }],
            steps: [
              { reasoning: "(a) 4 tens + 3 = 43 beads.", marks: 1, markCode: "M" },
              { reasoning: "(b) 40 is close to 43, so the estimate was sensible.", marks: 1, markCode: "M" },
              { reasoning: "(c) 43 + 43 = 86.", marks: 1, markCode: "M" },
              { reasoning: "All parts answered correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 43 (b) yes (c) 86",
          },
        },
        {
          id: "cipm-u1-dh-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is double 8?",
          response: { type: "mcq", choices: [
            { id: "a", text: "12" },
            { id: "b", text: "18" },
            { id: "c", text: "14" },
            { id: "d", text: "16" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Double", statement: "n + n." }],
            steps: [{ reasoning: "8 + 8 = 16.", marks: 1, markCode: "A" }],
            finalAnswer: "16",
          },
        },
        {
          id: "cipm-u1-dh-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Share 30 marbles equally between 5 bags. How many marbles go in each bag?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6, unit: "marbles" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Equal sharing", statement: "Divide total by number of groups." }],
            steps: [
              { reasoning: "30 ÷ 5 = 6.", marks: 1, markCode: "M" },
              { reasoning: "Check: 6 × 5 = 30. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 marbles",
          },
        },
        {
          id: "cipm-u1-dh-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Which of 11, 20 and 27 is odd? (b) What is half of 20? (c) What is half of 11, and what is left over? (d) Double your answer to (b) and explain what you notice. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Odd/even and halving", statement: "Odd numbers leave one over when halved; doubling undoes halving." }],
            steps: [
              { reasoning: "(a) 11 and 27 are odd; 20 is even.", marks: 1, markCode: "M" },
              { reasoning: "(b) Half of 20 = 10.", marks: 1, markCode: "M" },
              { reasoning: "(c) Half of 11 = 5 with 1 left over.", marks: 1, markCode: "M" },
              { reasoning: "(d) Double 10 = 20 — halving then doubling returns the original.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct with working shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 11 and 27 (b) 10 (c) 5 r1 (d) 20 — inverse operations",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-dh-notes",
      title: "Doubling and halving — notes",
      summary: "double n = n+n; half splits equally; share = divide into equal groups; estimate then count.",
      sections: [
        { heading: "Facts", body: "Doubles to 5: 2,4,6,8,10. Halving even numbers is exact." },
        { heading: "Estimating", body: "Guess a sensible number, then verify by counting in groups." },
      ],
    },
  ],
};
