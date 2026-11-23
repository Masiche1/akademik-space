import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m5-u2-lesson-2-2",
  code: "2-2",
  title: "Subtracting Fractions",
  goal: "I CAN subtract fractions with unlike denominators.",
  standards: ["5.NF.A.1"],
  vocabulary: [
    { term: "Fraction", definition: "Part of whole." },
    { term: "Numerator", definition: "Top." },
    { term: "Denominator", definition: "Bottom." },
    { term: "Common denominator", definition: "Same bottom." },
    { term: "Equivalent", definition: "Same amount." },
    { term: "Difference", definition: "Answer to subtraction." },
    { term: "Like denominators", definition: "Same bottom." },
    { term: "Unlike denominators", definition: "Different bottoms." },
  ],
  concepts: [
    {
      id: "m5-u2-subtract-fractions",
      title: "Subtracting fractions",
      skill: "Subtract fractions with unlike denominators.",
      lesson: {
        sections: [
          {
            heading: "Same process",
            body: "Like addition, find **common denominator**, convert, subtract numerators: $\\frac{3}{4} - \\frac{1}{2} = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$.",
          },
          {
            heading: "Borrowing",
            body: "If numerator < subtrahend numerator, **borrow** 1 from the whole number or convert to equivalent.",
          },
        ],
        keyFormulas: [
          { name: "Subtract", statement: "Common denominator -> equivalent -> subtract numerators." },
        ],
        workedExample: {
          problem: "Calculate $\\frac{5}{6} - \\frac{1}{4}$.",
          solution: "Common denominator 12: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.",
        },
      },
      questions: [
        {
          id: "m5-u2-subtract-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{3}{4} - \\frac{1}{2}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/4"
                    },
                    {
                              "id": "b",
                              "text": "2/4"
                    },
                    {
                              "id": "c",
                              "text": "1/2"
                    },
                    {
                              "id": "d",
                              "text": "3/8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3/4 - 2/4 = 1/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3/4 - 2/4 = 1/4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/4",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $\\frac{5}{6} - \\frac{1}{4}$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4/2"
                    },
                    {
                              "id": "b",
                              "text": "7/12"
                    },
                    {
                              "id": "c",
                              "text": "4/12"
                    },
                    {
                              "id": "d",
                              "text": "19/12"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10/12 - 3/12 = 7/12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10/12 - 3/12 = 7/12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7/12",
          "commonErrors": [
                    "Wrong denominator."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subtract $\\frac{2}{3} - \\frac{1}{4}$ and $\\frac{5}{6} - \\frac{1}{3}$. Show common denominators.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Subtract",
                              "statement": "5/12 and 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Subtracts both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/3-1/4 = 8/12-3/12 = 5/12; 5/6-1/3 = 5/6-2/6 = 3/6 = 1/2**",
          "commonErrors": [
                    "Wrong differences.",
                    "No common denominator."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To subtract fractions, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract numerators and denominators"
                    },
                    {
                              "id": "b",
                              "text": "find a common denominator first"
                    },
                    {
                              "id": "c",
                              "text": "subtract directly"
                    },
                    {
                              "id": "d",
                              "text": "add them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Find common denominator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Find common denominator.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "find a common denominator first",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Subtract $1 - \\frac{3}{4}$. Show how you borrow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Subtract",
                              "statement": "1/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrows correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct answer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**1 = 4/4; 4/4 - 3/4 = 1/4**",
          "commonErrors": [
                    "Wrong answer.",
                    "No borrowing."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top."
                    },
                    {
                              "id": "b",
                              "text": "Part of whole."
                    },
                    {
                              "id": "c",
                              "text": "Bottom."
                    },
                    {
                              "id": "d",
                              "text": "Same bottom."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part of whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom."
                    },
                    {
                              "id": "b",
                              "text": "Same bottom."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
                    },
                    {
                              "id": "d",
                              "text": "Top."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Top."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Top.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Top.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-subtract-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same bottom."
                    },
                    {
                              "id": "b",
                              "text": "Bottom."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
                    },
                    {
                              "id": "d",
                              "text": "Answer to subtraction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Denominator\" means Bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Denominator\" means Bottom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Denominator** = Bottom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
