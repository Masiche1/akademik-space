import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m8-u6-lesson-6-1",
  code: "6-1",
  title: "Integer Exponents and Scientific Notation",
  goal: "I CAN apply exponent rules, convert between standard and scientific notation, and perform operations with scientific notation.",
  standards: ["8.EE.A.1", "8.EE.A.3", "8.EE.A.4"],
  vocabulary: [
    {
      term: "Exponent",
      definition:
        "The number that indicates how many times a base is used as a factor.",
    },
    { term: "Base", definition: "The number being raised to a power." },
    {
      term: "Scientific notation",
      definition:
        "A way of writing very large or very small numbers as $a \\times 10^n$ where $1 \\leq |a| < 10$.",
    },
    {
      term: "Order of magnitude",
      definition: "The power of 10 in scientific notation.",
    },
    {
      term: "Exponent rules",
      definition: "Laws governing operations on exponents.",
    },
    { term: "Standard form", definition: "Regular decimal notation." },
  ],
  concepts: [
    {
      id: "m8-u6-exponent-rules",
      title: "Exponent rules",
      skill:
        "Apply rules for multiplying, dividing, and raising powers with exponents.",
      lesson: {
        sections: [
          {
            heading: "Product and quotient rules",
            body: "When multiplying powers with the same base: add exponents. $2^3 \\times 2^4 = 2^{3+4} = 2^7$. When dividing: subtract exponents. $\\frac{5^6}{5^2} = 5^{6-2} = 5^4$.",
          },
          {
            heading: "Power of a power",
            body: "When raising a power to a power: multiply exponents. $(3^2)^4 = 3^{2 \\times 4} = 3^8$. For products: $(2x)^3 = 8x^3$.",
          },
          {
            heading: "Negative exponents",
            body: "$a^{-n} = \\frac{1}{a^n}$: $2^{-3} = \\frac{1}{8}$. For fractions: $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.",
          },
        ],
        keyFormulas: [
          { name: "Product", statement: "$a^m \\times a^n = a^{m+n}$" },
          { name: "Quotient", statement: "$\\frac{a^m}{a^n} = a^{m-n}$" },
          { name: "Power", statement: "$(a^m)^n = a^{mn}$" },
          { name: "Negative", statement: "$a^{-n} = \\frac{1}{a^n}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{(2^3)^2}{2^4}$.",
          solution: "$(2^3)^2 = 2^6$; $\\frac{2^6}{2^4} = 2^{6-4} = 2^2 = 4$.",
        },
      },
      questions: [
        {
          id: "m8-u6-exponent-rules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $2^3 \\times 2^4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2^7$" },
              { id: "b", text: "$2^{12}$" },
              { id: "c", text: "$4^7$" },
              { id: "d", text: "$2^1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Product rule",
                statement: "$a^m \\times a^n = a^{m+n}$",
              },
            ],
            steps: [
              {
                reasoning: "$2^3 \\times 2^4 = 2^{3+4} = 2^7$.",
                evidence: "2^7",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $2^7$",
            commonErrors: ["Multiplying exponents instead of adding."],
          },
        },
        {
          id: "m8-u6-exponent-rules-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\frac{5^8}{5^3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Exponent", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Quotient rule",
                statement: "$\\frac{a^m}{a^n} = a^{m-n}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{5^8}{5^3} = 5^{8-3} = 5^5$.",
                working: "5^5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5^5$",
            commonErrors: ["Subtracting bases instead of exponents."],
          },
        },
        {
          id: "m8-u6-exponent-rules-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify each expression.",
          parts: [
            { label: "a", prompt: "$(3^2)^4$", marks: 1 },
            { label: "b", prompt: "$2^{-3}$", marks: 1 },
            { label: "c", prompt: "$\\frac{x^7}{x^2}$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Power rule",
                statement: "$(a^m)^n = a^{mn}$",
              },
              {
                kind: "formula",
                name: "Negative exponent",
                statement: "$a^{-n} = \\frac{1}{a^n}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(3^2)^4 = 3^{2 \\times 4} = 3^8$.",
                evidence: "3^8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.",
                evidence: "1/8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{x^7}{x^2} = x^{7-2} = x^5$.",
                evidence: "x^5",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $3^8$ (b) $\\frac{1}{8}$ (c) $x^5$",
            commonErrors: [
              "In (b), thinking negative exponent makes negative result.",
            ],
          },
        },
        {
          id: "m8-u6-exponent-rules-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify each expression.",
          parts: [
            { label: "a", prompt: "$4^3 \\times 4^2 \\div 4^4$", marks: 2 },
            { label: "b", prompt: "$(2^5)^3 \\div 2^7$", marks: 2 },
            { label: "c", prompt: "$\\frac{(3^4)^2}{3^6}$", marks: 2 },
            { label: "d", prompt: "$5^{-2} \\times 5^5$", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Product rule",
                statement: "$a^m \\times a^n = a^{m+n}$",
              },
              {
                kind: "formula",
                name: "Quotient rule",
                statement: "$\\frac{a^m}{a^n} = a^{m-n}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$4^{3+2-4} = 4^1 = 4$.",
                evidence: "4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$2^{15-7} = 2^8 = 256$.",
                evidence: "256",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$3^{8-6} = 3^2 = 9$.",
                evidence: "9",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$5^{-2+5} = 5^3 = 125$.",
                evidence: "125",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $4$ (b) $256$ (c) $9$ (d) $125$",
            commonErrors: ["In (d), mishandling negative exponents."],
          },
        },
      ],
    },
    {
      id: "m8-u6-scientific-notation",
      title: "Scientific notation",
      skill:
        "Convert between standard and scientific notation and perform operations.",
      lesson: {
        sections: [
          {
            heading: "Converting to scientific notation",
            body: "To write $45,000$ in scientific notation: move decimal left until one nonzero digit before it: $4.5 \\times 10^4$. For small numbers: $0.00032 = 3.2 \\times 10^{-4}$.",
          },
          {
            heading: "Converting from scientific notation",
            body: "$3.7 \\times 10^5 = 370,000$; $2.1 \\times 10^{-3} = 0.0021$. Positive exponent → move decimal right; negative → move left.",
          },
          {
            heading: "Operations with scientific notation",
            body: "Multiply: $(2 \\times 10^3)(3 \\times 10^4) = 6 \\times 10^7$. Divide: $\\frac{8 \\times 10^6}{2 \\times 10^2} = 4 \\times 10^4$. Add/subtract: convert to same exponent first.",
          },
        ],
        keyFormulas: [
          {
            name: "To scientific",
            statement: "$a \\times 10^n$ where $1 \\leq |a| < 10$",
          },
          {
            name: "Multiply",
            statement: "Multiply coefficients, add exponents",
          },
          {
            name: "Divide",
            statement: "Divide coefficients, subtract exponents",
          },
        ],
        workedExample: {
          problem: "Write $0.00045$ in scientific notation.",
          solution: "Move decimal right 4 places: $4.5 \\times 10^{-4}$.",
        },
      },
      questions: [
        {
          id: "m8-u6-scientific-notation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $56,000$ in scientific notation.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5.6 \\times 10^4$" },
              { id: "b", text: "$5.6 \\times 10^5$" },
              { id: "c", text: "$56 \\times 10^3$" },
              { id: "d", text: "$5.6 \\times 10^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scientific notation",
                statement: "$1 \\leq |a| < 10$.",
              },
            ],
            steps: [
              {
                reasoning: "Move decimal 4 places left: $5.6 \\times 10^4$.",
                evidence: "5.6e4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $5.6 \\times 10^4$",
            commonErrors: ["Wrong exponent sign or value."],
          },
        },
        {
          id: "m8-u6-scientific-notation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $0.00078$ in scientific notation.",
          response: {
            type: "numeric",
            parts: [{ label: "Exponent", answer: -4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scientific notation",
                statement: "Small numbers get negative exponents.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Move decimal right 4 places: $7.8 \\times 10^{-4}$.",
                working: "7.8 \\times 10^{-4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "-4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$7.8 \\times 10^{-4}$",
            commonErrors: ["Positive exponent for small number."],
          },
        },
        {
          id: "m8-u6-scientific-notation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert each to scientific notation.",
          parts: [
            { label: "a", prompt: "$3,200,000$", marks: 1 },
            { label: "b", prompt: "$0.000065$", marks: 1 },
            { label: "c", prompt: "$89,000,000$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scientific notation",
                statement: "$1 \\leq |a| < 10$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$3.2 \\times 10^6$.",
                evidence: "3.2e6",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$6.5 \\times 10^{-5}$.",
                evidence: "6.5e-5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$8.9 \\times 10^7$.",
                evidence: "8.9e7",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $3.2 \\times 10^6$ (b) $6.5 \\times 10^{-5}$ (c) $8.9 \\times 10^7$",
            commonErrors: ["Wrong exponent for small number."],
          },
        },
        {
          id: "m8-u6-scientific-notation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compute each expression.",
          parts: [
            {
              label: "a",
              prompt: "$(2 \\times 10^3)(3 \\times 10^4)$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "$\\frac{8 \\times 10^6}{2 \\times 10^2}$",
              marks: 2,
            },
            {
              label: "c",
              prompt: "$(4 \\times 10^{-2})(5 \\times 10^5)$",
              marks: 2,
            },
            {
              label: "d",
              prompt: "$\\frac{6 \\times 10^8}{3 \\times 10^{-3}}$",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scientific notation operations",
                statement: "Multiply/divide coefficients and exponents.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$6 \\times 10^{3+4} = 6 \\times 10^7$.",
                evidence: "6e7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$4 \\times 10^{6-2} = 4 \\times 10^4$.",
                evidence: "4e4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$20 \\times 10^{3} = 2 \\times 10^4$ (normalize coefficient).",
                evidence: "2e4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$2 \\times 10^{8-(-3)} = 2 \\times 10^{11}$.",
                evidence: "2e11",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $6 \\times 10^7$ (b) $4 \\times 10^4$ (c) $2 \\times 10^4$ (d) $2 \\times 10^{11}$",
            commonErrors: ["In (c), not normalizing coefficient."],
          },
        },
      ],
    },
    {
      id: "m8-u6-scientific-applications",
      title: "Scientific notation applications",
      skill:
        "Apply scientific notation to real-world problems and comparisons.",
      lesson: {
        sections: [
          {
            heading: "Real-world examples",
            body: "Scientific notation is used for very large numbers (distance to stars: $4.2 \\times 10^{16}$ m) and very small numbers (size of atoms: $1 \\times 10^{-10}$ m). It makes calculations manageable.",
          },
          {
            heading: "Comparing magnitudes",
            body: "To compare numbers in scientific notation, compare exponents first, then coefficients. $3 \\times 10^8 > 9 \\times 10^7$ because $10^8 > 10^7$. For same exponent, compare coefficients: $5 \\times 10^6 > 2 \\times 10^6$.",
          },
          {
            heading: "Problem solving",
            body: "Population growth: if population is $7 \\times 10^9$ and grows $1\\%$ per year, increase = $7 \\times 10^7$. Distance: if light travels $3 \\times 10^8$ m/s, in one year it travels $9.5 \\times 10^{15}$ m.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare",
            statement: "Compare exponents, then coefficients",
          },
          {
            name: "Order of magnitude",
            statement: "Power of 10 in scientific notation",
          },
          {
            name: "Application",
            statement: "Use for very large/small numbers",
          },
        ],
        workedExample: {
          problem: "Which is larger: $4.5 \\times 10^7$ or $8.2 \\times 10^6$?",
          solution: "$10^7 > 10^6$, so $4.5 \\times 10^7 > 8.2 \\times 10^6$.",
        },
      },
      questions: [
        {
          id: "m8-u6-scientific-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is larger: $3 \\times 10^6$ or $7 \\times 10^5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3 \\times 10^6$" },
              { id: "b", text: "$7 \\times 10^5$" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Compare exponents first.",
              },
            ],
            steps: [
              {
                reasoning: "$10^6 > 10^5$ → $3 \\times 10^6 > 7 \\times 10^5$.",
                evidence: "3e6",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $3 \\times 10^6$",
            commonErrors: ["Comparing coefficients instead of exponents."],
          },
        },
        {
          id: "m8-u6-scientific-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The distance to the Sun is approximately $1.5 \\times 10^8$ km. How many times greater is this than Earth's distance to the Moon ($3.8 \\times 10^5$ km)?",
          response: {
            type: "numeric",
            parts: [{ label: "Times greater", answer: 395 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Division",
                statement: "Divide coefficients and exponents.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{1.5 \\times 10^8}{3.8 \\times 10^5} = \\frac{1.5}{3.8} \\times 10^{8-5} = 0.395 \\times 10^3 \\approx 395$.",
                working: "395",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "395",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\approx 395$ times",
            commonErrors: ["Not adjusting exponent correctly."],
          },
        },
        {
          id: "m8-u6-scientific-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these from least to greatest: $2 \\times 10^4, 9 \\times 10^3, 5 \\times 10^4, 1 \\times 10^5$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ordering",
                statement: "Compare exponents then coefficients.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert: $9 \\times 10^3 = 0.9 \\times 10^4$; compare: $0.9 < 2 < 5 < 10$ (for $10^4$ coefficient).",
                working: "9e3, 2e4, 5e4, 1e5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Order: $9 \\times 10^3 < 2 \\times 10^4 < 5 \\times 10^4 < 1 \\times 10^5$.",
                working: "9e3 < 2e4 < 5e4 < 1e5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working:
                  "9 \\times 10^3, 2 \\times 10^4, 5 \\times 10^4, 1 \\times 10^5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$9 \\times 10^3 < 2 \\times 10^4 < 5 \\times 10^4 < 1 \\times 10^5$",
            commonErrors: ["Not normalizing exponents."],
          },
        },
        {
          id: "m8-u6-scientific-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A virus is $2 \\times 10^{-7}$ m wide. How many fit across a $1$ mm ($1 \\times 10^{-3}$ m) line?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Population is $7.5 \\times 10^9$. If it grows by $2\\%$, what is the increase?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Light travels $3 \\times 10^8$ m/s. How far in one hour?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Which is larger: $6.7 \\times 10^{22}$ kg or $5.97 \\times 10^{24}$ kg?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number", answer: 5000 },
              { label: "(b) Increase", answer: 150000000 },
              { label: "(c) Distance (m)", answer: 1080000000000 },
              { label: "(d) Larger", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Scientific notation applications",
                statement: "Use for real-world problems.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\frac{1 \\times 10^{-3}}{2 \\times 10^{-7}} = 0.5 \\times 10^4 = 5000$.",
                working: "5000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$7.5 \\times 10^9 \\times 0.02 = 0.15 \\times 10^9 = 1.5 \\times 10^8 = 150,000,000$.",
                working: "1.5e8",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$3 \\times 10^8 \\times 3600 = 1080 \\times 10^8 = 1.08 \\times 10^{11}$ m.",
                working: "1.08e11",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$10^{24} > 10^{22}$ → $5.97 \\times 10^{24}$ is larger (Earth's mass).",
                working: "5.97e24",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $5000$ (b) $1.5 \\times 10^8$ (c) $1.08 \\times 10^{11}$ m (d) $5.97 \\times 10^{24}$ kg",
            commonErrors: ["In (c), not converting hours to seconds."],
          },
        },
      ],
    },
  ],
};
