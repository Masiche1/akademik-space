import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m2-u8-lesson-8-1",
  code: "8-1",
  title: "Numbers Review",
  goal: "I CAN count, decompose, compare, add and subtract within 1000.",
  standards: ["2.NBT.A.1", "2.NBT.A.2", "2.NBT.A.4", "2.NBT.B.7", "2.OA.A.1"],
  vocabulary: [
    { term: "Count", definition: "Say numbers in order." },
    { term: "Place value", definition: "What digit is worth." },
    { term: "Compare", definition: "See which is more." },
    { term: "Add", definition: "Combine amounts." },
    { term: "Subtract", definition: "Take away." },
    { term: "Regroup", definition: "Carry or borrow." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
  ],
  concepts: [
    {
      id: "m2-u8-review-numbers",
      title: "Numbers review",
      skill: "Combine all number skills: place value, addition, subtraction.",
      lesson: {
        sections: [
          {
            heading: "All number skills",
            body: "We **count** to 1000, **decompose** numbers, **compare** them, and **add/subtract** with **regrouping**.",
          },
          {
            heading: "Put it together",
            body: "Use all number skills.",
          },
        ],
        keyFormulas: [
          { name: "Numbers", statement: "Place value + add + subtract = number mastery." },
        ],
        workedExample: {
          problem: "Decompose 456, compare to 465, add 456+234, subtract 456-234.",
          solution: "456=400+50+6; 456<465; 456+234=690; 456-234=222.",
        },
      },
      questions: [
        {
          id: "m2-u8-review-numbers-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Number skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "place value, compare, add, subtract"
                    },
                    {
                              "id": "c",
                              "text": "only adding"
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
                              "statement": "All number skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All number skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All number skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u8-review-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decompose 567, compare to 576, add 567+234, subtract 567-234.",
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
                                                  "numbers",
                                                  "All skills",
                                                  "Decompose + compare + add + sub."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "numbers",
                                                  "All skills",
                                                  "Decompose + compare + add + sub."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "567 = 500+60+7.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "567 < 576.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "567 + 234 = 801.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "567 - 234 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "567=500+60+7; 567<576; 567+234=801; 567-234=333"
          ]
},
        },
        {
          id: "m2-u8-review-numbers-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sum of 456 + 345 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "791"
                    },
                    {
                              "id": "b",
                              "text": "801"
                    },
                    {
                              "id": "c",
                              "text": "711"
                    },
                    {
                              "id": "d",
                              "text": "891"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "456 + 345 = 801."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "456 + 345 = 801.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "801",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u8-review-numbers-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What digit is worth."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "Combine amounts."
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
          id: "m2-u8-review-numbers-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See which is more."
                    },
                    {
                              "id": "b",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "What digit is worth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means What digit is worth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means What digit is worth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = What digit is worth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u8-review-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Carry or borrow."
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
        {
          id: "m2-u8-review-numbers-q7",
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
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "c",
                              "text": "Groups of hundred."
                    },
                    {
                              "id": "d",
                              "text": "Combine amounts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine amounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine amounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine amounts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u8-review-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Groups of hundred."
                    },
                    {
                              "id": "d",
                              "text": "Groups of ten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
