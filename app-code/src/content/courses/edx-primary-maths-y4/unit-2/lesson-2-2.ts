import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "edpm4-u2-lesson-2-2",
  code: "2-2",
  title: "Equivalent, Comparing and Ordering Fractions",
  goal: "I CAN find equivalent fractions and compare and order fractions with different denominators.",
  standards: ["Year 4 Fractions"],
  vocabulary: [
    {
      term: "Equivalent fractions",
      definition: "Different fractions with the same value.",
    },
    {
      term: "Common denominator",
      definition: "Making denominators the same to compare or add fractions.",
    },
    {
      term: "Simplify",
      definition:
        "Write a fraction in its simplest form by dividing top and bottom.",
    },
    {
      term: "Mixed number",
      definition: "A whole number plus a fraction, e.g. 1 1/2.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u2-fractions-equiv",
      title: "Equivalent fractions",
      skill:
        "Find equivalent fractions and simplify fractions to lowest terms.",
      lesson: {
        sections: [
          {
            heading: "Finding equivalents",
            body: "Multiply numerator and denominator by the same number: 1/2 = 2/4 = 3/6 = 4/8. Or divide both by the same number: 8/12 = 4/6 = 2/3. The value never changes because you're multiplying by 1 (e.g. 2/2 = 1).",
          },
          {
            heading: "Simplifying",
            body: "Divide top and bottom by the **highest common factor**. 12/18: HCF of 12 and 18 is 6 → 12÷6 / 18÷6 = 2/3. 15/25: HCF 5 → 3/5. A fraction is fully simplified when top and bottom share no factor except 1.",
          },
        ],
        keyFormulas: [
          { name: "Equivalent", statement: "a/b = (a×k)/(b×k)" },
          { name: "Simplify", statement: "Divide both by HCF" },
        ],
        workedExample: {
          problem: "Simplify 18/24.",
          solution: "HCF of 18 and 24 is 6. 18÷6=3, 24÷6=4 → 3/4.",
        },
      },
      questions: [
        {
          id: "edpm4-u2-fe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equivalent to 1/2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/5" },
              { id: "b", text: "3/6" },
              { id: "c", text: "2/3" },
              { id: "d", text: "2/5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equivalent fractions",
                statement: "1/2 = 3/6 (×3).",
              },
            ],
            steps: [
              { reasoning: "3/6 simplifies to 1/2.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 3/6",
            commonErrors: ["Thinking 2/4 = 1/2 but picking wrong option."],
          },
        },
        {
          id: "edpm4-u2-fe-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify 12/18.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simplifying",
                statement: "HCF 6 → 12/18 = 2/3.",
              },
            ],
            steps: [
              { reasoning: "HCF of 12 and 18 is 6.", marks: 1, markCode: "M" },
              { reasoning: "12÷6=2, 18÷6=3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2/3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/3",
            commonErrors: ["Dividing by 2 only → 6/9 (not fully simplified)."],
          },
        },
        {
          id: "edpm4-u2-fe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write 3/4 with a denominator of 12.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equivalent fractions",
                statement: "3/4 = 9/12 (×3).",
              },
            ],
            steps: [
              {
                reasoning: "4 × 3 = 12, so multiply numerator by 3.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "3 × 3 = 9 → 9/12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9/12.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9/12",
            commonErrors: ["Writing 3/12 — only changing denominator."],
          },
        },
        {
          id: "edpm4-u2-fe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Simplify these fractions fully: 8/12, 14/21, 20/30.",
          parts: [
            { label: "a", prompt: "Simplify 8/12.", marks: 3 },
            { label: "b", prompt: "Simplify 14/21.", marks: 3 },
            { label: "c", prompt: "Simplify 20/30.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simplifying",
                statement: "Divide by HCF each time.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "HCF 4 → 8/12 = 2/3.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 2/3.", marks: 1, markCode: "A" },
              {
                part: "a",
                reasoning: "Fully simplified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "HCF 7 → 14/21 = 2/3.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: 2/3.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "HCF 10 → 20/30 = 2/3.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 2/3.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "All three correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Method consistent.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "2/3, 2/3, 2/3",
            commonErrors: ["Stopping at 4/6 — not fully simplified."],
          },
        },
      ],
    },
    {
      id: "edpm4-u2-compare",
      title: "Comparing and ordering fractions",
      skill:
        "Compare and order fractions with different denominators using common denominators.",
      lesson: {
        sections: [
          {
            heading: "Common denominators",
            body: "To compare 2/3 and 3/4, rewrite both with the same denominator. 2/3 = 8/12, 3/4 = 9/12. Now compare numerators: 9 > 8, so 3/4 > 2/3. Find a common denominator by listing multiples.",
          },
          {
            heading: "Ordering fractions",
            body: "Convert all fractions to a common denominator, then order by numerator. Order 1/2, 2/3, 1/4: common denominator 12 → 6/12, 8/12, 3/12. Order: 1/4 < 1/2 < 2/3. Alternatively use decimals or benchmarks.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare",
            statement: "Common denominator → compare numerators",
          },
          { name: "Order", statement: "Convert all → sort by numerator" },
        ],
        workedExample: {
          problem: "Which is bigger: 5/6 or 7/8?",
          solution:
            "Common denominator 24: 5/6 = 20/24, 7/8 = 21/24. 21 > 20 → 7/8 is bigger.",
        },
      },
      questions: [
        {
          id: "edpm4-u2-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is bigger: 1/3 or 1/4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1/4" },
              { id: "b", text: "Equal" },
              { id: "c", text: "1/3" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unit fractions",
                statement: "Fewer parts = bigger: 1/3 > 1/4.",
              },
            ],
            steps: [
              {
                reasoning: "Thirds are bigger than fourths.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 1/3",
            commonErrors: ["Thinking 4 > 3 makes 1/4 bigger."],
          },
        },
        {
          id: "edpm4-u2-co-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is bigger: 2/5 or 3/8?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common denominator",
                statement: "2/5 = 16/40, 3/8 = 15/40 → 2/5 bigger.",
              },
            ],
            steps: [
              { reasoning: "Common denominator 40.", marks: 1, markCode: "M" },
              {
                reasoning: "16/40 > 15/40 → 2/5 > 3/8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2/5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/5",
            commonErrors: ["Comparing 2 and 3 directly without converting."],
          },
        },
        {
          id: "edpm4-u2-co-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order from smallest to largest: 2/3, 1/2, 3/4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering",
                statement: "Common denominator 12: 8/12, 6/12, 9/12.",
              },
            ],
            steps: [
              {
                reasoning: "Convert: 2/3=8/12, 1/2=6/12, 3/4=9/12.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order by numerator: 6, 8, 9.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 1/2, 2/3, 3/4.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/2, 2/3, 3/4",
            commonErrors: ["Ordering by denominator size instead of value."],
          },
        },
        {
          id: "edpm4-u2-co-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Order these fractions from smallest to largest: 3/4, 2/5, 5/8, 1/2.",
          parts: [
            {
              label: "a",
              prompt: "Find a common denominator for all four.",
              marks: 3,
            },
            { label: "b", prompt: "Convert each fraction.", marks: 3 },
            { label: "c", prompt: "Write the final order.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering fractions",
                statement: "LCM of 4,5,8,2 = 40.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Denominators 4,5,8,2; LCM = 40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Common denominator found.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "3/4=30/40, 2/5=16/40, 5/8=25/40, 1/2=20/40.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "All converted correctly.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Work shown.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Numerators: 16, 20, 25, 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Order: 2/5, 1/2, 5/8, 3/4.",
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
            ],
            finalAnswer: "2/5, 1/2, 5/8, 3/4",
            commonErrors: ["Using denominator 20 — 5/8 can't convert."],
          },
        },
      ],
    },
    {
      id: "edpm4-u2-add-sub",
      title: "Adding and subtracting fractions",
      skill:
        "Add and subtract fractions with the same denominator and related denominators.",
      lesson: {
        sections: [
          {
            heading: "Same denominator",
            body: "If denominators match, add or subtract numerators: 2/7 + 3/7 = 5/7; 5/8 − 2/8 = 3/8. The denominator stays the same because the size of each part doesn't change.",
          },
          {
            heading: "Different denominators",
            body: "First make denominators the same (equivalent fractions), then add/subtract. 1/2 + 1/4 = 2/4 + 1/4 = 3/4. 2/3 − 1/4 = 8/12 − 3/12 = 5/12. Simplify answers when possible.",
          },
        ],
        keyFormulas: [
          {
            name: "Same denominator",
            statement: "Add/subtract numerators only",
          },
          {
            name: "Different denominators",
            statement: "Convert to common denominator first",
          },
        ],
        workedExample: {
          problem: "Calculate 1/3 + 1/6.",
          solution: "1/3 = 2/6. 2/6 + 1/6 = 3/6 = 1/2.",
        },
      },
      questions: [
        {
          id: "edpm4-u2-as-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 2/7 + 3/7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5/14" },
              { id: "b", text: "6/7" },
              { id: "c", text: "5/7" },
              { id: "d", text: "1/7" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Same denominator",
                statement: "2 + 3 = 5, denominator stays 7.",
              },
            ],
            steps: [{ reasoning: "5/7.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 5/7",
            commonErrors: ["Adding denominators: 5/14."],
          },
        },
        {
          id: "edpm4-u2-as-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 5/8 − 2/8.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Same denominator",
                statement: "5 − 2 = 3, denominator stays 8.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract numerators: 5 − 2 = 3.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 3/8.", marks: 1, markCode: "A" },
              { reasoning: "Denominator unchanged.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3/8",
            commonErrors: ["Subtracting denominators too."],
          },
        },
        {
          id: "edpm4-u2-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 1/2 + 1/4.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Different denominators",
                statement: "1/2 = 2/4; 2/4 + 1/4 = 3/4.",
              },
            ],
            steps: [
              {
                reasoning: "Convert 1/2 to quarters: 2/4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "2/4 + 1/4 = 3/4.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3/4.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3/4",
            commonErrors: ["Adding 1+1 and 2+4 → 2/6 (wrong method)."],
          },
        },
        {
          id: "edpm4-u2-as-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A pizza is cut into 12 slices. Sam eats 5 slices, Ana eats 3 slices.",
          parts: [
            {
              label: "a",
              prompt: "What fraction did Sam eat? Simplify.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What fraction did they eat altogether? Simplify.",
              marks: 4,
            },
            { label: "c", prompt: "What fraction is left?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction problems",
                statement: "Twelfths: 5/12, 8/12 = 2/3, 4/12 = 1/3.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sam: 5/12 (already simplified).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Answer: 5/12.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Together: 5/12 + 3/12 = 8/12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify: 8/12 = 2/3.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Answer: 2/3.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Simplification shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Left: 12 − 8 = 4 slices = 4/12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify: 4/12 = 1/3.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Answer: 1/3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5/12; 2/3; 1/3",
            commonErrors: ["Forgetting to simplify 8/12 and 4/12."],
          },
        },
      ],
    },
  ],
};
