import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m11-u1-lesson-1-2",
  code: "1-2",
  title: "Factoring Polynomials",
  goal: "I CAN factor by grouping, by trinomial patterns and by special products.",
  standards: ["A-SSE.3", "A-APR.4"],
  vocabulary: [
    { term: "Factor", definition: "Write a polynomial as a product of simpler polynomials." },
    { term: "Greatest common factor", definition: "The largest expression dividing every term, e.g., $3x$ from $6x^2 + 9x$." },
    { term: "Grouping", definition: "Factor pairs of terms, then factor the common binomial." },
    { term: "Trinomial", definition: "$ax^2 + bx + c$ factored into $(px + q)(rx + s)$." },
    { term: "Difference of squares", definition: "$a^2 - b^2 = (a+b)(a-b)$." },
    { term: "Perfect square", definition: "$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$." },
  ],
  concepts: [
    {
      id: "m11-u1-factoring-polynomials",
      title: "Factoring strategies",
      skill: "Choose and apply the right factoring method.",
      lesson: {
        sections: [
          {
            heading: "Always start with GCF",
            body: "Factor out the greatest common factor first — $6x^2 + 9x = 3x(2x + 3)$. For four terms, try **grouping**: $x^3 + 2x^2 + 3x + 6 = x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$.",
          },
          {
            heading: "Trinomials and specials",
            body: "For $x^2 + bx + c$, find two numbers multiplying to $c$ and adding to $b$. For $ax^2$ with $a \\ne 1$, use the AC method: multiply $a \\cdot c$, split the middle term, group. Recognize **difference of squares** $a^2 - b^2$ and **perfect squares** $a^2 \\pm 2ab + b^2$ instantly.",
          },
        ],
        keyFormulas: [
          { name: "GCF first", statement: "Factor out the greatest common factor" },
          { name: "Trinomial", statement: "Find $p, q$ with $pq = c$, $p + q = b$" },
          { name: "Special products", statement: "$a^2 - b^2 = (a+b)(a-b)$; $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$" },
        ],
        workedExample: {
          problem: "Factor $x^2 - 5x + 6$.",
          solution: "Need two numbers multiplying to $6$ and adding to $-5$: $-2$ and $-3$. So $x^2 - 5x + 6 = (x - 2)(x - 3)$.",
        },
      },
      questions: [
        {
          id: "m11-u1-factoring-polynomials-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Factor $x^2 - 9$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(x-3)(x+3)$"
                    },
                    {
                              "id": "b",
                              "text": "$(x-3)^2$"
                    },
                    {
                              "id": "c",
                              "text": "$(x+3)^2$"
                    },
                    {
                              "id": "d",
                              "text": "$(x-9)(x+1)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "pattern",
                              "name": "Difference of squares",
                              "statement": "$a^2 - b^2 = (a+b)(a-b)$ with $a=x$, $b=3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(x-3)(x+3)$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $(x-3)(x+3)$",
          "commonErrors": [
                    "Writing $(x-3)^2$ — that expands to $x^2 - 6x + 9$."
          ]
},
        },
        {
          id: "m11-u1-factoring-polynomials-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factor $x^2 + 7x + 12$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$(x+3)(x+4)$"
                    },
                    {
                              "id": "b",
                              "text": "$(x+2)(x+6)$"
                    },
                    {
                              "id": "c",
                              "text": "$(x+1)(x+12)$"
                    },
                    {
                              "id": "d",
                              "text": "$(x-3)(x-4)$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trinomial",
                              "statement": "Numbers multiplying to $12$, adding to $7$: $3$ and $4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$(x+3)(x+4) = x^2 + 7x + 12$ ✓.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct factors.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $(x+3)(x+4)$",
          "commonErrors": [
                    "Checking only the product, not the sum."
          ]
},
        },
        {
          id: "m11-u1-factoring-polynomials-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Factor out the GCF of $8x^3 - 12x^2 + 4x$, then state the remaining factor.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Greatest common factor",
                              "statement": "Common factor of $8, 12, 4$ is $4$; lowest $x$ power is $x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GCF $= 4x$; factored form $4x(2x^2 - 3x + 1)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct GCF and remaining factor.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4x(2x^2 - 3x + 1)$",
          "commonErrors": [
                    "Missing the coefficient GCF or taking $x^2$ when $4x$ has only $x^1$."
          ]
},
        },
        {
          id: "m11-u1-factoring-polynomials-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Factor $2x^2 + 7x + 3$ completely.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "AC method",
                              "statement": "$ac = 6$; find two numbers multiplying to $6$ adding to $7$: $1$ and $6$."
                    },
                    {
                              "kind": "method",
                              "name": "Group",
                              "statement": "Split $7x = x + 6x$, group, factor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2x^2 + x + 6x + 3 = x(2x+1) + 3(2x+1) = (2x+1)(x+3)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: $(2x+1)(x+3) = 2x^2 + 7x + 3$ ✓.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complete factorization.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$(2x+1)(x+3)$",
          "commonErrors": [
                    "Forcing monic-trinomial habit on $a \\ne 1$."
          ]
},
        },
      ],
    },
  ],
};
