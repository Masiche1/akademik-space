import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "sci5-u8-lesson-8-4",
  code: "8-4",
  title: "Scientific Method",
  goal: "I CAN use the scientific method to investigate questions.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Scientific method", definition: "Steps to investigate." },
    { term: "Question", definition: "What you want to know." },
    { term: "Hypothesis", definition: "Prediction." },
    { term: "Experiment", definition: "Test it." },
    { term: "Data", definition: "Results." },
    { term: "Conclusion", definition: "What you learned." },
    { term: "Variable", definition: "What changes." },
    { term: "Control", definition: "Baseline." },
  ],
  concepts: [
    {
      id: "sci5-u8-science-method",
      title: "Scientific Method",
      skill: "Use the scientific method: question, hypothesis, experiment, data, conclusion.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "Question -> hypothesis -> experiment -> data -> conclusion.",
          },
          {
            heading: "Variables",
            body: "Independent + dependent + control.",
          },
        ],
        keyFormulas: [
          { name: "Science", statement: "Question + hypothesis + experiment + conclusion = method" },
        ],
        workedExample: {
          problem: "Investigate: does water temperature affect how fast ice melts?",
          solution: "Question: Does temp affect melt rate? Hypothesis: warmer melts faster. Experiment: ice in warm vs cold water. Data: warm melted faster. Conclusion: yes.",
        },
      },
      questions: [
        {
          id: "sci5-u8-science-method-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The scientific method is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guessing"
                    },
                    {
                              "id": "b",
                              "text": "systematic steps to investigate"
                    },
                    {
                              "id": "c",
                              "text": "reading"
                    },
                    {
                              "id": "d",
                              "text": "memorizing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Systematic investigation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Systematic investigation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "systematic steps to investigate",
          "commonErrors": [
                    "Not systematic."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hypothesis is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the question"
                    },
                    {
                              "id": "b",
                              "text": "a testable prediction"
                    },
                    {
                              "id": "c",
                              "text": "the conclusion"
                    },
                    {
                              "id": "d",
                              "text": "the data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Testable prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Testable prediction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a testable prediction",
          "commonErrors": [
                    "Confuses with other steps."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Follow the scientific method: write a question, hypothesis, experiment design, and what data you would collect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Method",
                              "statement": "All steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Does all steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Question: ...; Hypothesis: ...; Experiment: ...; Data: ...**",
          "commonErrors": [
                    "Missing steps.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Variables in an experiment are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only one"
                    },
                    {
                              "id": "b",
                              "text": "things that can change"
                    },
                    {
                              "id": "c",
                              "text": "constants"
                    },
                    {
                              "id": "d",
                              "text": "results"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Things that change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Things that change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "things that can change",
          "commonErrors": [
                    "Confuses with constants."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between independent and dependent variables with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Method",
                              "statement": "Difference + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains variables.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Independent: what you change (temp); Dependent: what you measure (melt rate).**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Scientific method\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you want to know."
                    },
                    {
                              "id": "b",
                              "text": "Steps to investigate."
                    },
                    {
                              "id": "c",
                              "text": "Prediction."
                    },
                    {
                              "id": "d",
                              "text": "Test it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Scientific method\" means Steps to investigate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Scientific method\" means Steps to investigate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Scientific method** = Steps to investigate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Prediction."
                    },
                    {
                              "id": "b",
                              "text": "Test it."
                    },
                    {
                              "id": "c",
                              "text": "Results."
                    },
                    {
                              "id": "d",
                              "text": "What you want to know."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Question\" means What you want to know."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means What you want to know.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Question** = What you want to know.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-science-method-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hypothesis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Test it."
                    },
                    {
                              "id": "b",
                              "text": "Prediction."
                    },
                    {
                              "id": "c",
                              "text": "Results."
                    },
                    {
                              "id": "d",
                              "text": "What you learned."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hypothesis\" means Prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hypothesis\" means Prediction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hypothesis** = Prediction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
