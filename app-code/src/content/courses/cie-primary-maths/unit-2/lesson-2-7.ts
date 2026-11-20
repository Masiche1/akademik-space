import type { Lesson } from "../../../types.ts";

export const lesson27: Lesson = {
  id: "cipm-u2-lesson-2-7",
  code: "2-7",
  title: "Stage 5 — Probability and Equivalent Fractions",
  goal: "I CAN find simple probabilities and match equivalent fractions, decimals and percentages.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 5: probability and fractions",
  "Cambridge Primary Mathematics 0096 framework substrands: 5Sp, 5Nf"],
  stage: 5,
  vocabulary: [
    { term: "Probability", definition: "How likely something is to happen, from 0 to 1." },
    { term: "Equally likely", definition: "Each outcome has the same chance." },
    { term: "Equivalent fractions", definition: "Different fractions with the same value, like 1/2 = 2/4." },
    { term: "Percentage", definition: "A fraction out of 100; 50% = 1/2 = 0.5." },
    { term: "Outcome", definition: "One possible result of an event." },
  ],
  concepts: [
    {
      id: "cipm-u2-s7-probability",
      title: "Simple probability and equivalent fractions",
      skill: "Calculate basic probabilities and convert between fractions, decimals and percentages.",
      lesson: {
        sections: [
          {
            heading: "Probability",
            body: "Probability = favourable outcomes ÷ total outcomes, when all outcomes are equally likely. A probability of 0 means impossible; 1 means certain; 1/2 means even chance. For a die, P(rolling a 4) = 1/6.",
          },
          {
            heading: "Equivalent fractions, decimals and percentages",
            body: "Multiply or divide numerator and denominator by the same number to get equivalent fractions: 1/2 = 2/4 = 5/10. Key conversions: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 1/10 = 0.1 = 10%. To find a percentage of an amount, convert to a fraction or decimal and multiply.",
          },
        ],
        keyFormulas: [
          { name: "Probability", statement: "P = favourable ÷ total outcomes" },
          { name: "Conversions", statement: "1/2 = 0.5 = 50%; 1/4 = 0.25 = 25%" },
        ],
        workedExample: {
          problem: "A bag has 3 red and 7 blue counters. What is P(red)?",
          solution: "Total = 10 counters; favourable = 3; P(red) = 3/10 = 0.3 = 30%.",
        },
      },
      questions: [
        {
          id: "cipm-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair coin is flipped. What is P(heads)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1/2" }, { id: "b", text: "1" }, { id: "c", text: "1/4" }, { id: "d", text: "0" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "favourable ÷ total." }],
            steps: [{ reasoning: "1 head out of 2 equally likely outcomes = 1/2.", marks: 1, markCode: "A" }],
            finalAnswer: "1/2",
          },
        },
        {
          id: "cipm-u2-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 0.25 as a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Percentage", statement: "Multiply decimal by 100." }],
            steps: [
              { reasoning: "0.25 × 100 = 25.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cipm-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which fraction is equivalent to 3/4?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equivalent fractions", statement: "Multiply top and bottom by same number." }],
            steps: [
              { reasoning: "3/4 = 6/8 = 9/12 = 75/100.", marks: 1, markCode: "M" },
              { reasoning: "Any one equivalent fraction accepted.", marks: 1, markCode: "M" },
              { reasoning: "Answer: e.g. 6/8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 6/8 or 75/100",
          },
        },
        {
          id: "cipm-u2-pr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A spinner has 8 equal sections; 2 are red. Find P(red) as a fraction, decimal and percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability conversions", statement: "2/8 simplifies; convert to decimal and %." }],
            steps: [
              { reasoning: "P(red) = 2/8.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: 2/8 = 1/4.", marks: 1, markCode: "M" },
              { reasoning: "1/4 = 0.25 = 25%.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1/4, 0.25, 25%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4 = 0.25 = 25%",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-pr-notes",
      title: "Probability and fractions — revision notes",
      summary: "P = favourable/total; 1/2=0.5=50%, 1/4=0.25=25%, 1/10=10%.",
      sections: [
        { heading: "Probability", body: "Only works when outcomes are equally likely; 0 = impossible, 1 = certain." },
        { heading: "Conversions", body: "Equivalent fractions by ×/÷ same number; decimals and % are the same value." },
      ],
    },
  ],
};
