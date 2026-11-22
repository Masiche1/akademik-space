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
            { id: "a", text: "$x^{12}$" },
            { id: "b", text: "$2x^7$" },
            { id: "c", text: "$x^7$" },
            { id: "d", text: "$x$" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u1-s3-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $x^5 \\div x^2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^7$" },
            { id: "b", text: "$x^{10}$" },
            { id: "c", text: "$x^2$" },
            { id: "d", text: "$x^3$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Subtract indices when dividing." }],
            steps: [{ reasoning: "$x^5 \\div x^2 = x^{5-2} = x^3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^3$",
          },
        },
        {
          id: "cimg-u1-s3-in-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $2^5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 32 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Index means repeated multiplication." }],
            steps: [
              { reasoning: "$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cimg-u1-s3-in-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(x^2)^3$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^9$" },
            { id: "b", text: "$x^8$" },
            { id: "c", text: "$x^5$" },
            { id: "d", text: "$x^6$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Multiply indices for powers of powers." }],
            steps: [{ reasoning: "$(x^2)^3 = x^{2 \\times 3} = x^6$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^6$",
          },
        },
        {
          id: "cimg-u1-s3-in-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{(x^2)^3}{x^4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Multiply then subtract indices." }],
            steps: [
              { reasoning: "$(x^2)^3 = x^{2 \\times 3} = x^6$.", marks: 1, markCode: "M" },
              { reasoning: "$x^6 \\div x^4 = x^{6-4} = x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2$",
          },
        },
        {
          id: "cimg-u1-s3-in-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write $0.005$ in standard form.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$5 \\times 10^{3}$" },
            { id: "b", text: "$5 \\times 10^{-3}$" },
            { id: "c", text: "$5 \\times 10^{-2}$" },
            { id: "d", text: "$0.5 \\times 10^{-2}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standard form", statement: "$a \\times 10^n$, $1 \\leq a < 10$." }],
            steps: [{ reasoning: "$0.005 = 5 \\times 10^{-3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$5 \\times 10^{-3}$",
          },
        },
        {
          id: "cimg-u1-s3-in-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $10^2 \\times 10^{-1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Add indices when multiplying." }],
            steps: [
              { reasoning: "$10^2 \\times 10^{-1} = 10^{2 + (-1)} = 10^1$.", marks: 1, markCode: "M" },
              { reasoning: "$10^1 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cimg-u1-s3-in-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Simplify $\\frac{(2x^3)^2}{4x^4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Expand the bracket, then divide." }],
            steps: [
              { reasoning: "$(2x^3)^2 = 4x^6$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{4x^6}{4x^4} = x^{6-4} = x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2$",
          },
        },
        {
          id: "cimg-u1-s3-in-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the correct standard form of $0.0034$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3.4 \\times 10^{-3}$" },
            { id: "b", text: "$0.34 \\times 10^{-2}$" },
            { id: "c", text: "$34 \\times 10^{-4}$" },
            { id: "d", text: "$3.4 \\times 10^{3}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standard form", statement: "$1 \\leq a < 10$." }],
            steps: [{ reasoning: "$0.0034 = 3.4 \\times 10^{-3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$3.4 \\times 10^{-3}$",
          },
        },
        {
          id: "cimg-u1-s3-in-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $(7.5 \\times 10^{-3}) \\times (4 \\times 10^{5})$, giving your answer in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Standard form multiplication", statement: "Multiply coefficients, add powers, then normalise." }],
            steps: [
              { reasoning: "$7.5 \\times 4 = 30$; $10^{-3} \\times 10^{5} = 10^{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Result: $30 \\times 10^{2}$.", marks: 1, markCode: "M" },
              { reasoning: "$30 \\times 10^{2} = 3 \\times 10^{1} \\times 10^{2} = 3 \\times 10^{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3 \\times 10^{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 \\times 10^{3}$",
          },
        },
        {
          id: "cimg-u1-s3-in-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{x^{-1} \\times x^5}{x^2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Add and subtract indices, including negatives." }],
            steps: [
              { reasoning: "$x^{-1} \\times x^5 = x^{-1+5} = x^{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$x^{4} \\div x^2 = x^{4-2} = x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2$",
          },
        },
        {
          id: "cimg-u1-s3-in-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $(-2)^3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -8 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Index means repeated multiplication." }],
            steps: [
              { reasoning: "$(-2)^3 = (-2) \\times (-2) \\times (-2)$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-8",
          },
        },
        {
          id: "cimg-u1-s3-in-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is $7^2 \\div 7^5$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$7^{-7}$" },
            { id: "b", text: "$7^{-3}$" },
            { id: "c", text: "$7^{-2}$" },
            { id: "d", text: "$7^{3}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Subtract indices; negative result gives negative index." }],
            steps: [{ reasoning: "$7^2 \\div 7^5 = 7^{2-5} = 7^{-3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$7^{-3}$",
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
            { id: "a", text: "90" },
            { id: "b", text: "80" },
            { id: "c", text: "110" },
            { id: "d", text: "100" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u1-s3-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 234 to 1 significant figure.",
          response: { type: "mcq", choices: [
            { id: "a", text: "200" },
            { id: "b", text: "300" },
            { id: "c", text: "240" },
            { id: "d", text: "230" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "First non-zero digit." }],
            steps: [{ reasoning: "First sf is 2; next digit 3 < 5 so stays 2: $200$.", marks: 1, markCode: "A" }],
            finalAnswer: "200",
          },
        },
        {
          id: "cimg-u1-s3-es-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Round 0.589 to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.59 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "Count from first non-zero digit." }],
            steps: [
              { reasoning: "2 sf: 0.58|9 — next digit 9 rounds up.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.59$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.59$",
          },
        },
        {
          id: "cimg-u1-s3-es-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate $19.9 \\times 5.1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "80" },
            { id: "b", text: "90" },
            { id: "c", text: "110" },
            { id: "d", text: "100" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round then calculate." }],
            steps: [{ reasoning: "$20 \\times 5 = 100$ (exact: $\\approx 101.5$).", marks: 1, markCode: "A" }],
            finalAnswer: "100",
          },
        },
        {
          id: "cimg-u1-s3-es-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate $\\frac{802}{19.7}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round both numbers." }],
            steps: [
              { reasoning: "$802 \\approx 800$; $19.7 \\approx 20$.", marks: 1, markCode: "M" },
              { reasoning: "$800 \\div 20 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate: 40 (exact: $\\approx 40.7$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "cimg-u1-s3-es-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate $0.51 \\times 199$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round to 1-2 sf first." }],
            steps: [
              { reasoning: "$0.51 \\approx 0.5$; $199 \\approx 200$.", marks: 1, markCode: "M" },
              { reasoning: "$0.5 \\times 200 = 100$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate: $\\approx 100$ (exact: $101.49$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "cimg-u1-s3-es-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is $3456$ correct to 2 significant figures?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3400" },
            { id: "b", text: "3500" },
            { id: "c", text: "3000" },
            { id: "d", text: "3450" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "2 sf: look at third digit." }],
            steps: [{ reasoning: "3|45|6 — third digit 5 rounds up: $3500$.", marks: 1, markCode: "A" }],
            finalAnswer: "3500",
          },
        },
        {
          id: "cimg-u1-s3-es-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Estimate $\\frac{9.8 \\times 4.1}{2.1}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round each number to 1 sf." }],
            steps: [
              { reasoning: "$9.8 \\approx 10$; $4.1 \\approx 4$; $2.1 \\approx 2$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{10 \\times 4}{2} = \\frac{40}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate: $20$ (exact: $\\approx 19.1$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cimg-u1-s3-es-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student calculates $3.98 \\times 7.04 = 280$. Use estimation to decide if this is reasonable. Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation check", statement: "Estimate and compare." }],
            steps: [
              { reasoning: "Estimate: $4 \\times 7 = 28$.", marks: 1, markCode: "M" },
              { reasoning: "The answer $280$ is about 10 times too large.", marks: 1, markCode: "M" },
              { reasoning: "So the answer is NOT reasonable — likely a decimal error.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not reasonable",
          },
        },
        {
          id: "cimg-u1-s3-es-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Round 987654 to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "a", answer: 988000 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "Keep 3 sf, replace rest with zeros." }],
            steps: [
              { reasoning: "3 sf: $988|654$ — next digit 6 rounds up $987$ to $988$.", marks: 1, markCode: "M" },
              { reasoning: "Remaining digits become zeros: $988000$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $988000$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "988000",
          },
        },
        {
          id: "cimg-u1-s3-es-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 0.00345 to 1 significant figure.",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.0035" },
            { id: "b", text: "0.03" },
            { id: "c", text: "0.003" },
            { id: "d", text: "0.004" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "First non-zero digit is 3." }],
            steps: [{ reasoning: "Next digit 4 < 5, so $0.003$.", marks: 1, markCode: "A" }],
            finalAnswer: "0.003",
          },
        },
        {
          id: "cimg-u1-s3-es-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 5.675 to 2 significant figures.",
          response: { type: "mcq", choices: [
            { id: "a", text: "5.7" },
            { id: "b", text: "5.6" },
            { id: "c", text: "5.8" },
            { id: "d", text: "5.68" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Significant figures", statement: "Next digit decides rounding." }],
            steps: [{ reasoning: "2 sf: 5.6|75 — next digit 7 rounds up to $5.7$.", marks: 1, markCode: "A" }],
            finalAnswer: "5.7",
          },
        },
        {
          id: "cimg-u1-s3-es-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Estimate the total cost of 42 cinema tickets at £19.95 each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Estimation", statement: "Round each quantity to 1-2 sf." }],
            steps: [
              { reasoning: "$42 \\approx 40$; $£19.95 \\approx £20$.", marks: 1, markCode: "M" },
              { reasoning: "$40 \\times 20 = 800$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate: $\\approx £800$ (exact: $£837.90$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: about £800.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About £800",
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
