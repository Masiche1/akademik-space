import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m3-u6-lesson-6-5",
  code: "6-5",
  title: "Measurement Review",
  goal: "I CAN use all time and mass skills.",
  standards: ["3.MD.A.1", "3.MD.B.4"],
  vocabulary: [
    { term: "Time", definition: "Hour and minute." },
    { term: "Elapsed", definition: "Time that passes." },
    { term: "Mass", definition: "How much matter." },
    { term: "Gram", definition: "Small unit." },
    { term: "Kilogram", definition: "1000 g." },
    { term: "Clock", definition: "Shows time." },
    { term: "Scale", definition: "Measures mass." },
    { term: "Convert", definition: "Change units." },
  ],
  concepts: [
    {
      id: "m3-u6-measurement-review",
      title: "Measurement review",
      skill: "Combine time and mass skills.",
      lesson: {
        sections: [
          {
            heading: "All measurement skills",
            body: "Tell time to the **minute**, find **elapsed time**, measure **mass** in grams/kilograms, and **convert** between units.",
          },
          {
            heading: "Put it together",
            body: "Use all measurement skills together.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Time + mass + convert = all skills." },
        ],
        workedExample: {
          problem: "Tell time, find elapsed time, and convert mass.",
          solution: "All measurement skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m3-u6-measurement-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only time"
                    },
                    {
                              "id": "b",
                              "text": "time, elapsed, mass, convert"
                    },
                    {
                              "id": "c",
                              "text": "only mass"
                    },
                    {
                              "id": "d",
                              "text": "only clocks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All measurement skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All measurement skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m3-u6-measurement-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tell the time on a clock, find elapsed time between two times, and convert 2 kg to grams.",
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
                                                  "All measurement",
                                                  "Time + elapsed + mass."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All measurement",
                                                  "Time + elapsed + mass."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '3:45; 1h30m; 2000 g'**"
          ]
},
        },
        {
          id: "m3-u6-measurement-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The long hand on a clock shows...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hours"
                    },
                    {
                              "id": "b",
                              "text": "minutes"
                    },
                    {
                              "id": "c",
                              "text": "seconds"
                    },
                    {
                              "id": "d",
                              "text": "days"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Long hand = minutes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Long hand = minutes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "minutes",
          "commonErrors": [
                    "Wrong hand."
          ]
},
        },
        {
          id: "m3-u6-measurement-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Time\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Time that passes."
                    },
                    {
                              "id": "b",
                              "text": "Hour and minute."
                    },
                    {
                              "id": "c",
                              "text": "How much matter."
                    },
                    {
                              "id": "d",
                              "text": "Small unit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Time\" means Hour and minute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Time\" means Hour and minute.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Time** = Hour and minute.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u6-measurement-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Elapsed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How much matter."
                    },
                    {
                              "id": "b",
                              "text": "Small unit."
                    },
                    {
                              "id": "c",
                              "text": "1000 g."
                    },
                    {
                              "id": "d",
                              "text": "Time that passes."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m3-u6-measurement-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mass\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small unit."
                    },
                    {
                              "id": "b",
                              "text": "How much matter."
                    },
                    {
                              "id": "c",
                              "text": "1000 g."
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
                              "statement": "\"Mass\" means How much matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mass\" means How much matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mass** = How much matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u6-measurement-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1000 g."
                    },
                    {
                              "id": "b",
                              "text": "Shows time."
                    },
                    {
                              "id": "c",
                              "text": "Measures mass."
                    },
                    {
                              "id": "d",
                              "text": "Small unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gram\" means Small unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gram\" means Small unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gram** = Small unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u6-measurement-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kilogram\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows time."
                    },
                    {
                              "id": "b",
                              "text": "1000 g."
                    },
                    {
                              "id": "c",
                              "text": "Measures mass."
                    },
                    {
                              "id": "d",
                              "text": "Change units."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kilogram\" means 1000 g."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kilogram\" means 1000 g.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kilogram** = 1000 g.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
