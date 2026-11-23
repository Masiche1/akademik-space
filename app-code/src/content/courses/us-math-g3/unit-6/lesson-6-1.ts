import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m3-u6-lesson-6-1",
  code: "6-1",
  title: "Time to the Minute",
  goal: "I CAN tell time to the nearest minute.",
  standards: ["3.MD.A.1"],
  vocabulary: [
    { term: "Minute", definition: "60 seconds." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Long hand", definition: "Minute hand." },
    { term: "Short hand", definition: "Hour hand." },
    { term: "Number", definition: "Each = 5 minutes." },
    { term: "Count by 5s", definition: "Each number = 5 min." },
    { term: "Past", definition: "After the hour." },
    { term: "To", definition: "Before the next hour." },
  ],
  concepts: [
    {
      id: "m3-u6-time-to-minute",
      title: "Time to the minute",
      skill: "Read clocks to the nearest minute.",
      lesson: {
        sections: [
          {
            heading: "Reading the clock",
            body: "The **long hand** (minute hand) points to minutes: each number = **5 minutes** (1=5, 2=10, ..., 12=60). The **short hand** (hour hand) shows the hour.",
          },
          {
            heading: "Exact minutes",
            body: "To find exact minutes, count by 5s from the last number, then count single minutes. 2:37 means 2 hours and 37 minutes.",
          },
        ],
        keyFormulas: [
          { name: "Clock", statement: "Each number = 5 minutes." },
          { name: "Time", statement: "Hour:minute format." },
        ],
        workedExample: {
          problem: "A clock shows long hand on 7 and short hand past 3. What time?",
          solution: "7 = 35 minutes; short hand past 3 = **3:35**.",
        },
      },
      questions: [
        {
          id: "m3-u6-time-to-minute-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Each number on a clock face represents how many minutes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "15"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each number = 5 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each number = 5 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Thinks 1 minute."
          ]
},
        },
        {
          id: "m3-u6-time-to-minute-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Long hand on 9, short hand between 4 and 5. What time?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4:09"
                    },
                    {
                              "id": "b",
                              "text": "9:45"
                    },
                    {
                              "id": "c",
                              "text": "4:45"
                    },
                    {
                              "id": "d",
                              "text": "5:45"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 = 45 min; past 4 = 4:45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 = 45 min; past 4 = 4:45.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4:45",
          "commonErrors": [
                    "Swaps hands."
          ]
},
        },
        {
          id: "m3-u6-time-to-minute-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Long hand on 3, short hand past 8. What time?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8:15"
                    },
                    {
                              "id": "b",
                              "text": "3:40"
                    },
                    {
                              "id": "c",
                              "text": "8:03"
                    },
                    {
                              "id": "d",
                              "text": "3:08"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 = 15 min; past 8 = 8:15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 = 15 min; past 8 = 8:15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8:15",
          "commonErrors": [
                    "Wrong time."
          ]
},
        },
        {
          id: "m3-u6-time-to-minute-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Long hand on 12, short hand past 6. What time?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6:00"
                    },
                    {
                              "id": "b",
                              "text": "12:30"
                    },
                    {
                              "id": "c",
                              "text": "6:12"
                    },
                    {
                              "id": "d",
                              "text": "12:06"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12 = 0 min; past 6 = 6:00."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 = 0 min; past 6 = 6:00.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6:00",
          "commonErrors": [
                    "Wrong time."
          ]
},
        },
        {
          id: "m3-u6-time-to-minute-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw a clock showing 2:45 and 7:20. Explain how you placed the hands.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Time",
                              "statement": "Draw times correctly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws 2:45.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Draws 7:20.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**2:45 and 7:20**",
          "commonErrors": [
                    "Wrong times.",
                    "Hands misplaced."
          ]
},
        },
        {
          id: "m3-u6-time-to-minute-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Minute\" mean?",
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
                              "text": "Minute hand."
                    },
                    {
                              "id": "d",
                              "text": "Hour hand."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Minute\" means 60 seconds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Minute\" means 60 seconds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Minute** = 60 seconds.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u6-time-to-minute-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Minute hand."
                    },
                    {
                              "id": "b",
                              "text": "Hour hand."
                    },
                    {
                              "id": "c",
                              "text": "Each = 5 minutes."
                    },
                    {
                              "id": "d",
                              "text": "60 minutes."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "m3-u6-time-to-minute-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Long hand\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hour hand."
                    },
                    {
                              "id": "b",
                              "text": "Minute hand."
                    },
                    {
                              "id": "c",
                              "text": "Each = 5 minutes."
                    },
                    {
                              "id": "d",
                              "text": "Each number = 5 min."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Long hand\" means Minute hand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Long hand\" means Minute hand.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Long hand** = Minute hand.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
