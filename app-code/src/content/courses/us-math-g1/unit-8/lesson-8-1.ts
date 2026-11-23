import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m1-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Numbers",
  goal: "I CAN count to 120, use place value and compare numbers.",
  standards: ["1.NBT.A.1", "1.NBT.A.2", "1.NBT.B.2"],
  vocabulary: [
    { term: "Count", definition: "Say numbers." },
    { term: "Skip count", definition: "By 2s, 5s, 10s." },
    { term: "Tens", definition: "Groups of 10." },
    { term: "Ones", definition: "Units." },
    { term: "Place value", definition: "Digit worth." },
    { term: "Compare", definition: "More/less." },
    { term: "Order", definition: "Arrange." },
    { term: "120", definition: "One hundred twenty." },
  ],
  concepts: [
    {
      id: "m1-u8-review-numbers",
      title: "Numbers review",
      skill: "Combine counting, place value and comparing.",
      lesson: {
        sections: [
          {
            heading: "All number skills",
            body: "We **count** to 120, use **tens and ones** (**place value**), and **compare** and **order** numbers.",
          },
          {
            heading: "Put it together",
            body: "Use all number skills.",
          },
        ],
        keyFormulas: [
          { name: "Numbers", statement: "Count + place value + compare + order = number sense." },
        ],
        workedExample: {
          problem: "Count by 10s to 100, decompose 57, compare 63 and 36.",
          solution: "10,20,...,100; 57=5 tens+7 ones; 63>36.",
        },
      },
      questions: [
        {
          id: "m1-u8-review-numbers-q1",
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
                              "text": "count, place value, compare, order"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m1-u8-review-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by 10s to 100. Decompose 68 into tens and ones. Compare 74 and 47.",
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
                                                  "All numbers",
                                                  "Count + decompose + compare."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "All numbers",
                                                  "Count + decompose + compare."
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
                    "**68=6 tens+8 ones; 74>47**"
          ]
},
        },
        {
          id: "m1-u8-review-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 7 tens and 2 ones?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Number",
                              "answer": 72
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 tens = 70 + 2 = 72."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 tens = 70 + 2 = 72.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(72)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u8-review-numbers-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "By 2s, 5s, 10s."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers."
                    },
                    {
                              "id": "c",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "d",
                              "text": "Units."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-numbers-q5",
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
                              "text": "Units."
                    },
                    {
                              "id": "c",
                              "text": "Digit worth."
                    },
                    {
                              "id": "d",
                              "text": "By 2s, 5s, 10s."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Skip count\" means By 2s, 5s, 10s."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Skip count\" means By 2s, 5s, 10s.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Skip count** = By 2s, 5s, 10s.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Units."
                    },
                    {
                              "id": "b",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "c",
                              "text": "Digit worth."
                    },
                    {
                              "id": "d",
                              "text": "More/less."
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
          id: "m1-u8-review-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Digit worth."
                    },
                    {
                              "id": "b",
                              "text": "More/less."
                    },
                    {
                              "id": "c",
                              "text": "Arrange."
                    },
                    {
                              "id": "d",
                              "text": "Units."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Units.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More/less."
                    },
                    {
                              "id": "b",
                              "text": "Digit worth."
                    },
                    {
                              "id": "c",
                              "text": "Arrange."
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
                              "statement": "\"Place value\" means Digit worth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Digit worth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Digit worth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
