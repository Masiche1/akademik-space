import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m3-u6-lesson-6-4",
  code: "6-4",
  title: "Time Problems",
  goal: "I CAN solve word problems about time and elapsed time.",
  standards: ["3.MD.A.1", "3.MD.A.2"],
  vocabulary: [
    { term: "Elapsed", definition: "Time that passes." },
    { term: "Start", definition: "When it begins." },
    { term: "End", definition: "When it finishes." },
    { term: "Duration", definition: "How long." },
    { term: "Hour", definition: "60 minutes." },
    { term: "Minute", definition: "60 seconds." },
    { term: "Schedule", definition: "Plan of times." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m3-u6-time-problems",
      title: "Time problems",
      skill: "Solve word problems involving time and elapsed time.",
      lesson: {
        sections: [
          {
            heading: "Time word problems",
            body: "Time problems ask about **elapsed time** (how long), **start/end times**, or **schedules**. Read carefully to identify what's being asked.",
          },
          {
            heading: "Example",
            body: "'Movie starts at 2:30 and ends at 4:00. How long is it?' Elapsed time = 4:00 - 2:30 = 1 hour 30 minutes.",
          },
        ],
        keyFormulas: [
          { name: "Elapsed", statement: "End - start = duration." },
          { name: "Schedule", statement: "Start + duration = end." },
        ],
        workedExample: {
          problem: "A movie starts at 2:30 and ends at 4:15. How long is it?",
          solution: "2:30 to 4:00 = 1 hour 30 min; 4:00 to 4:15 = 15 min; total **1 hour 45 minutes**.",
        },
      },
      questions: [
        {
          id: "m3-u6-time-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A movie starts at 2:30 and ends at 4:00. How long is it?",
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
                              "statement": "2:30->3:00=30min; 3:00->4:00=1hr; total 1h30m."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2:30->3:00=30min; 3:00->4:00=1hr; total 1h30m.",
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
          id: "m3-u6-time-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Class starts at 9:00 and lasts 45 minutes. When does it end?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9:45"
                    },
                    {
                              "id": "b",
                              "text": "10:00"
                    },
                    {
                              "id": "c",
                              "text": "9:30"
                    },
                    {
                              "id": "d",
                              "text": "10:45"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9:00 + 45 min = 9:45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9:00 + 45 min = 9:45.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9:45",
          "commonErrors": [
                    "Wrong end time."
          ]
},
        },
        {
          id: "m3-u6-time-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Recess starts at 10:15 and ends at 10:45. How many minutes is recess? (Write just the number)",
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
                              "statement": "10:15->10:45 = 30 minutes."
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
          id: "m3-u6-time-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A game starts at 3:30 and lasts 1 hour 15 minutes. When does it end?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4:45"
                    },
                    {
                              "id": "b",
                              "text": "3:45"
                    },
                    {
                              "id": "c",
                              "text": "4:30"
                    },
                    {
                              "id": "d",
                              "text": "5:15"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3:30 + 1h15m = 4:45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3:30 + 1h15m = 4:45.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4:45",
          "commonErrors": [
                    "Wrong end time."
          ]
},
        },
        {
          id: "m3-u6-time-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve two time problems: find elapsed time and find end time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Time problems",
                              "statement": "Elapsed + end time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves elapsed time.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Solves end time.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., '2:00->3:30=1h30m; 9:00+45min=9:45'**",
          "commonErrors": [
                    "Wrong answers.",
                    "Only one solved."
          ]
},
        },
        {
          id: "m3-u6-time-problems-q6",
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
          id: "m3-u6-time-problems-q7",
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
          id: "m3-u6-time-problems-q8",
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
