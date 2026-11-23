import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "m2-u1-lesson-1-5",
  code: "1-5",
  title: "Place Value Review",
  goal: "I CAN count, decompose and compare numbers to 1000.",
  standards: ["2.NBT.A.1", "2.NBT.A.2", "2.NBT.A.4"],
  vocabulary: [
    { term: "Count", definition: "Say numbers in order." },
    { term: "Skip count", definition: "Count by jumps." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Compare", definition: "See which is more." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Place value", definition: "What digit is worth." },
    { term: "Hundreds", definition: "Groups of hundred." },
  ],
  concepts: [
    {
      id: "m2-u1-place-value-review",
      title: "Place value review",
      skill: "Combine counting, decomposition and comparison to 1000.",
      lesson: {
        sections: [
          {
            heading: "All place value",
            body: "We **count** to 1000, **skip count** by 5s/10s/100s, **decompose** numbers into hundreds/tens/ones, and **compare** using <, >, =.",
          },
          {
            heading: "Put it together",
            body: "Use all place value skills to work with numbers to 1000.",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Count + decompose + compare = place value mastery." },
        ],
        workedExample: {
          problem: "Decompose 347 and compare it to 374.",
          solution: "347 = 300 + 40 + 7; 347 < 374 (4 tens < 7 tens).",
        },
      },
      questions: [
        {
          id: "m2-u1-place-value-review-q1",
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
                              "text": "count, decompose, compare"
                    },
                    {
                              "id": "c",
                              "text": "only comparing"
                    },
                    {
                              "id": "d",
                              "text": "only adding"
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
          "finalAnswer": "All place value skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u1-place-value-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decompose 256, compare it to 265, and skip count by 10s from 250.",
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
                                                  "place",
                                                  "All skills",
                                                  "Decompose + compare + skip count."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "place",
                                                  "All skills",
                                                  "Decompose + compare + skip count."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "256 = 200 + 50 + 6.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "256 < 265.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "250, 260, 270, 280, 290, 300.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "256 = 200+50+6; 256 < 265; 250,260,...,300"
          ]
},
        },
        {
          id: "m2-u1-place-value-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 456, the 4 is worth...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "400"
                    },
                    {
                              "id": "c",
                              "text": "40"
                    },
                    {
                              "id": "d",
                              "text": "4,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 hundreds = 400."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 hundreds = 400.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "400",
          "commonErrors": [
                    "Picks face value."
          ]
},
        },
        {
          id: "m2-u1-place-value-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count by jumps."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "d",
                              "text": "Single digits."
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
          id: "m2-u1-place-value-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Skip count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "b",
                              "text": "Single digits."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "Count by jumps."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Skip count\" means Count by jumps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Skip count\" means Count by jumps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Skip count** = Count by jumps.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-place-value-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single digits."
                    },
                    {
                              "id": "b",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "Break into parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Groups of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-place-value-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See which is more."
                    },
                    {
                              "id": "b",
                              "text": "Break into parts."
                    },
                    {
                              "id": "c",
                              "text": "What digit is worth."
                    },
                    {
                              "id": "d",
                              "text": "Single digits."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Single digits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Single digits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Single digits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u1-place-value-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break into parts."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "What digit is worth."
                    },
                    {
                              "id": "d",
                              "text": "Groups of hundred."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
