import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m6-u6-lesson-6-2",
  code: "6-2",
  title: "Dividing Mixed Numbers",
  goal: "I CAN divide mixed numbers.",
  standards: ["6.NS.A.1"],
  vocabulary: [
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Improper fraction", definition: "num > denom." },
    { term: "Convert", definition: "Change form." },
    { term: "Divide", definition: "Split." },
    { term: "Reciprocal", definition: "Flip." },
    { term: "Simplify", definition: "Reduce." },
    { term: "Whole number", definition: "Integer." },
    { term: "Multiply", definition: "Repeated addition." },
  ],
  concepts: [
    {
      id: "m6-u6-dividing-mixed-numbers",
      title: "Dividing mixed numbers",
      skill: "Convert mixed numbers to improper fractions before dividing.",
      lesson: {
        sections: [
          {
            heading: "Convert first",
            body: "**Mixed number** -> **improper fraction**: $2\\frac{3}{4} = \\frac{11}{4}$. Then divide by multiplying by reciprocal.",
          },
          {
            heading: "Example",
            body: "$3\\frac{1}{2} \\div 1\\frac{1}{4} = \\frac{7}{2} \\div \\frac{5}{4} = \\frac{7}{2} \\times \\frac{4}{5} = \\frac{28}{10} = 2\\frac{4}{5}$.",
          },
        ],
        keyFormulas: [
          { name: "Mixed to improper", statement: "a b/c = (axc+b)/c." },
          { name: "Divide", statement: "Multiply by reciprocal." },
        ],
        workedExample: {
          problem: "Calculate 4 1/2 / 1 1/2.",
          solution: "$\\frac{9}{2} \\div \\frac{3}{2} = \\frac{9}{2} \\times \\frac{2}{3} = \\frac{18}{6} = 3$.",
        },
      },
      questions: [
        {
          id: "m6-u6-dividing-mixed-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To divide mixed numbers, first...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divide whole parts"
                    },
                    {
                              "id": "b",
                              "text": "convert to improper fractions"
                    },
                    {
                              "id": "c",
                              "text": "add"
                    },
                    {
                              "id": "d",
                              "text": "guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Convert first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Convert first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "convert to improper fractions",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m6-u6-dividing-mixed-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "4 1/2 as an improper fraction is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8/2"
                    },
                    {
                              "id": "b",
                              "text": "9/2"
                    },
                    {
                              "id": "c",
                              "text": "4/2"
                    },
                    {
                              "id": "d",
                              "text": "10/2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9/2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9/2",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m6-u6-dividing-mixed-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: 3 1/3 / 1 2/3; 5 / 2 1/2; 2 1/4 / 3/4.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dividing mixed",
                              "statement": "2, 2, 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**10/3 x 3/5 = 2; 5 x 2/5 = 2; 9/4 x 4/3 = 3.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing problems."
          ]
},
        },
        {
          id: "m6-u6-dividing-mixed-numbers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'improper fraction' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "proper fraction"
                    },
                    {
                              "id": "b",
                              "text": "numerator > denominator"
                    },
                    {
                              "id": "c",
                              "text": "mixed number"
                    },
                    {
                              "id": "d",
                              "text": "decimal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Num > denom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Num > denom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "numerator > denominator",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u6-dividing-mixed-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Divide two mixed numbers and explain the conversion steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Dividing mixed",
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
                              "reasoning": "Explains conversion.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '4 1/2 / 1 1/2 = 9/2 / 3/2 = 9/2 x 2/3 = 3; convert to improper first.'**",
          "commonErrors": [
                    "Cannot divide.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u6-dividing-mixed-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "num > denom."
                    },
                    {
                              "id": "b",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "c",
                              "text": "Change form."
                    },
                    {
                              "id": "d",
                              "text": "Split."
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
        {
          id: "m6-u6-dividing-mixed-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Improper fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change form."
                    },
                    {
                              "id": "b",
                              "text": "Split."
                    },
                    {
                              "id": "c",
                              "text": "Flip."
                    },
                    {
                              "id": "d",
                              "text": "num > denom."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Improper fraction\" means num > denom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Improper fraction\" means num > denom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Improper fraction** = num > denom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-dividing-mixed-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split."
                    },
                    {
                              "id": "b",
                              "text": "Change form."
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
                              "statement": "\"Convert\" means Change form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convert\" means Change form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convert** = Change form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
