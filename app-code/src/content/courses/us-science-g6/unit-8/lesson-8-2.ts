import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "sci6-u8-lesson-8-2",
  code: "8-2",
  title: "Science Investigation",
  goal: "I CAN conduct scientific investigations.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Investigation", definition: "Scientific study." },
    { term: "Question", definition: "What you ask." },
    { term: "Hypothesis", definition: "Testable prediction." },
    { term: "Experiment", definition: "Test procedure." },
    { term: "Variable", definition: "What changes." },
    { term: "Control", definition: "Unchanged variable." },
    { term: "Data", definition: "Results." },
    { term: "Conclusion", definition: "What you learned." },
  ],
  concepts: [
    {
      id: "sci6-u8-science-investigation",
      title: "Science investigation",
      skill: "Conduct investigations using the scientific method: question, hypothesis, experiment, data, conclusion.",
      lesson: {
        sections: [
          {
            heading: "Scientific method",
            body: "**Question** -> **Hypothesis** (testable prediction) -> **Experiment** (test) -> **Data** (results) -> **Conclusion** (what you learned).",
          },
          {
            heading: "Variables",
            body: "**Independent variable** = what you change; **dependent** = what you measure; **controlled** = what stays same.",
          },
        ],
        keyFormulas: [
          { name: "Scientific method", statement: "Question -> hypothesis -> experiment -> data -> conclusion." },
        ],
        workedExample: {
          problem: "Design an experiment to test if plants grow better with or without fertilizer.",
          solution: "**Question: Does fertilizer help plants grow? Hypothesis: Fertilized plants grow taller. Experiment: two groups of identical plants, one with fertilizer, one without. Measure height after 2 weeks. Conclusion: compare results.**",
        },
      },
      questions: [
        {
          id: "sci6-u8-science-investigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'hypothesis' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fact"
                    },
                    {
                              "id": "b",
                              "text": "a testable prediction"
                    },
                    {
                              "id": "c",
                              "text": "a conclusion"
                    },
                    {
                              "id": "d",
                              "text": "a question"
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
                    "Confuses with conclusion."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'independent variable' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what you measure"
                    },
                    {
                              "id": "b",
                              "text": "what you change"
                    },
                    {
                              "id": "c",
                              "text": "what stays same"
                    },
                    {
                              "id": "d",
                              "text": "the result"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "What you change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "What you change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "what you change",
          "commonErrors": [
                    "Confuses with dependent."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the steps of a scientific investigation and give an example of a question you could investigate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Investigation",
                              "statement": "Steps + question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives question.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Steps: question->hypothesis->experiment->data->conclusion; Example: 'Does temperature affect how fast ice melts?'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No question."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Controlled variable' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what you change"
                    },
                    {
                              "id": "b",
                              "text": "what stays the same"
                    },
                    {
                              "id": "c",
                              "text": "what you measure"
                    },
                    {
                              "id": "d",
                              "text": "the result"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stays same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stays same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "what stays the same",
          "commonErrors": [
                    "Confuses with independent."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a simple experiment, identifying the question, hypothesis, variables, and what data you would collect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Investigation",
                              "statement": "All elements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs experiment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies variables.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Example: 'Does light affect plant growth?'; Hypothesis: yes; Variables: light (independent), growth (dependent), water/soil (controlled); Data: height measurements.**",
          "commonErrors": [
                    "Incomplete design.",
                    "No variables."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Investigation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What you ask."
                    },
                    {
                              "id": "b",
                              "text": "Scientific study."
                    },
                    {
                              "id": "c",
                              "text": "Testable prediction."
                    },
                    {
                              "id": "d",
                              "text": "Test procedure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Investigation\" means Scientific study."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Investigation\" means Scientific study.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Investigation** = Scientific study.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Testable prediction."
                    },
                    {
                              "id": "b",
                              "text": "Test procedure."
                    },
                    {
                              "id": "c",
                              "text": "What changes."
                    },
                    {
                              "id": "d",
                              "text": "What you ask."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Question\" means What you ask."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means What you ask.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Question** = What you ask.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-science-investigation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hypothesis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Test procedure."
                    },
                    {
                              "id": "b",
                              "text": "Testable prediction."
                    },
                    {
                              "id": "c",
                              "text": "What changes."
                    },
                    {
                              "id": "d",
                              "text": "Unchanged variable."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hypothesis\" means Testable prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hypothesis\" means Testable prediction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hypothesis** = Testable prediction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
