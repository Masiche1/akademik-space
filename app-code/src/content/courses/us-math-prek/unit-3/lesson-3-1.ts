import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mpk-u3-lesson-3-1",
  code: "3-1",
  title: "Join Groups to Add",
  goal: "I CAN put two groups together and say how many in all.",
  standards: ["ELOF-PK.MATH.ADD.1"],
  vocabulary: [
    { term: "Add", definition: "Put groups together to find how many in all." },
    { term: "Join", definition: "Combine two groups into one." },
    { term: "In all", definition: "The total after joining." },
    { term: "Plus", definition: "The addition sign: +" },
    { term: "Sum", definition: "The answer to an addition problem." },
  ],
  concepts: [
    {
      id: "mpk-u3-join-groups",
      title: "Joining groups",
      skill: "Add two small groups within 10.",
      lesson: {
        sections: [
          {
            heading: "Put together",
            body: "When we add, we **join** two groups into one big group. 2 apples + 1 apple = 3 apples. Count all the objects to check.",
          },
          {
            heading: "Use fingers or objects",
            body: "Hold up fingers for the first group, then add fingers for the second. Count all your fingers to find the sum.",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "part + part = whole (in all)" },
        ],
        workedExample: {
          problem: "2 birds + 2 birds = ?",
          solution: "Join: 2 + 2 = **4 birds**.",
        },
      },
      questions: [
        {
          id: "mpk-u3-join-groups-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 1 + 2?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 1: 2, ..., 3. 1 + 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 1: 2, ..., 3. 1 + 2 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 1 + 2?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 1 + 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 1 + 2 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 2 + 2?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 2: 3, ..., 4. 2 + 2 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 2: 3, ..., 4. 2 + 2 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "3 bears + 1 bear = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 + 1 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 + 1 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Adds the wrong numbers."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "1 red ball + 3 blue balls = ? balls in all",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "1 + 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1 + 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counts only the red ball."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q6",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You have 2 crayons. Your friend gives you 2 more. How many crayons do you have now?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Join groups",
                              "statement": "Put both groups together and count all."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "2 + 2 = 4 crayons.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Counted all 4 crayons to check.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**4 crayons**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Adds 2 + 2 but says 3.",
                    "Counts only one color."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine two groups into one."
                    },
                    {
                              "id": "b",
                              "text": "Put groups together to find how many in all."
                    },
                    {
                              "id": "c",
                              "text": "The total after joining."
                    },
                    {
                              "id": "d",
                              "text": "The addition sign: +"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Put groups together to find how many in all."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Put groups together to find how many in all.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Put groups together to find how many in all.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-join-groups-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Join\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total after joining."
                    },
                    {
                              "id": "b",
                              "text": "The addition sign: +"
                    },
                    {
                              "id": "c",
                              "text": "The answer to an addition problem."
                    },
                    {
                              "id": "d",
                              "text": "Combine two groups into one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Join\" means Combine two groups into one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Join\" means Combine two groups into one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Join** = Combine two groups into one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
