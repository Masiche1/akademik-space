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
            { id: "a", text: "0" },
            { id: "b", text: "1/4" },
            { id: "c", text: "1" },
            { id: "d", text: "1/2" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair dice is rolled. What is P(rolling a 5)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "5/6" },
            { id: "b", text: "1/6" },
            { id: "c", text: "1" },
            { id: "d", text: "1/5" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "favourable ÷ total." }],
            steps: [{ reasoning: "1 favourable outcome out of 6 equally likely faces = 1/6.", marks: 1, markCode: "A" }],
            finalAnswer: "1/6",
          },
        },
        {
          id: "cipm-u2-pr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write 0.5 as a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Percentage", statement: "Multiply decimal by 100." }],
            steps: [
              { reasoning: "0.5 × 100 = 50.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
          },
        },
        {
          id: "cipm-u2-pr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 1/4?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3/8" },
            { id: "b", text: "2/8" },
            { id: "c", text: "2/3" },
            { id: "d", text: "1/8" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equivalent fractions", statement: "Multiply top and bottom by same number." }],
            steps: [{ reasoning: "$\\frac{1}{4} = \\frac{2}{8}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2}{8}$",
          },
        },
        {
          id: "cipm-u2-pr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has 4 green and 6 yellow counters. What is P(green)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "favourable ÷ total." }],
            steps: [
              { reasoning: "Total $= 10$; favourable $= 4$.", marks: 1, markCode: "M" },
              { reasoning: "P(green) $= \\frac{4}{10} = \\frac{2}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{5}$",
          },
        },
        {
          id: "cipm-u2-pr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An event that cannot happen has a probability of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "100%" },
            { id: "c", text: "1/2" },
            { id: "d", text: "0" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "0 = impossible." }],
            steps: [{ reasoning: "Impossible events have probability 0.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "cipm-u2-pr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A spinner has 10 equal sections; 3 are blue. Find P(blue) as a fraction, decimal and percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability conversions", statement: "favourable ÷ total; convert." }],
            steps: [
              { reasoning: "P(blue) $= \\frac{3}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{3}{10} = 0.3$.", marks: 1, markCode: "M" },
              { reasoning: "$0.3 = 30\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{10} = 0.3 = 30\\%$",
          },
        },
        {
          id: "cipm-u2-pr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is $\\frac{1}{10}$ as a percentage?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1%" },
            { id: "b", text: "10%" },
            { id: "c", text: "0.1%" },
            { id: "d", text: "100%" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to percentage", statement: "$\\frac{1}{10} = \\frac{10}{100} = 10\\%$." }],
            steps: [{ reasoning: "$\\frac{1}{10} = 10\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "10%",
          },
        },
        {
          id: "cipm-u2-pr-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{2}{5}$ as a decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Convert to tenths or divide." }],
            steps: [
              { reasoning: "$\\frac{2}{5} = \\frac{4}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{4}{10} = 0.4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.4",
          },
        },
        {
          id: "cipm-u2-pr-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A bag has 2 red, 3 blue and 5 green counters. (a) What is P(red)? (b) What is P(blue or green)? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "favourable ÷ total; combine outcomes." }],
            steps: [
              { reasoning: "Total $= 2 + 3 + 5 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "(a) P(red) $= \\frac{2}{10} = \\frac{1}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Blue or green $= 3 + 5 = 8$; P $= \\frac{8}{10} = \\frac{4}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{1}{5}$ (b) $\\frac{4}{5}$",
          },
        },
        {
          id: "cipm-u2-pr-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An event that is certain to happen has a probability of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "depends on the event" },
            { id: "b", text: "1/2" },
            { id: "c", text: "0" },
            { id: "d", text: "1" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Probability", statement: "1 = certain." }],
            steps: [{ reasoning: "Certain events have probability 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cipm-u2-pr-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{3}{4}$ as a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to percentage", statement: "Find equivalent over 100." }],
            steps: [
              { reasoning: "$\\frac{3}{4} = \\frac{75}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "= 75%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "cipm-u2-pr-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A bag has 5 red and 15 blue counters — find P(red). (b) Write P(red) as a decimal and a percentage. (c) Which is more likely: drawing red or drawing blue? Explain. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Probability", statement: "favourable ÷ total; convert; compare." }],
            steps: [
              { reasoning: "(a) Total $= 20$; P(red) $= \\frac{5}{20} = \\frac{1}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $\\frac{1}{4} = 0.25 = 25\\%$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Blue is more likely: 15 of 20 vs 5 of 20.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Explanation uses probability reasoning.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{1}{4}$ (b) 0.25, 25% (c) blue",
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
