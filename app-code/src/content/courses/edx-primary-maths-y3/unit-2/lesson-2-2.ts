import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edpm3-u2-lesson-2-2",
  code: "2-2",
  title: "Fractions: Unit and Non-Unit",
  goal: "I CAN find unit and non-unit fractions of shapes and amounts, and recognise equivalent fractions.",
  standards: ["Year 3 Fractions"],
  vocabulary: [
    {
      term: "Unit fraction",
      definition: "A fraction with 1 on top: 1/2, 1/3, 1/4, 1/5.",
    },
    {
      term: "Non-unit fraction",
      definition: "A fraction with more than 1 on top: 2/3, 3/4, 5/8.",
    },
    {
      term: "Equivalent",
      definition: "Fractions that mean the same amount: 1/2 = 2/4 = 3/6.",
    },
    { term: "Numerator", definition: "The top number — how many parts." },
    {
      term: "Denominator",
      definition:
        "The bottom number — how many equal parts the whole is split into.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u2-fractions",
      title: "Unit and non-unit fractions",
      skill:
        "Find unit fractions (1/n) and non-unit fractions (a/n) of shapes and amounts.",
      lesson: {
        sections: [
          {
            heading: "Unit fractions",
            body: "A **unit fraction** has 1 on top: 1/2, 1/3, 1/4, 1/5, 1/10. To find one, divide by the denominator: a third of 12 = 12 ÷ 3 = 4. Unit fractions name one equal part of a whole.",
          },
          {
            heading: "Non-unit fractions",
            body: "A **non-unit fraction** has more than 1 on top: 2/3, 3/4, 5/8. To find it, find the unit fraction then multiply by the numerator: two thirds of 12 = (12 ÷ 3) × 2 = 4 × 2 = 8. Or divide by denominator then multiply.",
          },
          {
            heading: "Equivalent fractions",
            body: "Fractions that mean the same amount are **equivalent**: 1/2 = 2/4 = 4/8. Multiply numerator and denominator by the same number: 1/3 = 2/6 = 3/9. Simplify by dividing both by the same number: 4/8 = 1/2.",
          },
        ],
        keyFormulas: [
          { name: "Unit fraction", statement: "1/n of amount = amount ÷ n" },
          { name: "Non-unit", statement: "a/n of amount = (amount ÷ n) × a" },
          { name: "Equivalent", statement: "a/b = (a×k)/(b×k) for any k" },
        ],
        workedExample: {
          problem: "Find three quarters of 20.",
          solution:
            "Quarter of 20 = 5. Three quarters = 5 × 3 = 15. Check: 5 + 5 + 5 + 5 = 20.",
        },
      },
      questions: [
        {
          id: "edpm3-u2-frac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a fifth of 20?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "15" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unit fraction",
                statement: "1/5 of 20 = 20 ÷ 5 = 4.",
              },
            ],
            steps: [{ reasoning: "20 ÷ 5 = 4.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 4",
            commonErrors: ["Dividing by 4 instead of 5."],
          },
        },
        {
          id: "edpm3-u2-frac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is two thirds of 18?",
          response: {
            type: "numeric",
            parts: [{ label: "Two thirds of 18", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-unit fraction",
                statement: "18 ÷ 3 = 6, 6 × 2 = 12.",
              },
            ],
            steps: [
              {
                reasoning: "Third of 18 = 18 ÷ 3 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two thirds = 6 × 2 = 12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Check: 12 + 6 = 18.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Answering 6 — giving one third not two thirds."],
          },
        },
        {
          id: "edpm3-u2-frac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which fraction is equivalent to 1/4?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equivalent fractions",
                statement: "1/4 = 2/8 = 3/12.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply numerator and denominator by same number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1/4 = 2/8 = 3/12 = 4/16.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any of these is correct.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 2/8 or 3/12",
            commonErrors: ["Changing only numerator or only denominator."],
          },
        },
        {
          id: "edpm3-u2-frac-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A box has 24 pencils. Three quarters of them are red.",
          parts: [
            { label: "a", prompt: "How many pencils are red?", marks: 4 },
            { label: "b", prompt: "How many are not red?", marks: 3 },
            {
              label: "c",
              prompt:
                "If half of the red pencils are sharpened, how many are sharpened red pencils?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction problems",
                statement:
                  "Three quarters of 24 = 18; not red = 6; half of 18 = 9.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Quarter of 24 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Three quarters = 6 × 3 = 18 red.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 18 red pencils.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Not red = 24 − 18 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Or one quarter of 24 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 6 pencils.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Half of 18 = 9.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 9 sharpened red pencils.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18; 6; 9",
            commonErrors: [
              "Using the wrong fraction for 'not red' — it's one quarter not three quarters.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm3-u2-fractions-real",
      title: "Fractions in real life",
      skill:
        "Use fractions to solve problems involving sharing, comparing and finding amounts.",
      lesson: {
        sections: [
          {
            heading: "Fractions of amounts",
            body: "'Half the class' = class ÷ 2. 'A quarter of the 20 apples' = 20 ÷ 4 = 5. 'Three fifths of 30' = (30 ÷ 5) × 3 = 6 × 3 = 18. Always identify the whole first, then the fraction.",
          },
          {
            heading: "Comparing fractions",
            body: "Compare fractions with the same denominator: 3/8 > 5/8? No — 3/8 < 5/8 because 3 < 8 parts. Same numerator: 1/4 > 1/8 because fewer parts = bigger each. Different denominators need equivalent fractions to compare fairly.",
          },
          {
            heading: "Fractions of a whole in context",
            body: "'Half the pizza eaten, a quarter left' — if pizza = 12 slices, half = 6 eaten, quarter = 3 left, total accounted = 9, so 3 slices = another quarter eaten? Track carefully: eaten 6, left 3, missing 3.",
          },
        ],
        keyFormulas: [
          { name: "Fraction of amount", statement: "a/b of n = (n ÷ b) × a" },
          {
            name: "Comparing",
            statement:
              "Same denominator: compare numerators; same numerator: smaller denominator wins",
          },
        ],
        workedExample: {
          problem:
            "A class of 30 children: two fifths walk to school. How many walk?",
          solution: "Fifth of 30 = 6. Two fifths = 6 × 2 = 12 children walk.",
        },
      },
      questions: [
        {
          id: "edpm3-u2-fr2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is bigger: 1/4 or 1/8?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot tell" },
              { id: "b", text: "1/4" },
              { id: "c", text: "1/8" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing unit fractions",
                statement: "Fewer parts = bigger each: 1/4 > 1/8.",
              },
            ],
            steps: [
              {
                reasoning: "A quarter is bigger than an eighth.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 1/4",
            commonErrors: ["Thinking 8 > 4 means 1/8 is bigger."],
          },
        },
        {
          id: "edpm3-u2-fr2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class of 28 children: three quarters are girls. How many girls?",
          response: {
            type: "numeric",
            parts: [{ label: "Girls", answer: 21, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-unit fraction",
                statement: "28 ÷ 4 = 7, 7 × 3 = 21.",
              },
            ],
            steps: [
              { reasoning: "Quarter of 28 = 7.", marks: 1, markCode: "M" },
              {
                reasoning: "Three quarters = 7 × 3 = 21.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 21 girls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "21",
            commonErrors: [
              "Answering 7 — giving one quarter not three quarters.",
            ],
          },
        },
        {
          id: "edpm3-u2-fr2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pizza has 12 slices. Half are eaten at lunch. A quarter of the whole pizza is eaten at dinner. How many slices are eaten in total?",
          response: {
            type: "numeric",
            parts: [{ label: "Total eaten", answer: 9, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fractions of whole",
                statement: "Half = 6, quarter = 3, total = 9.",
              },
            ],
            steps: [
              { reasoning: "Half of 12 = 6 slices.", marks: 1, markCode: "M" },
              {
                reasoning: "Quarter of 12 = 3 slices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total eaten = 6 + 3 = 9.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 9 slices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 slices",
            commonErrors: [
              "Adding fractions without finding slice counts first.",
            ],
          },
        },
        {
          id: "edpm3-u2-fr2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A tank holds 40 litres of water. It is three quarters full.",
          parts: [
            {
              label: "a",
              prompt: "How many litres of water are in the tank?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How much more water is needed to fill it completely?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If 10 litres are poured out, what fraction of the tank is now full?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction problems",
                statement:
                  "Three quarters of 40 = 30; remaining = 10; after pouring out, 20/40 = 1/2.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Quarter of 40 = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Three quarters = 10 × 3 = 30 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 30 litres.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Full = 40, current = 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Needed = 40 − 30 = 10 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 10 litres.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "30 − 10 = 20 litres left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "20 of 40 = 20/40 = 1/2.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: one half full.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Simplification shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "30 litres; 10 litres; one half",
            commonErrors: ["Forgetting to simplify 20/40 to 1/2."],
          },
        },
      ],
    },
  ],
};
