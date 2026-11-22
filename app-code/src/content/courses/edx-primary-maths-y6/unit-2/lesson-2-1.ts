import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edpm6-u2-lesson-2-1",
  code: "2-1",
  title: "Fractions: All Operations",
  goal: "I CAN add, subtract, multiply and divide fractions including mixed numbers.",
  standards: ["Year 6 Fractions"],
  vocabulary: [
    {
      term: "Lowest common denominator",
      definition: "The smallest shared denominator for adding/subtracting.",
    },
    { term: "Mixed number", definition: "Whole number + fraction: 2 3/4." },
    { term: "Improper fraction", definition: "Numerator ≥ denominator: 11/4." },
    { term: "Unit fraction", definition: "1 on top: 1/4, 1/5." },
  ],
  concepts: [
    {
      id: "edpm6-u2-fractions",
      title: "Fraction operations",
      skill: "Add, subtract, multiply and divide fractions with mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Add and subtract any fractions",
            body: "Find LCM of denominators, convert, operate, simplify. 3/4 + 2/5: LCM 20 → 15/20 + 8/20 = 23/20 = 1 3/20. For mixed numbers, convert to improper first.",
          },
          {
            heading: "Multiply and divide",
            body: "Multiply: (a/b)×(c/d) = ac/bd. Divide: keep first, flip second (reciprocal), multiply. 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8.",
          },
        ],
        keyFormulas: [
          {
            name: "Add/subtract",
            statement: "LCM denominator → operate on numerators",
          },
          {
            name: "Multiply/divide",
            statement: "× = ac/bd; ÷ = multiply by reciprocal",
          },
        ],
        workedExample: {
          problem: "Calculate 1 1/2 + 2 1/4.",
          solution: "3/2 + 9/4 = 6/4 + 9/4 = 15/4 = 3 3/4.",
        },
      },
      questions: [
        {
          id: "edpm6-u2-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 2/5 + 1/4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13/20" },
              { id: "b", text: "3/20" },
              { id: "c", text: "3/9" },
              { id: "d", text: "11/20" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common denominator",
                statement: "LCM 20: 8/20 + 5/20 = 13/20.",
              },
            ],
            steps: [
              { reasoning: "8/20 + 5/20 = 13/20.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 13/20",
            commonErrors: ["Adding denominators: 3/9."],
          },
        },
        {
          id: "edpm6-u2-fr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 7/8 − 1/2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction",
                statement: "1/2 = 4/8; 7/8 − 4/8 = 3/8.",
              },
            ],
            steps: [
              {
                reasoning: "Convert 1/2 to eighths: 4/8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "7/8 − 4/8 = 3/8.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3/8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3/8",
            commonErrors: ["Subtracting denominators."],
          },
        },
        {
          id: "edpm6-u2-fr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 2/3 ÷ 4/5.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction division",
                statement: "2/3 × 5/4 = 10/12 = 5/6.",
              },
            ],
            steps: [
              {
                reasoning: "Flip 4/5 → 5/4; 2/3 × 5/4 = 10/12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Simplify: 10/12 = 5/6.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5/6.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/6",
            commonErrors: ["Dividing numerators and denominators separately."],
          },
        },
        {
          id: "edpm6-u2-fr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Calculate 1 3/4 − 2/3.",
          parts: [
            {
              label: "a",
              prompt: "Convert the mixed number to an improper fraction.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Find a common denominator and subtract.",
              marks: 4,
            },
            { label: "c", prompt: "Convert back to a mixed number.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed number subtraction",
                statement: "7/4 − 2/3 = 21/12 − 8/12 = 13/12 = 1 1/12.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1 3/4 = (1×4+3)/4 = 7/4.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 7/4.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "LCM of 4,3 = 12; 7/4 = 21/12; 2/3 = 8/12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "21/12 − 8/12 = 13/12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 13/12.",
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
                reasoning: "13/12 = 1 1/12 (13÷12=1 r1).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 1 1/12.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7/4 − 2/3 = 13/12 = 1 1/12",
            commonErrors: [
              "Subtracting mixed number parts separately without converting.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm6-u2-decimals",
      title: "Decimals and percentages",
      skill:
        "Multiply/divide decimals by powers of 10 and solve percentage problems.",
      lesson: {
        sections: [
          {
            heading: "Decimal operations",
            body: "×10 → shift right 1; ×100 → right 2; ×1000 → right 3. ÷10 → left 1; ÷100 → left 2; ÷1000 → left 3. 7.89 × 1000 = 7890; 7.89 ÷ 10 = 0.789.",
          },
          {
            heading: "Percentage problems",
            body: "Find % of amount: convert to decimal (15% = 0.15) or use 10% method. **Percentage change**: (new−old)÷old×100. £80→£92 = +15%. **Reverse**: 20% off £100 = pay £80.",
          },
        ],
        keyFormulas: [
          {
            name: "Decimal shift",
            statement: "×10^n right n places; ÷10^n left n places",
          },
          { name: "% change", statement: "change ÷ original × 100" },
        ],
        workedExample: {
          problem: "What is 25% of £120?",
          solution: "25% = quarter → £120 ÷ 4 = £30.",
        },
      },
      questions: [
        {
          id: "edpm6-u2-dec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 7.89 ÷ 100?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "78.9" },
              { id: "b", text: "0.789" },
              { id: "c", text: "0.0789" },
              { id: "d", text: "789" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decimal ÷100",
                statement: "Shift decimal left two places: 0.0789.",
              },
            ],
            steps: [
              { reasoning: "7.89 ÷ 100 = 0.0789.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 0.0789",
            commonErrors: ["Shifting only one place → 0.789."],
          },
        },
        {
          id: "edpm6-u2-dec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 30% of £90?",
          response: {
            type: "numeric",
            parts: [
              { label: "30% of £90", answer: 27, tolerance: 0, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "10% = £9; 30% = 3×9 = £27.",
              },
            ],
            steps: [
              { reasoning: "10% of £90 = £9.", marks: 1, markCode: "M" },
              { reasoning: "30% = 3 × £9 = £27.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £27.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£27",
            commonErrors: ["Calculating 30% as 30 ÷ 90."],
          },
        },
        {
          id: "edpm6-u2-dec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A £200 bike is reduced by 15%. What is the sale price?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage discount",
                statement: "15% of £200 = £30; £200 − £30 = £170.",
              },
            ],
            steps: [
              {
                reasoning: "10% of £200 = £20; 5% = £10; 15% = £30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sale price = £200 − £30 = £170.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: £170.", marks: 1, markCode: "A" },
              { reasoning: "Unit included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£170",
            commonErrors: [
              "Answering £185 — confusing 15% off with 15% of original paid.",
            ],
          },
        },
        {
          id: "edpm6-u2-dec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shop buys a jacket for £60 and sells it for £84.",
          parts: [
            { label: "a", prompt: "What is the profit?", marks: 2 },
            { label: "b", prompt: "What is the percentage profit?", marks: 4 },
            {
              label: "c",
              prompt:
                "If the shop reduces the selling price by 10%, what is the new price?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage profit",
                statement: "Profit £24; 24/60=40%; £84×0.9=£75.60.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Profit = £84 − £60 = £24.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Answer: £24.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Percentage profit = 24 ÷ 60 × 100 = 40%.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: 40%.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Uses cost price not selling price as denominator.",
                marks: 1,
                markCode: "R",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "10% of £84 = £8.40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "£84 − £8.40 = £75.60.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: £75.60.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£24; 40%; £75.60",
            commonErrors: [
              "For part (b): dividing profit by selling price instead of cost price.",
            ],
          },
        },
      ],
    },
  ],
};
