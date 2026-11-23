import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "m5-u3-lesson-3-5",
  code: "3-5",
  title: "Fraction Mult/Div Review",
  goal: "I CAN use all fraction multiplication and division skills.",
  standards: ["5.NF.B.4", "5.NF.B.7"],
  vocabulary: [
    { term: "Multiply", definition: "Numerators x numerators." },
    { term: "Divide", definition: "Multiply by reciprocal." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Convert", definition: "Change form." },
    { term: "Simplify", definition: "Reduce." },
    { term: "Product", definition: "Multiplication answer." },
    { term: "Quotient", definition: "Division answer." },
  ],
  concepts: [
    {
      id: "m5-u3-fraction-mult-div-review",
      title: "Fraction mult/div review",
      skill: "Combine fraction multiplication and division.",
      lesson: {
        sections: [
          {
            heading: "All fraction ops",
            body: "**Multiply** fractions (num x num, denom x denom), **divide** by multiplying by **reciprocal**, work with **mixed numbers** by converting.",
          },
          {
            heading: "Put it together",
            body: "Use all fraction multiplication/division skills.",
          },
        ],
        keyFormulas: [
          { name: "Fraction ops", statement: "Multiply + divide + mixed = all skills." },
        ],
        workedExample: {
          problem: "Use all fraction mult/div skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u3-fraction-mult-div-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fraction mult/div skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only multiply"
                    },
                    {
                              "id": "b",
                              "text": "multiply, divide, mixed numbers"
                    },
                    {
                              "id": "c",
                              "text": "only divide"
                    },
                    {
                              "id": "d",
                              "text": "only mixed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply, divide, mixed numbers",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiply two fractions, divide two fractions, and multiply a mixed number by a fraction.",
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
                                                  "All frac ops",
                                                  "All three operations."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All frac ops",
                                                  "All three operations."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '2/3 x 3/4 = 1/2; 1/2 ÷ 1/4 = 2; 1 1/2 x 2/3 = 1'**"
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The reciprocal of $\\frac{3}{4}$ is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3/4"
                    },
                    {
                              "id": "b",
                              "text": "4/3"
                    },
                    {
                              "id": "c",
                              "text": "-3/4"
                    },
                    {
                              "id": "d",
                              "text": "1/4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Flip numerator/denominator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flip numerator/denominator.",
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
          id: "m5-u3-fraction-mult-div-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Multiply by reciprocal."
                    },
                    {
                              "id": "b",
                              "text": "Numerators x numerators."
                    },
                    {
                              "id": "c",
                              "text": "Part of whole."
                    },
                    {
                              "id": "d",
                              "text": "Whole + fraction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiply\" means Numerators x numerators."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiply\" means Numerators x numerators.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiply** = Numerators x numerators.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divide\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of whole."
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
                              "text": "Multiply by reciprocal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divide\" means Multiply by reciprocal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divide\" means Multiply by reciprocal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divide** = Multiply by reciprocal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "b",
                              "text": "Part of whole."
                    },
                    {
                              "id": "c",
                              "text": "Change form."
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
          id: "m5-u3-fraction-mult-div-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change form."
                    },
                    {
                              "id": "b",
                              "text": "Reduce."
                    },
                    {
                              "id": "c",
                              "text": "Multiplication answer."
                    },
                    {
                              "id": "d",
                              "text": "Whole + fraction."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m5-u3-fraction-mult-div-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reduce."
                    },
                    {
                              "id": "b",
                              "text": "Change form."
                    },
                    {
                              "id": "c",
                              "text": "Multiplication answer."
                    },
                    {
                              "id": "d",
                              "text": "Division answer."
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
