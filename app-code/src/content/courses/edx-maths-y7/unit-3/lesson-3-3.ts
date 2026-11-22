import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edm7-u3-lesson-3-3",
  code: "3-3",
  title: "Ratio and Proportion",
  goal: "I CAN write and simplify ratios, share quantities in a ratio and solve proportion problems.",
  standards: ["Edexcel KS3 Maths — Ratio"],
  vocabulary: [
    {
      term: "Ratio",
      definition: "A comparison of two or more quantities — e.g. 2 : 3 : 4.",
    },
    {
      term: "Proportion",
      definition: "When two ratios are equal — $\\frac{a}{b} = \\frac{c}{d}$.",
    },
    {
      term: "Scale factor",
      definition:
        "The number you multiply by to go from one ratio to an equivalent one.",
    },
    {
      term: "Direct proportion",
      definition:
        "As one quantity increases, the other increases by the same factor.",
    },
  ],
  concepts: [
    {
      id: "edm7-u3-ratio",
      title: "Ratio Notation and Simplifying",
      skill: "Write, simplify and compare ratios.",
      lesson: {
        sections: [
          {
            heading: "Writing ratios",
            body: "Ratios compare quantities: 'for every 2 boys there are 3 girls' → $2 : 3$. Order matters — $2 : 3 \\neq 3 : 2$ (boys:girls vs girls:boys). Can compare different units after converting: 1 m : 50 cm = 100 cm : 50 cm = $2 : 1$.\n\n**Simplifying**: divide all parts by common factors — $12 : 18 = 2 : 3$ (÷6). Like fractions, lowest terms only. **Scaling up**: multiply all parts by same number — $2 : 3 = 10 : 15$ (×5).",
          },
          {
            heading: "Comparing and combining ratios",
            body: "To compare ratios, convert to common scale or use unitary method — 'which is better value' problems. **Combining**: $2 : 3$ and $3 : 4$ need common term for middle part.\n\n**Ratio to fraction**: $2 : 3$ means $\\frac{2}{5}$ and $\\frac{3}{5}$ of the total — shares add to make the whole.",
          },
        ],
        keyFormulas: [
          {
            name: "Simplifying ratios",
            statement: "Divide all parts by common factor.",
          },
          {
            name: "Ratio → fraction",
            statement: "$a : b$ → $\\frac{a}{a+b}$ and $\\frac{b}{a+b}$.",
          },
        ],
        workedExample: {
          problem: "Simplify $15 : 25 : 10$.",
          solution:
            "HCF is 5: $15 \\div 5 : 25 \\div 5 : 10 \\div 5 = 3 : 5 : 2$.",
        },
      },
      questions: [
        {
          id: "edm7-u3-ratio-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the ratio of 12 red counters to 18 blue counters in simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Simplifying ratios",
                statement: "Divide all parts by HCF: $12 : 18 = 2 : 3$.",
              },
            ],
            steps: [
              {
                reasoning: "HCF of 12 and 18 is 6: $2 : 3$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$2 : 3$",
            commonErrors: [
              "Reversing order — $3 : 2$.",
              "Not fully simplifying.",
            ],
          },
        },
        {
          id: "edm7-u3-ratio-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share £60 in the ratio 2 : 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Sharing in ratio",
                statement: "Total parts = 5; £60 ÷ 5 = £12 per part.",
              },
            ],
            steps: [
              {
                reasoning: "$2 + 3 = 5$ parts; $60 \\div 5 = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2 \\times 12 = £24$, $3 \\times 12 = £36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Shares £24 and £36.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$£24$ and $£36$",
            commonErrors: ["Dividing £60 by 2 and 3 separately."],
          },
        },
        {
          id: "edm7-u3-ratio-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The ratio of teachers to students is 1 : 15. If there are 45 teachers, how many students?",
          response: {
            type: "numeric",
            parts: [{ label: "Students", answer: 675 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Ratio scaling",
                statement: "Scale factor: 45 ÷ 1 = 45; students = 15 × 45.",
              },
            ],
            steps: [
              {
                reasoning: "Scale factor = $45 \\div 1 = 45$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Students: $15 \\times 45$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 675$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $675 \\div 45 = 15$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$675$ students",
            commonErrors: [
              "$45 \\times 15$ confusion — got lucky? No: $15 \\times 45 = 675$ same. Error would be $45 + 15$.",
            ],
          },
        },
        {
          id: "edm7-u3-ratio-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A paint mix uses blue and white paint in ratio 3 : 7. You need 20 litres total.",
          parts: [
            {
              label: "a",
              prompt: "Find total parts and litres per part.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate litres of blue and white paint.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "If you only have 9 litres of blue, how much white can you mix?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Ratio problems",
                statement:
                  "Total parts = sum; litres per part = total ÷ parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$3 + 7 = 10$ parts; $20 \\div 10 = 2$ litres per part.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Blue: $3 \\times 2 = 6$ L.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "White: $7 \\times 2 = 14$ L.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Both calculated correctly.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Values correct.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "9 L blue → scale factor $9 \\div 3 = 3$.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "White: $7 \\times 3 = 21$ L.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 10 parts, 2 L each (b) 6 L blue, 14 L white (c) 21 L white",
            commonErrors: [
              "Dividing by wrong total.",
              "Not maintaining ratio in (c).",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u3-proportion",
      title: "Proportion and Scale",
      skill:
        "Solve proportion problems including direct proportion and scale drawings/recipes.",
      lesson: {
        sections: [
          {
            heading: "Direct proportion",
            body: "Two quantities are in **direct proportion** when their ratio is constant — $\\frac{y}{x} = k$. Examples: cost ∝ quantity, distance ∝ time at constant speed, map distance ∝ real distance.\n\n**Unitary method**: find value for 1 unit, then scale. 5 pens cost £3.75 → 1 pen £0.75 → 8 pens £6.00. **Cross-multiplication** for $\\frac{a}{b} = \\frac{c}{d}$: $ad = bc$.",
          },
          {
            heading: "Scale and recipes",
            body: "**Scale drawings**: scale $1 : 100$ means 1 cm = 100 cm = 1 m. Real = map × scale. **Recipes**: scale ingredients proportionally — doubles/triples recipe by multiplying all quantities.\n\n**Best buy problems**: compare unit prices — £3 for 400g vs £5 for 750g: £0.75/kg vs £0.67/kg — second is better value.",
          },
        ],
        keyFormulas: [
          {
            name: "Direct proportion",
            statement:
              "$\\frac{y}{x} = \\frac{y'}{x'}$ — cross-multiply to solve.",
          },
          {
            name: "Unitary method",
            statement: "Find value of 1 unit, then multiply.",
          },
        ],
        workedExample: {
          problem:
            "A map scale is 1 : 50 000. Two towns are 4 cm apart on the map. Real distance?",
          solution: "$4 \\times 50\\,000 = 200\\,000$ cm $= 2$ km.",
        },
      },
      questions: [
        {
          id: "edm7-u3-proportion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If 3 books cost £12, how much do 5 books cost?",
          response: {
            type: "numeric",
            parts: [{ label: "Cost in £", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Unitary method",
                statement: "1 book = £4; 5 books = £20.",
              },
            ],
            steps: [
              {
                reasoning: "$12 \\div 3 = 4$ per book; $4 \\times 5 = 20$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$£20$",
            commonErrors: ["$12 \\times 5$ without dividing first."],
          },
        },
        {
          id: "edm7-u3-proportion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{4}{x} = \\frac{10}{15}$ for $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Cross-multiplication",
                statement: "$4 \\times 15 = 10x$ → $60 = 10x$ → $x = 6$.",
              },
            ],
            steps: [
              {
                reasoning: "Cross-multiply: $4 \\times 15 = 10x$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$60 = 10x$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["Cross-multiplying incorrectly."],
          },
        },
        {
          id: "edm7-u3-proportion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe for 4 people uses 300 g flour. How much for 10 people?",
          response: {
            type: "numeric",
            parts: [{ label: "Flour in g", answer: 750 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Recipe scaling",
                statement: "Scale factor = 10 ÷ 4 = 2.5; 300 × 2.5 = 750 g.",
              },
            ],
            steps: [
              {
                reasoning: "Scale factor $10 \\div 4 = 2.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$300 \\times 2.5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 750$ g.", marks: 1, markCode: "M" },
              {
                reasoning: "Or unitary: 75 g per person × 10.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$750$ g",
            commonErrors: [
              "Adding instead of scaling.",
              "Scaling wrong quantity.",
            ],
          },
        },
        {
          id: "edm7-u3-proportion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A car uses 8 litres of fuel for 100 km.",
          parts: [
            { label: "a", prompt: "How far can it go on 30 litres?", marks: 3 },
            {
              label: "b",
              prompt: "How much fuel for a 250 km journey?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why fuel use is in direct proportion to distance.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Direct proportion",
                statement: "Constant rate → distance ∝ fuel.",
              },
            ],
            steps: [
              {
                reasoning: "8 L per 100 km → 0.08 L/km or 12.5 km/L.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$30 \\div 8 \\times 100 = 375$ km.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer 375 km.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$250 \\div 100 \\times 8 = 20$ L.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              { reasoning: "Answer 20 L.", marks: 1, markCode: "A", part: "b" },
              {
                reasoning: "Constant fuel rate per km.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Ratio distance:fuel stays constant.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 375 km (b) 20 L (c) constant rate",
            commonErrors: ["Inverting ratio.", "Not maintaining proportion."],
          },
        },
      ],
    },
  ],
};
