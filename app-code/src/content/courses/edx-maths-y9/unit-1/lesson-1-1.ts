import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edm9-u1-lesson-1-1",
  code: "1-1",
  title: "Indices and Standard Form",
  goal: "I CAN use the laws of indices, including zero and negative indices, and calculate with numbers in standard form.",
  standards: ["Y9 Number"],
  vocabulary: [
    { term: "Index (power)", definition: "The small raised number that shows how many times a base is multiplied by itself, for example the 4 in $3^4$." },
    { term: "Base", definition: "The number or letter that is being raised to a power." },
    { term: "Reciprocal", definition: "The number that multiplies with a given number to make 1. The reciprocal of $\\frac{2}{3}$ is $\\frac{3}{2}$." },
    { term: "Negative index", definition: "An index such as $a^{-n}$, which means $\\frac{1}{a^n}$. It does not make the number negative." },
    { term: "Standard form", definition: "A number written as $a \\times 10^n$ where $1 \\le a < 10$ and $n$ is an integer." },
    { term: "Significant figure", definition: "A digit that carries meaning about the size of a number, counted from the first non-zero digit." },
  ],
  concepts: [
    {
      id: "edm9-u1-index-laws",
      title: "Index laws including zero and negative indices",
      skill: "Simplify expressions and evaluate numbers using the laws of indices.",
      lesson: {
        sections: [
          {
            heading: "The three main laws",
            body: "When you multiply powers of the same base, **add** the indices: $a^m \\times a^n = a^{m+n}$. When you divide, **subtract** them: $a^m \\div a^n = a^{m-n}$. When you raise a power to a power, **multiply** the indices: $(a^m)^n = a^{mn}$. Always check the bases are the same before using the first two laws. Numbers in front (coefficients) are multiplied or divided as normal.",
          },
          {
            heading: "Zero and negative indices",
            body: "Any non-zero number to the power 0 is 1, so $a^0 = 1$. This follows from $a^n \\div a^n = a^{n-n} = a^0$, and anything divided by itself is 1. A negative index means a reciprocal: $a^{-n} = \\frac{1}{a^n}$. For example $2^{-3} = \\frac{1}{8}$. For a fraction, the reciprocal flips it: $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^{2} = \\frac{9}{4}$.",
          },
        ],
        keyFormulas: [
          { name: "Multiplying", statement: "$a^m \\times a^n = a^{m+n}$" },
          { name: "Dividing", statement: "$a^m \\div a^n = a^{m-n}$" },
          { name: "Power of a power", statement: "$(a^m)^n = a^{mn}$" },
          { name: "Zero and negative indices", statement: "$a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Work out $\\left(\\frac{3}{4}\\right)^{-2}$.",
          solution: "A negative index means take the reciprocal, so $\\left(\\frac{3}{4}\\right)^{-2} = \\left(\\frac{4}{3}\\right)^{2}$. Square the numerator and the denominator: $\\frac{16}{9}$.",
        },
      },
      questions: [
        {
          id: "edm9-u1-index-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $x^3 \\times x^4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{12}$" },
              { id: "b", text: "$x^{7}$" },
              { id: "c", text: "$2x^{7}$" },
              { id: "d", text: "$x^{1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Multiplying powers", statement: "$a^m \\times a^n = a^{m+n}$" }],
            steps: [
              { reasoning: "The bases are the same, so add the indices.", working: "x^{3} \\times x^{4} = x^{3+4} = x^{7}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x^7$",
            commonErrors: ["Multiplying the indices to get $x^{12}$.", "Subtracting the indices to get $x^{1}$."],
            examinerNote: "B1 for $x^7$ only.",
          },
        },
        {
          id: "edm9-u1-index-laws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out the value of $\\left(\\frac{2}{3}\\right)^{-3}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 3.375, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Negative index", statement: "$a^{-n} = \\frac{1}{a^n}$, so a negative power of a fraction is the positive power of its reciprocal." }],
            steps: [
              { reasoning: "A negative index means take the reciprocal of the fraction.", working: "\\left(\\frac{2}{3}\\right)^{-3} = \\left(\\frac{3}{2}\\right)^{3}", marks: 1, markCode: "M" },
              { reasoning: "Cube the numerator and the denominator.", working: "\\frac{27}{8}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "27 \\div 8 = 3.375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{27}{8} = 3.375$",
            commonErrors: ["Giving a negative answer such as $-\\frac{8}{27}$.", "Cubing only the numerator or only the denominator."],
            examinerNote: "Accept $\\frac{27}{8}$ or $3\\frac{3}{8}$ oe. Final A1 cao.",
          },
        },
        {
          id: "edm9-u1-index-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify fully $\\dfrac{6x^5y^{-2} \\times 3x^{-2}y^4}{9x^3y}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying powers", statement: "$a^m \\times a^n = a^{m+n}$; multiply coefficients separately." },
              { kind: "law", name: "Dividing powers", statement: "$a^m \\div a^n = a^{m-n}$" },
            ],
            steps: [
              { reasoning: "Multiply the numbers and add the indices of each letter in the numerator.", working: "6 \\times 3 = 18,\\quad x^{5+(-2)} = x^{3},\\quad y^{-2+4} = y^{2}", marks: 1, markCode: "M" },
              { reasoning: "The numerator simplifies to this expression.", working: "\\frac{18x^3y^2}{9x^3y}", marks: 1, markCode: "A" },
              { reasoning: "Divide the numbers and subtract the indices of each letter.", working: "18 \\div 9 = 2,\\quad x^{3-3} = x^{0} = 1,\\quad y^{2-1} = y", marks: 1, markCode: "M" },
              { reasoning: "Combine the results.", working: "2y", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2y$",
            commonErrors: ["Multiplying indices instead of adding them in the numerator.", "Writing $x^0 = 0$ instead of $x^0 = 1$.", "Adding the negative index incorrectly: $-2 + 4$ is $2$, not $-6$."],
            examinerNote: "Allow $\\frac{2y}{1}$. Final A1 cao.",
          },
        },
        {
          id: "edm9-u1-index-laws-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "This question is about indices.",
          parts: [
            { label: "a", prompt: "Write down the value of $7^0$ and the value of $4^{-2}$ as a fraction.", marks: 2 },
            { label: "b", prompt: "Work out $\\dfrac{2^{7} \\times 2^{-3}}{2^{2}}$.", marks: 3 },
            { label: "c", prompt: "Solve $3^{x} \\times 3^{4} = 3^{-2}$.", marks: 2 },
            { label: "d", prompt: "Show that $\\dfrac{9^{2} \\times 3^{-1}}{3^{2}} = 3$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) value of $7^0$", answer: 1 },
              { label: "(b) value of the fraction", answer: 4 },
              { label: "(c) value of $x$", answer: -6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Zero and negative indices", statement: "$a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$" },
              { kind: "law", name: "Multiplying and dividing powers", statement: "Add indices when multiplying and subtract when dividing powers of the same base." },
              { kind: "law", name: "Power of a power", statement: "$(a^m)^n = a^{mn}$, and $9 = 3^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Any non-zero number to the power 0 is 1.", working: "7^0 = 1", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A negative index means the reciprocal of the positive power.", working: "4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add the indices in the numerator.", working: "2^{7} \\times 2^{-3} = 2^{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract the index of the denominator.", working: "2^{4} \\div 2^{2} = 2^{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "2^2 = 4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the indices on the left to get a single power of 3.", working: "3^{x+4} = 3^{-2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equal powers of the same base have equal indices.", working: "x + 4 = -2 \\Rightarrow x = -6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write $9^2$ as a power of 3.", working: "9^2 = (3^2)^2 = 3^4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Combine the indices: multiply in the numerator, then divide.", working: "\\frac{3^4 \\times 3^{-1}}{3^2} = \\frac{3^3}{3^2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract the indices to reach the required result.", working: "3^{3-2} = 3^1 = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1$ and $\\frac{1}{16}$. (b) $4$. (c) $x = -6$. (d) $\\frac{3^3}{3^2} = 3$, as required.",
            commonErrors: ["Thinking $7^0 = 0$.", "Writing $4^{-2} = -8$ or $-16$.", "Multiplying the indices in part (b) instead of adding them.", "Writing $9^2 = 3^2$ instead of $3^4$."],
            examinerNote: "In part (d), a 'show that' question needs every step of the working shown for the final A1.",
          },
        },
      ],
    },
    {
      id: "edm9-u1-standard-form",
      title: "Standard form and calculations with it",
      skill: "Write numbers in standard form and add, multiply and divide them.",
      lesson: {
        sections: [
          {
            heading: "Writing numbers in standard form",
            body: "A number in standard form looks like $a \\times 10^n$ where $1 \\le a < 10$ and $n$ is an integer. Large numbers have a positive $n$: $45\\,000 = 4.5 \\times 10^4$. Small numbers have a negative $n$: $0.0032 = 3.2 \\times 10^{-3}$. Count how many places the decimal point moves to get a number between 1 and 10.",
          },
          {
            heading: "Calculating",
            body: "To **multiply** or **divide**, deal with the numbers and the powers of 10 separately, then tidy the result into standard form if needed. For example $(3 \\times 10^4) \\times (5 \\times 10^2) = 15 \\times 10^6 = 1.5 \\times 10^7$. To **add or subtract**, write both numbers as ordinary numbers (or with the same power of 10) first, then convert back.",
          },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a \\times 10^n$ with $1 \\le a < 10$ and $n$ an integer" },
          { name: "Multiplying and dividing", statement: "Multiply or divide the $a$ values, and add or subtract the powers of 10." },
        ],
        workedExample: {
          problem: "Work out $(6 \\times 10^{3}) \\times (4 \\times 10^{5})$. Give your answer in standard form.",
          solution: "Multiply the numbers: $6 \\times 4 = 24$. Add the powers: $10^{3} \\times 10^{5} = 10^{8}$. So the product is $24 \\times 10^{8}$, which is not yet standard form because 24 is not less than 10. Write $24 = 2.4 \\times 10$, giving $2.4 \\times 10^{9}$.",
        },
      },
      questions: [
        {
          id: "edm9-u1-standard-form-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $45\\,000$ in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5 \\times 10^{4}$" },
              { id: "b", text: "$45 \\times 10^{3}$" },
              { id: "c", text: "$4.5 \\times 10^{5}$" },
              { id: "d", text: "$0.45 \\times 10^{5}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Standard form", statement: "$a \\times 10^n$ with $1 \\le a < 10$." }],
            steps: [
              { reasoning: "Move the decimal point 4 places left to get 4.5, which lies between 1 and 10.", working: "45\\,000 = 4.5 \\times 10^{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4.5 \\times 10^4$",
            commonErrors: ["Choosing $45 \\times 10^3$, where the first number is not between 1 and 10.", "Choosing $0.45 \\times 10^5$, where the first number is less than 1."],
          },
        },
        {
          id: "edm9-u1-standard-form-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $(3 \\times 10^{4}) \\times (2.5 \\times 10^{3})$. Give your answer in the form $a \\times 10^{n}$ where $1 \\le a < 10$. Enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 7.5, tolerance: 0.001 },
              { label: "$n$", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplying in standard form", statement: "Multiply the numbers, and add the indices of 10." },
            ],
            steps: [
              { reasoning: "Multiply the decimal parts.", working: "3 \\times 2.5 = 7.5", marks: 1, markCode: "M" },
              { reasoning: "Add the indices of 10.", working: "10^{4} \\times 10^{3} = 10^{7}", marks: 1, markCode: "M" },
              { reasoning: "7.5 is between 1 and 10, so no adjustment is needed.", working: "7.5 \\times 10^{7}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.5 \\times 10^{7}$",
            commonErrors: ["Multiplying the indices to get $10^{12}$.", "Adding $3 + 2.5$ instead of multiplying."],
            examinerNote: "Accept 75 000 000 only if the standard form is also seen. A1 cao.",
          },
        },
        {
          id: "edm9-u1-standard-form-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out $(4.2 \\times 10^{5}) + (3.9 \\times 10^{4})$. Give your answer in the form $a \\times 10^{n}$ where $1 \\le a < 10$. Enter $a$ and $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 4.59, tolerance: 0.001 },
              { label: "$n$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adding in standard form", statement: "Numbers must have the same power of 10 (or be written as ordinary numbers) before they are added." },
            ],
            steps: [
              { reasoning: "Write both numbers as ordinary numbers.", working: "420\\,000 \\quad\\text{and}\\quad 39\\,000", marks: 1, markCode: "M" },
              { reasoning: "Add them.", working: "420\\,000 + 39\\,000 = 459\\,000", marks: 1, markCode: "A" },
              { reasoning: "Move the decimal point 5 places to get a number between 1 and 10.", working: "4.59 \\times 10^{5}", marks: 1, markCode: "M" },
              { reasoning: "State the final answer in standard form.", working: "a = 4.59,\\; n = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.59 \\times 10^{5}$",
            commonErrors: ["Adding the numbers and the indices separately: $8.1 \\times 10^{9}$.", "Adding $4.2 + 3.9$ without matching the powers of 10."],
            examinerNote: "Alternative: $42 \\times 10^4 + 3.9 \\times 10^4 = 45.9 \\times 10^4$ then convert. M1 for matching powers.",
          },
        },
        {
          id: "edm9-u1-standard-form-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The distance from the Earth to the Sun is $1.5 \\times 10^{8}$ km. Light travels at $3 \\times 10^{5}$ km per second. Neptune is $4.5 \\times 10^{9}$ km from the Sun.",
          parts: [
            { label: "a", prompt: "Write $1.5 \\times 10^{8}$ as an ordinary number.", marks: 1 },
            { label: "b", prompt: "Work out how many seconds light takes to travel from the Sun to the Earth.", marks: 3 },
            { label: "c", prompt: "Write your answer to part (b) in minutes, correct to 1 decimal place.", marks: 2 },
            { label: "d", prompt: "Work out how many times further from the Sun Neptune is than the Earth.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) ordinary number", answer: 150000000 },
              { label: "(b) time in seconds", answer: 500 },
              { label: "(c) time in minutes (1 d.p.)", answer: 8.3, tolerance: 0.05 },
              { label: "(d) number of times further", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Time", statement: "$\\text{time} = \\dfrac{\\text{distance}}{\\text{speed}}$" },
              { kind: "law", name: "Dividing in standard form", statement: "Divide the numbers and subtract the indices of 10." },
            ],
            steps: [
              { part: "a", reasoning: "Move the decimal point 8 places to the right.", working: "1.5 \\times 10^{8} = 150\\,000\\,000", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Use time = distance divided by speed.", working: "\\frac{1.5 \\times 10^{8}}{3 \\times 10^{5}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide the numbers and subtract the indices.", working: "0.5 \\times 10^{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "500 \\text{ seconds}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "There are 60 seconds in a minute.", working: "500 \\div 60", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round to 1 decimal place.", working: "8.333\\ldots \\approx 8.3 \\text{ minutes}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide Neptune's distance by the Earth's distance.", working: "\\frac{4.5 \\times 10^{9}}{1.5 \\times 10^{8}}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide the numbers and subtract the indices.", working: "3 \\times 10^{1}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Write as an ordinary number.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $150\\,000\\,000$. (b) $500$ seconds. (c) $8.3$ minutes. (d) $30$ times.",
            commonErrors: ["Multiplying distance by speed instead of dividing.", "Subtracting the indices the wrong way round.", "Dividing 500 by 100 instead of 60 when converting to minutes."],
            examinerNote: "Part (c) ft from part (b). Allow 8 minutes 20 seconds as an alternative form of the same time.",
          },
        },
      ],
    },
  ],
};
