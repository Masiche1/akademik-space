import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cimg-u1-lesson-1-3",
  code: "1-3",
  title: "Indices, Standard Form and Estimation",
  goal: "I CAN apply index laws, write standard form and estimate calculations.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: number"],
  vocabulary: [
    { term: "Index", definition: "The power to which a number is raised." },
    { term: "Standard form", definition: "$a \\times 10^n$ where $1 \\leq a < 10$." },
    { term: "Significant figures", definition: "Digits that carry meaning in a number." },
    { term: "Estimation", definition: "Approximating to check calculations." },
    { term: "Order of magnitude", definition: "Rough size of a number in powers of 10." },
  ],
  concepts: [
    {
      id: "cimg-u1-s3-indices",
      title: "Indices and standard form",
      skill: "Apply index laws and standard form at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Index laws",
            body: "$a^m \\times a^n = a^{m+n}$; $a^m \\div a^n = a^{m-n}$; $(a^m)^n = a^{mn}$; $a^0 = 1$; $a^{-n} = \\frac{1}{a^n}$.",
          },
          {
            heading: "Standard form",
            body: "Write numbers as $a \\times 10^n$ where $1 \\leq a < 10$. $4500 = 4.5 \\times 10^3$; $0.0023 = 2.3 \\times 10^{-3}$.",
          },
        ],
        keyFormulas: [
          { name: "Index laws", statement: "$a^m \\times a^n = a^{m+n}$" },
          { name: "Standard form", statement: "$a \\times 10^n$, $1 \\leq a < 10$" },
        ],
        workedExample: {
          problem: "Write $0.00075$ in standard form.",
          solution: "$7.5 \\times 10^{-4}$.",
        },
      },
      questions: [
        {
          id: "cimg-u1-s3-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $x^3 \\times x^4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^7$" }, { id: "b", text: "$x^{12}$" }, { id: "c", text: "$2x^7$" }, { id: "d", text: "$x$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Add indices when multiplying." }],
            steps: [{ reasoning: "$x^3 \\times x^4 = x^{3+4} = x^7$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^7$",
          },
        },
        {
          id: "cimg-u1-s3-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $65000$ in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standard form", statement: "$a \\times 10^n$." }],
            steps: [
              { reasoning: "$65000 = 6.5 \\times 10^4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6.5 \\times 10^4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.5 \\times 10^4$",
          },
        },
        {
          id: "cimg-u1-s3-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{y^8}{y^3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Subtract indices when dividing." }],
            steps: [
              { reasoning: "$y^8 \\div y^3 = y^{8-3} = y^5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y^5$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $y^5 \\times y^3 = y^8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y^5$",
          },
        },
        {
          id: "cimg-u1-s3-in-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $(2 \\times 10^3) \\times (3 \\times 10^4)$, giving your answer in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standard form multiplication", statement: "Multiply coefficients, add powers." }],
            steps: [
              { reasoning: "$2 \\times 3 = 6$; $10^3 \\times 10^4 = 10^7$.", marks: 1, markCode: "M" },
              { reasoning: "$6 \\times 10^7$ is already in standard form.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6 \\times 10^7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6 \\times 10^7$",
          },
        },
      ],
    },
    {
      id: "cimg-u1-s3-estimation",
      title: "Estimation and significant figures",
      skill: "Estimate calculations and round to significant figures.",
      lesson: {
        sections: [
          {
            heading: "Estimation",
            body: "Round numbers to 1-2 significant figures before calculating. $487 \\times 12 \\approx 500 \\times 10 = 5000$. This checks if your exact answer is sensible.",
          },
          {
            heading: "Significant figures",
            body: "Count from the first non-zero digit. $0.00456$ to 2 sf is $0.0046$. Trailing zeros after a decimal count: $3.40$ has 3 sf.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Estimate $39.8 \\times 4.9$.",
          solution: "$\\approx 40 \\times 5 = 200$.",
        },
      },
      questions: [
        {
          id: "cimg-u1-s3-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate $48.7 + 51.2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "100" }, { id: "b", text: "90" }, { id: "c", text: "110" }, { id: "d", text: "80" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round then calculate." }],
            steps: [{ reasoning: "$50 + 50 = 100$ (exact: 99.9).", marks: 1, markCode: "A" }],
            finalAnswer: "100",
          },
        },
        {
          id: "cimg-u1-s3-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Round 0.0473 to 1 significant figure.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.05 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "First non-zero digit." }],
            steps: [
              { reasoning: "First sf is 4; next digit 7 rounds up.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.05$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.05$",
          },
        },
        {
          id: "cimg-u1-s3-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate $\\frac{487}{9.8}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round both numbers." }],
            steps: [
              { reasoning: "$487 \\approx 500$; $9.8 \\approx 10$.", marks: 1, markCode: "M" },
              { reasoning: "$500 \\div 10 = 50$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate: 50 (exact: $\\approx 49.7$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50",
          },
        },
        {
          id: "cimg-u1-s3-es-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student calculates $2.97 \\times 4.08 = 121.176$. Is this reasonable? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation check", statement: "Estimate and compare." }],
            steps: [
              { reasoning: "Estimate: $3 \\times 4 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "The answer $121.176$ is about 10 times too large.", marks: 1, markCode: "M" },
              { reasoning: "So the answer is NOT reasonable — likely a decimal error.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not reasonable",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u1-s3-ind-notes",
      title: "Indices, standard form, estimation — revision notes",
      summary: "Index laws, $a \\times 10^n$, significant figures, estimation.",
      sections: [
        { heading: "Indices", body: "Multiply: add indices. Divide: subtract. Powers of powers: multiply. $a^0 = 1$; $a^{-n} = 1/a^n$." },
        { heading: "Estimation", body: "Round to 1-2 sf first, calculate, then compare to your exact answer. Check decimal places carefully." },
      ],
    },
  ],
};
