import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m3-u5-lesson-5-5",
  code: "5-5",
  title: "Fractions Review",
  goal: "I CAN use all fraction skills.",
  standards: ["3.NF.A.1", "3.NF.A.2", "3.NF.A.3"],
  vocabulary: [
    { term: "Fraction", definition: "Part of a whole." },
    { term: "Numerator", definition: "Top number." },
    { term: "Denominator", definition: "Bottom number." },
    { term: "Compare", definition: "More or less." },
    { term: "Number line", definition: "Show fractions." },
    { term: "Equivalent", definition: "Same amount." },
    { term: "Simplify", definition: "Make smaller." },
    { term: "Visual", definition: "Picture." },
  ],
  concepts: [
    {
      id: "m3-u5-fractions-review",
      title: "Fractions review",
      skill: "Combine fraction basics, comparison, number line and equivalents.",
      lesson: {
        sections: [
          {
            heading: "All fraction skills",
            body: "Fractions name **parts of a whole**; we can **compare** them, place them on a **number line**, and find **equivalent** fractions.",
          },
          {
            heading: "Put it together",
            body: "Identify, compare, place and simplify fractions.",
          },
        ],
        keyFormulas: [
          { name: "Fractions", statement: "Identify + compare + number line + equivalent = all skills." },
        ],
        workedExample: {
          problem: "Identify, compare, place and simplify fractions.",
          solution: "All fraction skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m3-u5-fractions-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fraction skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only naming"
                    },
                    {
                              "id": "b",
                              "text": "identify, compare, number line, equivalent"
                    },
                    {
                              "id": "c",
                              "text": "only compare"
                    },
                    {
                              "id": "d",
                              "text": "only simplify"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m3-u5-fractions-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify $\\frac{3}{4}$, compare it to $\\frac{1}{4}$, place it on a number line, and find an equivalent fraction.",
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
                                                  "All skills."
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
                                                  "All skills."
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
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**3/4; >1/4; at 3rd mark; =6/8**"
          ]
},
        },
        {
          id: "m3-u5-fractions-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\frac{2}{4}$ is equivalent to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1/2"
                    },
                    {
                              "id": "b",
                              "text": "1/4"
                    },
                    {
                              "id": "c",
                              "text": "2/3"
                    },
                    {
                              "id": "d",
                              "text": "3/4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2/4 = 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2/4 = 1/2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1/2",
          "commonErrors": [
                    "Wrong equivalent."
          ]
},
        },
        {
          id: "m3-u5-fractions-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Top number."
                    },
                    {
                              "id": "b",
                              "text": "Part of a whole."
                    },
                    {
                              "id": "c",
                              "text": "Bottom number."
                    },
                    {
                              "id": "d",
                              "text": "More or less."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m3-u5-fractions-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numerator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bottom number."
                    },
                    {
                              "id": "b",
                              "text": "More or less."
                    },
                    {
                              "id": "c",
                              "text": "Show fractions."
                    },
                    {
                              "id": "d",
                              "text": "Top number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numerator\" means Top number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numerator\" means Top number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numerator** = Top number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-fractions-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Denominator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More or less."
                    },
                    {
                              "id": "b",
                              "text": "Bottom number."
                    },
                    {
                              "id": "c",
                              "text": "Show fractions."
                    },
                    {
                              "id": "d",
                              "text": "Same amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Denominator\" means Bottom number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Denominator\" means Bottom number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Denominator** = Bottom number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u5-fractions-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Show fractions."
                    },
                    {
                              "id": "b",
                              "text": "Same amount."
                    },
                    {
                              "id": "c",
                              "text": "Make smaller."
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
          id: "m3-u5-fractions-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Number line\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same amount."
                    },
                    {
                              "id": "b",
                              "text": "Show fractions."
                    },
                    {
                              "id": "c",
                              "text": "Make smaller."
                    },
                    {
                              "id": "d",
                              "text": "Picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Number line\" means Show fractions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Number line\" means Show fractions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Number line** = Show fractions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
