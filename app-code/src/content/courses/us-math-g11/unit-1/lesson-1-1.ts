import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m11-u1-lesson-1-1",
  code: "1-1",
  title: "Adding, Subtracting and Multiplying Polynomials",
  goal: "I CAN perform arithmetic on polynomials and multiply binomials and trinomials.",
  standards: ["A-APR.1", "A-SSE.3"],
  vocabulary: [
    { term: "Polynomial", definition: "An expression of terms $ax^n$ with whole-number exponents, such as $3x^2 - 5x + 7$." },
    { term: "Degree", definition: "The highest exponent in the polynomial." },
    { term: "Leading coefficient", definition: "The coefficient of the highest-degree term." },
    { term: "Like terms", definition: "Terms with the same variable and exponent; they combine by adding coefficients." },
    { term: "FOIL", definition: "First, Outer, Inner, Last — the order for multiplying two binomials." },
  ],
  concepts: [
    {
      id: "m11-u1-polynomial-operations",
      title: "Polynomial arithmetic",
      skill: "Combine like terms and expand products using distribution.",
      lesson: {
        sections: [
          {
            heading: "Add and subtract",
            body: "Only **like terms** combine — same variable, same exponent. $(3x^2 - 5x + 7) + (2x^2 + x - 4) = 5x^2 - 4x + 3$. Subtraction requires distributing the negative sign to **every** term of the second polynomial first.",
          },
          {
            heading: "Multiply",
            body: "Use the distributive property: each term of the first polynomial multiplies each term of the second. For binomials, FOIL orders the work: $(x+3)(x+5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$. Exponents add when multiplying like bases: $x^a \\cdot x^b = x^{a+b}$.",
          },
        ],
        keyFormulas: [
          { name: "Combine", statement: "Add/subtract coefficients of like terms only" },
          { name: "Multiply", statement: "Distribute each term; exponents add" },
        ],
        workedExample: {
          problem: "Multiply $(2x - 3)(x + 4)$.",
          solution: "FOIL: $2x \\cdot x = 2x^2$; $2x \\cdot 4 = 8x$; $-3 \\cdot x = -3x$; $-3 \\cdot 4 = -12$. Sum: $2x^2 + 5x - 12$.",
        },
      },
      questions: [
        {
          id: "m11-u1-polynomial-operations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $(4x^2 + 3x - 2) + (x^2 - 5x + 7)$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5x^2 - 2x + 5$"
                    },
                    {
                              "id": "b",
                              "text": "$5x^2 + 8x + 5$"
                    },
                    {
                              "id": "c",
                              "text": "$4x^2 - 2x + 5$"
                    },
                    {
                              "id": "d",
                              "text": "$5x^4 - 2x + 5$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Combine like terms",
                              "statement": "$4x^2+x^2=5x^2$; $3x-5x=-2x$; $-2+7=5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5x^2 - 2x + 5$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $5x^2 - 2x + 5$",
          "commonErrors": [
                    "Adding exponents instead of coefficients."
          ]
},
        },
        {
          id: "m11-u1-polynomial-operations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Multiply $(x - 5)(x + 2)$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x^2 - 3x - 10$"
                    },
                    {
                              "id": "b",
                              "text": "$x^2 - 7x - 10$"
                    },
                    {
                              "id": "c",
                              "text": "$x^2 + 7x - 10$"
                    },
                    {
                              "id": "d",
                              "text": "$x^2 - 3x + 10$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "FOIL",
                              "statement": "$x^2 + 2x - 5x - 10 = x^2 - 3x - 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle terms $2x - 5x = -3x$; constant $-10$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct product.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $x^2 - 3x - 10$",
          "commonErrors": [
                    "Sign error on the constant term."
          ]
},
        },
        {
          id: "m11-u1-polynomial-operations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(x + 2)^2$. Enter the coefficient of $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Coefficient of $x$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Square the binomial",
                              "statement": "$(x+2)(x+2) = x^2 + 4x + 4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle term coefficient is $4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct coefficient.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Writing $x^2 + 2x + 4$ — forgetting to double the middle term."
          ]
},
        },
        {
          id: "m11-u1-polynomial-operations-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Multiply $(x^2 - 3x + 1)(x + 2)$ and state the degree of the product.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Distribute",
                              "statement": "Multiply each term of the trinomial by $(x+2)$."
                    },
                    {
                              "kind": "concept",
                              "name": "Degree",
                              "statement": "Degree of product = sum of degrees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x^2(x+2) - 3x(x+2) + 1(x+2) = x^3 + 2x^2 - 3x^2 - 6x + x + 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Combine: $x^3 - x^2 - 5x + 2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Degree $= 2 + 1 = 3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x^3 - x^2 - 5x + 2$; degree $3$",
          "commonErrors": [
                    "Distributing only to the first term of the trinomial."
          ]
},
        },
      ],
    },
  ],
};
