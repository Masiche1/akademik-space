import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m4-u5-lesson-5-4",
  code: "5-4",
  title: "Fraction-Decimal Conversion",
  goal: "I CAN convert between fractions and decimals.",
  standards: ["4.NF.C.6"],
  vocabulary: [
    { term: "Convert", definition: "Change between forms." },
    { term: "Fraction", definition: "Part of a whole." },
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Tenths", definition: "First decimal place." },
    { term: "Hundredths", definition: "Second decimal place." },
    { term: "Denominator", definition: "Bottom number." },
    { term: "Equivalent", definition: "Same value." },
    { term: "Place value", definition: "Position." },
  ],
  concepts: [
    {
      id: "m4-u5-fraction-decimal",
      title: "Fraction-decimal conversion",
      skill: "Convert between fractions and decimals.",
      lesson: {
        sections: [
          {
            heading: "Fraction to decimal",
            body: "To convert a fraction to decimal, divide numerator by denominator: $\\frac{3}{4} = 0.75$ (3 ÷ 4 = 0.75).",
          },
          {
            heading: "Decimal to fraction",
            body: "To convert decimal to fraction, use place value: 0.75 = $\\frac{75}{100} = \\frac{3}{4}$.",
          },
        ],
        keyFormulas: [
          { name: "Fraction->decimal", statement: "Divide numerator by denominator." },
          { name: "Decimal->fraction", statement: "Use place value, then simplify." },
        ],
        workedExample: {
          problem: "Convert $\\frac{3}{4}$ to a decimal and 0.6 to a fraction.",
          solution: "$\\frac{3}{4} = 0.75$; $0.6 = \\frac{6}{10} = \\frac{3}{5}$.",
        },
      },
      questions: [
        {
          id: "m4-u5-fraction-decimal-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $\\frac{1}{4}$ as a decimal?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.25"
                    },
                    {
                              "id": "b",
                              "text": "0.4"
                    },
                    {
                              "id": "c",
                              "text": "0.14"
                    },
                    {
                              "id": "d",
                              "text": "0.2"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1/4 = 0.25."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1/4 = 0.25.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.25",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 0.8 as a fraction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8/10"
                    },
                    {
                              "id": "b",
                              "text": "8/100"
                    },
                    {
                              "id": "c",
                              "text": "80/100"
                    },
                    {
                              "id": "d",
                              "text": "8/1"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.8 = 8/10 = 4/5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.8 = 8/10 = 4/5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8/10",
          "commonErrors": [
                    "Wrong denominator."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $\\frac{3}{5}$ to a decimal and 0.4 to a fraction. Simplify the fraction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Convert",
                              "statement": "0.6 and 2/5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts fraction to decimal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Converts decimal to fraction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**3/5 = 0.6; 0.4 = 4/10 = 2/5**",
          "commonErrors": [
                    "Wrong conversions.",
                    "Not simplified."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction equals 0.75?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3/4"
                    },
                    {
                              "id": "b",
                              "text": "7/5"
                    },
                    {
                              "id": "c",
                              "text": "75/10"
                    },
                    {
                              "id": "d",
                              "text": "3/5"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.75 = 75/100 = 3/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.75 = 75/100 = 3/4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/4",
          "commonErrors": [
                    "Wrong fraction."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert $\\frac{2}{5}$ to a decimal and 0.35 to a fraction. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Convert",
                              "statement": "0.4 and 7/20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Shows work.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/5 = 0.4; 0.35 = 35/100 = 7/20**",
          "commonErrors": [
                    "Wrong conversions.",
                    "No work."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "b",
                              "text": "Change between forms."
                    },
                    {
                              "id": "c",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "d",
                              "text": "First decimal place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Convert\" means Change between forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convert\" means Change between forms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convert** = Change between forms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "b",
                              "text": "First decimal place."
                    },
                    {
                              "id": "c",
                              "text": "Second decimal place."
                    },
                    {
                              "id": "d",
                              "text": "Part of a whole."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part of a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part of a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part of a whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-fraction-decimal-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First decimal place."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Second decimal place."
                    },
                    {
                              "id": "d",
                              "text": "Bottom number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decimal\" means Base-ten fraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decimal\" means Base-ten fraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decimal** = Base-ten fraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
