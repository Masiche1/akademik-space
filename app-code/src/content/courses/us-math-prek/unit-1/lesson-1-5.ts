import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "mpk-u1-lesson-1-5",
  code: "1-5",
  title: "Count Backward from 10",
  goal: "I CAN count backward from 10 to 1.",
  standards: ["ELOF-PK.MATH.COUNT.3"],
  vocabulary: [
    { term: "Count back", definition: "Say numbers from a larger number to smaller ones." },
    { term: "Backward", definition: "From bigger to smaller." },
    { term: "Down", definition: "Moving toward smaller numbers." },
    { term: "Reverse", definition: "The opposite order of counting." },
    { term: "Stop at", definition: "The number where counting ends." },
  ],
  concepts: [
    {
      id: "mpk-u1-count-back",
      title: "Counting backward",
      skill: "Count backward from 10 to 1.",
      lesson: {
        sections: [
          {
            heading: "Backward order",
            body: "Forward is 1, 2, 3... Backward is 10, 9, 8, 7... Each number is one less than the number before it.",
          },
          {
            heading: "Use it for taking away",
            body: "If you have 8 cookies and eat 1, counting back from 8 gives 7 — the number left. Backward counting helps with subtraction.",
          },
        ],
        keyFormulas: [
          { name: "Count back", statement: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1 — each is one less." },
        ],
        workedExample: {
          problem: "Count backward from 6 by 1s. What are the next three numbers?",
          solution: "6, 5, 4, 3 — next three after 6 are **5, 4, 3**.",
        },
      },
      questions: [
        {
          id: "mpk-u1-count-back-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Count back from 10. What comes next after 10?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "1"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Backward from 10 goes to 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backward from 10 goes to 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**9**",
          "commonErrors": [
                    "Keeps going forward to 11."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number comes just before 4 when counting backward?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "2"
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
                              "statement": "Backward order near 4: 5, 4, 3 — before 4 is 3 going down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backward order near 4: 5, 4, 3 — before 4 is 3 going down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Confuses 'before' with 'after'."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 8 and count back 3 numbers. Where do you stop?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Number",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8, 7, 6, 5 — three steps back lands on 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8, 7, 6, 5 — three steps back lands on 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counts forward instead."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct backward count from 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7, 6, 5, 4"
                    },
                    {
                              "id": "b",
                              "text": "7, 8, 9, 10"
                    },
                    {
                              "id": "c",
                              "text": "7, 5, 3, 1"
                    },
                    {
                              "id": "d",
                              "text": "1, 2, 3, 4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Backward by 1s: 7, 6, 5, 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backward by 1s: 7, 6, 5, 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7, 6, 5, 4**",
          "commonErrors": [
                    "Skips numbers or goes forward."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count backward from 10 to 1. Then say which number is in the middle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count back",
                              "statement": "Say 10, 9, 8, ... 1 slowly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Backward count: 10 down to 1.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "The middle of 1-10 is between 5 and 6.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**5 and 6 are in the middle.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Counting forward instead of backward.",
                    "Forgetting a number in the middle."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count back\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From bigger to smaller."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers from a larger number to smaller ones."
                    },
                    {
                              "id": "c",
                              "text": "Moving toward smaller numbers."
                    },
                    {
                              "id": "d",
                              "text": "The opposite order of counting."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count back\" means Say numbers from a larger number to smaller ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count back\" means Say numbers from a larger number to smaller ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count back** = Say numbers from a larger number to smaller ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Backward\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Moving toward smaller numbers."
                    },
                    {
                              "id": "b",
                              "text": "The opposite order of counting."
                    },
                    {
                              "id": "c",
                              "text": "The number where counting ends."
                    },
                    {
                              "id": "d",
                              "text": "From bigger to smaller."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Backward\" means From bigger to smaller."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Backward\" means From bigger to smaller.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Backward** = From bigger to smaller.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-count-back-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Down\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The opposite order of counting."
                    },
                    {
                              "id": "b",
                              "text": "Moving toward smaller numbers."
                    },
                    {
                              "id": "c",
                              "text": "The number where counting ends."
                    },
                    {
                              "id": "d",
                              "text": "Say numbers from a larger number to smaller ones."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Down\" means Moving toward smaller numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Down\" means Moving toward smaller numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Down** = Moving toward smaller numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
