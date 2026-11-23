import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m5-u3-lesson-3-4",
  code: "3-4",
  title: "Fraction Mult/Div Practice",
  goal: "I CAN practice multiplying and dividing fractions.",
  standards: ["5.NF.B.4", "5.NF.B.7"],
  vocabulary: [
    { term: "Multiply", definition: "Numerators x numerators." },
    { term: "Divide", definition: "Multiply by reciprocal." },
    { term: "Fraction", definition: "Part of whole." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Product", definition: "Answer." },
    { term: "Quotient", definition: "Division answer." },
    { term: "Simplify", definition: "Reduce." },
    { term: "Convert", definition: "Change form." },
  ],
  concepts: [
    {
      id: "m5-u3-fraction-mult-div-practice",
      title: "Fraction Mult/Div Practice",
      skill: "Multiply and divide fractions with practice problems.",
      lesson: {
        sections: [
          {
            heading: "Multiply",
            body: "Num x num, denom x denom.",
          },
          {
            heading: "Divide",
            body: "Multiply by reciprocal.",
          },
          {
            heading: "Mixed",
            body: "Convert to improper first.",
          },
        ],
        keyFormulas: [
          { name: "Multiply", statement: "a/b x c/d = ac/bd" },
          { name: "Divide", statement: "a/b ÷ c/d = a/b x d/c" },
        ],
        workedExample: {
          problem: "Calculate 3/4 x 2/5 and 5/6 ÷ 1/3.",
          solution: "3/4 x 2/5 = 6/20 = 3/10; 5/6 ÷ 1/3 = 5/6 x 3 = 15/6 = 5/2 = 2 1/2.",
        },
      },
      questions: [
        {
          id: "m5-u3-fraction-mult-div-practice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 3/4 x 2/5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3/10"
                    },
                    {
                              "id": "b",
                              "text": "6/20"
                    },
                    {
                              "id": "c",
                              "text": "5/9"
                    },
                    {
                              "id": "d",
                              "text": "6/9"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3/4 x 2/5 = 6/20 = 3/10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3/4 x 2/5 = 6/20 = 3/10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3/10",
          "commonErrors": [
                    "Not simplified."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-practice-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 5/6 ÷ 1/3?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5/2"
                    },
                    {
                              "id": "b",
                              "text": "5/18"
                    },
                    {
                              "id": "c",
                              "text": "1/3"
                    },
                    {
                              "id": "d",
                              "text": "15/6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5/6 x 3 = 15/6 = 5/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5/6 x 3 = 15/6 = 5/2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5/2",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-practice-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multiply 2/3 x 3/4 and divide 7/8 ÷ 1/4. Simplify.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Frac ops",
                              "statement": "1/2 and 7/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies and divides.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2/3 x 3/4 = 6/12 = 1/2; 7/8 ÷ 1/4 = 7/8 x 4 = 28/8 = 7/2 = 3 1/2**",
          "commonErrors": [
                    "Wrong answers.",
                    "Not simplified."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-practice-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To divide fractions, multiply by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the same fraction"
                    },
                    {
                              "id": "b",
                              "text": "the reciprocal"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "the numerator"
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
          "finalAnswer": "the reciprocal",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-practice-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate 2 1/2 x 3/4 and 4 1/3 ÷ 2/3. Convert to improper fractions first.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Frac ops",
                              "statement": "15/8 and 13/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Converts correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Calculates correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**2 1/2 = 5/2; 5/2 x 3/4 = 15/8 = 1 7/8; 4 1/3 = 13/3; 13/3 ÷ 2/3 = 13/3 x 3/2 = 39/6 = 13/2 = 6 1/2**",
          "commonErrors": [
                    "Wrong answers.",
                    "No conversion."
          ]
},
        },
        {
          id: "m5-u3-fraction-mult-div-practice-q6",
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
          id: "m5-u3-fraction-mult-div-practice-q7",
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
                              "text": "Answer."
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
          id: "m5-u3-fraction-mult-div-practice-q8",
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
                              "text": "Answer."
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
