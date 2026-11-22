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
            { id: "a", text: "They are equal" },
            { id: "b", text: "Cannot tell" },
            { id: "c", text: "The pencil" },
            { id: "d", text: "The crayon" },
          ], correctChoiceId: "c" },
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
        {
          id: "cipm-u1-md-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag of rice has mass 2 kg. A bag of sugar has mass 500 g. Which is heavier?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They are equal" },
            { id: "b", text: "The sugar" },
            { id: "c", text: "Cannot tell" },
            { id: "d", text: "The rice" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Comparing mass", statement: "2 kg = 2000 g, more than 500 g." }],
            steps: [{ reasoning: "2 kg = 2000 g > 500 g, so the rice is heavier.", marks: 1, markCode: "A" }],
            finalAnswer: "The rice",
          },
        },
        {
          id: "cipm-u1-md-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 20p + 5p + 1p?",
          response: { type: "numeric", parts: [{ label: "a", answer: 26, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding money", statement: "Add pence values." }],
            steps: [
              { reasoning: "20 + 5 + 1 = 26.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 26p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26p",
          },
        },
        {
          id: "cipm-u1-md-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a good way to sort a group of buttons?",
          response: { type: "mcq", choices: [
            { id: "a", text: "By how much they cost" },
            { id: "b", text: "By who owns them" },
            { id: "c", text: "By colour" },
            { id: "d", text: "By the day they were made" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sorting", statement: "Group by a shared feature you can see." }],
            steps: [{ reasoning: "Colour is a visible feature; the others are not practical sorting features here.", marks: 1, markCode: "A" }],
            finalAnswer: "By colour",
          },
        },
        {
          id: "cipm-u1-md-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a tally chart, fish = ||||~ and birds = ||||. How many fish and how many birds?",
          response: { type: "numeric", parts: [
            { label: "fish", answer: 5 },
            { label: "birds", answer: 4 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Tally counting", statement: "||||~ = 5; |||| = 4." }],
            steps: [
              { reasoning: "Fish: four marks plus the crossing fifth = 5.", marks: 1, markCode: "M" },
              { reasoning: "Birds: 4 marks = 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 fish, 4 birds",
          },
        },
        {
          id: "cipm-u1-md-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which coin is worth 10p?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The 20p coin" },
            { id: "b", text: "The 5p coin" },
            { id: "c", text: "The 2p coin" },
            { id: "d", text: "The 10p coin" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Coin values", statement: "Know each coin." }],
            steps: [{ reasoning: "The 10p coin is worth 10p.", marks: 1, markCode: "A" }],
            finalAnswer: "The 10p coin",
          },
        },
        {
          id: "cipm-u1-md-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) You have a 10p, a 5p and a 2p coin — how much money is that? (b) A pencil costs 12p — do you have enough? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money totals", statement: "Add coin values; compare with cost." }],
            steps: [
              { reasoning: "(a) 10 + 5 + 2 = 17p.", marks: 1, markCode: "M" },
              { reasoning: "(b) 17p > 12p, so yes, enough money.", marks: 1, markCode: "M" },
              { reasoning: "Comparison stated clearly.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 17p (b) yes",
          },
        },
        {
          id: "cipm-u1-md-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 50p + 20p + 10p?",
          response: { type: "numeric", parts: [{ label: "a", answer: 80, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding money", statement: "Add pence values." }],
            steps: [
              { reasoning: "50 + 20 + 10 = 80.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80p",
          },
        },
        {
          id: "cipm-u1-md-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which container holds the most?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A 1 litre bottle" },
            { id: "b", text: "A 250 ml cup" },
            { id: "c", text: "A 500 ml jug" },
            { id: "d", text: "A 750 ml bottle" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing capacity", statement: "1 litre = 1000 ml." }],
            steps: [{ reasoning: "1 litre = 1000 ml, more than 750, 500 or 250 ml.", marks: 1, markCode: "A" }],
            finalAnswer: "A 1 litre bottle",
          },
        },
        {
          id: "cipm-u1-md-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A ribbon is 30 cm and another is 45 cm — which is longer? (b) In a tally chart, cats = ||| and dogs = ||||~ — how many more dogs than cats? (c) Sort these by size: marble, tennis ball, football. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing and sorting", statement: "Compare lengths; count tallies; order by size." }],
            steps: [
              { reasoning: "(a) 45 > 30, so the second ribbon is longer.", marks: 1, markCode: "M" },
              { reasoning: "(b) Dogs = 5, cats = 3; 5 − 3 = 2 more.", marks: 1, markCode: "M" },
              { reasoning: "(c) Marble < tennis ball < football.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 45 cm ribbon (b) 2 (c) marble, tennis ball, football",
          },
        },
        {
          id: "cipm-u1-md-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many is represented by the tally ||||~?",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "9" },
            { id: "d", text: "4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Tally counting", statement: "Five marks with a cross = 5." }],
            steps: [{ reasoning: "||||~ is five tally marks = 5.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u1-md-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 5p + 5p + 10p?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "p" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding money", statement: "Add pence values." }],
            steps: [
              { reasoning: "5 + 5 + 10 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20p.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20p",
          },
        },
        {
          id: "cipm-u1-md-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) You have a 20p coin and a 10p coin — how much money? (b) A sweet costs 25p — can you buy it? (c) A book is 3 cm thick and a pencil is 15 cm long — which measurement is bigger and why are they different? (d) Sort these by capacity: cup, bucket, bottle. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Money, measures and sorting", statement: "Add coins; compare measures; order by capacity." }],
            steps: [
              { reasoning: "(a) 20 + 10 = 30p.", marks: 1, markCode: "M" },
              { reasoning: "(b) 30p > 25p, so yes.", marks: 1, markCode: "M" },
              { reasoning: "(c) 15 cm > 3 cm; both are lengths but of different objects — the pencil is longer.", marks: 1, markCode: "M" },
              { reasoning: "(d) Cup < bottle < bucket.", marks: 1, markCode: "M" },
              { reasoning: "Working and comparisons shown.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30p (b) yes (c) pencil is longer (d) cup, bottle, bucket",
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
