import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m0-u2-lesson-2-5",
  code: "2-5",
  title: "Number Line",
  goal: "I CAN place numbers on a number line in order.",
  standards: ["K.CC.A.2"],
  vocabulary: [
    { term: "Number line", definition: "A line with numbers in order from left to right." },
    { term: "Order", definition: "Numbers arranged from smallest to largest." },
    { term: "Left", definition: "Smaller numbers go on the left." },
    { term: "Right", definition: "Larger numbers go on the right." },
    { term: "Between", definition: "A number in the middle of two others." },
  ],
  concepts: [
    {
      id: "m0-u2-number-line",
      title: "Number lines",
      skill: "Place numbers in order on a number line.",
      lesson: {
        sections: [
          {
            heading: "What is a number line?",
            body: "A **number line** shows numbers in order from **left to right**, smallest on the left, largest on the right. Each number has its own spot.",
          },
          {
            heading: "Order on the line",
            body: "Numbers go in sequence: ... 3, 4, 5, 6 ... The number **between** 4 and 6 is 5. A number line helps us see which numbers are bigger or smaller.",
          },
        ],
        keyFormulas: [
          { name: "Number line", statement: "Smallest on left, largest on right; each number in order." },
        ],
        workedExample: {
          problem: "Where does 7 go on a number line?",
          solution: "7 goes **after 6 and before 8** — between 6 and 8.",
        },
      },
      questions: [
        {
          id: "m0-u2-number-line-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a number line, smaller numbers are on the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "right"
                    },
                    {
                              "id": "b",
                              "text": "left"
                    },
                    {
                              "id": "c",
                              "text": "top"
                    },
                    {
                              "id": "d",
                              "text": "middle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Smaller numbers on left, larger on right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Smaller numbers on left, larger on right.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**left**",
          "commonErrors": [
                    "Reverses direction."
          ]
},
        },
        {
          id: "m0-u2-number-line-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which number is between 5 and 7 on a number line?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "3"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 is between 5 and 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 is between 5 and 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**6**",
          "commonErrors": [
                    "Picks number outside range."
          ]
},
        },
        {
          id: "m0-u2-number-line-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw a number line from 1 to 10. Where does 5 go? Where does 9 go?",
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
                                                  "Number line",
                                                  "Order numbers left to right."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Number line",
                                                  "Order numbers left to right."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Places 5 and 9 correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**5 between 4 and 6; 9 between 8 and 10**"
          ]
},
        },
        {
          id: "m0-u2-number-line-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number comes right after 8 on a number line?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "After 8 comes 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After 8 comes 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**9**",
          "commonErrors": [
                    "Picks 7."
          ]
},
        },
        {
          id: "m0-u2-number-line-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Put these numbers in order on a number line: 3, 7, 1, 5. Which is smallest? Which is largest?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number order",
                              "statement": "1, 3, 5, 7; 1 smallest, 7 largest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Orders numbers correctly.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Names smallest and largest.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**1, 3, 5, 7; smallest=1, largest=7**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong order.",
                    "Wrong extremes."
          ]
},
        },
        {
          id: "m0-u2-number-line-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Number line\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers arranged from smallest to largest."
                    },
                    {
                              "id": "b",
                              "text": "A line with numbers in order from left to right."
                    },
                    {
                              "id": "c",
                              "text": "Smaller numbers go on the left."
                    },
                    {
                              "id": "d",
                              "text": "Larger numbers go on the right."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Number line\" means A line with numbers in order from left to right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Number line\" means A line with numbers in order from left to right.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Number line** = A line with numbers in order from left to right.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-number-line-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Order\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Smaller numbers go on the left."
                    },
                    {
                              "id": "b",
                              "text": "Larger numbers go on the right."
                    },
                    {
                              "id": "c",
                              "text": "A number in the middle of two others."
                    },
                    {
                              "id": "d",
                              "text": "Numbers arranged from smallest to largest."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Order\" means Numbers arranged from smallest to largest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Order\" means Numbers arranged from smallest to largest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Order** = Numbers arranged from smallest to largest.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-number-line-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Left\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Larger numbers go on the right."
                    },
                    {
                              "id": "b",
                              "text": "Smaller numbers go on the left."
                    },
                    {
                              "id": "c",
                              "text": "A number in the middle of two others."
                    },
                    {
                              "id": "d",
                              "text": "A line with numbers in order from left to right."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Left\" means Smaller numbers go on the left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Left\" means Smaller numbers go on the left.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Left** = Smaller numbers go on the left.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
