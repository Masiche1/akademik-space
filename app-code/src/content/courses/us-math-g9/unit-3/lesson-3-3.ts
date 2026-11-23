import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m9-u3-lesson-3-3",
  code: "3-3",
  title: "Exponent Laws and Exponential Functions",
  goal: "I CAN apply exponent laws and interpret exponential growth and decay.",
  standards: ["8.EE.A.1", "F-LE.1", "F-IF.8"],
  vocabulary: [
    { term: "Exponent", definition: "The number of times a base is multiplied by itself: $a^n$ means $n$ factors of $a$." },
    { term: "Product rule", definition: "$a^m \\cdot a^n = a^{m+n}$." },
    { term: "Power rule", definition: "$(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$." },
    { term: "Quotient rule", definition: "$\\frac{a^m}{a^n} = a^{m-n}$." },
    { term: "Exponential function", definition: "A function of the form $f(x) = ab^x$ where $b > 0$, $b \\ne 1$." },
  ],
  concepts: [
    {
      id: "m9-u3-exponent-laws",
      title: "Exponents and exponential growth",
      skill: "Simplify expressions using exponent laws and interpret $ab^x$ models.",
      lesson: {
        sections: [
          {
            heading: "The laws",
            body: "When multiplying like bases, **add** exponents: $x^3 \\cdot x^4 = x^7$. When raising a power to a power, **multiply**: $(x^2)^5 = x^{10}$. For a quotient, **subtract**: $\\frac{x^8}{x^3} = x^5$. Any nonzero base to the $0$ power equals $1$, and $a^{-n} = \\frac{1}{a^n}$.",
          },
          {
            heading: "Exponential functions",
            body: "$f(x) = ab^x$ models growth when $b > 1$ and decay when $0 < b < 1$. Each step multiplies by $b$ — a $10\\%$ decay is $b = 0.9$, a tripling is $b = 3$. After $x$ periods the amount is $a \\cdot b^x$; e.g., $\\$100$ at $4\\%$ annual growth becomes $100(1.04)^x$ after $x$ years.",
          },
        ],
        keyFormulas: [
          { name: "Product / quotient", statement: "$a^m a^n = a^{m+n}$; $\\frac{a^m}{a^n} = a^{m-n}$" },
          { name: "Power of a power", statement: "$(a^m)^n = a^{mn}$; $(ab)^n = a^n b^n$" },
          { name: "Exponential model", statement: "$f(x) = ab^x$; $b>1$ growth, $0<b<1$ decay" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{(3x^2)^3 \\cdot x^4}{9x^8}$.",
          solution: "$(3x^2)^3 = 27x^6$. Then $27x^6 \\cdot x^4 = 27x^{10}$. Divide by $9x^8$: $\\frac{27}{9} x^{10-8} = 3x^2$.",
        },
      },
      questions: [
        {
          id: "m9-u3-exponent-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $x^5 \\cdot x^3$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$x^8$"
                    },
                    {
                              "id": "b",
                              "text": "$x^{15}$"
                    },
                    {
                              "id": "c",
                              "text": "$2x^8$"
                    },
                    {
                              "id": "d",
                              "text": "$x^2$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Product rule",
                              "statement": "Add exponents for like bases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$x^5 \\cdot x^3 = x^{5+3} = x^8$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** $x^8$",
          "commonErrors": [
                    "Multiplying the exponents instead of adding."
          ]
},
        },
        {
          id: "m9-u3-exponent-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $(2x^3)^2 \\cdot x^4$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$4x^{10}$"
                    },
                    {
                              "id": "b",
                              "text": "$4x^{24}$"
                    },
                    {
                              "id": "c",
                              "text": "$8x^{10}$"
                    },
                    {
                              "id": "d",
                              "text": "$2x^{10}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rules",
                              "name": "Power and product",
                              "statement": "$(2x^3)^2 = 4x^6$; then $4x^6 \\cdot x^4 = 4x^{10}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Power rule gives $4x^6$; product rule gives $4x^{10}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct simplification.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $4x^{10}$",
          "commonErrors": [
                    "Squaring the exponent instead of multiplying by $2$."
          ]
},
        },
        {
          id: "m9-u3-exponent-laws-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A population of $500$ bacteria triples every hour. How many bacteria after $4$ hours?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Population",
                              "answer": 40500
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Exponential growth",
                              "statement": "$P = 500 \\cdot 3^4$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$3^4 = 81$; $500 \\times 81 = 40{,}500$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$40{,}500$ bacteria",
          "commonErrors": [
                    "Adding $4 \\times 3$ growth instead of compounding."
          ]
},
        },
        {
          id: "m9-u3-exponent-laws-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car worth $\\$18{,}000$ loses $15\\%$ of its value each year. Write an exponential model for its value $V$ after $t$ years, then find its value after $3$ years.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Decay factor",
                              "statement": "$b = 1 - 0.15 = 0.85$."
                    },
                    {
                              "kind": "method",
                              "name": "Evaluate",
                              "statement": "$V = 18000(0.85)^t$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Model: $V(t) = 18{,}000(0.85)^t$ — decay because $0 < 0.85 < 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After $3$ years: $V = 18{,}000 \\times 0.85^3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$0.85^3 \\approx 0.614$; $18{,}000 \\times 0.614 \\approx \\$11{,}054$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$V = 18000(0.85)^t$; $\\approx \\$11{,}054$ after $3$ years",
          "commonErrors": [
                    "Using $b = 0.15$ (the loss rate) instead of $0.85$ (what remains)."
          ]
},
        },
      ],
    },
  ],
};
