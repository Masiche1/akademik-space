import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m3-u7-lesson-7-1",
  code: "7-1",
  title: "Collecting Data",
  goal: "I CAN collect data and organize it in a table.",
  standards: ["3.MD.B.3"],
  vocabulary: [
    { term: "Data", definition: "Information we collect." },
    { term: "Survey", definition: "Ask questions." },
    { term: "Table", definition: "Organized data." },
    { term: "Category", definition: "Type of item." },
    { term: "Count", definition: "Number in each." },
    { term: "Total", definition: "All together." },
    { term: "Record", definition: "Write down." },
    { term: "Tally", definition: "Counting marks." },
  ],
  concepts: [
    {
      id: "m3-u7-collect-data",
      title: "Collecting data",
      skill: "Collect data through surveys and organize it in tables.",
      lesson: {
        sections: [
          {
            heading: "What is data?",
            body: "**Data** is information we collect. We can **survey** (ask questions) or **count** things, then **record** it in a **table**.",
          },
          {
            heading: "Organizing data",
            body: "A **table** organizes data by **category** with **counts** for each. 'Favorite fruit: apples 8, bananas 5, grapes 3.'",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Collected information." },
          { name: "Table", statement: "Category + count." },
        ],
        workedExample: {
          problem: "Survey: favorite colors — red 7, blue 5, green 9. Make a table.",
          solution: "Red: 7, Blue: 5, Green: 9; Total: 21.",
        },
      },
      questions: [
        {
          id: "m3-u7-collect-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Data' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a picture"
                    },
                    {
                              "id": "b",
                              "text": "information we collect"
                    },
                    {
                              "id": "c",
                              "text": "a graph"
                    },
                    {
                              "id": "d",
                              "text": "a table only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Data = collected information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data = collected information.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "collected information",
          "commonErrors": [
                    "Confuses with graph."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'survey' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a table"
                    },
                    {
                              "id": "b",
                              "text": "asking questions to collect data"
                    },
                    {
                              "id": "c",
                              "text": "a graph"
                    },
                    {
                              "id": "d",
                              "text": "a count only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Survey = ask questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Survey = ask questions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "asking questions",
          "commonErrors": [
                    "Confuses with table."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Survey results: red 7, blue 5, green 9. How many students were surveyed? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 21
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7 + 5 + 9 = 21."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "21",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "21",
          "commonErrors": [
                    "Wrong total."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A class has 12 boys and 14 girls. How many students total? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 26
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "12 + 14 = 26."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "26",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "26",
          "commonErrors": [
                    "Wrong total."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a survey about favorite animals. List categories and how you would collect data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Collect data",
                              "statement": "Survey + categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs survey.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Lists categories + method.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Ask classmates; cats, dogs, birds, fish'**",
          "commonErrors": [
                    "No survey.",
                    "No categories."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask questions."
                    },
                    {
                              "id": "b",
                              "text": "Information we collect."
                    },
                    {
                              "id": "c",
                              "text": "Organized data."
                    },
                    {
                              "id": "d",
                              "text": "Type of item."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Information we collect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information we collect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information we collect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Survey\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Organized data."
                    },
                    {
                              "id": "b",
                              "text": "Type of item."
                    },
                    {
                              "id": "c",
                              "text": "Number in each."
                    },
                    {
                              "id": "d",
                              "text": "Ask questions."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Survey\" means Ask questions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Survey\" means Ask questions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Survey** = Ask questions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-collect-data-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Table\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Type of item."
                    },
                    {
                              "id": "b",
                              "text": "Organized data."
                    },
                    {
                              "id": "c",
                              "text": "Number in each."
                    },
                    {
                              "id": "d",
                              "text": "All together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Table\" means Organized data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Table\" means Organized data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Table** = Organized data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
