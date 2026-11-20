import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edpm6-u2-lesson-2-2",
  code: "2-2",
  title: "Ratio and Proportion",
  goal: "I CAN use ratio notation, simplify ratios, and solve proportion problems.",
  standards: ["Year 6 Ratio"],
  vocabulary: [
    {
      term: "Ratio",
      definition: "A comparison of two or more quantities, e.g. 2:3.",
    },
    {
      term: "Simplify",
      definition: "Write a ratio in its simplest form by dividing by the HCF.",
    },
    { term: "Share", definition: "Divide a total according to a ratio." },
    { term: "Proportion", definition: "Two ratios that are equal: 2:3 = 4:6." },
  ],
  concepts: [
    {
      id: "edpm6-u2-ratio",
      title: "Ratio basics",
      skill: "Write, simplify and share using ratios.",
      lesson: {
        sections: [
          {
            heading: "Writing and simplifying ratios",
            body: "Ratio compares quantities: 'red to blue pens = 6:4'. Simplify by dividing both by HCF: 6:4 = 3:2. Ratios can involve more than two: 2:3:5 for three colours.",
          },
          {
            heading: "Sharing in a ratio",
            body: "To share £100 in ratio 2:3: add parts (2+3=5), find value of one part (£100÷5=£20), then multiply: 2 parts=£40, 3 parts=£60. For 3 colours in 1:2:3 sharing 60 sweets: parts=6, each=10 → 10,20,30.",
          },
        ],
        keyFormulas: [
          { name: "Simplify", statement: "Divide by HCF of all parts" },
          { name: "Sharing", statement: "total ÷ sum of parts × each part" },
        ],
        workedExample: {
          problem: "Share £80 in the ratio 1:3.",
          solution: "Parts = 4; each = £20; shares = £20 and £60.",
        },
      },
      questions: [
        {
          id: "edpm6-u2-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio 8:12.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4:6" },
              { id: "b", text: "2:3" },
              { id: "c", text: "3:2" },
              { id: "d", text: "8:12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Simplify ratio",
                statement: "HCF 4 → 8:12 = 2:3.",
              },
            ],
            steps: [
              { reasoning: "Divide both by 4.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2:3",
            commonErrors: ["Stopping at 4:6 — not fully simplified."],
          },
        },
        {
          id: "edpm6-u2-ra-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 60 sweets between two children in the ratio 1:2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sharing",
                statement: "Parts=3; each=20; shares=20 and 40.",
              },
            ],
            steps: [
              {
                reasoning: "1+2=3 parts; 60÷3=20 per part.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "1 part=20, 2 parts=40.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 20 and 40 sweets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20 and 40",
            commonErrors: ["Dividing 60 by 2 instead of by 3 parts."],
          },
        },
        {
          id: "edpm6-u2-ra-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "£240 is shared in the ratio 1:2:3. How much does each person get?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio sharing",
                statement: "Parts=6; each=£40; shares £40, £80, £120.",
              },
            ],
            steps: [
              {
                reasoning: "1+2+3=6 parts; £240÷6=£40.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shares: 1×40=£40, 2×40=£80, 3×40=£120.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answers: £40, £80, £120.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Sum check: 40+80+120=240. ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£40, £80, £120",
            commonErrors: [
              "Dividing by 3 (number of people) instead of 6 parts.",
            ],
          },
        },
        {
          id: "edpm6-u2-ra-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fruit bowl has apples and oranges in the ratio 3:5. There are 40 oranges.",
          parts: [
            { label: "a", prompt: "How many apples are there?", marks: 3 },
            {
              label: "b",
              prompt: "How many pieces of fruit are there altogether?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What fraction of the fruit are apples? Simplify.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio problems",
                statement:
                  "3:5, oranges=5 parts=40→8 per part; apples=3×8=24; total=64; apples=24/64=3/8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "5 parts = 40 oranges → 1 part = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Apples = 3 × 8 = 24.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Answer: 24 apples.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Total = 24 + 40 = 64.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 64 pieces.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Apples fraction = 24/64.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify: HCF 8 → 3/8.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Answer: 3/8.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "24; 64; 3/8",
            commonErrors: ["Using 40 as total instead of finding parts first."],
          },
        },
      ],
    },
    {
      id: "edpm6-u2-proportion",
      title: "Proportion and scale factors",
      skill:
        "Solve proportion problems using equivalent ratios and scale factors.",
      lesson: {
        sections: [
          {
            heading: "Equivalent ratios",
            body: "Proportion means ratios are equal: 2:3 = 4:6 = 6:9. To solve: scale up or down. If 3 pens cost £1.50, 9 pens cost £4.50 (×3). Find the scale factor first.",
          },
          {
            heading: "Scale factors and maps",
            body: "Maps use scale: 1 cm = 5 km means scale factor relates map distance to real distance. A 4 cm map distance = 20 km real. Recipe scaling: double all ingredients when doubling servings.",
          },
        ],
        keyFormulas: [
          {
            name: "Proportion",
            statement: "a:b = c:d when ratios are equivalent",
          },
          {
            name: "Scale factor",
            statement: "real = map × scale; multiply all parts equally",
          },
        ],
        workedExample: {
          problem: "If 4 cakes need 300g flour, how much for 10 cakes?",
          solution: "Scale: 10÷4 = 2.5; flour = 300 × 2.5 = 750g.",
        },
      },
      questions: [
        {
          id: "edpm6-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If 2 pens cost £1, how much do 6 pens cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£2" },
              { id: "b", text: "£3" },
              { id: "c", text: "£4" },
              { id: "d", text: "£6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proportion",
                statement: "6÷2=3; £1×3=£3.",
              },
            ],
            steps: [
              { reasoning: "Scale factor 3; £3.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** £3",
            commonErrors: ["Adding £1 three times instead of scaling."],
          },
        },
        {
          id: "edpm6-u2-pr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A map scale is 1 cm = 10 km. What real distance is 7 cm on the map?",
          response: {
            type: "numeric",
            parts: [
              { label: "Distance", answer: 70, tolerance: 0, unit: "km" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scale factor",
                statement: "7 × 10 = 70 km.",
              },
            ],
            steps: [
              { reasoning: "Each cm = 10 km.", marks: 1, markCode: "M" },
              { reasoning: "7 × 10 = 70.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 70 km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70 km",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "edpm6-u2-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe for 4 people uses 200g pasta. How much for 10 people?",
          response: {
            type: "numeric",
            parts: [{ label: "Pasta", answer: 500, tolerance: 0, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Proportion",
                statement: "Scale 10÷4=2.5; 200×2.5=500g.",
              },
            ],
            steps: [
              {
                reasoning: "Scale factor = 10 ÷ 4 = 2.5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "200 × 2.5 = 500g.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 500 g.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500 g",
            commonErrors: ["Adding 200 six times instead of scaling."],
          },
        },
        {
          id: "edpm6-u2-pr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A class has a ratio of 2 boys to 3 girls. There are 15 girls.",
          parts: [
            { label: "a", prompt: "How many boys are there?", marks: 3 },
            {
              label: "b",
              prompt: "How many children are in the class?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What percentage of the class are boys?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ratio and percentage",
                statement:
                  "3 parts=15 girls→5 per part; boys=2×5=10; total=25; boys%=10/25=40%.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 parts = 15 → 1 part = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Boys = 2 × 5 = 10.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Answer: 10 boys.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Total = 10 + 15 = 25.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 25 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Boys % = 10 ÷ 25 × 100.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "10/25 = 0.4 = 40%.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 40%.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "10; 25; 40%",
            commonErrors: [
              "For part (c): using 10/15 instead of 10/25 as denominator.",
            ],
          },
        },
      ],
    },
  ],
};
