import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "m1-u1-lesson-1-5",
  code: "1-5",
  title: "Counting Review",
  goal: "I CAN count to 120, use tens and ones, and compare numbers.",
  standards: ["1.NBT.A.1", "1.NBT.A.2", "1.NBT.B.2", "1.NBT.B.3"],
  vocabulary: [
    { term: "Count", definition: "Say numbers in order." },
    { term: "Skip count", definition: "Count by 2s, 5s, 10s." },
    { term: "Tens", definition: "Groups of 10." },
    { term: "Ones", definition: "Single units." },
    { term: "Place value", definition: "What digits are worth." },
    { term: "Compare", definition: "More or less." },
    { term: "Order", definition: "Arrange by size." },
    { term: "120", definition: "One hundred twenty." },
  ],
  concepts: [
    {
      id: "m1-u1-counting-review",
      title: "Counting review",
      skill: "Combine counting, place value, and comparing.",
      lesson: {
        sections: [
          {
            heading: "All counting skills",
            body: "We **count** to 120 by different amounts, break numbers into **tens and ones** (**place value**), and **compare** and **order** numbers.",
          },
          {
            heading: "Put it together",
            body: "Use all counting skills to work with numbers to 120.",
          },
        ],
        keyFormulas: [
          { name: "Counting", statement: "Count + place value + compare + order = number sense." },
        ],
        workedExample: {
          problem: "Count by 10s to 100, then compare 78 and 87.",
          solution: "Count: 10,20,...,100. Compare: 87 > 78 (8 tens > 7 tens).",
        },
      },
      questions: [
        {
          id: "m1-u1-counting-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Counting and place value skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "count, tens/ones, compare, order"
                    },
                    {
                              "id": "c",
                              "text": "only adding"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All counting skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All counting skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all counting skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m1-u1-counting-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by 10s to 100. Then compare 63 and 36 — which is greater and why?",
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
                                                  "method",
                                                  "Count + compare",
                                                  "Count by 10s, compare tens."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Count + compare",
                                                  "Count by 10s, compare tens."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Counts by 10s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says 63 > 36 + reason.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**63 > 36 because 6 tens > 3 tens**"
          ]
},
        },
        {
          id: "m1-u1-counting-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 tens and 3 ones?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Number",
                              "answer": 43
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 tens = 40 + 3 ones = 43."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 tens = 40 + 3 ones = 43.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(43)**",
          "commonErrors": [
                    "Adds wrong places."
          ]
},
        },
        {
          id: "m1-u1-counting-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count by 2s, 5s, 10s."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "d",
                              "text": "Single units."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say numbers in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say numbers in order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say numbers in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-counting-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Skip count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "b",
                              "text": "Single units."
                    },
                    {
                              "id": "c",
                              "text": "What digits are worth."
                    },
                    {
                              "id": "d",
                              "text": "Count by 2s, 5s, 10s."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Skip count\" means Count by 2s, 5s, 10s."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Skip count\" means Count by 2s, 5s, 10s.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Skip count** = Count by 2s, 5s, 10s.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-counting-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single units."
                    },
                    {
                              "id": "b",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "c",
                              "text": "What digits are worth."
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
                              "statement": "\"Tens\" means Groups of 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-counting-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What digits are worth."
                    },
                    {
                              "id": "b",
                              "text": "More or less."
                    },
                    {
                              "id": "c",
                              "text": "Arrange by size."
                    },
                    {
                              "id": "d",
                              "text": "Single units."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Single units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Single units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Single units.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-counting-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More or less."
                    },
                    {
                              "id": "b",
                              "text": "What digits are worth."
                    },
                    {
                              "id": "c",
                              "text": "Arrange by size."
                    },
                    {
                              "id": "d",
                              "text": "One hundred twenty."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means What digits are worth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means What digits are worth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = What digits are worth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
