import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m0-u6-lesson-6-4",
  code: "6-4",
  title: "Count and Sort Data",
  goal: "I CAN count objects in categories and answer questions about them.",
  standards: ["K.MD.B.3"],
  vocabulary: [
    { term: "Data", definition: "Information we collect by counting or observing." },
    { term: "Category", definition: "A group we count, like 'red blocks'." },
    { term: "Count", definition: "Find how many in each category." },
    { term: "How many", definition: "The number in a category." },
    { term: "Total", definition: "All categories added together." },
    { term: "Question", definition: "Something we ask about the data." },
  ],
  concepts: [
    {
      id: "m0-u6-data-count",
      title: "Counting and sorting data",
      skill: "Sort objects into categories, count each, and answer questions.",
      lesson: {
        sections: [
          {
            heading: "What is data?",
            body: "**Data** is information we collect. When we sort objects into **categories** (red, blue, green) and **count** each, we create data.",
          },
          {
            heading: "Ask questions",
            body: "Once we have data, we can ask questions: 'How many red?' 'Are there more blue than green?' Counting each category answers these.",
          },
        ],
        keyFormulas: [
          { name: "Data", statement: "Sort into categories, count each, total = sum of all categories." },
        ],
        workedExample: {
          problem: "Sort: 3 red, 5 blue, 2 green. How many total?",
          solution: "Red=3, Blue=5, Green=2. Total = 3 + 5 + 2 = **10**.",
        },
      },
      questions: [
        {
          id: "m0-u6-data-count-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort these: 4 red, 3 blue, 5 green. How many objects in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 + 3 + 5 = 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 + 3 + 5 = 12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$12$",
          "commonErrors": [
                    "Adds wrong or misses a category."
          ]
},
        },
        {
          id: "m0-u6-data-count-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Data' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a type of food"
                    },
                    {
                              "id": "b",
                              "text": "information we collect by counting"
                    },
                    {
                              "id": "c",
                              "text": "a game"
                    },
                    {
                              "id": "d",
                              "text": "a shape"
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
          "finalAnswer": "**collected info**",
          "commonErrors": [
                    "Thinks data is unrelated."
          ]
},
        },
        {
          id: "m0-u6-data-count-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sort a group of objects into categories and count each. How many in each category? What's the total?",
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
                                                  "skill",
                                                  "Data",
                                                  "Sort, count categories, total."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Data",
                                                  "Sort, count categories, total."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Sorts and counts correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Red=4, Blue=3; total=7'**"
          ]
},
        },
        {
          id: "m0-u6-data-count-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a category has the most objects, it is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the smallest"
                    },
                    {
                              "id": "b",
                              "text": "the largest category"
                    },
                    {
                              "id": "c",
                              "text": "empty"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Most objects = largest category."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most objects = largest category.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**largest**",
          "commonErrors": [
                    "Thinks most = smallest."
          ]
},
        },
        {
          id: "m0-u6-data-count-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort objects into 3 categories. Count each and find the total. Which category has the most?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Data",
                              "statement": "3 categories + counts + total + most."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Counts all categories.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Finds total and most.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., 'Red=5, Blue=3, Green=2; total=10; red has most.'**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong counts.",
                    "Cannot find total."
          ]
},
        },
        {
          id: "m0-u6-data-count-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A group we count, like 'red blocks'."
                    },
                    {
                              "id": "b",
                              "text": "Information we collect by counting or observing."
                    },
                    {
                              "id": "c",
                              "text": "Find how many in each category."
                    },
                    {
                              "id": "d",
                              "text": "The number in a category."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Information we collect by counting or observing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Information we collect by counting or observing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Information we collect by counting or observing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-data-count-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Category\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find how many in each category."
                    },
                    {
                              "id": "b",
                              "text": "The number in a category."
                    },
                    {
                              "id": "c",
                              "text": "All categories added together."
                    },
                    {
                              "id": "d",
                              "text": "A group we count, like 'red blocks'."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Category\" means A group we count, like 'red blocks'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Category\" means A group we count, like 'red blocks'.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Category** = A group we count, like 'red blocks'.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-data-count-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number in a category."
                    },
                    {
                              "id": "b",
                              "text": "Find how many in each category."
                    },
                    {
                              "id": "c",
                              "text": "All categories added together."
                    },
                    {
                              "id": "d",
                              "text": "Something we ask about the data."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Find how many in each category."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Find how many in each category.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Find how many in each category.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
