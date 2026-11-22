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
            { id: "a", text: "$\\frac{1}{4}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{1}{10}$" },
            { id: "d", text: "$\\frac{1}{5}$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cipm-u2-s5-conv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $25\\%$ as a fraction?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{2}$" },
            { id: "b", text: "$\\frac{1}{10}$" },
            { id: "c", text: "$\\frac{1}{4}$" },
            { id: "d", text: "$\\frac{2}{5}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Percentage", statement: "Percent means per hundred." }],
            steps: [{ reasoning: "$25\\% = \\frac{25}{100} = \\frac{1}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{4}$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $0.4$ as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to percentage", statement: "Multiply by 100." }],
            steps: [
              { reasoning: "$0.4 \\times 100 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "$0.4 = 40\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction is equal to $75\\%$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{3}{5}$" },
            { id: "b", text: "$\\frac{7}{5}$" },
            { id: "c", text: "$\\frac{1}{4}$" },
            { id: "d", text: "$\\frac{3}{4}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage to fraction", statement: "$75\\% = \\frac{75}{100} = \\frac{3}{4}$." }],
            steps: [{ reasoning: "$75\\% = \\frac{3}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{3}{4}$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{2}{5}$ as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to percentage", statement: "Find equivalent fraction over 100." }],
            steps: [
              { reasoning: "$\\frac{2}{5} = \\frac{40}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{2}{5} = 40\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $10\\%$ of 60?",
          response: { type: "mcq", choices: [
            { id: "a", text: "600" },
            { id: "b", text: "6" },
            { id: "c", text: "16" },
            { id: "d", text: "10" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage of amount", statement: "$10\\%$ = divide by 10." }],
            steps: [{ reasoning: "$60 \\div 10 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u2-s5-conv-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find $20\\%$ of 45.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage of amount", statement: "$20\\% = \\frac{1}{5}$, divide by 5." }],
            steps: [
              { reasoning: "$20\\%$ is one fifth, so divide by 5.", marks: 1, markCode: "M" },
              { reasoning: "$45 \\div 5 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "$20\\%$ of 45 is 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cipm-u2-s5-conv-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the largest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.4$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{1}{3}$" },
            { id: "d", text: "$30\\%$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing forms", statement: "Convert all to the same form." }],
            steps: [{ reasoning: "$\\frac{1}{2} = 0.5 = 50\\%$, bigger than 0.4, 30% and $\\frac{1}{3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop has 80 cakes. 25% are chocolate. How many cakes are chocolate? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage of amount", statement: "$25\\% = \\frac{1}{4}$." }],
            steps: [
              { reasoning: "$25\\%$ is a quarter, so divide by 4.", marks: 1, markCode: "M" },
              { reasoning: "$80 \\div 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "20 cakes are chocolate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 cakes",
          },
        },
        {
          id: "cipm-u2-s5-conv-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Write $\\frac{3}{4}$ as a percentage. (b) Write $0.6$ as a fraction in its simplest form. (c) Find $50\\%$ of 70. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Converting forms", statement: "Fraction/decimal/percentage equivalents." }],
            steps: [
              { reasoning: "(a) $\\frac{3}{4} = \\frac{75}{100} = 75\\%$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $0.6 = \\frac{6}{10} = \\frac{3}{5}$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $50\\% = \\frac{1}{2}$; $70 \\div 2 = 35$.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $75\\%$ (b) $\\frac{3}{5}$ (c) 35",
          },
        },
        {
          id: "cipm-u2-s5-conv-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $5\\%$ as a decimal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.05$" },
            { id: "b", text: "$0.5$" },
            { id: "c", text: "$0.005$" },
            { id: "d", text: "$5.0$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage to decimal", statement: "Divide by 100." }],
            steps: [{ reasoning: "$5\\% = \\frac{5}{100} = 0.05$.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.05$",
          },
        },
        {
          id: "cipm-u2-s5-conv-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $15\\%$ of 200.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage of amount", statement: "$10\\% = 20$, $5\\% = 10$, add." }],
            steps: [
              { reasoning: "$10\\%$ of 200 = 20; $5\\%$ = 10; $15\\% = 20 + 10 = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cipm-u2-s5-conv-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Convert $\\frac{2}{5}$ to a percentage. (b) Convert $0.35$ to a fraction in its simplest form. (c) Find $30\\%$ of 150. (d) A jacket costs $\\$80$. It is reduced by $25\\%$ — what is the new price? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Converting and percentages of amounts", statement: "Convert forms; scale percentages." }],
            steps: [
              { reasoning: "(a) $\\frac{2}{5} = \\frac{40}{100} = 40\\%$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $0.35 = \\frac{35}{100} = \\frac{7}{20}$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $10\\%$ of 150 = 15; $30\\% = 3 \\times 15 = 45$.", marks: 1, markCode: "M" },
              { reasoning: "(d) $25\\%$ of 80 = 20; $80 - 20 = \\$60$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40\\%$ (b) $\\frac{7}{20}$ (c) 45 (d) $\\$60$",
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
            { id: "a", text: "6" },
            { id: "b", text: "5" },
            { id: "c", text: "4" },
            { id: "d", text: "3" },
          ], correctChoiceId: "c" },
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
        {
          id: "cipm-u2-s5-stat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of 10, 20, 30?",
          response: { type: "mcq", choices: [
            { id: "a", text: "20" },
            { id: "b", text: "15" },
            { id: "c", text: "60" },
            { id: "d", text: "10" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum divided by count." }],
            steps: [{ reasoning: "Sum $= 60$; $60 \\div 3 = 20$.", marks: 1, markCode: "A" }],
            finalAnswer: "20",
          },
        },
        {
          id: "cipm-u2-s5-stat-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the mean of 4, 8, 12, 16.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add all values, divide by count." }],
            steps: [
              { reasoning: "Sum $= 4 + 8 + 12 + 16 = 40$; $40 \\div 4 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u2-s5-stat-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find the mean of a set of numbers you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "subtract the smallest from the largest" },
            { id: "b", text: "pick the middle number always" },
            { id: "c", text: "add all the numbers and divide by how many there are" },
            { id: "d", text: "multiply all the numbers" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "Sum ÷ count." }],
            steps: [{ reasoning: "Mean = total of values ÷ number of values.", marks: 1, markCode: "A" }],
            finalAnswer: "add all and divide by how many",
          },
        },
        {
          id: "cipm-u2-s5-stat-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of 7, 9, 14.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add then divide by count." }],
            steps: [
              { reasoning: "Sum $= 7 + 9 + 14 = 30$; $30 \\div 3 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u2-s5-stat-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The mean of 6, 8 and one other number is 9. What is the other number?",
          response: { type: "mcq", choices: [
            { id: "a", text: "17" },
            { id: "b", text: "13" },
            { id: "c", text: "23" },
            { id: "d", text: "11" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean inverse", statement: "Total = mean × count." }],
            steps: [{ reasoning: "Total $= 9 \\times 3 = 27$; $27 - 6 - 8 = 13$.", marks: 1, markCode: "A" }],
            finalAnswer: "13",
          },
        },
        {
          id: "cipm-u2-s5-stat-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A runner records times of 20, 24, 22 and 26 seconds for four laps. Find the mean time.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add all values, divide by count." }],
            steps: [
              { reasoning: "Sum $= 20 + 24 + 22 + 26 = 92$.", marks: 1, markCode: "M" },
              { reasoning: "$92 \\div 4 = 23$.", marks: 1, markCode: "M" },
              { reasoning: "Mean time is 23 seconds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "23 seconds",
          },
        },
        {
          id: "cipm-u2-s5-stat-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about the mean is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The mean can be larger than every value" },
            { id: "b", text: "The mean lies between the smallest and largest values" },
            { id: "c", text: "The mean is the most common value" },
            { id: "d", text: "The mean is always one of the data values" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mean", statement: "Average sits within the range of data." }],
            steps: [{ reasoning: "The mean is an average and always lies between the smallest and largest values.", marks: 1, markCode: "A" }],
            finalAnswer: "The mean lies between the smallest and largest values",
          },
        },
        {
          id: "cipm-u2-s5-stat-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Four friends' scores are 12, 15, 9 and 12. (a) Find the mean. (b) Is the mean bigger or smaller than most scores? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add then divide; compare with data." }],
            steps: [
              { reasoning: "(a) Sum $= 12 + 15 + 9 + 12 = 48$; $48 \\div 4 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "(b) The mean (12) is smaller than the top score (15) and bigger than the lowest (9); it is a typical value.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 (b) between the lowest and highest scores",
          },
        },
        {
          id: "cipm-u2-s5-stat-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Find the mean of 3, 7, 8, 10, 12. (b) The mean of five numbers is 10. Four of them are 8, 12, 9 and 11. Find the fifth number. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean and inverse", statement: "Mean = sum ÷ count; total = mean × count." }],
            steps: [
              { reasoning: "(a) Sum $= 3 + 7 + 8 + 10 + 12 = 40$; $40 \\div 5 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Total $= 10 \\times 5 = 50$; known sum $= 8 + 12 + 9 + 11 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Fifth number $= 50 - 40 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 8 (b) 10",
          },
        },
        {
          id: "cipm-u2-s5-stat-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bar chart shows sales: Mon 4, Tue 7, Wed 5, Thu 4. What is the total number of sales?",
          response: { type: "mcq", choices: [
            { id: "a", text: "15" },
            { id: "b", text: "18" },
            { id: "c", text: "16" },
            { id: "d", text: "20" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading data", statement: "Add the values." }],
            steps: [{ reasoning: "$4 + 7 + 5 + 4 = 20$.", marks: 1, markCode: "A" }],
            finalAnswer: "20",
          },
        },
        {
          id: "cipm-u2-s5-stat-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of 2, 4, 6, 8, 10.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Add then divide by count." }],
            steps: [
              { reasoning: "Sum $= 30$; $30 \\div 5 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u2-s5-stat-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Find the mean of 5, 9, 11, 15. (b) The mean of four test scores is 14. Three scores are 12, 15 and 13. Find the fourth score. (c) Explain why the mean might not be a whole number. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "Sum ÷ count; inverse; division may not be exact." }],
            steps: [
              { reasoning: "(a) Sum $= 5 + 9 + 11 + 15 = 40$; $40 \\div 4 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Total $= 14 \\times 4 = 56$; $56 - (12 + 15 + 13) = 56 - 40 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "(c) The sum may not divide exactly by the count, e.g. $10 \\div 3$.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) 10 (b) 16 (c) sum may not divide exactly",
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
