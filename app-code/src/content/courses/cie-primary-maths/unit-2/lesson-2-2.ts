import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cipm-u2-lesson-2-2",
  code: "2-2",
  title: "Stage 5 — Fractions, Decimals and Percentages",
  goal: "I CAN convert between fractions, decimals and percentages and find fractions of amounts.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 5: number",
  "Cambridge Primary Mathematics 0096 framework substrands: 5Nf, 5Ss"],
  stage: 5,
  vocabulary: [
    { term: "Percentage", definition: "Parts per hundred, written with %." },
    { term: "Equivalent fraction", definition: "A fraction equal to another, e.g. $\\frac{1}{2} = \\frac{2}{4}$." },
    { term: "Numerator", definition: "Top number of a fraction." },
    { term: "Denominator", definition: "Bottom number of a fraction." },
    { term: "Mean", definition: "The average of a set of numbers." },
  ],
  concepts: [
    {
      id: "cipm-u2-s5-convert",
      title: "Fractions, decimals and percentages",
      skill: "Convert between fractions, decimals and percentages at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Converting",
            body: "$\\frac{1}{2} = 0.5 = 50\\%$; $\\frac{1}{4} = 0.25 = 25\\%$; $\\frac{3}{4} = 0.75 = 75\\%$. To convert a fraction to a percentage, find an equivalent fraction with denominator 100.",
          },
          {
            heading: "Percentages of amounts",
            body: "Find $10\\%$ first by dividing by 10, then scale. $20\\%$ of 50: $10\\%$ is 5, so $20\\%$ is $5 \\times 2 = 10$.",
          },
        ],
        keyFormulas: [
          { name: "Fraction to percentage", statement: "$\\frac{a}{b} \\times 100\\%$" },
          { name: "Percentage of amount", statement: "$p\\%$ of $N = \\frac{p}{100} \\times N$" },
        ],
        workedExample: {
          problem: "Write $\\frac{3}{5}$ as a percentage.",
          solution: "$\\frac{3}{5} = \\frac{60}{100} = 60\\%$.",
        },
      },
      questions: [
        {
          id: "cipm-u2-s5-conv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $50\\%$ as a fraction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{4}$" }, { id: "b", text: "$\\frac{1}{5}$" }, { id: "c", text: "$\\frac{1}{2}$" }, { id: "d", text: "$\\frac{1}{10}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Percentage", statement: "Percent means per hundred." }],
            steps: [{ reasoning: "$50\\% = \\frac{50}{100} = \\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $0.75$ as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 75, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to percentage", statement: "Multiply by 100." }],
            steps: [
              { reasoning: "$0.75 \\times 100 = 75$.", marks: 1, markCode: "M" },
              { reasoning: "$0.75 = 75\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75\\%$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $25\\%$ of 80.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage of amount", statement: "$25\\% = \\frac{1}{4}$, divide by 4." }],
            steps: [
              { reasoning: "$25\\%$ is a quarter, so divide by 4.", marks: 1, markCode: "M" },
              { reasoning: "$80 \\div 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "$25\\%$ of 80 is 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipm-u2-s5-conv-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class of 30 students: 60% walk to school. How many students walk?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage word problem", statement: "Find the percentage of the total." }],
            steps: [
              { reasoning: "Find $10\\%$ of 30: $30 \\div 10 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$60\\% = 6 \\times 10\\%$, so $6 \\times 3 = 18$.", marks: 1, markCode: "M" },
              { reasoning: "18 students walk to school.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18 students",
          },
        },
      ],
    },
    {
      id: "cipm-u2-s5-statistics",
      title: "Mean and simple statistics",
      skill: "Find the mean and read simple data at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "What is the mean?",
            body: "The mean is the average. Add all the values, then divide by how many values there are. Mean of 4, 7, 9 is $(4 + 7 + 9) \\div 3 = 20 \\div 3$.",
          },
          {
            heading: "Reading data",
            body: "Tables and bar charts show data. Always check the scale on the axis and read values carefully.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\text{mean} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
        ],
        workedExample: {
          problem: "Find the mean of 6, 8, 10, 12.",
          solution: "Sum $= 36$; $36 \\div 4 = 9$. Mean is 9.",
        },
      },
      questions: [
        {
          id: "cipm-u2-s5-stat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of 2, 4, 6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" }, { id: "b", text: "4" }, { id: "c", text: "5" }, { id: "d", text: "6" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "Sum divided by count." }],
            steps: [{ reasoning: "Sum $= 12$; $12 \\div 3 = 4$.", marks: 1, markCode: "A" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u2-s5-stat-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the mean of 5, 10, 15.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add then divide by count." }],
            steps: [
              { reasoning: "Sum $= 30$; divide by 3.", marks: 1, markCode: "M" },
              { reasoning: "$30 \\div 3 = 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u2-s5-stat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A footballer scores 3, 5, 2, 8, 7 goals in five games. Find the mean number of goals per game.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add all values, divide by number of games." }],
            steps: [
              { reasoning: "Sum $= 3 + 5 + 2 + 8 + 7 = 25$.", marks: 1, markCode: "M" },
              { reasoning: "$25 \\div 5 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 5 goals per game.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u2-s5-stat-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "The mean of three numbers is 8. Two of the numbers are 5 and 9. Find the third number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean inverse", statement: "Total = mean × count." }],
            steps: [
              { reasoning: "Total $= 8 \\times 3 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Known sum $= 5 + 9 = 14$; third number $= 24 - 14$.", marks: 1, markCode: "M" },
              { reasoning: "Third number is 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-s5-fdp-notes",
      title: "Stage 5 fractions, decimals, percentages — revision notes",
      summary: "Converting between forms, percentages of amounts, the mean.",
      sections: [
        { heading: "Converting", body: "$\\frac{1}{2} = 0.5 = 50\\%$. To find a percentage of an amount, find $10\\%$ then scale." },
        { heading: "Mean", body: "Mean = total ÷ number of values. Check the mean is sensible compared to the data." },
      ],
    },
  ],
};
