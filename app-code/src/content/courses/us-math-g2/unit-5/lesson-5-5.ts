import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m2-u5-lesson-5-5",
  code: "5-5",
  title: "Measurement Review",
  goal: "I CAN measure length, tell time and count money.",
  standards: ["2.MD.A.1", "2.MD.A.2", "2.MD.A.3", "2.MD.C.7", "2.MD.C.8"],
  vocabulary: [
    { term: "Length", definition: "How long." },
    { term: "Measure", definition: "Find size." },
    { term: "Inch", definition: "Unit of length." },
    { term: "Time", definition: "What time it is." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Minute", definition: "60 seconds." },
    { term: "Money", definition: "Coins and bills." },
    { term: "Cent", definition: "Small money unit." },
  ],
  concepts: [
    {
      id: "m2-u5-measurement-review",
      title: "Measurement review",
      skill: "Combine length, time and money measurement.",
      lesson: {
        sections: [
          {
            heading: "All measurement",
            body: "We **measure** **length** (inches/cm), tell **time** (hour/minute), and count **money** (coins/bills).",
          },
          {
            heading: "Put it together",
            body: "Use all measurement skills.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Length + time + money = measurement mastery." },
        ],
        workedExample: {
          problem: "Measure a pencil (length), tell 3:30 (time), count 2 quarters + 1 dime (money).",
          solution: "7 inches; 3:30; 60¢.",
        },
      },
      questions: [
        {
          id: "m2-u5-measurement-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only length"
                    },
                    {
                              "id": "b",
                              "text": "length, time, money"
                    },
                    {
                              "id": "c",
                              "text": "only time"
                    },
                    {
                              "id": "d",
                              "text": "only money"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All measurement skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All measurement skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All measurement skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measure an object, tell the time on a clock, and count a set of coins.",
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
                                                  "measure",
                                                  "All skills",
                                                  "Length + time + money."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "measure",
                                                  "All skills",
                                                  "Length + time + money."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Measures length.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Tells time.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Counts money.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "e.g., 7 in; 3:30; 60¢"
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "1 foot equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 inches"
                    },
                    {
                              "id": "b",
                              "text": "12 inches"
                    },
                    {
                              "id": "c",
                              "text": "100 inches"
                    },
                    {
                              "id": "d",
                              "text": "60 inches"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 foot = 12 inches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 foot = 12 inches.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12 inches",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find size."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "Unit of length."
                    },
                    {
                              "id": "d",
                              "text": "What time it is."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unit of length."
                    },
                    {
                              "id": "b",
                              "text": "What time it is."
                    },
                    {
                              "id": "c",
                              "text": "60 minutes."
                    },
                    {
                              "id": "d",
                              "text": "Find size."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Find size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Find size.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Find size.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inch\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What time it is."
                    },
                    {
                              "id": "b",
                              "text": "Unit of length."
                    },
                    {
                              "id": "c",
                              "text": "60 minutes."
                    },
                    {
                              "id": "d",
                              "text": "60 seconds."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inch\" means Unit of length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inch\" means Unit of length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inch** = Unit of length.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Time\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 minutes."
                    },
                    {
                              "id": "b",
                              "text": "60 seconds."
                    },
                    {
                              "id": "c",
                              "text": "Coins and bills."
                    },
                    {
                              "id": "d",
                              "text": "What time it is."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Time\" means What time it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Time\" means What time it is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Time** = What time it is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-measurement-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 seconds."
                    },
                    {
                              "id": "b",
                              "text": "60 minutes."
                    },
                    {
                              "id": "c",
                              "text": "Coins and bills."
                    },
                    {
                              "id": "d",
                              "text": "Small money unit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hour\" means 60 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hour\" means 60 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hour** = 60 minutes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
