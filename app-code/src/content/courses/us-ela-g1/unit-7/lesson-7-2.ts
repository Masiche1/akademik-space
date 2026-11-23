import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ela1-u7-lesson-7-2",
  code: "7-2",
  title: "End Punctuation",
  goal: "I CAN use periods, question marks and exclamation points.",
  standards: ["L.1.2"],
  vocabulary: [
    { term: "Period", definition: ". — ends a statement." },
    { term: "Question mark", definition: "? — ends a question." },
    { term: "Exclamation point", definition: "! — ends excited statement." },
    { term: "End punctuation", definition: "Mark at end of sentence." },
    { term: "Statement", definition: "A telling sentence." },
    { term: "Question", definition: "An asking sentence." },
    { term: "Excited", definition: "Strong feeling." },
    { term: "End", definition: "The finish." },
  ],
  concepts: [
    {
      id: "ela1-u7-end-punctuation",
      title: "End punctuation",
      skill: "Use periods, question marks and exclamation points correctly.",
      lesson: {
        sections: [
          {
            heading: "Three end marks",
            body: "Sentences end with **periods** (.), **question marks** (?) or **exclamation points** (!). A **statement** ends with a period; a **question** ends with ?; an **excited** statement ends with !.",
          },
          {
            heading: "Match the mark",
            body: "'I like dogs.' (period). 'Do you like dogs?' (question mark). 'I love dogs!' (exclamation).",
          },
        ],
        keyFormulas: [
          { name: "End punctuation", statement: ". = statement, ? = question, ! = excited." },
          { name: "Match", statement: "Statement->period, Question->?, Excited->!" },
        ],
        workedExample: {
          problem: "Which end mark for 'Where is my hat'?",
          solution: "It's a question — ends with a **question mark**: 'Where is my hat?'",
        },
      },
      questions: [
        {
          id: "ela1-u7-end-punctuation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A statement like 'I like dogs' ends with...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "?"
                    },
                    {
                              "id": "b",
                              "text": "!"
                    },
                    {
                              "id": "c",
                              "text": "."
                    },
                    {
                              "id": "d",
                              "text": ","
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Statements end with periods."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Statements end with periods.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**period**",
          "commonErrors": [
                    "Picks ? or !."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A question like 'Where are you?' ends with...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "."
                    },
                    {
                              "id": "b",
                              "text": "?"
                    },
                    {
                              "id": "c",
                              "text": "!"
                    },
                    {
                              "id": "d",
                              "text": ";"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Questions end with ?."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Questions end with ?.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**?**",
          "commonErrors": [
                    "Picks period."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write one statement, one question, one excited sentence with correct end punctuation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "End punctuation",
                              "statement": ". for statement, ? for question, ! for excited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes all three correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like dogs. Where is my ball? I won!'**",
          "commonErrors": [
                    "Wrong marks.",
                    "Cannot write."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An exclamation point (!) is used for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a question"
                    },
                    {
                              "id": "b",
                              "text": "an excited or strong statement"
                    },
                    {
                              "id": "c",
                              "text": "a fact only"
                    },
                    {
                              "id": "d",
                              "text": "a list"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "! = excited/strong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "! = excited/strong.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**excited**",
          "commonErrors": [
                    "Confuses with question."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write three sentences about your day. End one with period, one with ?, one with !.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "End punctuation",
                              "statement": "3 sentences + correct marks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses all three marks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Matches mark to sentence type.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I played. Did you see? I won!'**",
          "commonErrors": [
                    "Wrong marks.",
                    "Only one type."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Period\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "? — ends a question."
                    },
                    {
                              "id": "b",
                              "text": ". — ends a statement."
                    },
                    {
                              "id": "c",
                              "text": "! — ends excited statement."
                    },
                    {
                              "id": "d",
                              "text": "Mark at end of sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Period\" means . — ends a statement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Period\" means . — ends a statement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Period** = . — ends a statement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question mark\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "! — ends excited statement."
                    },
                    {
                              "id": "b",
                              "text": "Mark at end of sentence."
                    },
                    {
                              "id": "c",
                              "text": "A telling sentence."
                    },
                    {
                              "id": "d",
                              "text": "? — ends a question."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question mark\" means ? — ends a question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question mark\" means ? — ends a question.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question mark** = ? — ends a question.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u7-end-punctuation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exclamation point\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mark at end of sentence."
                    },
                    {
                              "id": "b",
                              "text": "! — ends excited statement."
                    },
                    {
                              "id": "c",
                              "text": "A telling sentence."
                    },
                    {
                              "id": "d",
                              "text": "An asking sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Exclamation point\" means ! — ends excited statement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exclamation point\" means ! — ends excited statement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Exclamation point** = ! — ends excited statement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
