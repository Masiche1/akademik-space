import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edm9-u2-lesson-2-1",
  code: "2-1",
  title: "Expanding and Factorising",
  goal: "I CAN expand double brackets and factorise quadratic expressions, including the difference of two squares.",
  standards: ["Y9 Algebra"],
  vocabulary: [
    { term: "Expand", definition: "Multiply out brackets so that every term inside is multiplied by every term in the other bracket." },
    { term: "Factorise", definition: "Write an expression as a product of brackets, the reverse of expanding." },
    { term: "Quadratic expression", definition: "An expression whose highest power of the variable is 2, such as $x^2 + 5x + 6$." },
    { term: "Coefficient", definition: "The number multiplying a variable, for example 5 in $5x$." },
    { term: "Difference of two squares", definition: "An expression of the form $a^2 - b^2$, which factorises as $(a - b)(a + b)$." },
    { term: "Perfect square", definition: "A number or expression that is the square of another, such as 49 or $x^2$." },
  ],
  concepts: [
    {
      id: "edm9-u2-expanding-double-brackets",
      title: "Expanding double brackets",
      skill: "Expand and simplify the product of two linear brackets.",
      lesson: {
        sections: [
          {
            heading: "Multiplying every term by every term",
            body: "To expand $(x + 3)(x + 5)$, multiply each term in the first bracket by each term in the second: $x \\times x = x^2$, $x \\times 5 = 5x$, $3 \\times x = 3x$, $3 \\times 5 = 15$. Collect like terms: $x^2 + 8x + 15$. A grid or the 'FOIL' idea (First, Outer, Inner, Last) can help you keep track of all four products.",
          },
          {
            heading: "Watch the signs",
            body: "Be careful with negatives. For $(x - 4)(x + 7)$ the products are $x^2$, $+7x$, $-4x$ and $-28$. This gives $x^2 + 3x - 28$. A negative times a negative is positive, so $(x - 2)(x - 6) = x^2 - 8x + 12$. For squares, write the bracket twice: $(x + 3)^2 = (x + 3)(x + 3) = x^2 + 6x + 9$. It is **not** $x^2 + 9$.",
          },
        ],
        keyFormulas: [
          { name: "Double brackets", statement: "$(x + a)(x + b) = x^2 + (a + b)x + ab$" },
          { name: "Squaring a bracket", statement: "$(x + a)^2 = x^2 + 2ax + a^2$" },
        ],
        workedExample: {
          problem: "Expand and simplify $(2x - 3)(x + 5)$.",
          solution: "Multiply each pair: $2x \\times x = 2x^2$, $2x \\times 5 = 10x$, $-3 \\times x = -3x$, $-3 \\times 5 = -15$. Collect like terms: $2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15$.",
        },
      },
      questions: [
        {
          id: "edm9-u2-expanding-double-brackets-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand and simplify $(x + 2)(x + 7)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2 + 9x + 14$" },
              { id: "b", text: "$x^2 + 14$" },
              { id: "c", text: "$x^2 + 9x + 9$" },
              { id: "d", text: "$x^2 + 5x + 14$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Expanding brackets", statement: "Multiply every term in one bracket by every term in the other." }],
            steps: [
              { reasoning: "Multiply each pair of terms.", working: "x^2 + 7x + 2x + 14", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms: $7x + 2x = 9x$.", working: "x^2 + 9x + 14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x^2 + 9x + 14$",
            commonErrors: ["Multiplying only the first and last terms to get $x^2 + 14$.", "Adding the numbers (2 + 7 = 9) for the constant term.", "Subtracting 7 and 2 for the middle term."],
          },
        },
        {
          id: "edm9-u2-expanding-double-brackets-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand and simplify $(x - 4)(x + 9)$. Give the coefficient of $x$ and the constant term.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $x$", answer: 5 },
              { label: "Constant term", answer: -36 },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Expanding brackets", statement: "Multiply every term in one bracket by every term in the other." }],
            steps: [
              { reasoning: "Multiply each pair of terms, keeping track of the negative sign.", working: "x^2 + 9x - 4x - 36", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms: $9x - 4x = 5x$.", working: "x^2 + 5x - 36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + 5x - 36$, so the coefficient of $x$ is $5$ and the constant term is $-36$.",
            commonErrors: ["Writing $-4 \\times 9 = 36$ instead of $-36$.", "Writing $9x + 4x$ and getting $13x$."],
          },
        },
        {
          id: "edm9-u2-expanding-double-brackets-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Expand and simplify $(3x - 2)(2x - 5)$. Give the coefficient of $x^2$, the coefficient of $x$ and the constant term.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $x^2$", answer: 6 },
              { label: "Coefficient of $x$", answer: -19 },
              { label: "Constant term", answer: 10 },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Expanding brackets", statement: "Multiply every term in one bracket by every term in the other." }],
            steps: [
              { reasoning: "Multiply each pair of terms.", working: "3x \\times 2x = 6x^2,\\; 3x \\times (-5) = -15x,\\; (-2) \\times 2x = -4x,\\; (-2)(-5) = 10", marks: 1, markCode: "M" },
              { reasoning: "Write out all four terms.", working: "6x^2 - 15x - 4x + 10", marks: 1, markCode: "A" },
              { reasoning: "Collect the like terms.", working: "6x^2 - 19x + 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6x^2 - 19x + 10$",
            commonErrors: ["Writing $(-2)(-5) = -10$.", "Writing $3x \\times 2x = 5x^2$."],
          },
        },
        {
          id: "edm9-u2-expanding-double-brackets-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangle has length $(2x + 3)$ cm and width $(x + 4)$ cm. A square with side length $(x - 1)$ cm is cut out of one corner of the rectangle, where $x > 1$.",
          parts: [
            { label: "a", prompt: "Show that the area of the rectangle is $2x^2 + 11x + 12$ cm$^2$.", marks: 2 },
            { label: "b", prompt: "Expand and simplify $(x - 1)^2$.", marks: 2 },
            { label: "c", prompt: "Show that the area of the shape that is left is $x^2 + 13x + 11$ cm$^2$.", marks: 2 },
            { label: "d", prompt: "Given that $x = 3$, work out the perimeter of the original rectangle and the area of the shape that is left.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(d) perimeter of rectangle (cm)", answer: 32 },
              { label: "(d) area of shape left (cm$^2$)", answer: 59 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "Area = length $\\times$ width" },
              { kind: "law", name: "Expanding brackets", statement: "Multiply every term in one bracket by every term in the other." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the length by the width and expand.", working: "(2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect like terms to reach the given result.", working: "2x^2 + 11x + 12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Write the bracket twice and multiply each pair.", working: "(x - 1)(x - 1) = x^2 - x - x + 1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect like terms.", working: "x^2 - 2x + 1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract the area of the square from the rectangle, being careful to subtract every term.", working: "(2x^2 + 11x + 12) - (x^2 - 2x + 1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Distribute the negative sign and collect like terms.", working: "2x^2 - x^2 + 11x + 2x + 12 - 1 = x^2 + 13x + 11", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x = 3$ into the dimensions: length $2(3)+3 = 9$, width $3 + 4 = 7$.", working: "\\text{Perimeter} = 2(9 + 7)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the perimeter.", working: "= 32", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x = 3$ into the area of the remaining shape.", working: "3^2 + 13(3) + 11 = 9 + 39 + 11 = 59", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2x^2 + 11x + 12$ shown. (b) $x^2 - 2x + 1$. (c) $x^2 + 13x + 11$ shown. (d) Perimeter $32$ cm, area $59$ cm$^2$.",
            commonErrors: ["Writing $(x - 1)^2 = x^2 - 1$.", "Failing to subtract every term of the square in part (c).", "Using $2(9 \\times 7)$ for the perimeter."],
            examinerNote: "Check: area of rectangle 63, square 4, so 59. 'Show that' requires the intermediate expansion to be seen.",
          },
        },
      ],
    },
    {
      id: "edm9-u2-factorising-quadratics",
      title: "Factorising quadratics and the difference of two squares",
      skill: "Factorise expressions of the form $x^2 + bx + c$ and $a^2 - b^2$.",
      lesson: {
        sections: [
          {
            heading: "Factorising x² + bx + c",
            body: "Factorising is the reverse of expanding. To factorise $x^2 + bx + c$, find two numbers that **multiply to $c$** and **add to $b$**. For $x^2 + 7x + 12$ the numbers are 3 and 4 (since $3 \\times 4 = 12$ and $3 + 4 = 7$), so the answer is $(x + 3)(x + 4)$. If $c$ is negative the numbers have different signs: $x^2 + 2x - 15 = (x + 5)(x - 3)$ because $5 \\times (-3) = -15$ and $5 + (-3) = 2$. Check by expanding.",
          },
          {
            heading: "Difference of two squares",
            body: "When there is no middle term and both terms are perfect squares separated by a minus sign, use $a^2 - b^2 = (a - b)(a + b)$. For example $x^2 - 49 = (x - 7)(x + 7)$ and $4x^2 - 25 = (2x - 5)(2x + 5)$. The middle terms cancel when you expand, which is why there is no $x$ term. Always take out any common factor first: $3x^2 - 75 = 3(x^2 - 25) = 3(x - 5)(x + 5)$.",
          },
        ],
        keyFormulas: [
          { name: "Factorising a quadratic", statement: "$x^2 + bx + c = (x + p)(x + q)$ where $pq = c$ and $p + q = b$" },
          { name: "Difference of two squares", statement: "$a^2 - b^2 = (a - b)(a + b)$" },
        ],
        workedExample: {
          problem: "Factorise $x^2 - 3x - 28$.",
          solution: "Find two numbers that multiply to $-28$ and add to $-3$. Factor pairs of 28: (1, 28), (2, 14), (4, 7). The pair 4 and 7 differ by 3, so use $-7$ and $+4$: $(-7)(4) = -28$ and $-7 + 4 = -3$. So $x^2 - 3x - 28 = (x - 7)(x + 4)$. Check: $x^2 + 4x - 7x - 28 = x^2 - 3x - 28$.",
        },
      },
      questions: [
        {
          id: "edm9-u2-factorising-quadratics-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Factorise $x^2 + 8x + 15$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x + 3)(x + 5)$" },
              { id: "b", text: "$(x + 1)(x + 15)$" },
              { id: "c", text: "$(x - 3)(x - 5)$" },
              { id: "d", text: "$(x + 2)(x + 6)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Factorising a quadratic", statement: "Find two numbers with product $c$ and sum $b$." }],
            steps: [
              { reasoning: "Find two numbers that multiply to 15 and add to 8: 3 and 5.", working: "3 \\times 5 = 15,\\; 3 + 5 = 8", marks: 1, markCode: "M" },
              { reasoning: "Write the factors.", working: "(x + 3)(x + 5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $(x + 3)(x + 5)$",
            commonErrors: ["Choosing a pair that multiplies to 15 but adds to 16, as in (b).", "Using negative numbers when $b$ is positive."],
          },
        },
        {
          id: "edm9-u2-factorising-quadratics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factorise $x^2 - 3x - 28$. Give your answer in the form $(x + p)(x + q)$ with $p < q$, and enter $p$ and $q$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$p$", answer: -7 },
              { label: "$q$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Factorising a quadratic", statement: "Find two numbers with product $c$ and sum $b$." }],
            steps: [
              { reasoning: "Find two numbers with product $-28$ and sum $-3$: $-7$ and $4$.", working: "(-7)(4) = -28,\\; -7 + 4 = -3", marks: 1, markCode: "M" },
              { reasoning: "Write the factors.", working: "(x - 7)(x + 4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x - 7)(x + 4)$, so $p = -7$ and $q = 4$.",
            commonErrors: ["Choosing $(x + 7)(x - 4)$, which has middle term $+3x$.", "Choosing numbers that multiply to 28 instead of $-28$."],
          },
        },
        {
          id: "edm9-u2-factorising-quadratics-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Factorise fully $3x^2 - 75$. Give your answer in the form $3(x - a)(x + a)$ and enter $a$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common factor", statement: "Take out any common factor before factorising further." },
              { kind: "law", name: "Difference of two squares", statement: "$a^2 - b^2 = (a - b)(a + b)$" },
            ],
            steps: [
              { reasoning: "Both terms have a common factor of 3.", working: "3(x^2 - 25)", marks: 1, markCode: "M" },
              { reasoning: "$x^2 - 25$ is a difference of two squares, with $25 = 5^2$.", working: "x^2 - 25 = (x - 5)(x + 5)", marks: 1, markCode: "M" },
              { reasoning: "Combine, keeping the common factor.", working: "3(x - 5)(x + 5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3(x - 5)(x + 5)$",
            commonErrors: ["Leaving the answer as $3(x^2 - 25)$.", "Forgetting to keep the factor 3 in the final answer.", "Writing $(x - 25)(x + 25)$."],
            examinerNote: "Award M1 for 3(x² - 25) and M1 for (x - 5)(x + 5) seen.",
          },
        },
        {
          id: "edm9-u2-factorising-quadratics-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "This question is about factorising.",
          parts: [
            { label: "a", prompt: "Factorise $x^2 - 11x + 24$.", marks: 2 },
            { label: "b", prompt: "Factorise $x^2 - 81$.", marks: 1 },
            { label: "c", prompt: "Hence, or otherwise, solve $x^2 - 11x + 24 = 0$. Enter the two solutions in any order.", marks: 2 },
            { label: "d", prompt: "Use factorising to work out the value of $101^2 - 99^2$ without a calculator.", marks: 2 },
            { label: "e", prompt: "Show that $n^2 + 6n + 8$ is never a prime number when $n$ is a positive integer.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) solution 1", answer: 3 },
              { label: "(c) solution 2", answer: 8 },
              { label: "(d) $101^2 - 99^2$", answer: 400 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising a quadratic", statement: "Find two numbers with product $c$ and sum $b$." },
              { kind: "law", name: "Difference of two squares", statement: "$a^2 - b^2 = (a - b)(a + b)$" },
              { kind: "property", name: "Zero product", statement: "If $AB = 0$ then $A = 0$ or $B = 0$." },
            ],
            steps: [
              { part: "a", reasoning: "Find two numbers with product 24 and sum $-11$: $-3$ and $-8$.", working: "(-3)(-8) = 24,\\; -3 + -8 = -11", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Write the factors.", working: "(x - 3)(x - 8)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$81 = 9^2$, so this is a difference of two squares.", working: "(x - 9)(x + 9)", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Set each factor equal to zero.", working: "x - 3 = 0 \\text{ or } x - 8 = 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve each equation.", working: "x = 3 \\text{ or } x = 8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the difference of two squares with $a = 101$ and $b = 99$.", working: "(101 - 99)(101 + 99) = 2 \\times 200", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "= 400", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Factorise: numbers with product 8 and sum 6 are 2 and 4.", working: "n^2 + 6n + 8 = (n + 2)(n + 4)", marks: 1, markCode: "M" },
              { part: "e", reasoning: "For positive $n$, both factors are integers greater than 1, so the number has factors other than 1 and itself, and cannot be prime.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(x - 3)(x - 8)$. (b) $(x - 9)(x + 9)$. (c) $x = 3$ or $x = 8$. (d) $400$. (e) $(n + 2)(n + 4)$ is a product of two integers each greater than 1, so it is not prime.",
            commonErrors: ["Writing $(x + 3)(x + 8)$ when $b$ is negative.", "Writing $x^2 - 81 = (x - 9)^2$.", "Calculating $101^2$ and $99^2$ separately and making an arithmetic slip."],
            examinerNote: "In part (e), accept a numerical illustration only if it is followed by the general factorised argument.",
          },
        },
      ],
    },
  ],
};
