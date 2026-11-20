import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "alg1-u3-3-1",
  code: "3-1",
  title: "Properties of Exponents and Radicals",
  goal: "I CAN use exponent laws and connect rational exponents with radical expressions.",
  standards: ["HSN-RN.A.1", "HSN-RN.A.2"],
  vocabulary: [
    { term: "Product of powers", definition: "For a nonzero base, multiplying powers with the same base means adding their exponents: $a^m a^n=a^{m+n}$." },
    { term: "Power of a power", definition: "Raising a power to another power means multiplying the exponents: $(a^m)^n=a^{mn}$." },
    { term: "Zero exponent", definition: "For any nonzero number $a$, $a^0=1$." },
    { term: "Negative exponent", definition: "For nonzero $a$, $a^{-n}=\\frac{1}{a^n}$; a negative exponent indicates a reciprocal." },
    { term: "Rational exponent", definition: "An exponent written as a fraction; for positive $a$, $a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m$." },
    { term: "Radical", definition: "An expression such as $\\sqrt[n]{a}$; it denotes a number whose $n$th power is $a$." },
  ],
  concepts: [
    {
      id: "alg1-u3-integer-exponent-laws",
      title: "Integer exponent laws",
      skill: "Simplify products, quotients, and powers using integer exponent laws, including zero and negative exponents.",
      lesson: {
        sections: [
          {
            heading: "Combine powers with the same base",
            body: "When multiplying powers with the same nonzero base, add exponents: $a^m a^n=a^{m+n}$. When dividing, subtract exponents: $\\frac{a^m}{a^n}=a^{m-n}$ for $a\\ne0$. These rules follow by counting repeated factors. For example, $x^3x^2=x^5$, while $\\frac{x^5}{x^2}=x^3$.",
          },
          {
            heading: "Powers of powers and products",
            body: "A power raised to a power multiplies exponents: $(a^m)^n=a^{mn}$. A power of a product applies to every factor: $(ab)^n=a^nb^n$. For example, $(2x^2)^3=8x^6$. Parentheses matter: $-x^2$ means $-(x^2)$, while $(-x)^2$ is positive.",
          },
          {
            heading: "Zero and negative exponents",
            body: "For $a\\ne0$, $a^0=1$, and $a^{-n}=\\frac{1}{a^n}$. A negative exponent does not make the value negative; it tells you to take a reciprocal. Simplify powers and coefficients separately, and leave variables with positive exponents when possible.",
          },
        ],
        keyFormulas: [
          { name: "Product and quotient", statement: "$a^m a^n=a^{m+n}$; $\\frac{a^m}{a^n}=a^{m-n}$, for $a\\ne0$" },
          { name: "Power rules", statement: "$(a^m)^n=a^{mn}$; $(ab)^n=a^nb^n$" },
          { name: "Zero and negative exponents", statement: "$a^0=1$; $a^{-n}=\\frac{1}{a^n}$, for $a\\ne0$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{(3x^2y^{-1})^2}{9xy^2}$, writing the answer with positive exponents.",
          solution: "Apply the power to each factor: $(3x^2y^{-1})^2=9x^4y^{-2}$. Divide like bases by subtracting exponents: $\\frac{9x^4y^{-2}}{9xy^2}=x^{4-1}y^{-2-2}=x^3y^{-4}$. Rewrite the negative power as a reciprocal: **$\\frac{x^3}{y^4}$**.",
        },
      },
      questions: [
        {
          id: "alg1-u3-explaws-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $x\\ne0$, which expression is equivalent to $x^4\\cdot x^{-2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^8$" },
              { id: "b", text: "$x^2$" },
              { id: "c", text: "$x^{-8}$" },
              { id: "d", text: "$2x^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product of powers", statement: "For a common nonzero base, add exponents: $a^m a^n=a^{m+n}$." },
            ],
            steps: [
              { reasoning: "The bases are the same, so add the exponents, including the negative exponent.", working: "x^4x^{-2}=x^{4+(-2)}=x^2", marks: 1, markCode: "M" },
              { reasoning: "Match the simplified expression to the choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $x^2$",
            commonErrors: ["Multiplying the exponents instead of adding them.", "Treating the negative exponent as a negative value instead of an exponent."],
          },
        },
        {
          id: "alg1-u3-explaws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{(2a^3)^2}{4a}$ for $a\\ne0$. Enter the numerical coefficient.",
          response: { type: "numeric", parts: [{ label: "Coefficient", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a product", statement: "$(ab)^n=a^nb^n$." },
              { kind: "law", name: "Quotient of powers", statement: "$a^m/a^n=a^{m-n}$ for $a\\ne0$." },
            ],
            steps: [
              { reasoning: "Square both the coefficient and the power of $a$.", working: "(2a^3)^2=4a^6", marks: 1, markCode: "M" },
              { reasoning: "Divide the coefficients and subtract exponents for the like bases.", working: "\\frac{4a^6}{4a}=a^{6-1}=a^5", marks: 1, markCode: "M" },
              { reasoning: "The simplified expression has coefficient 1.", working: "1a^5=a^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a^5$; numerical coefficient $1$.",
            commonErrors: ["Squaring $a^3$ as $a^5$ rather than $a^6$.", "Subtracting exponents in the wrong order."],
          },
        },
        {
          id: "alg1-u3-explaws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $\\left(\\frac{6m^{-2}n^3}{3mn^{-1}}\\right)^{-1}$ for nonzero $m$ and $n$. Before rewriting with positive exponents, express the result as a product of powers and enter the exponents of $m$ and $n$, respectively.",
          response: { type: "numeric", parts: [{ label: "$m$ exponent", answer: 3 }, { label: "$n$ exponent", answer: -4 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient of powers", statement: "$a^p/a^q=a^{p-q}$ for $a\\ne0$." },
              { kind: "law", name: "Power of a power", statement: "$(a^p)^q=a^{pq}$." },
            ],
            steps: [
              { reasoning: "Reduce the numerical coefficient and subtract exponents in the quotient.", working: "\\frac{6m^{-2}n^3}{3mn^{-1}}=2m^{-3}n^4", marks: 1, markCode: "M" },
              { reasoning: "Apply the outer exponent $-1$ to the coefficient and each variable power.", working: "(2m^{-3}n^4)^{-1}=2^{-1}m^3n^{-4}", marks: 1, markCode: "M" },
              { reasoning: "Rewrite the negative coefficient exponent as a reciprocal.", working: "2^{-1}m^3n^{-4}=\\frac{m^3}{2n^4}", marks: 1, markCode: "A" },
              { reasoning: "Read the requested variable exponents from the positive-exponent expression (equivalently, the exponent of $n$ in the unsimplified reciprocal form is $-4$).", working: "m: 3;\\quad n: -4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{m^3}{2n^4}$; exponent of $m$ is $3$ and exponent of $n$ is $-4$ in the power form $2^{-1}m^3n^{-4}$.",
            commonErrors: ["Forgetting to multiply each exponent by the outer $-1$.", "Changing the coefficient to $2$ instead of $\\frac12$."],
          },
        },
        {
          id: "alg1-u3-explaws-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "For nonzero $x$ and $y$, consider $E=\\frac{(2x^{-2}y^3)^2}{4xy^{-1}}$.",
          parts: [
            { label: "a", prompt: "Expand the numerator using the power of a product rule.", marks: 2 },
            { label: "b", prompt: "Simplify the quotient by combining like bases.", marks: 2 },
            { label: "c", prompt: "Rewrite the result using only positive exponents.", marks: 2 },
            { label: "d", prompt: "Explain why the original expression requires both $x$ and $y$ to be nonzero.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Power of a product", statement: "$(ab)^n=a^nb^n$." },
              { kind: "law", name: "Quotient of powers", statement: "$a^m/a^n=a^{m-n}$ for nonzero $a$." },
              { kind: "property", name: "Negative exponents", statement: "$a^{-n}=1/a^n$ for nonzero $a$." },
            ],
            steps: [
              { part: "a", reasoning: "Squaring applies to the coefficient and to each factor separately.", working: "(2x^{-2}y^3)^2=4x^{-4}y^6", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The coefficients cancel; subtract denominator exponents from numerator exponents.", working: "E=\\frac{4x^{-4}y^6}{4xy^{-1}}=x^{-5}y^7", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Move the factor with a negative exponent to the denominator.", working: "x^{-5}y^7=\\frac{y^7}{x^5}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The expression has $x$ and $y$ in denominator factors through negative powers; zero bases would make those reciprocal powers undefined. The explicit denominator also contains $x$ and $y^{-1}$.", working: "x^{-2}=\\frac{1}{x^2},\\quad y^{-1}=\\frac{1}{y};\\quad x\\ne0,\\ y\\ne0", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $4x^{-4}y^6$; (b) $x^{-5}y^7$; (c) $\\frac{y^7}{x^5}$; (d) $x$ and $y$ must be nonzero because negative powers are reciprocals.",
            commonErrors: ["Applying the outer square to the variables but not the coefficient.", "Adding rather than subtracting exponents when dividing.", "Claiming a negative exponent makes a base negative."],
          },
        },
      ],
    },
    {
      id: "alg1-u3-rational-exponents-radicals",
      title: "Rational exponents and radicals",
      skill: "Rewrite rational exponents as radicals and simplify exact radical expressions using exponent properties.",
      lesson: {
        sections: [
          {
            heading: "Fractions in the exponent",
            body: "For a positive base $a$, the denominator of a rational exponent names the root and the numerator names the power: $a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m$. For example, $27^{2/3}=(\\sqrt[3]{27})^2=3^2=9$.",
          },
          {
            heading: "Radicals as fractional powers",
            body: "A radical can be written as a rational exponent: $\\sqrt[n]{a}=a^{1/n}$. For even roots in the real number system, the radicand must be nonnegative, and the principal square root is nonnegative. Odd roots of negative numbers are real, such as $\\sqrt[3]{-8}=-2$.",
          },
          {
            heading: "Simplify strategically",
            body: "Factor a radicand into perfect powers before extracting roots, or rewrite a radical as a rational exponent and use exponent laws. For instance, $\\sqrt{72}=\\sqrt{36\\cdot2}=6\\sqrt2$. Keep exact answers in radical form unless a decimal is requested.",
          },
        ],
        keyFormulas: [
          { name: "Rational exponent", statement: "$a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m$ for positive $a$" },
          { name: "Radical as a power", statement: "$\\sqrt[n]{a}=a^{1/n}$" },
        ],
        workedExample: {
          problem: "Simplify $16^{3/4}$.",
          solution: "The denominator 4 indicates a fourth root and the numerator 3 indicates a cube: $16^{3/4}=(\\sqrt[4]{16})^3$. Since $\\sqrt[4]{16}=2$, the value is $2^3=8$. **Answer: 8.**",
        },
      },
      questions: [
        {
          id: "alg1-u3-radicals-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For positive $x$, which radical is equivalent to $x^{3/5}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt[3]{x^5}$" },
              { id: "b", text: "$\\sqrt[5]{x^3}$" },
              { id: "c", text: "$5\\sqrt{x^3}$" },
              { id: "d", text: "$\\sqrt[5]{3x}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rational exponent", statement: "$x^{m/n}=\\sqrt[n]{x^m}$ for positive $x$." },
            ],
            steps: [
              { reasoning: "The denominator 5 gives the index of the root; the numerator 3 is the power.", working: "x^{3/5}=\\sqrt[5]{x^3}", marks: 1, markCode: "M" },
              { reasoning: "Select the expression with fifth root and third power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\sqrt[5]{x^3}$",
            commonErrors: ["Reversing the numerator and denominator.", "Reading the denominator as a coefficient outside a square root."],
          },
        },
        {
          id: "alg1-u3-radicals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate $81^{3/4}$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rational exponent", statement: "$a^{m/n}=(\\sqrt[n]{a})^m$ for positive $a$." },
            ],
            steps: [
              { reasoning: "The denominator 4 specifies the fourth root.", working: "\\sqrt[4]{81}=3", marks: 1, markCode: "M" },
              { reasoning: "The numerator 3 specifies the power after taking the root.", working: "81^{3/4}=3^3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the cube.", working: "3^3=27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
            commonErrors: ["Computing $81^3$ before taking a fourth root, without simplifying.", "Using a square root instead of a fourth root."],
          },
        },
        {
          id: "alg1-u3-radicals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $\\sqrt{50}+\\sqrt{8}$ exactly. Enter the coefficient of $\\sqrt{2}$.",
          response: { type: "numeric", parts: [{ label: "Coefficient", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Extracting perfect-square factors", statement: "$\\sqrt{ab}=\\sqrt a\\sqrt b$ for nonnegative $a,b$, and perfect-square factors can be taken outside the radical." },
              { kind: "property", name: "Like radicals", statement: "Like radical terms combine by adding their coefficients." },
            ],
            steps: [
              { reasoning: "Factor each radicand to separate a perfect square.", working: "\\sqrt{50}=\\sqrt{25\\cdot2}=5\\sqrt2;\\quad \\sqrt8=\\sqrt{4\\cdot2}=2\\sqrt2", marks: 2, markCode: "M" },
              { reasoning: "The radicals are like terms, so add their coefficients.", working: "5\\sqrt2+2\\sqrt2=7\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "The coefficient of $\\sqrt2$ is 7.", working: "7\\sqrt2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7\\sqrt2$; coefficient $7$.",
            commonErrors: ["Adding radicands before taking square roots.", "Leaving a perfect-square factor under the radical."],
          },
        },
        {
          id: "alg1-u3-radicals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "For positive $x$, let $P=x^{1/2}x^{3/2}$ and $Q=\\sqrt[3]{x^6}$.",
          parts: [
            { label: "a", prompt: "Rewrite $P$ as a single power of $x$.", marks: 2 },
            { label: "b", prompt: "Rewrite $P$ as a radical expression and simplify it.", marks: 2 },
            { label: "c", prompt: "Rewrite $Q$ as a power and simplify it.", marks: 2 },
            { label: "d", prompt: "Find the positive value of $x$ for which $P=16$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) exponent of $x$", answer: 2 },
              { label: "(b) exponent of $x$", answer: 2 },
              { label: "(c) exponent of $x$", answer: 2 },
              { label: "(d) value of $x$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product of powers", statement: "$x^m x^n=x^{m+n}$." },
              { kind: "formula", name: "Rational exponent", statement: "$x^{m/n}=\\sqrt[n]{x^m}$ for positive $x$." },
            ],
            steps: [
              { part: "a", reasoning: "Add the exponents because the factors have the same base.", working: "P=x^{1/2+3/2}=x^2", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A square root is the one-half power; simplify the resulting square root of a square for positive $x$.", working: "P=\\sqrt{x}\\,\\sqrt{x^3}=\\sqrt{x^4}=x^2", marks: 2, markCode: "A" },
              { part: "c", reasoning: "A cube root is a one-third power, so multiply the exponent by one-third.", working: "Q=(x^6)^{1/3}=x^2", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Use $P=x^2$ and solve the equation; the positive condition selects the positive root.", working: "x^2=16\\implies x=4", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $x^2$ (exponent 2); (b) $x^2$ (exponent 2); (c) $x^2$ (exponent 2); (d) $x=4$.",
            commonErrors: ["For part (b), reporting an exponent of 1 for $\\sqrt{x}\\sqrt{x^3}$; the product is $x^2$.", "Including $x=-4$ in part (d), despite the stated positive condition."],
          },
        },
      ],
    },
  ],
};
