import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "mpk-u7-lesson-7-5",
  code: "7-5",
  title: "Count Back from 20",
  goal: "I CAN count backward from 20 to 1.",
  standards: ["ELOF-PK.MATH.COUNT.6"],
  vocabulary: [
    { term: "Count back", definition: "Say numbers from a larger number to smaller ones." },
    { term: "Twenty", definition: "The number after 19." },
    { term: "Backward", definition: "From bigger to smaller." },
    { term: "Down", definition: "Moving toward smaller numbers." },
    { term: "Reverse", definition: "The opposite order of counting." },
  ],
  concepts: [
    {
      id: "mpk-u7-count-back-20",
      title: "Counting backward from 20",
      skill: "Count backward from 20 to 1.",
      lesson: {
        sections: [
          {
            heading: "Backward from 20",
            body: "After 20 comes 19, 18, 17... counting backward. Practice: 20, 19, 18, 17, 16, 15...",
          },
          {
            heading: "Use it for subtracting",
            body: "Counting back helps with subtraction: 10 - 3 means start at 10 and count back 3: 9, 8, 7.",
          },
        ],
        keyFormulas: [
          { name: "Count back from 20", statement: "20, 19, 18, ... 1 — each is one less." },
        ],
        workedExample: {
          problem: "Count back from 15 by 1s. What are the next three numbers?",
          solution: "15, 14, 13, 12 — next three after 15 are **14, 13, 12**.",
        },
      },
      questions: [
        {
          id: "mpk-u7-count-back-20-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Count back from 20. What comes next?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "21"
                    },
                    {
                              "id": "b",
                              "text": "19"
                    },
                    {
                              "id": "c",
                              "text": "18"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Backward from 20 goes to 19."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backward from 20 goes to 19.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**19**",
          "commonErrors": [
                    "Keeps going forward to 21."
          ]
},
        },
        {
          id: "mpk-u7-count-back-20-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number comes just before 12 when counting backward?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "13"
                    },
                    {
                              "id": "b",
                              "text": "11"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "14"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Backward: ...13, 12, 11 — before 12 is 11 going down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backward: ...13, 12, 11 — before 12 is 11 going down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**11**",
          "commonErrors": [
                    "Confuses 'before' with 'after'."
          ]
},
        },
        {
          id: "mpk-u7-count-back-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 15 and count back 4 numbers. Where do you stop?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Number",
                              "answer": 11
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15, 14, 13, 12, 11 — four steps back lands on 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15, 14, 13, 12, 11 — four steps back lands on 11.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$11$",
          "commonErrors": [
                    "Counts forward instead."
          ]
},
        },
        {
          id: "mpk-u7-count-back-20-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct backward count from 18?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "18, 17, 16, 15"
                    },
                    {
                              "id": "b",
                              "text": "18, 19, 20, 21"
                    },
                    {
                              "id": "c",
                              "text": "18, 16, 14, 12"
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
                              "statement": "Backward by 1s: 18, 17, 16, 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backward by 1s: 18, 17, 16, 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**18, 17, 16, 15**",
          "commonErrors": [
                    "Skips numbers or goes forward."
          ]
},
        },
        {
          id: "mpk-u7-count-back-20-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count backward from 20 to 10. Then say which number is halfway between 10 and 20.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count back",
                              "statement": "Say 20, 19, 18, ... 10 slowly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Backward count: 20 down to 10.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Halfway between 10 and 20 is 15.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**15 is halfway**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Counting forward instead of backward.",
                    "Wrong halfway number."
          ]
},
        },
        {
          id: "mpk-u7-count-back-20-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count back\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number after 19."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers from a larger number to smaller ones."
                    },
                    {
                              "id": "c",
                              "text": "From bigger to smaller."
                    },
                    {
                              "id": "d",
                              "text": "Moving toward smaller numbers."
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
          id: "mpk-u7-count-back-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Twenty\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From bigger to smaller."
                    },
                    {
                              "id": "b",
                              "text": "Moving toward smaller numbers."
                    },
                    {
                              "id": "c",
                              "text": "The opposite order of counting."
                    },
                    {
                              "id": "d",
                              "text": "The number after 19."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Twenty\" means The number after 19."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Twenty\" means The number after 19.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Twenty** = The number after 19.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u7-count-back-20-q8",
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
                              "text": "From bigger to smaller."
                    },
                    {
                              "id": "c",
                              "text": "The opposite order of counting."
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
      ],
    },
  ],
};
