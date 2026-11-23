import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m2-u6-lesson-6-4",
  code: "6-4",
  title: "Interpreting Graphs",
  goal: "I CAN answer questions using data from graphs.",
  standards: ["2.MD.D.10"],
  vocabulary: [
    { term: "Interpret", definition: "Read and understand." },
    { term: "Graph", definition: "Shows data." },
    { term: "Data", definition: "Information." },
    { term: "Compare", definition: "See which is more." },
    { term: "Difference", definition: "How much more/less." },
    { term: "Total", definition: "Sum of all." },
    { term: "Most", definition: "Greatest amount." },
    { term: "Least", definition: "Smallest amount." },
  ],
  concepts: [
    {
      id: "m2-u6-interpreting-graphs",
      title: "Interpreting graphs",
      skill: "Read graphs to answer questions about data.",
      lesson: {
        sections: [
          {
            heading: "Read the data",
            body: "Graphs show **data** visually. **Interpret** means read and understand what the graph tells us — find **most**, **least**, **totals**, and **differences**.",
          },
          {
            heading: "Answer questions",
            body: "Use the graph to answer: 'Which has the most?' 'How many more than X?' 'What is the total?'",
          },
        ],
        keyFormulas: [
          { name: "Interpret", statement: "Read graph -> find most/least/total/difference." },
        ],
        workedExample: {
          problem: "Graph: Apples 8, Bananas 5, Oranges 7. How many more apples than bananas?",
          solution: "8 - 5 = **3 more apples**.",
        },
      },
      questions: [
        {
          id: "m2-u6-interpreting-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Interpret' a graph means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make a graph"
                    },
                    {
                              "id": "b",
                              "text": "read and understand what it shows"
                    },
                    {
                              "id": "c",
                              "text": "color it"
                    },
                    {
                              "id": "d",
                              "text": "erase it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Interpret = read/understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interpret = read/understand.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "read/understand",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u6-interpreting-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Graph: Cats 9, Dogs 6, Fish 3. How many more cats than fish?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "12"
                    },
                    {
                              "id": "d",
                              "text": "9"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 - 3 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 3 = 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u6-interpreting-graphs-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read this graph data: Red 7, Blue 4, Green 9. Find the total and which color has the most.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "graph",
                              "name": "Interpret",
                              "statement": "Total + most."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total: 7+4+9=20.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Green has most (9).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Total 20; Green most",
          "commonErrors": "Wrong total or most."
},
        },
        {
          id: "m2-u6-interpreting-graphs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Graph: A=10, B=6, C=8. How many more A than B?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "10 - 6 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u6-interpreting-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Given graph data: Monday 5, Tuesday 8, Wednesday 6, Thursday 9. Find total and the day with most. How many more than the least?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "graph",
                              "name": "Interpret",
                              "statement": "Total + most + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total: 5+8+6+9=28.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Thursday most (9); 9-5=4 more than Monday.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Total 28; Thursday most; 4 more",
          "commonErrors": "Wrong values."
},
        },
        {
          id: "m2-u6-interpreting-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interpret\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows data."
                    },
                    {
                              "id": "b",
                              "text": "Read and understand."
                    },
                    {
                              "id": "c",
                              "text": "Information."
                    },
                    {
                              "id": "d",
                              "text": "See which is more."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interpret\" means Read and understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interpret\" means Read and understand.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interpret** = Read and understand.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-interpreting-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Information."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "How much more/less."
                    },
                    {
                              "id": "d",
                              "text": "Shows data."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Graph\" means Shows data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Graph\" means Shows data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Graph** = Shows data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-interpreting-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See which is more."
                    },
                    {
                              "id": "b",
                              "text": "Information."
                    },
                    {
                              "id": "c",
                              "text": "How much more/less."
                    },
                    {
                              "id": "d",
                              "text": "Sum of all."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
