import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m3-u6-lesson-6-2",
  code: "6-2",
  title: "Elapsed Time",
  goal: "I CAN find how much time passes between two times.",
  standards: ["3.MD.A.1"],
  vocabulary: [
    { term: "Elapsed", definition: "Time that passes." },
    { term: "Start", definition: "When it begins." },
    { term: "End", definition: "When it finishes." },
    { term: "Duration", definition: "How long." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Minute", definition: "60 seconds." },
    { term: "Count up", definition: "Add time forward." },
    { term: "Interval", definition: "Time between two points." },
  ],
  concepts: [
    {
      id: "m3-u6-elapsed-time",
      title: "Elapsed time",
      skill: "Find how much time passes between a start and end time.",
      lesson: {
        sections: [
          {
            heading: "What is elapsed time?",
            body: "**Elapsed time** is how much time passes between a **start** and an **end**. If you start at 2:00 and end at 3:30, **1 hour 30 minutes** passed.",
          },
          {
            heading: "Count up",
            body: "To find elapsed time, **count up** from start to end: 2:00 to 3:00 is 1 hour; 3:00 to 3:30 is 30 minutes; total 1 hour 30 minutes.",
          },
        ],
        keyFormulas: [
          { name: "Elapsed", statement: "End - start = duration." },
          { name: "Count up", statement: "Start -> hour -> end." },
        ],
        workedExample: {
          problem: "Start at 1:15, end at 2:45. How much time passed?",
          solution: "1:15 to 2:00 = 45 min; 2:00 to 2:45 = 45 min; total **1 hour 30 minutes**.",
        },
      },
      questions: [
        {
          id: "m3-u6-elapsed-time-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Start at 2:00, end at 3:30. How much time passed?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 hour"
                    },
                    {
                              "id": "b",
                              "text": "1 hour 30 minutes"
                    },
                    {
                              "id": "c",
                              "text": "30 minutes"
                    },
                    {
                              "id": "d",
                              "text": "2 hours"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2:00->3:00=1hr; 3:00->3:30=30min; total 1.5hr."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2:00->3:00=1hr; 3:00->3:30=30min; total 1.5hr.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1 hour 30 minutes",
          "commonErrors": [
                    "Misses minutes."
          ]
},
        },
        {
          id: "m3-u6-elapsed-time-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 9:30, end at 10:15. How much time passed?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "45 minutes"
                    },
                    {
                              "id": "b",
                              "text": "1 hour"
                    },
                    {
                              "id": "c",
                              "text": "30 minutes"
                    },
                    {
                              "id": "d",
                              "text": "15 minutes"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9:30->10:00=30min; 10:00->10:15=15min; total 45min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9:30->10:00=30min; 10:00->10:15=15min; total 45min.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "45 minutes",
          "commonErrors": [
                    "Wrong duration."
          ]
},
        },
        {
          id: "m3-u6-elapsed-time-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 1:15, end at 2:45. How many minutes passed? (Write just the number)",
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
                              "statement": "1:15->2:45 = 90 minutes."
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
                    "Wrong duration."
          ]
},
        },
        {
          id: "m3-u6-elapsed-time-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 11:30, end at 12:00. How many minutes passed? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "11:30->12:00 = 30 minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "30",
          "commonErrors": [
                    "Wrong duration."
          ]
},
        },
        {
          id: "m3-u6-elapsed-time-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find elapsed time for two scenarios: 8:00 to 9:30 and 3:45 to 5:15.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Elapsed",
                              "statement": "Find durations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds first duration.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds second duration.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**1h30m and 1h30m**",
          "commonErrors": [
                    "Wrong durations.",
                    "Only one found."
          ]
},
        },
        {
          id: "m3-u6-elapsed-time-q6",
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
          id: "m3-u6-elapsed-time-q7",
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
          id: "m3-u6-elapsed-time-q8",
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
