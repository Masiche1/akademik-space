import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m2-u6-lesson-6-1",
  code: "6-1",
  title: "Collecting Data",
  goal: "I CAN collect and organize data.",
  standards: ["2.MD.D.10"],
  vocabulary: [
    { term: "Data", definition: "Information collected." },
    { term: "Collect", definition: "Gather information." },
    { term: "Tally", definition: "Mark for counting." },
    { term: "Survey", definition: "Ask questions." },
    { term: "Organize", definition: "Put in order." },
    { term: "Count", definition: "Find how many." },
    { term: "Record", definition: "Write down." },
    { term: "Chart", definition: "Show data." },
  ],
  concepts: [
    {
      id: "m2-u6-collect-data",
      title: "Collecting data",
      skill: "Collect data by counting, tallying and recording.",
      lesson: {
        sections: [
          {
            heading: "Gather information",
            body: "**Data** is information we collect. We **collect** it by counting, **tallying** (making marks), and **recording** what we find.",
          },
          {
            heading: "Organize data",
            body: "Put data in order — by **counting** each category and recording the totals.",
          },
        ],
        keyFormulas: [
          { name: "Collect data", statement: "Count + tally + record = organized data." },
        ],
        workedExample: {
          problem: "Count how many students like each fruit: apple, banana, orange.",
          solution: "Apple: 8, Banana: 5, Orange: 7.",
        },
      },
      questions: [
        {
          id: "m2-u6-collect-data-q1",
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
                              "text": "a number only"
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
          "finalAnswer": "collected info",
          "commonErrors": [
                    "Picks wrong meaning."
          ]
},
        },
        {
          id: "m2-u6-collect-data-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'tally' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a graph"
                    },
                    {
                              "id": "b",
                              "text": "a mark for counting"
                    },
                    {
                              "id": "c",
                              "text": "a number"
                    },
                    {
                              "id": "d",
                              "text": "a survey"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tally = counting mark."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tally = counting mark.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "counting mark",
          "commonErrors": [
                    "Picks wrong tool."
          ]
},
        },
        {
          id: "m2-u6-collect-data-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Survey your classmates: what's their favorite color? Record the data in a tally chart.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "data",
                              "name": "Collect",
                              "statement": "Survey + tally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collects data.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Records in tally/chart.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Red: 5, Blue: 7, Green: 4",
          "commonErrors": "No data collected."
},
        },
        {
          id: "m2-u6-collect-data-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "If 8 students like apples and 5 like bananas, how many total votes?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 13
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "8 + 5 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "13",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "13",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u6-collect-data-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Collect data on shoe sizes in your class. Make a tally chart and find the most common size.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "data",
                              "name": "Collect + organize",
                              "statement": "Tally + find mode."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Collects + tallies.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Finds most common.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Size 3 most common with 7 votes",
          "commonErrors": "No chart."
},
        },
        {
          id: "m2-u6-collect-data-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gather information."
                    },
                    {
                              "id": "b",
                              "text": "Information collected."
                    },
                    {
                              "id": "c",
                              "text": "Mark for counting."
                    },
                    {
                              "id": "d",
                              "text": "Ask questions."
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
          id: "m2-u6-collect-data-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Collect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mark for counting."
                    },
                    {
                              "id": "b",
                              "text": "Ask questions."
                    },
                    {
                              "id": "c",
                              "text": "Put in order."
                    },
                    {
                              "id": "d",
                              "text": "Gather information."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Collect\" means Gather information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Collect\" means Gather information.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Collect** = Gather information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u6-collect-data-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tally\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask questions."
                    },
                    {
                              "id": "b",
                              "text": "Mark for counting."
                    },
                    {
                              "id": "c",
                              "text": "Put in order."
                    },
                    {
                              "id": "d",
                              "text": "Find how many."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tally\" means Mark for counting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tally\" means Mark for counting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tally** = Mark for counting.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
