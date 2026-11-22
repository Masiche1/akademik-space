import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m8-u1-lesson-1-2",
  code: "1-2",
  title: "Exponents and Scientific Notation",
  goal: "I CAN apply the integer exponent laws and write, compare and compute with numbers in scientific notation.",
  standards: ["8.EE.A.1", "8.EE.A.3", "8.EE.A.4"],
  vocabulary: [
    { term: "Exponent", definition: "The small raised number that tells how many times the base is used as a factor, as in $5^3 = 5 \\times 5 \\times 5$." },
    { term: "Base", definition: "The number that is multiplied repeatedly, such as the $5$ in $5^3$." },
    { term: "Zero exponent", definition: "Any nonzero number to the power $0$ equals $1$, so $a^0 = 1$ for $a \\ne 0$." },
    { term: "Negative exponent", definition: "A negative exponent means a reciprocal: $a^{-n} = \\frac{1}{a^n}$ for $a \\ne 0$." },
    { term: "Scientific notation", definition: "A number written as $a \\times 10^n$ where $1 \\le a < 10$ and $n$ is an integer." },
    { term: "Order of magnitude", definition: "The power of ten of a number written in scientific notation. It tells roughly how large the number is." },
  ],
  concepts: [
    {
      id: "m8-u1-exponent-laws",
      title: "Integer exponent laws",
      skill: "Use the product, quotient, power, zero and negative exponent laws to simplify and evaluate expressions.",
      lesson: {
        sections: [
          {
            heading: "The exponent laws",
            body: "For a nonzero base $a$ and integers $m$ and $n$:\n\n- Product: $a^m \\cdot a^n = a^{m+n}$\n- Quotient: $\\frac{a^m}{a^n} = a^{m-n}$\n- Power of a power: $(a^m)^n = a^{mn}$\n- Power of a product: $(ab)^n = a^n b^n$\n\nThese work because exponents count repeated factors. For example $3^4 \\cdot 3^2$ has $4 + 2 = 6$ factors of $3$.",
          },
          {
            heading: "Zero and negative exponents",
            body: "Dividing $a^3$ by $a^3$ gives $1$ and also $a^{3-3} = a^0$, so $a^0 = 1$. Dividing $a^2$ by $a^5$ gives $a^{2-5} = a^{-3}$, which equals $\\frac{1}{a^3}$. So a negative exponent means a **reciprocal**, not a negative number: $5^{-2} = \\frac{1}{25}$, not $-25$.",
          },
        ],
        keyFormulas: [
          { name: "Product law", statement: "$a^m \\cdot a^n = a^{m+n}$" },
          { name: "Quotient law", statement: "$\\frac{a^m}{a^n} = a^{m-n}$" },
          { name: "Power law", statement: "$(a^m)^n = a^{mn}$" },
          { name: "Zero and negative exponents", statement: "$a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{(2^3)^2 \\cdot 2^{-4}}{2^{-1}}$ and give the value.",
          solution: "Power law: $(2^3)^2 = 2^6$. Numerator: $2^6 \\cdot 2^{-4} = 2^{2}$. Quotient law: $\\frac{2^2}{2^{-1}} = 2^{2-(-1)} = 2^3 = 8$.",
        },
      },
      questions: [
        {
          id: "m8-u1-exponent-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression is equivalent to $2^5 \\cdot 2^{-2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2^3$" },
              { id: "b", text: "$2^{-3}$" },
              { id: "c", text: "$2^{-10}$" },
              { id: "d", text: "$2^7$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$a^m \\cdot a^n = a^{m+n}$" },
            ],
            steps: [
              { reasoning: "Same base, so add the exponents.", working: "2^5 \\cdot 2^{-2} = 2^{5+(-2)} = 2^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2^3$",
            commonErrors: ["Ignoring the sign of $-2$ and adding to get $2^7$.", "Multiplying the exponents to get $2^{-10}$."],
          },
        },
        {
          id: "m8-u1-exponent-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{(2^3)^2}{2^4}$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power law", statement: "$(a^m)^n = a^{mn}$" },
              { kind: "law", name: "Quotient law", statement: "$\\frac{a^m}{a^n} = a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Multiply the exponents in the power of a power, then subtract in the quotient.", working: "\\frac{2^6}{2^4} = 2^{6-4} = 2^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2^2 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Adding exponents in $(2^3)^2$ to get $2^5$.", "Dividing the exponents $6 \\div 4$."],
          },
        },
        {
          id: "m8-u1-exponent-laws-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $\\frac{3^{-2} \\cdot 3^{5}}{3^{-1}}$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 81 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$a^m \\cdot a^n = a^{m+n}$" },
              { kind: "law", name: "Quotient law", statement: "$\\frac{a^m}{a^n} = a^{m-n}$, and subtracting a negative adds." },
            ],
            steps: [
              { reasoning: "Add the exponents in the numerator.", working: "3^{-2} \\cdot 3^5 = 3^{3}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the exponent in the denominator. Subtracting $-1$ is adding $1$.", working: "\\frac{3^3}{3^{-1}} = 3^{3-(-1)} = 3^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3^4 = 81", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$81$",
            commonErrors: ["Computing $3 - 1 = 2$ and getting $3^2 = 9$.", "Treating $3^{-2}$ as $-9$."],
          },
        },
        {
          id: "m8-u1-exponent-laws-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Maya is practicing integer exponents and works on four tasks.",
          parts: [
            { label: "a", prompt: "Write $5^{-2}$ as a decimal.", marks: 2 },
            { label: "b", prompt: "Evaluate $\\frac{4^3 \\cdot 4^{-1}}{4^0}$.", marks: 2 },
            { label: "c", prompt: "Evaluate $(2^{-3})^{-2}$.", marks: 2 },
            { label: "d", prompt: "Maya says $7^0 = 0$. Explain why she is wrong.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $5^{-2}$", answer: 0.04 },
              { label: "(b) Value", answer: 16 },
              { label: "(c) Value", answer: 64 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Negative exponent", statement: "$a^{-n} = \\frac{1}{a^n}$" },
              { kind: "law", name: "Zero exponent", statement: "$a^0 = 1$ for $a \\ne 0$" },
              { kind: "law", name: "Power law", statement: "$(a^m)^n = a^{mn}$" },
            ],
            steps: [
              { part: "a", reasoning: "A negative exponent gives a reciprocal.", working: "5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert to a decimal.", working: "\\frac{1}{25} = 0.04", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add exponents in the numerator and use $4^0 = 1$.", working: "\\frac{4^{3+(-1)}}{1} = 4^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "4^2 = 16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply the exponents. A negative times a negative is positive.", working: "(2^{-3})^{-2} = 2^{(-3)(-2)} = 2^6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "2^6 = 64", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the quotient law on a number divided by itself: $\\frac{7^2}{7^2} = 7^{2-2} = 7^0$.", working: "\\frac{7^2}{7^2} = \\frac{49}{49} = 1", marks: 1, markCode: "R" },
              { part: "d", reasoning: "So $7^0 = 1$, not $0$. The exponent $0$ means no factors are multiplied, leaving the multiplicative identity $1$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.04$ (b) $16$ (c) $64$ (d) $7^0 = 1$ because $\\frac{7^2}{7^2} = 1$ and also equals $7^0$.",
            commonErrors: ["Writing $5^{-2} = -25$ or $-10$.", "Believing any number to the power $0$ is $0$."],
          },
        },
      ],
    },
    {
      id: "m8-u1-scientific-notation",
      title: "Scientific notation",
      skill: "Write, compare and compute with numbers in scientific notation.",
      lesson: {
        sections: [
          {
            heading: "Writing numbers in scientific notation",
            body: "A number in scientific notation has the form $a \\times 10^n$ with $1 \\le a < 10$. Move the decimal point until there is one nonzero digit to its left. Moving left makes $n$ positive: $45{,}000{,}000 = 4.5 \\times 10^7$. Moving right makes $n$ negative: $0.00032 = 3.2 \\times 10^{-4}$.",
          },
          {
            heading: "Multiplying and dividing",
            body: "Multiply or divide the coefficients and use the exponent laws on the powers of $10$. Then adjust so the coefficient is between $1$ and $10$. For $(4 \\times 10^3)(5 \\times 10^6) = 20 \\times 10^9 = 2 \\times 10^{10}$.",
          },
          {
            heading: "Comparing and adding",
            body: "To compare, look at the exponent first, then the coefficient. $3 \\times 10^8$ is $100$ times $3 \\times 10^6$. To add or subtract, first rewrite the numbers with the same power of $10$.",
          },
        ],
        keyFormulas: [
          { name: "Scientific notation", statement: "$a \\times 10^n$ with $1 \\le a < 10$, $n$ an integer" },
          { name: "Product", statement: "$(a \\times 10^m)(b \\times 10^n) = ab \\times 10^{m+n}$" },
          { name: "Quotient", statement: "$\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$" },
        ],
        workedExample: {
          problem: "A virus is $1.2 \\times 10^{-7}$ meter wide. A dust particle is $6 \\times 10^{-5}$ meter wide. How many times as wide as the virus is the dust particle?",
          solution: "Divide: $\\frac{6 \\times 10^{-5}}{1.2 \\times 10^{-7}} = \\frac{6}{1.2} \\times 10^{-5-(-7)} = 5 \\times 10^2 = 500$. The dust particle is $500$ times as wide.",
        },
      },
      questions: [
        {
          id: "m8-u1-scientific-notation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which shows $45{,}000{,}000$ in scientific notation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5 \\times 10^7$" },
              { id: "b", text: "$4.5 \\times 10^8$" },
              { id: "c", text: "$45 \\times 10^6$" },
              { id: "d", text: "$4.5 \\times 10^6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Scientific notation", statement: "$a \\times 10^n$ with $1 \\le a < 10$." },
            ],
            steps: [
              { reasoning: "Move the decimal point $7$ places left to get $4.5$, so the exponent is $7$.", working: "45{,}000{,}000 = 4.5 \\times 10^7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $4.5 \\times 10^7$",
            commonErrors: ["Miscounting the places moved.", "Choosing $45 \\times 10^6$, where the coefficient is not less than $10$."],
          },
        },
        {
          id: "m8-u1-scientific-notation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $(4 \\times 10^3)(5 \\times 10^6)$ in scientific notation as $a \\times 10^n$. Enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient $a$", answer: 2 },
              { label: "Exponent $n$", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$10^m \\cdot 10^n = 10^{m+n}$" },
            ],
            steps: [
              { reasoning: "Multiply the coefficients and add the exponents.", working: "(4 \\times 5) \\times 10^{3+6} = 20 \\times 10^9", marks: 1, markCode: "M" },
              { reasoning: "Rewrite so the coefficient is between $1$ and $10$.", working: "20 \\times 10^9 = 2 \\times 10^{10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2 \\times 10^{10}$, so $a = 2$ and $n = 10$",
            commonErrors: ["Stopping at $20 \\times 10^9$.", "Multiplying the exponents to get $10^{18}$."],
          },
        },
        {
          id: "m8-u1-scientific-notation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write $\\frac{9.6 \\times 10^5}{3.2 \\times 10^{-2}}$ in scientific notation as $a \\times 10^n$. Enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient $a$", answer: 3 },
              { label: "Exponent $n$", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient law", statement: "$\\frac{10^m}{10^n} = 10^{m-n}$" },
            ],
            steps: [
              { reasoning: "Divide the coefficients.", working: "\\frac{9.6}{3.2} = 3", marks: 1, markCode: "M" },
              { reasoning: "Subtract the exponents. Subtracting $-2$ is adding $2$.", working: "10^{5-(-2)} = 10^7", marks: 1, markCode: "M" },
              { reasoning: "Combine. The coefficient is already between $1$ and $10$.", working: "3 \\times 10^7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3 \\times 10^7$, so $a = 3$ and $n = 7$",
            commonErrors: ["Computing $5 - 2 = 3$ and giving $3 \\times 10^3$.", "Dividing $3.2 \\div 9.6$."],
          },
        },
        {
          id: "m8-u1-scientific-notation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Sun is about $1.5 \\times 10^8$ kilometers from Earth. Light travels about $3 \\times 10^5$ kilometers per second. The mass of the Sun is about $2 \\times 10^{30}$ kilograms and the mass of Earth is about $6 \\times 10^{24}$ kilograms.",
          parts: [
            { label: "a", prompt: "How many seconds does sunlight take to reach Earth?", marks: 2 },
            { label: "b", prompt: "The Sun's mass is $a \\times 10^5$ times Earth's mass. Find $a$ to the nearest hundredth.", marks: 3 },
            { label: "c", prompt: "The distance from the Sun to Earth is $1.5 \\times 10^{n}$ meters. Find $n$. (1 kilometer = 1000 meters.)", marks: 2 },
            { label: "d", prompt: "Explain why the combined mass of the Sun and Earth is still about $2 \\times 10^{30}$ kilograms.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Time", answer: 500, unit: "seconds" },
              { label: "(b) Coefficient $a$", answer: 3.33, tolerance: 0.005 },
              { label: "(c) Exponent $n$", answer: 11 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time} = \\frac{\\text{distance}}{\\text{speed}}$" },
              { kind: "law", name: "Quotient law", statement: "$\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$" },
              { kind: "principle", name: "Adding in scientific notation", statement: "Write both numbers with the same power of $10$ before adding." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the distance by the speed.", working: "\\frac{1.5 \\times 10^8}{3 \\times 10^5} = 0.5 \\times 10^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "0.5 \\times 10^3 = 500", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide the Sun's mass by Earth's mass.", working: "\\frac{2 \\times 10^{30}}{6 \\times 10^{24}} = \\frac{2}{6} \\times 10^{6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the coefficient between $1$ and $10$ by moving one power of ten.", working: "0.333\\ldots \\times 10^6 = 3.33\\ldots \\times 10^5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round to the nearest hundredth.", working: "a \\approx 3.33", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply by $1000 = 10^3$ to convert kilometers to meters.", working: "1.5 \\times 10^8 \\times 10^3 = 1.5 \\times 10^{11}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Read off the exponent.", working: "n = 11", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write both masses with the same power of ten: $6 \\times 10^{24} = 0.000006 \\times 10^{30}$.", working: "2 \\times 10^{30} + 0.000006 \\times 10^{30} = 2.000006 \\times 10^{30}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Earth's mass is about one millionth of the Sun's, so adding it changes the coefficient only in the sixth decimal place and the total is still about $2 \\times 10^{30}$ kilograms.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $500$ seconds (b) $3.33$ (c) $11$ (d) Earth's mass is about $10^{-6}$ of the Sun's, so the total is $2.000006 \\times 10^{30} \\approx 2 \\times 10^{30}$ kg.",
            commonErrors: ["Getting $3.33 \\times 10^6$ and forgetting to adjust the coefficient to be at least $1$.", "Adding exponents when adding the masses."],
          },
        },
      ],
    },
  ],
};
