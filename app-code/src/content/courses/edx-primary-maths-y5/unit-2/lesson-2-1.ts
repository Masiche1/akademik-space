import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edpm5-u2-lesson-2-1",
  code: "2-1",
  title: "Adding and Subtracting Fractions",
  goal: "I CAN add and subtract fractions with related denominators and multiply fractions by whole numbers.",
  standards: ["Year 5 Fractions"],
  vocabulary: [
    {
      term: "Related denominators",
      definition:
        "Denominators where one is a multiple of the other, e.g. 2 and 4.",
    },
    {
      term: "Improper fraction",
      definition: "A fraction where numerator ≥ denominator, e.g. 7/4.",
    },
    {
      term: "Mixed number",
      definition: "A whole number plus a fraction, e.g. 1 3/4.",
    },
    {
      term: "Equivalent",
      definition: "Same value written differently: 1/2 = 2/4.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u2-add-sub",
      title: "Adding and subtracting fractions",
      skill:
        "Add and subtract fractions with same or related denominators, including mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Related denominators",
            body: "For 1/2 + 1/4, convert to the bigger denominator: 1/2 = 2/4, so 2/4 + 1/4 = 3/4. For 2/3 + 1/6: 2/3 = 4/6, so 4/6 + 1/6 = 5/6. Always find the **lowest common denominator**.",
          },
          {
            heading: "Mixed numbers and improper fractions",
            body: "1 1/2 = 3/2 (improper). To add mixed numbers: convert to improper, add, convert back. 1 1/4 + 2 1/2 = 5/4 + 5/2 = 5/4 + 10/4 = 15/4 = 3 3/4. Subtraction may need borrowing: 2 1/4 − 1 1/2 = 9/4 − 6/4 = 3/4.",
          },
        ],
        keyFormulas: [
          {
            name: "Related denominators",
            statement: "Convert to common denominator first",
          },
          {
            name: "Mixed numbers",
            statement: "1 1/2 = 3/2; add as improper fractions",
          },
        ],
        workedExample: {
          problem: "Calculate 1 1/4 + 1 1/2.",
          solution: "5/4 + 3/2 = 5/4 + 6/4 = 11/4 = 2 3/4.",
        },
      },
      questions: [
        {
          id: "edpm5-u2-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 1/3 + 1/6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2/9" },
              { id: "b", text: "1/2" },
              { id: "c", text: "2/6" },
              { id: "d", text: "1/9" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Related denominators",
                statement: "1/3 = 2/6; 2/6 + 1/6 = 3/6 = 1/2.",
              },
            ],
            steps: [
              {
                reasoning: "Convert to sixths then add.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 1/2",
            commonErrors: ["Adding denominators: 2/9."],
          },
        },
        {
          id: "edpm5-u2-as-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 3/4 − 1/8.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction",
                statement: "3/4 = 6/8; 6/8 − 1/8 = 5/8.",
              },
            ],
            steps: [
              {
                reasoning: "Convert 3/4 to eighths: 6/8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "6/8 − 1/8 = 5/8.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5/8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/8",
            commonErrors: ["Subtracting denominators."],
          },
        },
        {
          id: "edpm5-u2-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 1 1/4 + 1 1/2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed numbers",
                statement: "5/4 + 3/2 = 5/4 + 6/4 = 11/4 = 2 3/4.",
              },
            ],
            steps: [
              {
                reasoning: "Convert: 1 1/4 = 5/4; 1 1/2 = 3/2 = 6/4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "5/4 + 6/4 = 11/4.", marks: 1, markCode: "M" },
              { reasoning: "11/4 = 2 3/4.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 3/4",
            commonErrors: [
              "Adding wholes and fractions separately without converting.",
            ],
          },
        },
        {
          id: "edpm5-u2-as-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A recipe needs 2 1/4 cups of flour and 1 3/4 cups of sugar.",
          parts: [
            {
              label: "a",
              prompt: "How much flour and sugar altogether?",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "If you only have 3 cups of flour, how much more do you need?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why you convert to improper fractions first.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed number problems",
                statement:
                  "9/4 + 7/4 = 16/4 = 4 cups; 3 − 9/4 = 3/4 cup needed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2 1/4 = 9/4; 1 3/4 = 7/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "9/4 + 7/4 = 16/4 = 4 cups.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 4 cups.",
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
                reasoning: "Need 2 1/4 = 9/4 cups; have 3 = 12/4 cups.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "12/4 > 9/4, so 3 cups is already more than enough.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Answer: 0 cups more needed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Improper fractions make adding/subtracting easier — same denominator.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Avoids separate whole/fraction addition errors.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "4 cups; 0 more (3 > 2 1/4); improper fractions simplify calculation",
            commonErrors: [
              "Part (b): 3 cups is already more than 2 1/4 — no extra needed.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm5-u2-mult-frac",
      title: "Multiplying fractions by integers",
      skill:
        "Multiply proper fractions by whole numbers and find fractions of amounts.",
      lesson: {
        sections: [
          {
            heading: "Fraction × integer",
            body: "3/4 × 5 means 5 lots of 3/4: 3/4 + 3/4 + 3/4 + 3/4 + 3/4 = 15/4 = 3 3/4. Or multiply numerator by the integer: 3×5/4 = 15/4. Keep denominator the same — you're adding equal parts.",
          },
          {
            heading: "Fractions of amounts",
            body: "Find the unit fraction first, then multiply: two fifths of 30 = (30 ÷ 5) × 2 = 6 × 2 = 12. For mixed numbers: 1 1/2 × 8 = 12, or 8 + half of 8 = 8 + 4 = 12.",
          },
        ],
        keyFormulas: [
          { name: "Fraction × integer", statement: "(a/b) × n = (a×n)/b" },
          { name: "Fraction of amount", statement: "a/b of n = (n ÷ b) × a" },
        ],
        workedExample: {
          problem: "Calculate 2/5 × 6.",
          solution: "2/5 × 6 = 12/5 = 2 2/5.",
        },
      },
      questions: [
        {
          id: "edpm5-u2-mf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 1/4 × 8?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8/4" },
              { id: "b", text: "2" },
              { id: "c", text: "1/32" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction × integer",
                statement: "1/4 × 8 = 8/4 = 2.",
              },
            ],
            steps: [
              { reasoning: "8/4 simplifies to 2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2",
            commonErrors: ["Multiplying both parts: 1×8 / 4×8."],
          },
        },
        {
          id: "edpm5-u2-mf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 3/5 × 10.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction × integer",
                statement: "3/5 × 10 = 30/5 = 6.",
              },
            ],
            steps: [
              {
                reasoning: "3 × 10 = 30, denominator stays 5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "30/5 = 6.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 30/5 unsimplified."],
          },
        },
        {
          id: "edpm5-u2-mf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is two thirds of 45?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction of amount",
                statement: "45 ÷ 3 = 15; 15 × 2 = 30.",
              },
            ],
            steps: [
              { reasoning: "Third of 45 = 15.", marks: 1, markCode: "M" },
              {
                reasoning: "Two thirds = 15 × 2 = 30.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
            commonErrors: ["Answering 15 — one third not two thirds."],
          },
        },
        {
          id: "edpm5-u2-mf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A tank holds 60 litres. It is three quarters full.",
          parts: [
            {
              label: "a",
              prompt: "How many litres of water are in the tank?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If you pour in 15 more litres, what fraction of the tank is full?",
              marks: 4,
            },
            {
              label: "c",
              prompt: "How much more is needed to fill it completely?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction problems",
                statement: "3/4 of 60 = 45; 45+15=60 = full; needs 0 more.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Quarter of 60 = 15; three quarters = 45 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 45 litres.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "45 + 15 = 60 litres = full tank.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "60/60 = completely full = 1 (or 4/4).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Answer: full / 1.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Tank is now full — 0 litres needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Recognised tank is full.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Answer: 0 litres.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "45 litres; full (1); 0 litres",
            commonErrors: [
              "For part (c): the tank is already full after part (b).",
            ],
          },
        },
      ],
    },
  ],
};
