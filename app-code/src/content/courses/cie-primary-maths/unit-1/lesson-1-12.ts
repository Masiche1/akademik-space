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
            { id: "a", text: "10" }, { id: "b", text: "12" }, { id: "c", text: "8" }, { id: "d", text: "14" },
          ], correctChoiceId: "b" },
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
