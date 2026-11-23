import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m0-u5-lesson-5-5",
  code: "5-5",
  title: "Add and Subtract Word Problems to 20",
  goal: "I CAN solve addition and subtraction word problems within 20.",
  standards: ["K.OA.A.2"],
  vocabulary: [
    { term: "Word problem", definition: "A story problem with numbers." },
    { term: "Within 20", definition: "Answers up to 20." },
    { term: "In all", definition: "Signals addition." },
    { term: "Left", definition: "Signals subtraction." },
    { term: "Equation", definition: "Write the math sentence." },
    { term: "Teen", definition: "11-19 answers." },
    { term: "Strategy", definition: "Make a ten or count on/back." },
  ],
  concepts: [
    {
      id: "m0-u5-add-sub-20-words",
      title: "Word problems within 20",
      skill: "Solve addition and subtraction stories with answers up to 20.",
      lesson: {
        sections: [
          {
            heading: "Read for the operation",
            body: "Look for **'in all'/'more'** (add) or **'left'/'take away'/'fewer'** (subtract). Then use teen decomposition or make-a-ten to solve within 20.",
          },
          {
            heading: "Solve and check",
            body: "Solve the problem, then **check**: does the answer make sense? Is it a teen number or 20? Write the equation.",
          },
        ],
        keyFormulas: [
          { name: "Word problems to 20", statement: "Identify operation, use teen/tens strategy, write equation, check answer." },
        ],
        workedExample: {
          problem: "There are 12 birds. 5 more come. How many in all?",
          solution: "12 + 5 = **17** (12 = 10 + 2; 10 + 7 = 17).",
        },
      },
      questions: [
        {
          id: "m0-u5-add-sub-20-words-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 'There are 9 apples. You get 6 more. How many in all?'",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Apples",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 + 6 = 15 (9 + 1 = 10, 10 + 5 = 15)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 + 6 = 15 (9 + 1 = 10, 10 + 5 = 15).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$15$",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 'There are 14 pencils. You give away 6. How many are left?'",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Pencils",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "14 - 6 = 8 (14 = 10+4; 10+4-6 = 10-2 = 8)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "14 - 6 = 8 (14 = 10+4; 10+4-6 = 10-2 = 8).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 8 red stickers and 7 blue stickers. How many stickers in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Join the groups: 8 + 7 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join the groups: 8 + 7 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$15$",
          "commonErrors": [
                    "Counts only one color."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 8 red stickers and 7 blue stickers. How many stickers in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "15"
                    },
                    {
                              "id": "b",
                              "text": "16"
                    },
                    {
                              "id": "c",
                              "text": "13"
                    },
                    {
                              "id": "d",
                              "text": "18"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 + 7 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 7 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**15**",
          "commonErrors": [
                    "Subtracts instead of adds."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve this word problem and write the equation: 'There are 11 kids. 4 more join. How many kids are there now?'",
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
                                                  "Word problem",
                                                  "11 + 4 = 15."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Word problem",
                                                  "11 + 4 = 15."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves and writes 11 + 4 = 15.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**11 + 4 = 15**"
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word signals subtraction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "in all"
                    },
                    {
                              "id": "b",
                              "text": "left"
                    },
                    {
                              "id": "c",
                              "text": "more"
                    },
                    {
                              "id": "d",
                              "text": "total"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Left' signals subtraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Left' signals subtraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**left**",
          "commonErrors": [
                    "Picks addition word."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answers up to 20."
                    },
                    {
                              "id": "b",
                              "text": "A story problem with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Signals addition."
                    },
                    {
                              "id": "d",
                              "text": "Signals subtraction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word problem\" means A story problem with numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means A story problem with numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = A story problem with numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 20\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Signals addition."
                    },
                    {
                              "id": "b",
                              "text": "Signals subtraction."
                    },
                    {
                              "id": "c",
                              "text": "Write the math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Answers up to 20."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 20\" means Answers up to 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 20\" means Answers up to 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 20** = Answers up to 20.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-add-sub-20-words-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"In all\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Signals subtraction."
                    },
                    {
                              "id": "b",
                              "text": "Signals addition."
                    },
                    {
                              "id": "c",
                              "text": "Write the math sentence."
                    },
                    {
                              "id": "d",
                              "text": "11-19 answers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"In all\" means Signals addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"In all\" means Signals addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**In all** = Signals addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
