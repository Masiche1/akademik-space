import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m8-u1-lesson-1-1",
  code: "1-1",
  title: "Rational and Irrational Numbers",
  goal: "I CAN classify real numbers, convert repeating decimals to fractions, and approximate and order irrational numbers on the number line.",
  standards: ["8.NS.A.1", "8.NS.A.2"],
  vocabulary: [
    { term: "Rational number", definition: "A number that can be written as $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\ne 0$. Its decimal form terminates or repeats." },
    { term: "Irrational number", definition: "A real number that cannot be written as a fraction of two integers. Its decimal form never ends and never repeats, such as $\\sqrt{2}$ and $\\pi$." },
    { term: "Real numbers", definition: "All the rational and irrational numbers together. Every point on the number line is a real number." },
    { term: "Repeating decimal", definition: "A decimal in which a digit or block of digits repeats forever, written with a bar, such as $0.\\overline{36}$." },
    { term: "Perfect square", definition: "A number that is the square of an integer, such as $1, 4, 9, 16, 25$." },
    { term: "Approximation", definition: "A value close to, but not exactly equal to, a number, such as $\\sqrt{2} \\approx 1.41$." },
  ],
  concepts: [
    {
      id: "m8-u1-classify-real-numbers",
      title: "Classifying real numbers and repeating decimals",
      skill: "Classify numbers as rational or irrational and write repeating decimals as fractions.",
      lesson: {
        sections: [
          {
            heading: "Rational or irrational?",
            body: "A **rational number** is a ratio of two integers. Integers, fractions, terminating decimals such as $0.75$ and repeating decimals such as $0.\\overline{3}$ are all rational. A square root of a number that is **not** a perfect square, such as $\\sqrt{18}$, is **irrational**, and so is $\\pi$. Together rational and irrational numbers make up the **real numbers**.",
          },
          {
            heading: "Converting a repeating decimal to a fraction",
            body: "Let $x$ equal the decimal. Multiply by $10$ if one digit repeats, $100$ if two digits repeat, and so on, so that the repeating blocks line up. Subtract the original equation to cancel the repeating part, then solve for $x$. For $x = 0.\\overline{36}$: $100x = 36.\\overline{36}$, so $100x - x = 36$, giving $99x = 36$ and $x = \\frac{36}{99} = \\frac{4}{11}$.",
          },
        ],
        keyFormulas: [
          { name: "Rational number", statement: "$\\frac{a}{b}$ with $a, b$ integers and $b \\ne 0$" },
          { name: "Repeating block of $n$ digits", statement: "Multiply by $10^n$, subtract $x$, then solve" },
        ],
        workedExample: {
          problem: "Write $0.\\overline{7}$ as a fraction.",
          solution: "Let $x = 0.\\overline{7}$. Then $10x = 7.\\overline{7}$. Subtract: $10x - x = 7$, so $9x = 7$ and $x = \\frac{7}{9}$.",
        },
      },
      questions: [
        {
          id: "m8-u1-classify-real-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these numbers is irrational?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{7}{3}$" },
              { id: "b", text: "$\\sqrt{16}$" },
              { id: "c", text: "$\\sqrt{18}$" },
              { id: "d", text: "$0.\\overline{3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Irrational number", statement: "The square root of a positive integer that is not a perfect square is irrational." },
            ],
            steps: [
              { reasoning: "$18$ lies between the perfect squares $16$ and $25$, so it is not a perfect square and $\\sqrt{18}$ is irrational. The others are rational: $\\sqrt{16} = 4$, $0.\\overline{3} = \\frac{1}{3}$, and $-\\frac{7}{3}$ is a fraction.", working: "\\sqrt{16}=4,\\quad 0.\\overline{3}=\\tfrac{1}{3},\\quad \\sqrt{18}\\ \\text{is irrational}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\sqrt{18}$",
            commonErrors: ["Thinking every repeating decimal is irrational because it never ends.", "Thinking every square root is irrational, including $\\sqrt{16}$."],
          },
        },
        {
          id: "m8-u1-classify-real-numbers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.\\overline{36}$ as a fraction in lowest terms $\\frac{a}{b}$. Enter the numerator $a$ and the denominator $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Numerator $a$", answer: 4 },
              { label: "Denominator $b$", answer: 11 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeating decimal to fraction", statement: "Multiply by $10^n$ for an $n$-digit repeating block, subtract the original, and solve." },
            ],
            steps: [
              { reasoning: "Two digits repeat, so multiply by $100$ and subtract $x$ to cancel the repeating part.", working: "100x - x = 36.\\overline{36} - 0.\\overline{36} \\Rightarrow 99x = 36", marks: 1, markCode: "M" },
              { reasoning: "Divide and simplify by the common factor $9$.", working: "x = \\frac{36}{99} = \\frac{4}{11}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{11}$, so $a = 4$ and $b = 11$",
            commonErrors: ["Writing $\\frac{36}{100}$ as if the decimal terminated.", "Multiplying by $10$ instead of $100$, so the repeating blocks do not line up."],
          },
        },
        {
          id: "m8-u1-classify-real-numbers-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write $0.2\\overline{3}$ (that is, $0.2333\\ldots$) as a fraction in lowest terms $\\frac{a}{b}$. Enter the numerator $a$ and the denominator $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Numerator $a$", answer: 7 },
              { label: "Denominator $b$", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeating decimal to fraction", statement: "Choose two multiples of $x$ whose decimal parts match, then subtract to cancel the repeating part." },
            ],
            steps: [
              { reasoning: "Only one digit repeats, but it starts after the first decimal place. Multiply by $10$ and by $100$ so both have the same repeating tail.", working: "10x = 2.\\overline{3},\\quad 100x = 23.\\overline{3}", marks: 1, markCode: "M" },
              { reasoning: "Subtract to cancel the repeating tail.", working: "100x - 10x = 23.\\overline{3} - 2.\\overline{3} \\Rightarrow 90x = 21", marks: 1, markCode: "M" },
              { reasoning: "Solve and simplify by the common factor $3$.", working: "x = \\frac{21}{90} = \\frac{7}{30}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{7}{30}$, so $a = 7$ and $b = 30$",
            commonErrors: ["Treating the decimal as $0.\\overline{23}$ and getting $\\frac{23}{99}$.", "Leaving the answer as $\\frac{21}{90}$ without simplifying."],
            examinerNote: "Check: $\\frac{7}{30} = 0.2333\\ldots$.",
          },
        },
        {
          id: "m8-u1-classify-real-numbers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A teacher writes six numbers on the board: $\\frac{3}{8}$, $\\sqrt{25}$, $\\sqrt{12}$, $0.\\overline{81}$, $\\pi$ and $-5$.",
          parts: [
            { label: "a", prompt: "How many of the six numbers are irrational?", marks: 2 },
            { label: "b", prompt: "Write $0.\\overline{81}$ as a fraction in lowest terms. Enter the numerator and the denominator.", marks: 3 },
            { label: "c", prompt: "Write $\\frac{3}{8}$ as a decimal.", marks: 1 },
            { label: "d", prompt: "Explain why $\\sqrt{12}$ is irrational.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number of irrational numbers", answer: 2 },
              { label: "(b) Numerator", answer: 9 },
              { label: "(b) Denominator", answer: 11 },
              { label: "(c) $\\frac{3}{8}$ as a decimal", answer: 0.375 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rational number", statement: "A number that can be written as a ratio of integers; its decimal terminates or repeats." },
              { kind: "definition", name: "Irrational number", statement: "A real number that is not rational, for example $\\pi$ or the square root of a non-square integer." },
              { kind: "principle", name: "Repeating decimal to fraction", statement: "Multiply by $10^n$ for an $n$-digit repeating block, subtract the original, and solve." },
            ],
            steps: [
              { part: "a", reasoning: "Classify each number. $\\frac{3}{8}$, $\\sqrt{25} = 5$, $0.\\overline{81}$ and $-5$ are rational.", working: "\\sqrt{25}=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only $\\sqrt{12}$ and $\\pi$ are irrational.", working: "2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two digits repeat, so let $x = 0.\\overline{81}$ and multiply by $100$.", working: "100x = 81.\\overline{81}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract $x$ to cancel the repeating part.", working: "99x = 81", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve and simplify by the common factor $9$.", working: "x = \\frac{81}{99} = \\frac{9}{11}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide $3$ by $8$. The decimal terminates.", working: "\\frac{3}{8} = 0.375", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$12$ is between the perfect squares $9$ and $16$, so it is not a perfect square and $\\sqrt{12}$ is not an integer.", working: "3^2 = 9 < 12 < 16 = 4^2", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The square root of a positive integer that is not a perfect square cannot be written as a fraction, so its decimal never ends or repeats. It is irrational.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $2$ ($\\sqrt{12}$ and $\\pi$) (b) $\\frac{9}{11}$ (c) $0.375$ (d) $12$ is not a perfect square, so $\\sqrt{12}$ is irrational.",
            commonErrors: ["Counting $\\sqrt{25}$ as irrational because it has a square root sign.", "Counting $0.\\overline{81}$ as irrational because it never ends."],
            examinerNote: "In (d) the reason must mention that $12$ is not a perfect square.",
          },
        },
      ],
    },
    {
      id: "m8-u1-approximate-order-irrationals",
      title: "Approximating and ordering irrational numbers",
      skill: "Estimate irrational numbers using perfect squares and compare and order them on a number line.",
      lesson: {
        sections: [
          {
            heading: "Bounding with perfect squares",
            body: "To locate $\\sqrt{40}$, find the perfect squares on each side: $6^2 = 36$ and $7^2 = 49$. Because $36 < 40 < 49$, we know $6 < \\sqrt{40} < 7$. Since $40$ is closer to $36$ than to $49$, $\\sqrt{40}$ is a little over $6$.",
          },
          {
            heading: "Refining the estimate",
            body: "Square decimals to narrow the interval. $6.3^2 = 39.69$ and $6.4^2 = 40.96$, so $6.3 < \\sqrt{40} < 6.4$. Check the midpoint $6.35^2 = 40.3225$, which is greater than $40$, so $\\sqrt{40} < 6.35$ and rounds to $6.3$.",
          },
          {
            heading: "Ordering real numbers",
            body: "To compare numbers in different forms, write each as a decimal approximation, then order the decimals. Remember that $\\pi \\approx 3.14159$ and that a larger radicand gives a larger square root.",
          },
        ],
        keyFormulas: [
          { name: "Bounding a square root", statement: "If $n^2 < p < (n+1)^2$ then $n < \\sqrt{p} < n + 1$" },
        ],
        workedExample: {
          problem: "Between which two consecutive integers is $\\sqrt{58}$? Estimate it to the nearest tenth.",
          solution: "$7^2 = 49$ and $8^2 = 64$, so $7 < \\sqrt{58} < 8$. Try $7.6^2 = 57.76$ and $7.7^2 = 59.29$, so $\\sqrt{58}$ is between $7.6$ and $7.7$. Since $7.65^2 = 58.5225 > 58$, $\\sqrt{58} < 7.65$, so $\\sqrt{58} \\approx 7.6$.",
        },
      },
      questions: [
        {
          id: "m8-u1-approximate-order-irrationals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Between which two consecutive integers does $\\sqrt{40}$ lie?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ and $6$" },
              { id: "b", text: "$6$ and $7$" },
              { id: "c", text: "$20$ and $21$" },
              { id: "d", text: "$7$ and $8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounding with perfect squares", statement: "If $n^2 < p < (n+1)^2$ then $n < \\sqrt{p} < n+1$." },
            ],
            steps: [
              { reasoning: "$40$ lies between the perfect squares $36$ and $49$.", working: "6^2 = 36 < 40 < 49 = 7^2 \\Rightarrow 6 < \\sqrt{40} < 7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $6$ and $7$",
            commonErrors: ["Dividing $40$ by $2$ to get about $20$.", "Using $5^2 = 25$ and $6^2 = 36$, which are both less than $40$."],
          },
        },
        {
          id: "m8-u1-approximate-order-irrationals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Estimate $\\sqrt{50}$ to the nearest tenth.",
          response: { type: "numeric", parts: [{ label: "$\\sqrt{50}$ to the nearest tenth", answer: 7.1, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Refining an estimate", statement: "Square decimals to trap the root between two values, then use the midpoint to round." },
            ],
            steps: [
              { reasoning: "$49 < 50 < 64$, so $\\sqrt{50}$ is just above $7$. Test the midpoint $7.05$ between $7.0$ and $7.1$.", working: "7.05^2 = 49.7025 < 50", marks: 1, markCode: "M" },
              { reasoning: "Since $7.05^2 < 50$ and $7.1^2 = 50.41 > 50$, the root lies between $7.05$ and $7.1$, so it rounds to $7.1$.", working: "\\sqrt{50} \\approx 7.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.1$",
            commonErrors: ["Rounding down to $7.0$ because $50$ is close to $49$.", "Using $7.5$ as if $\\sqrt{50}$ were halfway between $7$ and $8$."],
          },
        },
        {
          id: "m8-u1-approximate-order-irrationals-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The numbers $2.6$, $\\sqrt{7}$ and $\\frac{8}{3}$ are placed on a number line in order from least to greatest. Give the middle number as a decimal rounded to the nearest hundredth.",
          response: { type: "numeric", parts: [{ label: "Middle number", answer: 2.65, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ordering real numbers", statement: "Write each number as a decimal approximation and compare place by place." },
            ],
            steps: [
              { reasoning: "Convert $\\frac{8}{3}$ to a decimal.", working: "\\frac{8}{3} = 2.\\overline{6} \\approx 2.667", marks: 1, markCode: "B" },
              { reasoning: "Bound $\\sqrt{7}$ with squares of decimals.", working: "2.6^2 = 6.76 < 7 < 7.29 = 2.7^2,\\quad 2.64^2 = 6.9696 < 7 < 7.0225 = 2.65^2", marks: 1, markCode: "M" },
              { reasoning: "So $\\sqrt{7} \\approx 2.65$, which lies between $2.6$ and $2.667$. The order is $2.6 < \\sqrt{7} < \\frac{8}{3}$.", working: "\\sqrt{7} \\approx 2.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt{7} \\approx 2.65$",
            commonErrors: ["Thinking $\\sqrt{7}$ is greater than $\\frac{8}{3}$ because $7 > 3$.", "Comparing $\\frac{8}{3}$ with $2.6$ incorrectly by treating it as $2.8$."],
          },
        },
        {
          id: "m8-u1-approximate-order-irrationals-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A square patio has an area of $90$ square feet. The side length is $s$ feet, so $s = \\sqrt{90}$.",
          parts: [
            { label: "a", prompt: "$s$ lies between two consecutive integers. What is the smaller integer?", marks: 2 },
            { label: "b", prompt: "Estimate $s$ to the nearest tenth of a foot.", marks: 3 },
            { label: "c", prompt: "Using your answer to (b), estimate the perimeter of the patio in feet.", marks: 2 },
            { label: "d", prompt: "Is $\\sqrt{90}$ less than or greater than $9.5$? Justify your answer without a calculator.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Smaller integer", answer: 9 },
              { label: "(b) $s$ to the nearest tenth", answer: 9.5, tolerance: 0.05 },
              { label: "(c) Perimeter", answer: 38, unit: "ft" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounding with perfect squares", statement: "If $n^2 < p < (n+1)^2$ then $n < \\sqrt{p} < n+1$." },
              { kind: "formula", name: "Perimeter of a square", statement: "$P = 4s$" },
            ],
            steps: [
              { part: "a", reasoning: "Find the perfect squares on each side of $90$.", working: "9^2 = 81 < 90 < 100 = 10^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "So $9 < s < 10$ and the smaller integer is $9$.", working: "9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Square tenths to narrow the interval.", working: "9.4^2 = 88.36 < 90 < 90.25 = 9.5^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Test the midpoint $9.45$.", working: "9.45^2 = 89.3025 < 90", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The root lies between $9.45$ and $9.5$, so it rounds to $9.5$.", working: "s \\approx 9.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A square has four equal sides.", working: "P = 4 \\times 9.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "P = 38", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Square $9.5$ and compare with $90$.", working: "9.5^2 = 90.25 > 90", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $9.5^2$ is greater than $90$, $\\sqrt{90}$ is less than $9.5$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $9$ (b) $9.5$ ft (c) about $38$ ft (d) Less than $9.5$ because $9.5^2 = 90.25 > 90$.",
            commonErrors: ["Taking $\\sqrt{90} \\approx 45$ by halving.", "Rounding to $9.4$ because $9.4^2$ is closer to $90$ than expected."],
            examinerNote: "In (c) follow through from the answer to (b) (ft).",
          },
        },
      ],
    },
  ],
};
