import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m2-u5-lesson-5-4",
  code: "5-4",
  title: "Elapsed Time",
  goal: "I CAN find how much time passes between two times.",
  standards: ["2.MD.C.7"],
  vocabulary: [
    { term: "Elapsed", definition: "Time that passes." },
    { term: "Start", definition: "When it begins." },
    { term: "End", definition: "When it finishes." },
    { term: "Duration", definition: "How long." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Minute", definition: "60 seconds." },
    { term: "Before", definition: "Earlier." },
    { term: "After", definition: "Later." },
  ],
  concepts: [
    {
      id: "m2-u5-elapsed-time",
      title: "Elapsed time",
      skill: "Find how much time passes between a start and end time.",
      lesson: {
        sections: [
          {
            heading: "Time that passes",
            body: "**Elapsed time** is how much time passes between a **start** and an **end**. If you start at 2:00 and end at 3:30, 1 hour 30 minutes passed.",
          },
          {
            heading: "Count up",
            body: "To find elapsed time, **count up** from start to end. 2:00 to 3:00 is 1 hour; 3:00 to 3:30 is 30 minutes; total 1 hour 30 minutes.",
          },
        ],
        keyFormulas: [
          { name: "Elapsed", statement: "End - Start = time passed." },
          { name: "Count up", statement: "Start -> end, add hours + minutes." },
        ],
        workedExample: {
          problem: "School starts at 8:00 and ends at 3:00. How long is school?",
          solution: "8:00 to 3:00 = 7 hours.",
        },
      },
      questions: [
        {
          id: "m2-u5-elapsed-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Elapsed time' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "clock time"
                    },
                    {
                              "id": "b",
                              "text": "how much time passes"
                    },
                    {
                              "id": "c",
                              "text": "a duration only"
                    },
                    {
                              "id": "d",
                              "text": "a date"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Elapsed = time that passes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Elapsed = time that passes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "time that passes",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u5-elapsed-time-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start 2:00, end 4:30. Elapsed time is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2 hours"
                    },
                    {
                              "id": "b",
                              "text": "2 hours 30 minutes"
                    },
                    {
                              "id": "c",
                              "text": "3 hours"
                    },
                    {
                              "id": "d",
                              "text": "2 hours 3 minutes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2:00->4:00=2h, 4:00->4:30=30min = 2h30m."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2:00->4:00=2h, 4:00->4:30=30min = 2h30m.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2h30m",
          "commonErrors": [
                    "Wrong elapsed."
          ]
},
        },
        {
          id: "m2-u5-elapsed-time-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find elapsed time: start 9:15, end 11:45.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "time",
                              "name": "Elapsed",
                              "statement": "Count up from start to end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9:15->10:15=1h, 10:15->11:15=1h, 11:15->11:45=30m.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answer: 2 hours 30 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2 hours 30 minutes",
          "commonErrors": "Wrong elapsed."
},
        },
        {
          id: "m2-u5-elapsed-time-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many minutes are in 1 hour 30 minutes?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 90
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "1 hour = 60 min + 30 = 90 min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "90",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "90",
          "commonErrors": [
                    "Wrong conversion."
          ]
},
        },
        {
          id: "m2-u5-elapsed-time-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A movie starts at 2:30 and ends at 4:15. How long is the movie? Show your counting-up method.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "time",
                              "name": "Elapsed",
                              "statement": "Count up from start to end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2:30->3:30=1h, 3:30->4:15=45m.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Movie is 1 hour 45 minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1 hour 45 minutes",
          "commonErrors": "Wrong elapsed."
},
        },
        {
          id: "m2-u5-elapsed-time-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Elapsed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When it begins."
                    },
                    {
                              "id": "b",
                              "text": "Time that passes."
                    },
                    {
                              "id": "c",
                              "text": "When it finishes."
                    },
                    {
                              "id": "d",
                              "text": "How long."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Elapsed\" means Time that passes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Elapsed\" means Time that passes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Elapsed** = Time that passes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-elapsed-time-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Start\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When it finishes."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "60 minutes."
                    },
                    {
                              "id": "d",
                              "text": "When it begins."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Start\" means When it begins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Start\" means When it begins.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Start** = When it begins.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u5-elapsed-time-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"End\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How long."
                    },
                    {
                              "id": "b",
                              "text": "When it finishes."
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
                              "statement": "\"End\" means When it finishes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"End\" means When it finishes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**End** = When it finishes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
