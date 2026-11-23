import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "satm-u2-lesson-2-2",
  code: "2-2",
  title: "Polynomial Operations",
  goal: "I CAN add, subtract, multiply, and factor polynomials.",
  standards: ["SAT M 2.x"],
  vocabulary: [
    { term: "Polynomial", definition: "Sum of terms with non-negative integer powers." },
    { term: "Degree", definition: "Highest power of variable." },
    { term: "Like terms", definition: "Same variable and exponent — can combine." },
    { term: "FOIL", definition: "First-Outer-Inner-Last for binomial multiplication." },
    { term: "Factoring", definition: "Rewriting as product of simpler polynomials." },
    { term: "Difference of squares", definition: "$a^2 - b^2 = (a+b)(a-b)$." },
  ],
  concepts: [
    {
      id: "satm-u2-polynomials",
      title: "Polynomials",
      skill: "Perform operations and factor polynomials.",
      lesson: {
        sections: [
          {
            heading: "Operations",
            body: "Add/subtract: combine LIKE terms (same variable, same exponent). Multiply: distribute — FOIL for binomials $(a+b)(c+d) = ac + ad + bc + bd$. For larger: distribute each term. Division: only by monomials or special cases on SAT.",
          },
          {
            heading: "Factoring patterns",
            body: "**Difference of squares**: $a^2 - b^2 = (a+b)(a-b)$. **Perfect square**: $a^2 + 2ab + b^2 = (a+b)^2$. **Common factor**: $ax + ay = a(x+y)$. **Trinomials**: $x^2 + bx + c$ → find two numbers multiplying to $c$, adding to $b$. Recognizing patterns saves time.",
          },
        ],
        keyFormulas: [
          { name: "FOIL", statement: "$(a+b)(c+d) = ac+ad+bc+bd$" },
          { name: "Difference squares", statement: "$a^2-b^2 = (a+b)(a-b)$" },
        ],
        workedExample: {
          problem: "Factor $x^2 - 9$.",
          solution: "Difference of squares: $x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$.",
        },
      },
      questions: [
        {
          id: "satm-u2-polynomials-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Like terms are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any terms with variables"
                    },
                    {
                              "id": "b",
                              "text": "terms with same variable and exponent"
                    },
                    {
                              "id": "c",
                              "text": "terms with same coefficient"
                    },
                    {
                              "id": "d",
                              "text": "constant terms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Like terms",
                              "statement": "Same variable^exponent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Like terms share variable AND exponent — $3x^2$ and $5x^2$ are like; $3x^2$ and $3x$ are not.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Same variable^exponent",
          "commonErrors": [
                    "Combining unlike terms."
          ]
},
        },
        {
          id: "satm-u2-polynomials-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$(x + 3)(x - 3)$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x^2 - 9$"
                    },
                    {
                              "id": "b",
                              "text": "$x^2 + 9$"
                    },
                    {
                              "id": "c",
                              "text": "$x^2 - 6x + 9$"
                    },
                    {
                              "id": "d",
                              "text": "$x^2 + 6x - 9$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Difference of squares",
                              "statement": "$(a+b)(a-b) = a^2-b^2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(x+3)(x-3) = x^2 - 3^2 = x^2 - 9$ — the middle terms cancel.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$x^2 - 9$",
          "commonErrors": [
                    "FOIL error — middle terms should cancel."
          ]
},
        },
        {
          id: "satm-u2-polynomials-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(2x + 1)(x - 3)$. Enter the coefficient of $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x coefficient",
                              "answer": -5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "FOIL",
                              "statement": "First-Outer-Inner-Last."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(2x)(x) + (2x)(-3) + (1)(x) + (1)(-3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$. Coefficient of $x$: $-5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $-5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-5$",
          "commonErrors": [
                    "Sign errors in FOIL."
          ]
},
        },
        {
          id: "satm-u2-polynomials-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Factor $x^2 + 7x + 12$ completely.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trinomial factoring",
                              "statement": "Find factors of 12 summing to 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Need two numbers multiplying to 12 and adding to 7: 3 and 4 ($3 \\times 4 = 12$, $3+4 = 7$).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$x^2 + 7x + 12 = (x+3)(x+4)$ — check: $x^2 + 4x + 3x + 12 = x^2 + 7x + 12$. ✓",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verify by expanding — factoring errors are caught by FOIL check.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "$(x+3)(x+4)$",
          "commonErrors": [
                    "Wrong factor pair — must multiply to c AND add to b."
          ]
},
        },
      ],
    },
  ],
};
