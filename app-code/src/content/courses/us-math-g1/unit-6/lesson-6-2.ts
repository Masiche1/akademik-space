import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m1-u6-lesson-6-2",
  code: "6-2",
  title: "Telling Time",
  goal: "I CAN tell time to the hour and half hour.",
  standards: ["1.MD.B.3"],
  vocabulary: [
    { term: "Time", definition: "What time it is." },
    { term: "Clock", definition: "Shows time." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Half hour", definition: "30 minutes." },
    { term: "O'clock", definition: "On the hour." },
    { term: "Minute hand", definition: "Long hand shows minutes." },
    { term: "Hour hand", definition: "Short hand shows hours." },
    { term: "AM/PM", definition: "Morning/afternoon times." },
  ],
  concepts: [
    {
      id: "m1-u6-measure-time",
      title: "Telling time",
      skill: "Tell time to the hour and half hour using a clock.",
      lesson: {
        sections: [
          {
            heading: "Reading a clock",
            body: "A **clock** has an **hour hand** (short) and a **minute hand** (long). When the minute hand points to 12, it is **o'clock** (on the hour). When it points to 6, it is **half past** (half hour).",
          },
          {
            heading: "Hour and half hour",
            body: "**Hour** times: minute hand at 12. **Half hour** times: minute hand at 6. Read the hour hand to know which hour.",
          },
        ],
        keyFormulas: [
          { name: "O'clock", statement: "Minute hand at 12 = on the hour" },
          { name: "Half past", statement: "Minute hand at 6 = 30 minutes past" },
        ],
        workedExample: {
          problem: "The minute hand points to 6 and the hour hand is between 3 and 4. What time is it?",
          solution: "**Half past 3** (3:30).",
        },
      },
      questions: [
        {
          id: "m1-u6-measure-time-q1",
          difficulty: "core",
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
                              "text": "o'clock (on the hour)"
                    },
                    {
                              "id": "c",
                              "text": "quarter past"
                    },
                    {
                              "id": "d",
                              "text": "unknown"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Minute at 12 = o'clock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute at 12 = o'clock.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**o'clock**",
          "commonErrors": [
                    "Confuses with half past."
          ]
},
        },
        {
          id: "m1-u6-measure-time-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When the minute hand points to 6, it is...",
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
                              "text": "quarter to"
                    },
                    {
                              "id": "d",
                              "text": "midnight only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Minute at 6 = half past."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute at 6 = half past.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**half past**",
          "commonErrors": [
                    "Confuses with o'clock."
          ]
},
        },
        {
          id: "m1-u6-measure-time-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the hour hand is between 5 and 6 and minute hand at 12, the time is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5:30"
                    },
                    {
                              "id": "b",
                              "text": "5:00"
                    },
                    {
                              "id": "c",
                              "text": "6:00"
                    },
                    {
                              "id": "d",
                              "text": "5:15"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Minute at 12 + hour 5 = 5:00."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute at 12 + hour 5 = 5:00.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5:00**",
          "commonErrors": [
                    "Reads hour wrong."
          ]
},
        },
        {
          id: "m1-u6-measure-time-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe a clock showing 4:30. Where do the hands point?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Half past",
                              "statement": "Hour hand between 4 and 5, minute at 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Minute hand at 6.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Hour hand between 4 and 5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**4:30**",
          "commonErrors": [
                    "Wrong hands.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "m1-u6-measure-time-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Time\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows time."
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
                              "text": "30 minutes."
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
          id: "m1-u6-measure-time-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 minutes."
                    },
                    {
                              "id": "b",
                              "text": "30 minutes."
                    },
                    {
                              "id": "c",
                              "text": "On the hour."
                    },
                    {
                              "id": "d",
                              "text": "Shows time."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Clock\" means Shows time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clock\" means Shows time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Clock** = Shows time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-measure-time-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "30 minutes."
                    },
                    {
                              "id": "b",
                              "text": "60 minutes."
                    },
                    {
                              "id": "c",
                              "text": "On the hour."
                    },
                    {
                              "id": "d",
                              "text": "Long hand shows minutes."
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
        {
          id: "m1-u6-measure-time-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Half hour\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "On the hour."
                    },
                    {
                              "id": "b",
                              "text": "Long hand shows minutes."
                    },
                    {
                              "id": "c",
                              "text": "Short hand shows hours."
                    },
                    {
                              "id": "d",
                              "text": "30 minutes."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Half hour\" means 30 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Half hour\" means 30 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Half hour** = 30 minutes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
