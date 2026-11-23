import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm5-u4-lesson-4-1",
  code: "4-1",
  title: "Algebra: Expressions and Equations",
  goal: "I CAN use algebra to solve problems.",
  standards: ["Year 5 Algebra"],
  vocabulary: [
    {
      term: "Expression",
      definition: "A mathematical phrase using numbers and letters.",
    },
    {
      term: "Equation",
      definition: "A statement that two expressions are equal.",
    },
    {
      term: "Variable",
      definition: "A letter standing for an unknown number.",
    },
    {
      term: "Inverse operation",
      definition: "An operation that undoes another.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u4-expressions",
      title: "Writing and Simplifying Expressions",
      skill: "Write expressions from word problems and simplify them.",
      lesson: {
        sections: [
          {
            heading: "Expressions",
            body: "An expression like '3 more than a number' is n + 3; '4 times a number' is 4n; 'half of a number' is n/2. Expressions have no equals sign. You can evaluate them by substituting a value: 3n + 2 when n = 5 gives 17.",
          },
          {
            heading: "Simplifying",
            body: "Combine like terms: 2n + 3n = 5n; 7n - 2n = 5n. You cannot combine unlike terms: 2n + 3 stays as 2n + 3. Factorising reverses expanding: 4n + 8 = 4(n + 2).",
          },
        ],
        keyFormulas: [
          {
            name: "Like terms",
            statement: "2n + 3n = 5n; unlike terms cannot combine",
          },
        ],
        workedExample: {
          problem: "Simplify 5n + 3n - 2n",
          solution: "5n + 3n = 8n; 8n - 2n = 6n.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write an expression for '7 more than a number n'.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7n" },
              { id: "b", text: "n + 7" },
              { id: "c", text: "n - 7" },
              { id: "d", text: "7 ÷ n" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Algebra",
                statement: "More than = add.",
              },
            ],
            steps: [
              { reasoning: "7 more than n = n + 7.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** n + 7",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm5-u4-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate 4n + 1 when n = 6.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25" },
              { id: "b", text: "24" },
              { id: "c", text: "21" },
              { id: "d", text: "30" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Substitution",
                statement: "4(6)+1 = 25.",
              },
            ],
            steps: [
              {
                reasoning: "4 × 6 = 24; 24 + 1 = 25.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 25",
            commonErrors: ["Wrong substitution."],
          },
        },
        {
          id: "edpm5-u4-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify: 6n + 2n - n",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Like terms", statement: "6n+2n-n = 7n." },
            ],
            steps: [
              { reasoning: "6n + 2n = 8n.", marks: 1, markCode: "M" },
              { reasoning: "8n - n = 7n.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7n.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7n",
            commonErrors: ["Wrong combining."],
          },
        },
        {
          id: "edpm5-u4-ex-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Factorise: 12n + 18",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Factorising", statement: "6(2n + 3)." },
            ],
            steps: [
              {
                reasoning: "Find HCF of 12 and 18 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "12n ÷ 6 = 2n; 18 ÷ 6 = 3.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 6(2n + 3).", marks: 2, markCode: "A" },
            ],
            finalAnswer: "6(2n + 3)",
            commonErrors: ["Wrong factor."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-equations",
      title: "Solving Equations",
      skill: "Solve one-step and two-step equations.",
      lesson: {
        sections: [
          {
            heading: "One-step equations",
            body: "Solve x + 7 = 15 by subtracting 7: x = 8. Solve 3x = 21 by dividing by 3: x = 7. Always use the inverse operation and do the same to both sides. Check by substituting back.",
          },
          {
            heading: "Two-step equations",
            body: "Solve 2x + 5 = 17: first subtract 5 → 2x = 12; then divide by 2 → x = 6. Work in reverse order of operations. For 4x - 3 = 13: add 3 → 4x = 16; divide by 4 → x = 4.",
          },
        ],
        keyFormulas: [
          { name: "Inverse order", statement: "Undo +/− first, then ×/÷" },
        ],
        workedExample: {
          problem: "Solve 5x - 8 = 22",
          solution: "5x = 30; x = 6.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: x + 15 = 28",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13" },
              { id: "b", text: "43" },
              { id: "c", text: "12" },
              { id: "d", text: "11" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "x = 28 - 15 = 13.",
              },
            ],
            steps: [{ reasoning: "28 - 15 = 13.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 13",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm5-u4-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: 7x = 56",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "8" },
              { id: "c", text: "9" },
              { id: "d", text: "49" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "x = 56 ÷ 7 = 8.",
              },
            ],
            steps: [{ reasoning: "56 ÷ 7 = 8.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Wrong division."],
          },
        },
        {
          id: "edpm5-u4-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: 3x + 4 = 25",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Two-step", statement: "3x = 21; x = 7." },
            ],
            steps: [
              { reasoning: "3x = 25 - 4 = 21.", marks: 1, markCode: "M" },
              { reasoning: "x = 21 ÷ 3 = 7.", marks: 1, markCode: "M" },
              { reasoning: "x = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 7",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpm5-u4-eq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve: 2(x + 3) = 20",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Brackets",
                statement: "x + 3 = 10; x = 7.",
              },
            ],
            steps: [
              {
                reasoning: "Divide both sides by 2: x + 3 = 10.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = 10 - 3 = 7.", marks: 1, markCode: "M" },
              { reasoning: "Check: 2(7+3) = 20.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "x = 7",
            commonErrors: ["Wrong expansion."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-ratio",
      title: "Ratio and Proportion",
      skill: "Use ratio to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Ratio",
            body: "A ratio compares quantities: 'red to blue is 3:5' means 3 red for every 5 blue. Write as 3:5 or '3 parts red, 5 parts blue'. Total parts = 8. To find one part: divide total by total parts.",
          },
          {
            heading: "Sharing in ratio",
            body: "To share £40 in ratio 3:5: total parts = 8; one part = £5; red gets 3 × 5 = £15, blue gets 5 × 5 = £25. Always check the parts add back to the total.",
          },
        ],
        keyFormulas: [
          {
            name: "Ratio parts",
            statement: "One part = total ÷ (sum of parts)",
          },
        ],
        workedExample: {
          problem: "Share 60 sweets in ratio 2:3",
          solution: "Total parts = 5; one part = 12; shares are 24 and 36.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-ra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ratio '2 red pens to 5 blue pens'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5:2" },
              { id: "b", text: "2:5" },
              { id: "c", text: "2+5" },
              { id: "d", text: "7:2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Ratio",
                statement: "First mentioned first.",
              },
            ],
            steps: [{ reasoning: "Red:blue = 2:5.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 2:5",
            commonErrors: ["Reversed ratio."],
          },
        },
        {
          id: "edpm5-u4-ra-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Share £30 in the ratio 1:2. How much does the first person get?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£10" },
              { id: "b", text: "£15" },
              { id: "c", text: "£20" },
              { id: "d", text: "£6" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio share",
                statement: "Parts=3; one=£10; first=£10.",
              },
            ],
            steps: [
              {
                reasoning: "One part = 30 ÷ 3 = £10.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** £10",
            commonErrors: ["Wrong parts."],
          },
        },
        {
          id: "edpm5-u4-ra-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share 48 counters in the ratio 1:3. How many does the second person get?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio share",
                statement: "One part = 12; second = 3 × 12 = 36.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts = 4; one part = 48 ÷ 4 = 12.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Second share = 3 × 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 36 counters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm5-u4-ra-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe uses flour and sugar in the ratio 5:2. If you use 350 g of flour, how much sugar do you need?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ratio scaling",
                statement: "350 ÷ 5 = 70; 70 × 2 = 140 g.",
              },
            ],
            steps: [
              {
                reasoning: "5 parts = 350 g, so 1 part = 70 g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sugar = 2 parts = 140 g.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 140 g.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "140 g",
            commonErrors: ["Wrong scaling."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-problems",
      title: "Problem Solving",
      skill: "Apply multi-step reasoning across Year 5 topics.",
      lesson: {
        sections: [
          {
            heading: "Multi-step problems",
            body: "Break problems into stages: identify what's asked, plan the steps, work through them, then check the answer is sensible. Watch for hidden steps: 'total cost' may need unit price × quantity plus delivery; 'remaining' means subtract.",
          },
          {
            heading: "Reasoning",
            body: "Explain your thinking with words like 'because', 'so', 'therefore'. Estimate first — if your exact answer is wildly different, recheck. Common traps: reading 'more than' as 'less than', mixing up units, forgetting to convert.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A box holds 24 eggs. 7 cartons are bought. 15 eggs are used. How many remain?",
          solution: "7 × 24 = 168. 168 - 15 = 153 remain.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 15% of 200?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "20" },
              { id: "c", text: "30" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentages",
                statement: "10% = 20, 5% = 10, total 30.",
              },
            ],
            steps: [{ reasoning: "15% of 200 = 30.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 30",
            commonErrors: ["Wrong percentage."],
          },
        },
        {
          id: "edpm5-u4-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A train travels 60 km in 1 hour. How far in 3.5 hours?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "180 km" },
              { id: "b", text: "200 km" },
              { id: "c", text: "210 km" },
              { id: "d", text: "240 km" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed", statement: "60 × 3.5 = 210 km." },
            ],
            steps: [{ reasoning: "60 × 3.5 = 210.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 210 km",
            commonErrors: ["Wrong multiplication."],
          },
        },
        {
          id: "edpm5-u4-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle's length is twice its width. Its perimeter is 36 cm. Find the width.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter algebra",
                statement: "2(w + 2w) = 36; w = 6.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let width = w; length = 2w. Perimeter = 2(w + 2w) = 6w.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "6w = 36 → w = 6.", marks: 1, markCode: "M" },
              { reasoning: "Width = 6 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 cm",
            commonErrors: ["Wrong equation."],
          },
        },
        {
          id: "edpm5-u4-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shopkeeper buys 50 kg of apples at £1.20/kg and sells them at £1.80/kg. What is the profit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Profit",
                statement: "Revenue - cost = profit.",
              },
            ],
            steps: [
              { reasoning: "Cost: 50 × £1.20 = £60.", marks: 1, markCode: "M" },
              {
                reasoning: "Revenue: 50 × £1.80 = £90.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit: £90 - £60 = £30.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "£30",
            commonErrors: ["Wrong calculation."],
          },
        },
      ],
    },
    {
      id: "edpm5-u4-stats",
      title: "Statistics and Interpretation",
      skill: "Interpret and analyse data sets.",
      lesson: {
        sections: [
          {
            heading: "Interpreting data",
            body: "Read charts carefully: check the scale, key, and units first. Find totals, compare categories ('how many more?'), identify most/least, and spot trends over time. For line graphs, look at the steepest parts for fastest change.",
          },
          {
            heading: "Mean, range and mode",
            body: "Year 5 introduces the mean (average): add all values then divide by how many. Mode = most frequent; range = largest minus smallest. These help summarise data in one number.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Sum of values ÷ number of values" },
          { name: "Range", statement: "Largest - smallest" },
        ],
        workedExample: {
          problem: "Find the mean of 4, 8, 6, 10, 2",
          solution: "Sum = 30; count = 5; mean = 6.",
        },
      },
      questions: [
        {
          id: "edpm5-u4-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'mode' of a data set tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The average" },
              { id: "b", text: "The most frequent value" },
              { id: "c", text: "The largest value" },
              { id: "d", text: "The smallest value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mode", statement: "Most frequent." },
            ],
            steps: [
              {
                reasoning: "Mode = most common value.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Most frequent",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpm5-u4-st-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the range of: 3, 7, 5, 12, 9",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "9" },
              { id: "c", text: "12" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Range", statement: "12 - 3 = 9." },
            ],
            steps: [
              {
                reasoning: "Largest = 12, smallest = 3; range = 9.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 9",
            commonErrors: ["Wrong values."],
          },
        },
        {
          id: "edpm5-u4-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean of: 6, 10, 8, 12, 4",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mean", statement: "Sum = 40; mean = 8." },
            ],
            steps: [
              { reasoning: "Sum = 6+10+8+12+4 = 40.", marks: 1, markCode: "M" },
              { reasoning: "Count = 5 values.", marks: 1, markCode: "M" },
              { reasoning: "Mean = 40 ÷ 5 = 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
            commonErrors: ["Wrong sum or count."],
          },
        },
        {
          id: "edpm5-u4-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line graph shows temperature rising from 10°C to 16°C over 4 hours, then falling to 14°C. Describe the trend and find the range.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data interpretation",
                statement: "Range = 16 - 10 = 6.",
              },
            ],
            steps: [
              {
                reasoning: "Trend: rises to 4h then falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Highest = 16°C, lowest = 10°C.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Range = 16 - 10 = 6°C.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Rises then falls; range 6°C",
            commonErrors: ["Wrong trend or range."],
          },
        },
      ],
    },
  ],
};
