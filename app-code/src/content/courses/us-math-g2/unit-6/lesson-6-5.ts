import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m2-u6-lesson-6-5",
  code: "6-5",
  title: "Data Review",
  goal: "I CAN collect data and represent it in graphs.",
  standards: ["2.MD.D.10"],
  vocabulary: [
    { term: "Data", definition: "Information collected." },
    { term: "Collect", definition: "Gather info." },
    { term: "Tally", definition: "Counting mark." },
    { term: "Picture graph", definition: "Symbols + key." },
    { term: "Bar graph", definition: "Bars + axis." },
    { term: "Scale", definition: "What each unit means." },
    { term: "Most", definition: "Greatest amount." },
    { term: "Least", definition: "Smallest amount." },
  ],
  concepts: [
    {
      id: "m2-u6-data-review",
      title: "Data review",
      skill: "Combine collecting data and graphing.",
      lesson: {
        sections: [
          {
            heading: "All data skills",
            body: "We **collect** data (count, tally), **organize** it, and **represent** it in **picture** or **bar graphs** with keys and scales.",
          },
          {
            heading: "Put it together",
            body: "Collect data, create graphs, read them.",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Collect + organize + graph = data mastery." },
        ],
        workedExample: {
          problem: "Collect data on favorite pets, make a bar graph, find most/least.",
          solution: "Collect -> tally -> graph -> most/least.",
        },
      },
      questions: [
        {
          id: "m2-u6-data-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Data skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "collect, organize, graph"
                    },
                    {
                              "id": "c",
                              "text": "only graphs"
                    },
                    {
                              "id": "d",
                              "text": "only tallying"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All data skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All data skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All data skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u6-data-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Collect data on a topic, make a bar graph, and answer: which is most? least?",
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
                                                  "data",
                                                  "All skills",
                                                  "Collect + graph + read."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "data",
                                                  "All skills",
                                                  "Collect + graph + read."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Collects + graphs.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answers most/least.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "e.g., Cats most (9), Fish least (3)"
          ]
},
        },
        {
          id: "m2-u6-data-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A graph's 'scale' tells us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the title"
                    },
                    {
                              "id": "b",
                              "text": "what each unit represents"
                    },
                    {
                              "id": "c",
                              "text": "the colors"
                    },
                    {
                              "id": "d",
                              "text": "the date"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Scale = unit value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Scale = unit value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "unit value",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u6-data-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gather info."
                    },
                    {
                              "id": "b",
                              "text": "Information collected."
                    },
                    {
                              "id": "c",
                              "text": "Counting mark."
                    },
                    {
                              "id": "d",
                              "text": "Symbols + key."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Information collected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information collected.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information collected.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-data-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Collect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Counting mark."
                    },
                    {
                              "id": "b",
                              "text": "Symbols + key."
                    },
                    {
                              "id": "c",
                              "text": "Bars + axis."
                    },
                    {
                              "id": "d",
                              "text": "Gather info."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Collect\" means Gather info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Collect\" means Gather info.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Collect** = Gather info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-data-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tally\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Symbols + key."
                    },
                    {
                              "id": "b",
                              "text": "Counting mark."
                    },
                    {
                              "id": "c",
                              "text": "Bars + axis."
                    },
                    {
                              "id": "d",
                              "text": "What each unit means."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tally\" means Counting mark."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tally\" means Counting mark.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tally** = Counting mark.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-data-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bars + axis."
                    },
                    {
                              "id": "b",
                              "text": "What each unit means."
                    },
                    {
                              "id": "c",
                              "text": "Greatest amount."
                    },
                    {
                              "id": "d",
                              "text": "Symbols + key."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Picture graph\" means Symbols + key."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture graph\" means Symbols + key.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Picture graph** = Symbols + key.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-data-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bar graph\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What each unit means."
                    },
                    {
                              "id": "b",
                              "text": "Bars + axis."
                    },
                    {
                              "id": "c",
                              "text": "Greatest amount."
                    },
                    {
                              "id": "d",
                              "text": "Smallest amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bar graph\" means Bars + axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bar graph\" means Bars + axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bar graph** = Bars + axis.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
