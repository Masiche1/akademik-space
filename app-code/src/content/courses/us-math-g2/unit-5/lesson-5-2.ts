import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m2-u5-lesson-5-2",
  code: "5-2",
  title: "Telling Time",
  goal: "I CAN tell time to the hour and half hour.",
  standards: ["2.MD.C.7"],
  vocabulary: [
    { term: "Time", definition: "What time it is." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Minute", definition: "60 seconds." },
    { term: "Clock", definition: "Shows time." },
    { term: "Hour hand", definition: "Short hand." },
    { term: "Minute hand", definition: "Long hand." },
    { term: "Half past", definition: ":30." },
    { term: "O'clock", definition: "Exactly on the hour." },
  ],
  concepts: [
    {
      id: "m2-u5-measure-time",
      title: "Telling time",
      skill: "Tell time to the hour and half hour using clock hands.",
      lesson: {
        sections: [
          {
            heading: "Read the clock",
            body: "The **hour hand** (short) points to the hour; the **minute hand** (long) points to minutes. At **o'clock**, minute hand points to 12. At **half past**, it points to 6.",
          },
          {
            heading: "Hour and half hour",
            body: "We can tell time to the **hour** (3:00) and **half hour** (3:30). 'Half past' means 30 minutes.",
          },
        ],
        keyFormulas: [
          { name: "Time", statement: "Hour hand=hour, minute hand=minutes. :00=o'clock, :30=half past." },
        ],
        workedExample: {
          problem: "The hour hand points to 4, minute hand to 12. What time?",
          solution: "**4:00** (o'clock — minute hand on 12).",
        },
      },
      questions: [
        {
          id: "m2-u5-measure-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the minute hand points to 12, it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "half past"
                    },
                    {
                              "id": "b",
                              "text": "o'clock"
                    },
                    {
                              "id": "c",
                              "text": "quarter past"
                    },
                    {
                              "id": "d",
                              "text": "noon only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Minute hand on 12 = o'clock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute hand on 12 = o'clock.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "o'clock",
          "commonErrors": [
                    "Picks half past."
          ]
},
        },
        {
          id: "m2-u5-measure-time-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The minute hand points to 6. What time is it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "o'clock"
                    },
                    {
                              "id": "b",
                              "text": "half past the hour"
                    },
                    {
                              "id": "c",
                              "text": "quarter past"
                    },
                    {
                              "id": "d",
                              "text": "midnight"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Minute hand on 6 = :30 = half past."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute hand on 6 = :30 = half past.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "half past",
          "commonErrors": [
                    "Picks o'clock."
          ]
},
        },
        {
          id: "m2-u5-measure-time-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Draw a clock showing 3:30. Where do the hands point?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "time",
                              "name": "Half hour",
                              "statement": "Hour hand on 3, minute on 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hour hand on 3.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Minute hand on 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3:30 — hour on 3, minute on 6",
          "commonErrors": "Wrong hands."
},
        },
        {
          id: "m2-u5-measure-time-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many minutes are in one hour?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "1 hour = 60 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "60",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "60",
          "commonErrors": [
                    "Wrong number."
          ]
},
        },
        {
          id: "m2-u5-measure-time-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell the time shown on a clock with hour hand on 7 and minute hand on 12. Then describe 7:30.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "time",
                              "name": "Hour + half",
                              "statement": "Read clock + describe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7:00 (minute on 12).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "7:30: hour on 7, minute on 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7:00; 7:30 — hour on 7, minute on 6",
          "commonErrors": "Wrong time."
},
        },
        {
          id: "m2-u5-measure-time-q6",
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
                              "text": "What time it is."
                    },
                    {
                              "id": "c",
                              "text": "60 seconds."
                    },
                    {
                              "id": "d",
                              "text": "Shows time."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m2-u5-measure-time-q7",
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
                              "text": "Shows time."
                    },
                    {
                              "id": "c",
                              "text": "Short hand."
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
          id: "m2-u5-measure-time-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Minute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows time."
                    },
                    {
                              "id": "b",
                              "text": "60 seconds."
                    },
                    {
                              "id": "c",
                              "text": "Short hand."
                    },
                    {
                              "id": "d",
                              "text": "Long hand."
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
      ],
    },
  ],
};
