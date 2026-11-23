import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m0-u5-lesson-5-1",
  code: "5-1",
  title: "Decompose Teen Numbers",
  goal: "I CAN break teen numbers into ten and ones.",
  standards: ["K.NBT.A.1", "K.OA.A.4"],
  vocabulary: [
    { term: "Decompose", definition: "Break a number into parts." },
    { term: "Teen number", definition: "11-19." },
    { term: "Ten", definition: "A group of ten." },
    { term: "Ones", definition: "The extra single items." },
    { term: "Compose", definition: "Put parts back together." },
    { term: "Eleven to nineteen", definition: "Numbers that are ten plus 1-9." },
  ],
  concepts: [
    {
      id: "m0-u5-teen-decompose",
      title: "Decomposing teen numbers",
      skill: "Break teen numbers into ten and ones, and recompose them.",
      lesson: {
        sections: [
          {
            heading: "Ten plus ones",
            body: "Teen numbers **decompose** into a ten and some ones: 14 = **10 + 4**, 18 = **10 + 8**. This helps us understand and work with bigger numbers.",
          },
          {
            heading: "Compose back",
            body: "To **compose**, put the parts together: 10 + 6 = 16. Knowing both directions (break apart and put together) builds number sense.",
          },
        ],
        keyFormulas: [
          { name: "Decompose", statement: "Teen number = 10 + ones (14 = 10 + 4)." },
          { name: "Compose", statement: "10 + ones = teen number (10 + 6 = 16)." },
        ],
        workedExample: {
          problem: "Break 17 into ten and ones.",
          solution: "17 = **10 + 7** — one ten and seven ones.",
        },
      },
      questions: [
        {
          id: "m0-u5-teen-decompose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The number 15 is made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5 + 10"
                    },
                    {
                              "id": "b",
                              "text": "10 + 5"
                    },
                    {
                              "id": "c",
                              "text": "1 + 5"
                    },
                    {
                              "id": "d",
                              "text": "15 + 0"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15 = 10 + 5 (or 5 + 10)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15 = 10 + 5 (or 5 + 10).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 + 5**",
          "commonErrors": [
                    "Picks wrong parts."
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which shows 12 decomposed?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 3"
                    },
                    {
                              "id": "b",
                              "text": "10 + 2"
                    },
                    {
                              "id": "c",
                              "text": "2 + 10 only"
                    },
                    {
                              "id": "d",
                              "text": "12 + 0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12 = 10 + 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 = 10 + 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 + 2**",
          "commonErrors": [
                    "Picks wrong ones digit."
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Break these teen numbers into ten and ones: 13, 16, 19.",
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
                                                  "Decompose",
                                                  "13=10+3, 16=10+6, 19=10+9."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Decompose",
                                                  "13=10+3, 16=10+6, 19=10+9."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Decomposes all 3 correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**13=10+3, 16=10+6, 19=10+9**"
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 10 + 8?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "18"
                    },
                    {
                              "id": "b",
                              "text": "80"
                    },
                    {
                              "id": "c",
                              "text": "108"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 + 8 = 18."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 + 8 = 18.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**18**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Decompose 14 into ten and ones. Then compose it back: what is 10 + 4?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Decompose + compose",
                              "statement": "14=10+4; 10+4=14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Says 14 = 10 + 4.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Says 10 + 4 = 14.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**14 = 10 + 4; 10 + 4 = 14**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong decomposition.",
                    "Cannot compose."
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decompose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11-19."
                    },
                    {
                              "id": "b",
                              "text": "Break a number into parts."
                    },
                    {
                              "id": "c",
                              "text": "A group of ten."
                    },
                    {
                              "id": "d",
                              "text": "The extra single items."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decompose\" means Break a number into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decompose\" means Break a number into parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decompose** = Break a number into parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A group of ten."
                    },
                    {
                              "id": "b",
                              "text": "The extra single items."
                    },
                    {
                              "id": "c",
                              "text": "Put parts back together."
                    },
                    {
                              "id": "d",
                              "text": "11-19."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teen number\" means 11-19."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teen number\" means 11-19.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teen number** = 11-19.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-teen-decompose-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The extra single items."
                    },
                    {
                              "id": "b",
                              "text": "A group of ten."
                    },
                    {
                              "id": "c",
                              "text": "Put parts back together."
                    },
                    {
                              "id": "d",
                              "text": "Numbers that are ten plus 1-9."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means A group of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means A group of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = A group of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
