import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edpm6-u3-lesson-3-2",
  code: "3-2",
  title: "Statistics: Mean, Median, Mode and Range",
  goal: "I CAN find and interpret mean, median, mode and range of data sets.",
  standards: ["Year 6 Statistics"],
  vocabulary: [
    {
      term: "Mean",
      definition: "The average — sum of all values divided by count.",
    },
    { term: "Median", definition: "The middle value when data is ordered." },
    { term: "Mode", definition: "The most frequent value." },
    {
      term: "Range",
      definition: "The difference between largest and smallest values.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u3-statistics",
      title: "Averages and spread",
      skill: "Calculate mean, median, mode and range from data.",
      lesson: {
        sections: [
          {
            heading: "Mean, median, mode",
            body: "**Mean**: add all values, divide by count. 4,7,9 → (4+7+9)/3 = 20/3 ≈ 6.7. **Median**: order values, find middle (for even count, average two middle). **Mode**: most frequent value — can be more than one or none.",
          },
          {
            heading: "Range",
            body: "Range = largest − smallest. 4,7,9 → 9 − 4 = 5. Range shows spread: small range = similar values; large range = varied. Outliers affect mean and range but not median/mode much.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "sum ÷ count" },
          { name: "Median", statement: "middle value of ordered data" },
          { name: "Range", statement: "max − min" },
        ],
        workedExample: {
          problem: "Find mean, median, mode and range of 3, 7, 7, 9, 12.",
          solution: "Mean = 38/5 = 7.6; median = 7; mode = 7; range = 9.",
        },
      },
      questions: [
        {
          id: "edpm6-u3-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of 4, 6, 8?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "9" },
              { id: "c", text: "18" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mean",
                statement: "(4+6+8)/3 = 18/3 = 6.",
              },
            ],
            steps: [{ reasoning: "Sum 18 ÷ 3 = 6.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 6",
            commonErrors: ["Answering 18 — forgetting to divide."],
          },
        },
        {
          id: "edpm6-u3-st-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the range of 5, 12, 8, 20, 3?",
          response: {
            type: "numeric",
            parts: [{ label: "Range", answer: 17, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Range", statement: "20 − 3 = 17." },
            ],
            steps: [
              {
                reasoning: "Largest = 20, smallest = 3.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "20 − 3 = 17.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
            commonErrors: ["Adding all values instead of subtracting."],
          },
        },
        {
          id: "edpm6-u3-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the median of 4, 9, 2, 7, 5?",
          response: {
            type: "numeric",
            parts: [{ label: "Median", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Median",
                statement: "Ordered: 2,4,5,7,9; middle = 5.",
              },
            ],
            steps: [
              { reasoning: "Order: 2, 4, 5, 7, 9.", marks: 1, markCode: "M" },
              { reasoning: "Middle (3rd of 5) = 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Not ordering first — median needs sorted data."],
          },
        },
        {
          id: "edpm6-u3-st-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Test scores: 72, 85, 78, 91, 64.",
          parts: [
            { label: "a", prompt: "Find the mean score.", marks: 3 },
            { label: "b", prompt: "Find the median score.", marks: 3 },
            {
              label: "c",
              prompt: "Explain why mean and median differ here.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistics",
                statement:
                  "Mean=78; median=78? Ordered: 64,72,78,85,91 → median 78. Same! Recheck: sum=390, mean=78. Median=78. They coincide.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sum = 72+85+78+91+64 = 390.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Mean = 390 ÷ 5 = 78.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Answer: 78.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Ordered: 64, 72, 78, 85, 91.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Median = 78 (middle value).",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Answer: 78.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning:
                  "Mean uses all values; median uses position — here they happen to match.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Mean can be affected by outliers; median less so.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Explanation shows understanding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Clear reasoning.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "78; 78; they coincide here but differ in general",
            commonErrors: [
              "For part (b): not ordering data before finding median.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm6-u3-interpreting",
      title: "Interpreting data",
      skill: "Choose appropriate averages and interpret what data shows.",
      lesson: {
        sections: [
          {
            heading: "Choosing an average",
            body: "**Mean** best for most data; **median** better with outliers (e.g. house prices); **mode** for most common choice (e.g. favourite colour); **range** shows consistency. Match the measure to the question.",
          },
          {
            heading: "Comparing data sets",
            body: "Compare means for typical value, ranges for spread. 'Team A mean 45, range 10; Team B mean 45, range 30' — same average but B is less consistent. Look at both centre and spread.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "Typical value, affected by outliers" },
          { name: "Median", statement: "Robust to outliers" },
          { name: "Mode", statement: "Most frequent — good for categories" },
        ],
        workedExample: {
          problem:
            "Salaries: £20k, £22k, £25k, £28k, £200k. Which average best represents typical salary?",
          solution: "Median — the £200k outlier inflates the mean.",
        },
      },
      questions: [
        {
          id: "edpm6-u3-int-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which average is most affected by an extreme outlier?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Range" },
              { id: "b", text: "Median" },
              { id: "c", text: "Mean" },
              { id: "d", text: "Mode" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Outliers",
                statement: "Mean uses all values → most affected.",
              },
            ],
            steps: [
              {
                reasoning: "Mean is pulled by outliers.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Mean",
            commonErrors: [
              "Choosing range — range measures spread not typical value.",
            ],
          },
        },
        {
          id: "edpm6-u3-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Data: 5, 5, 5, 5, 20. What is the mode?",
          response: {
            type: "numeric",
            parts: [{ label: "Mode", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mode",
                statement: "5 appears most often (4 times).",
              },
            ],
            steps: [
              {
                reasoning: "Count frequencies: 5 appears 4 times, 20 once.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mode = 5.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 20 — confusing mode with range/max."],
          },
        },
        {
          id: "edpm6-u3-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two classes have the same mean score of 70. Class A has range 10, Class B has range 40. Which is more consistent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consistency",
                statement: "Smaller range = more consistent; Class A.",
              },
            ],
            steps: [
              { reasoning: "Range measures spread.", marks: 1, markCode: "M" },
              {
                reasoning: "A: range 10 < B: range 40.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: Class A is more consistent.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Class A",
            commonErrors: [
              "Picking Class B because larger range seems 'better'.",
            ],
          },
        },
        {
          id: "edpm6-u3-int-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "House prices on a street: £150k, £180k, £200k, £220k, £900k.",
          parts: [
            { label: "a", prompt: "Find the mean price.", marks: 3 },
            { label: "b", prompt: "Find the median price.", marks: 3 },
            {
              label: "c",
              prompt:
                "Which better represents the 'typical' house price and why?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choosing averages",
                statement:
                  "Mean=330k (inflated by outlier); median=200k; median is typical.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sum = 150+180+200+220+900 = 1 650k.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Mean = 1650 ÷ 5 = £330k.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Answer: £330k.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Ordered already; median = £200k.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £200k.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Median better — £900k outlier inflates mean.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "£330k doesn't represent most houses.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "£200k is typical price.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Justification clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "£330k; £200k; median (outlier effect)",
            commonErrors: [
              "For part (c): saying mean because 'it's the average' — outliers distort it.",
            ],
          },
        },
      ],
    },
  ],
};
