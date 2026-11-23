import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "sci5-u7-lesson-7-3",
  code: "7-3",
  title: "Testing Solutions",
  goal: "I CAN test designs and improve based on results.",
  standards: ["ETS1.B"],
  vocabulary: [
    { term: "Test", definition: "Try design." },
    { term: "Data", definition: "Results." },
    { term: "Measure", definition: "Quantify." },
    { term: "Observe", definition: "Watch carefully." },
    { term: "Improve", definition: "Make better." },
    { term: "Failure", definition: "Doesn't work." },
    { term: "Success", definition: "Meets criteria." },
    { term: "Evaluate", definition: "Judge results." },
  ],
  concepts: [
    {
      id: "sci5-u7-testing-solutions",
      title: "Testing solutions",
      skill: "Test designs, collect data and improve based on results.",
      lesson: {
        sections: [
          {
            heading: "Testing",
            body: "**Testing** means trying your design and **collecting data** — measurements, observations, results. This tells you what works and what needs improvement.",
          },
          {
            heading: "Iteration",
            body: "Based on test results, **improve** the design and test again. This **iterate** process continues until the design meets criteria.",
          },
        ],
        keyFormulas: [
          { name: "Testing", statement: "Test -> data -> improve -> test again = iteration." },
        ],
        workedExample: {
          problem: "Test a paper bridge: how much weight can it hold?",
          solution: "**Add weights until it collapses; record max weight; improve design; test again.**",
        },
      },
      questions: [
        {
          id: "sci5-u7-testing-solutions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Testing a design means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guessing"
                    },
                    {
                              "id": "b",
                              "text": "trying it and collecting data"
                    },
                    {
                              "id": "c",
                              "text": "only building"
                    },
                    {
                              "id": "d",
                              "text": "only planning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Try + collect data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Try + collect data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "trying it and collecting data",
          "commonErrors": [
                    "No testing."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After testing, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stop"
                    },
                    {
                              "id": "b",
                              "text": "analyze results and improve"
                    },
                    {
                              "id": "c",
                              "text": "ignore results"
                    },
                    {
                              "id": "d",
                              "text": "test once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Analyze + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analyze + improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "analyze results and improve",
          "commonErrors": [
                    "Stops after one test."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how you would test a design and what data you'd collect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Testing",
                              "statement": "Test method + data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes test.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "States data.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Test bridge with weights; measure max load; observe failures; record data.'**",
          "commonErrors": [
                    "No test.",
                    "No data."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Iterating' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "doing once"
                    },
                    {
                              "id": "b",
                              "text": "improving and retesting"
                    },
                    {
                              "id": "c",
                              "text": "stopping"
                    },
                    {
                              "id": "d",
                              "text": "guessing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Improve + retest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve + retest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "improving and retesting",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why it's important to test designs multiple times.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Testing",
                              "statement": "Importance explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains testing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains multiple tests.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**First tests reveal problems; iterations improve until design works well.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No importance."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Results."
                    },
                    {
                              "id": "b",
                              "text": "Try design."
                    },
                    {
                              "id": "c",
                              "text": "Quantify."
                    },
                    {
                              "id": "d",
                              "text": "Watch carefully."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Test\" means Try design."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Test\" means Try design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Test** = Try design.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quantify."
                    },
                    {
                              "id": "b",
                              "text": "Watch carefully."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "Results."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Results.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Results.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-testing-solutions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Watch carefully."
                    },
                    {
                              "id": "b",
                              "text": "Quantify."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "Doesn't work."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measure\" means Quantify."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measure\" means Quantify.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure** = Quantify.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
