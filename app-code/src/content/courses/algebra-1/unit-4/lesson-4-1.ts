import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "alg1-u4-4-1",
  code: "4-1",
  title: "Operations with Polynomials",
  goal: "I CAN add, subtract, classify, and multiply polynomials, including products that follow special patterns.",
  standards: ["HSA-APR.A.1", "HSA-SSE.A.1"],
  vocabulary: [
    { term: "Polynomial", definition: "An expression formed by adding or subtracting terms whose variables have nonnegative integer exponents." },
    { term: "Term", definition: "A number, a variable, or a product of numbers and variables separated from other terms by addition or subtraction." },
    { term: "Like terms", definition: "Terms with the same variable raised to the same exponent; their coefficients may differ." },
    { term: "Degree of a polynomial", definition: "The greatest exponent of the variable after the polynomial is written in standard form." },
    { term: "Standard form", definition: "A polynomial written with terms in descending order of exponent." },
    { term: "Binomial", definition: "A polynomial with exactly two nonzero terms." },
    { term: "Leading coefficient", definition: "The coefficient of the term with the greatest exponent in a polynomial in standard form." },
  ],
  concepts: [
    {
      id: "alg1-u4-operations-combine",
      title: "Add, subtract, and classify polynomials",
      skill: "Combine like terms, distribute subtraction, and classify a polynomial by its terms and degree.",
      lesson: {
        sections: [
          {
            heading: "Combine like terms",
            body: "To add polynomials, remove parentheses and combine only like terms. Like terms have identical variable parts, including the same exponents: $5x^2$ and $-2x^2$ are like terms, but $5x^2$ and $5x$ are not. Write the result in standard form, with exponents decreasing from left to right.",
          },
          {
            heading: "Subtract carefully",
            body: "Subtraction means adding the opposite of every term in the second polynomial. Distribute the minus sign across the entire expression before combining like terms. For example, $ (3x^2+2x)-(x^2-4x+1)=3x^2+2x-x^2+4x-1=2x^2+6x-1$.",
          },
          {
            heading: "Classify by terms and degree",
            body: "Count the nonzero terms to name a polynomial as a monomial, binomial, or trinomial. Its degree is the greatest exponent after combining like terms. A nonzero constant has degree 0. The zero polynomial is a special case: it has no defined degree.",
          },
        ],
        keyFormulas: [
          { name: "Addition of polynomials", statement: "$(a+b)+(c+d)=a+b+c+d$; combine like terms." },
          { name: "Subtraction of polynomials", statement: "$P(x)-Q(x)=P(x)+(-1)Q(x)$; change the sign of every term in $Q(x)$." },
        ],
        workedExample: {
          problem: "Simplify and classify $(4x^3-2x+5)-(x^3+3x^2-6x+1)$.",
          solution: "Distribute the subtraction sign to every term in the second polynomial: $4x^3-2x+5-x^3-3x^2+6x-1$. Combine like terms and arrange by descending exponent: $3x^3-3x^2+4x+4$. There are four terms and the greatest exponent is 3, so this is a cubic polynomial with four terms.",
        },
      },
      questions: [
        {
          id: "alg1-u4-operations-combine-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Simplify $(3x^2+2x-1)+(x^2-5x+4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x^2+7x+3$" },
              { id: "b", text: "$4x^2-3x+3$" },
              { id: "c", text: "$4x^2-3x-5$" },
              { id: "d", text: "$3x^4-10x+3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Like terms", statement: "Terms with the same variable and exponent can be combined by adding their coefficients." },
              { kind: "property", name: "Polynomial addition", statement: "Adding polynomials preserves the sign of each term before like terms are combined." },
            ],
            steps: [
              { reasoning: "Group terms with matching powers of $x$ and add coefficients.", working: "(3+1)x^2+(2-5)x+(-1+4)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each coefficient sum.", working: "4x^2-3x+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4x^2-3x+3$",
            commonErrors: ["Multiplying exponents when adding like terms.", "Subtracting or changing signs despite the addition sign."],
          },
        },
        {
          id: "alg1-u4-operations-combine-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $5x^2-3x+2-(2x^2+4x-7)$. Give your answer in standard form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$-(a+b+c)=-a-b-c$; multiplying a sum by $-1$ changes every term's sign." },
              { kind: "definition", name: "Standard form", statement: "Write polynomial terms in descending order of exponent." },
            ],
            steps: [
              { reasoning: "Distribute the negative sign to every term inside the second parentheses.", working: "5x^2-3x+2-2x^2-4x+7", marks: 1, markCode: "M" },
              { reasoning: "Combine coefficients of the quadratic and linear terms, and combine constants.", working: "(5-2)x^2+(-3-4)x+(2+7)", marks: 1, markCode: "M" },
              { reasoning: "Write the simplified polynomial in descending powers.", working: "3x^2-7x+9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x^2-7x+9$",
            commonErrors: ["Changing only the first sign inside the subtracted polynomial.", "Combining terms with different exponents."],
          },
        },
        {
          id: "alg1-u4-operations-combine-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Simplify $2x^3+4x^2-x+3-(x^3-2x^2+5x-1)$, then state its degree and number of terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "Subtracting a polynomial changes the sign of every term in it." },
              { kind: "definition", name: "Degree", statement: "The degree is the greatest exponent with a nonzero coefficient after simplification." },
              { kind: "definition", name: "Terms", statement: "Terms are separated by addition or subtraction; count nonzero terms after simplification." },
            ],
            steps: [
              { reasoning: "Distribute subtraction throughout the second polynomial.", working: "2x^3+4x^2-x+3-x^3+2x^2-5x+1", marks: 1, markCode: "M" },
              { reasoning: "Combine the like terms to simplify accurately.", working: "x^3+6x^2-6x+4", marks: 1, markCode: "A" },
              { reasoning: "The largest exponent present is 3, so the degree is 3.", working: "\\text{degree}=3", marks: 1, markCode: "B" },
              { reasoning: "The simplified expression has four nonzero terms.", working: "\\text{number of terms}=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$x^3+6x^2-6x+4$; degree 3; four terms (a cubic polynomial with four terms).",
            commonErrors: ["Reporting degree 2 because the quadratic term appears first before combining.", "Counting terms before simplifying."],
          },
        },
        {
          id: "alg1-u4-operations-combine-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A theater models its weekly net revenue, in dollars, using the polynomial $R(x)=4x^2+7x+12$. Its weekly costs are modeled by $C(x)=x^2-5x+8$, where $x$ is the number of promotional events.",
          parts: [
            { label: "a", prompt: "Find the polynomial that models revenue plus costs, $R(x)+C(x)$, in standard form.", marks: 3 },
            { label: "b", prompt: "Find and simplify $R(x)-C(x)$.", marks: 3 },
            { label: "c", prompt: "Classify the polynomial from part (b) by degree and number of terms. Explain.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Polynomial operations", statement: "Add or subtract coefficients of like terms; unlike powers remain separate." },
              { kind: "law", name: "Distributive property", statement: "In $P(x)-Q(x)$, the subtraction sign changes every sign in $Q(x)$." },
              { kind: "definition", name: "Polynomial classification", statement: "Degree is the largest exponent, and the number of terms counts nonzero terms in simplified form." },
            ],
            steps: [
              { part: "a", reasoning: "Combine coefficients of the matching squared, linear, and constant terms.", working: "(4+1)x^2+(7-5)x+(12+8)", marks: 2, markCode: "M" },
              { part: "a", reasoning: "Write the result in standard form.", working: "R(x)+C(x)=5x^2+2x+20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Distribute the minus sign across all terms of $C(x)$.", working: "4x^2+7x+12-x^2+5x-8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Combine like terms and simplify.", working: "R(x)-C(x)=3x^2+12x+4", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Identify the largest exponent and count the nonzero terms in the simplified result.", working: "\\text{degree}=2;\\quad \\text{terms}=3", marks: 2, markCode: "B" },
              { part: "c", reasoning: "A degree-2 polynomial with three terms is a quadratic trinomial.", working: "\\text{quadratic trinomial}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $5x^2+2x+20$. (b) $3x^2+12x+4$. (c) Degree 2, three terms: a quadratic trinomial.",
            commonErrors: ["For part (b), not changing the signs of all three cost terms.", "Calling the result a trinomial based on the unsimplified expression instead of the simplified result."],
            examinerNote: "For part (c), award the classification only when the student indicates both degree 2 and three terms, or gives the equivalent name quadratic trinomial.",
          },
        },
      ],
    },
    {
      id: "alg1-u4-polynomial-products",
      title: "Multiply polynomials and use special products",
      skill: "Use the distributive property to multiply polynomials and recognize square and conjugate products.",
      lesson: {
        sections: [
          {
            heading: "Distribute every term",
            body: "Multiply a monomial by a polynomial by multiplying it by **each** term. For two binomials, distribute each term of the first factor across the second, then combine like terms. The area model can help organize the four partial products without missing one.",
          },
          {
            heading: "Three useful product patterns",
            body: "Two conjugates have opposite middle signs: $(a+b)(a-b)=a^2-b^2$. A binomial square has a doubled cross term: $(a+b)^2=a^2+2ab+b^2$ and $(a-b)^2=a^2-2ab+b^2$. These patterns follow from distribution; the middle term in a square is not omitted.",
          },
          {
            heading: "Check the structure",
            body: "After multiplying, combine like terms and arrange in standard form. Check the degree: multiplying a degree-$m$ polynomial by a degree-$n$ polynomial gives a product of degree $m+n$ when the leading coefficients are nonzero. Substitution of a convenient value can also help verify an expansion.",
          },
        ],
        keyFormulas: [
          { name: "Distributive property", statement: "$a(b+c)=ab+ac$" },
          { name: "Difference of squares", statement: "$(a+b)(a-b)=a^2-b^2$" },
          { name: "Square of a binomial", statement: "$(a\\u00b1b)^2=a^2\\u00b12ab+b^2$" },
        ],
        workedExample: {
          problem: "Expand and simplify $(2x-3)(x+4)$.",
          solution: "Distribute each term in the first factor: $(2x)(x)+(2x)(4)+(-3)(x)+(-3)(4)=2x^2+8x-3x-12$. Combine the like terms to obtain $2x^2+5x-12$.",
        },
      },
      questions: [
        {
          id: "alg1-u4-polynomial-products-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand $3x(2x-5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6x^2-5$" },
              { id: "b", text: "$6x^2+15x$" },
              { id: "c", text: "$6x-15$" },
              { id: "d", text: "$6x^2-15x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "$a(b+c)=ab+ac$; multiply the outside factor by every term inside." },
              { kind: "property", name: "Exponent rule", statement: "$x^m x^n=x^{m+n}$ for nonnegative integer exponents." },
            ],
            steps: [
              { reasoning: "Multiply $3x$ by each term in the parentheses.", working: "3x(2x)+3x(-5)", marks: 1, markCode: "M" },
              { reasoning: "Multiply coefficients and combine the powers of $x$ correctly.", working: "6x^2-15x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $6x^2-15x$",
            commonErrors: ["Multiplying the outside factor by only the first term.", "Adding exponents when multiplying the coefficients rather than the variables."],
          },
        },
        {
          id: "alg1-u4-polynomial-products-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand and simplify $(x+3)(x-5)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive property", statement: "Each term in one factor is multiplied by each term in the other factor." },
              { kind: "definition", name: "Like terms", statement: "The linear terms can be combined because each has the same variable to the first power." },
            ],
            steps: [
              { reasoning: "Generate all four products using distribution.", working: "x^2-5x+3x-15", marks: 1, markCode: "M" },
              { reasoning: "Combine the two like linear terms.", working: "x^2-2x-15", marks: 1, markCode: "M" },
              { reasoning: "State the fully simplified product.", working: "x^2-2x-15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2-2x-15$",
            commonErrors: ["Writing $x^2-15$ and omitting the cross terms.", "Adding $-5x$ and $3x$ with the wrong sign."],
          },
        },
        {
          id: "alg1-u4-polynomial-products-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand $(2x+5)^2$ and state the coefficient of the linear term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(a+b)^2=a^2+2ab+b^2$." },
              { kind: "law", name: "Distributive property", statement: "Squaring a binomial means multiplying the binomial by itself." },
            ],
            steps: [
              { reasoning: "Interpret the square as two equal factors and distribute.", working: "(2x+5)(2x+5)=4x^2+10x+10x+25", marks: 2, markCode: "M" },
              { reasoning: "Combine the two cross terms.", working: "4x^2+20x+25", marks: 1, markCode: "A" },
              { reasoning: "Read off the coefficient of the linear term.", working: "\\text{linear coefficient}=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4x^2+20x+25$; the linear coefficient is $20$.",
            commonErrors: ["Using $(a+b)^2=a^2+b^2$ and omitting the cross term.", "Giving 10 as the linear coefficient before combining both cross products."],
          },
        },
        {
          id: "alg1-u4-polynomial-products-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular patio has side lengths $(x+6)$ feet and $(x-2)$ feet, where $x>2$. A designer also considers the square of a side length $(x+6)$ feet.",
          parts: [
            { label: "a", prompt: "Write and simplify a polynomial for the patio's area.", marks: 3 },
            { label: "b", prompt: "Expand the square $(x+6)^2$ and identify the coefficient of $x$.", marks: 3 },
            { label: "c", prompt: "Expand $(x+6)(x-6)$ using a special-product pattern, and state why its linear term is zero.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangle area", statement: "$A=\\text{length}\\times\\text{width}$." },
              { kind: "law", name: "Distributive property", statement: "Multiply every term of one factor by every term of the other factor." },
              { kind: "formula", name: "Conjugate product", statement: "$(a+b)(a-b)=a^2-b^2$; the cross terms cancel." },
              { kind: "formula", name: "Binomial square", statement: "$(a+b)^2=a^2+2ab+b^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Use area as the product of the two side lengths.", working: "A=(x+6)(x-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Distribute and combine the linear terms.", working: "x^2-2x+6x-12=x^2+4x-12", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Apply the binomial-square pattern, including its doubled cross term.", working: "(x+6)^2=x^2+2(x)(6)+36=x^2+12x+36", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Identify the coefficient multiplying $x$.", working: "12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Recognize the factors as conjugates with $a=x$ and $b=6$.", working: "(x+6)(x-6)=x^2-6^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate the difference of squares.", working: "x^2-36", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The $+6x$ and $-6x$ cross products cancel, leaving no linear term.", working: "6x-6x=0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x^2+4x-12$ square feet. (b) $x^2+12x+36$, coefficient $12$. (c) $x^2-36$; opposite cross terms cancel.",
            commonErrors: ["Omitting the cross terms in part (a).", "Writing $(x+6)^2=x^2+36$.", "Treating conjugates as a binomial square."],
          },
        },
      ],
    },
  ],
};
