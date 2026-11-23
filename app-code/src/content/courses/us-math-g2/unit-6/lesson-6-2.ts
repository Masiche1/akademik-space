import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "m2-u6-lesson-6-2",
  code: "6-2",
  title: "Picture Graphs",
  goal: "I CAN read and make picture graphs.",
  standards: ["2.MD.D.10"],
  vocabulary: [
    { term: "Graph", definition: "Shows data visually." },
    { term: "Picture graph", definition: "Uses pictures/symbols." },
    { term: "Key", definition: "Explains symbols." },
    { term: "Symbol", definition: "Picture representing data." },
    { term: "Bar", definition: "Column showing amount." },
    { term: "Scale", definition: "What each symbol means." },
    { term: "Most", definition: "Greatest amount." },
    { term: "Least", definition: "Smallest amount." },
  ],
  concepts: [
    {
      id: "m2-u6-picture-graphs",
      title: "Picture graphs",
      skill: "Read and create picture graphs using symbols and a key.",
      lesson: {
        sections: [
          {
            heading: "Picture graphs",
            body: "A **picture graph** uses **symbols** (pictures) to show data. A **key** explains what each symbol means — e.g., 1 star = 2 votes.",
          },
          {
            heading: "Read the graph",
            body: "Count symbols for each category to find **most** and **least**. Use the **scale** (what each symbol represents) to get actual numbers.",
          },
        ],
        keyFormulas: [
          { name: "Picture graph", statement: "Symbols + key/scale = data display." },
          { name: "Read", statement: "Count symbols x scale = actual number." },
        ],
        workedExample: {
          problem: "A graph shows 5 stars for apples. If 1 star = 2 votes, how many votes?",
          solution: "5 stars x 2 = **10 votes**.",
        },
      },
      questions: [
        {
          id: "m2-u6-picture-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'key' on a graph...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is a symbol"
                    },
                    {
                              "id": "b",
                              "text": "explains what each symbol means"
                    },
                    {
                              "id": "c",
                              "text": "is a title"
                    },
                    {
                              "id": "d",
                              "text": "is data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Key = explains symbols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key = explains symbols.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "explains symbols",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "m2-u6-picture-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a picture graph, each symbol represents...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 item always"
                    },
                    {
                              "id": "b",
                              "text": "whatever the key/scale says"
                    },
                    {
                              "id": "c",
                              "text": "10 items"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Scale determines value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scale determines value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "scale determines",
          "commonErrors": [
                    "Assumes always 1."
          ]
},
        },
        {
          id: "m2-u6-picture-graphs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Create a picture graph for data: Apples 8, Bananas 5, Oranges 7. Choose a symbol and key.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "graph",
                              "name": "Create",
                              "statement": "Symbols + key."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates graph with symbols.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Includes key/scale.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., 1 circle = 1 vote; Apples: 8 circles",
          "commonErrors": "No key."
},
        },
        {
          id: "m2-u6-picture-graphs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A graph shows 6 stars. If 1 star = 3 votes, how many votes total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "6 x 3 = 18."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "18",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "18",
          "commonErrors": [
                    "Wrong multiplication."
          ]
},
        },
        {
          id: "m2-u6-picture-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read a picture graph: category A has 4 symbols, B has 7, C has 2. If 1 symbol = 5 votes, find each total and which is most.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "graph",
                              "name": "Read",
                              "statement": "Symbols x scale + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A=20, B=35, C=10.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "B is most.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "A=20, B=35, C=10; B most",
          "commonErrors": "Wrong totals."
},
        },
        {
          id: "m2-u6-picture-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Uses pictures/symbols."
                    },
                    {
                              "id": "b",
                              "text": "Shows data visually."
                    },
                    {
                              "id": "c",
                              "text": "Explains symbols."
                    },
                    {
                              "id": "d",
                              "text": "Picture representing data."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Graph\" means Shows data visually."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Graph\" means Shows data visually.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Graph** = Shows data visually.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-picture-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Explains symbols."
                    },
                    {
                              "id": "b",
                              "text": "Picture representing data."
                    },
                    {
                              "id": "c",
                              "text": "Column showing amount."
                    },
                    {
                              "id": "d",
                              "text": "Uses pictures/symbols."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Picture graph\" means Uses pictures/symbols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture graph\" means Uses pictures/symbols.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Picture graph** = Uses pictures/symbols.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-picture-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture representing data."
                    },
                    {
                              "id": "b",
                              "text": "Explains symbols."
                    },
                    {
                              "id": "c",
                              "text": "Column showing amount."
                    },
                    {
                              "id": "d",
                              "text": "What each symbol means."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Key\" means Explains symbols."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key\" means Explains symbols.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Key** = Explains symbols.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
