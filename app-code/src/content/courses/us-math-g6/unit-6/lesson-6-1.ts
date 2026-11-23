import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m6-u6-lesson-6-1",
  code: "6-1",
  title: "Dividing Fractions",
  goal: "I CAN divide fractions and mixed numbers.",
  standards: ["6.NS.A.1"],
  vocabulary: [
    { term: "Divide", definition: "Split into parts." },
    { term: "Reciprocal", definition: "Flip fraction." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Invert", definition: "Flip." },
    { term: "Simplify", definition: "Reduce." },
    { term: "Complex fraction", definition: "Fraction of fraction." },
    { term: "Whole number", definition: "Integer." },
  ],
  concepts: [
    {
      id: "m6-u6-dividing-fractions",
      title: "Dividing fractions",
      skill: "Divide fractions and mixed numbers by multiplying by the reciprocal.",
      lesson: {
        sections: [
          {
            heading: "Reciprocal",
            body: "To divide by a fraction, **multiply by its reciprocal** (flip it): $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$.",
          },
          {
            heading: "Mixed numbers",
            body: "Convert to improper fractions first: $2\\frac{1}{2} = \\frac{5}{2}$.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "a/b / c/d = a/b x d/c." },
          { name: "Reciprocal", statement: "Flip numerator and denominator." },
        ],
        workedExample: {
          problem: "Calculate 3/4 / 2/5.",
          solution: "$\\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$.",
        },
      },
      questions: [
        {
          id: "m6-u6-dividing-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To divide fractions, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract"
                    },
                    {
                              "id": "b",
                              "text": "multiply by reciprocal"
                    },
                    {
                              "id": "c",
                              "text": "add"
                    },
                    {
                              "id": "d",
                              "text": "flip only one"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Multiply by reciprocal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiply by reciprocal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply by reciprocal",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The reciprocal of 3/4 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4/3"
                    },
                    {
                              "id": "b",
                              "text": "3/4"
                    },
                    {
                              "id": "c",
                              "text": "-3/4"
                    },
                    {
                              "id": "d",
                              "text": "1/3"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4/3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4/3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4/3",
          "commonErrors": [
                    "Wrong reciprocal."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: 2/3 / 4/5; 5/6 / 1/2; 3 1/2 / 2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dividing",
                              "statement": "5/6, 5/3, 1 3/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/3 x 5/4 = 10/12 = 5/6; 5/6 x 2/1 = 10/6 = 5/3; 7/2 x 1/2 = 7/4 = 1 3/4.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing problems."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The reciprocal of a fraction is found by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "adding 1"
                    },
                    {
                              "id": "b",
                              "text": "swapping numerator and denominator"
                    },
                    {
                              "id": "c",
                              "text": "subtracting"
                    },
                    {
                              "id": "d",
                              "text": "multiplying by 2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Swap num/denom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Swap num/denom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "swapping numerator and denominator",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Divide two fractions and explain why multiplying by the reciprocal works.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dividing",
                              "statement": "Divided + explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains reciprocal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '3/4 / 2/5 = 3/4 x 5/2 = 15/8; dividing by a/b = multiplying by b/a.'**",
          "commonErrors": [
                    "Cannot divide.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flip fraction."
                    },
                    {
                              "id": "b",
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "d",
                              "text": "Repeated addition."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Split into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Split into parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Split into parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reciprocal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Flip."
                    },
                    {
                              "id": "d",
                              "text": "Flip fraction."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reciprocal\" means Flip fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reciprocal\" means Flip fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reciprocal** = Flip fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-dividing-fractions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "c",
                              "text": "Flip."
                    },
                    {
                              "id": "d",
                              "text": "Reduce."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixed number\" means Whole + fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixed number\" means Whole + fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixed number** = Whole + fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
