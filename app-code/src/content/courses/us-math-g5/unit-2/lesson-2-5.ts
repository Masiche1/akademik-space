import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m5-u2-lesson-2-5",
  code: "2-5",
  title: "Fractions Review",
  goal: "I CAN use all fraction addition/subtraction skills.",
  standards: ["5.NF.A.1"],
  vocabulary: [
    { term: "Fraction", definition: "Part of whole." },
    { term: "Common denominator", definition: "Same bottom." },
    { term: "Equivalent", definition: "Same amount." },
    { term: "Mixed number", definition: "Whole + fraction." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Regroup", definition: "Borrow." },
    { term: "Simplify", definition: "Make smaller." },
  ],
  concepts: [
    {
      id: "m5-u2-fraction-review",
      title: "Fractions review",
      skill: "Combine adding/subtracting fractions and mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "All fraction skills",
            body: "Add/subtract **like and unlike** fractions using **common denominators**, and work with **mixed numbers** using **regrouping**.",
          },
          {
            heading: "Put it together",
            body: "Use all fraction skills for complex problems.",
          },
        ],
        keyFormulas: [
          { name: "Fractions", statement: "Common denominator + regrouping = all skills." },
        ],
        workedExample: {
          problem: "Use all fraction skills.",
          solution: "All skills = complete fraction understanding.",
        },
      },
      questions: [
        {
          id: "m5-u2-fraction-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fraction skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only adding"
                    },
                    {
                              "id": "b",
                              "text": "add, subtract, mixed numbers"
                    },
                    {
                              "id": "c",
                              "text": "only subtracting"
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
                              "statement": "All fraction skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All fraction skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "add, subtract, mixed numbers",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u2-fraction-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Add two fractions with unlike denominators and subtract two mixed numbers.",
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
                                                  "All fractions",
                                                  "All operations."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All fractions",
                                                  "All operations."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all operations.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '2/3+1/4=11/12; 3 1/2-1 3/4=1 3/4'**"
          ]
},
        },
        {
          id: "m5-u2-fraction-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The key to fraction addition/subtraction is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "common denominator"
                    },
                    {
                              "id": "b",
                              "text": "numerator"
                    },
                    {
                              "id": "c",
                              "text": "simplifying"
                    },
                    {
                              "id": "d",
                              "text": "rounding"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Common denominator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Common denominator.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "common denominator",
          "commonErrors": [
                    "Wrong key."
          ]
},
        },
        {
          id: "m5-u2-fraction-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same bottom."
                    },
                    {
                              "id": "b",
                              "text": "Part of whole."
                    },
                    {
                              "id": "c",
                              "text": "Same amount."
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
          id: "m5-u2-fraction-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Common denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same amount."
                    },
                    {
                              "id": "b",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "c",
                              "text": "Combine."
                    },
                    {
                              "id": "d",
                              "text": "Same bottom."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Common denominator\" means Same bottom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Common denominator\" means Same bottom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Common denominator** = Same bottom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u2-fraction-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equivalent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole + fraction."
                    },
                    {
                              "id": "b",
                              "text": "Same amount."
                    },
                    {
                              "id": "c",
                              "text": "Combine."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
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
          id: "m5-u2-fraction-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Borrow."
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
          id: "m5-u2-fraction-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Borrow."
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
                              "statement": "\"Add\" means Combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
