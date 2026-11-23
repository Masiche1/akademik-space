import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "m3-u1-lesson-1-5",
  code: "1-5",
  title: "Place Value Review",
  goal: "I CAN use all place value and rounding skills.",
  standards: ["3.NBT.A.1", "3.NBT.A.2"],
  vocabulary: [
    { term: "Place value", definition: "Hundreds, tens, ones." },
    { term: "Round", definition: "Nearest value." },
    { term: "Nearest ten", definition: "Closest 10." },
    { term: "Nearest hundred", definition: "Closest 100." },
    { term: "Estimate", definition: "Close guess." },
    { term: "Compare", definition: "More or less." },
    { term: "Digit", definition: "One number symbol." },
    { term: "Value", definition: "What digit is worth." },
  ],
  concepts: [
    {
      id: "m3-u1-place-value-review",
      title: "Place value review",
      skill: "Combine place value, rounding and estimation.",
      lesson: {
        sections: [
          {
            heading: "All place value skills",
            body: "Place value tells us what each digit is worth. We can **compare**, **round** to nearest ten/hundred, and **estimate** sums and differences.",
          },
          {
            heading: "Put it together",
            body: "Use place value to read, compare, round and estimate numbers.",
          },
        ],
        keyFormulas: [
          { name: "Place value review", statement: "Read + compare + round + estimate = all skills." },
        ],
        workedExample: {
          problem: "Round 463 to nearest ten, nearest hundred, and estimate 463+285.",
          solution: "460 (tens), 500 (hundreds), ~750 (estimate).",
        },
      },
      questions: [
        {
          id: "m3-u1-place-value-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Place value skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "read, compare, round, estimate"
                    },
                    {
                              "id": "c",
                              "text": "only rounding"
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
                              "statement": "All place value skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All place value skills.",
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
          id: "m3-u1-place-value-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 528 to nearest ten and hundred. Compare it to 472. Estimate 528+472.",
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
                                                  "All place value",
                                                  "Round + compare + estimate."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All place value",
                                                  "Round + compare + estimate."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**530 (ten), 500 (hundred), 528>472, ~1000**"
          ]
},
        },
        {
          id: "m3-u1-place-value-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The value of 8 in 856 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "80"
                    },
                    {
                              "id": "c",
                              "text": "800"
                    },
                    {
                              "id": "d",
                              "text": "8000"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 is in hundreds = 800."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 is in hundreds = 800.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "800",
          "commonErrors": [
                    "Reads digit only."
          ]
},
        },
        {
          id: "m3-u1-place-value-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nearest value."
                    },
                    {
                              "id": "b",
                              "text": "Hundreds, tens, ones."
                    },
                    {
                              "id": "c",
                              "text": "Closest 10."
                    },
                    {
                              "id": "d",
                              "text": "Closest 100."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Hundreds, tens, ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Hundreds, tens, ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Hundreds, tens, ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-place-value-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Round\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Closest 10."
                    },
                    {
                              "id": "b",
                              "text": "Closest 100."
                    },
                    {
                              "id": "c",
                              "text": "Close guess."
                    },
                    {
                              "id": "d",
                              "text": "Nearest value."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Round\" means Nearest value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Round\" means Nearest value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Round** = Nearest value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-place-value-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nearest ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Closest 100."
                    },
                    {
                              "id": "b",
                              "text": "Closest 10."
                    },
                    {
                              "id": "c",
                              "text": "Close guess."
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
                              "statement": "\"Nearest ten\" means Closest 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nearest ten\" means Closest 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nearest ten** = Closest 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-place-value-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nearest hundred\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Close guess."
                    },
                    {
                              "id": "b",
                              "text": "More or less."
                    },
                    {
                              "id": "c",
                              "text": "One number symbol."
                    },
                    {
                              "id": "d",
                              "text": "Closest 100."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nearest hundred\" means Closest 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nearest hundred\" means Closest 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nearest hundred** = Closest 100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-place-value-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Estimate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More or less."
                    },
                    {
                              "id": "b",
                              "text": "Close guess."
                    },
                    {
                              "id": "c",
                              "text": "One number symbol."
                    },
                    {
                              "id": "d",
                              "text": "What digit is worth."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Estimate\" means Close guess."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Estimate\" means Close guess.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Estimate** = Close guess.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
