import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edpm4-u2-lesson-2-3",
  code: "2-3",
  title: "Decimals: Tenths and Hundredths",
  goal: "I CAN recognise, write and order decimals with one and two decimal places including money.",
  standards: ["Year 4 Decimals"],
  vocabulary: [
    {
      term: "Decimal",
      definition:
        "A number with a point separating whole and fractional parts.",
    },
    {
      term: "Tenths",
      definition:
        "The first digit after the decimal point: 0.3 = 3 tenths = 3/10.",
    },
    {
      term: "Hundredths",
      definition:
        "The second digit after the decimal point: 0.45 = 4 tenths + 5 hundredths.",
    },
    {
      term: "Pound/pence",
      definition:
        "£1 = 100p; decimals show pounds and pence: £2.50 = £2 + 50p.",
    },
    {
      term: "Equivalent",
      definition: "0.5 = 1/2 = 0.50 — same value different form.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u2-decimals",
      title: "Tenths and hundredths",
      skill:
        "Understand tenths and hundredths as fractions and decimals; compare and order decimals.",
      lesson: {
        sections: [
          {
            heading: "Tenths as decimals",
            body: "One tenth = 0.1, two tenths = 0.2... nine tenths = 0.9. 3/10 = 0.3. Tenths are the first decimal place. 0.7 = 7/10 = seven tenths.",
          },
          {
            heading: "Hundredths",
            body: "One hundredth = 0.01. 0.45 = 4 tenths + 5 hundredths = 45/100. 0.07 = 7 hundredths (zero tenths). Compare decimals: 0.6 > 0.55 because 0.6 = 0.60 > 0.55. Line up decimal points when ordering.",
          },
        ],
        keyFormulas: [
          { name: "Tenths", statement: "1st decimal place; 0.3 = 3/10" },
          { name: "Hundredths", statement: "2nd decimal place; 0.45 = 45/100" },
          {
            name: "Compare",
            statement: "Line up decimal points, compare tenths then hundredths",
          },
        ],
        workedExample: {
          problem: "Write 7/10 as a decimal.",
          solution: "7 tenths = 0.7.",
        },
      },
      questions: [
        {
          id: "edpm4-u2-dec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3/10 as a decimal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.03" },
              { id: "b", text: "0.3" },
              { id: "c", text: "0.13" },
              { id: "d", text: "3.0" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tenths",
                statement: "3 tenths = 0.3.",
              },
            ],
            steps: [{ reasoning: "3/10 = 0.3.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 0.3",
            commonErrors: ["Writing 0.03 — that's hundredths not tenths."],
          },
        },
        {
          id: "edpm4-u2-dec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is bigger: 0.6 or 0.55?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing decimals",
                statement: "0.6 = 0.60 > 0.55.",
              },
            ],
            steps: [
              { reasoning: "Line up: 0.60 vs 0.55.", marks: 1, markCode: "M" },
              {
                reasoning: "60 hundredths > 55 hundredths.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.6 is bigger.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.6",
            commonErrors: ["Thinking 0.55 > 0.6 because 55 > 6."],
          },
        },
        {
          id: "edpm4-u2-dec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write 0.45 as a fraction in hundredths.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hundredths",
                statement: "0.45 = 45/100.",
              },
            ],
            steps: [
              {
                reasoning: "0.45 = 4 tenths + 5 hundredths.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "As hundredths: 45/100.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 45/100 (= 9/20).",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45/100",
            commonErrors: ["Writing 45/10 — wrong denominator."],
          },
        },
        {
          id: "edpm4-u2-dec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Order these decimals smallest to largest: 0.4, 0.45, 0.05, 0.5.",
          parts: [
            {
              label: "a",
              prompt: "Rewrite each with two decimal places.",
              marks: 3,
            },
            { label: "b", prompt: "Compare them.", marks: 3 },
            { label: "c", prompt: "Write the final order.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering decimals",
                statement: "0.40, 0.45, 0.05, 0.50 → order by hundredths.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "0.4=0.40, 0.45, 0.05, 0.5=0.50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All rewritten.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Compare hundredths: 5, 40, 45, 50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Ordered correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Order: 0.05, 0.4, 0.45, 0.5.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "All four placed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "0.05, 0.4, 0.45, 0.5",
            commonErrors: [
              "Ordering 0.45 before 0.4 — misreading decimal places.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm4-u2-money-dec",
      title: "Decimals and money",
      skill:
        "Use decimals for money, convert between pounds and pence, and solve money problems.",
      lesson: {
        sections: [
          {
            heading: "Money as decimals",
            body: "£1 = 100p = £1.00. £2.50 = £2 + 50p. The decimal point separates pounds from pence: £3.75 = 3 pounds 75 pence. Write pence as decimals: 75p = £0.75, 5p = £0.05.",
          },
          {
            heading: "Money calculations",
            body: "Add and subtract money keeping decimals aligned. £2.40 + £1.35 = £3.75. £5.00 − £2.75 = £2.25. Multiply: £1.20 × 3 = £3.60. Compare prices using decimals: £0.99 < £1.00.",
          },
        ],
        keyFormulas: [
          {
            name: "Money",
            statement: "£1 = 100p; decimal point = pounds/pence boundary",
          },
          { name: "Convert", statement: "75p = £0.75; 5p = £0.05" },
        ],
        workedExample: {
          problem: "Write 240p in pounds.",
          solution: "240p = £2.40 (240 ÷ 100 = 2.4).",
        },
      },
      questions: [
        {
          id: "edpm4-u2-md-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write £2.50 in pence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2005p" },
              { id: "b", text: "250p" },
              { id: "c", text: "25p" },
              { id: "d", text: "205p" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money conversion",
                statement: "£2.50 = 2×100 + 50 = 250p.",
              },
            ],
            steps: [
              {
                reasoning: "£2 = 200p, 50p → 250p total.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 250p",
            commonErrors: ["Writing 25p — forgetting the pound sign."],
          },
        },
        {
          id: "edpm4-u2-md-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is £3.75 + £1.25?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money addition",
                statement:
                  "Pounds: 3+1=4; pence: 75+25=100 → carry £1 → £5.00.",
              },
            ],
            steps: [
              { reasoning: "75p + 25p = 100p = £1.", marks: 1, markCode: "M" },
              { reasoning: "£3 + £1 + £1 = £5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £5.00.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£5.00",
            commonErrors: ["Answering £5.100 — not understanding pence carry."],
          },
        },
        {
          id: "edpm4-u2-md-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A toy costs £4.99. You pay with a £5 note. How much change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change",
                statement: "£5.00 − £4.99 = £0.01.",
              },
            ],
            steps: [
              { reasoning: "£5.00 − £4.99.", marks: 1, markCode: "M" },
              {
                reasoning: "Difference = £0.01 (1p).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 1p change.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1p",
            commonErrors: ["Answering £0.99 — confusing cost and change."],
          },
        },
        {
          id: "edpm4-u2-md-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You buy 3 notebooks at £1.20 each and a pen at £0.75.",
          parts: [
            { label: "a", prompt: "What is the total cost?", marks: 4 },
            {
              label: "b",
              prompt: "You pay with a £5 note. How much change?",
              marks: 3,
            },
            { label: "c", prompt: "Write the total cost in pence.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Money problems",
                statement:
                  "3×£1.20 = £3.60 + £0.75 = £4.35; change £0.65; 435p.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 × £1.20 = £3.60.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "£3.60 + £0.75 = £4.35.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £4.35.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "£5.00 − £4.35 = £0.65.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 65p change.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "£4.35 = 400 + 35 = 435p.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 435p.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conversion correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£4.35; 65p; 435p",
            commonErrors: [
              "Multiplying £1.20 × 3 as £1.206 — place value error.",
            ],
          },
        },
      ],
    },
  ],
};
