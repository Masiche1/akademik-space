import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "m3-u7-lesson-7-3",
  code: "7-3",
  title: "Interpreting Graphs",
  goal: "I CAN read and answer questions about bar graphs.",
  standards: ["3.MD.B.3", "3.MD.B.4"],
  vocabulary: [
    { term: "Interpret", definition: "Read what graph shows." },
    { term: "Most", definition: "Highest bar." },
    { term: "Least", definition: "Lowest bar." },
    { term: "Compare", definition: "Difference between bars." },
    { term: "Total", definition: "Add all bars." },
    { term: "Scale", definition: "Numbers on side." },
    { term: "Question", definition: "What we ask." },
    { term: "Answer", definition: "What we find." },
  ],
  concepts: [
    {
      id: "m3-u7-interpret-graphs",
      title: "Interpreting graphs",
      skill: "Read bar graphs and answer questions about the data.",
      lesson: {
        sections: [
          {
            heading: "Reading a graph",
            body: "To **interpret** a bar graph, look at the **title**, **labels**, and **scale**. The **tallest** bar shows the **most**; the **shortest** shows the **least**.",
          },
          {
            heading: "Answering questions",
            body: "To compare: subtract the smaller from the larger. To find total: add all bars. 'How many more cats than dogs?' = cats bar - dogs bar.",
          },
        ],
        keyFormulas: [
          { name: "Most", statement: "Tallest bar." },
          { name: "Least", statement: "Shortest bar." },
          { name: "Compare", statement: "Subtract bar heights." },
        ],
        workedExample: {
          problem: "Graph: apples 8, bananas 5, grapes 3. How many more like apples than grapes?",
          solution: "$8 - 3 = 5$ more like apples.",
        },
      },
      questions: [
        {
          id: "m3-u7-interpret-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A graph shows cats 12, dogs 9, fish 4. Which is most popular?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dogs"
                    },
                    {
                              "id": "b",
                              "text": "Fish"
                    },
                    {
                              "id": "c",
                              "text": "Cats"
                    },
                    {
                              "id": "d",
                              "text": "Equal"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cats have tallest bar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cats have tallest bar.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cats",
          "commonErrors": [
                    "Picks smallest."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Graph: red 7, blue 5, green 9. How many more chose green than blue?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "14"
                    },
                    {
                              "id": "d",
                              "text": "16"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 - 5 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 5 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Graph: spring 10, summer 14, fall 8, winter 6. How many more chose summer than winter? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "14 - 6 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Graph: math 15, science 12, art 8. What is the total? (Write just the number)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 35
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "15 + 12 + 8 = 35."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "35",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "35",
          "commonErrors": [
                    "Wrong total."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a bar graph from data and answer: which is most/least popular? How many more is most than least?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interpret",
                              "statement": "Most + least + difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers most + least.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds difference.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**Most: X; Least: Y; Difference: Z**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Interpret\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Highest bar."
                    },
                    {
                              "id": "b",
                              "text": "Read what graph shows."
                    },
                    {
                              "id": "c",
                              "text": "Lowest bar."
                    },
                    {
                              "id": "d",
                              "text": "Difference between bars."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Interpret\" means Read what graph shows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Interpret\" means Read what graph shows.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Interpret** = Read what graph shows.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Most\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lowest bar."
                    },
                    {
                              "id": "b",
                              "text": "Difference between bars."
                    },
                    {
                              "id": "c",
                              "text": "Add all bars."
                    },
                    {
                              "id": "d",
                              "text": "Highest bar."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Most\" means Highest bar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Most\" means Highest bar.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Most** = Highest bar.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u7-interpret-graphs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Least\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Difference between bars."
                    },
                    {
                              "id": "b",
                              "text": "Lowest bar."
                    },
                    {
                              "id": "c",
                              "text": "Add all bars."
                    },
                    {
                              "id": "d",
                              "text": "Numbers on side."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Least\" means Lowest bar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Least\" means Lowest bar.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Least** = Lowest bar.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
