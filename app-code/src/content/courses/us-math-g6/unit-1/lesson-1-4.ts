import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m6-u1-lesson-1-4",
  code: "1-4",
  title: "Percent Basics",
  goal: "I CAN convert between fractions, decimals and percents.",
  standards: ["6.RP.A.3"],
  vocabulary: [
    { term: "Percent", definition: "Part per hundred." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Convert", definition: "Change form." },
    { term: "Out of 100", definition: "Percentage." },
    { term: "Half", definition: "50%." },
    { term: "Quarter", definition: "25%." },
    { term: "Whole", definition: "100%." },
  ],
  concepts: [
    {
      id: "m6-u1-percent-basics",
      title: "Percent basics",
      skill: "Convert between fractions, decimals and percents.",
      lesson: {
        sections: [
          {
            heading: "Per hundred",
            body: "**Percent** means 'per hundred': 50% = 50/100 = 0.5 = 1/2. To convert, multiply/divide by 100.",
          },
          {
            heading: "Conversions",
            body: "Fraction -> percent: divide numerator by denominator x 100. Percent -> decimal: divide by 100. Decimal -> percent: multiply by 100.",
          },
        ],
        keyFormulas: [
          { name: "Percent", statement: "50% = 50/100 = 0.5 = 1/2." },
        ],
        workedExample: {
          problem: "Convert 3/4 to percent.",
          solution: "3/4 = 0.75 = **75%**.",
        },
      },
      questions: [
        {
          id: "m6-u1-percent-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "75% as a fraction is...",
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
                              "text": "75/100"
                    },
                    {
                              "id": "d",
                              "text": "1/4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "75% = 3/4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "75% = 3/4.",
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
          id: "m6-u1-percent-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "0.25 as a percent is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2.5%"
                    },
                    {
                              "id": "b",
                              "text": "25%"
                    },
                    {
                              "id": "c",
                              "text": "250%"
                    },
                    {
                              "id": "d",
                              "text": "0.25%"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.25 = 25%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.25 = 25%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25%",
          "commonErrors": [
                    "Wrong percent."
          ]
},
        },
        {
          id: "m6-u1-percent-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert these to percents: 1/2, 3/5, 0.8, 7/10.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Percent",
                              "statement": "50%, 60%, 80%, 70%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**1/2=50%; 3/5=60%; 0.8=80%; 7/10=70%.**",
          "commonErrors": [
                    "Wrong conversions.",
                    "Missing items."
          ]
},
        },
        {
          id: "m6-u1-percent-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Percent means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "per ten"
                    },
                    {
                              "id": "b",
                              "text": "per hundred"
                    },
                    {
                              "id": "c",
                              "text": "per thousand"
                    },
                    {
                              "id": "d",
                              "text": "per million"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Per hundred."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Per hundred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "per hundred",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u1-percent-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert 2/5 to a decimal and percent. Explain the steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Percent",
                              "statement": "0.4 and 40%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains steps.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**2/5 = 0.4 = 40%; divide numerator by denominator, then x100.**",
          "commonErrors": [
                    "Wrong conversions.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u1-percent-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Percent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of whole."
                    },
                    {
                              "id": "b",
                              "text": "Part per hundred."
                    },
                    {
                              "id": "c",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "d",
                              "text": "Change form."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Percent\" means Part per hundred."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Percent\" means Part per hundred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Percent** = Part per hundred.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-percent-basics-q7",
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
                              "text": "Change form."
                    },
                    {
                              "id": "c",
                              "text": "Percentage."
                    },
                    {
                              "id": "d",
                              "text": "Part of whole."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m6-u1-percent-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change form."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Percentage."
                    },
                    {
                              "id": "d",
                              "text": "50%."
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
