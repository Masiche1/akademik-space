import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m6-u2-lesson-2-3",
  code: "2-3",
  title: "Rational Numbers",
  goal: "I CAN identify and compare rational numbers.",
  standards: ["6.NS.C.6"],
  vocabulary: [
    { term: "Rational", definition: "Can be written as fraction." },
    { term: "Fraction", definition: "a/b." },
    { term: "Decimal", definition: "Base-ten." },
    { term: "Integer", definition: "Whole + negative." },
    { term: "Terminating", definition: "Ends." },
    { term: "Repeating", definition: "Pattern repeats." },
    { term: "Compare", definition: "More or less." },
    { term: "Order", definition: "Sort." },
  ],
  concepts: [
    {
      id: "m6-u2-rational-numbers",
      title: "Rational numbers",
      skill: "Identify and compare rational numbers (fractions, decimals, integers).",
      lesson: {
        sections: [
          {
            heading: "Rational",
            body: "A **rational number** can be written as a fraction $\\frac{a}{b}$ where b ≠ 0. Includes integers, fractions, terminating decimals (0.5), and repeating decimals (0.333...).",
          },
          {
            heading: "Comparing",
            body: "Convert to common form (fractions or decimals) to compare: $\\frac{1}{2} = 0.5$, $\\frac{2}{3} ≈ 0.67$.",
          },
        ],
        keyFormulas: [
          { name: "Rational", statement: "a/b where b ≠ 0 = rational." },
        ],
        workedExample: {
          problem: "Is 0.75 rational? Is 0.333... rational?",
          solution: "**Yes** — 0.75 = 3/4; 0.333... = 1/3.",
        },
      },
      questions: [
        {
          id: "m6-u2-rational-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'rational number' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only integers"
                    },
                    {
                              "id": "b",
                              "text": "any number that can be written as a/b"
                    },
                    {
                              "id": "c",
                              "text": "only decimals"
                    },
                    {
                              "id": "d",
                              "text": "only fractions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Can be written as a/b."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Can be written as a/b.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "any number that can be written as a/b",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is rational? 0.5, 0.333..., pi, sqrt(2)",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.5"
                    },
                    {
                              "id": "b",
                              "text": "all"
                    },
                    {
                              "id": "c",
                              "text": "pi"
                    },
                    {
                              "id": "d",
                              "text": "sqrt(2)"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.5 = 1/2 is rational."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.5 = 1/2 is rational.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.5",
          "commonErrors": [
                    "Includes irrational."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these as rational or irrational: 3/4, 0.5, 0.333..., pi, sqrt(4).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rational",
                              "statement": "All classified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all five.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Rational: 3/4, 0.5, 0.333..., sqrt(4)=2; Irrational: pi.**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing items."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'terminating decimal' is one that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "repeats"
                    },
                    {
                              "id": "b",
                              "text": "ends"
                    },
                    {
                              "id": "c",
                              "text": "is infinite"
                    },
                    {
                              "id": "d",
                              "text": "is irrational"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ends."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ends.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ends",
          "commonErrors": [
                    "Confuses with repeating."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare 2/3 and 0.7. Which is greater? Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rational",
                              "statement": "0.7 > 2/3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts to compare.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Determines greater.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**2/3 ≈ 0.67 < 0.7, so 0.7 is greater.**",
          "commonErrors": [
                    "Wrong comparison.",
                    "No work."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a/b."
                    },
                    {
                              "id": "b",
                              "text": "Can be written as fraction."
                    },
                    {
                              "id": "c",
                              "text": "Base-ten."
                    },
                    {
                              "id": "d",
                              "text": "Whole + negative."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rational\" means Can be written as fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rational\" means Can be written as fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rational** = Can be written as fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten."
                    },
                    {
                              "id": "b",
                              "text": "Whole + negative."
                    },
                    {
                              "id": "c",
                              "text": "Ends."
                    },
                    {
                              "id": "d",
                              "text": "a/b."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means a/b."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means a/b.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = a/b.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-rational-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole + negative."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten."
                    },
                    {
                              "id": "c",
                              "text": "Ends."
                    },
                    {
                              "id": "d",
                              "text": "Pattern repeats."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decimal\" means Base-ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decimal\" means Base-ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decimal** = Base-ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
