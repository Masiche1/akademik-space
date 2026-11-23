import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "m3-u7-lesson-7-4",
  code: "7-4",
  title: "Picture Graphs",
  goal: "I CAN read and make picture graphs.",
  standards: ["3.MD.B.3"],
  vocabulary: [
    { term: "Picture graph", definition: "Graph using pictures." },
    { term: "Symbol", definition: "Picture representing data." },
    { term: "Key", definition: "Shows what symbol means." },
    { term: "Count", definition: "Number of symbols." },
    { term: "Scale", definition: "Each symbol = how many." },
    { term: "Interpret", definition: "Read what graph shows." },
    { term: "Most", definition: "Most symbols." },
    { term: "Least", definition: "Fewest symbols." },
  ],
  concepts: [
    {
      id: "m3-u7-picture-graphs",
      title: "Picture graphs",
      skill: "Read and create picture graphs where symbols represent data.",
      lesson: {
        sections: [
          {
            heading: "What is a picture graph?",
            body: "A **picture graph** uses **symbols** (pictures) to show data. A **key** tells what each symbol represents — e.g., one star = 2 votes.",
          },
          {
            heading: "Reading picture graphs",
            body: "Count the **symbols** for each category and multiply by the **key** value. If one star = 2 votes and there are 4 stars, that's 8 votes.",
          },
        ],
        keyFormulas: [
          { name: "Picture graph", statement: "Symbols x key = count." },
          { name: "Key", statement: "What each symbol means." },
        ],
        workedExample: {
          problem: "Picture graph: dogs 3 symbols, cats 5 symbols. Key: 1 symbol = 2 animals. How many dogs?",
          solution: "$3 \\times 2 = 6$ dogs.",
        },
      },
      questions: [
        {
          id: "m3-u7-picture-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a picture graph, the 'key' tells us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "what each symbol represents"
                    },
                    {
                              "id": "c",
                              "text": "the colors"
                    },
                    {
                              "id": "d",
                              "text": "the total"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Key = symbol meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key = symbol meaning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "symbol meaning",
          "commonErrors": [
                    "Confuses with title."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Picture graph: 4 stars, key = 1 star = 2 votes. How many votes?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "2"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 x 2 = 8 votes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 x 2 = 8 votes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Forgets to multiply."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Picture graph: 5 symbols for cats, key = 1 symbol = 3 cats. How many cats? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "5 x 3 = 15 cats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "15",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Picture graph: dogs 3 symbols, cats 5 symbols. Key = 1 symbol = 2 animals. How many animals total? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 16
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "(3+5) x 2 = 16."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "16",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "16",
          "commonErrors": [
                    "Wrong total."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a picture graph for data: math 8, science 6, art 4. Choose a key and draw symbols.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Picture graph",
                              "statement": "Choose key + draw."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses key.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Draws symbols correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., key=2; math=4, science=3, art=2 symbols**",
          "commonErrors": [
                    "Wrong key.",
                    "Wrong symbols."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture representing data."
                    },
                    {
                              "id": "b",
                              "text": "Graph using pictures."
                    },
                    {
                              "id": "c",
                              "text": "Shows what symbol means."
                    },
                    {
                              "id": "d",
                              "text": "Number of symbols."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Picture graph\" means Graph using pictures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture graph\" means Graph using pictures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Picture graph** = Graph using pictures.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Symbol\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows what symbol means."
                    },
                    {
                              "id": "b",
                              "text": "Number of symbols."
                    },
                    {
                              "id": "c",
                              "text": "Each symbol = how many."
                    },
                    {
                              "id": "d",
                              "text": "Picture representing data."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Symbol\" means Picture representing data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Symbol\" means Picture representing data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Symbol** = Picture representing data.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-picture-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number of symbols."
                    },
                    {
                              "id": "b",
                              "text": "Shows what symbol means."
                    },
                    {
                              "id": "c",
                              "text": "Each symbol = how many."
                    },
                    {
                              "id": "d",
                              "text": "Read what graph shows."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Key\" means Shows what symbol means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key\" means Shows what symbol means.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Key** = Shows what symbol means.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
