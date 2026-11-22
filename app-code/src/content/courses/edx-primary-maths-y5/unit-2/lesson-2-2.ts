import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edpm5-u2-lesson-2-2",
  code: "2-2",
  title: "Decimals and Percentages",
  goal: "I CAN add and subtract decimals, multiply by 10, 100 and 1000, and understand percentages.",
  standards: ["Year 5 Decimals and percentages"],
  vocabulary: [
    {
      term: "Decimal places",
      definition:
        "Digits after the decimal point: tenths, hundredths, thousandths.",
    },
    {
      term: "Percentage",
      definition: "Parts per hundred — % means 'out of 100'.",
    },
    {
      term: "Equivalent percentage",
      definition: "50% = 1/2 = 0.5; 25% = 1/4 = 0.25; 10% = 1/10 = 0.1.",
    },
    {
      term: "Scale factor",
      definition:
        "Multiplying by 10 shifts digits one place left; by 100 two places.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u2-decimals",
      title: "Decimal operations",
      skill: "Add, subtract decimals and multiply by powers of 10.",
      lesson: {
        sections: [
          {
            heading: "Adding and subtracting decimals",
            body: "Line up decimal points: 3.45 + 2.3 = 5.75; 8.6 − 3.45 = 5.15. Fill in zeros if needed: 3.45 + 2.30. The answer has the same number of decimal places as the most precise number.",
          },
          {
            heading: "Multiplying by 10, 100, 1000",
            body: "Multiply by 10 → digits shift one place left (decimal moves right): 4.56 × 10 = 45.6. ×100 → two places: 4.56 × 100 = 456. ×1000 → three places: 4.56 × 1000 = 4 560. Whole numbers too: 23 × 100 = 2 300.",
          },
        ],
        keyFormulas: [
          { name: "Decimal addition", statement: "Line up decimal points" },
          {
            name: "×10/100/1000",
            statement: "Shift decimal point right 1, 2 or 3 places",
          },
        ],
        workedExample: {
          problem: "Calculate 4.56 × 100.",
          solution: "Shift decimal two places right: 456.",
        },
      },
      questions: [
        {
          id: "edpm5-u2-dec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3.4 + 2.5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5.4" },
              { id: "b", text: "6.9" },
              { id: "c", text: "5.09" },
              { id: "d", text: "5.9" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decimal addition",
                statement: "3.4 + 2.5 = 5.9.",
              },
            ],
            steps: [
              {
                reasoning: "Tenths: 4+5=9; ones: 3+2=5.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 5.9",
            commonErrors: ["Adding digits without aligning decimals."],
          },
        },
        {
          id: "edpm5-u2-dec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 8.6 − 3.45?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decimal subtraction",
                statement: "8.60 − 3.45 = 5.15.",
              },
            ],
            steps: [
              { reasoning: "Write 8.6 as 8.60.", marks: 1, markCode: "M" },
              { reasoning: "8.60 − 3.45 = 5.15.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5.15",
            commonErrors: ["Answering 5.25 — borrowing error."],
          },
        },
        {
          id: "edpm5-u2-dec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is 7.89 × 1000?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 7890, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "×1000",
                statement: "Shift decimal three places right: 7.89 → 7890.",
              },
            ],
            steps: [
              {
                reasoning: "×10 → 78.9; ×100 → 789; ×1000 → 7890.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 7890.", marks: 1, markCode: "A" },
              { reasoning: "Three places shifted.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7890",
            commonErrors: ["Answering 78.9 — only one shift."],
          },
        },
        {
          id: "edpm5-u2-dec-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shop sells juice at £1.25 per bottle. You buy 100 bottles.",
          parts: [
            { label: "a", prompt: "What is the cost of 10 bottles?", marks: 3 },
            {
              label: "b",
              prompt: "What is the cost of 100 bottles?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how multiplying by 10 and 100 helps here.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Decimals and money",
                statement: "£1.25 × 10 = £12.50; ×100 = £125.00.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "£1.25 × 10 = £12.50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £12.50.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "£1.25 × 100 = £125.00.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Or 10 × £12.50 = £125.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £125.00.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "×10 shifts decimal one place; ×100 two places.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Makes large calculations quick.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "£12.50; £125.00; decimal shift makes it easy",
            commonErrors: ["Multiplying £1.25 × 100 as £1.2500 incorrectly."],
          },
        },
      ],
    },
    {
      id: "edpm5-u2-percent",
      title: "Percentages",
      skill:
        "Understand percentages as parts per hundred and find percentages of amounts.",
      lesson: {
        sections: [
          {
            heading: "What is a percentage?",
            body: "**%** means 'out of 100'. 50% = 50/100 = 1/2. 25% = 1/4. 10% = 1/10. 75% = 3/4. 100% = the whole amount. 1% = 1/100.",
          },
          {
            heading: "Finding percentages",
            body: "Find 10% first (divide by 10), then scale: 20% = 2×10%, 30% = 3×10%. 50% = half. 25% = quarter. 5% = half of 10%. Example: 20% of £60 = 10% ( £6 ) × 2 = £12.",
          },
        ],
        keyFormulas: [
          {
            name: "Equivalents",
            statement: "50%=1/2, 25%=1/4, 10%=1/10, 1%=1/100",
          },
          {
            name: "Finding %",
            statement: "10% = ÷10; then multiply for other %",
          },
        ],
        workedExample: {
          problem: "What is 30% of 80?",
          solution: "10% of 80 = 8; 30% = 3 × 8 = 24.",
        },
      },
      questions: [
        {
          id: "edpm5-u2-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 50% of 40?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "10" },
              { id: "c", text: "80" },
              { id: "d", text: "5" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "50% = half; half of 40 = 20.",
              },
            ],
            steps: [
              {
                reasoning: "50% = 1/2 → 40 ÷ 2 = 20.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 20",
            commonErrors: ["Dividing by 10 — that's 10% not 50%."],
          },
        },
        {
          id: "edpm5-u2-pc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 10% of 250?",
          response: {
            type: "numeric",
            parts: [{ label: "10% of 250", answer: 25, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "10%",
                statement: "10% = ÷10; 250 ÷ 10 = 25.",
              },
            ],
            steps: [
              { reasoning: "10% means divide by 10.", marks: 1, markCode: "M" },
              { reasoning: "250 ÷ 10 = 25.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25",
            commonErrors: ["Multiplying by 10 instead of dividing."],
          },
        },
        {
          id: "edpm5-u2-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is 30% of 80?",
          response: {
            type: "numeric",
            parts: [{ label: "30% of 80", answer: 24, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage",
                statement: "10% of 80 = 8; 30% = 3 × 8 = 24.",
              },
            ],
            steps: [
              { reasoning: "10% of 80 = 8.", marks: 1, markCode: "M" },
              {
                reasoning: "30% = 3 × 10% = 3 × 8 = 24.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 24.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24",
            commonErrors: ["Calculating 30% as 30 ÷ 80."],
          },
        },
        {
          id: "edpm5-u2-pc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A jacket costs £80. It is reduced by 25% in a sale.",
          parts: [
            { label: "a", prompt: "What is the reduction amount?", marks: 3 },
            { label: "b", prompt: "What is the sale price?", marks: 3 },
            {
              label: "c",
              prompt: "What percentage of the original price is paid?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage problems",
                statement: "25% of £80 = £20; sale price £60; pay 75%.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "25% = quarter; £80 ÷ 4 = £20.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £20 off.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "£80 − £20 = £60.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: £60.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Paid £60 of £80 = 60/80 = 3/4 = 75%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or 100% − 25% = 75%.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Answer: 75%.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "£20 off; £60; 75%",
            commonErrors: [
              "For part (c): saying 25% — that's the discount not what you pay.",
            ],
          },
        },
      ],
    },
  ],
};
