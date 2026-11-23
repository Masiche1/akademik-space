import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm2-u4-lesson-4-2",
  code: "4-2",
  title: "Fractions in Context",
  goal: "I CAN recognise and use fractions of shapes, sets and quantities.",
  standards: ["Year 2 Fractions"],
  vocabulary: [
    { term: "Fraction", definition: "A part of a whole." },
    { term: "Numerator", definition: "The top number — how many parts." },
    {
      term: "Denominator",
      definition: "The bottom number — how many equal parts in total.",
    },
    { term: "Half", definition: "One of two equal parts." },
  ],
  concepts: [
    {
      id: "edpm2-u4-frac",
      title: "Halves, Thirds and Quarters",
      skill: "Identify and name common fractions.",
      lesson: {
        sections: [
          {
            heading: "Parts of a whole",
            body: "A fraction names equal parts of a whole. Halves split into 2 equal parts (1/2), thirds into 3 (1/3), quarters into 4 (1/4), fifths into 5 (1/5). The bottom number (denominator) says how many equal parts; the top number (numerator) says how many you have.",
          },
          {
            heading: "Fractions of sets",
            body: "Fractions can be of quantities too: half of 10 = 5, a third of 12 = 4, a quarter of 8 = 2. To find a fraction of a number, divide by the denominator: half of 14 = 14 ÷ 2 = 7. Quarter of 20 = 20 ÷ 4 = 5.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction of a number",
            statement: "Divide by denominator: 1/4 of 20 = 20 ÷ 4 = 5",
          },
        ],
        workedExample: {
          problem: "What is a third of 12?",
          solution: "12 ÷ 3 = 4.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What fraction is one part out of four equal parts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1/3" },
              { id: "c", text: "1/4" },
              { id: "d", text: "1/5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quarters",
                statement: "1 of 4 = 1/4.",
              },
            ],
            steps: [
              { reasoning: "4 parts → quarters.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 1/4",
            commonErrors: ["Wrong fraction."],
          },
        },
        {
          id: "edpm2-u4-fr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is half of 14?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fractions of numbers",
                statement: "14 ÷ 2 = 7.",
              },
            ],
            steps: [{ reasoning: "14 ÷ 2 = 7.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 7",
            commonErrors: ["Wrong division."],
          },
        },
        {
          id: "edpm2-u4-fr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a quarter of 20? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fractions of numbers",
                statement: "20 ÷ 4 = 5.",
              },
            ],
            steps: [
              { reasoning: "Quarter = ÷ 4.", marks: 1, markCode: "M" },
              { reasoning: "20 ÷ 4 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Wrong divisor."],
          },
        },
        {
          id: "edpm2-u4-fr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pizza is cut into 4 equal slices. Tom eats 1 slice, Ana eats 2 slices. What fraction of the pizza is left?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fractions",
                statement: "4 - 3 = 1 slice left = 1/4.",
              },
            ],
            steps: [
              {
                reasoning: "Tom + Ana ate 1 + 2 = 3 slices.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "4 - 3 = 1 slice left.", marks: 1, markCode: "M" },
              {
                reasoning: "1 of 4 slices = 1/4 left.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "1/4",
            commonErrors: ["Wrong fraction."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-equivalent",
      title: "Equivalent Fractions",
      skill: "Recognise fractions that are the same size.",
      lesson: {
        sections: [
          {
            heading: "Same value, different names",
            body: "Some fractions look different but mean the same: 1/2 = 2/4 = 3/6. If you cut a cake into 2 equal parts and take 1, it's the same as cutting into 4 parts and taking 2. Equivalent fractions are equal in value.",
          },
          {
            heading: "Finding equivalents",
            body: "To find equivalents, multiply or divide both numbers by the same amount: 1/2 × 2 = 2/4. Or simplify: 4/8 ÷ 4 = 1/2. You can check by drawing the fractions — if they cover the same amount, they're equivalent.",
          },
        ],
        keyFormulas: [
          { name: "Equivalent fractions", statement: "1/2 = 2/4 = 3/6 = 4/8" },
        ],
        workedExample: {
          problem: "Is 2/4 the same as 1/2?",
          solution: "Yes — 2/4 simplifies to 1/2.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 1/2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/3" },
              { id: "b", text: "2/4" },
              { id: "c", text: "2/5" },
              { id: "d", text: "3/4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equivalent fractions",
                statement: "1/2 = 2/4.",
              },
            ],
            steps: [{ reasoning: "2/4 = 1/2.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 2/4",
            commonErrors: ["Wrong fraction."],
          },
        },
        {
          id: "edpm2-u4-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 3/6 equivalent to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "1/3" },
              { id: "c", text: "2/3" },
              { id: "d", text: "3/4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Simplifying", statement: "3/6 = 1/2." },
            ],
            steps: [{ reasoning: "3/6 ÷ 3 = 1/2.", marks: 2, markCode: "B" }],
            finalAnswer: "**(a)** 1/2",
            commonErrors: ["Wrong simplification."],
          },
        },
        {
          id: "edpm2-u4-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find two fractions equivalent to 1/4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equivalent fractions",
                statement: "2/8, 3/12.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply top and bottom by 2: 2/8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Multiply by 3: 3/12.", marks: 1, markCode: "M" },
              {
                reasoning: "Two correct equivalents.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. 2/8 and 3/12",
            commonErrors: ["Not equivalent."],
          },
        },
        {
          id: "edpm2-u4-eq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why 2/3 is NOT equivalent to 1/2, using a diagram or example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-equivalent",
                statement: "Different amounts.",
              },
            ],
            steps: [
              { reasoning: "2/3 is bigger than 1/2.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Example — of 6 parts, 2/3 = 4 parts, 1/2 = 3 parts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different values = not equivalent.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "2/3 > 1/2, not equal",
            commonErrors: ["Claimed equivalent."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-money",
      title: "Money Problems",
      skill: "Solve money problems using pounds and pence.",
      lesson: {
        sections: [
          {
            heading: "Pounds and pence",
            body: "£1 = 100p. Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2. To find change: subtract what you pay from the total. To find total: add prices together. Always convert to pence for calculations.",
          },
          {
            heading: "Money problems",
            body: "'I have £2 and buy a sweet for 60p. How much change?' Convert: £2 = 200p. 200 - 60 = 140p = £1.40. Check: 60p + £1.40 = £2. Always check your change adds back to the original amount.",
          },
        ],
        keyFormulas: [
          {
            name: "£1 = 100p",
            statement: "Convert pounds to pence before calculating",
          },
        ],
        workedExample: {
          problem: "A toy costs £1.20. You pay with £2. What is the change?",
          solution: "200p - 120p = 80p = 80pence.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-mon-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many pence is £1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10p" },
              { id: "b", text: "50p" },
              { id: "c", text: "100p" },
              { id: "d", text: "1000p" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Currency", statement: "£1 = 100p." },
            ],
            steps: [{ reasoning: "£1 = 100p.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 100p",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm2-u4-mon-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sweet costs 30p. You pay with 50p. How much change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10p" },
              { id: "b", text: "20p" },
              { id: "c", text: "30p" },
              { id: "d", text: "80p" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Change", statement: "50 - 30 = 20p." },
            ],
            steps: [{ reasoning: "50 - 30 = 20p.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 20p",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm2-u4-mon-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A book costs £1.50 and a pen costs 50p. How much do they cost altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Money addition",
                statement: "150p + 50p = 200p = £2.",
              },
            ],
            steps: [
              { reasoning: "£1.50 = 150p.", marks: 1, markCode: "M" },
              { reasoning: "150 + 50 = 200p = £2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£2",
            commonErrors: ["Wrong conversion."],
          },
        },
        {
          id: "edpm2-u4-mon-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have £3. You buy a toy for £1.80 and a sweet for 40p. How much change do you get? Show all steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step money",
                statement: "Total cost then change.",
              },
            ],
            steps: [
              {
                reasoning: "Total: 180p + 40p = 220p.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "£3 = 300p.", marks: 1, markCode: "M" },
              {
                reasoning: "Change: 300 - 220 = 80p.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "80p change",
            commonErrors: ["Forgot to convert."],
          },
        },
      ],
    },
  ],
};
