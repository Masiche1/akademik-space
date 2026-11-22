import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edpm6-u1-lesson-1-3",
  code: "1-3",
  title: "Fractions and Decimals: Operations",
  goal: "I CAN add, subtract and multiply fractions and divide by unit fractions.",
  standards: ["Year 6 Fractions and decimals"],
  vocabulary: [
    {
      term: "Common denominator",
      definition: "A shared denominator for adding/subtracting fractions.",
    },
    {
      term: "Unit fraction division",
      definition: "Dividing by 1/n = multiplying by n.",
    },
    {
      term: "Reciprocal",
      definition: "The 'flipped' fraction: reciprocal of 3/4 is 4/3.",
    },
    {
      term: "Decimal",
      definition: "A number with a point: tenths, hundredths, thousandths.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u1-fractions",
      title: "Adding, subtracting and multiplying fractions",
      skill:
        "Add and subtract fractions with any denominators and multiply fractions.",
      lesson: {
        sections: [
          {
            heading: "Any denominators",
            body: "Find the **lowest common denominator** (LCM of denominators). 2/3 + 1/4: LCM of 3,4 = 12 → 8/12 + 3/12 = 11/12. 5/6 − 1/4: LCM = 12 → 10/12 − 3/12 = 7/12.",
          },
          {
            heading: "Multiplying fractions",
            body: "Multiply numerators and denominators: 2/3 × 3/4 = 6/12 = 1/2. Or fraction × integer: 2/5 × 6 = 12/5 = 2 2/5. Simplify answers.",
          },
        ],
        keyFormulas: [
          {
            name: "Add/subtract",
            statement: "Common denominator first, then operate on numerators",
          },
          { name: "Multiply", statement: "(a/b) × (c/d) = (a×c)/(b×d)" },
        ],
        workedExample: {
          problem: "Calculate 2/3 + 1/4.",
          solution: "LCM 12: 8/12 + 3/12 = 11/12.",
        },
      },
      questions: [
        {
          id: "edpm6-u1-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 1/3 + 1/6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/2" },
              { id: "b", text: "2/6" },
              { id: "c", text: "2/9" },
              { id: "d", text: "1/9" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common denominator",
                statement: "1/3=2/6; 2/6+1/6=3/6=1/2.",
              },
            ],
            steps: [
              { reasoning: "Convert to sixths.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 1/2",
            commonErrors: ["Adding denominators."],
          },
        },
        {
          id: "edpm6-u1-fr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 5/6 − 1/4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction",
                statement: "LCM 12: 10/12 − 3/12 = 7/12.",
              },
            ],
            steps: [
              {
                reasoning: "5/6 = 10/12; 1/4 = 3/12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "10/12 − 3/12 = 7/12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7/12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7/12",
            commonErrors: ["Subtracting denominators too."],
          },
        },
        {
          id: "edpm6-u1-fr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 2/3 × 3/4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction multiplication",
                statement: "2/3 × 3/4 = 6/12 = 1/2.",
              },
            ],
            steps: [
              {
                reasoning: "Numerators: 2 × 3 = 6; denominators: 3 × 4 = 12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "6/12 simplifies to 1/2.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1/2.", marks: 1, markCode: "A" },
              { reasoning: "Simplification shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/2",
            commonErrors: ["Cross-adding instead of multiplying."],
          },
        },
        {
          id: "edpm6-u1-fr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Calculate 3/4 ÷ 1/8.",
          parts: [
            {
              label: "a",
              prompt: "Rewrite as multiplication by the reciprocal.",
              marks: 3,
            },
            { label: "b", prompt: "Calculate the answer.", marks: 4 },
            { label: "c", prompt: "Verify by multiplying back.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction division",
                statement: "÷ by 1/8 = ×8; 3/4 × 8 = 6; check 6 × 1/8 = 3/4.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Dividing by 1/8 = multiplying by 8 (reciprocal).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "3/4 ÷ 1/8 = 3/4 × 8.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct rewrite.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "3/4 × 8 = 24/4 = 6.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: 6.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Simplification shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Check: 6 × 1/8 = 6/8 = 3/4. ✓",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Matches original dividend.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Verified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "3/4 × 8 = 6; check 6 × 1/8 = 3/4 ✓",
            commonErrors: [
              "Dividing fractions by dividing denominators — must multiply by reciprocal.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm6-u1-decimals-pct",
      title: "Decimals and percentages",
      skill:
        "Multiply and divide decimals and find percentages including percentage change.",
      lesson: {
        sections: [
          {
            heading: "Decimal multiplication/division",
            body: "×10/100/1000 shift decimal right; ÷10/100/1000 shift left. 4.56 × 100 = 456; 4.56 ÷ 10 = 0.456. For other multiplications: 3.5 × 4 = 14 (treat as 35 × 4 = 140, then divide by 10).",
          },
          {
            heading: "Percentages",
            body: "Percentages = parts per hundred. 15% of £80 = 0.15 × 80 = £12, or 10% (£8) + 5% (£4) = £12. **Percentage change**: increase = new − old; % change = change ÷ original × 100. £80 → £92: increase £12; 12/80 = 15%.",
          },
        ],
        keyFormulas: [
          {
            name: "Decimal ops",
            statement: "×10^n shifts right; ÷10^n shifts left",
          },
          { name: "% change", statement: "(new − old) ÷ old × 100" },
        ],
        workedExample: {
          problem: "What is 15% of 80?",
          solution: "10% = 8; 5% = 4; 15% = 12.",
        },
      },
      questions: [
        {
          id: "edpm6-u1-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 4.56 × 100?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "456" },
              { id: "b", text: "0.456" },
              { id: "c", text: "45.6" },
              { id: "d", text: "4560" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decimal ×100",
                statement: "Shift decimal two places right: 456.",
              },
            ],
            steps: [
              { reasoning: "4.56 × 100 = 456.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 456",
            commonErrors: ["Shifting only one place."],
          },
        },
        {
          id: "edpm6-u1-dp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 15% of 80?",
          response: {
            type: "numeric",
            parts: [{ label: "15% of 80", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "10% = 8; 5% = 4; total 12.",
              },
            ],
            steps: [
              { reasoning: "10% of 80 = 8.", marks: 1, markCode: "M" },
              { reasoning: "5% of 80 = 4.", marks: 1, markCode: "M" },
              { reasoning: "15% = 8 + 4 = 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Calculating 15% as 15 ÷ 80."],
          },
        },
        {
          id: "edpm6-u1-dp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A price increases from £60 to £75. What is the percentage increase?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "% change",
                statement: "Increase £15; 15/60 = 25%.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = 75 − 60 = £15.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "15 ÷ 60 = 0.25 = 25%.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25% increase.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: [
              "Dividing by new price £75 instead of original £60.",
            ],
          },
        },
        {
          id: "edpm6-u1-dp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shop reduces a £50 jacket by 20%, then reduces the sale price by a further 10%.",
          parts: [
            {
              label: "a",
              prompt: "What is the price after the first reduction?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What is the final price after the second reduction?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "What is the total percentage reduction from the original?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive percentages",
                statement:
                  "£50×0.8=£40; £40×0.9=£36; total reduction £14 = 28%.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "20% of £50 = £10; £50 − £10 = £40.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: £40.", marks: 1, markCode: "A" },
              {
                part: "a",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "10% of £40 = £4; £40 − £4 = £36.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: £36.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Second reduction applied to sale price.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total reduction = £50 − £36 = £14.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "14 ÷ 50 = 28%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 28% (not 30%).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£40; £36; 28%",
            commonErrors: [
              "Adding 20% + 10% = 30% — successive percentages don't add.",
            ],
          },
        },
      ],
    },
  ],
};
