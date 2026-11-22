import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edpm3-u2-lesson-2-3",
  code: "2-3",
  title: "Fractions on a Number Line",
  goal: "I CAN place fractions on a number line and compare their position and size.",
  standards: ["Year 3 Fractions"],
  vocabulary: [
    {
      term: "Number line",
      definition:
        "A line showing numbers in order, marked with equal intervals.",
    },
    {
      term: "Interval",
      definition: "The space between two marks on a number line.",
    },
    {
      term: "Equivalent fractions",
      definition: "Fractions that occupy the same position on a number line.",
    },
    {
      term: "Compare",
      definition: "Decide which fraction is bigger by position on the line.",
    },
    {
      term: "Benchmark",
      definition: "A familiar fraction like 1/2 used as a reference point.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u2-number-line",
      title: "Fractions on a number line",
      skill: "Place unit and non-unit fractions on a number line from 0 to 1.",
      lesson: {
        sections: [
          {
            heading: "Splitting the line",
            body: "To place fractions on a number line from 0 to 1, split it into equal intervals. For halves: mark 0, 1/2, 1. For quarters: 0, 1/4, 2/4, 3/4, 1. For eighths: 8 equal intervals. Each interval is one unit fraction.",
          },
          {
            heading: "Non-unit fractions",
            body: "Non-unit fractions like 3/4 sit further along the line. 3/4 is 3 intervals of 1/4 from 0. 5/8 is 5 intervals of 1/8. Count the intervals carefully — the denominator tells you how many equal parts the whole (0 to 1) is split into.",
          },
          {
            heading: "Comparing on the line",
            body: "Fractions further right are bigger. 3/4 is to the right of 1/2, so 3/4 > 1/2. 2/3 is to the right of 1/4 but left of 1/2? Check: 2/3 ≈ 0.67, 1/2 = 0.5, so 2/3 > 1/2. Use benchmarks: 1/2 is halfway, fractions left of it are less than half.",
          },
        ],
        keyFormulas: [
          {
            name: "Intervals",
            statement: "denominator = number of equal intervals from 0 to 1",
          },
          {
            name: "Position",
            statement: "numerator = how many intervals from 0",
          },
          {
            name: "Comparing",
            statement: "Right = bigger; 1/2 = halfway benchmark",
          },
        ],
        workedExample: {
          problem: "Where does 3/4 sit on a number line from 0 to 1?",
          solution:
            "Split into 4 equal intervals: 0, 1/4, 2/4, 3/4, 1. 3/4 is the third mark, just before 1.",
        },
      },
      questions: [
        {
          id: "edpm3-u2-nl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A number line from 0 to 1 is split into 4 equal parts. What fraction is at the second mark?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3/4" },
              { id: "b", text: "1/2" },
              { id: "c", text: "1/4" },
              { id: "d", text: "2/4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intervals",
                statement: "4 parts: marks are 1/4, 2/4, 3/4.",
              },
            ],
            steps: [
              {
                reasoning: "Second mark = 2/4 (= 1/2).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 2/4",
            commonErrors: ["Counting from 1 instead of 0."],
          },
        },
        {
          id: "edpm3-u2-nl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which fraction is bigger: 2/3 or 1/2?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "2/3 ≈ 0.67 > 0.5.",
              },
            ],
            steps: [
              {
                reasoning: "2/3 is two thirds — more than half.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "1/2 is exactly half.", marks: 1, markCode: "M" },
              { reasoning: "2/3 > 1/2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2/3 is bigger",
            commonErrors: ["Thinking 1/2 > 2/3 because 2 > 1."],
          },
        },
        {
          id: "edpm3-u2-nl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "On a number line from 0 to 1 split into 8 parts, where does 5/8 sit?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intervals",
                statement: "8 parts; 5/8 is the 5th mark.",
              },
            ],
            steps: [
              {
                reasoning: "Split into 8 equal intervals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Count 5 intervals from 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "5/8 sits between 1/2 and 1, closer to 1/2? Actually 5/8 = 0.625, between 0.5 and 0.75.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Position described clearly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5th mark — between 1/2 and 3/4, closer to 1/2",
            commonErrors: ["Counting intervals wrong."],
          },
        },
        {
          id: "edpm3-u2-nl-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A number line from 0 to 1 is split into 6 equal parts.",
          parts: [
            { label: "a", prompt: "Label the marks with fractions.", marks: 4 },
            {
              label: "b",
              prompt:
                "Which mark shows 4/6? Is it equivalent to a simpler fraction?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Which is bigger: 5/6 or 4/6? Explain using the line.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Number line fractions",
                statement:
                  "Denominator = intervals; numerator = position; right = bigger.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Marks: 1/6, 2/6, 3/6, 4/6, 5/6.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "All five labelled correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "0 and 1 also shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Format clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "4/6 is the 4th mark.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "4/6 = 2/3 (divide by 2).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Equivalent fraction found.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "5/6 is further right than 4/6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "So 5/6 > 4/6.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Explanation uses position.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "1/6..5/6; 4/6 = 2/3; 5/6 > 4/6 (further right)",
            commonErrors: ["Labelling marks starting from 1 instead of 0."],
          },
        },
      ],
    },
    {
      id: "edpm3-u2-nl-compare",
      title: "Comparing and ordering fractions",
      skill:
        "Compare and order fractions using benchmarks and equivalent fractions.",
      lesson: {
        sections: [
          {
            heading: "Benchmark fractions",
            body: "Use 1/2 as a benchmark. Is the fraction more or less than half? 3/4 > 1/2, 1/3 < 1/2, 2/5 < 1/2? Check: 2/5 = 0.4 < 0.5. Fractions greater than 1/2 have numerator more than half the denominator.",
          },
          {
            heading: "Equivalent fractions for comparing",
            body: "To compare fractions with different denominators, find equivalents. Compare 2/3 and 3/4: 2/3 = 8/12, 3/4 = 9/12. 9/12 > 8/12, so 3/4 > 2/3. Or use a number line to see positions.",
          },
          {
            heading: "Ordering fractions",
            body: "To order fractions, convert to a common denominator or use benchmarks. Order 1/2, 1/4, 3/4, 1/8: smallest to largest = 1/8, 1/4, 1/2, 3/4. Think of the number line positions.",
          },
        ],
        keyFormulas: [
          { name: "Benchmark", statement: "Compare to 1/2 first" },
          {
            name: "Common denominator",
            statement: "Convert to same denominator to compare",
          },
        ],
        workedExample: {
          problem: "Order these from smallest to largest: 1/3, 1/2, 2/3, 1/4.",
          solution:
            "Use benchmarks: 1/4 < 1/3 < 1/2 < 2/3. Order: 1/4, 1/3, 1/2, 2/3.",
        },
      },
      questions: [
        {
          id: "edpm3-u2-nc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is 3/4 more or less than 1/2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More" },
              { id: "b", text: "Cannot tell" },
              { id: "c", text: "Equal" },
              { id: "d", text: "Less" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benchmark",
                statement: "3/4 > 1/2 because 3 > 2 (half of 4).",
              },
            ],
            steps: [
              {
                reasoning: "Half of 4 is 2; 3 > 2, so 3/4 > 1/2.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** More",
            commonErrors: ["Comparing 4 and 2 instead of 3 and 2."],
          },
        },
        {
          id: "edpm3-u2-nc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is bigger: 2/5 or 1/2?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Benchmark",
                statement: "2/5 = 0.4 < 0.5.",
              },
            ],
            steps: [
              { reasoning: "1/2 = 0.5.", marks: 1, markCode: "M" },
              {
                reasoning: "2/5 = 0.4 (or 2/5 = 4/10 < 5/10).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "2/5 < 1/2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/2 is bigger",
            commonErrors: ["Thinking 2/5 > 1/2 because 2 > 1."],
          },
        },
        {
          id: "edpm3-u2-nc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare 2/3 and 3/4 using equivalent fractions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common denominator",
                statement: "2/3 = 8/12, 3/4 = 9/12.",
              },
            ],
            steps: [
              { reasoning: "2/3 = 8/12 (×4).", marks: 1, markCode: "M" },
              { reasoning: "3/4 = 9/12 (×3).", marks: 1, markCode: "M" },
              {
                reasoning: "9/12 > 8/12, so 3/4 > 2/3.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Reasoning clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3/4 > 2/3",
            commonErrors: ["Comparing 2 and 3 without converting."],
          },
        },
        {
          id: "edpm3-u2-nc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Order these fractions from smallest to largest: 1/2, 3/4, 1/4, 2/3, 5/8.",
          parts: [
            {
              label: "a",
              prompt: "Identify which are less than 1/2 and which are more.",
              marks: 4,
            },
            { label: "b", prompt: "Order all five fractions.", marks: 4 },
            { label: "c", prompt: "Explain your method.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering fractions",
                statement: "Use benchmarks and equivalents.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Less than 1/2: 1/4. More than 1/2: 3/4, 2/3, 5/8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "1/2 is exactly half.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correctly split groups.",
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
                reasoning: "Order: 1/4, 1/2, 5/8, 2/3, 3/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "5/8 = 0.625, 2/3 ≈ 0.67, 3/4 = 0.75.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All five placed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Used benchmarks (1/2) and equivalents/decimals.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Method explained clearly.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Less: 1/4; more: 3/4, 2/3, 5/8; order: 1/4, 1/2, 5/8, 2/3, 3/4",
            commonErrors: ["Ordering by denominator instead of value."],
          },
        },
      ],
    },
  ],
};
