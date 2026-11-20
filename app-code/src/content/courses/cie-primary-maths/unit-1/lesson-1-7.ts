import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "cipm-u1-lesson-1-7",
  code: "1-7",
  title: "Stage 1 — Measures, Money and Simple Data",
  goal: "I CAN compare measurements, use money and sort simple data.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 1: measures and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 1Nm, 1Gg, 1Gt, 1Ss"],
  stage: 1,
  vocabulary: [
    { term: "Longer/shorter", definition: "Comparing lengths." },
    { term: "Heavier/lighter", definition: "Comparing masses." },
    { term: "Money", definition: "Coins and notes used to buy things." },
    { term: "Sort", definition: "Group objects by a shared feature." },
    { term: "Tally", definition: "Marks used to count, like ||||." },
  ],
  concepts: [
    {
      id: "cipm-u1-s7-measures-data",
      title: "Comparing measures, money and sorting data",
      skill: "Compare lengths/masses/capacities, recognise coins and sort data at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Comparing measures and money",
            body: "Compare lengths (longer/shorter), masses (heavier/lighter) and capacities (holds more/less) by direct comparison or simple measuring. For money, recognise 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2 coins and notes; count on to find totals under £1.",
          },
          {
            heading: "Sorting data",
            body: "Data is information you collect. Sort objects into groups — by colour, size or type — and count each group using tally marks. A tally of four is |||| and the fifth mark crosses it: ~. Comparing the groups shows which has most and least.",
          },
        ],
        keyFormulas: [
          { name: "Comparing", statement: "longer/shorter; heavier/lighter; more/less" },
          { name: "Money", statement: "count on: 10p + 5p + 2p = 17p" },
        ],
        workedExample: {
          problem: "You have a 10p, a 5p and a 2p coin. How much money is that?",
          solution: "10 + 5 + 2 = 17p.",
        },
      },
      questions: [
        {
          id: "cipm-u1-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pencil is 15 cm and a crayon is 8 cm. Which is longer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The pencil" }, { id: "b", text: "The crayon" }, { id: "c", text: "They are equal" }, { id: "d", text: "Cannot tell" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Comparing length", statement: "Bigger number = longer." }],
            steps: [{ reasoning: "15 > 8, so the pencil is longer.", marks: 1, markCode: "A" }],
            finalAnswer: "The pencil",
          },
        },
        {
          id: "cipm-u1-md-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 5p + 10p + 2p?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding money", statement: "Add the pence values." }],
            steps: [
              { reasoning: "5 + 10 + 2 = 17.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17p",
          },
        },
        {
          id: "cipm-u1-md-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these into two groups and say the groups: red car, blue car, red ball, blue ball.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sorting", statement: "Group by a shared feature." }],
            steps: [
              { reasoning: "Group by colour: red (car, ball) and blue (car, ball).", marks: 1, markCode: "M" },
              { reasoning: "Or by type: cars (red, blue) and balls (red, blue).", marks: 1, markCode: "M" },
              { reasoning: "Any sensible grouping accepted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. red group and blue group",
          },
        },
        {
          id: "cipm-u1-md-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "In a tally chart, dogs = |||| and cats = |||. How many more dogs than cats?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tally counting", statement: "Count marks, then compare." }],
            steps: [
              { reasoning: "Dogs = 4, cats = 3.", marks: 1, markCode: "M" },
              { reasoning: "Difference: 4 − 3.", marks: 1, markCode: "M" },
              { reasoning: "= 1.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1 more dog.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-md-notes",
      title: "Measures, money and data — revision notes",
      summary: "Compare measures directly; count coins; sort and tally data.",
      sections: [
        { heading: "Measures", body: "longer/shorter, heavier/lighter, more/less — compare or measure simply." },
        { heading: "Data", body: "Sort into groups, count with tallies, compare which group is biggest." },
      ],
    },
  ],
};
