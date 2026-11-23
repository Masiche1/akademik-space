import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mpk-u3-lesson-3-3",
  code: "3-3",
  title: "Add and Subtract Stories",
  goal: "I CAN solve simple stories about joining and taking away.",
  standards: ["ELOF-PK.MATH.WORD.1"],
  vocabulary: [
    { term: "Story problem", definition: "A math question told as a story." },
    { term: "Join story", definition: "A story where groups are put together (add)." },
    { term: "Take-away story", definition: "A story where things are removed (subtract)." },
    { term: "Question", definition: "What the story asks you to find." },
    { term: "Act out", definition: "Use objects or fingers to show the story." },
  ],
  concepts: [
    {
      id: "mpk-u3-add-sub-stories",
      title: "Story problems",
      skill: "Decide whether a story means add or subtract, then solve.",
      lesson: {
        sections: [
          {
            heading: "Join or take away?",
            body: "If the story says 'more', 'in all', 'altogether' — **add**. If it says 'left', 'remain', 'take away' — **subtract**. Act it out with objects to be sure.",
          },
          {
            heading: "Answer the question",
            body: "Read the story, act it out, then answer the question asked. Always check: does your answer match the story?",
          },
        ],
        keyFormulas: [
          { name: "Join words", statement: "in all / more / altogether -> add" },
          { name: "Take-away words", statement: "left / remain / take away -> subtract" },
        ],
        workedExample: {
          problem: "Mia has 3 stickers. Ben gives her 2 more. How many stickers does Mia have?",
          solution: "'Gives more' means add: 3 + 2 = **5 stickers**.",
        },
      },
      questions: [
        {
          id: "mpk-u3-add-sub-stories-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tom has 4 marbles. He finds 1 more. How many marbles?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "4"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Finds more' = add: 4 + 1 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Finds more' = add: 4 + 1 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Subtracts because 'finds' sounds like losing."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sara has 5 crayons. She gives 2 to a friend. How many crayons does she have left?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Gives away' = subtract: 5 - 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Gives away' = subtract: 5 - 2 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Adds 5 + 2 = 7."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 dogs and 3 cats. How many animals in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Join: 2 + 3 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join: 2 + 3 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counts only the dogs."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "6 birds are on a branch. 2 fly away. How many birds are left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Left",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away: 6 - 2 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away: 6 - 2 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds 6 + 2."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A plate has 3 cookies. Mom puts 2 more cookies on the plate. How many cookies are on the plate now?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Read for join/take-away words",
                              "statement": "'Puts more on' means join -> add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "3 + 2 = 5 cookies.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "'Puts more' signals addition.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**5 cookies**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Subtracts because cookies are 'on' a plate.",
                    "Ignores the 2 added cookies."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Story problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A story where groups are put together (add)."
                    },
                    {
                              "id": "b",
                              "text": "A math question told as a story."
                    },
                    {
                              "id": "c",
                              "text": "A story where things are removed (subtract)."
                    },
                    {
                              "id": "d",
                              "text": "What the story asks you to find."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Story problem\" means A math question told as a story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Story problem\" means A math question told as a story.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Story problem** = A math question told as a story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Join story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A story where things are removed (subtract)."
                    },
                    {
                              "id": "b",
                              "text": "What the story asks you to find."
                    },
                    {
                              "id": "c",
                              "text": "Use objects or fingers to show the story."
                    },
                    {
                              "id": "d",
                              "text": "A story where groups are put together (add)."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Join story\" means A story where groups are put together (add)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Join story\" means A story where groups are put together (add).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Join story** = A story where groups are put together (add).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-add-sub-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Take-away story\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What the story asks you to find."
                    },
                    {
                              "id": "b",
                              "text": "A story where things are removed (subtract)."
                    },
                    {
                              "id": "c",
                              "text": "Use objects or fingers to show the story."
                    },
                    {
                              "id": "d",
                              "text": "A math question told as a story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Take-away story\" means A story where things are removed (subtract)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Take-away story\" means A story where things are removed (subtract).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Take-away story** = A story where things are removed (subtract).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
