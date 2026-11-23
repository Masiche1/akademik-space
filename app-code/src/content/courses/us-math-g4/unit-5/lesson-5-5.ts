import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m4-u5-lesson-5-5",
  code: "5-5",
  title: "Fractions and Decimals Review",
  goal: "I CAN use all fraction and decimal skills.",
  standards: ["4.NF.A.1", "4.NF.A.2", "4.NF.C.6", "4.NF.C.7"],
  vocabulary: [
    { term: "Equivalent", definition: "Same amount." },
    { term: "Compare", definition: "More or less." },
    { term: "Decimal", definition: "Base-ten fraction." },
    { term: "Convert", definition: "Change forms." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Tenths", definition: "First decimal." },
    { term: "Hundredths", definition: "Second decimal." },
    { term: "Simplify", definition: "Make smaller." },
  ],
  concepts: [
    {
      id: "m4-u5-fractions-decimals-review",
      title: "Fractions and decimals review",
      skill: "Combine equivalent fractions, comparing fractions, decimals and conversion.",
      lesson: {
        sections: [
          {
            heading: "All fraction/decimal skills",
            body: "Find **equivalent fractions**, **compare** fractions with different denominators, read **decimals**, and **convert** between fractions and decimals.",
          },
          {
            heading: "Put it together",
            body: "Use all fraction/decimal skills together.",
          },
        ],
        keyFormulas: [
          { name: "Fractions/decimals", statement: "Equivalent + compare + decimals + convert = all skills." },
        ],
        workedExample: {
          problem: "Use all fraction/decimal skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u5-fractions-decimals-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fraction/decimal skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only fractions"
                    },
                    {
                              "id": "b",
                              "text": "equivalent, compare, decimals, convert"
                    },
                    {
                              "id": "c",
                              "text": "only decimals"
                    },
                    {
                              "id": "d",
                              "text": "only comparing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All fraction/decimal skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All fraction/decimal skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "equivalent, compare, decimals, convert",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u5-fractions-decimals-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find an equivalent fraction, compare two fractions, write a decimal, and convert a fraction to a decimal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All frac/dec",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All frac/dec",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '1/2=2/4; 1/3>1/4; 0.75; 3/4=0.75'**"
          ]
},
        },
        {
          id: "m4-u5-fractions-decimals-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Decimals and fractions are connected because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're different"
                    },
                    {
                              "id": "b",
                              "text": "decimals are base-ten fractions"
                    },
                    {
                              "id": "c",
                              "text": "decimals are bigger"
                    },
                    {
                              "id": "d",
                              "text": "fractions are decimals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Decimals are base-ten fractions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decimals are base-ten fractions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "decimals are base-ten fractions",
          "commonErrors": [
                    "Thinks they're unrelated."
          ]
},
        },
        {
          id: "m4-u5-fractions-decimals-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equivalent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More or less."
                    },
                    {
                              "id": "b",
                              "text": "Same amount."
                    },
                    {
                              "id": "c",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "d",
                              "text": "Change forms."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equivalent\" means Same amount."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equivalent\" means Same amount.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equivalent** = Same amount.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-fractions-decimals-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "b",
                              "text": "Change forms."
                    },
                    {
                              "id": "c",
                              "text": "Part of whole."
                    },
                    {
                              "id": "d",
                              "text": "More or less."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means More or less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means More or less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = More or less.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-fractions-decimals-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change forms."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fraction."
                    },
                    {
                              "id": "c",
                              "text": "Part of whole."
                    },
                    {
                              "id": "d",
                              "text": "First decimal."
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
        {
          id: "m4-u5-fractions-decimals-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of whole."
                    },
                    {
                              "id": "b",
                              "text": "First decimal."
                    },
                    {
                              "id": "c",
                              "text": "Second decimal."
                    },
                    {
                              "id": "d",
                              "text": "Change forms."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Convert\" means Change forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convert\" means Change forms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convert** = Change forms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u5-fractions-decimals-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First decimal."
                    },
                    {
                              "id": "b",
                              "text": "Part of whole."
                    },
                    {
                              "id": "c",
                              "text": "Second decimal."
                    },
                    {
                              "id": "d",
                              "text": "Make smaller."
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
      ],
    },
  ],
};
